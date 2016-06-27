var authResponse;

function CreateLiveVideoPost(userId, accessToken)
{
    var url = "https://graph.facebook.com/"+userId+"/live_videos";
    $.post(url, {  
          "access_token":accessToken,
          "published": true },
      function( data ) {
                console.log( "stream_url : " + data.stream_url );
                console.log(data);
                PublishLiveVideoPost(data.id, accessToken);
      },
      "JSON" );
}

function PublishLiveVideoPost(liveVideoId, accessToken)
{
    var url = "https://graph.facebook.com/"+liveVideoId;
    $.post(url, {  
          "access_token":accessToken,
          "published": true//,
          //"title": $('#title').val(),
          //"description": $('#description').val()
            },
      function( data ) {
                console.log( data );
      },
      "JSON" );
}

$( document ).ready(function() {
    $('#go').click(function()
        {
        console.log("Go clicked");
            CreateLiveVideoPost(authResponse.userID, authResponse.accessToken);
        }); 
});
    
    