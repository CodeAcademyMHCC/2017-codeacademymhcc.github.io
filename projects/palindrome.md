---
layout: page
title: Palindrome
permalink: /projects/palindrome
---

[< Back to projects](/projects)

# Palindrome Checker

We're going to build a simple project that accepts a string from the user and determines whether or not it's a palindrome. A palindrome is a word that is spelled the same way forwards as it is backwards, like **madam**, **racecar**, **noon** or **level**.

## Getting Started

- [Follow these steps](/projects/starter) to create the initial GitHub repository, clone the project into CodeAnywhere and add the starting HTML, CSS and JavaScript files
- [Follow these steps](/projects/jquery) to use jQuery with your project


## Create the Interface

Our interface will need:

- An input field to accept text from the user
- A button that will trigger the function that checks for a palindrome and display the results, when pressed
- A place to display the results


  Here's a potential starting outline:
  
  ```
    <div>
      <input type="text" id="textInput" />
    </div>  
  
    <div>
      <input type="button" id="doAction" value="Check Palindrome" />
    </div>
  
    <ul id="results">
    
    </ul>
  ```

The input and button are self-explanatory, but the `<ul>` results element will contain a running list of all the words we've checked to see were palindromes.

  
## Creating the logic

Here are the steps we'll need to take in our JavaScript:

- Listen for when the "Check Palindrome" button is pressed
- Take the contents of the text input and capture it in a string
- Check if the word is a palindrome or not and return a yes/no result
- Display the result in a running log within the `<ul>` element with the `results` id.
  
  Here is one approach:
  
  ```
  
  var $textInput = $("#textInput"),
      $button = $("#doAction"),
      $display = $("#display");
      
      $button.on("click", function(){
        let word = $textInput.val(),
            result = "";
        
        if (checkPalindrome(word)) {
          result = `${word} is a palindrome.`;
        }else{
          result = `${word} is NOT palindrome.`;          
        }
        
        $display.append(`<li>${result}</li>`);
      });  
      
      function checkPalindrome(word) {
        let reversedWord = word.split("").reverse().join("");
        console.log(word, reversedWord);
        if (word === reversedWord) {
          return true;
        }else{
          return false;
        }
      }
  
  ````
 

## Extra Credit

- Can we create a nicer layout that adapts itself to mobiel?
- Can we incorporate [Boostrap](/projects/bootstrap)?
- Can we display the results different based on whether or not it **is** a palindrome?
- Can we check to make sure the content isn't empty before running our function?
