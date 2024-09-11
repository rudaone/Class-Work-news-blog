import { useState, useEffect } from 'react';
import { IPost, IStoreState } from "../../types";
import { PostsRow } from './PostsRow';
import './Posts.css';
import { useSelector, useDispatch } from 'react-redux';
import { loadPosts } from '../../redux/actionCreators';
import { PostsSelect } from '../PostsSelect';
import { Pagination } from '../Pagination';

const getPostsByRows = (posts: IPost[]) => {
  const resultArr = [];
  for (let i = 0; i < posts.length; ) {
    if (i === 0) {
      resultArr.push([posts[i], posts[i + 1], posts[i + 2]]);
      i = i + 3;
    } else {
      resultArr.push(
        [posts[i], posts[i + 1], posts[i + 2], posts[i + 3]].filter(
          (el) => !!el,
        ),
      );
      i = i + 4;
    }
  }
  return resultArr;
};

export const Posts = () => {
  const posts = useSelector((state: IStoreState) => state.posts.posts);
  const limit = useSelector((state: IStoreState) => state.posts.limit);
  const currentPage = useSelector((state: IStoreState) => state.posts.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts({ limit, currentPage }));
  }, [limit, currentPage]);

  return (
    <div className="posts-container">
      {getPostsByRows(posts).map((rowPosts, ind) => (
        <PostsRow posts={rowPosts} key={ind} />
      ))}
      <PostsSelect className="posts-select" />
      <Pagination className="pagination" />
    </div>
  );
};
