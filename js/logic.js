var authResponse;

function CreateLiveVideoPost(userId, accessToken)
{
    var url = "https://graph.facebook.com/"+userId+"/live_videos";
    $.post(url, {  
          "access_token":accessToken,
          "published": true },
      function( data ) {
                console.log( "stream_url : " + data.stream_url );
                var split = data.stream_url.split('rtmp/');
                $('.url').each(function(){
                    $(this).html(split[0]+'rtmp/');
                });
                $('.key').each(function(){
                    $(this).html(split[1]);
                });
                console.log(data);
                PublishLiveVideoPost(data.id, accessToken);
      },
      "JSON" );
}

function PublishLiveVideoPost(liveVideoId, accessToken)
{
    console.log("title = " + $('#title').val() + " | description = " + $('#description').val());
    
    var url = "https://graph.facebook.com/v2.6/"+liveVideoId;
    $.post(url, {  
          "access_token":accessToken,
          //"published": true,
          "title": $('#title').val(),
          "description": $('#description').val()
            },
      function( data ) {
                console.log( data );
      },
      "JSON" );
}

$( document ).ready(function() {
    $('#GoToGuide').click(function(){
        ScrollTo('#guide');
    });
    
    $('#go').click(function()
        {
        console.log("Go clicked");
            CreateLiveVideoPost(authResponse.userID, authResponse.accessToken);
            EnableAndScrollTo('#step3');
            Enable("#guidelunes");
            Enable("#header");
            Enable("#guide");
        }); 
});
    
function EnableAndScrollTo(id)
{
    Enable(id);
    ScrollTo(id);
}

function Enable(id)
{
    $(id).removeClass( "hidden" ).addClass( "animated fadeIn" );
}

function ScrollTo(id)
{
    $('html, body').animate({
                        scrollTop: $(id).offset().top
                    }, 2000);
}

function Hide(id)
{
    $(id).addClass("animated fadeOutUp");
}