import React from 'react';
import './menu.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { toggleMenuPopupShow , toggleMenuHidden } from '../../redux/menu/menu.actions';

const Menu = ({ toggleMenuPopupShow, toggleMenuHidden }) => (
    <div className='menu-back'>
        <div className='menu'>
            <CustomButton
                onClick = { () => {
                    toggleMenuPopupShow();
                    toggleMenuHidden();
                } }>Option 1</CustomButton>
            <CustomButton
                onClick = { () => {
                    toggleMenuPopupShow();
                    toggleMenuHidden();
                } }>Option 2</CustomButton>
            <CustomButton
                onClick = { () => {
                    toggleMenuPopupShow();
                    toggleMenuHidden();
                } }>Option 3</CustomButton>
            <CustomButton 
                onClick = { () => {
                    toggleMenuPopupShow();
                    toggleMenuHidden();
                } }>Option 4</CustomButton>
            <CustomButton
                onClick = { () => {
                    toggleMenuPopupShow();
                    toggleMenuHidden();
                } }>Option 5</CustomButton>
            
        </div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleMenuPopupShow: () => dispatch(toggleMenuPopupShow()),
    toggleMenuHidden: () => dispatch(toggleMenuHidden()),
});


export default connect(null,mapDispatchToProps)(Menu);