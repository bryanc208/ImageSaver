var savedPictures = [];

$(function(){

    $.ajax({
        url: 'https://api.imgur.com/3/gallery/hot/viral/0.json',
        type: 'GET',
        headers: { "Authorization": "Client-ID cb1bb6f9220bbe3" },
        success: function (data) {  
            for(i in data.data){
                if(data.data[i].is_album === false){
                    var container =  $("<div>")
                        .html("<p>"+data.data[i].title+"</p>")
                        .appendTo($("#imgcontainer"));
                    $("<img>")
                        .addClass("waffleImage")
                        .attr("src", data.data[i].link)
                        .appendTo(container); 
                }
            }
        },
        error: function (response) {
            console.log(response);
        }
    });
    
    $(document).on("dblclick", ".waffleImage", function(){
        /*for(i in savedPictures){  
        WHY DOES FUCKING "$(this).attr("src") in savedPictures" NOT WORK FUCK
            if(savedPictures[i] === $(this).attr("src")){
                savedPictures.splice(i,1);
                $("#count").html(savedPictures.length);
                $("img").filter(function(index){
                    return $("src", this) === savedPictures[i];
                }).remove()
            }
            savedPictures.push($(this).attr("src"));
            $("#count").html(savedPictures.length);
            $("#count").append($("<img>").attr("src",savedPictures[i]));
            }
        }*/

            savedPictures.push($(this).attr("src"));
            $("#count").html(savedPictures.length);
            for(i in savedPictures){
                $("#count").append($("<img>").attr("src",savedPictures[i]));
            }
           
        
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