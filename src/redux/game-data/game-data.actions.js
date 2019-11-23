import { GameDataActionTypes } from './game-data.types';
import { firestore } from '../../firebase/firebase.utils';


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

export const calcPointsToLevel = () => ({
    type: GameDataActionTypes.CALC_POINTS_TO_LEVEL,
});


//------- Goal Actions -------//

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

export const countGoals = () => ({
    type: GameDataActionTypes.COUNT_GOALS
});

export const toggleRewardPopup = toggle => ({
    type: GameDataActionTypes.TOGGLE_REWARD_POPUP,
    payload: toggle,
});

export const addReward = rewardData => ({
    type: GameDataActionTypes.ADD_REWARD,
    payload: rewardData,
});

export const removeReward = rewardData => ({
    type: GameDataActionTypes.REMOVE_REWARD,
    payload: rewardData,
});

export const saveState = (currentUser) => ({
    type: GameDataActionTypes.SAVE_STATE,
    payload: currentUser,
});

export const setData = (newState) => ({
    type: GameDataActionTypes.SET_DATA,
    payload: newState,
});

export const getState = (currentUser) => { 
    const currentUserID = currentUser.uid ? currentUser.uid : currentUser.id;
    return (dispatch) => {
        const gameDataDocRef = firestore.collection("gameData").doc(`${ currentUserID }`);

        gameDataDocRef.get()
            .then( doc => {
                dispatch(setData(doc.data()));
            } )
                
    }
}


