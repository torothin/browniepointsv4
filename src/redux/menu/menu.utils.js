export const menuSelectionHelper = (payload, menuSelection) => {
    switch (payload) {
        case "Add Goal":
            return {
                ...menuSelection,
                addGoal: true,
            };
        case "Remove Goal":
            return {
                ...menuSelection,
                removeGoal: true,
            };
        case "Add Reward":
            return {
                ...menuSelection,
                addReward: true,
            };
        case "Remove Reward":
            return {
                ...menuSelection,
                removeReward: true,
            };
        case "Close Popup":
            return {
                ...menuSelection,
                addGoal: false,
                removeGoal: false,
                addReward: false,
                removeReward: false,
            };
        default:
            return menuSelection;
    }
}