let first = document.querySelector(".minutes")
let second = document.querySelector(".seconds")

let pause = document.querySelector(".pause")
let start = document.querySelector(".start")
let reset = document.querySelector(".reset")


let video = document.querySelector(".video")


let minutes = 5
let seconds = 60


function Timer(m, s) {
    
    let time
    
    
    
    
    if (m == 0) {
        clearInterval(time);
       
      }
    
    
    start.onclick = () => {
        start.disabled = true
        pause.disabled = false
        
        time = setInterval(() => {
            
            --s
            
            if (s == 0) {
                s = 60
                m--
                
            }    
            first.innerHTML = m
            second.innerHTML = s
        }, 40);    
    }    
    
    pause.onclick = () => {
        clearInterval(time)
        
        start.disabled = false
        pause.disabled = true
    }    


reset.onclick = ( ) => {
m = minutes    
s = seconds

}

}


Timer(minutes, seconds)