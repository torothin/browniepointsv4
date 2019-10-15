export const calculateProgressPercentage = ({points, pointsToNextLevel}) => {
    return Math.ceil( points /  pointsToNextLevel );
}

export const updateLevel = ({ level }) => {
    return level++;
}