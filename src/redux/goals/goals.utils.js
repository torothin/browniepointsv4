import { convertToBasicDate, newBasicDate, leftGreaterRight, 
    leftGreaterOrEqualRight, printMyDate, newCheckedDate } from '../../helpers/basic-date.helper';
import {levelDataReducer} from '../level-data/level-data.reducer';
import { database } from 'firebase';

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

export const checkGoal = (currentGoals,goal) => {
    
    const tempGoal = goal;
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
    }
    else {
        return currentGoals;
    }

    // array of specific goal type
    const tempGoalsArray = tempGoals[tempGoal.type];
    console.log("just before error",tempGoals[tempGoal.type],tempGoal.type,tempGoal)
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
    console.log("indexOfIncluded",goalArray, inputGoal);
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
    state.lastUpdate = newBasicDate();
    state.lastUpdate.year = 2018;
    return completeGoals(state);
}

export const resetEarnedPoints = () => {
    return 0;
}

export const completeGoals = state => {
    const todaysDate = newBasicDate();
    let goalEarnedPoints = state.goalEarnedPoints;
    const newState = {...state};

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

//         // todos
//         let todosCheckedGoalsLength = this.userData.checkedGoals.todos.length;
//         let m = this.userData.checkedGoals.todos.length;

//         while(m > 0)
//         {
//             let tempTodoGoal = this.userData.checkedGoals.todos.pop();
            
//             //if the goal is not really complete i.e proper amount of time has not passed
//             //this is true if today > checkedDate (1 day has passed)
         
//             if( tempTodoGoal.completeDate != null && 
//                 this._leftGreaterOrEqualRight(todaysDate,tempTodoGoal.completeDate))
               
//             {
//                 // console.log("completed goal: " + tempTodoGoal.goalName);
//                 this.userData.progress.todoProgress -= tempTodoGoal.goalPoints;
//                 this.userData.currentPoints += tempTodoGoal.goalPoints;
//                 let removingIndex = this._indexOfIncluded(this.userData.goals.todos, tempTodoGoal);
//                 // console.log("removingIndex: " + removingIndex)
//                 // console.log("goalName[removingIndex]: " + this.userData.goals.todos[removingIndex].goalName);
//                 // console.log("before splice");
//                 if(removingIndex >= 0)
//                 {
//                     // console.log(this.userData.goals.todos.splice(removingIndex,1).goalName);
//                     this.userData.goals.todos.splice(removingIndex,1);
                    
//                     }
//                 }
//             else
//             {
//                 this.userData.checkedGoals.todos.unshift(tempTodoGoal);
//                 tempTodoGoal = null;
//                 }
//             m--;
            
//             }

        // completing daily goals
        let dailyCheckedGoalsLength = newState.goalList.daily.length;
        let i = dailyCheckedGoalsLength;

        while(i > 0)
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
                goalEarnedPoints += tempDailyGoal.points;
                
            }

            newState.goalList.daily.unshift(tempDailyGoal);
            //checkGoal(newState.goalList,newState.goalList.daily);
            tempDailyGoal = null;  
            i--;
        }
        
//         // Checking Weekly Goals
//         let weeklyCheckedGoalsLength = this.userData.checkedGoals.weeklyGoals.length;
//         let j = this.userData.checkedGoals.weeklyGoals.length;

//         while(j > 0)
//         {
//             let tempWeeklyGoal = this.userData.checkedGoals.weeklyGoals.pop();

//             if( tempWeeklyGoal.completeDate != null &&
//                 this._leftGreaterOrEqualRight(todaysDate,tempWeeklyGoal.completeDate) )
//             {
//                 //console.log("completed goal: " + tempWeeklyGoal.goalName);
//                 this.userData.progress.weeklyProgress -= tempWeeklyGoal.goalPoints;
//                 this.userData.currentPoints += tempWeeklyGoal.goalPoints;
//                 }
//             else
//             {
//                 this.userData.checkedGoals.weeklyGoals.unshift(tempWeeklyGoal);
//                 tempWeeklyGoal = null;   
//                 }
//             j--;
//             }

//         let monthlyCheckedGoalsLength = this.userData.checkedGoals.monthlyGoals.length;
//         let k = this.userData.checkedGoals.monthlyGoals.length;

//         while(k > 0)
//         {
//             let tempMonthlyGoal = this.userData.checkedGoals.monthlyGoals.pop();
            
//             if( tempMonthlyGoal.completeDate != null && 
//                 this._leftGreaterOrEqualRight(todaysDate,tempMonthlyGoal.completeDate) )
//             {
//                 console.log("completed goal: " + tempMonthlyGoal.goalName);
//                 this.userData.progress.monthlyProgress -= tempMonthlyGoal.goalPoints;
//                 this.userData.currentPoints += tempMonthlyGoal.goalPoints;
                
//                 }
//             else
//             {
//                 console.log("not completed goal: " + tempMonthlyGoal.goalName);
//                 this.userData.checkedGoals.monthlyGoals.unshift(tempMonthlyGoal);
//                 tempMonthlyGoal = null;
//             }
//             console.log("completing monthly goals");
//             console.log(this.userData.checkedGoals.monthlyGoals);
//             k--;
//             }

//         this.userData.lastUpdate = todaysDate;
//         // console.log(this._printMyDate(this.userData.lastUpdate));
//         this._updateProgress();
//         this._calcLevel();
//         this._updateCurrentLevelPercent();
//         this._sendData();
        newState.lastCompleted = todaysDate;
        newState.goalEarnedPoints = goalEarnedPoints;
        return newState;
    }
}