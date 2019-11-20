import React from 'react';
import './reward-popup.styles.scss';
import RewardImage from '../reward-image/reward-image.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { toggleRewardPopup } from '../../redux/game-data/game-data.actions';

const RewardPopup = ({level, rewardList, dispatch}) => (
    <div className='reward-popup-background'>
        <div className='reward-popup'>
            <div className='popup-contents'>
                <div className='reward-image-container'>
                    <RewardImage popup level={level} />
                </div>
                
                <div className='reward-type-container'>
                    { rewardText(rewardType(level)) }
                    <br/><br/>
                    { randomReward( rewardList ,rewardType(level)) }
                </div>
                <div className='button-container'>
                    <CustomButton 
                        wide
                        onClick = {() => { dispatch(toggleRewardPopup()) }}>Accept
                    </CustomButton>
                </div>
            </div>
        </div>
    </div>
)

const rewardType = (level) => {
    level -= 1;
    if(level % 3 === 0) return 'epic';
    else if(level % 2 === 0) return 'major';
    else return 'minor';
}

const rewardText = (rewardType) => {
    if(rewardType === 'epic') return "Epic Reward";
    else if(rewardType === 'major') return "Major Reward";
    else return "Minor Reward";
}

const randomReward = (rewardList, rewardType) => {
    const myArray = rewardList[rewardType];
    return myArray[Math.floor(Math.random() * myArray.length)];
}

const mapStateToProps = state => ({
    rewardList: state.gameData.rewards,
})

export default connect(mapStateToProps)(RewardPopup);
