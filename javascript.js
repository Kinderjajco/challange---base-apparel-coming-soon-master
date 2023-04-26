// document.querySelectorAll(".share").forEach((share) => share.addEventListener("click", () =>{
// const shareBox = document.querySelector(".share-box");


//     console.log(shareBox)
//     if(share.parentNode.classList.contains("active")) {

//         share.parentNode.classList.toggle("active")

//     }else{
//         document.querySelectorAll(".share").forEach(share => share.parentNode.classList.remove("active"))

//         share.parentNode.classList.add("active")
//     }

// }));

const shareBox = document.querySelector('.share-box');
const share = document.querySelectorAll('.share');

share[0].addEventListener('click', () => {
    shareBox.style.display = 
        shareBox.style.display == 'flex' ? 'none' : 'flex';
})