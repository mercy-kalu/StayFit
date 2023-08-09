import React, { useState } from "react";
import "../styles/SideBar.css"

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SlidersOutlined,
    HomeOutlined,
    GoldOutlined
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";

const { Header, Sider, Footer, Content } = Layout;
const SideBar = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer }
    } = theme.useToken();
    return (
     <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} id="sidenav">
       <div id="logo">
        <img src="/assets/images/logo.svg" alt="" />
        <h2>StayFit</h2>
       </div>
       <div className="demo-logo-vertical" id="sidemenu" />
       <Menu
        className="navText"
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
         {
          key: "1",
          icon: <HomeOutlined />,
          label: "Dashboard"
         },
         {
          key: "2",
          icon: <GoldOutlined />,
          label: "Goals"
         },
         {
          key: "3",
          icon: <SlidersOutlined />,
          label: "Activities"
         }
        ]}
       />
      </Sider>
      <Layout>
       <Header
        style={{
         padding: 0,
         background: "#ffffff"
        }}
       >
        <div id="topNav">
         <div id="navIcon">
          <Button
           type="text"
           icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
           onClick={() => setCollapsed(!collapsed)}
           style={{
            fontSize: "16px",
            width: 64,
            height: 64
           }}
          />
         </div>
         <div id="navProfile">
          {/* <div className="running">
           <div id="running-img">
            <img src="../assets/images/profileImage.png" alt="" />
           </div>
           <div className="running-text">
            <h3>Thomas Fletcher</h3>
            <p className="pg">Sydney, Australia</p>
           </div>
          </div> */}
          <div className="running">
           <div id="running-img">
            <img src="/assets/images/profile.svg" alt="" />

            <div className="running-text">
             {/* <h3>Thomas Fletcher</h3>
             <p className="pg">Sydney, Australia</p> */}
            </div>
           </div>
          </div>
         </div>
        </div>
       </Header>
       <Content
        style={{
         margin: "24px 16px",
         padding: 24,
         minHeight: 490,
         background: "#FAFAFA"
        }}
       >
        {props.children}
       </Content>
       <Footer
        style={{
         textAlign: "center"
        }}
       >
        Fitness App © 2023. <span>Created by CBC Group E</span>
       </Footer>
      </Layout>
     </Layout>
    );
};
export default SideBar;
