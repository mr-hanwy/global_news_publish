// 第三方组件
import React, { useState } from 'react';
import { Avatar, Badge, Dropdown, Layout } from 'antd';

const { Header } = Layout;

import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false);

  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    { label: '个人中心', key: '/profile' },
    { label: '退出', key: '/logout' }
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