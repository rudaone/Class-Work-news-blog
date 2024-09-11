import './FooterRegForm.css';
import { IStoreState } from '../../types';
import { useSelector } from 'react-redux';

const FooterRegForm = ({ className }: { className?: string }) => {
    const theme = useSelector((state: IStoreState) => state.ui.theme)
    return (
        <footer className={`registration__page-footer_${theme}`}>
            <div className='footer__inner'>
                <div className='footer__inner-left'>©2022 Blogfolio</div>
                <div className='footer__inner-right'>All rights reserved</div>
            </div>
        </footer>
    );
}

export { FooterRegForm };
