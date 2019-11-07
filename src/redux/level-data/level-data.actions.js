import { LevelDataActionTypes } from './level-data.types';

export const updateProgressPoints = goal => ({
    type: LevelDataActionTypes.UPDATE_PROGRESS_POINTS,
    payload: goal
});

export const updateProgressPercent = () => ({
    type: LevelDataActionTypes.UPDATE_PROGRESS_PERCENT,
    //payload: points
});

export const updateLevel = () => ({
    type: LevelDataActionTypes.UPDATE_LEVEL,
});

export const updateEarnedPoints = points => ({
    type: LevelDataActionTypes.UPDATE_EARNED_POINTS,
    payload: points
});

export const updateEarnedPercent = () => ({
    type: LevelDataActionTypes.UPDATE_EARNED_PERCENT,
});