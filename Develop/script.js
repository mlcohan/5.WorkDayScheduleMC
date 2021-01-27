

var myDay 

var now = moment()

function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}
// loads header date
getHeaderDate();





// saves data to localStorage
function saveReminders() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}

// sets any data in localStorage to the view
function displayReminders() {
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

