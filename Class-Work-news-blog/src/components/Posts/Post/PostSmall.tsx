import { IPost } from '../../../types';
import LikeDislike from '../../Icons/LikeDislike/LikeDislike';
import BookMark from '../../Icons/BookMark/BookMark';
import MoreIcon from '../../Icons/MoreIcon/MoreIcon';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IStoreState } from '../../../types';

const getDate = (postDate: string) => {
  const monthsMap = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date(postDate);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${monthsMap[month - 1]} ${day}, ${year}`;
};

const PostSmall = ({
  id,
  image,
  text,
  date,
  lesson_num,
  title,
  author,
}: IPost) => {
  const postDate = getDate(date);
  const theme = useSelector((state: IStoreState) => state.ui.theme);
  return (
    <div className="post__small" data-author={author}>
      <article className="post__small-article">
        <div className="post__small-content">
          <span className="post__date">{postDate}</span>
          <Link to={`/posts/${id}`} className="Link">
          <h1 className={`post__small-title_${theme}`}>{title}</h1>
          </Link>
          <p className="post__small-text">{text}</p>
        </div>
        <img className="post__small-img" src={image} alt="img name" />
      </article>
      <div className="icons__footer">
      <div className="icons__footer-like-block">
          <LikeDislike isUp={true} 
          stroke={theme === 'dark' ? 'rgba(141, 142, 151, 1)' : 'rgba(49, 48, 55, 1)'}/>
          <LikeDislike isUp={false} 
          stroke={theme === 'dark' ? 'rgba(141, 142, 151, 1)' : 'rgba(49, 48, 55, 1)'}/>
        </div>
        <div className="icons__footer-mark-block">
          <BookMark 
            stroke={theme === 'dark' ? 'rgba(141, 142, 151, 1)' : 'rgba(49, 48, 55, 1)'} 
          />
          <MoreIcon 
            stroke={theme === 'dark' ? 'rgba(141, 142, 151, 1)' : 'rgba(49, 48, 55, 1)'}
          />
        </div>
      </div>
    </div>
  );
};

export { PostSmall }