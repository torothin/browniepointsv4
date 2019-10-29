import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { toggleMenuPopupShow } from '../../redux/menu/menu.actions';
import { checkGoal } from '../../redux/goals/goals.actions';
import { updateProgressPoints, calcProgressPercent } from '../../redux/level-data/level-data.actions';

import './goal-list.styles.scss';

class GoalList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goalList: props.goalList,
            toggleMenuPopupShow: props.toggleMenuPopupShow,
            checkGoal: props.checkGoal,
            updateProgressPoints: props.updateProgressPoints,
            calcProgressPercent: props.calcProgressPercent,
            goalType: props.goalType,
            goalTypeString: props.goalTypeString,
        };
    }

    render() {
        
        const { goalList, goalType, toggleMenuPopupShow, checkGoal, 
            updateProgressPoints, calcProgressPercent } = this.state;
        const goalArray = goalList[goalType];
        //console.log(goalArray);
        
        return (
            <div className='goal-section'>
                <div className='goal-box'>
                    <ul>
                        {
                            goalArray && goalArray.map(goal => (
                                <li key={ goal.ID } > 
                                    <input 
                                        className='largerCheckbox' 
                                        type="checkbox" 
                                        key={ goal.ID }
                                        defaultChecked={ goal.checked }
                                        onChange={()=>{ 
                                            // possible race conditions for these calls?
                                            checkGoal(goal);
                                            updateProgressPoints(goal); 
                                            calcProgressPercent();
                                        }}
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
    }
}
const mapDispatchToProps = dispatch => ({
    toggleMenuPopupShow: () => dispatch(toggleMenuPopupShow()),
    checkGoal: goal => dispatch(checkGoal(goal)),
    updateProgressPoints: goal => dispatch(updateProgressPoints(goal)),
    calcProgressPercent: () => dispatch(calcProgressPercent()),
});

const mapStateToProps = state => ({
    goalList: state.goals.goalList,
})

export default connect(mapStateToProps,mapDispatchToProps)(GoalList);


