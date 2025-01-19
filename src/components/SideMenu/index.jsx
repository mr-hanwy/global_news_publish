// 第三方组件
import {
  AppstoreOutlined, BarChartOutlined, CloudOutlined, ShopOutlined, TeamOutlined, UploadOutlined, UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const { Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${ index + 1 }`
}));

export default function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/menus?_embed=childrens').then(resp => console.log(resp));
  }, []);


  return (
    <Sider trigger={ null } collapsible collapsed={ collapsed }
           style={ { overflow: 'auto', height: '100dvh', position: 'fixed', left: 0, top: 0, bottom: 0 } }>
      <div className="logo">全球新闻发布系统</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={ ['1'] } items={ items } />
    </Sider>
  );
}