var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function DatTimeClock(){
    var today = new Date();
    var d= today.getDate();
    var dow=today.getDay();
    var mon=today.getMonth();
    var y=today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    
    div1.innerHTML =  days[dow]+" "+y+"\\"+mon+"\\"+d+"  "+  h + ":" + m + ":" + s;
    
    div1=document.getElementById('div1');
    var t = setTimeout(DatTimeClock, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function getUTCNow()
{
    var now = new Date();
    var time = now.getTime();
    var offset = now.getTimezoneOffset();
    offset = offset * 60000;
    return time - offset;
}
