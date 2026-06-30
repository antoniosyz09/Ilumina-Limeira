const form = document.getElementById("reportForm");
const statusDiv = document.querySelector(".status");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const endereco = form.querySelectorAll("input")[1].value;
    const problema = form.querySelector("select").value;
    const descricao = form.querySelector("textarea").value;
    const fotoInput = form.querySelector('input[type="file"]');

    const novaOcorrencia = document.createElement("div");
    novaOcorrencia.classList.add("report");

    novaOcorrencia.innerHTML = `
        <h3>${endereco}</h3>
        <p>${descricao || problema}</p>
        <span class="badge pendente">Pendente</span>
    `;

    if(fotoInput.files.length > 0){

        const imagem = document.createElement("img");

        imagem.src = URL.createObjectURL(fotoInput.files[0]);
