import React from 'react';
import './custom-checkbox.scss';

const CustomCheckbox = ({checked}) => (
    <input 
        className='largerCheckbox' 
        type="checkbox"
        checked={checked}
    />
)

export default CustomCheckbox;