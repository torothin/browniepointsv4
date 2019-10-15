import React from 'react';
import './nav-bar.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import MenuButton from '../assets/menu_icon.png';
import { auth } from '../../firebase/firebase.utils';
import { toggleMenuHidden } from '../../redux/menu/menu.actions';
import Menu from '../menu/menu.component';

const NavBar = ({currentUser, toggleMenuHidden, menuHidden}) => {
    return (
        <div className='nav-bar'>
            {/* <div className='menu-button-container' onClick={ toggleMenuHidden }> */}
                <CustomButton onClick={ toggleMenuHidden }><img src={ MenuButton } alt='menu-button' /></CustomButton>
            {/* </div> */}
            
            {
                currentUser &&  
                    <span className='email-diplay'>{ currentUser.email }</span>  
            }
            
            {
                currentUser && 
                    <CustomButton>
                        <div onClick={() => { auth.signOut()} }>Sign Out</div>
                    </CustomButton>
            }
            {
                (!menuHidden && currentUser) && <Menu />
            }
            
        </div>
    )  
}

const mapDispatchToProps = dispatch => ({
    toggleMenuHidden: () => dispatch(toggleMenuHidden())
});

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    menuHidden: state.menu.menuHidden,
});

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);