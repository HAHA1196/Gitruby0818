$(function () {
    // !!!!!讓JS可以使用EJS的變數!!!!!
    var news = JSON.parse($("#news").text());
    var newsContent = JSON.parse($("#newsContent").text());
    // switch tabs -------------------------------------------------------
    $(".tab>button, .tab>div").on({
        // 可惡hover效果失敗了嗚嗚嗚
        // mouseover: function (e) {
        //     $(this).css({
        //         "background-color": "var(--white)",
        //         color: "var(--fontBlue)",
        //     });
        // },
        // mouseleave: function (e) {
        //     $(this).css({
        //         "background-color": "var(--darkBlue)",
        //         color: "var(--white)",
        //     });
        // },
        click: function (e) {
            // console.log(e);
            // console.log(this);
            let index = Number(e.currentTarget.className.slice(3));
            // console.log(index);
            //先確認『第幾』按鈕被點到>>>把數字帶帶入『第幾』tabContent
            $(`.tabContent:nth-of-type(${index + 1})`).css("display", "block");
            $(`.tabContent:not(:nth-of-type(${index + 1}))`).css(
                "display",
                "none"
            );
            //標籤顏色改變
            $(this).css({
                "background-color": "var(--lightYellow)",
                color: "var(--fontBlue)",
            });
            $(`.tab>button:not(:nth-child(${index}))`).css({
                "background-color": "var(--darkBlue)",
                color: "var(--white)",
            });
        }
    });


    // new article -------------------------------------------------------
    $("#uploadBtn").click(function(){
        $(".newArticle").slideToggle();
        // console.log(this);
    })
    
    // new image
    $(".imgEditBtn").on("click", function(e){
        $(this).siblings(".fileInput").click();
        // $(this).siblings(".fileInput").on("change", function(e){
        //     console.log(this);
        //     console.log(e);
        //     console.log(e.target.files[0].name);
        // });
        $(this).siblings(".fileInput").on("change", function(evt){
            console.log(this.files);
            let [file] = this.files;
            if(file) {
                $(this).next("img").attr('src', URL.createObjectURL(evt.target.files[0]));
            }
        })
        
    })

    //  -------------------------------------------------------
    // $("#submitAll").click(function(){
    //     console.log("yoyoyo")
    //     $.ajax({
    //         url: 'http://localhost:8000/backend/news',
    //         data : {
    //             newsTitle: $('.newsTitle').val(),
    //             newsSubtitle1: $(`.newsSubtitle1 `).val(),
    //         },
    //         type : "POST",
    //         // success: function (data) {
    //         //     console.log('Submission was successful.');
    //         //     console.log(data);
    //         // },
    //         // error: function (data) {
    //         //     console.log('An error occurred.');
    //         //     console.log(data);
    //         // },
    //     });
    //     return false;   //Code to disable the page refresh.
    
    // })

    // console.log($("tr:last-child td:last-child .tabContent:nth-last-of-type(2) .imgEditBtn~img").prop("src"));
    // console.log($("#contentData .tabContent").find(".imgEditBtn~img").prop("src"));
    // if($("#contentData .tabContent").find(".imgEditBtn~img").prop("src") == "http://localhost:8000/img/newsImg/"){
    //     $("#contentData .tabContent").find(".imgEditBtn~img").prop("src", "/img/罐頭.jpg");
    // }
});
