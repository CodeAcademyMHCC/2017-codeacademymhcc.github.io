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
  "Create the Interface": {
    url: 'http://teamtreehouse.com/library/how-the-web-works',
    cssClass: 'computer-basics',
    badges:[
      {
        'url': 'http://teamtreehouse.com/library/how-the-web-works',
        'icon':'https://achievement-images.teamtreehouse.com/badges-www-stage1.png'
      },
      {
        'url': 'http://teamtreehouse.com/library/computer-basics',
        'icon':'https://achievement-images.teamtreehouse.com/badges_computerbasics_stage1.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/how-the-internet-works',
        'icon':'https://achievement-images.teamtreehouse.com/badges-internet-stage1.png'
      }
  ]
  },
  "Introduction to HTML & CSS": {
    url: 'http://teamtreehouse.com/library/how-the-web-works',
    cssClass: 'intro-to-html-css',
    badges:[
      {
        'url': 'https://teamtreehouse.com/library/introduction-to-html-and-css',
        'icon':'https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-01.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/introduction-to-html-and-css',
        'icon':'https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-02.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/introduction-to-html-and-css',
        'icon':'https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-03.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/introduction-to-html-and-css',
        'icon':'https://achievement-images.teamtreehouse.com/badges_intro_to_html_css_stage-04.png'
      }
    ]
  },
  "HTML": {
    url: 'http://teamtreehouse.com/library/html',
    cssClass: 'HTML',
    badges:[
      {
        'url': 'https://teamtreehouse.com/library/html',
        'icon':'https://achievement-images.teamtreehouse.com/HTML_Basics.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/html',
        'icon':'https://achievement-images.teamtreehouse.com/HTML_Text.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/html',
        'icon':'https://achievement-images.teamtreehouse.com/HTML_Lists.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/html',
        'icon':'https://achievement-images.teamtreehouse.com/HTML_Links.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/html',
        'icon':'https://achievement-images.teamtreehouse.com/HTML_Objects.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/html',
        'icon':'https://achievement-images.teamtreehouse.com/HTML_Tables.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/html',
        'icon':'https://achievement-images.teamtreehouse.com/HTML_Forms.png'
      }                              
      
      
    ]
  },
  "CSS Basics": {
    url: 'https://teamtreehouse.com/library/css-basics',
    cssClass: 'css-basics',
    badges:[
      {
        'url': 'https://teamtreehouse.com/library/css-basics',
        'icon':'https://achievement-images.teamtreehouse.com/badges_css_basics_stage1.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/css-basics',
        'icon':'https://achievement-images.teamtreehouse.com/badges_css_basics_stage2.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/css-basics',
        'icon':'https://achievement-images.teamtreehouse.com/badges_css_basics_stage3.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/css-basics',
        'icon':'https://achievement-images.teamtreehouse.com/badges_css_basics_stage4.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/css-basics',
        'icon':'https://achievement-images.teamtreehouse.com/badges_css_basics_stage5.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/css-basics',
        'icon':'https://achievement-images.teamtreehouse.com/badges_css_basics_stage6.png'
      },
      {
        'url': 'https://teamtreehouse.com/library/css-basics',
        'icon':'https://achievement-images.teamtreehouse.com/badges_css_basics_stage7.png'
      }
    ]
  },
  "How to Make a Website": {
    url: "http://teamtreehouse.com/library/how-to-make-a-website",
    cssClass: "how-to-make-a-website",
    badges: [
      {
        'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
        'icon':'https://achievement-images.teamtreehouse.com/badges_html_howtomakeawebsite_stage01.png'
      },
      {
        'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
        'icon':'https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage02.png'
      },
      {
        'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
        'icon':'https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage03.png'
      },
      {
        'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
        'icon':'https://achievement-images.teamtreehouse.com/bagdes_html_howtobuildawebsite_stage04.png'
      },
      {
        'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
        'icon':'https://achievement-images.teamtreehouse.com/badges_html_howtomakeawebsite_stage05.png'
      },
      {
        'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
        'icon':'https://achievement-images.teamtreehouse.com/badges_html_howtomakeawebsite_stage06.png'
      },
      {
        'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
        'icon':'https://achievement-images.teamtreehouse.com/badges_html_howtomakeawebsite_stage07.png'
      },
      {
        'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
        'icon':'https://achievement-images.teamtreehouse.com/badges_html_howtomakeawebsite_stage08.png'
      },
      {
        'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
        'icon':'https://achievement-images.teamtreehouse.com/badges_html_howtomakeawebsite_stage09.png'
      },
      {
        'url': 'http://teamtreehouse.com/library/how-to-make-a-website',
        'icon':'https://achievement-images.teamtreehouse.com/badges_html_howtomakeawebsite_stage10.png'
      }
    ]
  }      
}