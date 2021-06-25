# 05-day-planner

# Day Planner

This webpage allows users to see their current day laid out in color coded hour blocks based on whether that hour is in the past, present, or future. They can add information to each of the hour boxes and save it using the button on the right. Once saved this information will stay throughout webpage reloads until the hour blank or edited and saved. 

## Link to completed page

https://mmurphy222.github.io/05-day-planner/

## Usage
For this assignment css and HTML were given to us to work with. I first added time blocks into the HTML in the following form. 

```bash
     <div class = "row">
        <div class = "hour">6:00 AM </div>
        <textArea class = "time-block" id = "6"></textArea>
        <div class = "saveBtn" id = "s6"><p>🖫</p></div>
      </div>
```
These time blocks set up the hour on the left, the text area in the middle and the save button on the right with an icon. The ids of 6, and s6, along with the 6:00 time and are the same way for each of the subsequent hours. They also allow for easy reference within a for loop using the variable i.

Now looking at the javascript file. Time is referenced using moment.js. 

```bash
    var displayTime = moment().format("MMM Do, YYYY hh:mm");
    $("#currentDay").text(displayTime);

    var current = moment().format("k");
```
DisplayTime is displaying the current time at the top of the page, and current is the current time displayed in military time.

The for loop created to assign each time block its relative class in css to receive a background color looks like this. 

```bash
for(var i = 6; i < 20; i ++){
    var textArea = $("#" + i);
    textArea.val(localStorage.getItem("s" + i));
}
```   
The variable i runs through all numbers 6 - including 19. This aligns with the id names given to textAreas and save buttons. The var textArea uses that by using jquery to grab all elements with the id of i and i is the variable set in the for loop. So it will run through each of them. The same premise holds with the next line using localStorage to get whatever was saved within that button with the id of s[i]. If else statements follow the variables in the for loop and check i against variable current to assign each time block their relative color. 

Then there is an event listener for click on the save button.

```bash
$(".saveBtn").click(function() {
   var buttonID = $(this).attr("id");
    var textContent = $(this).siblings("textarea").val();

    localStorage.setItem(buttonID, textContent);

})
```
This function works by using this to grab the relative id of whatever button is clicked, and then makes creates a variable that holds the content written within that text Area. Siblings is used because the button and the textarea are siblings within the html. The local storage then sets the key value pair of button ID with the content stored inside the text area adjacent to that button. 
