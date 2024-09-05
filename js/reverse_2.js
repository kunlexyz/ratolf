//reverse.js

//reverse 2
window.onload = function(){

    /*codes for mini Sliders*/
    var pic2=['save_africa2.jpg','save_africa.jpg'],
    p2Wheel=0,
    slide_height=500;
    function slideMini(){
        var holda1='<div class="boxAdsC" style="height:'+slide_height+'px;"><img src="image/'+pic2[p2Wheel]+'" id="adx1" class="boxAdsImage" style="margin:0px;height:'+slide_height+'px;" />';
        p2Wheel++;
        console.log(window.innerWidth);
        if(window.innerWidth > 1550){slide_height=700}else{slide_height=500}
        if(p2Wheel==pic2.length){p2Wheel=0;}
        var holda2='<img src="image/'+pic2[p2Wheel]+'" class="boxAdsImage" style="height:'+slide_height+'px;" /></div>';
        document.getElementById('boxAds1').innerHTML=holda1+holda2;
        document.getElementById('boxAds1').style.height=slide_height+'px';
        $('#adx1').animate({'margin-left': '-25%'}, 3000);
        setTimeout(slideMini,6000);
    }slideMini();

}