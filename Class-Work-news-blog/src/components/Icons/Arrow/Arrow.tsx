import './Arrow.css';
import { IStoreState } from '../../../types';
import { useSelector } from 'react-redux';

const Arrow = ({ isLeft, className, stroke, onClick, disabled }: { isLeft: boolean, className?: string, stroke: string, onClick?: Function, disabled?: boolean }) => {
    const theme = useSelector((state: IStoreState) => state.ui.theme)
    return (
     <svg 
        width="19" 
        height="12" 
        viewBox="0 0 19 12" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={isLeft ? 'left' : 'right'}
        >
        <path 
        stroke={stroke}
        d="M6.09375 11L1.09375 6M1.09375 6L6.09375 1M1.09375 6H17.5938" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        />
     </svg>
    )
}
export default Arrow;