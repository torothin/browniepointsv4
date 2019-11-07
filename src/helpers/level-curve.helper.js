export const calcNextLevel = (level,goalPointTotal,goalCount) => {
        
    //console.log("\nnextLevel called\n");

    const coeffA = 0.00005;
    const coeffB = 0.2;
    const coeffC = 0.001;

    // pointAvg is used to shift the leveling curve based on what the user
    // defines as "average" or "normal" points.  Some users may use low values
    // of points for each goal while others will use large values
    
    // need to update to percentages to prevent overflow
    if(goalPointTotal && goalCount)
    {
        const pointAvg = Math.round(goalPointTotal/goalCount);
        const xpNeeded = pointAvg * Math.ceil( coeffA * Math.pow(level,3) 
                                           + coeffB * Math.pow(level,2) 
                                           + coeffC * Math.pow(level,1) );

        return xpNeeded;
    }
    else //this is just in case pointAvg ends up 0 or inf due to no goals
    {
        return level;
    }
};
