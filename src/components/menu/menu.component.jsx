import React from 'react';
import './menu.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { toggleMenuPopupShow , toggleMenuHidden, menuSelection } from '../../redux/menu/menu.actions';

const Menu = ({ toggleMenuPopupShow, toggleMenuHidden, menuSelection }) => (
    <div className='menu-back'>
        <div className='menu'>
            <CustomButton
                onClick = { () => {
                    menuSelection("Add Goal");
                    toggleMenuPopupShow();
                    toggleMenuHidden();
                } }>Add Goal</CustomButton>
            <CustomButton
                onClick = { () => {
                    menuSelection("Remove Goal");
                    toggleMenuPopupShow();
                    toggleMenuHidden();
                } }>Remove Goal</CustomButton>
            <CustomButton
                onClick = { () => {
                    menuSelection("Add Reward");
                    toggleMenuPopupShow();
                    toggleMenuHidden();
                } }>Add Reward</CustomButton>
            <CustomButton 
                onClick = { () => {
                    menuSelection("Remove Reward");
                    toggleMenuPopupShow();
                    toggleMenuHidden();
                } }>Remove Reward</CustomButton>
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
    menuSelection: (selection) => dispatch(menuSelection(selection)),
});


export default connect(null,mapDispatchToProps)(Menu);