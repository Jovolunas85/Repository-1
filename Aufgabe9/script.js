var A9;
(function (A9) {
    let sound1 = new Audio('./assets/Keyboard/c.mp3');
    let sound2 = new Audio('./assets/Keyboard/df.mp3');
    let sound3 = new Audio('./assets/Keyboard/d.mp3');
    let sound4 = new Audio('./assets/Keyboard/ef.mp3');
    let sound5 = new Audio('./assets/Keyboard/e.mp3');
    let sound6 = new Audio('./assets/Keyboard/f.mp3');
    let sound7 = new Audio('./assets/Keyboard/gf.mp3');
    let sound8 = new Audio('./assets/Keyboard/g.mp3');
    let sound9 = new Audio('./assets/Keyboard/af.mp3');
    let sound10 = new Audio('./assets/Keyboard/a.mp3');
    let sound11 = new Audio('./assets/Keyboard/bf.mp3');
    let sound12 = new Audio('./assets/Keyboard/b.mp3');
    let count = 0;
    let play = document.querySelector("#play");
    let stop = document.querySelector("#stop");
    let audio = [sound1, sound4, sound11, sound9, sound5];
    let audio2 = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12];
    let myInterval;
    document.querySelector("#play").addEventListener('click', function () {
        play.classList.add('hidden');
        stop.classList.remove('hidden');
        myInterval = setInterval(() => {
            playSample(audio[count]);
            if (count == 4) {
                count = 0;
            }
            else {
                count++;
            }
        }, 500);
    });
    document.querySelector("#stop").addEventListener('click', function () {
        stop.classList.add('hidden');
        play.classList.remove('hidden');
        clearInterval(myInterval);
    });
    document.querySelector("#remix").addEventListener('click', function () {
        for (let i = 0; i < audio.length; i++) {
            audio[i] = audio2[Math.floor(Math.random() * 12)];
        }
    });
    function playSample(hdhb) {
        hdhb.play();
    }
    document.querySelector("#c").addEventListener('click', function () { playSample(sound1); });
    document.querySelector("#df").addEventListener('click', function () { playSample(sound2); });
    document.querySelector("#d").addEventListener('click', function () { playSample(sound3); });
    document.querySelector("#ef").addEventListener('click', function () { playSample(sound4); });
    document.querySelector("#e").addEventListener('click', function () { playSample(sound5); });
    document.querySelector("#f").addEventListener('click', function () { playSample(sound6); });
    document.querySelector("#gf").addEventListener('click', function () { playSample(sound7); });
    document.querySelector("#g").addEventListener('click', function () { playSample(sound8); });
    document.querySelector("#af").addEventListener('click', function () { playSample(sound9); });
    document.querySelector("#a").addEventListener('click', function () { playSample(sound10); });
    document.querySelector("#bf").addEventListener('click', function () { playSample(sound11); });
    document.querySelector("#b").addEventListener('click', function () { playSample(sound12); });
})(A9 || (A9 = {}));
//# sourceMappingURL=script.js.map