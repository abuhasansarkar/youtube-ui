import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import thamnel from "../../assets/thamnel.webp";
import channelPic from "../../assets/abuhasansarkar.png";
import {
  LibraryAddOutlined,
  ReplyOutlined,
  ThumbDownOffAltOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";

const VideoContainer = styled.div`
  flex: 7;
  display: flex;
  color: ${({ theme }) => theme.text};
`;

const Hr = styled.hr`
  border: 0.5px solid #333333;
  margin: 10px 0;
`;

const PlayVideo = styled.div`
  flex: 6;
  height: calc(100vh - 70px);
  position: sticky;
  overflow-x: scroll;
  padding: 10px 18px;
  background-color: ${({ theme }) => theme.bg};

  ::-webkit-scrollbar {
    display: none;
  }
`;

const VideoWrapper = styled.div``;

const VideoTitle = styled.h2`
  margin: 10px 0;
`;
const ViewsIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ViewsUploadTime = styled.span`
font-size: 14px;
font-weight: 500;
color: #606060;
`;
const Views = styled.span``;
const UploadTime = styled.span``;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const ChannelArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
`;
const ChannelImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;
const ChannelText = styled.div`
  margin-left: 10px;
`;
const ChannelName = styled.h4``;
const TotalSubscriber = styled.span`
font-size: 14px;
font-weight: 500;
color: #606060;
margin-top: 10px;
`;
const VideoDesc = styled.div`
  margin: 10px 0;
`;

const SubscribeButton = styled.button`
  background: #c70202;
  border: none;
  padding: 10px 30px;
  font-size: 18px;
  color: White;
  font-weight: 500;
  border-radius: 10px;
  text-transform: uppercase;
`;

const CommentsArea = styled.div``;
const CommentForm = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
const CommentInput = styled.input`
  width: 100%;
  color: white;
  background: transparent;
  padding: 10px;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  margin-left: 20px;
  font-size: 20px;
`;

const AllComments = styled.div`
  display: flex;
  margin: 20px 0;
`;
const Comment = styled.p`
font-size: 14px;
font-weight: 400;
margin-top: 5px;
`;

const CommentDate = styled.span`
color: #606060;
font-size: 13px;
`

const RelatedVideo = styled.div`
  flex: 2;
  background-color: ${({ theme }) => theme.bg};
  height: calc(100vh - 50px);
  position: sticky;
  overflow-x: scroll;
  padding: 10px 18px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Video = () => {
  return (
    <VideoContainer>
      <PlayVideo>
        {/* Video Play Area */}
        <VideoWrapper>
          <iframe
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/-J-TfuoSVfc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <VideoTitle>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            delectus a, eveniet in modi reiciendis labore .
          </VideoTitle>
          <ViewsIcons>
            <ViewsUploadTime>
              <Views>13,1521,512 views</Views> /<UploadTime> 20 days ago</UploadTime>
            </ViewsUploadTime>
            <Icons>
              <Icon>
                <ThumbUpOutlined /> 1232
              </Icon>
              <Icon>
                <ThumbDownOffAltOutlined /> Dislike
              </Icon>
              <Icon>
                <ReplyOutlined /> Share
              </Icon>
              <Icon>
                <LibraryAddOutlined /> Save
              </Icon>
            </Icons>
          </ViewsIcons>
        </VideoWrapper>
        {/* Channel Area */}
        <Hr />
        <ChannelArea>
          <ChannelInfo>
            <ChannelImg src={channelPic} />
            <ChannelText>
              <ChannelName>AbuHasan</ChannelName>
              <TotalSubscriber>45K Subscribers</TotalSubscriber>
            </ChannelText>
          </ChannelInfo>
          <SubscribeButton>Subscribe</SubscribeButton>
        </ChannelArea>

        <VideoDesc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos porro
          nobis, ex a corrupti repellat cupiditate. Vitae nostrum voluptatibus
          rem nihil, ducimus esse facilis sit architecto obcaecati quasi fugit
          est.
        </VideoDesc>
        <Hr />
        {/* Comments Area */}
        <CommentsArea>
          <CommentForm>
            <ChannelImg src={channelPic} />
            <CommentInput placeholder="Add a Comments" />
          </CommentForm>
          {/*  All Comments */}
          <AllComments>
            <ChannelImg src={channelPic} />
            <ChannelText>
              <ChannelName>AbuHasan</ChannelName> 
              <Comment>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias minus sint culpa dicta! Quia ab, necessitatibus
                voluptas neque consectetur harum similique hic reprehenderit
                sapiente quae exercitationem non provident tempore quidem!
              </Comment>
              <CommentDate>1 day ago</CommentDate>
            </ChannelText>
          </AllComments>
          <AllComments>
            <ChannelImg src={channelPic} />
            <ChannelText>
              <ChannelName>Sarkar</ChannelName> 
              <Comment>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestias minus sint culpa dicta! Quia ab, necessitatibus
                voluptas neque consectetur harum similique hic reprehenderit
                sapiente quae exercitationem non provident tempore quidem!
              </Comment>
              <CommentDate>1 day ago</CommentDate>
            </ChannelText>
          </AllComments>
        </CommentsArea>
      </PlayVideo>

      {/* Realated Video Sidebar */}
      <RelatedVideo>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </RelatedVideo>
    </VideoContainer>
  );
};

export default Video;
