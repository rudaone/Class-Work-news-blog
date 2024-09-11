import './Pagination.css'
import Arrow from "../Icons/Arrow/Arrow"
import { IStoreState } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/actionCreators';

 const Pagination = ({className}: {className?: string}) => {
    const theme = useSelector((state: IStoreState) => state.ui.theme)
    const { limit, total, currentPage } = useSelector((state:IStoreState) => state.posts)
    const dispatch = useDispatch ()
    
    return (
        <div className='pagination__wrapper'>
            <button className={`pagination_button_${theme}`}
                    disabled = {currentPage === 1}  
                    onClick={() => dispatch(setCurrentPage(currentPage - 1))}> 
                <Arrow  className='pagination_arrow-left'
                    isLeft={true} 
                    stroke={theme === 'dark' ? 'rgba(141, 142, 151, 1)' : 'rgba(49, 48, 55, 1)'}
                   />
            </button>

            <div className = 'currentpage__wrapper'>
                <span
                    className={`first_${theme}`}
                    onClick={() => dispatch(setCurrentPage(currentPage-1))}>
                    {currentPage !== 1 && currentPage - 1}
                </span>
                <span className='second'>
                    {currentPage}
                </span>
                <span className={`third_${theme}`}
                      onClick={() => dispatch(setCurrentPage(currentPage+1))}>
                    {currentPage !== total && currentPage + 1}
                </span>
            </div>

            <button className={`pagination_button_${theme}`}
                    disabled = {currentPage === Math.ceil(total/limit)} 
                    onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
                <Arrow  className='pagination_arrow-right'
                    isLeft={false}
                    stroke={theme === 'dark' ? 'rgba(141, 142, 151, 1)' : 'rgba(49, 48, 55, 1)'}
                     />
            </button>
        </div>
    )
 }
 
 
 export { Pagination }