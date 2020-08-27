var animation = bodymovin.loadAnimation({
 container: document.getElementById('main-anim'),
 renderer: 'svg',
 loop: false,
 autoplay: false,
 path: 'data.json'
})

animation.addEventListener('DOMLoaded', function(e) { 
    $("#avail-sept20th").click(function(){
        window.open(
            'https://foundation-media.ffm.to/oceansandwaves',
            '_blank' 
      )
    })
    
    $("#bsow-call-out").click(function(){
        window.open(
            'https://www.youtube.com/watch?v=12AryGtUr2A',
            '_blank'
        )
    })
    
})

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: '12AryGtUr2A',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
});
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {        
    if(event.data === 0 || player.getPlayerState() == 2 || player.getPlayerState() == 5) {          
        $('#player').hide();
        $('#blackout').hide();
        $('#socials-mobile').css("visibility", "visible");
        animation.play();
    }
}