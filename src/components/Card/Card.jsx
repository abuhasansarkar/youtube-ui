import React from "react";
import styled from "styled-components";
import thamnel from "../../assets/thamnel.webp";
import channelImg from "../../assets/abuhasansarkar.png";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  margin: 10px;
  border-radius: 10px;
  display: ${(props)=> props.type === "sm" && "flex"};

`;
const Img = styled.img`
  width: ${(props)=> props.type === "sm" ? "160px" : "100%"};
  height: ${(props)=> props.type === "sm" ? "100px" : "230px"};
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;
const CardText = styled.div`
  display: flex;
  padding: 5px;
`;
const ChannelImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;

  display: ${(props)=> props.type === "sm" ? "none" : "block"};
`;
const TextArea = styled.div``;

const VideoTitle = styled.h4`
  font-weight: 400;
  margin-bottom: 5px;
`;
const ChannelName = styled.h6`
  font-size: 14px;
  color: #606060;
`;
const ViewsUploadTime = styled.span`
  color: #606060;
  font-size: 12px;
`;

const Card = ({ type }) => {
  return (
    <CardContainer type={type}>
      <Link to="video/:564">
        <Img type={type} src={thamnel} />
      </Link>
      <CardText>
        <Link to="video/:id">
          <ChannelImg type={type} src={channelImg} />
        </Link>
        <TextArea tupe={type}>
          <VideoTitle>
            
            <Link to="video/:65621" className="link">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            </Link>
          </VideoTitle>
          <Link className="link" to="channel/:id"><ChannelName>AbuHasan</ChannelName></Link>
          <ViewsUploadTime>50k Views</ViewsUploadTime>
          <ViewsUploadTime> / 2 day ago</ViewsUploadTime>
        </TextArea>
      </CardText>
    </CardContainer>
  );
};

export default Card;
