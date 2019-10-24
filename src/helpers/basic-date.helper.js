const convertToBasicDate = ( date ) => {
    
    const basicDate = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
        dayOfWeek: date.getDay(),
    }

    return basicDate;
};

const newBasicDate = () => {
    return convertToBasicDate( new Date() );
};

const leftGreaterRight = (leftDate,rightDate) => {

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
    
};

const leftGreaterOrEqualRight = (leftDate,rightDate) => {

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
};

const printMyDate = (input) => {
    return input.month + "/" + input.day + "/" + input.year;
};

const newCheckedDate = (goalType) => {  
    const newDate = new Date();

    if(goalType === "todo" || goalType=== "daily") {
        newDate.setDate(newDate.getDate() + 1);
    }
    else if(goalType === 'weekly') {
        let daysToComplete = 7 - newDate.getDay();
        newDate.setDate(newDate.getDate() + daysToComplete);
    }
    else if(goalType === 'monthly') {
        newDate.setMonth(newDate.getMonth() + 1);
        newDate.setDate(1);
    }
    else {
        return
    }

    const returnDate = convertToBasicDate(newDate);
    console.log(returnDate);
    return returnDate;

};

export { convertToBasicDate, newBasicDate, leftGreaterRight, leftGreaterOrEqualRight, printMyDate, newCheckedDate}
