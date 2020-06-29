import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import { useMutation } from '@apollo/react-hooks'
import { Post, initialState } from '../../../../types/post'
import Form from '../Form'
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
} from '@bootstrap-styled/v4'
import { ControlBar } from '../Edit/styles'
import { CREATE_POST, All_POSTS } from '../../../../queries'


const Create: React.FC = (): React.ReactElement => {

  const history = useHistory()
  const [post, setPost] = useState<Post>(initialState)
  const [createPost] = useMutation(CREATE_POST, {
    update(cache, { data: { addPost } }) {
      const { allPosts } = cache.readQuery({ query: All_POSTS })
      cache.writeQuery({
        query: All_POSTS,
        data: { allPosts: allPosts.concat([addPost]) },
      })
    }
  })

  const onChange = (post: Post) => setPost(post)

  const onSave = async () => {
    if (!post) return null

    const createPostVariables = {
      ...post,
      ...post.location
    }

    try {
      const response = await createPost({ variables: createPostVariables })
      if(response && !response.data.error) {
        history.push('/admin/posts')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col lg="12">
          <Jumbotron>
            <H1 className="display-4">Admin: Add Post</H1>
            <Hr className="my-4" />
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <Breadcrumb>
              <BreadcrumbItem><Link to={'/admin/posts'}>Home</Link></BreadcrumbItem>
              <BreadcrumbItem active>Add Post</BreadcrumbItem>
            </Breadcrumb>
          </div>

          <ControlBar>
            <Button onClick={() => onSave()} outline="true" color="primary">Save Post</Button>
          </ControlBar>

          <Form post={post} onPostChange={onChange} />
        </Col>
      </Row>
    </Container>
  )

}

export default Create