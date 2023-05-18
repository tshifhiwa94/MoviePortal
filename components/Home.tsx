import React from 'react';
import { LogoutOutlined, SearchOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined,LaptopOutlined ,NotificationOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Button, Input, Layout, Menu, theme } from 'antd';
import Movies from './Movie/Movies';




const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [LogoutOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
    };
  },
);

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // Replace with your movie data

  const handleLogout = () => {
    // Implement logout functionality
  };



  return (
    <Layout>
      <Header style={{ display: 'flex' ,marginLeft:40}}>
        <div className="demo-logo">
          {/* Replace with your logo */}
          <img src="path_to_logo.png" alt="Logo" />
        </div>
        <div className="global-search">
          {/* Implement global search functionality */}
          <Input prefix={<SearchOutlined />} placeholder="Search movies" />
          <Button type="primary">Search</Button>
        </div>
        <Button type="link"  onClick={handleLogout}>
        <LogoutOutlined />
        </Button>
      </Header>
      <Layout>
        <Sider width={250}  style={{height:718,marginTop:32}}>
          <div className="demo-logo-vertical">
            {/* Replace with your logo */}
            <img src="path_to_logo.png" alt="Logo" />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['4']}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Logout',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Most Rated Movies',
              },
              {
                key: '3',
                icon: <UploadOutlined />,
                label: 'Most Viewed',
              },
            ]}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 20px' }}>
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Movies</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <Content
            style={{
              paddingRight: 40,
            
              minHeight: 280,
              background: colorBgContainer,
              display: 'flex',
            }}
          >


            <Movies/>

            {/* Trailer Video */}
            {/* <div className="trailer-video">
              <h2>Trailer Video</h2>
              <video controls>
                <source src="path_to_trailer_video.mp4" type="video/mp4" />
              </video>
            </div> */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
