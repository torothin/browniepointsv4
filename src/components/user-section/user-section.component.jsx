import React from 'react';
import './user-section.styles.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { updateLevel,updateEarnedPoints,updateEarnedPercent } from '../../redux/level-data/level-data.actions';
import { completeGoalsTest,resetEarnedPoints } from '../../redux/goals/goals.actions';

class UserSection extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        };
    } 

    componentWillUpdate () {
          
    }

    componentDidUpdate () {
        console.log("user section updated");
        this.props.updateEarnedPoints(this.props.goalEarnedPoints);
        this.props.updateEarnedPercent();
        this.props.resetEarnedPoints();
    }

    render () {

        const { currentUser, level, progressLevelPercent, earnedLevelPercent, updateLevel, goalEarnedPoints } = this.props;

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
                <CustomButton onClick={() => 
                            { 
                                this.props.completeGoalsTest();
                            }}>Check Completion</CustomButton>
            </div>
        )}
    // handleClick = async () => {
    //     let test =  new Promise(
    //         (resolve) => {
    //             this.state.completeGoalsTest();
    //             setTimeout(() => resolve("done"), 5000);
    //             this.setState({goalEarnedPoints:this.props.goalEarnedPoints})
    //         });

    //     await this.state.updateEarnedPoints(this.state.goalEarnedPoints); 
    //     await this.state.resetEarnedPoints();
    // };
};



// remove when done testing
const mapDispatchToProps = dispatch => ({
    updateLevel: () => dispatch(updateLevel()),
    completeGoalsTest: () => dispatch(completeGoalsTest()),
    resetEarnedPoints: () => dispatch(resetEarnedPoints()),
    updateEarnedPoints: (points) => dispatch(updateEarnedPoints(points)),
    updateEarnedPercent: () => dispatch(updateEarnedPercent()),

});

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    level: state.levelData.level,
    progressLevelPercent: state.levelData.progressLevelPercent,
    earnedLevelPercent: state.levelData.earnedLevelPercent,
    goalEarnedPoints: state.goals.goalEarnedPoints,

});

export default connect(mapStateToProps,mapDispatchToProps)(UserSection);