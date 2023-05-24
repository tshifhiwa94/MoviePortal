import React, { useState, useEffect } from 'react';
import { Breadcrumb, Input, Button, Empty, Modal, Badge } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Layout.module.css';
import { useMovie } from '../../providers/movie';
import MovieList from '../Movie/MovieList/MovieList';
import { PoweroffOutlined, ClockCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import { useUser } from '../../providers/user';


const Layout = ({ children }) => {
  const { FetchedMovies } = useMovie();
  const { logOutUser } = useUser();
  const router = useRouter();
  const pathSnippets = router.asPath.split('/').filter((i) => i);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const savedWatchlist = localStorage.getItem('watchlist');
    if (savedWatchlist) {
      setWatchlist(JSON.parse(savedWatchlist));
    }
  }, []);

  const breadcrumbNameMap = {
    '/': 'Home',
    '/Movie': 'Movies',
    '/MostRatedMovies': 'Most Rated',
    '/WatchList': 'Watch List',
  };

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    const title = breadcrumbNameMap[url];
    return (
      <Breadcrumb.Item key={url}>
        <Link href={url}>{title}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link href="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  const handleSearch = () => {
    console.log(`Performing search for query: ${searchQuery}`);


    const filteredMovies = FetchedMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredMovies.length > 0) {
      setFilteredMovies(filteredMovies); // Update the filtered movies state
    } else {
      setFilteredMovies([]);
      
    }
  };

  const handleLogout = () => {
    Modal.confirm({
      title: 'Logout',
      content: 'Are you sure you want to log out?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: logOutUser,
    });
  };


  return (
    <div className={styles.layoutContainer}>
      <div className={styles.demoNav}>
      <Button className={router.pathname === '/HomePage' ? styles.activeButton : ''}>
        <Link href="/HomePage">ZMovies</Link>
      </Button>
      <Button className={router.pathname === '/Movie' ? styles.activeButton : ''}>
        <Link href="/Movie">All Movies</Link>
      </Button>
      <Button className={router.pathname === '/MostRatedMovies' ? styles.activeButton : ''}>
        <Link href="/MostRatedMovies">Most Rated Movies</Link>
      </Button>
      <Button className={router.pathname === '/WatchList' ? styles.activeButton : ''}>
        <Link href="/WatchList">Watch List</Link>
      </Button>

        <Input.Search
          className={styles.globalSearch}
          placeholder="Search Movies"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={handleSearch}
        />
        <Button className={styles.logoutBtn} type="primary" onClick={(handleLogout)}>
        <LogoutOutlined />
        </Button>
      </div>
      <div className={styles.content}>
        <Breadcrumb className={styles.breadcrumbWrapper}>
          {breadcrumbItems}
          {router.pathname === '/WatchList' && (
            <Badge count={watchlist.length}>
              <ClockCircleOutlined style={{ marginLeft: '8px', fontSize: '16px' }} />
            </Badge>
          )}
        </Breadcrumb>
        {/* Render the content based on the route */}
        {router.pathname === '/HomePage' && children}
        {router.pathname === '/Movie' && (
          <MovieList movies={filteredMovies.length > 0 ? filteredMovies : FetchedMovies} />
        )}
        {router.pathname === '/MostRatedMovies' && children}

        {router.pathname === '/WatchList' && children}
      </div>
    
    </div>
  );
};

export default Layout;
