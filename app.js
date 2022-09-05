


    const showDiv = document.querySelector('.paragraph');
    const showDiv2 = document.querySelector('.paragraph-2');
    const showDiv3 = document.querySelector('.paragraph-3');
    const showDiv4 = document.querySelector('.paragraph-4');
    const showDiv5 = document.querySelector('.paragraph-5');
    const showDiv6 = document.querySelector('.paragraph-6');




function showHide() {
    if(showDiv.style.display === "none") {
        showDiv.style.display = "block";
    } else (
        showDiv.style.display = 'none'
    )
}

function showHide2() {
    if(showDiv2.style.display === "none") {
        showDiv2.style.display = "block";
    } else (
        showDiv2.style.display = 'none'
    )
}

function showHide3() {
    if(showDiv3.style.display === "none") {
        showDiv3.style.display = "block";
    } else (
        showDiv3.style.display = 'none'
    )
}

function showHide4() {
    if(showDiv4.style.display === "none") {
        showDiv4.style.display = "block";
    } else (
        showDiv4.style.display = 'none'
    )
}

function showHide5() {
    if(showDiv5.style.display === "none") {
        showDiv5.style.display = "block";
    } else (
        showDiv5.style.display = 'none'
    )
}

function showHide6() {
    if(showDiv6.style.display === "none") {
        showDiv6.style.display = "block";
    } else (
        showDiv6.style.display = 'none'
    )
};

const data = document.querySelectorAll(".data");
const searchBar = document.querySelector(".searchBar");

searchBar.addEventListener("keyup",(event)=>{
    const searchQuary = event.target.value.toLowerCase();
    
    for(let i = 0; i < data.length; i++){
        const currentData = data[i].textContent.toLowerCase();

        if(currentData.includes(searchQuary)){
            data[i].style.display = 'table-row'
        } else {
            data[i].style.display = 'none'
        }
    }
});

// clock//
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

