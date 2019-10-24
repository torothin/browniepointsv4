import React from 'react';
import './goal-item.styles.scss';
import CustomCheckbox from '../custom-checkbox/custom-checkbox.component';
import { connect } from 'react-redux';
import { checkGoal } from '../../redux/goals/goals.actions';



class GoalItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goal: this.props.goal,
        }
    }

    render() {
        return (
            <li key={ this.state.goal.ID } onClick={()=>{checkGoal(this.state.goal)}}> 
                <input 
                    className='largerCheckbox' 
                    type="checkbox" 
                    key={ this.state.goal.ID }
                    defaultChecked={this.state.goal.checked}
                    
                    
                /> 
                {/* <CustomCheckbox checked={this.props.goal.checked} onClick={()=>{ checkGoal(this.props.goal); }} /> */}
                { this.state.goal.name } &nbsp;&nbsp; ({ this.state.goal.points } pts.)
            </li>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    checkGoal: goal => dispatch(checkGoal(goal)),

});

export default connect(null,mapDispatchToProps)(GoalItem);