import React from "react";
import logo from "../../assets/logo.webp";
import userPic from "../../assets/abuhasansarkar.png";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

import styled from "styled-components";
import {
    AccountCircleOutlined,
  NotificationsNoneOutlined,
  Search,
  VideoCallOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const HeaderTopbar = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bg};
  padding: 0 26px;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const LeftArea = styled.div`
  flex: 2;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`;
const Img = styled.img`
  height: 30px;
  cursor: pointer;
`;
const LogoText = styled.strong`
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
`;

const CenterArea = styled.div`
  flex: 8;
`;
const InputArea = styled.div`
  width: 80%;
  margin: auto;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid White;
  /* padding: 3px 5px 3px 10px; */
  border-radius: 30px;
  overflow: hidden;
`;
const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 0;
  outline: none;
  font-size: 14px;
  padding: 5px 20px;
`;

const SearchIcon = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  /* background-color: wheat; */
  color: white;
  padding: 5px;
`;

const RightArea = styled.div`
  flex: 2;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`;
const RightIcons = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
  color: White;
`;

const UserInfo = styled.div`
  margin-left: 10px;
`;
const UsrImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

const UserSingIn = styled.div`
  margin: 10px 0;
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
  cursor: pointer;
`;



const Topbar = () => {
  return (
    <HeaderTopbar>
      <LeftArea>
        <Logo>
          <ViewHeadlineIcon />
        <Link to='/' className="link">
          <Img src={logo} />
        </Link>
        <Link to='/' className="link">
          <LogoText>Logo</LogoText>
        </Link>
        </Logo>
      </LeftArea>
      <CenterArea>
        <InputArea>
          <Input placeholder="Search Videos..." />
          <SearchIcon>
            <Search />
          </SearchIcon>
        </InputArea>
      </CenterArea>
      <RightArea>
        <RightIcons>
          <VideoCallOutlined />
          <NotificationsNoneOutlined />
        </RightIcons>
        <UserInfo>
          <UsrImg src={userPic} />
        </UserInfo>
        <UserSingIn>
        <Link to="singin" className="link">
        <SinginButton>
          <AccountCircleOutlined />
          SING IN
        </SinginButton>
        </Link>
      </UserSingIn>
      </RightArea>
    </HeaderTopbar>
  );
};

export default Topbar;
