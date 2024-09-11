import './AddPost.css'
import { IStoreState, IInput, IButton } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/actionCreators';
import { Link } from 'react-router-dom';
import { Input } from '../Input';
import { INPUT_TYPES } from '../../types'
import { Button } from '../Button';
import { FileLoader } from '../FileLoader';
import { useState } from 'react';
import { ImageListType, ImageType } from 'react-images-uploading/dist/typings';
import { addPost } from '../../redux/actionCreators';

const AddPost = () => {
    const theme = useSelector((state: IStoreState) => state.ui.theme);
    const [image, setImage] = useState({} as ImageType)
    const [text, setText] = useState('')
    const [url, setUrl] = useState ('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [lesson_num, setLessonNum] = useState(0)
    const dispatch = useDispatch();
    const handleImageChange = (imageList: ImageListType) => {
        setImage(imageList[0])
    }
    const handleClick = () => {
        dispatch(addPost(
            {
                text,
                title,
                description,
                lesson_num,
                image: image.file
            }
        ))
    }

    const handleClearPost = () => { 
        setImage({}) 
        setUrl('')
        setLessonNum(0)
        setText('') 
        setDescription('') 
        setTitle('') 
      }

    return (
        <article className={`add__page-wrapper_${theme}`}>
            <p className='upper__wrapper'>
                <div className='content__page_header'>
                    <div className='content__page_header-menu'>
                        <Link to='/posts' className={`content__page_header-btn_${theme}`}>
                            Home
                        </Link>
                        <span className={`content__page_header-post_${theme}`}>Add Post</span>
                    </div>
                        <h3 className={`content__page_header-title_${theme}`}>Add Post</h3>
                </div>
            </p>

            <p className='addpost__wrapper'>
                <div className='input__first-row'>
                    <div className='title'>
                        <Input className='input__title'
                            type={INPUT_TYPES.TEXT}
                            placeholder='Add your title'
                            label='Title'
                            value={title}
                            onChange={(e: any) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='url'>
                        <Input className='input__url'
                            type={INPUT_TYPES.TEXT}
                            placeholder='Add your URL'
                            label='URL'
                            value={url}
                            onChange={(e: any) => setUrl(e.target.value)}
                        />
                    </div>
                </div>

                <div className='input__second-row'>
                    <div className='date'>
                        <Input className='input__date'
                            type={INPUT_TYPES.TEXT}
                            placeholder='Add your lesson number'
                            label='Lesson number'
                            value={lesson_num}
                            onChange={(e: any) => setLessonNum(e.target.value)}
                        />
                    </div>
                    <div className='image'>
                        <FileLoader
                            image={image}
                            outerOnChange={handleImageChange}
                            outerOnRemove={() => setImage({} as ImageType)}
                        />
                    </div>
                </div>

                <div className='textarea__block'>
                    <Input className='textarea__desc'
                            type={INPUT_TYPES.TEXTAREA}
                            placeholder='Add your text'
                            label='Description'
                            value={description}
                            onChange={(e: any) => setDescription(e.target.value)}
                    />

                    <Input className='textarea__text'
                            type={INPUT_TYPES.TEXTAREA}
                            placeholder='Add your text'
                            label='Text'
                            value={text}
                            onChange={(e: any) => setText(e.target.value)}
                    />
                </div>

                <div className='btn__block'>
                    <Button className='delete-btn'
                            onClick={(event: any) => (event)}       
                            children='Delete post'
                    />
                    <div className='btn__block-right'>
                        <Button className='cancel-btn'
                                onClick={handleClearPost}       
                                children='Cancel'
                        />
                        <Button className='add-btn'
                                onClick={handleClick}       
                                children='Add post'
                        />
                    </div>
                </div>
            </p>
        </article>
    )
}

export { AddPost }