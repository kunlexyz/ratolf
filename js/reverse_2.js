//reverse.js

//reverse 2
window.onload = function(){

    /*codes for mini Sliders*/
    var pic2=['save_africa2.jpg','save_africa.jpg'];
    p2Wheel=0;
    function slideMini(){
        var holda1='<div class="boxAdsC"><img src="image/'+pic2[p2Wheel]+'" id="adx1" class="boxAdsImage" style="margin:0px" />';
        p2Wheel++;
        if(p2Wheel==pic2.length){p2Wheel=0;}
        var holda2='<img src="image/'+pic2[p2Wheel]+'" class="boxAdsImage" /></div>';
        document.getElementById('boxAds1').innerHTML=holda1+holda2;
        $('#adx1').animate({'margin-left': '-25%'}, 3000);
        setTimeout(slideMini,6000);
    }slideMini();

}