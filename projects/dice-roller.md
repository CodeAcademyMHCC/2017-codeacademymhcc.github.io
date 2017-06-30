---
layout: page
title: Dice Roller — Friday/Weekend Homework
permalink: /projects/dice-roller
---

[< Back to Friday/Weekend project](/projects/friday)

## Dice Roller

This project should allow a user to simulate rolling 2 (or more) dice on the page. The basics should include:

- A button that, when clicked, simulates rolling the dice
- A visual display of the face of the dice showing the number (don't worry about animations or anything like that)
- A way to change the total number of dice being rolled (Assume they are all 6-sided dice)

### Suggestions

- You can use jQuery for attaching event listeners and appending/removing items from the DOM, but it might not speed things up much with this project. Beyond the initial event listener for the button "click" and updaitng the DOM to display the number that was rolled, this script would not take advantage of too many jQuery features.
- Start with creating something that outputs the correct number to the console. Once that is working correctly you can move on to displaying the dice visually. Besides the total value you'll want to know the value of each individual di that was rolled. In your testing see if you can create an array and output it to the console, so that if a 7 was rolled using two dice you'd see something like this: `[5,2]`


### Extra Credit
- Make it work on mobile? Incorporate Bootstrap?
- You might be able to find images of dice you can use for each number 1-6, or you can try to generate the dice using HTML and CSS. The latter approach is a little bit harder, but could fun :)
- Can you click/tap on individual dice to only change the number for that di while leaving the other as it is?
