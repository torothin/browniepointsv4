import { GameDataActionTypes } from './game-data.types';
import { updateProgressPoints, calculatePercentage, updateLevel, updateEarnedPoints, addGoal, checkGoal, completeGoalsTest, completeGoals, resetEarnedPoints } from './game-data.utils';
import { precreatedGoals, precreatedCompletedGoals } from '../../test-scripts/goals-test';

const INITIAL_STATE = {
    level: 1,
    lastRewardLevel: 1,
    pointsToNextLevel: 78, //number of points to get from last level to next level
    earnedPoints: 0, //earned number of points for the level . . .earnedPoints > pointsToNextLevel means gain a level
    earnedLevelPercent: 0, //percentage of level completed
    progressPoints: 27,
    progressLevelPercent: 35,
    nextGoalID: 13,
    goalPointTotal: 78, //total points of all the goals to get an average
    lastUpdate: null,
    goalList: precreatedGoals,
    completedGoalList: precreatedCompletedGoals,
}

const gameDataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //--------level Actions--------//
        case GameDataActionTypes.UPDATE_PROGRESS_POINTS:
            return {
                ...state,
                progressPoints: updateProgressPoints(state.progressPoints,action.payload)
            };
        case GameDataActionTypes.UPDATE_PROGRESS_PERCENT:
            return {
                ...state,
                progressLevelPercent: calculatePercentage(state.progressPoints,state.pointsToNextLevel) 
            };
        case GameDataActionTypes.UPDATE_EARNED_POINTS:
            return {
                ...state,
                earnedPoints: updateEarnedPoints(state.earnedPoints,action.payload)
            };
        case GameDataActionTypes.UPDATE_EARNED_PERCENT:
            return {
                ...state,
                earnedLevelPercent: calculatePercentage(state.earnedPoints,state.pointsToNextLevel) 
            };

        //--------Goal Actions--------//
        case GameDataActionTypes.UPDATE_LEVEL:
            return updateLevel(state);
        case GameDataActionTypes.REMOVE_GOAL:
            return {
                ...state,
            };
        case GameDataActionTypes.ADD_GOAL:
            return {
                ...state,
                goalList: addGoal(state.goalList, state.nextGoalID, action.payload),
                nextGoalID: state.nextGoalID + 1,
            };
        case GameDataActionTypes.CHECK_GOAL:
            return {
                ...state,
                goalList: checkGoal(state.goalList, action.payload),
            };
        case GameDataActionTypes.RESET_EARNED_POINTS:
            return {
                ...state,
                goalEarnedPoints: resetEarnedPoints(),
            };
        case GameDataActionTypes.COMPLETE_GOALS_TEST:
            {
                const test = completeGoalsTest(state);
                test.goalList = {...test.goalList};
                return test;

            };
        case GameDataActionTypes.COMPLETE_GOALS:
            {
                const test = completeGoals(state);
                test.goalList = {...test.goalList};
                return test;

            };
        
        default:
            return {...state};
    }
};

export default gameDataReducer;