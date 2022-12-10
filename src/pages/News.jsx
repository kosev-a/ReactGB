import { CircularProgress } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../store/news/actions';
import {
  selectNews,
  selectNewsLoading,
  selectError,
} from '../store/news/selectors';
import './News.css';

export const News = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectNewsLoading);
  const news = useSelector(selectNews);

  const getData = async () => {
    dispatch(getNews());
  };

  useEffect(() => {
    getData();
  }, []);

  const renderNews = useCallback(
    (item) => (
      <li key={item.id}>
        <a href={item.readMoreUrl} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      </li>
    ),
    []
  );

  return (
    <div>
      <div className="news">
        <h3>News</h3>
        <button onClick={getData}>Refresh</button>
      </div>
      {error && <h5>Error: {error.message}</h5>}
      {isLoading ? (
        <CircularProgress />
      ) : (
        <ul>{news.data && Object.values(news.data).map(renderNews)}</ul>
      )}
    </div>
  );
};
