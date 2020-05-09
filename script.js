

$(document).ready(function() {
    
    $(".save").on("click", function(){
        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(value, time)
    })

    function displayTime(){

        $(".time-block").each(function(){
        
            var time = moment()
            var currentTime = parseInt(time.hour())
            var timeBlock = parseInt($("#hour").attr("value"))

            //$("#current-time").text(currentTime)
            $("#current-day").text(time.format('dddd' + ", " + 'MMMM D' + " " + 'h:m:s A'))

            //var hour = currentTime.hour()
        

            //$("#current-day").text(timeBlock)


            if (currentTime>timeBlock) 
            {
                $(".description").addClass("past");
            }

            else if (parseInt(currentTime)===parseInt(timeBlock)){
                $(".description").removeClass("past");
                $(".description").addClass("present");
            }

            else {
                $(".description").removeClass("past");
                $(".description").removeClass("present");
                $(".description").addClass("future");
            }

            //think about this below...apply "each" to each id? maybe .hour?
        });
    }
    
    displayTime();




$("hour8 .description").val(localStorage.getItem("hour8"))






});