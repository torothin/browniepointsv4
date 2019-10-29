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
        default:
            return menuSelection;
    }
}