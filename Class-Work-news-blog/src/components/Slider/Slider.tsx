import Arrow from '../Icons/Arrow/Arrow';
import './Slider.css'
import { IStoreState } from '../../types';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadSelectedPost } from '../../redux/actionCreators';

const Slider = () => {
    const { id = '' } = useParams(); 
    const theme = useSelector((state: IStoreState) => state.ui.theme);
    const selectedPost = useSelector((state: IStoreState) => state.posts.selectedPost);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSelectedPost(id))
    }, [id])

    return (
        <div className='slider'>
            <div className='slider__container'>
                <div className='slider__left'>
                    <Link to={`/posts/${+id - 1}`} className='slider__arrow-left'>
                            <Arrow  isLeft={true} 
                                    stroke={theme === 'dark' ? 'rgba(141, 142, 151, 1)' : 'rgba(49, 48, 55, 1)'}/>
                        </Link>
                    <div className='slider__left_main'>
                        <button className={`slider__left_main-btn_${theme}`}>Prev</button>
                    </div>
                </div>
                

                <div className='slider__right'>
                <div className='slider__right_main'>
                        <button className={`slider__right_main-btn_${theme}`}>Next</button>
                    </div>
                    <Link to={`/posts/${+id + 1}`} className='slider__arrow-right'>
                        <Arrow  isLeft={false}
                                stroke={theme === 'dark' ? 'rgba(141, 142, 151, 1)' : 'rgba(49, 48, 55, 1)'} />
                    </Link>
                </div>
            </div> 
        </div>
    )
}


export { Slider } 