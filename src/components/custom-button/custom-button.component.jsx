import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, inverted, fullwidth, wide, ...otherProps }) => (
    <button 
        className={`
            ${inverted ? 'inverted' : ''} 
            ${wide ? 'wide' : ''} 
            ${fullwidth ? 'fullwidth' : ''}
            custom-button` }
        { ...otherProps }>
        {children}
    </button>
);

export default CustomButton;