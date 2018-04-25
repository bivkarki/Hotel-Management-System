  var x1=Math.ceil (Math.random() * 9);
        var x2=Math.ceil (Math.random() * 9);
        var x3=Math.ceil (Math.random() * 9);
        var x4=Math.ceil (Math.random() * 9);
        var x5=Math.ceil (Math.random() * 9);
        var x6=Math.ceil (Math.random() * 9);
        var ch1 = String.fromCharCode(65 + Math.ceil (Math.random() * 25));
        var ch2=String.fromCharCode(97+Math.ceil (Math.random() * 25));
       var captcha=x1+ch1+x2+x3+ch2+x4+x5+x6;
  function generate()
  {
  	document.getElementById("captcha").innerHTML="<center><sub>"+x1+"</sub>\t"+"<sup>"+ch1+"</sup>\t"+x2+"\t"+x3+"\t"+"<sub>"+ch2+"</sub>\t"+"<sup>"+x4+"</sup>\t"+x5+"\t<sup>"+x6+"</sup></center>";
  }
         
 function validate()
 { 
 	
   if( document.getElementById("t1").value== "" )
         {alert( "Please provide your name!" );
            document.getElementById("t1").focus() ;
            return false;}
        var radios = document.getElementsByName("gender");
    var Valid = false;

    var i = 0;
    while (!Valid && i < radios.length) 
    {
        if (radios[i].checked) 
          Valid = true;
        i++;        
    }

    if (!Valid) 
      {
        alert("Select any option for Gender!");
    return Valid;
  }

          var emailID = document.getElementById("t2").value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");       
         if (document.getElementById("t2").value == "" || atpos < 6 || ( dotpos - atpos < 4)) 
         {
            alert("Please enter correct email ID");
            document.getElementById("t2").focus() ;
            return false;
           
         }
         if( (document.getElementById("p1").value.length )<6  ||  (document.getElementById("p2").value.length)<6 )
 {alert("Enter atleast 6 characters in the Password field");
document.getElementById("p1").focus() ;
document.getElementById("p2").focus() ;
return false;
}
if( (document.getElementById("p1").value.length )>=6  &&  (document.getElementById("p2").value.length)>=6 )
{ 
 if(document.getElementById("p1").value!=document.getElementById("p2").value)
  {
alert("the Passwords entered are not matching!");
document.getElementById("p1").focus() ;
document.getElementById("p2").focus() ;
return false;
}} 
 var date = new Date("2007-12-31T00:00:00");
var date1=new Date(document.getElementById("bod").value);
if(document.getElementById("bod").value=="")
{
alert("Please enter your Date of birth");
	return false;	
}
if(date1>date)
{
	alert("You need to be atleast 18 years to fill the form");
	return false;
}

if( document.getElementById("sel").value == "" )
 {alert( "Please provide your country!" );
            return false; } 


    if( document.getElementById("t3").value == "")
{ alert( "Please provide a zip code." );
   document.getElementById("t3").focus() ;
            return false;}

  if( (document.getElementById("t4").value == "") ||(document.getElementById("t4").value.length<10))
{ alert( "Please provide valid phone number" );
   document.getElementById("t4").focus() ;
            return false;}
 if(document.getElementById("cap").value!=captcha)
 
   {
document.getElementById("msg").style.display="block";
return false;
}
   
    
 set();
 on();
      
 }


function quit()
{ var c=confirm("Do you really want to remove assistant from the page?");
	if(c==true)
		document.getElementById("help").style.display="none";
}

function res()
{
	document.getElementById("msg").style.display="none";
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#userimage')
        .attr('src', e.target.result)
     
    };
    reader.readAsDataURL(input.files[0]);
  }
}
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
function proceed()
{
	document.location.href="login.html";
}
function show()
{document.getElementById("closemsg").style.display="block";
}
function hide()
{document.getElementById("closemsg").style.display="none";
}

function set()
{
	document.getElementById("l1").innerHTML=document.getElementById("t1").value;
document.getElementById("l2").innerHTML=document.getElementById("bod").value;    
//document.getElementById("l3").innerHTML=document.getElementById("t5").value;
document.getElementById("l5").innerHTML=document.getElementById("t2").value;
document.getElementById("l6").innerHTML="+"+document.getElementById("sel").value+"-"+document.getElementById("t4").value;
 }
