import React from 'react';
import './user-section.styles.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import RewardImage from '../reward-image/reward-image.component';
import RewardPopup from '../reward-popup/reward-popup.component';
import {  
            completeGoalsTest, 
            updateLevel,
            updateEarnedPoints,
            updateEarnedPercent,
            calcPointsToLevel,
            updateProgressPercent,
            countGoals,
            toggleRewardPopup,
        } from '../../redux/game-data/game-data.actions';

class UserSection extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            level: 1,
            autoUpdate: false,
        };
    } 

    componentDidUpdate () {
        //console.log("user section updated");
        this.updateLevel(this.props.level);
    }

    componentDidMount () {
        // updates when the app is first loaded
        this.props.calcPointsToLevel();
        this.props.completeGoalsTest();
        this.props.updateLevel();

        // these autoupdates occur to test for completions everytime window becomes focus or
        // leaves focus so that if the game is left open over night the game will update when
        // becomes the focus again
        if(this.state.autoUpdate)
        {
            this.autoUpdate('focus');
            this.autoUpdate('blur');
        }
        
    }

    render () {

        const { currentUser, level, progressLevelPercent, earnedLevelPercent, showRewardPopup } = this.props;

        const progressStyle =  {
            width: `${progressLevelPercent}%`,
        }
    
        const currentStyle = {
            width: `${earnedLevelPercent}%`,
        }

        return (
            <div className='user-section'>
                {
                    showRewardPopup ? <RewardPopup level={level} /> : null
                }
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
                    <RewardImage level={ level } />
                </div>
                <CustomButton onClick={() => 
                    { 
                        this.props.completeGoalsTest();
                        this.props.updateLevel();
                        this.props.updateEarnedPercent();
                        
                        
                    }}>Check Completion (AutoUpdate on: {`${this.state.autoUpdate})`}</CustomButton>
            </div>
        )}
    
    autoUpdate = (eventType) => {
        window.addEventListener(eventType, (event) => {
            
            this.props.completeGoalsTest();
            this.props.updateLevel();
            this.props.updateEarnedPercent();
        });
    }

    updateLevel = (level) => {
        if(level !== this.state.level)
        {
            this.props.toggleRewardPopup();
            this.setState({level:level});
        }
    }
    
};

// remove when done testing
const mapDispatchToProps = dispatch => ({
    updateLevel: () => dispatch(updateLevel()),
    completeGoalsTest: () => dispatch(completeGoalsTest()),
    updateEarnedPoints: (points) => dispatch(updateEarnedPoints(points)),
    updateEarnedPercent: () => dispatch(updateEarnedPercent()),
    calcPointsToLevel: () => dispatch(calcPointsToLevel()),
    updateProgressPercent: () => dispatch(updateProgressPercent()),
    countGoals: () => dispatch(countGoals()),
    toggleRewardPopup: () => dispatch(toggleRewardPopup()),

});

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    level: state.gameData.level,
    progressLevelPercent: state.gameData.progressLevelPercent,
    earnedLevelPercent: state.gameData.earnedLevelPercent,
    showRewardPopup: state.gameData.showRewardPopup,

});

export default connect(mapStateToProps,mapDispatchToProps)(UserSection);