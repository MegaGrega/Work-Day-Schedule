
$("#currentDay").text(moment().format('MMMM Do YYYY'));                                                 //Displays current day in text field


var currentHour = moment().format('H')                                                                  // Variable for Current Time in 24 Hour
var containerEl = $(".container")

for(i=9; i<18; i++){                                                                                    // Loops through 9am-5pm

    if(i < currentHour){
        var newBlock = $('<div class = "time-block past">')                                             // Creates new Past Time Block
        blockContent();   
    }
    if(i == currentHour){
        var newBlock = $('<div class = "time-block present">')                                          // Creates new Present Time Block
        blockContent();
    }
    if(i > currentHour){
        var newBlock = $('<div class = "time-block future">')                                           // Creates new Future time Block
        blockContent();
    }
}

function blockContent(){                                                                                // Creates Block Content
    var newRow= $('<div class = "row">')                                                                // Creates new Row
    var newHour = $(`<div class = "col-md-1 hour">${i}</div>`)                                          // Creates new Column For Hour
    var newText = $(`<textarea class = "col-md-10 description" id = "${i}">`)                           // Creates new Column for Text Field - no input yet
    var newBtn = $(`<button class = "col-md-1 saveBtn" data-name = "${i}">${"Save"}</button>`)          // Creates new Save Button Column     

    newRow.append(newHour, newText, newBtn)                                                             // Appends Collumns to Row
    newBlock.append(newRow)                                                                             // Appends Row to Timeblock
    containerEl.append(newBlock)                                                                        // Appends Timeblock to Container
}
   
$(".saveBtn").on("click", function() {                                                                  // Save Button On Click
    var buttonTime = this.getAttribute("data-name")                                                     // Gets attribute from button                                                                 
    var textAreaContent = $("#"+buttonTime).val()                                                       // New variable for textarea value
    localStorage.setItem("Time Block " + buttonTime ,textAreaContent )                                  // Stores value to local Storage
})

function init(){                                                                                        // Initialization Function
    for(i=9; i<18; i++){                                                                                // Loop through workday hours
    var textAreaContent = localStorage.getItem("Time Block " + i)                                       // New Variable to pull from local storage
    $("#"+i).val(textAreaContent)                                                                       // Sets textarea value to local storage content
    }    
}
init()                                                                                                  //Run Initialization



