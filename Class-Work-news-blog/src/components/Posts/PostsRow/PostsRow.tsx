import { IPost, POST_TYPES, IStoreState } from "../../../types";
import { Post } from "../Post/Post";
import './PostsRow.css';
import { useEffect, useState } from "react";
import { PostVertical } from "../Post/PostVertical";
import { useSelector } from "react-redux";

const PostsRow = ({ posts }: { posts: IPost[] }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const theme = useSelector((state: IStoreState) => state.ui.theme);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth < 768) {
    return (
      <div className={`post__wrapper_${theme}`}>
        {posts.map(post => (
          <PostVertical key={post.id} {...post} />
        ))}
      </div>
    );
  }

  if (posts.length === 2) {
    return (
      <div className="post-two">
        <Post type={POST_TYPES.DETAIL} {...posts[0]} />
        <Post type={POST_TYPES.DETAIL} {...posts[1]} />
      </div>
    );
  }

  if (posts.length === 3) {
    return (
      <div className="post-three">
        <Post type={POST_TYPES.DETAIL} {...posts[0]} />
        <div className="post-small-column">
          <Post type={POST_TYPES.SMALL} {...posts[1]} />
          <Post type={POST_TYPES.SMALL} {...posts[2]} />
        </div>
      </div>
    );
  }

  if (posts.length === 4) {
    return (
      <div className="post-four">
        <Post type={POST_TYPES.VERTICAL} {...posts[0]} />
        <Post type={POST_TYPES.VERTICAL} {...posts[1]} />
        <div className="post-small-column">
          <Post type={POST_TYPES.SMALL} {...posts[2]} />
          <Post type={POST_TYPES.SMALL} {...posts[3]} />
        </div>
      </div>
    );
  }

  return null;
};

export { PostsRow };
