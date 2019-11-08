import React from 'react';
import './check-box.styles.scss';

const CheckBox = (props) => {
    return (
        <input 
            className='largerCheckbox' 
            type="checkbox" 
            key={ props.goal.ID }
            checked={ props.checked }
        /> 
    )
}

export default CheckBox;