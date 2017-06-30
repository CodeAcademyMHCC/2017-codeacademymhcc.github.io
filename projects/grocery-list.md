---
layout: page
title: Grocery List — Friday/Weekend Homework
permalink: /projects/grocery-list
---

[< Back to Friday/Weekend project](/projects/friday)

## Grocery List

This project should allow a user to add and remove items to on ongoing "grocery list" on the page.  The basics should include:

- A form with inputs so the user can easily enter items they want to add to the list
- A list that displays these items as they are added
- A way to **remove** existing items and clear the list

### Suggestions

- Use jQuery for attaching event listeners and appending/removing items from the DOM
- Try adding a "remove" button inside of each `<li>` you append as the list is created. You will need to create listeners for this button even though it will not be immediately visible on the page. Additionally, I'd suggeste researching the [jQuery parent method](https://api.jquery.com/parent/) to facilitate your remove feature.
- Try using CSS to make the "remove" button only visible on hover
  

### Extra Credit

- Can you make the project work well on mobile devices? Integrate with Bootstrap?
- Can you allow for **editing** items that have already been added to the list?  This is a tricky feature :)
- Can you include [jQuery UI](https://jqueryui.com/) and make the grocery list [sortable](https://jqueryui.com/sortable/) via drag-and-drop?
- Cany you add a checkbox next to each item and cross it out when an item is "checked"?
