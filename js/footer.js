var footer = `
<footer class="desktop_and_tab" style="background:linear-gradient(rgba(4,9,30,0.4),rgba(4,9,30,0.4)),url(image/tree-736885.jpg);
    background-size: 100% 100%;
 width: 100%; margin: auto; text-align: center;
font-family: the_font;">
    <div class="row ce">
        <div class="column">
            <h3>About RATOLF</h3>            
            
            <div class="bull"></div>About Us<br> 
            <div class="bull"></div>Our Location <br> 
            <div class="bull"></div>Our Works <br> 
            <div class="bull"></div>Our Mission <br>  
            <div class="bull"></div> Our Team

        </div>
        <div class="column">
            <h3>Events</h3>
            
            <div class="bull"></div>Nigeria <br> 
            <div class="bull"></div>South Africa <br> 
            <div class="bull"></div>Outreach <br> 
            <div class="bull"></div>Media
            
        </div>
        <div class="column">
            <h3>Get Involved</h3>

            <div class="bull"></div>Give <br> 
            <div class="bull"></div>Join <br> 
            <div class="bull"></div>Contact us
            
        </div>
        <div class="column">
            <h3>Media</h3>

            <img class="icon" src="./image/icon_play.png">  Youtube <br> 
            <img class="icon" src="./image/iconFacebook.png">  Facebook <br> 
            <img class="icon" src="./image/iconInstagram.png"> Instagram <br> 
            <img class="icon" src="./image/iconTwitter.png"> Twitter <br> 
            <img class="icon" src="./image/icon_wh.png"> +1(701)7703188
            
        </div>
    </div>
    <div class="ff ce" style="background: orangered;color:#fff;padding: 20px;">
        ©ratolf. 2023 
    </div>
</footer>

<footer class="mobile" style="background:linear-gradient(rgba(4,9,30,0.4),rgba(4,9,30,0.4)),url(image/tree-736885.jpg);
background-size: 100% 100%; width: 100%; margin: auto; text-align: center;
font-family: the_font;">

    <div style="text-align: left; padding:20px;padding-bottom: 0px;">
        <img style="width:100px;" src="image/logo.png" alt="">
    </div>
    
    <div class="">
        <div class="column2">
            <h3>About RATOLF</h3>
            <p>About <br> our location <br> our works <br> our mission</p>
        </div>
        <div class="column2">
            <h3>Get Involved</h3>
            <p>Give <br> Join <br> Contact us</p>
        </div>
        <div class="column2" style="margin-top: -30px;padding-top:0px">
            <h3>Our Team</h3>
            <div class="bull"></div>Pastor Remmy-green Peter <br> 
            <div class="bull"></div>mrs mwaka peter <br> 
            <div class="bull"></div>Pastor Bunmi <br> 
            <div class="bull"></div>samuel peter
            
        </div>
    </div>
    <div class="ff ce" style="background: orangered;color:#fff;padding: 10px;">
        ©ratolf. 2023 
    </div>
</footer>

<div id="myNav" class="overlay" style="">                                  <div class="closebtn close3" onclick="closeNav()">×</div>                                                <img class="coI" src="image/logo.png" style="width:200px; border-radius:25px; margin:10px auto;">                                  <div class="overlay-content">                                                                      <a href="./index.html">
     <div class="menu1"><div class="bull"></div>HOME</div> 
 </a>   
 <a href="./about.html">
    <div class="menu1" onclick="">
    <div class="bull"></div>ABOUT 
</div>
</a>
<a href="./team.html">
<div class="menu1" ><div class="bull"></div>TEAM</div>
</a>
<a href="./get_involve.html">
<div class="menu1">                                    <div class="bull"></div>GET INVOLVE                                    </div>
</a>
<div class="menu1" onclick="instal()">                                    <div class="bull"></div>MEDIA                                 </div><div class="menu1" onclick="instr()">                                    <div class="bull"></div>BLOG   </div><div class="menu1" onclick="popName()"> <div class="bull"></div>CONTACT </div>
<div class="menu1" onclick="popName()"> <div class="bull"></div>DONATE </div>		                                                                        </div></div>

<div class="overlay2" onclick="closeNav()"></div>
`;

document.getElementById('ratolf_footer').innerHTML=footer;