import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './goal-list.styles.scss';

const GoalList = ({ goalType, goalList }) => (
    <div className='goal-section'>
        
        <div className='goal-box'>
            <ul>
                {
                    goalList && goalList.map(
                        goal => (
                            <li key={ goal.ID }> 
                                <input className='largerCheckbox' type="checkbox" /> 
                                { goal.name } &nbsp;&nbsp; ({ goal.points } pts.)
                            </li>
                        )
                    )
                }
                <CustomButton><div className='add-goal-button'><span>&#43;</span></div></CustomButton>
            </ul>
        </div>
    </div>  
)

export default GoalList;


