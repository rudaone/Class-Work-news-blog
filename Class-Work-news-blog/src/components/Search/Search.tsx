import { useState } from 'react';
import './Search.css'
import { CancelIcon } from '../Icons/CancelIcon';
import { setConstantValue } from 'typescript';
import { Navigate, useNavigate } from 'react-router-dom';

const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const handleOnFocus = () => {
    setIsActive(true);
  };
  const handleOnBlur = () => {
    setIsActive(false);
  };

  const [value, setValue] = useState('');

  const navigate = useNavigate();

  const handleClearSearch = () => {
    setValue('');
  };

  return (
    <div className='search__container'>
      <input
        className={'header__search ' + (isActive ? ' header__search-active' : '')}
        placeholder={isActive ? 'Search...' : ''}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            navigate(`/posts/search-results?search=${value}`);
          }
        }}
      />

      {isActive && <CancelIcon isActive={isActive} onClick = {() => setValue('')} />}
      {value.length !==0 && <CancelIcon onClick = {() => setValue('')} />}
    </div>
  );
};

export { Search };