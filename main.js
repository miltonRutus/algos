var canvas, ctx;
canvas = document.querySelector('#bob_canvas');
ctx = canvas.getContext('2d');

bobEsponja();

// Bob Esponja
function bobEsponja() {
    cuerpo();
    camisa();
    corbata();
    pantalon();
    cinturon();
    ojos();
    iris();
    pupila();
    pestanyas();
    nariz();
    boca();
    dientes();
    mofletes();
    poros();
}

// Cuerpo
function cuerpo() {
    ctx.beginPath();
    ctx.lineWidth = '2.5';
    ctx.strokeRect(100, 100, 400, 450);
    ctx.fillStyle = '#F5EE31';
    ctx.fillRect(100,100, 400, 450);
    ctx.stroke();
    ctx.closePath();
}

// Camisa
function camisa() {
    ctx.beginPath();
    ctx.moveTo(100, 400);
    ctx.lineTo(500, 400);
    ctx.moveTo(100, 475);
    ctx.lineTo(500, 475);
    ctx.fillStyle = 'white';
    ctx.fillRect(100, 400, 400, 75);
    ctx.stroke();
    ctx.closePath();
// Cuello Camisa
    ctx.fillStyle = 'white';
// Solapa Izqda.
    ctx.beginPath();
    ctx.moveTo(200, 400);
    ctx.lineTo(230, 430);
    ctx.lineTo(290, 400);
    ctx.lineTo(200, 400);
// Solapa Dcha.
    ctx.moveTo(320, 400);
    ctx.lineTo(350, 430);
    ctx.lineTo(410, 400);
    ctx.lineTo(320, 400);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
}

// Corbata
function corbata() {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(290, 400);
    ctx.lineTo(305, 440);
    ctx.lineTo(320, 400);
    ctx.lineTo(290, 400);

    ctx.moveTo(305, 440);
    ctx.lineTo(250, 480);
    ctx.lineTo(305, 480);
    ctx.lineTo(360, 480);
    ctx.lineTo(305, 440);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();
}

// Pantalón
function pantalon() {
    ctx.beginPath();
    ctx.fillStyle = '#6A3D13';
    ctx.fillRect(100, 475, 400, 75);
    ctx.closePath();
// Parte inferior corbata
    ctx.beginPath();
    ctx.lineWidth = '2.5';
    ctx.fillStyle = 'red';
    ctx.moveTo(255, 475);
    ctx.lineTo(305, 520);
    ctx.lineTo(355, 475);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

//Cinturón
function cinturon() {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(100, 500, 20, 25);
    ctx.fillRect(130, 500, 50, 25);
    ctx.fillRect(200, 500, 50, 25);
    ctx.fillRect(270, 500, 13, 25);
    ctx.fillRect(340, 500, 50, 25);
    ctx.fillRect(410, 500, 50, 25);
    ctx.fillRect(480, 500, 20, 25);
    ctx.stroke();
    ctx.closePath();
}

// Ojos
function ojos() {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(250, 200, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(345, 200, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

// Iris
function iris() {
    ctx.beginPath();
    ctx.fillStyle = '#00AEEF';
    ctx.arc(250, 200, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = '#00AEEF';
    ctx.arc(345, 200, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

//Pupila
function pupila() {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(250, 200, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(345, 200, 20, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

//Pestañas
function pestanyas() {
    //Pestañas Ojo Izquierdo
    ctx.beginPath();
//Central
    ctx.moveTo(250, 150);
    ctx.lineTo(250, 125);
    ctx.lineWidth = '2.5';
//Izqda.
    ctx.moveTo(225, 155);
    ctx.lineTo(210, 135);
//Dcha.
    ctx.moveTo(275, 155);
    ctx.lineTo(290, 135);
//Pestaña Ojo Derecho
//Central
    ctx.moveTo(345, 150);
    ctx.lineTo(345, 125);
//Izqda.
    ctx.moveTo(325, 155);
    ctx.lineTo(310, 135);
//Dcha.
    ctx.moveTo(365, 155);
    ctx.lineTo(380, 135);
    ctx.stroke();
    ctx.closePath();
}

//Nariz
function nariz () {
    drawEllipse(295, 240, 30, 50, '#F5EE31');
}

//Boca
function boca() {
    ctx.beginPath();
    ctx.moveTo(220, 275);
    ctx.lineWidth = '5';
    ctx.quadraticCurveTo(297.5, 325, 375, 275);
    ctx.stroke();
    ctx.closePath();
}

//Dientes
function dientes() {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.lineWidth = '5';
    ctx.moveTo(300, 275);
    ctx.strokeRect(300, 300, 20, 30);
    ctx.fillRect(300, 300, 20, 30);
    ctx.moveTo(270, 275);
    ctx.strokeRect(270, 300, 20, 30);
    ctx.fillRect(270, 300, 20, 30);
    ctx.stroke();
    ctx.closePath();
}

//Mofletes
function mofletes() {
    ctx.beginPath();
    ctx.fillStyle = '#F1592A';
    ctx.arc(200, 270, 18, 0, 2 * Math.PI);
    ctx.arc(395, 270, 18, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

//Poros
function poros() {
    ctx.beginPath();
    ctx.fillStyle = '#C0A402';
    ctx.arc(150, 150, 18, 0, 2 * Math.PI);
    ctx.arc(450, 150, 16, 0, 2 * Math.PI);
    ctx.moveTo(150, 360);
    ctx.arc(150, 360, 20, 0, 2 * Math.PI);
    ctx.arc(450, 360, 22, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
}

function drawEllipse(centerX, centerY, width, height, color) {

    ctx.beginPath();

    ctx.moveTo(centerX, centerY - height/2);

    // Semi-Elipse Dcha.
    ctx.bezierCurveTo(
            centerX + width/2, centerY - height/2,
            centerX + width/2, centerY + height/2,
        centerX, centerY + height/2);

    // Semi-Elipse Izqda
    ctx.bezierCurveTo(
            centerX - width/2, centerY + height/2,
            centerX - width/2, centerY - height/2,
        centerX, centerY - height/2);

    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}