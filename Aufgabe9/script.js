var A9;
(function (A9) {
    var sound1 = new Audio('./assets/Keyboard/c.mp3');
    var sound2 = new Audio('./assets/Keyboard/df.mp3');
    var sound3 = new Audio('./assets/Keyboard/d.mp3');
    var sound4 = new Audio('./assets/Keyboard/ef.mp3');
    var sound5 = new Audio('./assets/Keyboard/e.mp3');
    var sound6 = new Audio('./assets/Keyboard/f.mp3');
    var sound7 = new Audio('./assets/Keyboard/gf.mp3');
    var sound8 = new Audio('./assets/Keyboard/g.mp3');
    var sound9 = new Audio('./assets/Keyboard/af.mp3');
    var sound10 = new Audio('./assets/Keyboard/a.mp3');
    var sound11 = new Audio('./assets/Keyboard/bf.mp3');
    var sound12 = new Audio('./assets/Keyboard/b.mp3');
    let count = 0;
    let play = document.querySelector("#play");
    let stop = document.querySelector("#stop");
    var audio = [sound1, sound4, sound11, sound9, sound5];
    document.querySelector("#play").addEventListener('click', function () {
        play.classList.add('hidden');
        stop.classList.remove('hidden');
        setInterval(function () {
            audio[count].play();
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
        audio[count].pause();
        audio[count].currentTime = 0;
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