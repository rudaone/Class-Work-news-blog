import './RegistrationConfirm.css'
import { Button } from '../Button'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { IStoreState } from '../../types';
import { activationSignUp, setTheme } from '../../redux/actionCreators';
import { Link } from 'react-router-dom';


const RegistrationConfirm = () => {
  const { uid = '', token = '' } = useParams(); 
  const theme = useSelector((state: IStoreState) => state.ui.theme);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(activationSignUp({ uid, token }))
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
      <div className={`confirmation__page_${theme}`}>
        <Link to='/posts' className={`registration__page-backbtn_${theme}`}>
           Back to home
        </Link>
        <div className={`registration__page-title_${theme}`}>
            Registration Confirmation
        </div>

        <div className='confirm__form-wrapper'>
          <div className={`confirm__form-innertext_${theme}`}>
            Registration successful! Welcome aboard!<br/>
            Please check your email.
          </div>
          <div className='button_confirm-container'>
            <Link to='/posts' className='button_confirm'>    
                  Go to home
                </Link>
          </div>
        </div>
      </div>
    )
}

export { RegistrationConfirm }