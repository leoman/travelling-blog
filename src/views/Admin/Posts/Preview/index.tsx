import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useParams, useHistory } from "react-router-dom"
import {
  Card,
  CardText,
} from '@bootstrap-styled/v4'
import Loading from '../../../../components/Loading'
import ScrollProgress from '../../../../components/ScrollProgress'
import { PostViewWrapper, ContentWrapper } from '../../../Post/styles'
import PostHeader from '../../../../components/PostHeader'
import PostContent from '../../../../components/PostContent'
import { GET_POST } from '../../../../queries'
import { Post } from '../../../../types/post'


const PostView: React.FC = (): React.ReactElement => {

  const { slug } = useParams<{ slug: string }>()
  const { loading, error, data } = useQuery(GET_POST, { variables: { slug } })
  const history = useHistory()

  if (loading || error) return <Loading fade={false} />

  if (!data.post) return null

  const { post } = data
  const { content, photos }: Post = post

  return (
    <PostViewWrapper>

      <ScrollProgress />

      <Card className="text-center" block color="info" backgroundColor={"d9534f"} >
        <CardText>This is a preview! <button onClick={() => history.push("/admin/posts")}>Back to Posts</button>.</CardText>
      </Card>

      <PostHeader
        post={post}
      />

      <ContentWrapper>
        <PostContent content={content} photos={photos} />
      </ContentWrapper>
    </PostViewWrapper>
  )
}

export default PostView