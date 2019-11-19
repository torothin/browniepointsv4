import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { toggleMenuPopupShow } from '../../redux/menu/menu.actions';
import { checkGoal, updateProgressPoints, updateProgressPercent } from '../../redux/game-data/game-data.actions';
import CheckBox from '../check-box/check-box.component';

import './goal-list.styles.scss';

class GoalList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidUpdate() {
        //console.log('goal-list update')
        this.props.updateProgressPercent();
    }

    render() {
        //console.log("rendered goal-list");
        const { goalType, toggleMenuPopupShow } = this.props; //checkGoal, updateProgressPoints, updateProgressPercent
        const goalArray = this.props.goalList[goalType];
        
        return ( 
            <div className='goal-box'>
                <ul>
                    {
                        goalArray && goalArray.map(goal => (
                            <li key={ goal.ID } onChange={()=>{ 
                                //console.log("onchange");
                                this.handleChange(goal);
                            }}> 
                                <CheckBox goal={ goal } goalchecked={ goal.checked }  />
                                
                                { goal.name } &nbsp; Checked: {`${ goal.checked }`} &nbsp;&nbsp; ({ goal.points } pts.)
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
           
        )
    }

    handleChange = (goal) => {
        // possible race conditions for these calls?  
        
        // have to reverse this because it will update points before the goal is update with
        // the new checked value, ideally checkGoal completes and I use the new goal data to update 
        // points. Todo maybe
        const checked = !goal.checked;
        this.props.checkGoal(goal);
        this.props.updateProgressPoints({checked,goal}); 
        //this.props.updateProgressPercent();
    }
};

const mapDispatchToProps = dispatch => ({
    toggleMenuPopupShow: () => dispatch(toggleMenuPopupShow()),
    checkGoal: goal => dispatch(checkGoal(goal)),
    updateProgressPoints: goal => dispatch(updateProgressPoints(goal)),
    updateProgressPercent: () => dispatch(updateProgressPercent()),
});

const mapStateToProps = state => ({
    goalList: state.gameData.goalList,
});

export default connect(mapStateToProps,mapDispatchToProps)(GoalList);


