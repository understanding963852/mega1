var $select={
    body:$('body'),//var body = $('body');과 동일한 방식
    overlay:$('#blackout'),
    modal:$('#trailerModal'),
    showButton:$('#showTrailer'),
    hideButton:$('#hideTrailer')
}

var player = {
    obj:null,
    query:{
        color:"white",
        controls:0,
        iv_load_policy:3,
        autoplay:1
    }
}


/* $select.showButton.click(function(){
    showPlayer()
}) */
$select.showButton.click(showPlayer);
$select.hideButton.click(hidePlayer);


//Youtube API를 이용해 iframe를 생성
function setPlayer(id){
    player.obj=  new YT.Player('trailer', {
       
        videoId: id,
        playerVars:player.query
    })
    resizePlayer();
    //리사이즈, 화면회전시 플레이어 크기 다시 설정
    $(window).on("resize orientationchange",function(){
        resizePlayer();
    })
}


function resizePlayer(){
    var viewport={},
        frame={},
        modal={};

        viewport.width=$(window).width();//현재화면의 넓이  
        viewport.height=$(window).height();// 현재화면의 높이
        
        frame.width=viewport.width;
        frame.height=frame.width / 1.6; //16:10

        modal.top=((viewport.height - frame.height)/2) + "px";
        modal.left=0;
     
        $select.modal.css(modal)
        player.obj.setSize(frame.width, frame.height);
}


function showPlayer(){
    if(!player.obj){//null이 아니면
        setPlayer($select.showButton.data('youtube'))
    }
    $select.overlay.show();

}
function hidePlayer(){
    player.obj.stopVideo();
    $select.overlay.hide();

}