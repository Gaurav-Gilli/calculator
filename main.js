const themeToggle = document.getElementById("theme-toggle");
const toggler = document.getElementById("toggler");
const body = document.querySelector("body");
var theme = 1;
//theme done
//calc part
// const resetButton = document.getElementById("reset");
// const equalButton = document.getElementById("equal");
// const mainScreen = document.getElementById("main-screen");
// const numberButton = document.querySelectorAll(".number")
// var variables = ['' , ''];
// var operators = "";
// var id = 0;

// function reset(){
//     variables = ['' , ''];
//     operators = "";
//     id = 0;
//     updateInput();
// }
// function updateInput(){
//     if(variables[id] === " "){
//         mainScreen.innerText = 0;
//     }
//     else{
//         mainScreen.innerText = variables[id];
//     }
// }

// resetButton.addEventListener('click' , reset);
// numberButton.forEach(button =>{
//     button.addEventListener('click' , ()=>{
//         variables[id] =+ button.innerText;
//         updateInput();
//     });
// });

//console.log(resetButton);
//console.log(equalButton);
const calcInput = document.querySelector('.calc-screen input');






const btnClicked = (val) => {
    let valueInput = calcInput.value;

    if(valueInput.length == 0){
        if(val == '+' || val == '*' || val == '/'){
            valueInput = '0' + val
        }else if(val == '.'){
            return
        }
    }



    const removeDuplicate = (valueOperator) => {
        let lastChar = valueInput.substr(valueInput.length - 1);
        let strRemoveLast = valueInput.substr(0, valueInput.length -1); 
        if(valueOperator == '.'){
            if(lastChar == '-' || lastChar == '+' || lastChar == '*' || lastChar == '/' ){
                return false
            }
            return true
        }
        if(lastChar == '-' || lastChar == '+' ){
            valueInput = strRemoveLast;
        }
        if(lastChar == '*' || lastChar == '/'){
            if(valueOperator == '-' ) return
            valueInput = strRemoveLast;
        }
        
    }

    if(val == '-' || val == '+' || val == '*' || val == '/' || val == '.'){
        removeDuplicate(val)
    }
    if(val == '.'){
        if(!removeDuplicate(val)){
            return
        };
    }

    valueInput += val;
    calcInput.value = valueInput;
}

const equalBtnClicked = () => {
    let valueInput = calcInput.value;
    console.log(valueInput)
    let lastChar = valueInput.substr(valueInput.length - 1);
    console.log(lastChar)


    if(valueInput.length == 0){
        return
    }
    if(lastChar == '-' || lastChar == '+' || lastChar == '*' || lastChar == '/') return       
    valueInput = eval(valueInput).toString();
    let arrValue = valueInput.split('.')

    if(arrValue.length == 1){
        calcInput.value = valueInput;
    }else if(arrValue.length == 2){
        calcInput.value = arrValue[0] + '.' +arrValue[1].substr(0, 4)
    }
     
}

const delBtnClicked = () => {
    let valueInput = calcInput.value;
    valueInput = valueInput.substr(0, valueInput.length -1);
    calcInput.value = valueInput;
}

const resetBtnClicked = () => {
    calcInput.value = '';
}

































themeToggle.addEventListener('click' , ()=>{
    theme++;
    switch(theme){
        case 2:
            body.classList.add("theme-2");
            toggler.setAttribute("style" ,"left: 25px");
            break;
        case 3:
            body.classList.remove("theme-2");
            body.classList.add("theme-3");
            toggler.setAttribute("style" ,"left: 50px");
            break;
        case 4:
            theme = 1;
            body.classList.remove("theme-3");
            body.classList.add("theme-1");
            toggler.setAttribute("style" ,"left: 3px");
            break;
    }
})



