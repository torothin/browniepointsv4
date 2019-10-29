import React from 'react';
import './menu-popup.styles.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { toggleMenuPopupShow } from '../../redux/menu/menu.actions';
import AddGoal from '../add-goal/add-goal.component';
import AddReward from '../add-reward/add-reward.component';
import RemoveGoal from '../remove-goal/remove-goal.component';
import RemoveReward from '../remove-reward/remove-reward.component';

const MenuPopup = ({ toggleMenuPopupShow,menuSelection }) => (
    <div className='menu-popup-background'>
        <div className='menu-popup'>
            <div className='popup-contents'>
                {
                    menuSelection.addGoal
                    ?
                    <AddGoal />
                    :
                    null 
                }

                {
                    menuSelection.addReward
                    ?
                    <AddReward />
                    :
                    null 
                }
                {
                    menuSelection.removeGoal
                    ?
                    <RemoveGoal />
                    :
                    null 
                }
                {
                    menuSelection.removeReward
                    ?
                    <RemoveReward />
                    :
                    null 
                }
                
            </div>
            <div className='button-container'>
                <CustomButton id='popupButton' onClick = { ()=> { toggleMenuPopupShow("cancel") }} inverted>Cancel</CustomButton>
            </div>
        </div>
        
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleMenuPopupShow: (result) => dispatch(toggleMenuPopupShow(result)),
});

const mapStateToProps = state => ({
    menuPopupShow: state.menu.menuPopupShow,
    menuSelection: state.menu.menuSelection,
})

export default connect(mapStateToProps,mapDispatchToProps)(MenuPopup);