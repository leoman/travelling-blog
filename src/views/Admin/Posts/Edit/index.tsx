import React, { useState, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Link, useParams } from "react-router-dom"
import {
    Container,
    Row,
    Col,
    Jumbotron,
    H1,
    Hr,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Alert,
} from '@bootstrap-styled/v4'
import { Post } from '../../../../types/post'
import Form from '../Form'
import { ControlBar } from './styles'
import { GET_POST, EDIT_POST, ADD_PHOTO, DELETE_PHOTO } from '../../../../queries'

const Edit: React.FC = (): React.ReactElement => {

  const { id } = useParams<{ id: string }>()
  const [ post, setPost ] = useState<Post | null>(null)
  const [ message, setMessage ] = useState<string>('')
  const { loading, error, data } = useQuery(GET_POST, { variables: { id: id } })
  const [ editPost ] = useMutation(EDIT_POST)
  const [ addPhoto ] = useMutation(ADD_PHOTO)
  const [ deletePhoto ] = useMutation(DELETE_PHOTO)

  useEffect(() => {
    if (data && data.post) {
      setPost(data.post)
    }
  }, [loading, data])

  const onChange = (post: Post) => setPost(post)

  const onSave = async () => {
    const editPostVariables = {
      ...post,
      ...post.location,
    }

    try {
      const response = await editPost({ variables: editPostVariables })
      if(response && !response.data.error) {
        setMessage('Post has been updated')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSaveImage = async (currentPhoto: string) => {
    const response = await addPhoto({ variables: { id, photo: currentPhoto } })

    if(response.data.addPhoto) {
      setMessage('Post has been updated')
      return response
    }
    return false
  }

  const onDeleteImage = async (id: number) => await deletePhoto({ variables: { id } })

  if (loading || error || !post) return null

  return (
    <Container>
      <Row>
        <Col lg="12">
          <Jumbotron>
            <H1 className="display-4">Admin: Edit Post</H1>
            <Hr className="my-4" />
          </Jumbotron>
        </Col>
      </Row>

      <Row>
        <Col>
          {message && <Alert color="success" isOpen={message} uncontrolled autoHideDuration="5000">{message}</Alert>}

          <Breadcrumb>
            <BreadcrumbItem><Link to={'/admin/posts'}>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Edit Post</BreadcrumbItem>
          </Breadcrumb>

          <ControlBar>
            <Button onClick={() => onSave()} outline="true" color="primary">Save Post</Button>
          </ControlBar>

          <Form post={post} onPostChange={onChange} onSaveImage={onSaveImage} onDeleteImage={onDeleteImage} />
        </Col>
      </Row>
    </Container>
  )
}

export default Edit