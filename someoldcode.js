    // FB SDK    
/*     (function(d){
       var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement('script'); js.id = id; js.async = true;
       js.src = "//connect.facebook.net/en_US/all.js";
       ref.parentNode.insertBefore(js, ref);
      }(document)); */
	  
	  	/* 	FB.getLoginStatus(function(response) {
		  if (response.status === 'connected') {
			// the user is logged in and has authenticated your
			// app, and response.authResponse supplies
			// the user's ID, a valid access token, a signed
			// request, and the time the access token 
			// and signed request each expire
			var uid = response.authResponse.userID;
			var accessToken = response.authResponse.accessToken;
			console.log("New user");
			loadSavedPics();
		  } else if (response.status === 'not_authorized') {
			// the user is logged in to Facebook, 
			// but has not authenticated your app
			Parse.FacebookUtils.logIn(null, {
			  success: function(user) {
				if (!user.existed()) {
				  console.log("User signed up and logged in through Facebook!");
				} else {
				  console.log("User logged in through Facebook!");
				}
				 loadSavedPics();
			  },
			  error: function(user, error) {
				console.log(error);
			  }
			});
		  } else {
			Parse.FacebookUtils.logIn(null, {
			  success: function(user) {
				if (!user.existed()) {
				  console.log("User signed up and logged in through Facebook!");
				} else {
				  console.log("User logged in through Facebook!");
				}
				 loadSavedPics();
			  },
			  error: function(user, error) {
				console.log(error);
			  }
			});
		  }
		 }); */
                  
		
//    //loading local storage-------------------------------------------------------------------
//    //savedPictures = JSON.parse(localStorage[key]);
//    if (savedPictures === null) savedPictures = [];
//   // console.log(JSON.parse(localStorage[key]));
//    $("#count").html(savedPictures.length);  
//    for(i in savedPictures){
//    $("#count").append($("<img>")
//                       .attr("src",savedPictures[i])
//                       .addClass("savedImage"));
//    } 
//    


    
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
	
	//keyboard scrolling---------------------------------------------------------------------
    $(document).keyup(function(e){
        if(e.keyCode === 74 || e.keyCode === 75){
            var $images = $("#imgurcontainer").find("div");
            console.log($images)
            var $imScrollPositions = new Array();
            $images.each(function(i){
                $imScrollPositions[i] = Math.round($(this).offset().top - $("#imgurcontainer").offset().top) - 10;
            });

            $images.eq(0).addClass('active');

            var last = $images.parent().find('img.active').removeClass('active').index();
            var next;

            next = last + 1
            $("#imgurcontainer").scrollTo($imScrollPositions[next]);
        }
    });