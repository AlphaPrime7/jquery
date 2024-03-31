//jquerry script syntax
//Useful when trying to manipulate text areas.
$(document).on('ready', function () {
    //your code here
  });

$(function() {
  $('#test').on('click', function(event){
    cursor_position = event.pageY - $('#test').offset().top;
    console.log(cursor_position);
  if (cursor_position <= 15) {
    document.getElementById('cl').innerHTML = 'Cursor on line 1';
  } else {
    document.getElementById('cl').innerHTML = 'Cursor NOT on line 1';
  } 
  });
});
