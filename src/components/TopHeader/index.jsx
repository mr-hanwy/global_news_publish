// 第三方组件
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Dropdown, Layout } from 'antd';
import React, { useState } from 'react';

const { Header } = Layout;

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);

  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    { label: '个人中心', key: '/profile' },
    { label: '退出', key: '/logout', danger: true }
  ];

  return (
    <Header className="site-layout-background" style={ { padding: '0 16px', position: 'sticky', top: 0, zIndex: 1 } }>
      {
        collapsed
        ? <MenuUnfoldOutlined onClick={ changeCollapsed } />
        : <MenuFoldOutlined onClick={ changeCollapsed } />
      }

      <div style={ { float: 'right' } }>
        <span style={ { marginRight: 10 } }>欢迎，admin</span>
        <Dropdown menu={ { items } }>
          <span className="avatar-item">
            <Badge count={ 1 }>
              <Avatar icon={ <UserOutlined /> } />
            </Badge>
          </span>
        </Dropdown>
      </div>
    </Header>
  );
}