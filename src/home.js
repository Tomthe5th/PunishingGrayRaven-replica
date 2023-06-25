const clickoff = document.querySelector("#heroModal");
const video = document.querySelector("#heroPV");

 clickoff.addEventListener('click',()=> {
     //   console.log('click')
     video.pause()
     video.currentTime = 0 
 })

 