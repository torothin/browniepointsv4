import React from 'react';
import './add-reward.styles.scss';

const AddReward = ({goalType}) => (
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
    </div>
);

export default AddReward;