let nota1 = 8.5;
let nota2 = 7.0;
let nota3 = 9.2;

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média:", media.toFixed(1));

if (media >= 9) {
  console.log("Nota: A - Excelente");
} else if (media >= 7) {
  console.log("Nota: B - Bom");
} else if (media >= 5) {
  console.log("Nota: C - Regular");
} else if (media >= 3) {
  console.log("Nota: D - Insuficiente");
} else {
  console.log("Nota: F - Reprovado");
}