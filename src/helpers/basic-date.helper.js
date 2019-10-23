export const convertToBasicDate = ( date ) => {
    
    const basicDate = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        dayOfWeek: date.getDay(),
    }

    return basicDate;
},

export const newBasicDate = () => {
    return convertToBasicDate( new Date() );
},

export const leftGreaterRight = (leftDate,rightDate) => {

    //years are the same and month is the same
    if(leftDate.year === rightDate.year && 
        leftDate.month === rightDate.month &&
        leftDate.day > rightDate.day)
        {
            return true;
        }
    else if(leftDate.year === rightDate.year && 
        leftDate.month === rightDate.month &&
        leftDate.day <= rightDate.day)
        {
            return false;
        }
    //years are the same but months are different
    else if(leftDate.year === rightDate.year && 
        leftDate.month > rightDate.month)
        {
            return true;
        }
    else if(leftDate.year === rightDate.year && 
        leftDate.month <= rightDate.month)
        {
            return false;
        }
    //compares years
    else if(leftDate.year > rightDate.year)
    {
        return true;
    }
    else if(leftDate.year <= rightDate.year)
    {
        return false;
    }
    //all else fails
    else
    {
        return false;
    }
    
},

export const leftGreaterOrEqualRight = (leftDate,rightDate) => {

    //years are the same and month is the same
    if(leftDate.year === rightDate.year && 
        leftDate.month === rightDate.month &&
        leftDate.day >= rightDate.day)
        {
            return true;
        }
    else if(leftDate.year === rightDate.year && 
        leftDate.month === rightDate.month &&
        leftDate.day < rightDate.day)
        {
            return false;
        }
    //years are the same but months are different
    else if(leftDate.year === rightDate.year && 
        leftDate.month >= rightDate.month)
        {
            return true;
        }
    else if(leftDate.year === rightDate.year && 
        leftDate.month < rightDate.month)
        {
            return false;
        }
    //compares years
    else if(leftDate.year >= rightDate.year)
    {
        return true;
        }
    else if(leftDate.year < rightDate.year)
    {
        return false;
        }
    //all else fails
    else
    {
        return false;
        }
},

export const printMyDate = (input) => {
    return input.month + "/" + input.day + "/" + input.year;
},
