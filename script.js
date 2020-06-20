//Display Current Day
$("#currentDay").text(moment().format('MMMM Do YYYY'));

// On page load, load local storage

var currentHour = moment().format('H')                                // Variable for Current Time in 24 Hour
var containerEl = $(".container")

for(i=9; i<18; i++){                                                    // Loops through 9am-5pm

    if(i < currentHour){
        var newBlock = $('<div class = "time-block past">')             // Creates new Past Time Block
        blockContent();   
    }
    if(i == currentHour){
        var newBlock = $('<div class = "time-block present">')          // Creates new Present Time Block
        blockContent();
    }
    if(i > currentHour){
        var newBlock = $('<div class = "time-block future">')           // Creates new Future time Block
        blockContent();
    }
}

function blockContent(){                                                // Creates Block Content
    var newRow= $('<div class = "row">')                                // Creates new Row
    var newHour = $(`<div class = "col-md-1 hour">${i}</div>`)          // Creates new Column For Hour
    var newText = $(`<div class = "col-md-10 description">`)            // Creates new Column for Text Field - no input yet
    var newBtn = $(`<button class = "col-md-1 saveBtn">`)               // Creates new Save Button Column     

    newRow.append(newHour, newText, newBtn)                             // Appends Collumns to Row
    newBlock.append(newRow)                                             // Appends Row to Timeblock
    containerEl.append(newBlock)                                        // Appends Timeblock to Container
}
   
$(".saveBtn").on("click", function() {                                  // Save Button On Click 

})




