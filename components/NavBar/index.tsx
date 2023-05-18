import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
import { HomeOutlined, VideoCameraOutlined, StarOutlined, LogoutOutlined } from '@ant-design/icons';

const NavBar = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} className="nav-bar">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="movies" icon={<VideoCameraOutlined />}>
        <Link href="/Movie">Movies</Link>
      </Menu.Item>
      <Menu.Item key="movies" icon={<VideoCameraOutlined />}>
        <Link href="/Movie">Movies</Link>
      </Menu.Item>
      <Menu.Item key="most-rated" icon={<StarOutlined />}>
        <Link href="/most-rated">Most Rated</Link>
      </Menu.Item>
      <Menu.Item key="most-rated" icon={<StarOutlined />}>
        <Link href="/most-rated">Most Rated</Link>
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />} className="logout-btn">
        <Link href="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;

