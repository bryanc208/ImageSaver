var savedPictures = [];

var limit = 50;

var key = "savedImageURL";

var subreddit = "";
        
$(function(){
    Parse.initialize("4lJf5ZDHDFHWzV7DH7QE9CZ88nOGz4Hmfme7lnuX", "UlxdMHxQievG6HPElT6DMIgWAk9HNsIlLfsrZOlJ");    
       	  
	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
    
    window.fbAsyncInit = function() {
        console.log("this works");
        Parse.FacebookUtils.init({
            appId      : '567834676648388', // Facebook App ID
            status     : true, // check login status
            cookie     : true, // enable cookies to allow Parse to access the session
			xfbml      : true,  // initialize Facebook social plugins on the page
			version    : 'v2.2' // point to the latest Facebook Graph API version
        });
        console.log("this also works");
		
	Parse.FacebookUtils.logIn(null, {
		success: function(user) {
			if (!user.existed()) {
			console.log("User signed up and logged in through Facebook!");
			} else {
				console.log("User logged in through Facebook!");
				}
		},
		error: function(user, error) {
			console.log("User cancelled the Facebook login or did not fully authorize.");
		}
		});
 
    };

    var currentUser = Parse.User.current();
	loadSavedPics();
	
    //API call to imgur-----------------------------------------------------------------------
    $.ajax({
        url: 'https://api.imgur.com/3/gallery/hot/viral/0.json',
        type: 'GET',
        headers: { "Authorization": "Client-ID cb1bb6f9220bbe3" },
        success: function (data) {
            console.log(data);
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
        //localStorage[key] = JSON.stringify(savedPictures);
        currentUser.set("savedPics", savedPictures);
        currentUser.save();
        console.log(currentUser);
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
        //localStorage[key] = JSON.stringify(savedPictures);
        currentUser.set("savedPics", savedPictures);
        currentUser.save();
    });
    
    //Load subreddit function----------------------------------------------------------------
    function loadSubreddit(){
            if($('#subredditcontainer').children().length > 0) {
               $('#subredditcontainer').children().remove();
            }
                $.ajax({
                url: 'https://api.imgur.com/3/gallery/r/' + subreddit + "/time",
                type: 'GET',
                headers: { "Authorization": "Client-ID cb1bb6f9220bbe3" },
                success: function (data) {
                    console.log(data);
                    for(i in data.data){
                        var src = data.data[i].link;
                            var container =  $("<div>")
                                .html("<p>"+data.data[i].title+"</p>")
                                .appendTo($("#subredditcontainer"));
                            $("<img>")
                                .addClass("waffleImage")
                                .attr("src", src)
                                .appendTo(container);
                        if($.inArray(src, savedPictures) !== (-1)){
                            var pic = $('.row img[src="'+src+'"]');
                            pic.parent().css("visibility", "hidden").css("position", "absolute");
                        }
                    }    
                },
                error: function (response) {
                    alert("Invalid subreddit!");
                }
            });
            $("#subredditcontainer").append($("<h1 id=subredditHeading>").html("r/" + subreddit));        
    };
    //Subreddit-----------------------------------------------------------------------
    $('#subreddit').keyup(function(e){
        if(e.keyCode === 13){
            subreddit = $("#subreddit").val();
            loadSubreddit();
       }

    });
    //Suggestion click-----------------------------------------------------------------------------
    $("#subredditcontainer a").click(function(){
        var str = $(this).html();
        subreddit = str.substring(2,str.length);
        loadSubreddit();
    });

    //Load saved stuff
    function loadSavedPics(){
        savedPictures = currentUser.attributes.savedPics;
        if(savedPictures === undefined){
            savedPictures = [];
        }
        $("#count").html(savedPictures.length)
        for(i in savedPictures){
        $("#count").append($("<img>")
                           .attr("src",savedPictures[i])
                           .addClass("savedImage"));
        }  

        console.log(currentUser);
        console.log(savedPictures);
    };    
});