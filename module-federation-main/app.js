import Subapp1 from "module-federation-subapp1/index";
// // import Subapp2 from "module-federation-subapp2/index";
import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import './app.scss';

const { Content, Sider } = Layout;
const items2 = [UserOutlined, LaptopOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(2).fill(null).map((_, j) => {
      const subKey = index * 2 + j + 1;
      console.log('subKey', subKey);
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

console.log('items2', items2);

const App = () => (
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
          />
        </Sider>
        <Content
          style={{
            padding: '0 24px',
            minHeight: 280,
          }}
        >
          <Subapp1 />
        </Content>
      </Layout>
    </Content>
  </Layout>
);

export default App;
