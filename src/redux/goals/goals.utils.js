import { newCheckedDate  } from '../../helpers/basic-date.helper';

export const newGoal = (currentGoals) => {
    console.log("newGoal", currentGoals);
}

// export const newGoal = (currentGoals, {name, type, ID, points}) => {
    
//     const goal = {
//         name: name,
//         type: type,
//         ID: ID,
//         startDate: new Date(),
//         lastCompleted: null,
//         nextCompletion: null,
//         points: points,
//         checked: false,
//     }

//     currentGoals[type].push(goal);

//     return currentGoals;
// }

export const checkGoal = (currentGoals,goal) => {
    console.log("checkGoal called");
    // console.log(goal);
    //console.log(currentGoals);

    const tempGoal = goal;
    const tempGoals = currentGoals;

    // console.log(tempGoal);
    // console.log(tempGoals);

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

    // index of goal in the array
    const goalIndex = indexOfIncluded(tempGoalsArray, tempGoal);
    console.log("goalIndex:",goalIndex);

    if(goalIndex >= 0)
    {
        // goal in the array updated to tempGoal
        tempGoalsArray[goalIndex] = tempGoal;

        //tempGoalsArray overwrites tempGoals for this goal type
        tempGoals[tempGoal.type] = tempGoalsArray;
    }
    
    console.log(tempGoals);

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

// _completeGoalsTest () {
//     this.userData.lastUpdate.year = 2018;
//     // console.log('modified lastupdate');
//     // console.log(this._printMyDate(this.userData.lastUpdate));
//     //this._completeGoals();
// },

// _completeGoals () {
//     let todaysDate = this._myDateObject(new Date);

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

//     if(this.userData.lastUpdate == null || this._leftGreaterRight(todaysDate,this.userData.lastUpdate))
//     {
//         //console.log('updating complete goals');

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

//         // completing daily goals
//         let dailyCheckedGoalsLength = this.userData.checkedGoals.dailyGoals.length;
//         let i = this.userData.checkedGoals.dailyGoals.length;

//         while(i > 0)
//         {
//             let tempDailyGoal = this.userData.checkedGoals.dailyGoals.pop();
            
//             //if the goal is not really complete i.e proper amount of time has not passed
//             //this is true if today > checkedDate (1 day has passed)
         
//             if( tempDailyGoal.completeDate != null && 
//                 this._leftGreaterOrEqualRight(todaysDate,tempDailyGoal.completeDate))
               
//             {
//                 //console.log("completed goal: " + tempDailyGoal.goalName);
//                 this.userData.progress.dailyProgress -= tempDailyGoal.goalPoints;
//                 this.userData.currentPoints += tempDailyGoal.goalPoints;
                
//                 }
//             else
//             {
//                 this.userData.checkedGoals.dailyGoals.unshift(tempDailyGoal);
//                 tempDailyGoal = null;
//                 }
//             i--;
//             }
        
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
//         }
//     },