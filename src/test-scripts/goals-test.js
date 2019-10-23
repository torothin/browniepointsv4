
const dailyGoal_1 = {
    name: 'dailyGoal_1',
    type: "daily",
    ID: 1,
    startDate: new Date(),
    lastCompleted: {
        day: 1, month: 10, year: 2019, dayOfWeek: 1,
    },
    nextCompletion: {
        day: 23, month: 10, year: 2019, dayOfWeek: 4,
    },
    points: 1,
    checked: false,
}

const dailyGoal_2 = {
    name: 'dailyGoal_2',
    type: "daily",
    ID: 2,
    startDate: new Date(),
    lastCompleted: {
        day: 1,
        month: 10,
        year: 2019,
        dayOfWeek: 1,
    },
    nextCompletion: {
        day: 23,
        month: 10,
        year: 2019,
        dayOfWeek: 4,
    },
    points: 2,
    checked: true,
}

const dailyGoal_3 = {
    name: 'dailyGoal_3',
    type: "daily",
    ID: 3,
    startDate: new Date(),
    lastCompleted: {
        day: 1,
        month: 10,
        year: 2019,
        dayOfWeek: 1,
    },
    nextCompletion: {
        day: 23,
        month: 10,
        year: 2019,
        dayOfWeek: 4,
    },
    points: 3,
    checked: false,
}

const weeklyGoal_1 = {
    name: 'weeklyGoal_1',
    type: "weekly",
    ID: 4,
    startDate: new Date(),
    lastCompleted: {
        day: 1,
        month: 10,
        year: 2019,
        dayOfWeek: 1,
    },
    nextCompletion: {
        day: 21,
        month: 10,
        year: 2019,
        dayOfWeek: 2,
    },
    points: 4,
    checked: false,
}

const weeklyGoal_2 = {
    name: 'weeklyGoal_2',
    type: "weekly",
    ID: 5,
    startDate: new Date(),
    lastCompleted: {
        day: 1,
        month: 10,
        year: 2019,
        dayOfWeek: 1,
    },
    nextCompletion: {
        day: 27,
        month: 10,
        year: 2019,
        dayOfWeek: 7,
    },
    points: 5,
    checked: false,
}

const weeklyGoal_3 = {
    name: 'weeklyGoal_3',
    type: "weekly",
    ID: 6,
    startDate: new Date(),
    lastCompleted: {
        day: 1,
        month: 10,
        year: 2019,
        dayOfWeek: 1,
    },
    nextCompletion: {
        day: 27,
        month: 10,
        year: 2019,
        dayOfWeek: 7,
    },
    points: 6,
    checked: true,
}

const monthlyGoal_1 = {
    name: 'monthlyGoal_1',
    type: "monthly",
    ID: 7,
    startDate: new Date(),
    lastCompleted: {
        day: 1,
        month: 10,
        year: 2019,
        dayOfWeek: 1,
    },
    nextCompletion: {
        day: 2,
        month: 11,
        year: 2019,
        dayOfWeek: 3,
    },
    points: 7,
    checked: false,
}

const monthlyGoal_2 = {
    name: 'monthlyGoal_2',
    type: "monthly",
    ID: 8,
    startDate: new Date(),
    lastCompleted: {
        day: 1,
        month: 10,
        year: 2019,
        dayOfWeek: 1,
    },
    nextCompletion: {
        day: 2,
        month: 11,
        year: 2019,
        dayOfWeek: 3,
    },
    points: 8,
    checked: true,
}

const monthlyGoal_3 = {
    name: 'monthlyGoal_3',
    type: "monthly",
    ID: 9,
    startDate: new Date(),
    lastCompleted: {
        day: 1,
        month: 10,
        year: 2019,
        dayOfWeek: 1,
    },
    nextCompletion: {
        day: 2,
        month: 11,
        year: 2019,
        dayOfWeek: 3,
    },
    points: 9,
    checked: false,
}

const todo_1 = {
    name: 'todo_1',
    type: "todo",
    ID: 10,
    startDate: new Date(),
    lastCompleted: {
        day: 1,
        month: 10,
        year: 2019,
        dayOfWeek: 1,
    },
    nextCompletion: {
        day: 2,
        month: 11,
        year: 2019,
        dayOfWeek: 3,
    },
    points: 10,
    checked: false,
}

const todo_2 = {
    name: 'todo_2',
    type: "todo",
    ID: 11,
    startDate: new Date(),
    lastCompleted: {
        day: 1,
        month: 10,
        year: 2019,
        dayOfWeek: 1,
    },
    nextCompletion: {
        day: 2,
        month: 11,
        year: 2019,
        dayOfWeek: 3,
    },
    points: 11,
    checked: true,
}

const todo_3 = {
    name: 'todo_3',
    type: "todo",
    ID: 12,
    startDate: new Date(),
    lastCompleted: {
        day: 1,
        month: 10,
        year: 2019,
        dayOfWeek: 1,
    },
    nextCompletion: {
        day: 2,
        month: 11,
        year: 2019,
        dayOfWeek: 3,
    },
    points: 12,
    checked: false,
}

const precreatedGoals = {
    todos: [],
    daily: [],
    weekly: [],
    monthly: [],
};

const precreatedCompletedGoals = {
    todos: [],
    daily: [],
    weekly: [],
    monthly: [],
};

precreatedGoals.todos.push(todo_1);
precreatedGoals.todos.push(todo_2);
precreatedGoals.todos.push(todo_3);

precreatedGoals.daily.push(dailyGoal_1);
precreatedGoals.daily.push(dailyGoal_2);
precreatedGoals.daily.push(dailyGoal_3);

precreatedGoals.weekly.push(weeklyGoal_1);
precreatedGoals.weekly.push(weeklyGoal_2);
precreatedGoals.weekly.push(weeklyGoal_3);

precreatedGoals.monthly.push(monthlyGoal_1);
precreatedGoals.monthly.push(monthlyGoal_2);
precreatedGoals.monthly.push(monthlyGoal_3);

precreatedCompletedGoals.todos.push(todo_2);
precreatedCompletedGoals.daily.push(dailyGoal_2);
precreatedCompletedGoals.weekly.push(weeklyGoal_2);
precreatedCompletedGoals.monthly.push(monthlyGoal_2);

// export const precreatedGoals = () => {
//     return goalList;
// }

// export const precreatedCompletedGoals = () => {
//     completedGoalList
// } 

// console.log(precreatedGoals, precreatedCompletedGoals);

export { precreatedGoals, precreatedCompletedGoals };