jQuery(function($){
  function update_student_progress() {
    var student_section = $("#students"),
        student_section_html = "";
    
    var counter = 0;
    for (var i in students) {
      $.ajax('https://teamtreehouse.com/' + students[i] + '.json', {
        success: function(response) {
          counter++;          
          if (location.search === '?debug') console.log(response);

          student_section_html += "<div class='text-center student-progress-section col-md-6'><h3 class='student-title'>"+response.name+"</h3>";
        
          // Find out all the badges they have
          var student = {
                badges:[],
                completed:{}
            }
          for (var x in response.badges) { 
            student.badges.push(response.badges[x].icon_url);
            student.completed[response.badges[x].icon_url] = {name:response.badges[x].name,url:response.badges[x].url}
          }        
      
          // compare those agains the badges we're looking for
          // loop through what we're tracking
        
          for (var course in tracking){
            var track = tracking[course];

            html="<div class='track-container text-center col'><div class='badge-container'>";

            // see which ones match
            for (var y in track.badges) {
              var badge_icon = track.badges[y].icon;
              var badge_url =  track.badges[y].url;
                                          
              if (student.badges.indexOf(badge_icon) > -1) {
                html += "<span class='badge-icon "+track.cssClass+"'><a href='"+badge_url+"'><img src='"+badge_icon+"' title='"+y+"' alt='' width=24/></a></span>";  
              }else{
                html += "<span class='badge-icon  "+track.cssClass+"'><a href='"+badge_url+"'><img src='"+badge_icon+"'  title='' alt='' width=24 class='in-progress'/></a></span>";  
              }                            
            }             
            student_section_html += html+"</div><p><small>"+course+"</small></p></div>"
          }
          
          student_section_html += "</div>";
          
          if (counter === students.length) student_section.html(student_section_html); 
          console.log("Updated student process at " + Date.now());                                      
          
        }
      });    
    }  
  }
  
  setInterval(update_student_progress, 30000);
  update_student_progress();
});  