// set id to savebtn or find a way to correlate save btn with its neighbor textarea values
let timeDisplay = $("#currentDay");
let currentDay = moment().format("dddd, MMMM Do");
// 24 hour clock time
let currentHour = parseInt(moment().hour());
// Display the current day at the top of the page
timeDisplay.text(currentDay);
// Number of rows
let blockLength = $(".time-block").length;

    renderLocalStorage();

        $(".description").each(function() {
            let currentBlockTimeVal = parseInt(moment($(this).attr("id"))._i);
            if (moment(currentBlockTimeVal).isBefore(currentHour)) {
                $(this).addClass("past");
            }
            else if (moment(currentBlockTimeVal).isSame(currentHour)) {
                $(this).addClass("present");
            }
            else if (moment(currentBlockTimeVal).isAfter(currentHour)) {
                $(this).addClass("future");
            }
        });

        $(".saveBtn").on("click", function() {
            for(let i = 0; i < blockLength; i++) {
                let currentID = $(".description").eq(i).attr("id");
                let value = $(".description").eq(i).val().trim();
                localStorage.setItem(currentID, value);
            }
        });

        $(".clearSchedule").on("click", function() {
            $(".description").empty();
            localStorage.clear();
        });


        function renderLocalStorage() {
            for (let i = 9, j = 0; i < 18; i++, j++) {
                let blockInfo = (localStorage.getItem(i))
                $(".description").eq(j).text(blockInfo)
            }
        }
    