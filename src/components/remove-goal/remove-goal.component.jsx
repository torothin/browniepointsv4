import React from 'react';
import './remove-goal.styles.scss';
import { connect } from 'react-redux'

const RemoveGoal = ({goalType,goalList}) => (
    <div className='remove-goal-container'>
        Remove Goal
        <select>
            {
                goalList['todo'].map(goal => (
                    <option key={ goal.ID }>{ goal.name }</option>
                ))
            }
            {
                goalList['daily'].map(goal => (
                    <option key={ goal.ID }>{ goal.name }</option>
                ))
            }
            {
                goalList['weekly'].map(goal => (
                    <option key={ goal.ID }>{ goal.name }</option>
                ))
            }
            {
                goalList['monthly'].map(goal => (
                    <option key={ goal.ID }>{ goal.name }</option>
                ))
            }
        </select>
           
    </div>
);

const mapStateToProps = state => ({
    goalList: state.levelData.goalList,
})

export default connect(mapStateToProps)(RemoveGoal);