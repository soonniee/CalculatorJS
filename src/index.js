// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const number = document.querySelectorAll(".cal-row__number"),
    operator = document.querySelectorAll(".cal-row__operator"),
    // minus = document.querySelector("op--minus"),
    // multiply = document.querySelector("op--multiply"),
    // divide = document.querySelector("op--divide"),
    equal = document.querySelector(".cal-row__equal"),
    reset = document.querySelector(".reset-btn"),
    result = document.querySelector(".cal-result").querySelector("span");
const Equal = '=';
const Reset = 'C'
const operators_arr=['+','-','*','-'];
let clicked_arr =[];
let clickedNum_arr = [];
let clickedNum_sum = 0;
// let store_result = parseInt(result.innerText,10);
// clicked_arr.push(store_result);
function numberClicked(event){
    // clicked_arr=[];
    clicked = parseInt(event.target.innerText,10);
    clickedNum_arr.push(clicked);
    num_digit = clickedNum_arr.length;
    // console.log("num_digit",num_digit);
    clickedNum_sum = 0;
    for(var i = 0 ; i < num_digit; i++){
        clickedNum_sum += clickedNum_arr[i] * Math.pow(10,(num_digit - i - 1));
        // console.log(clickedNum_sum);
    }
    result.innerText = clickedNum_sum;
    // clicked_arr=[];
    

    // console.log(clicked,store_result);
    // store_result = clicked;
}
function makeOperation(operator){
    
    if(operator === '+'){
         opResult = clicked_arr[0] + clicked_arr[2];
    }else if(operator ==='-'){
         opResult = clicked_arr[0] - clicked_arr[2];
    }else if(operator ==='*'){
         opResult = clicked_arr[0] * clicked_arr[2];
    }else if(operator ==='/'){
         opResult = clicked_arr[0] / clicked_arr[2];
    }
    clicked_arr=[];
    return opResult;
}
function operatorClicked(event){
    clickedOperator = event.target.innerText;
    
    clickedNum_arr=[];
    
    
    // console.log(clickedNum_arr)
    // if(clicked_arr[clicked_arr.length-1])
    clicked_arr.push(clickedNum_sum);
    // console.log(clicked_arr)
    if(clicked_arr.length === 1){
        clicked_arr.push(clickedOperator);
    }else if(clicked_arr.length === 2){
        clicked_arr.splice(1,1);
        clicked_arr.push(clickedOperator);
    }else if(clicked_arr.length == 3 ){
        const opResult = makeOperation(clicked_arr[1]);
        clicked_arr.push(opResult);
        clicked_arr.push(clickedOperator);
        result.innerText = opResult;
    }
}
function resetClicked(){
    result.innerText = '';
    clickedNum_arr=[];
    clicked_arr=[];
}
function equalClicked(){
    clicked_arr.push(clickedNum_sum);
    console.log(clicked_arr)
    if(clicked_arr.length===3){
        const opResult = makeOperation(clicked_arr[1]);
        console.log(opResult)
        result.innerText = opResult;
        clickedNum_arr=[];
        clicked_arr=[];
        clicked_arr.push(opResult);
        console.log(clicked_arr)
    }
}

for(var i = 0 ; i < number.length ; i++){
    number[i].addEventListener("click",numberClicked);
}
for(var i = 0 ; i < operator.length ; i++){
    operator[i].addEventListener("click",operatorClicked);
}
// operator.addEventListener("click",operatorClicked);
// plus.addEventListener("click",plusClicked);
// minus.addEventListener("click",minusClicked);
// multiply.addEventListener("click",multiplyClicked);
// divide.addEventListener("click",divideClicked);
equal.addEventListener("click",equalClicked);
reset.addEventListener("click",resetClicked);
