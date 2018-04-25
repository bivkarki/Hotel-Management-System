 
function validate()
{
var fn=document.getElementById("t1");
var ln=document.getElementById("t2");
var age=document.getElementById("t3");
var contact=document.getElementById("t4");
var email=document.getElementById("t5");
var checkin=document.getElementById("date1");
var checkout=document.getElementById("date2");
var sel1=document.getElementById("sel1");
var sel2=document.getElementById("sel2");

var atpos=email.value.indexOf("@");
var dotpos=email.value.lastIndexOf(".");
var date=new Date();
var date1=new Date(checkin.value);
var date2=new Date(checkout.value);
var d3=Number(date2.getFullYear()-date1.getFullYear());
var d1=Number(date1.getDate());
var d2=Number(date2.getDate());
var m1=Number(date1.getMonth())+1;
var m2=Number(date2.getMonth())+1;
var y1=Number(date1.getFullYear());
var y2=Number(date2.getFullYear());
var days=(y2-y1)*365+(m2-m1)*30+(d2-d1)+1;
if( fn.value=="" )
    {alert( "Please provide your First Name!" );
      fn.focus() ;
    return false;}
if( ln.value=="" )
    {alert( "Please provide your Last Name!" );
      ln.focus() ;
    return false;}
    if( age.value=="" )
{   alert( "Please enter your age !" );
     age.focus();
return false;}
if(Number(age.value)<18)
{
alert("Sorry you are underaged for Room Booking!");
document.getElementById("details").style.display="none";
document.getElementById("error").style.display="block";
}


if( (contact.value.length )<10  )
 {alert("Please Provide your Correct Contact Number");
contact.focus() ;
return false;
}
if( (contact.value=="") )
 {alert("Please Provide your Contact Number");
contact.focus() ;
return false;
}
if (email.value == "" || atpos < 6 || ( dotpos - atpos < 4)) 
         {alert("Please enter correct email ID");
            email.focus() ;
            return false;}

if(sel1.selectedIndex==0)
{  alert("Please choose any of Hotel Type Options!");
	sel1.focus();
	return false;
}
if(sel2.selectedIndex==0)
{ alert("Please choose any of Room Type Options!");
	sel2.focus();
	return false;
}

if(checkin.value=="")
{
alert("Please enter Checkin date");
  return false; 
}
if(checkout.value=="")
{
alert("Please enter Checkout date");
  return false; 
}

if(date1<date)
{
alert("Please check that Checkin date should be later or on than Current date!");
            checkin.focus() ;
            return false;
}
if(date2<date1)
{alert("Please check that Checkout date should be later than Checkin date!");
            checkout.focus() ;
            return false;

}
if(d3>0)
{
  if(days>365)
  {
  alert("Dear customer,Its not your f**king house either choose less tenure or get lost!");
            checkout.focus() ;
            return false;
          }
}
calculate();
 overlay();           
} 



 function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
function overlay()
{ on();
document.getElementById("l1").innerHTML=document.getElementById("t1").value+"\t"+document.getElementById("t2").value;
document.getElementById("l2").innerHTML=document.getElementById("t3").value;    
document.getElementById("l3").innerHTML=document.getElementById("t5").value;
document.getElementById("l4").innerHTML=document.getElementById("t4").value;
document.getElementById("l4").innerHTML=document.getElementById("t4").value;
document.getElementById("l5").innerHTML=document.getElementById("gender").value;
document.getElementById("l6").innerHTML=document.getElementById("sel1").value;
document.getElementById("l7").innerHTML=document.getElementById("sel2").value;    
document.getElementById("l8").innerHTML=document.getElementById("date1").value;
document.getElementById("l9").innerHTML=document.getElementById("date2").value;     
document.getElementById("l10").innerHTML=document.getElementById("dollar").value+"$ "+"( Rs."+document.getElementById("rupee").value+" )";

}
function show()
{document.getElementById("msg").style.display="block";
}
function hide()
{document.getElementById("msg").style.display="none";
}


 function payment()
{ document.location.href="payment.html"; 
}




 



function convert() {
var amount=document.getElementById("dollar").value;
 } 

function cal()
{
  if(document.getElementById("date1").value=="")
  {
    return false;
  }
  calculate();
}
function calculate()
{

  var discount=document.getElementById("discount").value; 
var date2=new Date(document.getElementById("date2").value);
var date1=new Date(document.getElementById("date1").value);
var d1=Number(date1.getDate());
var d2=Number(date2.getDate());
var m1=Number(date1.getMonth())+1;
var m2=Number(date2.getMonth())+1;
var y1=Number(date1.getFullYear());
var y2=Number(date2.getFullYear());
var days=(y2-y1)*365+(m2-m1)*30+(d2-d1)+1;

var s1 = document.getElementById("sel1").selectedIndex;
var s2 = document.getElementById("sel2").selectedIndex;
var amount;

switch(s1)
{ 

case 1:
      switch(s2)
{ case 1:
amount=180;
 break;
case 2:
amount=230;
break;
case 3:
amount=350;
 break;}

 break;

case 2:
      switch(s2)
{ case 1:
amount=80;
 break;
case 2:
amount=100;
break;
case 3:
amount=150;
 break;}

break;

case 3:
    switch(s2)
{ 
case 1:
amount=50;
 break;
case 2:
amount=80;
break;
case 3:
amount=120;
 break;

}
 break;
 
}
amount=Number(amount-((amount*discount)/100));
amount=amount * days;
document.getElementById("dollar").value=amount;
document.getElementById("rupee").value=amount*64.86;

} 







