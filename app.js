$(document).ready(()=>{


//Add things to the to-do list
  $('#addThings').submit((e)=>{
    e.preventDefault();
    const $text = $('input').val();
    if ($text == '') {
      $("#errorMessage").slideDown(200, function() {
        //Stuff to do *after* the animation takes place
        $("#errorMessage").text("That field can't be submitted empty!")
                          .delay(3000)
                          .slideUp(300);
      });
    } else {
    $('input').val('');
    $("ul").append('<li class="item">'  + $text + '</br>')
           .append('Done: ' + '<input type="checkbox" class="finished"></li>');
           if ($('checkbox') === 'chec'
    }
  });

  const checkbox = 'Done: ' + '<input type="checkbox" class="finished">';

});
