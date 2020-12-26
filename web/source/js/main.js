/*for responsive web services*/
var tabWidth = 600; //tablet version width
var smartWidth = 380;   //smartphon version width
var rssDongaNum = 15;   //동아일보 rss 가져올 기사 갯수
$(function () {
    var trigger = $("#trigger");
    var menu = $("nav ul");
    //trigger(오른쪽 삼선) 클릭하였을 때
    $(trigger).on('click', function (event) {
        event.preventDefault();
        menu.slideToggle();
        $("#logo").text("메뉴");
        $("#logo").css({ "font-size": "1.0em" });
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
            $("#logo").css({ "font-size": "1.2em" });
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
    $(".preview").each(function () {    //preview에 마우스 올리고, 클릭하였을때 사이트 연결해주는 역할 담당
        $(this).on("mouseenter", function () {
            var tis = $(this);
            $(this).css({ "cursor": "pointer" });
            $(this).find("h4").animate({ "bottom": "50px" }, 200, function () {
                tis.find(".showHover").show();
            });
        });
        $(this).on("mouseleave", function () {
            $(this).css({ "cursor": "cursor" });
            $(this).find("h4").css("bottom", "20px");
            $(this).find(".showHover").hide();
        });
    });
    //$("#rankFrame").contents().find(".name").css("color", "white");


    //test for test
    //test for test

    var request = $.ajax({
        url: "/rss",
        dataType: "xml"
    });
    request.done(function (data) {
        //console.log(data);
        var items = $(data).find("item");
        var ulTag = $("<ul />");
        if (items.length > 0) {
            items = items.slice(0, rssDongaNum);
            items.each(function () {
                var title = $(this).find("title").text();
                var link = $(this).find("link").text();
                var description = $(this).find("description");
                var descriptionText = description.text();
                var startInd = descriptionText.indexOf("src");
                var endInd = descriptionText.indexOf("jpg");
                if (startInd == -1 || endInd == -1){
                    console.log("없읍~");
            }else {
                var imgSrc = descriptionText.substring(startInd + 5, endInd + 3);
                console.log(descriptionText[startInd] + descriptionText[endInd]);
                //console.log(title);
                var aTag = $("<a />");
                aTag.css({"font-size":"1.5em","font-weight":"bold"});
                var liTag = $("<li />");
                liTag.css("margin-bottom","80px");
                var imgTag = $("<img />");
                imgTag.css({"float":"left","margin":"10px","margin-bottom":"0px"});
                var pTag = $("<p />");
                var divTag= $("<div />");
                divTag.css({"border-bottom":"1px solid black"});
                var txtArray = descriptionText.split("table>")
                var txt =txtArray[1];
                pTag.text(txt);
                pTag.css({"margin-bottom":"60px","margin-top":"10px","line-height":"1.8em"});
                imgTag.attr("src", imgSrc);
                //console.log(imgSrc);
                aTag.attr("href", link);
                aTag.attr("target", "_blank");
                aTag.css({ "text-decoration": "none", "color": "black" });
                aTag.text(title);
                divTag.append(imgTag);
                divTag.append(aTag);
                divTag.append(pTag);
                liTag.html(divTag);
                liTag.css({ "list-style": "none" });
                ulTag.append(liTag);
            }

        });
    $("#rsscontent").append(ulTag);
}
    }).fail(function () {
    alert("failed to load RSS data!");
});

$("#firstview").click(function () {
    $(location).attr("href", "mainnews1.html");
});
$("#secondview").click(function () {
    $(location).attr("href", "mainnews2.html");
});
$("#thirdview").click(function () {
    $(location).attr("href", "mainnews3.html");
});
}); //document.ready