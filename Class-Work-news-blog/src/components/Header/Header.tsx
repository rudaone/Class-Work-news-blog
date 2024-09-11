import './Header.css';
import { Burger } from '../Burger';
import { Search } from '../Search';
import { Username } from '../Username'
import { SearchIcon } from '../Icons';
import { UserSign } from '../UserSign';
import { useSelector } from 'react-redux';
import { IStoreState } from '../../types';

const Header = () => {
    const user = useSelector((state: IStoreState) => state.user.user)
    return (
        <header>
            <Burger/>
            <Search/>
            <SearchIcon/>
            {user.id ? <Username /> : <UserSign />}
        </header>
    )
}



export { Header }