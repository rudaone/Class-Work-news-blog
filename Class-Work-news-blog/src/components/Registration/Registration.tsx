import './Registration.css'
import { FooterRegForm } from '../FooterRegForm';
import { RegistrationForm } from '../RegistrationForm';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from '../../types';
import { Link } from 'react-router-dom';
import { setTheme } from '../../redux/actionCreators';
import { useEffect } from 'react';


const Registration = () => {
    const theme = useSelector((state: IStoreState) => state.ui.theme);
    const dispatch = useDispatch();

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
        <div className={`registration__page_${theme}`}>
        <Link to='/posts' className={`registration__page-backbtn_${theme}`}>
           Back to home
        </Link>
            <div className={`registration__page-title_${theme}`}>
                Sign Up
            </div>
            <RegistrationForm />
        </div>
    )
}


export { Registration }