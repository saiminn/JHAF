function currentTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let ms = date.getMilliseconds();
    let session = "AM";
// date function is 0-23 , we just want 1 to 12 so that we use this function
    if(hh==0){
        hh = 12;
    }

    if(hh>12){
        hh = hh - 12;
        session = "PM";
    
    }
  
//prevent from showing 0 infront of numbers
    hh = (hh<10)?"0"+ hh : hh;
    mm = (mm<10)?"0"+ mm : mm;
    ss = (ss<10)?"0"+ ss : ss;
    ms = (ms<10)?"0"+ ms : ms;

    let time = hh + ":"+ mm + ":" + ss +" "+ session;

    document.getElementById("clock").innerText = time;

    let t = setTimeout(function(){currentTime()}, 1000);



     
}
currentTime();

// Searching feature//

document.getElementById("hp").href = (("https://www.google.com/search?q=")+ (document.getElementById("linkit").value+' ' +`lyric`
));

