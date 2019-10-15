import React from 'react';
import './menu-popup.styles.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { toggleMenuPopupShow } from '../../redux/menu/menu.actions';

const MenuPopup = ({ toggleMenuPopupShow }) => (
    <div className='menu-popup-container'>
        <div className='menu-popup'>
            <div className='popup-contents'>
                Popup contents
            </div>
            <div className='button-container'>
                <CustomButton id='popupButton' onClick = { toggleMenuPopupShow } inverted>Accept</CustomButton>
                <CustomButton id='popupButton' onClick = { toggleMenuPopupShow } inverted>Cancel</CustomButton>
            </div>
        </div>
        
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleMenuPopupShow: () => dispatch(toggleMenuPopupShow()),
});

const mapStateToProps = state => ({
    menuPopupShow: state.menu.menuPopupShow,
})

export default connect(mapStateToProps,mapDispatchToProps)(MenuPopup);