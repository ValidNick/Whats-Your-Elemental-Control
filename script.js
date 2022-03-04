$(".mainbtn").click(function() {
   $(".questions").show();
  
    
});


$(".endbtn").click(function() {
    var lb = Number($(".question1").val());
    var hottempered = $(".question2").val();
    if (lb >= 5) {
        if (hottempered === "Yes") {
            $(".toph").show();
            $(".quizpage").hide();
            $("button").hide();
            $("h1").text("You are Toph!");
        }
    }

    if (lb >= 5) {
        if (hottempered === "No") {
            $(".aang").show();
            $(".quizpage").hide();
            $("button").hide();
            $("h1").text("You are Aang!");
        }
    }
    if (lb < 5) {
        if (hottempered === "Yes") {
            $(".katara").show();
            $(".quizpage").hide();
            $("button").hide();
            $("h1").text("You are Katara!");
        }
    }
if (lb < 5) {
    if (hottempered === "No") {
        $(".sokka").show();
        $(".quizpage").hide();
        $("button").hide();
        $("h1").text("You are Sokka!");
    }
}
    
    
});

$(".endbtn").click(function() {
   $(".questions").hide();
  
    
});