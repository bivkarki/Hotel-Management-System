 setInterval(Timer, 1000);
var days;
    function Timer() 
    {
        var time =new Date();
         //for local time
        
        var deadline = new Date("2018-04-24T00:00:00"); // as system time
    
        var msec =Number(deadline)-Number(time);
         var timer=new Date(msec); //In GMT

       day(time,deadline);
        hour(timer);
          document.getElementById("sec").innerHTML=timer.getSeconds(); 
          if(time >= deadline)
          {
           dead();

          }
    }
    function dead()
    {
        document.getElementById("days").style .display="none";
            document.getElementById("hr").style .display="none";
             document.getElementById("min").style .display="none";
              document.getElementById("sec").style .display="none";
             var x=document.getElementById("time");
             x.innerHTML="Sorry,Time to avail 20% Discount has Ended !!!";
             x.style.backgroundColor="#ef5028";
             x.style.color="yellow";
             x.style.fontSize="50px";
             x.style.height="auto";
             document.getElementById("discount").value="0%";


    }
    function day(time,deadline)
    { 
        var d1=Number(deadline.getDate()); //no.of days
        var d2=Number(time.getDate()); //no. of days
        var month1=Number(deadline.getMonth())+1;
        var year1=deadline.getFullYear();
        var month2=Number(time.getMonth())+1;
        var year2=time.getFullYear();
        var x=calcDays(month1,year1);
        var y=calcDays(month2,year2);
        var D2=Number(deadline.getMonth()-time.getMonth());
        var d3=Number(deadline.getFullYear()-time.getFullYear());
        var day1=x+d1;
        var day2=y+d2;
        days=d3*365+(day1-day2); //for days
}
    function hour(timer)
    { var y=timer.getMinutes()-30;
        var x=timer.getHours()-5; //as IST is 5 hours ahead
       
        var z=timer.getSeconds();
        if (y<0)
        {
            y=60+y;
            x--;
        }
        if(x<0)
        {
            x=24+x;
            days--;

        }  //as IST is 30 mins ahead
         document.getElementById("days").innerHTML=days;
        document.getElementById("hr").innerHTML=x;
         document.getElementById("min").innerHTML=y;
          document.getElementById("sec").innerHTML=z;
        return y;
    }
function calcDays(month,year)
{
    var D2=0;
    var numDays;
    for(var i=month;(i>=0);i--)
        {
        switch(i)
        {   case 0:
            numDays=0;
            break;
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                numDays = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                numDays = 30;
                break;
            case 2:
                if (((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0))
                    
                    numDays = 29;
                else
                    numDays = 28;
                break;

        }
        D2=D2+numDays;
 }
    return D2;
}
function avail()
{
document.getElementById("discount").value=20;
document.getElementById("discount").focus();
document.getElementById("discount").style.backgroundColor="#ffff80";
}






