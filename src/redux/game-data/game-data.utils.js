import { newBasicDate, leftGreaterRight, 
    leftGreaterOrEqualRight, newCheckedDate } from '../../helpers/basic-date.helper';
import { calcNextLevel } from '../../helpers/level-curve.helper';

export const addGoal = (currentGoals, goalID, newGoal) => {
    
    const newGoalList = {...currentGoals};
    const {name, type, points} = newGoal;
    
    const goal = {
        name: name,
        type: type,
        ID: goalID,
        startDate: new Date(),
        lastCompleted: null,
        nextCompletion: null,
        points: points,
        checked: false,
    }

    newGoalList[type].push(goal);

    return newGoalList;
}

export const removeGoal = (goalList, goal) => {
    let newGoalList = {...goalList};
    newGoalList[goal.type] = goalList[goal.type]
        .filter((goalInput) => goalInput.ID !== goal.ID);
    
    return newGoalList;
}

export const checkGoal = (currentGoals,goal) => {
    
    const tempGoal = {...goal};
    const tempGoals = {...currentGoals};

    //needs to be fixed
    if(tempGoal.checked) { // first if the goal is checked uncheck
        tempGoal.checked = false;
        tempGoal.nextCompletion = null;

        //return tempGoal;
    }
    else if(!tempGoal.checked){
        tempGoal.checked = true;
        tempGoal.nextCompletion = newCheckedDate(goal.type);

        //for testing
        tempGoal.nextCompletion.year -= 1;
    }
    else {
        return currentGoals;
    }

    // array of specific goal type
    const tempGoalsArray = tempGoals[tempGoal.type];
    // console.log("just before error",tempGoals[tempGoal.type],tempGoal.type,tempGoal)
    // index of goal in the array
    const goalIndex = indexOfIncluded(tempGoalsArray, tempGoal);
    
    if(goalIndex >= 0)
    {
        // goal in the array updated to tempGoal
        tempGoalsArray[goalIndex] = tempGoal;

        //tempGoalsArray overwrites tempGoals for this goal type
        tempGoals[tempGoal.type] = tempGoalsArray;
    }

    return tempGoals;
}

export const indexOfIncluded = (goalArray, inputGoal) => {
    // console.log("indexOfIncluded",goalArray, inputGoal);
    for(let i = 0; i < goalArray.length; i++)
    {
        if(goalArray[i].ID === inputGoal.ID)
        {
            return i;
        }
    }
    return -1;
}

export const completeGoalsTest = state => {
    let newState = {...state}
    newState.lastUpdate = newBasicDate();
    newState.lastUpdate.year = 2018;

    // console.log("completeGoalsTest",state === newState);
    let returnState = {...completeGoals(newState)}
    returnState.lastUpdate = newBasicDate();
    returnState.lastUpdate.year = 2018;
    return returnState;
}

export const resetEarnedPoints = () => {
    return 0;
}

export const completeGoals = state => {
    const todaysDate = newBasicDate();
    let earnedPoints = state.earnedPoints;
    let progressPoints = state.progressPoints;
    let goalCount = state.goalCount;
    let goalPointTotal = state.goalPointTotal;
    let newState = {...state};
    // console.log("completeGoals",state === newState);

//     // -------------   Testing Setup   -------------
//     // console.log('----------------------------------');
//     // console.log("_completeGoals called");
//     // todaysDate.day = 1;
//     // todaysDate.month = 6;
//     // console.log('modified todaysDate')
//     // console.log('todaysdate:');
//     // console.log(this._printMyDate(todaysDate));
//     // this.userData.lastUpdate.year = 2018;
//     // console.log('modified lastupdate');
//     // console.log(this._printMyDate(this.userData.lastUpdate));


//     // -------------   End Testing Setup   -------------
//     // console.log('this._compareDates(todaysDate,this.userData.lastUpdate)');
//     // console.log(this._compareDates(todaysDate,this.userData.lastUpdate));

    if(!newState.lastUpdate || leftGreaterRight(todaysDate,newState.lastUpdate))
    {
        //console.log('updating complete goals');
        
        // completing todo goals
        let todoCheckedGoalsLength = newState.goalList.todo.length;
        let i = todoCheckedGoalsLength;

        while(i > 0)
        {
            let tempTodoGoal = newState.goalList.todo.pop();
            //console.log(tempDailyGoal);
            
            //if the goal is not really complete i.e proper amount of time has not passed
            //this is true if today > checkedDate (1 day has passed)
        
            if( tempTodoGoal.nextCompletion && 
                leftGreaterOrEqualRight(todaysDate,tempTodoGoal.nextCompletion) &&
                tempTodoGoal.checked) {

                earnedPoints += tempTodoGoal.points;
                progressPoints -= tempTodoGoal.points;
                goalCount -= 1;
                goalPointTotal -= tempTodoGoal.points;
                
            }
            else
            {
                newState.goalList.todo.unshift(tempTodoGoal);
            }

            
            //checkGoal(newState.goalList,newState.goalList.daily);
            tempTodoGoal = null;  
            i--;
        }

        // completing daily goals
        let dailyCheckedGoalsLength = newState.goalList.daily.length;
        let j = dailyCheckedGoalsLength;

        while(j > 0)
        {
            let tempDailyGoal = newState.goalList.daily.pop();
            //console.log(tempDailyGoal);
            
            //if the goal is not really complete i.e proper amount of time has not passed
            //this is true if today > checkedDate (1 day has passed)
         
            if( tempDailyGoal.nextCompletion && 
                leftGreaterOrEqualRight(todaysDate,tempDailyGoal.nextCompletion) &&
                tempDailyGoal.checked) {

                    tempDailyGoal.checked = false;
                    tempDailyGoal.nextCompletion = null;
                    tempDailyGoal.lastCompleted = todaysDate;

                //how to update earned points in the level-data reducer
                earnedPoints += tempDailyGoal.points;
                progressPoints -= tempDailyGoal.points;
                
            }

            newState.goalList.daily.unshift(tempDailyGoal);
            //checkGoal(newState.goalList,newState.goalList.daily);
            tempDailyGoal = null;  
            j--;
        }

        // weekly goal checking
        let weeklyCheckedGoalsLength = newState.goalList.weekly.length;
        let k = weeklyCheckedGoalsLength;

        while(k > 0)
        {
            let tempWeeklyGoal = newState.goalList.weekly.pop();
            //console.log(tempWeeklyGoal);
            
            //if the goal is not really complete i.e proper amount of time has not passed
            //this is true if today > checkedDate (1 day has passed)
         
            if( tempWeeklyGoal.nextCompletion && 
                leftGreaterOrEqualRight(todaysDate,tempWeeklyGoal.nextCompletion) &&
                tempWeeklyGoal.checked) {

                    tempWeeklyGoal.checked = false;
                    tempWeeklyGoal.nextCompletion = null;
                    tempWeeklyGoal.lastCompleted = todaysDate;

                //how to update earned points in the level-data reducer
                earnedPoints += tempWeeklyGoal.points;
                progressPoints -= tempWeeklyGoal.points;
                
            }

            newState.goalList.weekly.unshift(tempWeeklyGoal);
            //checkGoal(newState.goalList,newState.goalList.weekly);
            tempWeeklyGoal = null;  
            k--;
        }

        // monthly goal checking
        let monthlyCheckedGoalsLength = newState.goalList.monthly.length;
        let m = monthlyCheckedGoalsLength;

        while(m > 0)
        {
            let tempMonthlyGoal = newState.goalList.monthly.pop();
            //console.log(tempWeeklyGoal);
            
            //if the goal is not really complete i.e proper amount of time has not passed
            //this is true if today > checkedDate (1 day has passed)
         
            if( tempMonthlyGoal.nextCompletion && 
                leftGreaterOrEqualRight(todaysDate,tempMonthlyGoal.nextCompletion) &&
                tempMonthlyGoal.checked) {

                    tempMonthlyGoal.checked = false;
                    tempMonthlyGoal.nextCompletion = null;
                    tempMonthlyGoal.lastCompleted = todaysDate;

                //how to update earned points in the level-data reducer
                earnedPoints += tempMonthlyGoal.points;
                progressPoints -= tempMonthlyGoal.points;
                
            }

            newState.goalList.monthly.unshift(tempMonthlyGoal);
            //checkGoal(newState.goalList,newState.goalList.weekly);
            tempMonthlyGoal = null;  
            m--;
        }
        
        newState.lastCompleted = todaysDate;
        newState.earnedPoints = earnedPoints;
        newState.progressPoints = progressPoints;
        newState.goalCount = goalCount;
        newState.goalPointTotal = goalPointTotal;
        newState.pointsToNextLevel = calcPointsToLevel(newState.level, newState.goalPointTotal, newState.goalCount)
        return newState;
    }
}

export const countGoals = goalList => {
    let goalCount = 0;
    goalCount += goalList.todo.length;
    goalCount += goalList.daily.length;
    goalCount += goalList.weekly.length;
    goalCount += goalList.monthly.length;

    return goalCount;
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

export const updateProgressPoints = (progressPoints,{checked, goal}) => {
    // console.log("updateProgressPoints called")
    let newProgressPoints = progressPoints;
    console.log("updateProgressPoints",checked);
    if(checked) {
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

export const updateLevel = state => {
    
    const newState = {...state};

    let currPointsToLevel = newState.pointsToNextLevel;
    let tempPoints = newState.earnedPoints - currPointsToLevel;
    
    while(tempPoints >= 0) {
        newState.level++;
        newState.earnedPoints = tempPoints;
        //console.log('newState.level,newState.goalPointTotal,newState.goalCount',newState.level,newState.goalPointTotal,newState.goalCount)
        newState.pointsToNextLevel = calcNextLevel(newState.level,newState.goalPointTotal,newState.goalCount);
        currPointsToLevel = newState.pointsToNextLevel;
        tempPoints = newState.earnedPoints - currPointsToLevel;
        // console.log( "newState.level, newState.earnedPoints, newState.pointsToNextLevel, currPointsToLevel, tempPoints");
        // console.log( newState.level, newState.earnedPoints, newState.pointsToNextLevel, currPointsToLevel, tempPoints);
    }

    newState.earnedLevelPercent = calculatePercentage(newState.earnedPoints,newState.pointsToNextLevel) 
    // console.log("newState.earnedLevelPercent",newState.earnedLevelPercent)

    return newState;
}

export const calcPointsToLevel = (level, goalPoints, goalCount) => {
    return calcNextLevel(level,goalPoints,goalCount);
}

export const addReward = (rewardList, rewardData) => {
    console.log(rewardList, rewardData.rewardName, rewardData.rewardType);
    rewardList[rewardData.rewardType].push(rewardData.rewardName);
    console.log(rewardList);
    return {...rewardList};
}

export const removeReward = (rewardList, rewardData) => {
    return {...rewardList};
}
