import './Input.css'
import { IInput, INPUT_TYPES } from "../../types";
import { useSelector } from 'react-redux';
import { IStoreState } from '../../types';

const Input = ({ placeholder, label, value, onChange, type, disabled, errorMessage, className }: IInput) => {
    const theme = useSelector((state: IStoreState) => state.ui.theme);
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <label className={`label_${theme}`}>{label}</label>
            {type === INPUT_TYPES.TEXTAREA ? 
                <textarea
                    className={'textarea ' + className}
                    placeholder={placeholder}
                    onChange={(e: any) => onChange && onChange(e)}
                    value={value}
                    disabled={disabled}
                /> :
                <input
                    className={'input ' + className}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e: any) => onChange && onChange(e)}
                    type={type}
                    disabled={disabled}
                />
            }
            {errorMessage && <span style={{display: 'block', color: 'red'}}>{errorMessage}</span>}
        </div>
    )
}

export { Input };















// const Input = ({ className, title, type, children = '', placeholder, status, isFocused = false, isActive = true, isError = false, onClick }: IInput) => {
//     const [inputValue, setInputValue] = useState('');
  
//     useEffect(() => {
//       if (children !== '') {
//         setInputValue(children);
//       }
//     }, [children]);
  
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setInputValue(e.target.value);
//     };
  
//     const handleClick = () => {
//       if (onClick) {
//         onClick();
//       }
//     };
  
//     return (
//       <div>
//         <h3>{title}</h3>
//         <div className="input__wrapper" 
//              onClick={handleClick}>
//           <input
//             className={"input " + className + (isError ? " error" : '')}
//             disabled={!isActive}
//             autoFocus={isFocused}
//             type={type}
//             placeholder={placeholder}
//             value={inputValue}
//             onChange={handleChange}
//           />
//           <p>{status.toUpperCase()}</p>
//         </div>
//         <div className="error__text">
//             {isError ? "Error text" : ""}
//         </div>
//       </div>
//     );
//   };

//   export { Input }
