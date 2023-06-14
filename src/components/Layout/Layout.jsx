import React from "react";
import styled from "styled-components";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
`;

const main = styled.div`

`
// const main = styled.div`

// `



const Layout = () => {
  return (
    <>
      <Container>
        <Topbar />
        <Wrapper>
            <Sidebar/>
            <Outlet/>
        </Wrapper>
      </Container>
    </>
  );
};

export default Layout;
