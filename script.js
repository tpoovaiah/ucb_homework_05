

$(document).ready(function() {
    
    $(".saveBtn").on("click", function(){
        var value = $(this).siblings(".description").val()
        var time = $(this).closest(".time-block").attr("id")
        localStorage.setItem(time, value)
    })

    function displayTime(){

        $(".time-block").each(function(){
        
            var currentTime = parseInt(moment().hours());
            var hourBlock = parseInt($(this).attr("id"));

            $(this).find(".description").val(localStorage.getItem(hourBlock))

            if (currentTime>hourBlock) 
            {
                $(this).find(".description").addClass("past");
            }

            else if (currentTime===hourBlock){
                $(this).find(".description").addClass("present");
            }

            else {
                $(this).find(".description").addClass("future");
            }

        });
    }

    $("#current-day").text(moment().format('dddd' + ", " + 'MMMM D'))
    
    displayTime();

});