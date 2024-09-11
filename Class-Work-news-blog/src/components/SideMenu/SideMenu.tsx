import { Username } from '../Username';
import { Button } from '../Button';
import './SideMenu.css';
import { setTheme } from '../../redux/actionCreators';
import { useDispatch } from 'react-redux'
import { THEMES, IUser } from '../../types';
import { LightTheme } from '../Icons/LightTheme';
import { DarkTheme } from '../Icons/DarkTheme';
import { IStoreState } from '../../types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../../redux/actionCreators';



const SideMenu = ({ expanded }: { expanded: boolean }) => {
    const theme = useSelector((state: IStoreState) => state.ui.theme)
    const dispatch = useDispatch()
    const user = useSelector((state: IStoreState) => state.user.user)
    const handleSetTheme = (theme: THEMES) => {
    dispatch(setTheme(theme))
    };
    if (!expanded) {
        return null
    }
    
    return (
        <div className={`side__menu_wrapper_${theme}` + (expanded ? ' popup-open' : ' popup-hidden')}>

            <Link to='/posts' className={`side__menu_btn-home_${theme}`}>Home</Link>

            <Link to='/posts/new' className={`side__menu_btn-add_${theme}`}>Add post</Link>
            
            <div className={`side__menu_btn-theme_${theme}`}>
                <button className={`btn_theme-light_${theme}`}
                    onClick={() => handleSetTheme(THEMES.LIGHT)}>
                    <LightTheme />
                </button>
                  
                <button className={`btn_theme-dark_${theme}`}
                    onClick={() => handleSetTheme(THEMES.DARK)}>
                    <DarkTheme/>
                </button>
            </div>
            {
            user?.id &&
            <Button className={`side__menu_btn-logout_${theme}`}
                    onClick={() => {
                    localStorage.removeItem('access');
                    localStorage.removeItem('refresh');
                    dispatch(setUser({} as IUser));
                    window.location.pathname = '/sign-in';
                    }}   
                    children='Log out'
            /> 
            }
        </div>
    )
}

export { SideMenu }