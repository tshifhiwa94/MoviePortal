import React, { useState } from 'react';
import { Breadcrumb, Input, Button, Empty, Modal } from 'antd';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Layout.module.css';
import MovieFooter from '../MovieFooter';
import { useMovie } from '../../providers/movie';
import MovieList from '../Movie/MovieList/MovieList';
import { PoweroffOutlined } from '@ant-design/icons';
import { useUser } from '../../providers/user';

const Layout = ({ children }) => {
  const { FetchedMovies } = useMovie();
  const { logOutUser } = useUser();
  const router = useRouter();
  const pathSnippets = router.asPath.split('/').filter((i) => i);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const breadcrumbNameMap = {
    '/': 'Home',
    '/Movie': 'Movies',
    '/MostRatedMovies': 'Most Rated',
    '/MostViewedMovies': 'Most Viewed',
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

    // Filter movies based on the search query
    const filteredMovies = FetchedMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filteredMovies.length > 0) {
      console.log('Search results:', filteredMovies);
      setFilteredMovies(filteredMovies); // Update the filtered movies state
    } else {
      setFilteredMovies([]);
      return <Empty description="No movies found." />;
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
        <Button>
          <Link href="/HomePage">Home</Link>
        </Button>
        <Button>
          <Link href="/Movie">All Movies</Link>
        </Button>
        <Button>
          <Link href="/MostRatedMovies">Most Rated Movies</Link>
        </Button>
        <Button>
          <Link href="/MostViewedMovies">Most Viewed Movies</Link>
        </Button>

        <Input.Search
          className={styles.globalSearch}
          placeholder="Search Movies"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          onSearch={handleSearch}
        />
        <Button className={styles.logoutBtn} type="primary" onClick={handleLogout}>
          <PoweroffOutlined />
        </Button>
      </div>
      <div className={styles.content}>
        <Breadcrumb className={styles.breadcrumbWrapper}>{breadcrumbItems}</Breadcrumb>
        {/* Render the content based on the route */}
        {router.pathname === '/HomePage' && children}
        {router.pathname === '/Movie' && (
          <MovieList movies={filteredMovies.length > 0 ? filteredMovies : FetchedMovies} />
        )}
        {router.pathname === '/MostRatedMovies' && children}
        {router.pathname === '/MostViewedMovies' && children}
      </div>
      <MovieFooter />
    </div>
  );
};

export default Layout;
