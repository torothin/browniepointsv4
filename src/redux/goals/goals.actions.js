import { GoalsActionTypes } from './goals.types';

export const addGoal = goal => ({
    type: GoalsActionTypes.ADD_GOAL,
    payload: goal
});

export const removeGoal = goal => ({
    type: GoalsActionTypes.REMOVE_GOAL,
    payload: goal
});

export const newGoal = goal => ({
    type: GoalsActionTypes.NEW_GOAL,
    payload: goal
});

export const checkGoal = (goal) => ({
    type: GoalsActionTypes.CHECK_GOAL,
    payload: goal
});