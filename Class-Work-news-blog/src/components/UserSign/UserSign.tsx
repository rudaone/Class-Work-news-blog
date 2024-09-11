import { UserSignIcon } from "../Icons/UserSignIcon"
import './UserSign.css'
import { Link } from 'react-router-dom';

const UserSign = () => {
    return (
        <Link to='/sign-in' className='user__container'>
            <UserSignIcon />
        </Link>
    )
}


export { UserSign }