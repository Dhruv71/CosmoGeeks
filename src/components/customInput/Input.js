import React from 'react';
import './input.css';

const Input = (props) => {
    const {input, error,placeholder,type,required,disabled} = props
    return(
        
       <div className="search">
           <input className= {`custom-input ${error}`} 
           placeholder={placeholder} type={type} {...input}
           required={required} disabled={disabled} />
       </div>
    );
}

export default Input;