import './PostsSelect.css';
import { useDispatch, useSelector } from 'react-redux';
import { setPostsLimit } from '../../redux/actionCreators';
import { IStoreState } from '../../types';

const PostsSelect = ({className}: {className?: string}) => {
  const dispatch = useDispatch();
  const selectedLimit = useSelector((state: IStoreState) => state.posts.limit);
  const theme = useSelector((state: IStoreState) => state.ui.theme)
  const handleChangeLimit = (e: any) => {
        dispatch(setPostsLimit(e.target.value))}

  return (
    <div className='select__wrapper'>
      <div className={`select__title_${theme}`}>Choose posts view</div>
      <select
        className={`select_${theme}`}
        onChange={(e) => handleChangeLimit(e)}
        defaultValue={selectedLimit}
      >
        <option value={10}>10 posts</option>
        <option value={15}>15 posts</option>
        <option value={20}>20 posts</option>
      </select>
    </div>
  );
};

export { PostsSelect }