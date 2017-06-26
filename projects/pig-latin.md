---
layout: page
title: Pig Latin
permalink: /projects/pig-latin
---

[< Back to projects](/projects)

# Pig Latin Phrase Converter

We're going to build a tool that takes a sentence and converts it into [pig latin](https://en.wikipedia.org/wiki/Pig_Latin). We can extend this tool to serve as a very simple — and, frankly, ineffective — encryption tool.

## Create the Interface

- [Follow these steps](/projects/starter) to create the initial GitHub repository, clone the project into CodeAnywhere and add the starting HTML, CSS and JavaScript files
- [Follow these steps](/projects/jquery) to use jQuery with your project


## Create the Interface

Our interface will need:

- An input field to accept a paragraph of text. We'll use `<textarea>` for this
- A button that will trigger the function that will take the inputted text and convert it into pig latin
- A place to display the converted phrase


  Here's a potential starting outline:
  
  ```
    <h1>Pig Latin Converter</h1>
    <div>
      <textarea name="phrase" id="phrase"></textarea>
    </div>  
  
    <div>
      <input type="button" id="doAction" value="Convert Phrase" />
    </div>
  
    <div id="output"></div>
  ```
  
## Creating the Logic

Here are the basic steps we'll need to take in our JavaScript:

- Listen for when the "Convert Phrase" button is pressed
- Take the contents of the text input and capture it in a string
- Convert the phrase into pig latin
- Display the converted phrase in a our div with the id of `output`


The trickiest step in all of this is converting the inputted phrase to pig latin. You can find  [the rules here](https://en.wikipedia.org/wiki/Pig_Latin#Rules) along with examples, but here is a general summary:

- For words that begin with a consonant all of the letters before the first vowel are moved to the end of the word. Then the suffix "ay" is added. Example: javascript = avascriptjay

- For words that begin with vowels you just add "ay" to the end. Example: office = officeay 
  
  Here is one approach for capturing the initial text to convert
  
  ```
  
  var   $phrase = $("#phrase"),
      $button = $("#doAction"),
      $output = $("#output");
      
      $button.on("click", function(){
        let phrase = $phrase.val();
        let convertedPhrase = converPhraseToPigLatin(phrase)        
        $output.text(convertedPhrase)
      });  
      
      function convertPhraseToPigLatin(phrase) {
      }
  
  ````
 
 That's the basic structure for our project. Let's talk about what goes in the `convertPhraseToPigLatin` function. We'll need to:
 
 - Isolate each individual word in the phrase into an array
 - Iterate through that array and determine how each word should be formatted based on the rules of pig latin
 - Join the elements of our array and return the converted phrase
 
 
 To acheive the first part let's keep it simple and split  our phrase into words using an empty space (" ") as our separator:
 
 ```
     let words = phrase.split(" "); 
 ```
 
Now that we have all of the words as an array in the `words` variable let's iterate through them using the `forEach` array method:

```
       words.forEach(function(word, index){
       });
```

Now comes the hard part! To satisfy the requirements of pig latin we need to find the *first* occurrence of a vowel (a, e, i, o, u, y) in the word, take all of the letters up until that point in the word, move them to the end of the ord and add an "-ay" as the suffix.

An example:

programming  
**pr**ogramming    
ogramming**pr**  
ogramming**pray**   

The most efficient way to achieve this is to use something called [regular expressions](http://www.regular-expressions.info/). A regular expression is a way to efficiently validate and "match" strings in many programming languages. It has a very efficient syntax that is consistent regardless of what programming language you're primarily working in.  You can find out more here:

- [regular-expressions.info](http://www.regular-expressions.info/) — A thorough reference site.
- [Demystifying Regular Expressions](https://www.youtube.com/watch?v=EkluES9Rvak) — A video presentation from a conference
- There is an embedded video in the Treehouse forums available here: [teamtreehouse.com/community/regex-practicetutorial](https://teamtreehouse.com/community/regex-practicetutorial)

The syntax looks a little strange at first, but we can use regular expression to determeine whether or not there are any vowels in our word and what position they occur at all in a single line! Here's how we'd take that approach:

```
        let matches = word.match(/[aeiouy]/);
        let suffix = word.substr(0, matches.index)
        word = word.substr(matches.index);
```

In the first line we're using the `match` string method. This method will return the position within the string where a match was found along with specifically *what* was matched. Itcan accept a string or a regular expression. A regular expression is encapsulated in forward slashes like this: `/word/`. The string between those slashes is what the method will attempt to match within the string. 

Where the power of regular expressions really lies is that you can include special characters to instruct the regular expression to match in particular ways. Our regular expression — `/[aeiouy]/` — shows all of the vowels in English encapsulated between two square brackets. This is telling the program to match *any* of those letters within the brackets, in any order.

For more information on these special characters please see one of the previously linked resources above.

The `matches` variable will return an object structured like this:
```
{
  0: (String)
  index: (Number),
  input: (String)
}
```

The `index` key will contain the starting point in the string where one of the characters in our regular expression was first found. The input key will contain the specific part of our regular expression — in our scenario, which vowel —that was matched.

Using that index we can split the string and create a valid pig latin version fo the word like this:

        let matches = word.match(/[aeiouy]/);
        let suffix = word.substr(0, matches.index) // beginning of string up to the matched index
        word = word.substr(matches.index); // remainder of string from matched index to end of string
        let pigLatinWord = word.concat(suffix, "ay");

Now to combine everything together, return the entire pig latin phrase and create logic that can account for an invalid word that potentially contains now vowels:

    function convertToPigLatin(phrase) {
      let words = phrase.split(" ");
      let pigLatinPhrase = [];
                  
      words.forEach(function(word, index){
        let matches = word.match(/[aeiouy]/);
        if (matches) {
          let suffix = word.substr(0, matches.index)
          word = word.substr(matches.index);
          let pigLatinWord = word.concat(suffix, "ay");
          pigLatinPhrase.push(pigLatinWord);
        }else{
          pigLatinPhrase.push(word.concat("ay"));
        }
      });
      
      return pigLatinPhrase.join(" ");
    }

Our function should be able to accurately convert these phrases into pig latin:

- This is a phrase in pig latin
- I made this using JavaSCRIPT, HTML and CSS
- The rain in spain stays mainly in the plane

But it's not a perfect function.  Some potential issues:

- How doe we handle capitalized letters that might end up in the middle of the word? 
- How do we handle punctuation, paragraph breaks and other non-space, non-letter information?

The answer to these problems lies in further exploration of regular expressions!

## Extra Credit

- Can we create a nicer layout that adapts itself to mobile?
- Can we incorporate [Bootstrap](/projects/bootstrap)?
- Can we fix our function to not move capitalized letters into the middle of words?
- Can we fix our function to handle punctuation?
- Can we extend this project to allow converting *from* pig latin? Is that even possible?
- Can we provide options to convert the phrase into other forms of semi-intelligbile jibberish?
