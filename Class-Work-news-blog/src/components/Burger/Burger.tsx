import { useState, useRef } from 'react';
import './Burger.css';
import { SideMenu } from '../SideMenu';
import { useClickOutside } from '../../hooks';


const Burger = () => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null)
  useClickOutside(ref, () => setExpanded(false))
  const handleExpanded = () => {
    setExpanded(!expanded);
  }
  return (
    <div ref={ref}>
      <div className="header__burger" onClick={handleExpanded}>
        <span className={'header__burger-string ' + (expanded ? ' open' : '')}></span>
        <span className={'header__burger-string ' + (expanded ? ' open' : '')}></span>
        <span className={'header__burger-string ' + (expanded ? ' open' : '')}></span>
      </div>
      <SideMenu expanded={expanded}/>
    </div>
  );
};

export { Burger }