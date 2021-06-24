// shows the current day within the header
var displayTime = moment().format("MMM Do, YYYY hh:mm");
$("#currentDay").text(displayTime);

// logs the current hour in military format to be compared to timeBlock times
var current = moment().format("k");
console.log("This is the current time " + current);

// creates variable equal to all of the objects with the timeBlock class aka all the blocks that will 
// change color
timeBlock = $(".time-block");
console.log("This is timeBlock " + timeBlock);
timeBlocks = [];


for(var i = 0; i <= 14; i ++){
    timeBlocks.push(timeBlock);
}
console.log("Attempt at an array of timeBlock " + timeBlocks);
console.log("Attempt at array.value " + timeBlocks.value)

// getting all of the text within each hour class, aka times listed next to each row
timeBlockTime = $(".hour").text();
console.log("Should be all the times in one line " + timeBlockTime);

// puts the times from the timeBlocks into an array
var timeArray = timeBlockTime.split(" ");

timeSibling = $(".hour");

console.log("These are the times in an array " + timeArray);


// grab element by id using jquery
// build something that decides if current element that im selecting is in past vs present by comapring it to time
// use i instead of textArea[i]


// use ids as key that data is saved under
// 




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

        console.log("left should be greater than" + timeArray[i] + current);
        console.log("welcome to the future");
        
        textArea.addClass("future");
        // timeSibling[i].nextSibling.addClass("future");

    } else if (i <= current){

        console.log("left should be less than" + timeArray[i] + current);
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