// code your solution here
function saturdayFun(action = 'roller-skate'){
 return `This Saturday, I want to ${action}!`;
}
function mondayWork(action= 'go to the office'){
    return `This Monday, I will ${action}.`;
}
function wrapAdjective(emphatic= '*'){
    return function(action='a hard worker'){
        return `You are ${emphatic}${action}${emphatic}!`
    } 
}