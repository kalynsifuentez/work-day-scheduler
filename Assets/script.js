$(function () {
  // Added click to "saveBtn"
  //Variables set for the save button and value of text area.
  //Variables are within the function with event listener for "saveBtn".

  $('.saveBtn').on('click', function (){
    var key = $(this).parent().attr('id')
    var value = $(this).siblings('textarea').val()
    localStorage.setItem(key, value)
  })
  
  //Day.js hour code:
  let hour =  dayjs().hour();

  // Code to compare the current hour and the number value of id attribute "time-block"
  $(".time-block").each(function () {

    var schedule = Number($(this).attr("id").split('-')[1]);
 
    // Conditional statement to represent the past, present, future "time-blocks"
    if (hour === schedule) {
      $(this).addClass("present");
  
    } else if (hour < schedule) {
      $(this).removeClass("present");
      $(this).addClass("future");
  
    } else if (hour > schedule) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  // Code to save user input to localStorage and set
  $('#hour-9 textarea').val(localStorage.getItem('hour-9'))
  $('#hour-10 textarea').val(localStorage.getItem('hour-10'))
  $('#hour-11 textarea').val(localStorage.getItem('hour-11'))
  $('#hour-12 textarea').val(localStorage.getItem('hour-12'))
  $('#hour-13 textarea').val(localStorage.getItem('hour-13'))
  $('#hour-14 textarea').val(localStorage.getItem('hour-14'))
  $('#hour-15 textarea').val(localStorage.getItem('hour-15'))
  $('#hour-16 textarea').val(localStorage.getItem('hour-16'))
  $('#hour-17 textarea').val(localStorage.getItem('hour-17'))
  $('#hour-18 textarea').val(localStorage.getItem('hour-18'))

});

// Day.js to display the current date in the header of the page
let todaysDate = dayjs();

// Set interval outside of the function, for #currentDay to run without reloading
setInterval(function(){
  $("#currentDay").text(todaysDate.format("dddd, MMMM D, YYYY h:mm A	"));
}, 1000)