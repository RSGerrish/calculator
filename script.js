const container = document.querySelector('body');
const calcBody = document.createElement('div');
const calcScreen = document.createElement('div');
const btnContainer = document.createElement('div');

let firstValue = 0;
let secondValue = 0;
let expression = "";

calcBody.classList.add('calc-body');
calcScreen.classList.add('calc-screen');
btnContainer.classList.add('btn-container');

container.appendChild(calcBody);
calcBody.appendChild(calcScreen);
calcBody.appendChild(btnContainer);

for (i = 0; i < 20; i++) {
  const btn = document.createElement('div');
   
  btn.classList.add('btn');
  btn.id = `btn-${i}`;

  if(i === 19) {
    btn.textContent = "+";
    btn.addEventListener('click', function() {
      btn.classList.add('clicked');
      expression = btn.textContent;
      firstValue = parseInt(calcScreen.textContent);
      calcScreen.textContent = "";
    });
    btn.addEventListener('transitionend', removeTransition);
  } else if (i === 18) {
    btn.textContent = "=";
    btn.addEventListener('click', function() {
      btn.classList.add('clicked');

      if (firstValue) {secondValue = calcScreen.textContent;}

      console.log(firstValue);
      console.log(secondValue);
      console.log(expression);

      if (!firstValue || !secondValue || !expression) {
        console.log('skipped');
        return;
      }else {
        if (expression === "+") {calcScreen.textContent = calculateAddition(firstValue, secondValue)}
        else if (expression === "-") {calcScreen.textContent = calculateSubtraction(firstValue, secondValue)}
        else if (expression === "×") {calcScreen.textContent = calculateMultiply(firstValue, secondValue)}
        else if (expression === "÷") {calcScreen.textContent = calculateDivide(firstValue, secondValue)}
        
        firstValue = null;
        secondValue = null;
        expression = null;

        console.log(firstValue);
        console.log(secondValue);
        console.log(expression);
      }
    });
    btn.addEventListener('transitionend', removeTransition);
  }else if (i === 17) {
    btn.textContent = "0";
    btn.addEventListener('click', function() {
      btn.classList.add('clicked')
      calcScreen.textContent += btn.textContent;
    });
    btn.addEventListener('transitionend', removeTransition);
  }else if (i === 16) {
    btn.textContent = ".";
    btn.addEventListener('click', function() {
      btn.classList.add('clicked')
      calcScreen.textContent += btn.textContent;
    });
    btn.addEventListener('transitionend', removeTransition);
  }else if (i === 15) {
    btn.textContent = "-";
    btn.addEventListener('click', function() {
      btn.classList.add('clicked')
      expression = btn.textContent;
      firstValue = parseInt(calcScreen.textContent);
      calcScreen.textContent = "";
    });
    btn.addEventListener('transitionend', removeTransition);
  }else if (i < 15 && i > 11) {
    btn.textContent = i - 11;
    btn.addEventListener('click', function() {
      btn.classList.add('clicked')
      calcScreen.textContent += btn.textContent;
    });
    btn.addEventListener('transitionend', removeTransition);
  }else if (i === 11) {
    btn.textContent = "×";
    btn.addEventListener('click', function() {
      btn.classList.add('clicked')
      expression = btn.textContent;
      firstValue = parseInt(calcScreen.textContent);
      calcScreen.textContent = "";
    });
    btn.addEventListener('transitionend', removeTransition);
  }
  else if (i < 11 && i > 7) {
    btn.textContent = i - 4;
    btn.addEventListener('click', function() {
      btn.classList.add('clicked')
      calcScreen.textContent += btn.textContent;
    });
    btn.addEventListener('transitionend', removeTransition);
  }
  else if (i === 7) {
    btn.textContent = "÷";
    btn.addEventListener('click', function() {
      btn.classList.add('clicked')
      expression = btn.textContent;
      firstValue = parseInt(calcScreen.textContent);
      calcScreen.textContent = "";
    });
    btn.addEventListener('transitionend', removeTransition);
  }
  else if (i < 7 && i > 3) {
    btn.textContent = i + 3;
    btn.addEventListener('click', function() {
      btn.classList.add('clicked')
      calcScreen.textContent += btn.textContent;
    });
    btn.addEventListener('transitionend', removeTransition);
  }
  else if (i === 3) {
    btn.textContent = "←";
    btn.addEventListener('click', function() {
      btn.classList.add('clicked')
      calcScreen.textContent = calcScreen.textContent.slice(0, -1);
    });
    btn.addEventListener('transitionend', removeTransition);
  }
  else if (i === 2) {
    btn.textContent = "C";
    btn.addEventListener('click', function() {
      btn.classList.add('clicked')
      calcScreen.textContent = "";
    });
    btn.addEventListener('transitionend', removeTransition);
  }
  else if (i === 1) {
    btn.textContent = "CE";
    btn.addEventListener('click', function() {
      btn.classList.add('clicked')
      calcScreen.textContent = "";
      firstValue = 0;
      secondValue = 0;
      expression = "";
    });
    btn.addEventListener('transitionend', removeTransition);
  }
  else if (i === 0) {
    btn.textContent = "x²";
    btn.addEventListener('click', function() {
      btn.classList.add('clicked')
      if(calcScreen.textContent) {
        calcScreen.textContent = calculateSquare(parseInt(calcScreen.textContent));
      }
    });
    btn.addEventListener('transitionend', removeTransition);
  }

  btnContainer.appendChild(btn);
}

function calculateAddition(value1, value2) {
  return value1 + value2;
}

function calculateSubtraction(value1, value2) {
  return value1 - value2;
}

function calculateMultiply(value1, value2) {
  return value1 * value2;
}

function calculateDivide(value1, value2) {
  return value1 / value2;
}

function calculateSquare(value1) {
  return value1 * value1;
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('clicked');
}