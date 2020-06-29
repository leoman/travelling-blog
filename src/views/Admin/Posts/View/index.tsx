import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';
import moment from 'moment'
import {
    Container,
    Row,
    Col,
    Thead,
    Tr,
    Td,
    Th,
    Tbody,
    Jumbotron,
    H1,
    P,
    Hr,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@bootstrap-styled/v4'
import { Link } from "react-router-dom"
import Loading from '../../../../components/Loading';
import { Table, ControlBar } from './styles'
import { Post } from '../../../../types/post'
import { All_POSTS, DELETE_POST } from '../../../../queries'

const ListView: React.FC = (): React.ReactElement => {

  const [modal, setModal] = useState<boolean>(false)
  const [id, setId] = useState<number | null>(null)
  const { loading, error, data, refetch } = useQuery(All_POSTS);
  const [ deletePost ] = useMutation(DELETE_POST);


  const showDeleteModal = (id: number): void => {
    setModal(true)
    setId(id)
  }

  const closeDeleteModal = (): void => {
    setModal(false)
    setId(null)
  }

  const onDelete = async (id: number) => {
    const response = await deletePost({ variables: { id } })
    if (response.data.deletePost.success) {
      refetch()
    }
  }

  const confirmDelete = (): void => {
    if(!id) return null

    onDelete(id)
    closeDeleteModal()
  }

  if (loading || error) return <Loading fade={false} />;

  if (!data.allPosts) return null

  return (
    <Container>
      <Row>
        <Col lg="12">
        <Jumbotron>
          <H1 className="display-4">Admin: Posts</H1>
          <P lead>Please use the list below to adminitor changes to Posts.</P>
          <Hr className="my-4" />
        </Jumbotron>
        </Col>
      </Row>

      <Modal isOpen={modal} toggle={() => closeDeleteModal()}>
        <ModalHeader toggle={() => closeDeleteModal()}>Delete Post</ModalHeader>
        <ModalBody>
          This action cannot be un done.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => confirmDelete()}>Confirm Delete</Button>
          <Button color="secondary" onClick={() => closeDeleteModal()}>Cancel</Button>
        </ModalFooter>
      </Modal>

      <Row>
        <Col lg="12">

          <Breadcrumb>
            <BreadcrumbItem active>Home</BreadcrumbItem>
          </Breadcrumb>

          <ControlBar>
            <Link to={`/admin/posts/add`}>
              <Button outline="true" color="primary">Add Post</Button>
            </Link>
          </ControlBar>
        </Col>
      </Row>

      <Row>
        <Col lg="12">
          <Table>
            <Thead defaultBg>
              <Tr>
                <Th>
                  Title
                </Th>
                <Th>
                  Status
                </Th>
                <Th>
                  Date
                </Th>
                <Th colSpan={3}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.allPosts.map(({ id, slug, title, order, status }: Post, i: number) => (
                <Tr key={i.toString()}>
                  <Td>{title}</Td>
                  <Td>{status}</Td>
                  <Td>{moment(Number(order)).format("MMMM Do YYYY")}</Td>
                  <Td>
                    <Link to={`/admin/posts/preview/${slug}`}>
                      <Button outline="true" color="primary">Preview</Button>
                    </Link>
                  </Td>
                  <Td>
                    <Link to={`/admin/posts/edit/${id}`}>
                      <Button outline="true" color="primary">Edit</Button>
                    </Link>
                  </Td>
                  <Td><Button onClick={() => showDeleteModal(id)} outline={true} color="danger">Delete</Button></Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )

}

export default ListView