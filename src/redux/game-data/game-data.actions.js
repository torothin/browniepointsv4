import { GameDataActionTypes } from './game-data.types';

export const updateProgressPoints = ({checked,goal}) => ({
    type: GameDataActionTypes.UPDATE_PROGRESS_POINTS,
    payload: {checked,goal}
});

export const updateProgressPercent = () => ({
    type: GameDataActionTypes.UPDATE_PROGRESS_PERCENT,
});

export const updateLevel = () => ({
    type: GameDataActionTypes.UPDATE_LEVEL,
});

export const updateEarnedPoints = points => ({
    type: GameDataActionTypes.UPDATE_EARNED_POINTS,
    payload: points
});

export const updateEarnedPercent = () => ({
    type: GameDataActionTypes.UPDATE_EARNED_PERCENT,
});

export const addGoal = goal => ({
    type: GameDataActionTypes.ADD_GOAL,
    payload: goal
});

export const removeGoal = goal => ({
    type: GameDataActionTypes.REMOVE_GOAL,
    payload: goal
});

export const checkGoal = (goal) => ({
    type: GameDataActionTypes.CHECK_GOAL,
    payload: goal
});

export const completeGoalsTest = () => ({
    type: GameDataActionTypes.COMPLETE_GOALS_TEST
});

export const completeGoals = () => ({
    type: GameDataActionTypes.COMPLETE_GOALS
});

export const resetEarnedPoints = () => ({
    type: GameDataActionTypes.RESET_EARNED_POINTS
});