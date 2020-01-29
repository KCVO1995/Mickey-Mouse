const css =
`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
*::before, *::after {box-sizing: border-box;}

body{
    background-color: #c33;
}
.mickey{
    top: 10px;
    position: relative;
    width: 850px;
    height: 890px;
}
.mickey * {
    position: absolute;
}
.head {
    background-color: #000;
    width: 520px;
    height: 525px;
    border-radius: 50%;
    left: 170px;
    top: 210px;
}
.ear {
    background-color: #000;
    height: 350px;
    width: 280px;
    border-radius: 50%;
    top: 0;
}
.ear.left {
    left: 50px;
    transform: rotate(20deg);
}
.ear.right {
    right: 50px;
    transform: rotate(-20deg);
}

.face {
    position: relative;
    width: 520px;
    height: 530px;
    z-index: 1;
}
.face .front {
    background-color: #fff;
    width: 215px;
    height: 380px;
    border-radius: 50%;
    top: 35px;
}
.face .front.left {
    left: 65px;
}
.face .front.right {
    right: 65px;
}

.face .cheek {
    background-color: #fff;
    width: 150px;
    height: 270px;
    top: 260px;
    border-radius: 50%;
    border: 5px solid #000;
    border-bottom: 0px solid #000;
}
.face .cheek.left {
    left: 20px;
    border-right: 0px solid #000;
    transform: rotate(-45deg);
}
.face .cheek.right {
    border-left: 0px solid #000;
    right: 20px;
    transform: rotate(45deg);
}
.face .chin {
    background-color: #fff;
    width: 180px;
    height: 100px;
    border-bottom: 5px solid #000;
    border-radius: 50%;
    left: 170px;
    top: 440px;
}
.face .mouth-wrapper {
    width: 420px;
    height: 190px;
    left: 50px;
    top: 335px;
    overflow: hidden;
}
.face .mouth-wrapper .mouth {
    background-color: #000;
    border-width: 5px 10px;
    border-style: solid;
    border-radius: 50%;
    width: 155px;
    height: 200px;
    left: 132.5px;
    bottom: 0px;
    overflow: hidden;
}
.face .mouth-wrapper .mouth .tong1 {
    width: 100px;
    height: 100px;
    background-color: #f00;
    border-radius: 50%;
    bottom: -50px;
    left: -10px;
}
.face .mouth-wrapper .mouth .tong2 {
    width: 100px;
    height: 100px;
    background-color: #f00;
    border-radius: 50%;
    border-top: 5px solid #000;
    bottom: -45px;
    right: -10px;
}
.face .mouth-wrapper .lip {
    width: 380px;
    height: 280px;
    bottom: 70px; 
    background-color: #fff;
    border-radius: 50%;
    left: 20px;
    border-bottom: 10px solid #000;
}

.face .mouth-wrapper .line {
    width: 50px;
    height: 20px;
    border-radius: 50%;
    border-top: 5px solid #000;
    top: 5px;
}
.face .mouth-wrapper .line.left {
    left: 0px;
    transform: rotate(-20deg);
}
.face .mouth-wrapper .line.right {
    right: 0px;
    transform: rotate(20deg);
}

.eyes {
    width: 160px;
    height: 190px;
    left: 180px;
    top: 130px;
}
.eyes .eye {
    width: 75px;
    height: 180px;
    border-width: 3px 7px;
    border-radius: 50%;
    border-style: solid;
    overflow: hidden;
}
.eyes .eye.left {
    left: 0;
    transform: rotate(-5deg);
}
.eyes .eye.right {
    right: 0;
    transform: rotate(5deg);
}
.eyes .eye.left .pupil {
    width: 35px;
    height: 65px;
    background-color: #000;
    border-radius: 50%;
    bottom: 0px;
    left: 15px;
    transform: rotate(-5deg);
}
.eyes .eye.right .pupil {
    width: 35px;
    height: 65px;
    background-color: #000;
    border-radius: 50%;
    bottom: 0px;
    right: 15px;
    transform: rotate(5deg);
}
@keyframes lEyelidTop {
    0%{
        top: -135px;
    }
    4%{
        top: 0px;
    }
    8%{
        top: -135px;
    }
    100%{
        top: -135px;
    }
}
.eyes .eyelidTop {
    width: 60px;
    height: 130px;
    border-bottom: 4px solid #000;
    background-color: #f5f5f5;
    top: -135px;
    animation-delay: 0.1s;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-name: lEyelidTop;
    animation-play-state: running;
    animation-timing-function: linear;
}
@keyframes lEyelidBottom {
    0% {
        bottom: -45px;
    }

    4% {
        bottom: 0;
    }

    8% {
        bottom: -45px;
    }

    100% {
        bottom: -45px;
    }
}
.eyes .eyelidBottom {
    width: 60px;
    height: 45px;
    border-top: 4px solid #000;
    background-color: #f5f5f5;
    bottom: -45px;
    animation-delay: 0.1s;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-name: lEyelidBottom;
    animation-play-state: running;
    animation-timing-function: linear;
}

.topNose {
    width: 140px;
    height: 50px;
    left: 190px;
    border-top: 8px solid #000;
    border-radius: 50%;
    top: 290px;
    background-color: #fff;
}
@keyframes rotatingNose {
    0%{
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(5deg);
    }
    50% {
        transform: rotate(0deg);
    }
    75% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
.nose {
    width: 155px;
    height: 85px;
    border-radius: 50%;
    background-color: #000;
    left: 182.5px;
    top: 320px;
}
.nose:hover {    
    animation-duration: 120ms;
    animation-name: rotatingNose;
    animation-play-state: running;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

}`
let n = 0
let time = 200
const run = () => {
        if ( n >= css.length) {
            window.clearInterval(id)
            return
        }
        n += 1
        code.innerText = css.substr( 0 , n)
        styleCss.innerHTML = css.substr( 0 , n)
        code.scrollTop = 100000
}
let id = setInterval(run, time)
const speeds = {
    '200': 1,
    '100': 2,
    '50': 3,
    '25': 4,
    '12.5': 5,
    '6.25': 6
}
const resetSpeed = () => {
    for (key in speeds){
        speed.innerText = '速度: ' + speeds[time]
    }
    window.clearInterval(id)
    id = setInterval(run, time)
}

speedUp.onclick = () => {
    if (time > 10){
        time /= 2
        resetSpeed()
    }
}

speedDown.onclick = () => {
    if (time < 200) {
        time *= 2
        resetSpeed()
    }
}
