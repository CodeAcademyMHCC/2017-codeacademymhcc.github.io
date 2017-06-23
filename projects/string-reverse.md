---
layout: page
title: Reverse a String
permalink: /projects/string-reverse
---

[< Back to projects](/projects)

# Reverse a String

We're going to make a simple page that accepts a string form the user and returns it in reverse.

## Create the Interface

- [Follow these steps](/projects/starter) to create the initial GitHub repository, clone the project into CodeAnywhere and add the starting HTML, CSS and JavaScript files
- [Follow these steps](/projects/jquery) to use jQuery with your project


## Create the Interface

Our interface is going to be quite simple. We'll only need:

- An input field to accept the string from the user
- A button that triggers the function to reverse the string and display it when pressed
- A place on the page we can display the reversed string

Let's strat with this approach for our interface:
  
  ```
    <div>
      <input type="text" id="textInput" />
    </div>  
  
    <div>
      <input type="button" id="doAction" value="Reverse Word" />
    </div>
  
    <div id="display">
    
    </div>
  ```
 
## Creating the Logic

Here are the steps we'll need to achieve in our JavaScript:

- Listen for when the "Reverse String" button is pressed
- Take the contents of the text input and capture it in a string
- Reverse the contents of that string
- Display the newly reversed contents into the `<div>` we've created with an id of `display`.
  
  Here is one approach:

```
  var $textInput = $("#textInput"),
      $button = $("#doAction"),
      $display = $("#display");
      
      $button.on("click", function(){
        let word = $textInput.val();
        let reversedWord = word.split("").reverse();
        
        $display.text(reversedWord.join(""));
      });  
    
```


## Extra Credit

- Can we give the user multiple options to manipulate the text?
- Can we create a nicer layout that adapts itself to mobile?
- Can we incorporate [Bootstrap](/projects/bootstrap)?
- Can we check to make sure the content isn't empty before running out function?
