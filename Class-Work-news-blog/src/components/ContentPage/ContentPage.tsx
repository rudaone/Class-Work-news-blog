import './ContentPage.css';
import LikeDislike from '../Icons/LikeDislike/LikeDislike';
import BookMark from '../Icons/BookMark/BookMark';
import { Slider } from '../Slider';
import { useParams } from 'react-router-dom'; 
import { IStoreState } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadSelectedPost } from '../../redux/actionCreators';
import { Link } from 'react-router-dom';
import { setTheme } from '../../redux/actionCreators';

  
const ContentPage = () => {
    const { id = '' } = useParams(); 
    const theme = useSelector((state: IStoreState) => state.ui.theme);
    const selectedPost = useSelector((state: IStoreState) => state.posts.selectedPost);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSelectedPost(id))
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            dispatch(setTheme(theme));
        }
    }, [dispatch]);

    return (
        <article className={`content__page-wrapper_${theme}`}>
            <p className='upper__wrapper'>
                <div className='content__page_header'>
                    <div className='content__page_header-menu'>
                        <Link to='/posts' className={`content__page_header-btn_${theme}`}>
                            Home
                        </Link>
                        <span className={`content__page_header-post_${theme}`}>{`Post ${id}`}</span>
                    </div>
                        <h3 className={`content__page_header-title_${theme}`}>{selectedPost.title}</h3>
                </div>
                <img className="content__page-img" src={selectedPost.image} alt="img name" />
            </p>

            <p className='lower__wrapper'>
                <p className={`content__page_main-text_${theme}`}>
                    {selectedPost.text?.split('\n')
                        .map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                ))}
                </p>
                <div className='content__page_main-buttons'>
                    <div className='buttons-likes'>
                        <div className='btn-like'>
                            <LikeDislike isUp={true} />
                        </div>
                        
                        <div className='btn-dislike'>
                            <LikeDislike isUp={false} />
                        </div>  
                    </div>
                </div>
            </p>
            <div className='container'>
                <Slider />
            </div>
        </article>
    )
}

export { ContentPage }