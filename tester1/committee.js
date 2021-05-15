document.getElementById("b1").addEventListener("click",myFunction);
function myFunction()
{
    document.getElementById("pop").className="main4";
    document.querySelector("#pop").innerHTML="<p><b>Dr. Chitra A.</b><br> Associate professor<br>Department of Energy & Power Electronics School of Electrical Engineering<br>VIT Vellore, India<br> E-Mail: chitra.a@vit.ac.in <br>Mobile:+91 9894760447 </p>";
    document.querySelector(".main4").style.webkitTransition="3s";
}
document.getElementById("b2").addEventListener("click",myFunction1);
function myFunction1()
{

    document.getElementById("pop").className="main4";
    document.querySelector("#pop").innerHTML="<p><b>Dr. V. Indragandhi </b><br> Associate professor<br>Department of Energy & Power Electronics School of Electrical Engineering<br>VIT Vellore, India<br> E-Mail: indragandhi.v@vit.ac.in <br>Mobile:+91 97506 03539 </p>";
    document.querySelector(".main4").style.webkitTransition="3s";
    document.querySelector(".main4").style.removeProperty("webkitTransition");

    
    //document.getElementById("b2").style.backgroundColor="#141A2E"
}
document.getElementById("b3").addEventListener("click",myFunction2);
function myFunction2()
{
    document.getElementById("pop").className="main4";
    document.querySelector("#pop").innerHTML="<p><b>Dr. Razia Sultana W.</b><br> Associate professor<br>Department of Energy & Power Electronics School of Electrical Engineering<br>VIT Vellore, India<br> E-Mail: wraziasultana@vit.ac.in <br>Mobile:+91 9943295041</p>";
    document.querySelector(".main4").style.webkitTransition="3s";
    document.querySelector(".main4").style.removeProperty("webkitTransition");
    
    //document.getElementById("b3").style.backgroundColor="#141A2E"
}

