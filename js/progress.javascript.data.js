var students = [
  'aemsheika',
  'grizz',
  'sshidler',
  'aant07',
  'grahamchasady',
  'bbryant85'
];

if (location.search === '?debug') students.push('georgemandis');

var tracks = {
  'Interactive JavaScript': [
    'http://teamtreehouse.com/library/javascript-basics',
    'http://teamtreehouse.com/library/javascript-loops-arrays-and-objects',
    'http://teamtreehouse.com/library/ajax-basics',
    'http://teamtreehouse.com/library/interactive-web-pages-with-javascript'
  ],
  'Object-Oriented Lessons': [
    'http://teamtreehouse.com/library/objectoriented-javascript'
  ]
}

var tracking = {
  "JavaScript Basics": {
    url: 'http://teamtreehouse.com/library/javascript-basics',
    cssClass: 'javascript-basics',
    badges: [{
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage1.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage2.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage0-34.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage3.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage4B.png'
    }]
  },
  "JavaScript Loops, Array and Objects": {
    url: 'http://teamtreehouse.com/library/javascript-loops-arrays-and-objects',
    cssClass: 'javascript-loops-array-objects',
    badges: [{
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage6.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage5.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/javascript-loops-stage3.png'
    }]
  },
  "Interactive Web Pages with JavaScript": {
    url: 'http://teamtreehouse.com/library/interactive-web-pages-with-javascript',
    cssClass: 'interactive-web-pages',
    badges: [{
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/bagdes-javascript-interactiveweb-stage-12.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/bagdes-javascript-interactiveweb-stage-13.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/bagdes-javascript-interactiveweb-stage-14.png'
    }]
  },

  'jQuery Basics': {
    url: 'http://teamtreehouse.com/library/jquery-basics',
    cssClass: 'jquery-basics',
    badges: [{
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_jQueryBasics_Stage1.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_jQueryBasics_Stage2.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_jQueryBasics_Stage3.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_jQueryBasics_Stage4.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_jQueryBasics_Stage5.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_jQueryBasics_Stage6.png'
    }]
  },

  'AJAX Basics': {
    url: 'http://teamtreehouse.com/library/ajax-basics',
    cssClass: 'ajax-basics',
    badges: [{
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_AJAXBasics_Stage1.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_AJAXBasics_Stage2.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_AJAXBasics_Stage3.png'
    }, {
      url: "",
      icon: 'https://achievement-images.teamtreehouse.com/badges_JavaScript_AJAXBasics_Stage4.png'
    }]
  }
}
