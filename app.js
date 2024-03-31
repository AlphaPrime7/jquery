//jquerry script syntax
//Useful when trying to manipulate text areas.
$(document).on('ready', function () {
    //your code here
  });

//Works; integrate with normal JS code
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

//To be tested
$("textarea").live("keyup", function(e) {
  if ($("textarea").attr("cols")) {
      var cols = parseInt($("textarea").attr("cols")),
          curPos = $('textarea').prop("selectionStart"),
          result = Math.floor(curPos/cols);
      var msg = (result < 1) ? "Cursor is on the First line!" : "Cursor is on the line #"+(result+1);
      console.log($("p").text(msg).text());
  };
});​

//Thinking of a way to count lines in a textarea
var text="Hello world\n";
if(text.indexOf("\n")==-1){
  alert("No newline characters")
}else{
  alert("Contains newline characters")
}