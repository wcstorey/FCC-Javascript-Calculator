var entries = [];
var prevResult = "";

function insert(num) {
  document.getElementById("resultbox").value = document.getElementById("resultbox").value + num;

}

function operand() {
  var oper = arguments[0];
  var currentResult = arguments[1];

  console.log(currentResult);
  if (currentResult == 99) {
    document.getElementById("resultbox").value = currentResult;
  }

}

function math(oper) {
  switch (oper) {
    case 'add':
      entries.push(document.getElementById("resultbox").value);
      entries.push('+');
      document.getElementById("resultbox").value = "";
      break;
    case 'subtract':
      entries.push(document.getElementById("resultbox").value);
      entries.push('-');
      document.getElementById("resultbox").value = "";
      break;
    case 'multiply':
      entries.push(document.getElementById("resultbox").value);
      entries.push('*');
      document.getElementById("resultbox").value = "";
      break;
    case 'divide':
      entries.push(document.getElementById("resultbox").value);
      entries.push('/');
      document.getElementById("resultbox").value = "";
      break;
    case 'modulus':
      entries.push(document.getElementById("resultbox").value);
      entries.push('%');
      document.getElementById("resultbox").value = "";
      break;
    case 'answer':
      document.getElementById("resultbox").value = prevResult;
      break;
    case 'equals':
      console.log('equals');

      entries.push(document.getElementById("resultbox").value);
      console.log(entries.join(''));
      prevResult = eval(entries.join(''));
      document.getElementById("resultbox").value = "";
      document.getElementById("result").textContent = "Prev. Result: " + prevResult;
      entries = [];
      break;
    case 'CE':
      document.getElementById("resultbox").value = "";
      break;
    case 'AC':
      document.getElementById("resultbox").value = "";
      entries = [];
      break;
    default:
      break;
  }
}