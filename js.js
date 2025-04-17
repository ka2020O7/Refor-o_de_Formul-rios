function validar() {
    // Pegar o formulário
    var form = document.forms["formulario"];

    // Verificar Nome
    if (form["nome"].value == "") {
        alert("Por favor, preencha o Nome Completo");
        return false;
    }

    // Verificar Data de Nascimento
    if (form["data"].value == "") {
        alert("Por favor, preencha a Data de Nascimento");
        return false;
    }

    // Verificar Estado Civil
    if (!form["estadocivil"].value) {
        alert("Por favor, selecione o Estado Civil");
        return false;
    }

    // Verificar Gênero
    if (!form["genero"].value) {
        alert("Por favor, selecione o Gênero");
        return false;
    }

    // Verificar Nacionalidade
    if (form["nacionalidade"].value == "") {
        alert("Por favor, preencha a Nacionalidade");
        return false;
    }

    // Verificar Endereço
    if (form["endereco"].value == "") {
        alert("Por favor, preencha o Endereço Completo");
        return false;
    }

    // Verificar Bairro
    if (form["bairro"].value == "") {
        alert("Por favor, preencha o Bairro");
        return false;
    }

    // Verificar Cidade
    if (form["cidade"].value == "") {
        alert("Por favor, preencha a Cidade");
        return false;
    }

    // Verificar Estado
    if (form["estado"].value == "") {
        alert("Por favor, selecione o Estado");
        return false;
    }

    // Verificar E-mail
    if (form["email"].value == "") {
        alert("Por favor, preencha o E-mail");
        return false;
    }

    // Verificar Cargo
    if (form["cargo"].value == "") {
        alert("Por favor, preencha o Cargo Pretendido");
        return false;
    }

    // Verificar Experiência
    if (form["experiencia"].value == "") {
        alert("Por favor, preencha a Experiência Profissional");
        return false;
    }

    // Verificar Escolaridade
    if (form["escolaridade"].value == "") {
        alert("Por favor, selecione o Nível de Escolaridade");
        return false;
    }

    // Verificar Disponibilidade
    if (form["disponibilidade"].value == "") {
        alert("Por favor, selecione a Disponibilidade para Viagens");
        return false;
    }

    // Se tudo estiver preenchido, permitir o envio
    alert("Formulário válido! Enviando...");
    return true;
}

// Quando clicar no botão, validar o formulário
document.forms["formulario"].onsubmit = function(event) {
    if (!validar()) {
        event.preventDefault(); // Não envia se tiver erro
    }
};