

// import React, { FC, ReactNode } from 'react';
// import { Layout, Space } from 'antd';
// import styles from './Layout.module.css'
// import NavBar from '../NavBar';
// import MovieFooter from '../MovieFooter';

// const { Header, Footer, Sider, Content } = Layout;

// type Props = {
//   children?: ReactNode;
//   title?: string;
// };

// const Index: FC<Props> = ({ children, title = 'Movie Portal' }: Props) => (
//   <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
//     <Layout className={styles.movieLayout}>
//       <Header className={styles.movieHeader}>
        
//       </Header>
//       <Layout>
//         <Sider className={styles.movieSider}><NavBar/></Sider>
//         <Content className={styles.movieContent}>{children}</Content>
//       </Layout>
//       <Footer className={styles.movieFooter}>
//             <MovieFooter/>
//       </Footer>
//     </Layout>
//   </Space>
// );

// export default Index;


import React from 'react';
import { Layout, Menu,Button } from 'antd';
import { UserOutlined, VideoCameraOutlined, LogoutOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} theme="dark">
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['']}>
          <Menu.Item key="1" icon={<UserOutlined />} title="Most Viewed Movies">
            Most Viewed
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />} title="Most Rated Movies">
            Most Rated
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ marginRight: 20 }}><h1>ZMovies</h1></span>
          <div>
             
            <span style={{ marginLeft: 300 }}>Global Search</span>
            <span style={{ marginLeft: 200 }}><Button>Wishlist</Button></span>
          </div>
        
            
            <span style={{ marginRight: 20 }}>
              
              <Button><LogoutOutlined /></Button>

            </span>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;



