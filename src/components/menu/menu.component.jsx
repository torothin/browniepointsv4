import React from 'react';
import './menu.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

const Menu = () => (
    <div className='menu-back'>
        <div className='menu'>
            <CustomButton>Option 1</CustomButton>
            <CustomButton>Option 2</CustomButton>
            <CustomButton>Option 3</CustomButton>
            <CustomButton>Option 4</CustomButton>
            <CustomButton>Option 5</CustomButton>
            
        </div>
    </div>
)

export default Menu;