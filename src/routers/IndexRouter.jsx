// 第三方组件
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

// 项目内部组件
import SideMenu from '../components/SideMenu';
import TopHeader from '../components/TopHeader';
import Home from '../views/Home';

export default function IndexRouter() {
  return (
    <BrowserRouter>
      <Layout hasSider>
        <SideMenu />
        <Layout className="site-layout" style={ { marginLeft: 200 } }>
          <TopHeader />
          <Content className="site-layout-background"
                   style={ { margin: '24px 16px 0 ', padding: 24, minHeight: 280, overflow: 'initial' } }>
            <Switch>
              <Route path="/home"><Home /></Route>
              <Redirect path="/" to="/home" />
            </Switch>
          </Content>
          <Footer style={ { textAlign: 'center' } }>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}