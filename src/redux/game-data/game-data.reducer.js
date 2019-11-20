import { GameDataActionTypes } from './game-data.types';
import { countGoals, calcPointsToLevel, updateProgressPoints, calculatePercentage, updateLevel, updateEarnedPoints, addGoal, checkGoal, completeGoalsTest, completeGoals, resetEarnedPoints, removeGoal, addReward } from './game-data.utils';
import { precreatedGoals, precreatedRewards } from '../../test-scripts/goals-test';
import { removeReward } from './game-data.actions';

const INITIAL_STATE = {
    level: 1,
    lastRewardLevel: 1,
    pointsToNextLevel: 1, //number of points to get from last level to next level
    earnedPoints: 0, //earned number of points for the level . . .earnedPoints > pointsToNextLevel means gain a level
    earnedLevelPercent: 0, //percentage of level completed
    progressPoints: 0,
    progressLevelPercent: 0,
    nextGoalID: 13,
    goalPointTotal: 78, //total points of all the goals to get an average
    lastUpdate: null,
    showRewardPopup: false,
    goalList: precreatedGoals,
    goalCount: 12,
    rewards: precreatedRewards,
    
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
        case GameDataActionTypes.CALC_POINTS_TO_LEVEL:
            return {
                ...state,
                pointsToNextLevel: calcPointsToLevel(state.level, state.goalPointTotal, state.goalCount),
            }
        case GameDataActionTypes.ADD_REWARD:
            return {
                ...state,
                rewards: addReward(state.rewards, action.payload),
            }
        case GameDataActionTypes.REMOVE_REWARD:
            return {
                ...state,
                rewards: removeReward(state.rewards, action.payload),
            }


        //--------Goal Actions--------//
        case GameDataActionTypes.UPDATE_LEVEL:
            return updateLevel(state);
        case GameDataActionTypes.REMOVE_GOAL:
            return {
                ...state,
                goalList: removeGoal(state.goalList, action.payload),
                goalPointTotal: state.goalPointTotal - action.payload.points,
                goalCount: state.goalCount - 1,
            };
        case GameDataActionTypes.ADD_GOAL:
            return {
                ...state,
                goalList: addGoal(state.goalList, state.nextGoalID, action.payload),
                nextGoalID: state.nextGoalID + 1,
                goalPointTotal: state.goalPointTotal + action.payload.points,
                goalCount: state.goalCount + 1,
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
                const newState = completeGoalsTest(state);
                newState.goalList = {...newState.goalList};
                return newState;
            };
        case GameDataActionTypes.COMPLETE_GOALS:
            {
                const test = completeGoals(state);
                test.goalList = {...test.goalList};
                return test;

            };
        case GameDataActionTypes.COUNT_GOALS:
            {
                return {
                    ...state,
                    goalCount: countGoals(state.goalList),
                }
            }
        case GameDataActionTypes.TOGGLE_REWARD_POPUP:
            return {
                ...state,
                showRewardPopup: !state.showRewardPopup,
            };
        default:
            return {...state};
    }
};

export default gameDataReducer;