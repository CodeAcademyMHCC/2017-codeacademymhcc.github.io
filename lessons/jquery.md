---
layout: page
title: Working with jQuery
permalink: /projects/jquery
---

[< Back to projects](/projects)

# Working with jQuery

jQuery is a library for normailzing certain cross-browser behaviors and making other common JavaScript operations simpler. We can include it in our project by linking to the [CDN-hosted](https://en.wikipedia.org/wiki/Content_delivery_network) version via the official jQuery website:

[code.jquery.com](https://code.jquery.com/)

Find the link to the latest **minified** version of the jQuery library. Right click on the link and select the option in the submenu that best matches **Copy link address.**

In your HTML file include a link to this resource via a script tag. In [CodeAnywhere](https://codeanywhere.com/) we can simply type `script:src` and hit the **tab key** to autocomplete the code to `<script src=""></script>`. In the `src` attribute paste the copied URL from the jQuery CDN.

It should look something like this:

```
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
``` 

Place this before your closing `</body>` tag and **before** other scripts that are dependent on jQuery.
