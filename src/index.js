//Classificador de nível de Herói
let nickName = "Thor";
let xp = 0;
let nivel = "";

if (xp <= 1000) {
  nivel = " está no nível de Ferro";
} else if (xp <= 2000) {
  nivel = " está no nível de Bronze";
} else if (xp <= 5000) {
  nivel = " está no nível de Prata";
} else if (xp <= 7000) {
  nivel = " está no nível de Ouro";
} else if (xp <= 8000) {
  nivel = " está no nível de Platina";
} else if (xp <= 9000) {
  nivel = " está no nível Ascedente";
} else if (xp <= 10000) {
  nivel = " está no nível Imortal";
} else if (xp >= 10000) {
  nivel = " está no nível Radiante";
}

console.log("O Herói " + nickName + nivel);
