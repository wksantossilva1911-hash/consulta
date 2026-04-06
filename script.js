const resultado = document.getElementById("resultado");

function mostrar(data) {
  resultado.textContent = JSON.stringify(data, null, 2);
}

async function consultarIP() {
  let ip = document.getElementById("input").value;

  let res = await fetch(`http://ip-api.com/json/${ip}`);
  let data = await res.json();

  mostrar(data);
}

async function consultarCEP() {
  let cep = document.getElementById("input").value;

  let res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  let data = await res.json();

  mostrar(data);
}

async function consultarCPF() {
  let cpf = document.getElementById("input").value;

  let res = await fetch(`http://ghostcenter.xyz/api/cpf/${cpf}`);
  let data = await res.json();

  mostrar(data);
}
