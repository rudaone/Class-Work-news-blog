import { IPost, IPostWithType, POST_TYPES } from "../../../types"
import { PostDetail } from './PostDetail'
import { PostVertical } from "./PostVertical"
import { PostSmall } from "./PostSmall"
import './Post.css';
import { useSelector } from 'react-redux'
import { IStoreState } from "../../../types";

const getResultPostComponent = (type: POST_TYPES) => {
    switch(type) {
        case POST_TYPES.VERTICAL: {
            return PostVertical
        }
        case POST_TYPES.SMALL: {
            return PostSmall
        }
        default: {
            return PostDetail
        }
    }
}

const Post = ({ type, ...other }: IPostWithType) => {
    const ResultComponent = getResultPostComponent(type)!;
    const theme = useSelector((state: IStoreState) => state.ui.theme);
    return (
      <div className={`post_${theme}`}>
        <ResultComponent {...other} />
      </div>
    );
  };

export { Post }