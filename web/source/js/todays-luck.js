/*for responsive web services*/
$(document).ready(function(){
    // $(".f").on("click", function(){
    //     var b=$(this);    
    //     b.css("color", "#AE1006");
    // });
    var luckarr=[
    "\"이강인, 골든볼의 하루\" 오늘 하는 일은 무엇이든지 잘 풀릴 것입니다. ",

    "\"메시, 최고의 하루\" 자신의 능력을 너무 믿고 자만하지 마세요. 그렇다면 최고의 하루가 될 수 있습니다.",

    "\"호날두의 하루\" 새로운 도전을 시도해 볼만한 날입니다. 하지만 성공은 보장 해드리지 않아요.",

    "\"손흥민의 하루\" 노력의 결실을 얻을 수 있는 날입니다. 노력한만큼 수익도 생기고 주위사람들에게 인정받는 하루가 될 거에요.",

    "\"박지성, 선구자의 하루\" 다소 어려움이 있더라도 해치우고 나아가면 좋은 결과가 있을 것 입니다. 쉬운 상황의 연속은 아무런 발전이 없을 수 있어요.",

    "\"펠레의 저주\" 오늘 하루 예상한대로 흘러가지 않을 것 입니다. 조심하세요.",

    "\"포그바의 하루\" 너무 많은 관심을 받으려고 하지 마세요. 오히려 독이 될 수 있습니다.",

    "\"호나우지뉴의 하루\" 당신의 재능이 일깨워지는 하루가 될 수 있어요.",

    "\"살라의 하루\" 지난일은 잊고 현재일에 집중한다면 좋은 결과를 얻는 하루가 될 거에요.",

    "\"퍼거슨의 하루\" 과도한 SNS는 좋지 않은 영향을 미칠 수 있는 날이에요. 오늘 하루 SNS를 끊는 것은 어떠신가요?",

    "\"히딩크의 하루\" 기적을 이룰 수 있는 하루가 될 수 있어요. 기회를 놓치지 마세요.",

    "\"이영표의 하루\" 자신이 하고 있는 일에 대해 철저한 분석은 좋은 결과를 쉽게 얻을 수 있는 좋은 방법이에요.",

    "\"옐로 카드\" 좋지 않은 하루가 될 수 있습니다. 평소보다 행동을 조심해주세요.",

    "\"레드 카드\" 운이 정말로 좋지 않은 하루가 될 수 있습니다. 큰 변을 당하지 않으려면 모든 일에 대해 정말 신중해야 합니다."
    ]

    var today=new Date();
    var dd=today.getDate();
    var mm=today.getMonth()+1;
    var yyyy=today.getFullYear();
    var woonse=new Array();
    ///
    for(var i=0;i<12;i++){
        woonse+=Math.floor(Math.random()*13);
    }





    var int=Math.floor(Math.random()*6);
    $("#result").on("click", function(){
        var dt=$("#dt").val();
        x=dt.split('-');

        var name=$("#nm").val();
        if($("#rs1").css("display")=="block"){
            $("#rs1").css("display", "none");
            if(name.length<=1||dt.length<9){
                $("#rs1").text("정보를 모두 입력해주세요");
                $("#rs1").fadeIn();
            }
            else{
                $("#rs1").text(name+" 님의 오늘의 운세 분석중...");
                $("#rs1").fadeIn();
                $("#rs1").fadeOut(3000);
                setTimeout(function(){

                 $("#rs1").text(yyyy+"년"+" "+mm+"월"+" "+dd+"일 오늘 하루"+" "+name+"님에게는 "+luckarr[woonse[x[1]-1]]);
                 $("#rs1").fadeIn();
             }, 3000);
            }
             // $("#rs1").fadeIn();
         }
         else{
            if(name.length<=1||dt.length<9){
                $("#rs1").text("정보를 모두 입력해주세요");
                $("#rs1").fadeIn();
            }
            else{
                $("#rs1").text(name+" 님의 오늘의 운세 분석중...");
                $("#rs1").fadeIn();
                setTimeout(function(){
                 $("#rs1").fadeOut();
                 $("#rs1").text(yyyy+"년"+" "+mm+"월"+" "+dd+"일 오늘 하루"+" "+name+"님에게는 "+luckarr[woonse[x[1]-1]]);
                 $("#rs1").fadeIn();
             }, 3000);
            }
        }


        // $("#rs1").innerHTML+=luckarr[int];
        // $("#rs1").innerHTML+=url("kangin.png");
    });

    $("#b2").on("click", function(){
        $("#b2").css("border-bottom", "3px solid gray");
        $("#b1").css("border-bottom", "none");
        $("#luck1").css("display", "none");
        $("#luck2").css("display","block");
       //   $("#luck2").css("display", "none");
       //  setTimeout(function(){
       //     $("#luck2").fadeIn();
       // }, 1000);
   });
    $("#b1").on("click", function(){
        $("#b1").css("border-bottom", "3px solid gray");
         $("#b2").css("border-bottom", "none");
        $("#luck2").css("display", "none");
        $("#luck1").css("display","block");

    });

    var allbt=$("#menu").find("button h2");

    // function fc(){
    //     allbt.fadeIn();
    // }

    // $("#todays").hover(fc);
    allbt.each(function(){
       allbt.on("click", function(){
          var container=$(this);  
          allbt.css("color", "white");
          container.css("color", "red");
      });

   })
    var allimg=$("#luck2").find("img");
    var test=$("#test");


    var luck2_p=$("<p/>")

    allimg.each(function(){
       var container=$(this);
       container.on("click", function(){
        var sr=container.attr("src");
        var sr2=sr.split('/');
        var str="<img src=\""+ sr2[sr2.length-1]+"\">";

        var index=sr2[sr2.length-1].split('.');
        var ffff=luckarr[index[0]-1];
        // test.css("display", "block");
            // container.attr(src);


            // if(test.width()>=50){
            //     return;
            // }
            // else{

             if(test.text().length==22){
                test.append(str);
                test.append(ffff);
                test.fadeIn();
            }
            else{
                test.css("display", "none");
                test.text(" ");
                test.append(str);
                test.append(ffff);
                test.fadeIn();
            }
                //   test.animate({
                //     height:"+=100px",
                // });

            });
   });

            // }
            
        // });


    });

var tabWidth = 600; //tablet version width
var smartWidth = 380;   //smartphon version width
$(function () {
    var trigger = $("#trigger");
    var menu = $("nav ul");
    //trigger(오른쪽 삼선) 클릭하였을 때
    $(trigger).on('click', function (event) {
        event.preventDefault();
        menu.slideToggle();
        $("#logo").text("메인")
        $("#logo").css({"font-size":"1em"});
    });
    //window resize 될때마다 바뀌여야 하는 것들
    $(window).resize(function () {
        var width = $(window).width();
        if (width > smartWidth && menu.is(":hidden")) {
            //console.log("320 이상, menu: hidden")
            menu.removeAttr("style");
        }
        if (width > smartWidth) {
            $("#logo").text("CHUK KU");
            $("#logo").css("font-size", "1.2em");
        }
    });
    //sticky nav bar 만들기! (pc버전에서만)
    var navbar = $("#navbar");
    var sticky = navbar.offset().top;
    $(window).on("scroll", function () {
        //console.log("scroll!");
        if ($(window).scrollTop() >= sticky && $(window).width() > tabWidth) {  //sticky로 붙여야할때
            navbar.addClass("sticky");
            $("#content").css("padding-top", "56px");
            $(window).on("resize", function () {
                if ($(window).width() < tabWidth) {
                    navbar.removeClass("sticky");
                    $("#content").css("padding-top", "0");
                }
            });
        } else if ($(window).scrollTop() < sticky && $(window).width() > tabWidth) {    //sticky에서 때야할때
            navbar.removeClass("sticky");
            $("#content").css("padding-top", "0");
        }
    });
    
});