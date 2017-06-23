---
layout: page
title: Color Mixer
permalink: /projects/color-mixer
---

[< Back to projects](/projects)

# Color Mixer

We're going to build a simple project that mixes three colors (red, green and blue) together on the screen to create a new color.

## Create the Interface

- [Follow these steps](/projects/starter) to create the initial GitHub repository, clone the project into CodeAnywhere and add the starting HTML, CSS and JavaScript files
- [Follow these steps](/projects/jquery) to use jQuery with your project


## Create the Interface

Our interface will need:

- 3 input fields to accept how much red, green and blue we'll be mixing into our color
- A play where the mixed color is displayed


  Here's a potential starting outline:
  
  ```
    <div>
      <input type="text" id="red" />
    </div>  
    <div>
      <input type="text" id="green" />
    </div>  
    <div>
      <input type="text" id="blue" />
    </div>
    
    <div>
      <input type="button" id="doAction" value="Mix Colors" />
    </div>
  
    <div id="mixedColor">
    </div>
  
  ```

  
## Creating the Logic

Here are the steps we'll need to take in our JavaScript:

- Listen for when the "Mix Colors" button is pressed
- Take the contents of the red, green and blue fields and calculate a new color based on these
- Display the mixed color in the `<div>` element with the `mixedColor` id.
 
 Here is one approach:
 
 ```
     var $red = $("#red"),
       $green = $("#green"),
       $blue = $("#blue"),
       $button = $("#doAction"),
       $mixedColor = $("#mixedColor");
     
       $button.on("click", function(){
         let red = $red.val(),
             green = $green.val(),
             blue = $blue.val();
       
         let newColor = `rgb(${red}, ${green}, ${blue})`;
       
         $mixedColor.css("background-color", newColor);
       });  
 
 ````

## Extra Credit

- How can we improve the interface? 
- Can we replace the text inputs with a [slider](http://thenewcode.com/757/Playing-With-The-HTML5-range-Slider-Input) or some other interface?
- Can we create a totally custom interface and leverage the `<input type="hidden">` element to store the color value?
- Instead of using RGB can we use HSL or HSV?
- Can we leverage `<input type='color'>` instead? How would that change the approach?
- Can we create a nicer layout that adapts itself to mobile?
- Can we incorporate [Boostrap](/projects/bootstrap)?
