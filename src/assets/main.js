var a;
$(function() {

  // your code will go here
 $.ajax({
    url: 'https://www.codeschool.com/users/300282.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      a = response;
      console.log('api call OK!');
      response.courses.completed.forEach(function(element) {
        $("#badges").append('<div class="course"><h3>'+element.title+'</h3><img src="'+element.badge+'" alt="badge"><a href="'+element.url+' target="_blank" class="btn btn-primary">See Course</a></div>');
      }, this);
    }
  });

});