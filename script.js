
$(document).ready(function() {
    

    function displayTime(){


        $(".time-block").each(function(){
        
            var time = moment()
            var currentTime = parseInt(time.hour())
            var timeBlock = parseInt($("#hour").attr("value"))
            //$("#current-time").text(currentTime)
            //$("#current-day").text(currentTime.format('dddd'))

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
            // 
            //     var current = 
        });
    }
    
    displayTime();





});