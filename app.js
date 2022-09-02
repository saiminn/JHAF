


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
            data[i].style.display = 'block'
        } else {
            data[i].style.display = 'none'
        }
    }
});

