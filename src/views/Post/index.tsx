import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from "react-router-dom";
import { GET_POST } from '../../queries'
import ScrollProgress from '../../components/ScrollProgress';
import ScrollTop from '../../components/ScrollTop';
import { PostViewWrapper, ContentWrapper, FacebookComments } from './styles';
import PostHeader from '../../components/PostHeader';
import PostContent from '../../components/PostContent';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import { Post } from '../../types/post';

declare global {
  interface Window {
    FB: {
      XFBML: {
        parse(): void
      }
    }
  }
}


const PostView: React.FC = () => {
  const [ fade, setFade ] = useState<boolean>(false)
  const [ show, setShow ] = useState<boolean>(false)
  const { slug } = useParams<{ slug: string }>();
  const { loading, error, data } = useQuery(GET_POST, { variables: { slug } });

  useEffect(() => {
    if (!loading) {
      setFade(true)
      setTimeout(() => window.FB.XFBML.parse(), 2000);
    }
    if (fade && !error) {
      setTimeout(() => setShow(true), 1000)
    }
  }, [loading, fade, error])

  if (loading || !show || error) return <Loading fade={fade} />;

  if (!data.post) return null;

  const { post } = data
  const { content, photos }: Post = post

  return (
    <PostViewWrapper>

      <ScrollProgress />
      <ScrollTop />

      <PostHeader post={post} />

      <ContentWrapper>
          {/* <Link to={'/'}>Back to homepage</Link> */}
          <PostContent content={content} photos={photos} />
      </ContentWrapper>

      <FacebookComments className="fb-comments" data-href={`http://kirstyandpete.com/posts/${slug}`} data-width="100%" data-numposts="5"></FacebookComments>
      <Footer />

    </PostViewWrapper>
  );
}

export default PostView;