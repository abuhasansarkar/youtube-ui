import {
  AccountCircleOutlined,
  CameraIndoorOutlined,
  DarkModeOutlined,
  GamesOutlined,
  HelpCenter,
  HistoryOutlined,
  Home,
  LibraryAddOutlined,
  LibraryMusicOutlined,
  LightModeOutlined,
  LiveTv,
  Movie,
  Newspaper,
  PlayLessonOutlined,
  Report,
  Settings,
  Sports,
  SubscriptionsOutlined,
  ThumbUpAltOutlined,
  WatchLaterOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 70px);
  padding: 10px 26px;
  position: sticky;
  top: 50px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 5px 0;
  border-radius: 10px;
  gap: 5px;
  cursor: pointer;
  font-size: 14px;
`;

const Hr = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.soft};
  margin-bottom: 15px;
`;
const UserSingIn = styled.div`
  margin: 10px 0;
`;
const SinginText = styled.p`
  font-size: 14px;
`;
const SinginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  padding: 5px 15px;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

const Title = styled.h4`
  color: #aaaaaa;
  margin-bottom: 10px;
`;

const Sidebar = () => {
  return (
    <Container>
      <NavItem>
        <Home /> Home
      </NavItem>
      <NavItem>
        <PlayLessonOutlined /> Shorts
      </NavItem>
      <NavItem>
        <SubscriptionsOutlined /> Subscriptions
      </NavItem>
      <Hr />
      <NavItem>
        <LibraryAddOutlined /> Library
      </NavItem>
      <NavItem>
        <HistoryOutlined /> Histroty
      </NavItem>
      <Hr />
      <NavItem>
        <WatchLaterOutlined /> Watch Later
      </NavItem>
      <NavItem>
        <ThumbUpAltOutlined /> Liked Videos
      </NavItem>
      <NavItem>
        <CameraIndoorOutlined /> Your Videos
      </NavItem>
      <Hr />
      <UserSingIn>
        <SinginText>
          Singn in to like videos, comments, and Subscribe.
        </SinginText>
        <Link to="singin" className="link">
        <SinginButton>
          <AccountCircleOutlined />
          SING IN
        </SinginButton>
        </Link>
      </UserSingIn>
      <Hr />

      <Title>BEST OF VDOTUBE</Title>

      <NavItem>
        <LibraryMusicOutlined /> Music
      </NavItem>
      <NavItem>
        <Sports /> Sports
      </NavItem>
      <NavItem>
        <GamesOutlined /> Gaming
      </NavItem>
      <NavItem>
        <Movie /> Movies
      </NavItem>
      <NavItem>
        <Newspaper /> News
      </NavItem>
      <NavItem>
        <LiveTv /> Live
      </NavItem>

      <Hr />
      <NavItem>
        <Settings /> Settings
      </NavItem>
      <NavItem>
        <Report /> Report
      </NavItem>
      <NavItem>
        <HelpCenter /> Help
      </NavItem>
      <NavItem>
        <LightModeOutlined /> Light Mode
      </NavItem>
      <NavItem>
        <DarkModeOutlined /> Dark Mode
      </NavItem>
    </Container>
  );
};

export default Sidebar;
