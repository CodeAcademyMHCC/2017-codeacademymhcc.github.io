---
layout: page
title: Webfonts with Google Fonts and Font Awesome
permalink: /lessons/webfonts
search_exclude: true
---

# Webfonts

For a long time web designers were limited to "web-safe" fonts when it came to making typographical choices for their projects. Previously browsers could only use whatever fonts were available on the user's operating system.

To ensure a website rendered consistently across all browsers and systems designers relied on font "stacks" that were considered safe because it could be reasonably assumed that all or most systems would have one or more of these fonts installed. You can find a list of common web-safe font stacks here on W3 Schools:

[https://www.w3schools.com/cssref/css_websafe_fonts.asp](https://www.w3schools.com/cssref/css_websafe_fonts.asp)

This pracitce is still true to some degree, however now it's much easier and more widespread to load in external, custoom fonts for your website — not disimilar to how you might load in external images, CSS and JavaScript files.

For this lesson we're going to load external fonts from two different sources: [Google Fonts](https://fonts.google.com) &amp; [Font Awesome](http://fontawesome.io/).


## Google Fonts

Let's use Google Fonts to add two new fonts to our project: a serif font that will server as the primary body copy and a sans-serif font that we'll use for the headers.

1. Go to [fonts.google.com](https://fonts.google.com/) and find two fonts that you like
2. For each font click on the plus sign icon adjacent to the title. You should see this font get added to a small panel that appears at the bottom of the page.   
![](/images/google-fonts.png)    
 When you click to expand this panel you'll find two code examples to use in your project. The first is a `<link>` tag that will load an external stylesheet in your project so that the browser can load the font data and know how to use it. The second is an example of how to reference the new font in your CSS.
 3. Copy the `<link>` code and paste it into the `<head>` section of your project.
 4.  In your CSS add the following code to make use of the fonts (Note: you will need to replace the names of the fonts with your choices):

  ```
  body {
     font-family: 'Spectral', serif:
   }
 
   h1,h2,h3,h4,h5,h6 {
     font-family: 'Roboto', sans-serif;
   }
   ```

You should now see the primary body copy and headers replaced with your font choices!


## Font Awesome

Another way webftons are utilized is to load [icon fonts](https://css-tricks.com/examples/IconFont/). Because fonts are vectors and can be infinitely scaled up or down they have become a popular choice for social media icons and other simple, monochromatic interface elements.

Font Awesome is a very popular open-source icon font project that contains hundreds of icons you can use in your project. Using it is very similar to using Google Fonts. Let's use it to add some icons to our project:

1. Add the following code somewhere in your  `<head>` so that the browser loads and knows how to use the icon font:    
   `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />`
2. Now that the font is loaded we need to use some icons. Go to the [icons page](http://fontawesome.io/icons/) at Font Awesome. This will allow you to search through all of the icons and figure out how to use them
3. Try searching for "[envelope](http://fontawesome.io/icon/envelope/)" or "[twitter](http://fontawesome.io/icon/twitter/)" and click on the icon you wish to use. 
4. Similar to frameworks like [Bootstrap](https://getbootstrap.com), Font Awesome comes with predefined classes that you use to implement your icons. To use the envelope icon for example you would use the following HTML snippet: 

```
  <i class="fa fa-twitter" aria-hidden="true"></i>
````

You should now see the Twitter icon (or whichever icon you've chosen)  somewhere in your project.