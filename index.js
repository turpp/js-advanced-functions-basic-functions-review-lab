// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrap="*"){
    return function(adjective="special"){
        return `You are ${wrap}${adjective}${wrap}!`
    }
}

const Calculator = {
    add: function(a, b){
        return a+b
    },
    subtract: function(a, b){
       return a-b
    },
    multiply: function(a,b){
        return a*b
    },
    divide: function(a,b){
        return a/b
    }
}

function actionApplyer(int, array){
    let base = int
    if(array.length == 0){
        return int
    }else{
        array.forEach(function(fn){

           base = (fn(base))
        })
        return base
    }
}