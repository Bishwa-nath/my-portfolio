$(function(){
    setTimeout(() => {
        $(".load-show").hide();
        $("#education").hide();
        $("#skills").hide();
        $("#contacts").hide();
        $("#additionals").hide();
    }, 0);
    setTimeout(() => {
        $(".text-rainbow-animation").hide();
        $(".load-show").show();
    }, 2000);

    $(".theme-change").click(function(){
        if($(this).text() == "Light"){
            $(this).text("Dark");
            $("body").css({
                "background-color": "white",
            })
        } else {
            $(this).text("Light");
            $("body").css({
                "background-color": "#252526",
            })
        }
    });

    $(".theme-text").hover(function () {
         $(this).css({
            "border": "1px solid white",
            "border-radius" : "5px"
        });
        }, function () {
           $(this).css("border", "none");
        }
    );
    
    $("#edu").click(function(){
        $("#intro").hide(); 
        $("#skills").hide();
        $("#contacts").hide();
        $("#additionals").hide();
        $("#education").show();
    });

    $("#home").click(function(){
        $("#education").hide();
        $("#contacts").hide();
        $("#skills").hide();
        $("#additionals").hide();
        $("#intro").show();
    });

    $("#skill").click(function(){
        $("#education").hide();
        $("#intro").hide();
        $("#contacts").hide();
        $("#additionals").hide();
        $("#skills").show();
    });
    $("#contact").click(function(){
        $("#education").hide();
        $("#intro").hide();
        $("#skills").hide();
        $("#additionals").hide();
        $("#contacts").show();
    });
    $("#additional").click(function(){
        $("#education").hide();
        $("#intro").hide();
        $("#skills").hide();
        $("#contacts").hide();
        $("#additionals").show();
    });

    const lc = document.getElementById("lc");
    lc.addEventListener("click", () => {
    window.open("https://leetcode.com/Bishwa_nath/", "_blank");
    });

    const cf = document.getElementById("cf");
    cf.addEventListener("click", () => {
    window.open("https://codeforces.com/profile/Bishwanath", "_blank");
    });

    const cc = document.getElementById("cc");
    cc.addEventListener("click", () => {
    window.open("https://www.codechef.com/users/bishwa_nath", "_blank");
    });

    const he = document.getElementById("he");
    he.addEventListener("click", () => {
    window.open("https://www.hackerearth.com/@bishwa_nath", "_blank");
    });

    const uv = document.getElementById("uv");
    uv.addEventListener("click", () => {
    window.open("https://uhunt.onlinejudge.org/id/905730", "_blank");
    });

    const hr = document.getElementById("hr");
    hr.addEventListener("click", () => {
    window.open("https://www.hackerrank.com/Bishwanath?hr_r=1", "_blank");
    });

    

    
});

