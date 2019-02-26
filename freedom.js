let num = 0;
let click = ""
    function inputNumber7(){
    num = Number( document.querySelector('#main-glass-input').value += 7);
    }
    function inputNumber8(){
    num = Number(document.querySelector('#main-glass-input').value += 8);
    }
    function inputNumber9(){
    num = Number(document.querySelector('#main-glass-input').value += 9);
    }
    function inputNumber4(){
    num = Number(document.querySelector('#main-glass-input').value += 4);
    }
    function inputNumber5(){
    num = Number(document.querySelector('#main-glass-input').value += 5);
    }
    function inputNumber6(){
    num = Number(document.querySelector('#main-glass-input').value += 6);
    }
    function inputNumber1(){
    num = Number(document.querySelector('#main-glass-input').value += 1);
    }
    function inputNumber2(){
    num = Number(document.querySelector('#main-glass-input').value += 2);
    }
    function inputNumber3(){
    num = Number(document.querySelector('#main-glass-input').value += 3);
    }
    function inputNumber0(){
    num = Number(document.querySelector('#main-glass-input').value += 0);
    }
    function inputDot(){
        let dot;
        dot = ".";
        num = document.querySelector('#main-glass-input').value += dot;
    }
    function divideNumber(){
       let divide = "/";
       let sign;
       sign = (document.querySelector('#main-glass-input').value += divide);
    }
    function multiplyNumber(){
       let multiply = "*";
       let sign;
       sign = document.querySelector('#main-glass-input').value += multiply;
    }
    function addNumber(){
       let addNumber = "+";
       let sign;
       sign = document.querySelector('#main-glass-input').value += addNumber;
    }
    function subNumber(){
       let subNumber = "-";
       let sign;
       sign = document.querySelector('#main-glass-input').value += subNumber;
    }
    function solution(){
        let errorMessage = "Syntax Error"
        let screen;
        screen = document.querySelector("#main-glass-input").value;
        try{
            let answer = eval(screen);
            let finalAnswer;
            finalAnswer = document.querySelector('#main-glass-input').value = answer;
        }
        catch(e){
            document.querySelector('#main-glass-input').value = errorMessage
        }
        // let answer;
        // let solution;
        // let finalAnswer;
        // answer = (document.querySelector('#main-glass-input').value);
        //     solution = eval(answer);
            
    }
    function inputClear(){
        num = document.querySelector('#main-glass-input').value = "";
    }
    function inputDelete(){
        let x;
        let y;
        x = document.querySelector('#main-glass-input').value;
        y = x.substr(0, x.length-1);
        document.querySelector('#main-glass-input').value = y;
  }
    function inputSquare(){
        num = document.querySelector('#main-glass-input').value *= document.querySelector('#main-glass-input').value;
    }
    function inputSquareRoot(){
        let squareRoot = document.querySelector('#main-glass-input').value;
        let touch = Math.sqrt(squareRoot)
        let mainSquareRoot = document.querySelector('#main-glass-input').value = touch;
    }
    function inputSin(){
        let sin = document.querySelector('#main-glass-input').value;
        click = Math.sin(sin)
        let mainSin = document.querySelector('#main-glass-input').value = click;
    }
    function inputCos(){
        let cos = document.querySelector('#main-glass-input').value;
        click = Math.cos(cos)
        let mainCos = document.querySelector('#main-glass-input').value = click;
    }
    function inputTan(){
        let tan = document.querySelector('#main-glass-input').value;
        click = Math.tan(tan)
        let mainTan = document.querySelector('#main-glass-input').value = click;
    }

