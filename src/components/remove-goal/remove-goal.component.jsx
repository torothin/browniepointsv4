import React from 'react';
import './remove-goal.styles.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { updateLevel, removeGoal, checkGoal, updateProgressPoints, updateProgressPercent, calcPointsToLevel, updateEarnedPercent } from '../../redux/game-data/game-data.actions';
import { menuSelection, toggleMenuPopupShow, toggleMenuHidden } from '../../redux/menu/menu.actions';

class RemoveGoal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            goalIDToBeRemoved: 0,
            goalList: this.props.goalList,
        };
    }

    findGoalFromID = (goalList,goalIDInput) => {
        
        const goalID = Number(goalIDInput);

        let newGoal = null;
        
        goalList['todo'].forEach(goal => {
            if(goal.ID === goalID) newGoal = goal;
        });
        goalList['daily'].forEach(goal => {
            if(goal.ID === goalID) newGoal = goal;
        });
        goalList['weekly'].forEach(goal => {
            if(goal.ID === goalID) newGoal = goal;
        });
        goalList['monthly'].forEach(goal => {
            if(goal.ID === goalID) newGoal = goal;
        });

        return newGoal;
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const { checkGoal,updateProgressPoints,updateProgressPercent,
            removeGoal,toggleMenuPopupShow,menuSelection,goalList, 
            updateEarnedPercent, calcPointsToLevel, updateLevel } = this.props;
        
        const { goalIDToBeRemoved } = this.state;

        const goal = this.findGoalFromID(goalList,goalIDToBeRemoved);

        if(goal.checked)
        {
            const checked = !goal.checked;
            checkGoal(goal);
            updateProgressPoints({checked,goal}); 
        }
    
        removeGoal(goal);
        calcPointsToLevel();
        updateEarnedPercent();
        updateProgressPercent();
        updateLevel();

        toggleMenuPopupShow();
        menuSelection("Close Popup");
    }

    handleChange = event => {
        const { name, value } = event.target;
        console.log(event.target)
        this.setState({ [name]: value });
    }

    render () {
        const { goalList } = this.state;
        return (
            <div className='remove-goal-container'>
                Remove Goal
                <form onSubmit={ this.handleSubmit }>
                    <select 
                        required
                        onChange={ this.handleChange }
                        name='goalIDToBeRemoved'
                        
                        >
                        <option value=''>Select Goal:</option>
                        {
                            goalList['todo'].map(goal => (
                                <option value={ goal.ID } key={ goal.ID }>{ goal.name }</option>
                            ))
                        }
                        {
                            goalList['daily'].map(goal => (
                                <option value={ goal.ID } key={ goal.ID }>{ goal.name }</option>
                            ))
                        }
                        {
                            goalList['weekly'].map(goal => (
                                <option value={ goal.ID } key={ goal.ID }>{ goal.name }</option>
                            ))
                        }
                        {
                            goalList['monthly'].map(goal => (
                                <option value={ goal.ID } key={ goal.ID }>{ goal.name }</option>
                            ))
                        }
                    </select>
                    <CustomButton wide type='submit'>Accept</CustomButton>
                </form>
            </div>
        )
    }
};

// const findGoalFromIDfds = (goalList,goalIDInput) => {
//     const goalID = Number(goalIDInput);
//     // console.log(goalList);

//     let newGoal = null;
    
//     goalList['todo'].forEach(goal => {
//         if(goal.ID === goalID) 
//         {  
//             console.log(goal.ID,goalID,goal.ID===goalID);
//             newGoal = { ...goal};
//         }
//     });
//     goalList['daily'].forEach(goal => {
//         if(goal.ID === goalID) 
//         {  
//             console.log(goal.ID,goalID,goal.ID===goalID);
//             newGoal = { ...goal};
//         }
//     });
//     goalList['weekly'].forEach(goal => {
//         if(goal.ID === goalID) 
//         {  

//             console.log(goal.ID,goalID,goal.ID===goalID);
//             newGoal = { ...goal};
//         }
//     });
//     goalList['monthly'].forEach(goal => {
//         if(goal.ID === goalID) 
//         {  
//             newGoal = { ...goal};
//         }
//     });
//     return newGoal;
// }

const mapStateToProps = state => ({
    goalList: state.gameData.goalList,
});

const mapDispatchToProps = dispatch => ({
    toggleMenuHidden: () => dispatch(toggleMenuHidden()),
    menuSelection: (selection) => dispatch(menuSelection(selection)),
    toggleMenuPopupShow: (result) => dispatch(toggleMenuPopupShow(result)),
    removeGoal: (goal) => dispatch(removeGoal(goal)),
    checkGoal: (goal) => dispatch(checkGoal(goal)),
    updateProgressPoints: goal => dispatch(updateProgressPoints(goal)),
    updateProgressPercent: () => dispatch(updateProgressPercent()),
    calcPointsToLevel: () => dispatch(calcPointsToLevel()),
    updateEarnedPercent: () => dispatch(updateEarnedPercent()),
    updateLevel: () => dispatch(updateLevel()),
});


export default connect(mapStateToProps,mapDispatchToProps)(RemoveGoal);