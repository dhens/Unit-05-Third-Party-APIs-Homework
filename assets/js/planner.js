let timeDisplay = $("#currentDay");
let bodyContent = $("#container");

let currentDay = moment().format("dddd, MMMM Do ");
let currentHour = parseInt(moment().format("h"));
console.log("Current hour is: " + currentHour);

// Display the current day at the top of the page
timeDisplay.text(currentDay);

let blockLength = $(".time-block").length;
let currentBlock = $(".time-block");
    
        $(".description").each(function setBackgroundColor(index) {
            let currentTimeValue = parseInt(moment($(this).attr("id"))._i);
            console.log(currentTimeValue)
            if (moment(currentTimeValue).isBefore(currentHour)) {
                console.log(this);
                $(this).addClass("past");
            }
            else if (moment(currentTimeValue).isSame(currentHour)) {
                $(this).addClass("present");
            }
            else if (moment(currentTimeValue).isAfter(currentHour)) {
                $(this).addClass("future");
            }
        });