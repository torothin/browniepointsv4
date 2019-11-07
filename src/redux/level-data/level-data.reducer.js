import { LevelDataActionTypes } from './level-data.types';
import { updateProgressPoints, calculatePercentage, updateLevel, updateEarnedPoints } from './level-data.utils';
//import { updateProgress } from './level-data.utils';

const INITIAL_STATE = {
    level: 1,
    lastRewardLevel: 1,
    pointsToNextLevel: 1, //number of points to get from last level to next level
    earnedPoints: 0, //earned number of points for the level . . .earnedPoints > pointsToNextLevel means gain a level
    earnedLevelPercent: 0, //percentage of level completed
    progressPoints: 27,
    progressLevelPercent: 27,
}

// progress: {
//     total: 27,
//     todosProgress: 0,
//     dailyProgress: 0,
//     weeklyProgress: 0,
//     monthlyProgress: 0,
// },

const levelDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LevelDataActionTypes.UPDATE_PROGRESS_POINTS:
            return {
                ...state,
                progressPoints: updateProgressPoints(state.progressPoints,action.payload)
            };
        case LevelDataActionTypes.UPDATE_PROGRESS_PERCENT:
            return {
                ...state,
                progressLevelPercent: calculatePercentage(state.progressPoints,state.pointsToNextLevel) 
            };
        case LevelDataActionTypes.UPDATE_EARNED_POINTS:
            return {
                ...state,
                earnedPoints: updateEarnedPoints(state.earnedPoints,action.payload)
            };
        case LevelDataActionTypes.UPDATE_EARNED_PERCENT:
            return {
                ...state,
                earnedLevelPercent: calculatePercentage(state.earnedPoints,state.pointsToNextLevel) 
            };
        // case LevelDataActionTypes.UPDATE_LEVEL:
        //     return {
        //         ...state,
        //         level: updateLevel(state.earnedPoints,state.pointsToNextLevel) 
        //     };
        case LevelDataActionTypes.UPDATE_LEVEL:
            return updateLevel(state);

        default:
            return state;
    }
};

export default levelDataReducer;