import { LevelDataActionTypes } from './level-data.types';
// import {  } from './level-data.utils';

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
    currentLevelPercent: 20, //percentage of level completed
    progressLevelPercent: 70
}

const levelDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case MenuActionTypes.TOGGLE_MENU:
        //     return {
        //         ...state,
        //         menuHidden: !state.menuHidden
        //     };
        default:
            return state;
    }
};

export default levelDataReducer;