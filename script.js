var savedPictures = [];

var limit = 50;

var key = "savedImageURL";

var subreddit = "";


$(function(){
    //loading local storage-------------------------------------------------------------------
    //savedPictures = JSON.parse(localStorage[key]);
    if (savedPictures === null) savedPictures = [];
   // console.log(JSON.parse(localStorage[key]));
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
    
    //keyboard scrolling---------------------------------------------------------------------

//    $(document).keyup(function(e){
//        if(e.keyCode === 74 || e.keyCode === 75){
//            var $images = $("#imgurcontainer").find("div");
//            console.log($images)
//            var $imScrollPositions = new Array();
//            $images.each(function(i){
//                $imScrollPositions[i] = Math.round($(this).offset().top - $("#imgurcontainer").offset().top) - 10;
//            });
//
//            $images.eq(0).addClass('active');
//
//            var last = $images.parent().find('img.active').removeClass('active').index();
//            var next;
//
//            next = last + 1
//            $("#imgurcontainer").scrollTo($imScrollPositions[next]);
//        }
//    });
    
    
    //FB Login
    
window.fbAsyncInit = function() {
  FB.init({
    appId      : '306941899455686',
    status     : true, // check login status
    cookie     : true, // enable cookies to allow the server to access the session
    xfbml      : true  // parse XFBML
  });

  // Here we subscribe to the auth.authResponseChange JavaScript event. This event is fired
  // for any authentication related change, such as login, logout or session refresh. This means that
  // whenever someone who was previously logged out tries to log in again, the correct case below 
  // will be handled. 
  FB.Event.subscribe('auth.authResponseChange', function(response) {
    // Here we specify what we do with the response anytime this event occurs. 
    if (response.status === 'connected') {
      // The response object is returned with a status field that lets the app know the current
      // login status of the person. In this case, we're handling the situation where they 
      // have logged in to the app.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // In this case, the person is logged into Facebook, but not into the app, so we call
      // FB.login() to prompt them to do so. 
      // In real-life usage, you wouldn't want to immediately prompt someone to login 
      // like this, for two reasons:
      // (1) JavaScript created popup windows are blocked by most browsers unless they 
      // result from direct interaction from people using the app (such as a mouse click)
      // (2) it is a bad experience to be continually prompted to login upon page load.
      FB.login();
    } else {
      // In this case, the person is not logged into Facebook, so we call the login() 
      // function to prompt them to do so. Note that at this stage there is no indication
      // of whether they are logged into the app. If they aren't then they'll see the Login
      // dialog right after they log in to Facebook. 
      // The same caveats as above apply to the FB.login() call here.
      FB.login();
    }
  });
  };

  // Load the SDK asynchronously
  (function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   ref.parentNode.insertBefore(js, ref);
  }(document));

  // Here we run a very simple test of the Graph API after login is successful. 
  // This testAPI() function is only called in those cases. 
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Good to see you, ' + response.name + '.');
    });
  }
    
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