// shows the current day within the header
var displayTime = moment().format("MMM Do, YYYY hh:mm");
$("#currentDay").text(displayTime);

// logs the current hour in military format to be compared to timeBlock times
var current = moment().format("k");
console.log("This is the current time " + current);

for(var i = 6; i < 20; i ++){
    // console.log("Should list each time on by one " + timeArray[i]);

    var textArea = $("#" + i);
    textArea.val(localStorage.getItem("s" + i));

    if(i == current){

        console.log("supposed to be equal" + i + current);
        console.log("this is the present")
        // timeSibling[i].nextSibling.addClass("present");

        textArea.addClass("present");

    } else if (i >= current){

        console.log("left should be greater than" + i + current);
        console.log("welcome to the future");
        
        textArea.addClass("future");
        // timeSibling[i].nextSibling.addClass("future");

    } else if (i <= current){

        console.log("left should be less than" + i + current);
        console.log("past");
        
        textArea.addClass("past");
        // timeSibling[i].nextSibling.addClass("past");
    };

};

// event listener for save button click
$(".saveBtn").click(function() {
   var buttonID = $(this).attr("id");
    var textContent = $(this).siblings("textarea").val();

    localStorage.setItem(buttonID, textContent);

});