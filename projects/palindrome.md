---
layout: page
title: Palindrome
permalink: /projects/palindrome
---

[< Back to projects](/projects)

# Calculator

Build a simple web-based calculator that looks and functions like a real-life one.

## Getting Started

- [Follow these steps](/projects/starter) to create the initial GitHub repository, clone the project into CodeAnywhere and add the starting HTML, CSS and JavaScript files
- [Follow these steps](/projects/jquery) to use jQuery with your project


## Create the Interface

Our calculator interface will need to have the following things:

- A display to show the current total for all our operations.
- 10 buttons to represent numbers 0-9
- 4 buttons to represent basic operations: plus, minus, multiply and divide
- 1 button to present "equals" and complete the operation
- 1 button to clear the screen

Suggested approaches

- Use the `<input type='button'>` element for each of these buttons on our calculator.
- For the 0-9 number buttons let's give those the class `number`
- For the non-number buttons let's give those the class `operation`
- Make sure each row of a buttons exists in a containing `<div>`
  
  Here's a potential starting outline:
  
  ```
    <div id="calculator">
      <input type="text" id="display" />
      <div class="row">
        <input type="button" value="0" class="number" />
        <input type="button" value="1" class="number" />
        <input type="button" value="2" class="number" />
      </div>
      <div class="row">
        <input type="button" value="3" class="number" />
        <input type="button" value="4" class="number" />
        <input type="button" value="5" class="number" />
      </div>
      <div class="row">
        <input type="button" value="6" class="number" />
        <input type="button" value="7" class="number" />
        <input type="button" value="8" class="number" />
      </div>
      <div>
        <input type="button" value="9" class="number" />
      </div>
      <div class="row">
        <input type="button" value="C" class="operation"/>
        <input type="button" value="+" class="operation" />
        <input type="button" value="-" class="operation" />  
        <input type="button" value="x" class="operation" />  
        <input type="button" value="/" class="operation" />  
        <input type="button" value="=" class="operation" />  
      </div>    
  </div>
  ```

## Styling the Interface

We'll use CSS To make the interface look a little bit more like an actual calculator. Some key things to address will include:

- Overwriting the default styles for `<input>`  text
- Ovewriting the default styles for `<input>` buttons
- Ensuring that all of the `<div>` elements with the class `row` maintain a consistent width and that their containing elements are event spaced within.

  Here is some potential starter code:
  ```
    #calculator {
      background:#000;
      max-width:100%;
      width:640px;
    }

    #calculator #display {
      display: block;
      border: none;
      background: #eee;
      font-family: monospace;
    }
  
    #calculator .number,
    #calculator .operation {
      background: orange;
      border: none;
      border-radius: 4px;
      color: black;
      padding: .5em;
      text-align:center;
    }

    #calculator .operation {
      background: green;
    }
  
  ```
  
## Creating the logic

Here are the things we'll need to keep track of:

- Track the total that's being calculated (`calculationTotal`) as operations are performed as well as the current number (`currentNumber`)

- Listen for clicks on the number buttons and build our current "number" that we'll want to perform an operation on. **Hint:** we'll need to build the number (`currentNumber`) as a string so that numbers are added to the right-hand side and use `parseInt()` when using it in calculations

- Listen for clicks on the operation buttons to get ready to perform the selected operation using the current number (`currentNumber`) on the total number (`calculationTotal`).

- Listen for clicks on the equals button to actually perform the operation selected in the previous step.

- Listen for clicks on the clear button to clear all values to zero.

Potential, non-functional starter code (You'll need to finish the code that perform the actual operation!)

```

    var calculationTotal = 0,
          currentNumber ="",
          currentOperation = "";
                      
    $("#calculator .number").on("click", function() {
      var value = $(this).value();      
      currentNumber.concat(value);
      $("#display").value(currentNumber);
    });

    $("#calculator .operation").on("click", function() {

      var operation = $(this).value();
      
      // Special behaviors for clear and equals
      if (operations === "C") {
      
        caculationTotal = 0;
        currentNumber = "";
        currentOperation = "";
        $("#display").value("0");        
      
      }else if(operations === "=") {
        
        // Check to see what currentOperation is and
        // apply that to parseInt(currentNumber) and the calculationTotal
                
      }else{
      
        currentOperation = operation;              
      
      }      
    });
    
```


## Extra Credit

- Can we make the calculator mobile/responsive?
- Add an option to change the color?
- Add "memory" buttons that can store, clear and recall a value when pressed?
- Can we add more complicated operations like square roots and exponents?
- A special feature that "flips" the calculator around to read words like "hello"?