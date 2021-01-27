

var today 

var now = moment()

function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}
// loads header date
getHeaderDate();


//Save Button
$(".saveBtn").on("click", function saveReminders() {
    localStorage.setItem("today", JSON.stringify(today));
})




// sets any data in localStorage to the view
function displayReminders() {
    var today =localStorage.getItem()
    // myDay.forEach(function (_thisHour) {
    //     $(`#${_thisHour.id}`).val(_thisHour.reminder);
    // })
}

// sets any existing localStorage data to the view if it exists

    var storedDay = JSON.parse(localStorage.getItem("myDay"));

    if (storedDay) {
        myDay = storedDay;
    }

    saveReminders();
    displayReminders();

    

