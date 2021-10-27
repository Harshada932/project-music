const play =document.getElementById("play");
const music =document .querySelector("audio");
const img =document .querySelector("img");
const artist=document.getElementById("artist");
const title =document.getElementById("title");
const prev =document.getElementById("prev");
const next =document.getElementById("next");


let progress =document.getElementById("progress");
let total_duration =document.getElementById("duration");
let current_time =document.getElementById("current_time");
const progress_div =document.getElementById("progress_div")


const songs=   [
    {name:"crativemind",
    title:"Crative Mind",
    artist:"Benjamin Tissot",},
    
    {name:"sunny",
    title:"sunny",
    artist:"Benjamin Tissot",},

    {name:"hip-hop",
    title:"hip-hop",
    artist:"Benjamin Tissot",},

    {name:"hollidays",
    title:"hollidays",
    artist:"Benjamin Tissot",},
    
    
]

let isPlaying =false;
// for play function
const playMusic = ()=>{
    
    music.play();
    isPlaying =true;
    play.classList.replace('fa-play','fa-pause');
    img .classList.add("anime")
};


// for pause function

const pauseMusic = ()=>{
    music.pause();
    isPlaying =false;
    play.classList.replace('fa-pause','fa-play');
    img .classList.remove("anime")
};
play.addEventListener("click",()=>{
  if (isPlaying){
      pauseMusic();
  }
  else{
    playMusic();
  }


});
// change the music data
const loadsong = (songs) => {
    title.textContent =songs.title;
    artist.textContent =songs.artist;
    music.src ="../Song/" +songs.name + ".mp3";
    img.src="../image/Sample Pictures/"+songs.name+".jpg";

};
songIndex=0;
const  nextsong = () =>{
    songIndex=(songIndex +1)%songs.length;
   loadsong(songs [songIndex]);
};
const  prevsong = () =>{
    songIndex=(songIndex  - 1 +songs.length)%songs.length;
   loadsong(songs [songIndex]);
};

// progress js work
music.addEventListener('timeupdate',(event)=>{
//  console.log(event);

 const{currentTime,duration} = event.srcElement;
//  console.log(currentTime);
//  console.log(duration);

 let progress_time =(currentTime/duration)*100;
 progress.style.width =`${progress_time}%`;

// music duration update
let min_duration = Math.floor(duration/60);
let sec_duration =Math.floor(duration%60);
console.log(min_duration);
console.log(sec_duration)
 let tot_duration =`${min_duration}:${sec_duration}`;
if(duration){
total_duration.textContent = `${tot_duration}`;}


// current duration update
let min_currentTime = Math.floor(currentTime/60);
let sec_currentTime =Math.floor(currentTime%60);
// console.log(min_currentTime);
// console.lo(sec_currentTime)
 
if(sec_currentTime<10){
    sec_currentTime =`0${sec_currentTime}`

}
let tot_currentTime =`${min_currentTime}:${sec_currentTime}`;
 current_time .textContent = `${tot_currentTime}`;

});

// progress_div.addEventListener("click",(event)=>{
//     // console.log(event);
//     const{ duration }=music;

//     let move_progress=(event.offsetX / event.srcElement.clientwidth)*duration;
//     // console.log(duration);
//     // console.log(move_progress);
//     music.currentTime = move_progress;
// })


music.addEventListener("ended",nextsong);

next.addEventListener("click",nextsong);
prev.addEventListener("click",prevsong);