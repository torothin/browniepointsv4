import { LevelDataActionTypes } from './level-data.types';
import { updateProgressPoints, calculateProgressPercent } from './level-data.utils';
//import { updateProgress } from './level-data.utils';

const INITIAL_STATE = {
    level: 999,
    nextGoalID: 1,
    lastUpdate: null,
    lastRewardLevel: 1,
    pointsToNextLevel: 1, //number of points to get from last level to next level
    currentPoints: 10, //current number of points for the level . . .currPoints > pointsToNextLevel means gain a level
    progressPoints: 90,
    progress: {
        total: 0,
        todosProgress: 0,
        dailyProgress: 0,
        weeklyProgress: 0,
        monthlyProgress: 0,
    },
    goalPointTotal: 0, //total points of all the goals to get an average
    currentLevelPercent: 0, //percentage of level completed
    progressLevelPercent: 0,
}

const levelDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LevelDataActionTypes.UPDATE_PROGRESS_POINTS:
            return {
                ...state,
                progress: updateProgressPoints(state.progress,action.payload)
            };
        case LevelDataActionTypes.CALC_PROGRESS_PERCENT:
            return {
                ...state,
                progressLevelPercent: Math.ceil( state.progress.total /  state.pointsToNextLevel )
            }
        default:
            return state;
    }
};

export default levelDataReducer;