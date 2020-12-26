/*for responsive web services*/
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

    var req=$.ajax("domestic.json");
    req.done(function(data,status){
        var news=data;
        for(var i=0;i<news.length;i++){
            var titleTag=$("<div/>");
            var newstitle=news[i].title;
            titleTag.attr("class","title");
            titleTag.html(newstitle);

            var contentTag=$("<div/>");
            var newscontent="";
            for(var j=0;j<(news[i].content).length;j++){
                newscontent=newscontent+(news[i].content)[j]+"<br>"+"<br>";
            }
            
            contentTag.attr("class","content");
            contentTag.addClass("hide");
            contentTag.html(newscontent);

            var imgTag=$("<img/>");
            var newsimage=news[i].image;
            imgTag.attr("src",newsimage);
            imgTag.attr("width","80%");

            var newsTag=$("<div/>");
            newsTag.attr("class","news");

            newsTag.append(titleTag);
            newsTag.append(imgTag);
            newsTag.append(contentTag);
            $("#content").append(newsTag);
        }

        $(".news").click(function(){
            var cls=$(this).find(".content").attr("class");
            if(cls.length==12){
                $(this).find(".content").removeClass("hide");
                $(this).addClass("stretch");

                     offset = $(this).offset();
                     $('html, body').animate({scrollTop : offset.top-80}, 400);
            }
            else{
                $(this).find(".content").addClass("hide");
                $(this).removeClass("stretch");

                offset = $(this).offset();
                     $('html, body').animate({scrollTop : offset.top-80}, 400);

            }
            
        });
    });


});