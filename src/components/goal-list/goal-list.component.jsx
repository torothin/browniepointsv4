import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { toggleMenuPopupShow } from '../../redux/menu/menu.actions';
import { checkGoal } from '../../redux/goals/goals.actions';
import { updateProgressPoints, updateProgressPercent } from '../../redux/level-data/level-data.actions';

import './goal-list.styles.scss';

class GoalList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidUpdate() {
        console.log('goal-list update',this.state.goalList)
    }

    render() {
        
        const { goalList, goalType, toggleMenuPopupShow, checkGoal, 
            updateProgressPoints, updateProgressPercent } = this.props;
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
                                            updateProgressPercent();
                                        }}
                                    /> 
                                    { goal.name } &nbsp;&nbsp; ({ goal.points } pts.)
                                </li>
                            ))
                        }
                        <CustomButton onClick={ toggleMenuPopupShow } inverted>
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
    updateProgressPercent: () => dispatch(updateProgressPercent()),
});

const mapStateToProps = state => ({
    goalList: state.goals.goalList,
})

export default connect(mapStateToProps,mapDispatchToProps)(GoalList);


