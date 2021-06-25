# 05-day-planner

// for loop runs from i = 6 to i < 20 to account for variable i that is used to reference each of the text-areas
// textArea is set to grab everything with an id of each value of i on an iteration through the loop so 
// it grabs all of textArea html elements which i gave ids of numbers ranging from 6 to 19
// textArea.val sets the text within that area to whatever is in local storage saved within that save button id
// the if else statement then check if the id which is also the hour against the current time in military time
// and assign classes based on that