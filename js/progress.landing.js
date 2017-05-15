jQuery(function($){
  
  var students = [
    'aemsheika',
    'grizz',
    'sshidler',
    'aant07',
    'grahamchasady',
    'bbryant85'
  ];
  
  var treehouse_points = $('#treehouse-points');
  var counter = 0;
  var point_goal = 4000;
  var student_points_html = [];

  for (var i =0; i < students.length; i++) {
    $.ajax('https://teamtreehouse.com/' + students[i] + '.json', {
      success: function(response) {
        counter++;
        var percentage = (response.points.total / point_goal) * 100;
        student_points_html.push(`
          <div class='student ${response.profile_name}' data-score='${response.points.total}' data-percentage='${percentage}%' style='width:0'>
            <strong class='name'>${response.profile_name}</strong> <span class='score'>${response.points.total}</span>
            <img src="/assets/running-person.gif" class="runner"/>
          </div>
          `);          

        if (counter === students.length) {
          treehouse_points.html(student_points_html.join(''));
          setTimeout(function(){
            $('.student').each(function(){
              $(this).css('width', $(this).data('percentage')).addClass('shown');
            });
          },850);                    
        }
         
      }
    });    
  }
  

        
});
