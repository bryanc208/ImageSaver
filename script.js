var savedPictures = [];

var limit = 50;

var key = "savedImageURL";


$(function(){
    //loading local storage-------------------------------------------------------------------
    savedPictures = JSON.parse(localStorage[key]);
    if (savedPictures === null) savedPictures = [];
    console.log(JSON.parse(localStorage[key]));
    $("#count").html(savedPictures.length);  
    for(i in savedPictures){
    $("#count").append($("<img>")
                       .attr("src",savedPictures[i])
                       .addClass("savedImage"));
    } 
    
    //API call to imgur-----------------------------------------------------------------------
    $.ajax({
        url: 'https://api.imgur.com/3/gallery/hot/viral/0.json',
        type: 'GET',
        headers: { "Authorization": "Client-ID cb1bb6f9220bbe3" },
        success: function (data) {  
            for(i in data.data){
                var src = data.data[i].link;
                if(data.data[i].is_album === false){
                    var container =  $("<div>")
                        .html("<p>"+data.data[i].title+"</p>")
                        .appendTo($("#imgurcontainer"));
                    $("<img>")
                        .addClass("waffleImage")
                        .attr("src", src)
                        .appendTo(container);
                    
                }if($.inArray(src, savedPictures) !== (-1)){
                    var pic = $('.row img[src="'+src+'"]');
                    pic.parent().css("visibility", "hidden").css("position", "absolute");
                }
            }
        },
        error: function (response) {
            console.log(response);
        }
    });
    
    //API call to giphy------------------------------------------------------------------------------
    var xhr = $.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit="+limit);
    xhr.done(function(data){
        for(i in data.data){
            var container = $("<div>").appendTo("#giphycontainer");
            var src = data.data[i].images.original.url;
            $("<img>").addClass("waffleImage").attr("src", src).appendTo(container);
            if($.inArray(src, savedPictures) !== (-1)){
                var pic = $('.row img[src="'+src+'"]');
                pic.parent().css("visibility", "hidden").css("position", "absolute");
            }    
        }
    });

    
    //save picture----------------------------------------------
    $(".row").on("dblclick", ".waffleImage", function(){
        var src = $(this).attr('src');
        if($('#count').find('[src="'+src+'"]').length === 0){
            savedPictures.push(src);
            $("#count").html(savedPictures.length);         
            for(i in savedPictures){
                $("#count").append($("<img>")
                                   .attr("src",savedPictures[i])
                                   .addClass("savedImage"));
            }  
        $(this).parent().css("visibility", "hidden").css("position", "absolute");
        localStorage[key] = JSON.stringify(savedPictures);
    } 
    
    
    });
    
    //remove picture---------------------------------------------
    $('#count').on("dblclick", ".savedImage", function(e){
        $(this).remove();
        var src = $(this).attr('src');
        savedPictures.splice(savedPictures.indexOf(src,1));
        $("#count").html(savedPictures.length);
        for(i in savedPictures){
                $("#count").append($("<img>")
                                   .attr("src",savedPictures[i])
                                   .addClass("savedImage"));
        }
        var pic = $('.row img[src="'+src+'"]');
        pic.parent().css("visibility", "visible").css("position", "static");
        localStorage[key] = JSON.stringify(savedPictures);
    });

    /*
    imgurdata = ['sdf','sdf'];
    for(var img in imgurdata){
        $("<img>").attr("src", url ).addClass("favoritebutton").data("url", img).appendTo($("#waffleimagecontainer");
    }
    
    $(document).on("click", ".favoritbutton", function(){
        var urlToFavorite = $(this).data("url");
        doFavoritething(urlToFavorite);
            
    });
    
    $(".waffleimg").click(function(){
           
    });
    */

});