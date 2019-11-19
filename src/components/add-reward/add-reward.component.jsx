import React from 'react';
import './add-reward.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addReward, toggleRewardPopup } from '../../redux/game-data/game-data.actions';


const AddReward = ({goalType, toggleRewardPopup, addReward}) => (
    <div className='add-reward-container'>
        Add Reward
        <input className="reward-name" type="text" 
            placeholder="Enter Reward" 
            required />
        <select required>
            <option value="" 
                    >Select Reward Value:</option>
            <option>Minor</option>
            <option>Major</option>
            <option>Epic</option>
        </select>
        <CustomButton onClick={() => {
            const rewardData = {rewardName:'test1',rewardType:'epic'};
            addReward(rewardData);
            toggleRewardPopup();
        }}>
            Accept
        </CustomButton>
    </div>
);

const mapDispatchToProps = dispatch => ({
    addReward: rewardData => dispatch(addReward(rewardData)),
    toggleRewardPopup: dispatch(toggleRewardPopup()),
})

export default connect(null,mapDispatchToProps)(AddReward);