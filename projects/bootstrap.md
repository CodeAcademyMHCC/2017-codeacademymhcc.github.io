---
layout: page
title: Working with Bootstrap
permalink: /projects/bootstrap
---

[< Back to projects](/projects)

# Working with Bootstrap

To add the Bootstrap framework to your project we'll need to add the required CSS and JavaScript files. We can either download those and include them in our project directly or link to the [CDN-hosted](https://en.wikipedia.org/wiki/Content_delivery_network) version of those resources. For simplicity's sake, we'll show you how to do the latter.

Go to the official Bootstrap website here:

[getbootstrap.com](http://getbootstrap.com/)

Click on the "Create the Interface" link in the menu and scroll to the "Bootstrap CDN" section. You should see some  code that links to the compiled and minified version of the CSS, looking like this:

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

Copy that code and paste it into the `<head>` of your HTML file.

Next we will need to include the JavaScript files. You should see a code example for the CDN-hosted JavaScript in that same block where we found the `<link>` to the CSS file. It should look something like this:

```
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
```

Copy and paste this just before your closing `</body>` tag in your HTML file. 

**Note:** Bootstrap's JavaScript features require jQuery to function correctly. See [this page for instructions on how to include jQuery in your project](/projects/jquery). When you do, make sure that jQuery is included *before* your Bootstrap files.