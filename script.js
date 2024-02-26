document.getElementById("calcular").addEventListener("click", CalcularIMC);
const respostaImc = document.querySelector(".respostaImc");
const tabela = document.querySelector(".table-group-divider");

function CalcularIMC() {
  let inputPeso = parseFloat(document.getElementById("peso").value);
  let inputAltura = parseFloat(document.getElementById("altura").value);
  let imc = inputPeso / (inputAltura * inputAltura);

  for(let i = 0; i < tabela.children.length; i++){
    if(tabela.children[i].classList.contains("table-success")){
      tabela.children[i].classList.remove("table-success");
    }
  }
  
  console.log(imc);
  
  if (isNaN(imc) || inputPeso === 0 || inputAltura === 0) {
    respostaImc.innerHTML = `Por favor, preencha os campos corretamente.`;
    return;
  } else if (imc < 18.5) {
    respostaImc.innerHTML = `Seu IMC é ${imc.toFixed(
      2
    )} </br> Você está Abaixo do Peso.`;
    tabela.children[0].classList.add("table-success");
  } else if (imc >= 18.5 && imc <= 24.9) {
    respostaImc.innerHTML = `Seu IMC é ${imc.toFixed(
      2
    )} </br> Você está com o Peso Normal.`;
    tabela.children[1].classList.add("table-success");
  } else if (imc >= 25 && imc <= 29.9) {
    respostaImc.innerHTML = `Seu IMC é ${imc.toFixed(
      2
    )} </br> Você está com Sobrepeso.`;
    tabela.children[2].classList.add("table-success");
  } else if (imc >= 30 && imc <= 34.9) {
    respostaImc.innerHTML = `Seu IMC é ${imc.toFixed(
      2
    )} </br> Você está com Obesidade Grau I.`;
    tabela.children[3].classList.add("table-success");
  } else if (imc >= 35 && imc <= 39.9) {
    respostaImc.innerHTML = `Seu IMC é ${imc.toFixed(
      2
    )} </br> Você está com Obesidade Grau II.`;
    tabela.children[4].classList.add("table-success");
  } else if (imc >= 40) {
    respostaImc.innerHTML = `Seu IMC é ${imc.toFixed(
      2
    )} </br> Você está com Obesidade Grau III.`;
    tabela.children[5].classList.add("table-success");
  }
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("peso").focus();
 

  return imc;
}
