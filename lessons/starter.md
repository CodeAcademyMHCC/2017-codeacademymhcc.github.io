---
layout: page
title: Starter Project
permalink: /projects/starter
---

[< Back to projects](/projects)

# Starting a New Project

These steps will help us generate a "starter" template that can be used for class and personal projects. You may wish to organize things differently depending on the natuer of the project, but these steps can be used to get started for just about any static website project. 

These steps assume we're using:

- [GitHub](https://github.com) for our git repository
- [CodeAnywhere](https://codeanywhere.com/) as our texte editor/IDE

## Step 1: Create a new repo on GitHub

- Log into **GitHub** and [create a new repository](https://github.com/new). You should see a green **New Repository** button somewhere on the right-hand side of the page.

- Give the repository a name and  click the **Create Repository** button at the bottom of the page. You can select the **Initialize this repository with a README** option if you wish, but it's not required.

- From the new repository page click the green **Clone or Download** button and **copy the provided URL.** It should look something like: `git@github.com:[username]/[project-name].git` Make sure that the label says **Clone with SSH**' and not **Clone with HTTPS**.

## Step 2: Clone the repo into CodeAnywhere

- Open **CodeAnywhere** and right-click on our connection (During class we renamed this to *GitHub Projects*) and select  **SSH Terminal** from the menu options. This will open the termin at the default folder: `/home/cabox/workspace`

- Using the URL copied from the previous step type `git clone git@github.com:[username]/[project-name].git`.

- After it is finished downloading change into that directory `cd [project-name]` 

- On the left hand side right-click on our connection and select **Refresh** from the submenu. You should see the list of files and directories update and include the newly cloned folder. 


## Step 3: Create initial HTML/CSS/JS files

- Right click on our newly cloned folder and selected **Create File** from the submenu. And name the file `style.css`

- Right click on our newly cloned folder and selected **Create File** from the submenu. And name the file `script.js`

- Right click on our newly cloned folder and selected **Create File** from the submenu. And name the file `index.html`

- Open the `index.html` file. To create the initial structure for our document simply type `html:5` and hit the **tab key** to autocomplete it. You should see a basic HTML template.

- In the `<head>` portion of our HTM L file add a link that links to our CSS file: `<link rel="stylesheet" href="style.css">`. You can type the word `link`, hit the **tab key** to autocomplete the element and simply type in `style.css` to do this.
  
  -Directly before the closing `</body>` tag add a line that links to our JavaScript file: `<link rel="stylesheet" href="script.js" />`. Similar to the last step you can type the word `script:src`, hit the **tab key** to autocomplete the element and simply type `script.js` to link to he source.

## Step 4: Start coding!

We now have a basic structure for a static HTML, CSS and JavaScript project. Other steps you can take from here include:

- (Add the Bootstrap framework)(/projects/bootstrap)
- [Add webfonts and icon fonts](/projects/webfonts)