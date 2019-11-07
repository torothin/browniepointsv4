import { calcNextLevel } from '../../helpers/level-curve.helper';

export const zeroProgressPoints = () => {
    //console.log("_zeroProgressPoints called");
    return {
        total: 0,
        todosProgress: 0,
        dailyProgress: 0,
        weeklyProgress: 0,
        monthlyProgress: 0,
    }
}

export const updateProgressPoints = (progressPoints,goal) => {
    // console.log("updateProgressPoints called")
    let newProgressPoints = progressPoints;

    if(goal.checked) {
        newProgressPoints += goal.points;
    }
    else {
        newProgressPoints -= goal.points;
    }
    return newProgressPoints;
}

export const calculatePercentage = (points, pointsToNextLevel) => {
    const percentage = Math.round( points /  pointsToNextLevel * 100 );

    if(percentage > 100) {
        return 100;
    }
    
    return percentage;
}

export const updateEarnedPoints = (earnedPoints,points) => {
    //console.log("updateEarnedPoints called");
    console.log(earnedPoints,points);
    return earnedPoints + points;
}

export const updateEarnedPercent = (earnedPoints,points) => {
    //console.log("updateEarnedPoints called");
    console.log(earnedPoints,points);
    return earnedPoints + points;
}

// export const updateLevel = ({level,earnedPoints,pointsToNextLevel}) => {
//     let currPointsToLevel = pointsToNextLevel;
//     let tempPoints = earnedPoints - currPointsToLevel;
//     let newLevel = level;
    
//     while(tempPoints >= 0) {
//         newLevel++;
//         earnedPoints = tempPoints;

//         // calcNextLevel(level,goalPointTotal,goalCount)
//         // this._updatePointsToNextLevel();

//         //_updatePointsToNextLevel () {
//         //  this.userData.pointsToNextLevel = this._calcNextLevel(this.userData.level);
//         //  },
            
//         currPointsToLevel = pointsToNextLevel;
//         tempPoints = earnedPoints - currPointsToLevel;
//     }

//     return newLevel;
// }

export const updateLevel = state => {
    
    const newState = {...state};

    let currPointsToLevel = newState.pointsToNextLevel;
    let tempPoints = newState.earnedPoints - currPointsToLevel;
    
    while(tempPoints >= 0) {
        newState.level++;
        newState.earnedPoints = tempPoints;
        newState.pointsToNextLevel = calcNextLevel(newState.level);
        currPointsToLevel = newState.pointsToNextLevel;
        tempPoints = newState.earnedPoints - currPointsToLevel;
        // console.log( "newState.level, newState.earnedPoints, newState.pointsToNextLevel, currPointsToLevel, tempPoints");
        // console.log( newState.level, newState.earnedPoints, newState.pointsToNextLevel, currPointsToLevel, tempPoints);
    }

    newState.earnedLevelPercent = calculatePercentage(newState.earnedPoints,newState.pointsToNextLevel) 
    // console.log("newState.earnedLevelPercent",newState.earnedLevelPercent)

    return newState;
}
