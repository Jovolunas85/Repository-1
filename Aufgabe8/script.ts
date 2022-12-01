namespace A8 {
    var sound1:HTMLAudioElement = new Audio('./assets/Keyboard/c.mp3');
    var sound2:HTMLAudioElement = new Audio('./assets/Keyboard/df.mp3');
    var sound3:HTMLAudioElement = new Audio('./assets/Keyboard/d.mp3');
    var sound4:HTMLAudioElement = new Audio('./assets/Keyboard/ef.mp3');
    var sound5:HTMLAudioElement = new Audio('./assets/Keyboard/e.mp3');
    var sound6:HTMLAudioElement = new Audio('./assets/Keyboard/f.mp3');
    var sound7:HTMLAudioElement = new Audio('./assets/Keyboard/gf.mp3');
    var sound8:HTMLAudioElement = new Audio('./assets/Keyboard/g.mp3');
    var sound9:HTMLAudioElement = new Audio('./assets/Keyboard/af.mp3');
    var sound10:HTMLAudioElement = new Audio('./assets/Keyboard/a.mp3');
    var sound11:HTMLAudioElement = new Audio('./assets/Keyboard/bf.mp3');
    var sound12:HTMLAudioElement = new Audio('./assets/Keyboard/b.mp3');
    let count = 0;
    document.querySelector(".play").addEventListener('click',function() {
        setInterval(function() {
            audio[count].play();
            if (count==4){
                count=0;
            } 
            else {count++}
        }, 500);
       var audio:HTMLAudioElement[] = [sound1, sound4, sound11, sound9, sound5];
    
    })
    
    function playSample(hdhb){
        hdhb.play();
    }
    document.querySelector("#c").addEventListener('click',function() {playSample(sound1);});
    document.querySelector("#df").addEventListener('click',function() {playSample(sound2);});
    document.querySelector("#d").addEventListener('click',function() {playSample(sound3);});
    document.querySelector("#ef").addEventListener('click',function() {playSample(sound4);});
    document.querySelector("#e").addEventListener('click',function() {playSample(sound5);});
    document.querySelector("#f").addEventListener('click',function() {playSample(sound6);});
    document.querySelector("#gf").addEventListener('click',function() {playSample(sound7);});
    document.querySelector("#g").addEventListener('click',function() {playSample(sound8);});
    document.querySelector("#af").addEventListener('click',function() {playSample(sound9);});
    document.querySelector("#a").addEventListener('click',function() {playSample(sound10);});
    document.querySelector("#bf").addEventListener('click',function() {playSample(sound11);});
    document.querySelector("#b").addEventListener('click',function() {playSample(sound12);});
    
}