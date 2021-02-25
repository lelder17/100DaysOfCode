//create cal buttons
let calc_buttons = [
  {
    name: 'clear',
    symbol: 'Clear',
    formula: false,
    type: 'key',
  },
  {
    name: 'delete',
    symbol: 'Delete',
    formula: false,
    type: 'key',
  },
  {
    name: 'percent',
    symbol: '%',
    formula: '%',
    type: 'operator',
  },
  {
    name: 'division',
    symbol: '/',
    formula: '/',
    type: 'operator',
  },
  {
    name: '7',
    symbol: '7',
    formula: '7',
    type: 'number',
  },
  {
    name: '8',
    symbol: '8',
    formula: '8',
    type: 'number',
  },
  {
    name: '9',
    symbol: '9',
    formula: '9',
    type: 'number',
  },
  {
    name: 'multiplication',
    symbol: 'X',
    formula: '*',
    type: 'operator',
  },
  {
    name: '4',
    symbol: '4',
    formula: '4',
    type: 'number',
  },
  {
    name: '5',
    symbol: '5',
    formula: '5',
    type: 'number',
  },
  {
    name: '6',
    symbol: '6',
    formula: '6',
    type: 'number',
  },
  {
    name: 'subtraction',
    symbol: '-',
    formula: '-',
    type: 'operator',
  },
  {
    name: '1',
    symbol: '1',
    formula: '1',
    type: 'number',
  },
  {
    name: '2',
    symbol: '2',
    formula: '2',
    type: 'number',
  },
  {
    name: '3',
    symbol: '3',
    formula: '3',
    type: 'number',
  },
  {
    name: 'additional',
    symbol: '+',
    formula: '+',
    type: 'operator',
  },
  {
    name: '0',
    symbol: '0',
    formula: '0',
    type: 'number',
  },
  {
    name: 'calculate',
    symbol: '=',
    formula: '=',
    type: 'calculate',
  },
];

const output_operation_element = document.querySelector('.operation .value');
const output_result_element = document.querySelector('.result .value');
const input_element = document.querySelector('.input');

function createButtons() {
  //create rows for buttons
  const buttons_per_row = 4;
  let added_btns = 0;

  //loop over each button in array to add in row
  calc_buttons.forEach((button) => {
    //see if the other button equal to 0 if so add a row
    if (added_btns % buttons_per_row == 0) {
      input_element.innerHTML += `<div class="row"></div>`;
    }

    const row = document.querySelector('.row:last-child');

    row.innerHTML += `<button class="${button.type}" id="${button.name}">
                        ${button.symbol}
                    </button>`;
    added_btns++;
  });
}
createButtons();

// add eventlistener for input element
input_element.addEventListener('click', (event) => {
  //select the event button by using .target
  const clicked_button = event.target;

  calc_buttons.forEach((button) => {
    //send button to cal function
    if (button.name == clicked_button.id) calculator(button);
  });
});

//cal data
//save data in an object
let data = {
  operation: [],
  result: [],
};

//Calculator
function calculator(button) {
  if (button.type == 'operator') {
    //push
    data.operation.push(button.symbol);
    data.result.push(button.formula);
  } else if (button.type == 'number') {
    //push
    data.operation.push(button.symbol);
    data.result.push(button.formula);
  } else if (button.type == 'key') {
    if (button.name == 'clear') {
      //clear the array and update Result
      //push
      data.operation = [];
      data.result = [];
      updateOutputResult(0);
    } else if (button.name == 'delete')
      //to delete use the pop method
      data.operation.pop();
    data.result.pop();
  } else if (button.type == 'calculate') {
    //when user clicks on calculate.. join elements in array
    let join_results = data.result.join('');

    let result;
    //error
    try {
      //evaluate the string
      result = eval(join_results);
    } catch (error) {
      if (error instanceof SyntaxError) {
        result = 'Syntax Error!';
        //then update
        updateOutputResult(result);
        //then return
        return;
      }
    }

    //format result
    result = formatResult(result);
    //then update
    updateOutputResult(result);

    //declare the  arrays and push results to arrays
    data.operation = [];
    data.result = [];

    //push results to arrays
    data.operation.push(result);
    data.result.push(result);

    //we dont want to update out operation so return
    return;
  }
  //update operation element with operation.join
  updateOutputResult(data.operation.join(''));
}

function updateOutputResult(operation) {
  //set string to inner html
  output_operation_element.innerHTML = operation;
}

function updateOutputResult(result) {
  //set string to inner html
  output_result_element.innerHTML = result;
}

//format result function
function formatResult(result) {
  const max_output_length = 10;
  const output_results = 5;

  if (digitCounter(result) > max_output_length) {
    if (isFloat(result)) {
      //if true we need the integer part of the float
      const result_integer = parseInt(result);
      //calc length of integer
      const result_integer_length = digitCounter(result_integer);

      //if > 10 return output results
      if (result_integer_length > max_output_length) {
        return result.output_results(output_results);
      } else {
        // if < 10 use toFixed method
        const num_of_digits_after_point =
          max_output_length - result_integer_length;
        return result.toFixed(num_of_digits_after_point);
      }
    } else {
      //if number is an integer use to Precision method
      return result.toPrecision(max_output_length);
    }
  } else {
    return result;
  }
}

//digitCounter function
//make the number a string and use length property
function digitCounter(number) {
  return number.toString().length;
}

//check to see if number is float or not
function isFloat(number) {
  //return the number module 1 not = to 0
  return number % 1 != 0;
}
