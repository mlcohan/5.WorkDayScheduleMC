

//document.ready?? run functions up top

function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}
// loads header date
getHeaderDate();

//Save Button takes data and saves to local storage
$("#save1").click(function() {
    storedInput =  $("#8am").val();
     localStorage.setItem("8AM", JSON.stringify(storedInput));
});

$("#save2").click(function() {
    storedInput =  $("#9am").val();
     localStorage.setItem("9AM", JSON.stringify(storedInput));
});

$("#save3").click(function() {
    storedInput =  $("#10am").val();
     localStorage.setItem("10AM", JSON.stringify(storedInput));
});

$("#save4").click(function() {
    storedInput =  $("#11am").val();
     localStorage.setItem("11AM", JSON.stringify(storedInput));
});

$("#save5").click(function() {
    storedInput =  $("#12pm").val();
     localStorage.setItem("12PM", JSON.stringify(storedInput));
});
$("#save6").click(function() {
    storedInput =  $("#1pm").val();
     localStorage.setItem("1PM", JSON.stringify(storedInput));
});
$("#save7").click(function() {
    storedInput =  $("#2pm").val();
     localStorage.setItem("2PM", JSON.stringify(storedInput));
});
$("#save8").click(function() {
    storedInput =  $("#3pm").val();
     localStorage.setItem("3PM", JSON.stringify(storedInput));
});
$("#save9").click(function() {
    storedInput =  $("#4pm").val();
     localStorage.setItem("4PM", JSON.stringify(storedInput));
});
$("#save10").click(function() {
    storedInput =  $("#5pm").val();
     localStorage.setItem("5PM", JSON.stringify(storedInput));
});


    //display saved reminders 
function displayReminders() {

    var hour8 = JSON.parse(localStorage.getItem("8AM"));    
    $("#8am").val("")
    $("#8am").val(hour8)

    var hour9 = JSON.parse(localStorage.getItem("9AM"));    
    $("#9am").val("")
    $("#9am").val(hour9)

    var hour10 = JSON.parse(localStorage.getItem("10AM"));    
    $("#10am").val("")
    $("#10am").val(hour10)

    var hour11 = JSON.parse(localStorage.getItem("11AM"));    
    $("#11am").val("")
    $("#11am").val(hour11)

    var hour12 = JSON.parse(localStorage.getItem("12PM"));    
    $("#12pm").val("")
    $("#12pm").val(hour12)

    var hour13 = JSON.parse(localStorage.getItem("1PM"));    
    $("#1pm").val("")
    $("#1pm").val(hour13)

    var hour14 = JSON.parse(localStorage.getItem("2PM"));    
    $("#2pm").val("")
    $("#2pm").val(hour14)

    var hour15 = JSON.parse(localStorage.getItem("3PM"));    
    $("#3pm").val("")
    $("#3pm").val(hour15)

    var hour16 = JSON.parse(localStorage.getItem("4PM"));    
    $("#4pm").val("")
    $("#4pm").val(hour16)

    var hour17 = JSON.parse(localStorage.getItem("5PM"));    
    $("#5pm").val("")
    $("#5pm").val(hour17)

    }

    //make one for each hour
        
   displayReminders();



        var currentTime = dayjs().hour(); //get current time
        var eightAm = 8
        var nineAm = 9
        var tenAm = 10
        var elevenAm = 11
        var twelvePm = 12
        var onePm = 13
        var twoPm = 14
        var threePm = 15
        var fourPm = 16
        var fivePm = 17

     
   //COMPARE CURRENT TIME TO TIME IN FUNCTION
   
        var timeOfDay = [eightAm, nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm];

        for (var i=0; i < timeOfDay.length; i++){

            if( timeOfDay[i] < currentTime ){
                if (timeOfDay[i] === eightAm) {
                    $("#8am").addClass("past")
                }
                if (timeOfDay[i] === nineAm) {
                    $("#9am").addClass("past")
                }
                if (timeOfDay[i] === tenAm) {
                    $("#10am").addClass("past")
                }
                if (timeOfDay[i] === elevenAm) {
                    $("#11am").addClass("past")
                }
                if (timeOfDay[i] === twelvePm) {
                    $("#12pm").addClass("past")
                }
                if (timeOfDay[i] === onePm) {
                    $("#1pm").addClass("past")
                }
                if (timeOfDay[i] === twoPm) {
                    $("#2pm").addClass("past")
                }
                if (timeOfDay[i] === threePm) {
                    $("#3pm").addClass("past")
                }
                if (timeOfDay[i] === fourPm) {
                    $("#4pm").addClass("past")
                }
                if (timeOfDay[i] === fivePm) {
                    $("#5pm").addClass("past")
                }
            }
         
            else if(timeOfDay[i] > currentTime ) { 
                if (timeOfDay[i] === eightAm) {
                    $("#8am").addClass("future")
                }
                if (timeOfDay[i] === nineAm) {
                    $("#9am").addClass("future")
                }
                if (timeOfDay[i] === tenAm) {
                    $("#10am").addClass("future")
                }
                if (timeOfDay[i] === elevenAm) {
                    $("#11am").addClass("future")
                }
                if (timeOfDay[i] === twelvePm) {
                    $("#12pm").addClass("future")
                }
                if (timeOfDay[i] === onePm) {
                    $("#1pm").addClass("future")
                }
                if (timeOfDay[i] === twoPm) {
                    $("#2pm").addClass("future")
                }
                if (timeOfDay[i] === threePm) {
                    $("#3pm").addClass("future")
                }
                if (timeOfDay[i] === fourPm) {
                    $("#4pm").addClass("future")
                }
                if (timeOfDay[i] === fivePm) {
                    $("#5pm").addClass("future")
                }
            }
            else {
                if (timeOfDay[i] === eightAm) {
                    $("#8am").addClass("present")
                }
                if (timeOfDay[i] === nineAm) {
                    $("#9am").addClass("present")
                }
                if (timeOfDay[i] === tenAm) {
                    $("#10am").addClass("present")
                }
                if (timeOfDay[i] === elevenAm) {
                    $("#11am").addClass("present")
                }
                if (timeOfDay[i] === twelvePm) {
                    $("#12pm").addClass("present")
                }
                if (timeOfDay[i] === onePm) {
                    $("#1pm").addClass("present")
                }
                if (timeOfDay[i] === twoPm) {
                    $("#2pm").addClass("present")
                }
                if (timeOfDay[i] === threePm) {
                    $("#3pm").addClass("present")
                }
                if (timeOfDay[i] === fourPm) {
                    $("#4pm").addClass("present")
                }
                if (timeOfDay[i] === fivePm) {
                    $("#5pm").addClass("present")
                }
            }

            }

            //clears data with a clear button
        $("#clearBtn").click(function(){
            localStorage.clear()
            location.reload()
        })