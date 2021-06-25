// shows the current day within the header
var displayTime = moment().format("MMM Do, YYYY hh:mm");
$("#currentDay").text(displayTime);

// logs the current hour in military format for easier comparison
var current = moment().format("k");

//runs from 6-19 because those are the hours displayed and the value i will be used to assign ids to
//each hour then within if else compares var i to current time and assigns given css classes 
for(var i = 6; i < 20; i ++){
    var textArea = $("#" + i);
    textArea.val(localStorage.getItem("s" + i));

    if(i == current){

        textArea.addClass("present");

    } else if (i >= current){

        textArea.addClass("future");

    } else if (i <= current){
        
        textArea.addClass("past");
    };

};

// event listener for saveBtn click
$(".saveBtn").click(function() {
   var buttonID = $(this).attr("id");
    var textContent = $(this).siblings("textarea").val();

    localStorage.setItem(buttonID, textContent);

});