

export const updateLevel = ({ level }) => {
    return level++;
}

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
    console.log("updateProgressPoints called")
    const newProgressPoints = progressPoints;

    if(goal.checked) {
        newProgressPoints.total += goal.points;
    }
    else {
        newProgressPoints.total -= goal.points;
    }
    return newProgressPoints;
}

export const calculateProgressPercentage = ({points, pointsToNextLevel}) => {
    return Math.ceil( points /  pointsToNextLevel );
}

// export const updateProgressPoints = ({ checkedGoals }) => {
//    // console.log("_updateProgressPoints called");
//     const newProgress = zeroProgressPoints();

//     checkedGoals.todos.forEach( (goal) => {
//         newProgress.todosProgress += goal.goalPoints;
//         newProgress.total += goal.goalPoints;
//     });
//     checkedGoals.dailyGoals.forEach( (goal) => {
//         newProgress.dailyProgress += goal.goalPoints;
//         newProgress.total += goal.goalPoints;
//     });
//     checkedGoals.weeklyGoals.forEach( (goal) => {
//         newProgress.weeklyProgress += goal.goalPoints;
//         newProgress.total += goal.goalPoints;
//     });
//     checkedGoals.monthlyGoals.forEach( (goal) => {
//         newProgress.monthlyProgress += goal.goalPoints;
//         newProgress.total += goal.goalPoints;
//     });

//     return newProgress;
// }

export const calcLevel = ({level,currentPoints,pointsToNextLevel}) => {
    //console.log('\n_calcLevel called')
    const currPointsToLevel = pointsToNextLevel;
    const tempPoints = currentPoints - currPointsToLevel;
    
    while(tempPoints >= 0) {
        level++;
        currentPoints = tempPoints;
        this._updatePointsToNextLevel();
        currPointsToLevel = pointsToNextLevel;
        tempPoints = currentPoints - currPointsToLevel;
    }
}

