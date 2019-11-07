import React from 'react';
import './user-section.styles.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { updateLevel,updateEarnedPoints } from '../../redux/level-data/level-data.actions';
import { completeGoalsTest,resetEarnedPoints } from '../../redux/goals/goals.actions';

const UserSection = ({ currentUser, level, progressLevelPercent, earnedLevelPercent, updateLevel, completeGoalsTest, resetEarnedPoints, updateEarnedPoints, goalEarnedPoints }) => {
    
    const progressStyle =  {
        width: `${progressLevelPercent}%`,
    }

    const currentStyle = {
        width: `${earnedLevelPercent}%`,
    }

    return (
        <div className='user-section'>
            <div className='user-displayName'>
            {
                currentUser && <div>{ currentUser.displayName }</div>
            }
            </div>
            <div className='progress-bar-container'>
                <div className='current-level-bar' style={currentStyle}>{ earnedLevelPercent }%</div>
                <div className='progress-bar' style={progressStyle} ></div>
                
            </div>
            <div className='level-container'>
                <div className='level'><div>{ level }</div></div>
                <div className='reward-image'>Reward<div></div></div>
            </div>
            <CustomButton onClick={ updateLevel }>Update Level</CustomButton>
            <CustomButton onClick={async () => 
                          { 
                              await completeGoalsTest();
                              console.log({goalEarnedPoints});
                              await updateEarnedPoints({goalEarnedPoints}); 
                              await resetEarnedPoints();
                          }}>Check Completion</CustomButton>
        </div>
    )
};

// remove when done testing
const mapDispatchToProps = dispatch => ({
    updateLevel: () => dispatch(updateLevel()),
    completeGoalsTest: () => dispatch(completeGoalsTest()),
    resetEarnedPoints: () => dispatch(resetEarnedPoints()),
    updateEarnedPoints: (points) => dispatch(updateEarnedPoints(points)),

});

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    level: state.levelData.level,
    progressLevelPercent: state.levelData.progressLevelPercent,
    earnedLevelPercent: state.levelData.earnedLevelPercent,
    goalEarnedPoints: state.goals.goalEarnedPoints,

})

export default connect(mapStateToProps,mapDispatchToProps)(UserSection);