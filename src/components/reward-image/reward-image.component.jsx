import React from 'react';
import './reward-image.styles.scss';

import EpicImage from '../assets/reward-3.jpg';
import MajorImage from '../assets/reward-2.jpg';
import MinorImage from '../assets/reward-1.jpg';

const rewardString = (level) => {

    if( level % 3 === 0) return EpicImage;
    else if( level % 2 === 0) return MajorImage;
    else return MinorImage;
   
}

const RewardImage = ({level, popup}) => (
    <div className='reward-image-container'>
        {
            <img 
                className='reward-image' 
                alt='Reward'
                src={ popup ? rewardString(level - 1) : rewardString(level) } 
            />
        }    
    </div>
)


export default RewardImage;