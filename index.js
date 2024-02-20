function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    // Calcula o resultado real
    let result = eval(document.getElementById("display").value);
    // Exibe a mensagem desejada
    document.getElementById("display").value = "Você é linda";
  } catch (error) {
    document.getElementById("display").value = "Erro";
  }
}
