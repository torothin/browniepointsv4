import React from 'react';
import './user-section.styles.scss';
import { connect } from 'react-redux';
// import CustomButton from '../custom-button/custom-button.component';
import {  
            completeGoalsTest, 
            updateLevel,
            updateEarnedPoints,
            updateEarnedPercent 
        } from '../../redux/game-data/game-data.actions';

class UserSection extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
        };
    } 

    componentDidUpdate () {
        console.log("user section updated");
        
    }

    componentDidMount () {
        // updates when the app is first loaded
        this.props.completeGoalsTest();
        this.props.updateLevel();

        // these autoupdates occur to test for completions everytime window becomes focus or
        // leaves focus so that if the game is left open over night the game will update when
        // becomes the focus again
        this.autoUpdate('focus');
        this.autoUpdate('blur');
    }

    render () {

        const { currentUser, level, progressLevelPercent, earnedLevelPercent, updateLevel } = this.props;

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
                {/* <CustomButton onClick={ updateLevel }>Update Level</CustomButton>
                <CustomButton onClick={() => 
                            { 
                                this.props.completeGoalsTest();
                                this.props.updateEarnedPercent();
                            }}>Check Completion</CustomButton> */}
            </div>
        )}
    
    autoUpdate = (eventType) => {
        window.addEventListener(eventType, (event) => {
        console.log(eventType, "update");
        this.props.completeGoalsTest();
        this.props.updateLevel();
        });
    }
};



// remove when done testing
const mapDispatchToProps = dispatch => ({
    updateLevel: () => dispatch(updateLevel()),
    completeGoalsTest: () => dispatch(completeGoalsTest()),
    updateEarnedPoints: (points) => dispatch(updateEarnedPoints(points)),
    updateEarnedPercent: () => dispatch(updateEarnedPercent()),

});

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    level: state.gameData.level,
    progressLevelPercent: state.gameData.progressLevelPercent,
    earnedLevelPercent: state.gameData.earnedLevelPercent,

});

export default connect(mapStateToProps,mapDispatchToProps)(UserSection);