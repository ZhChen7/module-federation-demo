import React, { useState, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import remoteRoutes from 'module-federation-subapp1/routes';
import Subapp2 from "module-federation-subapp2/index";
import { LaptopOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import Navigation from './Navigation';
import localRoutes from './routes';

import './app.scss';


const routes = [...localRoutes, ...remoteRoutes];
const { Content, Sider } = Layout;


const App = () => {
  const [num, setNum] = useState('1')

  const items2 = [UserOutlined, LaptopOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(2).fill(null).map((_, j) => {
        const subKey = index * 2 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });

  const handleClick = ({ item, key }) => {
    setNum(key)
  }

  return (
    <Layout>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className="site-layout-background"
          style={{
            padding: '24px 0',
          }}
        >
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={items2}
              onClick={handleClick}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            {
              num === '1' && (
                <HashRouter>
                  <div>
                    <h1>主容器文案</h1>
                    <Navigation />
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <Switch>
                        {routes.map(route => (
                          <Route
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                          />
                        ))}
                      </Switch>
                    </React.Suspense>
                  </div>
                </HashRouter>
              )
            }
            {num === '2' && <Subapp2 />}
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}

export default App;
