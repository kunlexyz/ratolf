// filename: team.js
var state_d=0;
state_x=0;
state_y=0;

function bring_more(event,k){
    $('.story_box').css({display:'none'});
    $('#'+k).css({display:'block'});
	x = event.clientX;
	y = event.clientY;
	state_x = event.clientX;
	state_y = event.clientY;
    state_d=window.scrollY;

    $('#more').css({display:'block',width:'150px',height:'50px',top:y+'px',left:x+'px'});
    $('#more').animate({top:'0px',left:'0px',width:'100%',height:'100vh'},1000,
    function(){
        //$('#more').scrollTop(0);
        $('#more').animate({scrollTop:0});
    }
    ); 
    
}

function hideTeamStory(){
    $('#more').animate({width:'150px',height:'50px',top:state_y+'px',left:state_x+'px'},1000, function(){
        $('#more').css({display:'none'});
    });
    window.scrollTo(0,state_d);
}