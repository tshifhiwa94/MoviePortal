// import React, { ReactNode } from 'react'
// import Link from 'next/link'
// import Head from 'next/head'

// type Props = {
//   children?: ReactNode
//   title?: string
// }

// const Layout = ({ children, title = 'This is the default title' }: Props) => (
//   <div>
//     <Head>
//       <title>{title}</title>
//       <meta charSet="utf-8" />
//       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//     </Head>
//     <header>
//       <nav>
//         <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
//         <Link href="/users">Users List</Link> |{' '}
//         <a href="/api/users">Users API</a>
//       </nav>
//     </header>
//     {children}
//     <footer>
//       <hr />
//       <span>I'm here to stay (Footer)</span>
//     </footer>
//   </div>
// )

// export default Layout


import React,{FC,ReactNode} from 'react';
import { Layout, Space } from 'antd';
import styles from './../../styles/Movie.module.css';

const { Header, Footer, Sider, Content } = Layout;

type Props = {
  children?: ReactNode
  title?: string
}

const LayoutMain:FC = ({ children, title = 'Movie Portal' }: Props) => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout className={styles.movieLayout}>
      <Header className={styles.movieHeader}>Header</Header>
      <Layout>
        <Sider className={styles.movieSider}>Sider</Sider>
        <Content className={styles.movieContent}>{children}</Content>
      </Layout>
      <Footer className={styles.movieFooter}>Footer</Footer>
    </Layout>
  </Space>
);

export default LayoutMain;

