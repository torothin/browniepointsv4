import { LevelDataActionTypes } from './level-data.types';

export const updateProgressPoints = goal => ({
    type: LevelDataActionTypes.UPDATE_PROGRESS_POINTS,
    payload: goal
});

export const calcProgressPercent = () => ({
    type: LevelDataActionTypes.CALC_PROGRESS_PERCENT,
    //payload: points
})