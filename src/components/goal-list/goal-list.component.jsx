import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { toggleMenuPopupShow } from '../../redux/menu/menu.actions';
import { checkGoal } from '../../redux/goals/goals.actions';

import './goal-list.styles.scss';

const GoalList = ({ goalType, goalList, toggleMenuPopupShow,checkGoal }) => (
    <div className='goal-section'>
        <div className='goal-box'>
            <ul>
                {
                    goalList && goalList.map(goal => (
                        <li key={ goal.ID } > 
                            <input 
                                className='largerCheckbox' 
                                type="checkbox" 
                                key={ goal.ID }
                                onClick={()=>{ checkGoal(goal); }}
                                checked={goal.checked}
                            /> 
                            { goal.name } &nbsp;&nbsp; ({ goal.points } pts.)
                        </li>
                    ))
                }
                <CustomButton onClick={ toggleMenuPopupShow }>
                    <div className='add-goal-button'>
                        <span>&#43;</span>
                    </div>
                </CustomButton>
            </ul>
        </div>
    </div>  
)

const mapDispatchToProps = dispatch => ({
    toggleMenuPopupShow: () => dispatch(toggleMenuPopupShow()),
    checkGoal: goal => dispatch(checkGoal(goal)),

});

export default connect(null,mapDispatchToProps)(GoalList);


