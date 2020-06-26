import React from 'react';
import moment from 'moment';
import { Post } from '../../types/post'
import { Header, TitleWrapper, HoverWrapper, TextWrapper, Days, Title, Location } from './styles';

interface Props {
  post: Post
}

export const PostHeader: React.FC = ({ post : { photo, location: { location }, date, title, titleColour } }: Props ): React.ReactElement => (
    <TitleWrapper
        style={{backgroundImage: `url(${photo})`}}
    >
        <Header>
            <HoverWrapper>
                <TextWrapper>
                    <Days titleColour={titleColour}>{moment(Number(date)).format("MMMM Do YYYY")}</Days>
                    <Title titleColour={titleColour}>{title}</Title>
                    <Location titleColour={titleColour}>{location}</Location>
                </TextWrapper>
            </HoverWrapper>
        </Header>
    </TitleWrapper>
);

export default PostHeader;