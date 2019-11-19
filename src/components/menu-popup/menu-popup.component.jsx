import React from 'react';
import './menu-popup.styles.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { toggleMenuPopupShow, menuSelection } from '../../redux/menu/menu.actions';
import AddGoal from '../add-goal/add-goal.component';
import AddReward from '../add-reward/add-reward.component';
import RemoveGoal from '../remove-goal/remove-goal.component';
import RemoveReward from '../remove-reward/remove-reward.component';

const MenuPopup = ({ toggleMenuPopupShow, selectedMenu }) => (
    <div className='menu-popup-background'>
        <div className='menu-popup'>
            <div className='popup-contents'>
                {
                    console.log(selectedMenu)
                }
                {
                    selectedMenu.addGoal
                    ?
                    <AddGoal />
                    :
                    null 
                }
                {
                    selectedMenu.addReward
                    ?
                    <AddReward />
                    :
                    null 
                }
                {
                    selectedMenu.removeGoal
                    ?
                    <RemoveGoal />
                    :
                    null 
                }
                {
                    selectedMenu.removeReward
                    ?
                    <RemoveReward />
                    :
                    null 
                }
                
            </div>
            <div className='button-container'>
                <CustomButton
                    id='popupButton' 
                    onClick = { ()=> { 
                        toggleMenuPopupShow("cancel");
                        menuSelection("Close Popup");
                    }}>Cancel
                </CustomButton>
            </div>
        </div>
        
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleMenuPopupShow: (result) => dispatch(toggleMenuPopupShow(result)),
    menuSelection: (selection) => dispatch(menuSelection(selection)),
});

const mapStateToProps = state => ({
    menuPopupShow: state.menu.menuPopupShow,
    selectedMenu: state.menu.selectedMenu,
})

export default connect(mapStateToProps,mapDispatchToProps)(MenuPopup);