function clock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    /*The if statement will teach Javascript to turn the clock to "pm"*/
    let dayNight = "AM";
    
    if (hour == 0){
        hour = 12;
    }
    
    if(hour > 12){
       hour = hour - 12;
       dayNight = "PM";
    /*This is telling Javascript to turn the clock into a 12 hour clock vs 24 hour clock*/
    }
    /*I'm using a conditional/ternary operator, which operates on 3 values. The values are written 
    and between them go a question mark and colon (10 ? `0{hour}` : hour;) The value on the left of 
    the "?" picks which of the other 2 values will come out. When the argument is "true" it will pick 
    the middle value, "`0${hour}`), when it is false it will choose the last value, "hour".
    so in other words, the argument is "are the hour values less then 10?" ("hour < 10?"), if the answer is
    yes (True) then it will put a 0 in front of the value (`0${hour}`),
    if the answer is no (False) it will display the value normally. So the clock will read something
    like "02:09", instead of "2:9" */
    
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;
    
    let currentTime = `${hour}:${minute}:${second} ${dayNight}`;
    setInterval(clock, 1000);
    
    document.getElementById("CLOCK").innerHTML = currentTime;
    
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'];

    let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let wd = day[date.getDay()];
    let dd = date.getDate();
    let mm = month[date.getMonth()];
    let yyyy = date.getFullYear();

    let calendar = `${wd}, ${mm} ${dd} ${yyyy}`;

    document.getElementById("DATE").innerHTML = calendar;
    }
    
    clock();
    