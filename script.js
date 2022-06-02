const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

 // Que Dias & Horas são Hoje
 let data = new Date();
 console.log(data);

 // Converte Horas corretamente para Graus em um circulo
 let hr = data.getHours(); //Dividindo por 12 e adicionando a sóma.
 let min = data.getMinutes(); //Dividindo-os por 60 e depois somamos o que deve ser movido para frente.
 let seg = data.getSeconds(); //Para segundos precissamos de 60 Passos para completa um circulo || Dividir 360• Do circulo por 60;
 console.log("Hora: " + hr + " Minutos: " + min + " Segundos:" + seg);

 let posicaoHr = (hr*360/12)+(min*(360/60)/12)
 let posicaoMin = (min*360/60)+(seg*(360/60)/60);
 let posicaoSeg = seg*360/ 60;

function executarRelogio() {

  posicaoHr = posicaoHr+(3/360)
  posicaoMin = posicaoMin+(6/60);
  posicaoSeg = posicaoSeg+6;

  // "rotatedeg" === Girar Graus
  PONTEIROHORA.style.transform = "rotate(" + posicaoHr + "deg)";
  PONTEIROMINUTO.style.transform = "rotate(" + posicaoMin + "deg)";
  PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSeg + "deg)";
}

let intervalo = setInterval(executarRelogio, 1000);
