import './App.css'
import { useEffect, useState } from 'react'
import { AddPost, FooterRegForm, SearchResults } from './components';
import './components/FooterRegForm/FooterRegForm.css'
import { Header } from './components'
import { Registration } from './components';
import { RegistrationConfirm } from './components';
import { INPUT_TYPES, IStoreState, POST_TYPES } from './types';
import { ContentPage } from './components';
import { Posts } from './components/Posts/Posts';
import { SighIn } from './components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route, 
  Navigate
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserInfo } from './redux/actionCreators';
import userEvent from '@testing-library/user-event';


const App = () => {
  const theme = useSelector((state: IStoreState) => state.ui.theme);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: IStoreState) => state.user.user)
  
  useEffect(() => {
    if (localStorage.getItem('access')) {
      dispatch(getUserInfo())
    } else {
      console.log('navigate')
      navigate('/sign-in')
    }
  }, [])
  
  return (
    <div className={`page_${theme}`}>
      <Header/>
      <Routes>
            <Route path="/" >
                  <Route path='sign-up' 
                         element={<Registration />} />
                  <Route path='sign-in' 
                         element={<SighIn />} />
                  <Route path='activate/:uid/:token'
                         element={<RegistrationConfirm />} />
                  <Route path="posts" >
                        <Route index element={localStorage.getItem('access') ? <Posts /> : <Navigate to={'/sign-in'}/>} />
                        <Route path='/posts/new' element={localStorage.getItem('access') ? <AddPost /> : <Navigate to={'/sign-in'}/>}/>
                        <Route path='search-results' element={localStorage.getItem('access') ? <SearchResults /> : <Navigate to={'/sign-in'}/>}/>
                        <Route path=":id" element={<ContentPage />} />
                  </Route>
            </Route>
            </Routes>
      <FooterRegForm className={`footer_${theme}`} />
    </div>
  );
}

export default App;

