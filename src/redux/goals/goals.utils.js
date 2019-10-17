export const newGoal = (currentGoals, {name, type, ID, points}) => {
    
    const goal = {
        name: name,
        type: type,
        ID: ID,
        startDate: new Date(),
        lastCompleted: null,
        nextCompletion: null,
        points: points,
        checked: false,
    }

    currentGoals[type].push(goal);

    return currentGoals;
}