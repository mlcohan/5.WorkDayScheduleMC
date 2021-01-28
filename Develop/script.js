

var today = []


function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}
// loads header date
getHeaderDate();


var storedInput = JSON.parse(localStorage.getItem("today"));

    if (storedInput !== null) {
        today = storedInput
    }

    //save stored Input
function saveStoredInput() {
    localStorage.setItem("today", JSON.stringify(today));
}

    //display saved reminders 
function displayReminders() {
    $(".description").text(storedInput)
}
    
//Save Button takes data and saves to local storage
$(".saveBtn").on("click", saveStoredInput());


displayReminders();
