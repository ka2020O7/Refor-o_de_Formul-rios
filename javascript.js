function validar() {

    var form = document.forms["formulario"];

    if (form["nome"].value == "") {
        alert("Por favor, preencha o Nome Completo");
        return false;
    }

    if (form["data"].value == "") {
        alert("Por favor, preencha a Data de Nascimento");
        return false;
    }

    if (!form["estadocivil"].value) {
        alert("Por favor, selecione o Estado Civil");
        return false;
    }

    if (!form["genero"].value) {
        alert("Por favor, selecione o Gênero");
        return false;
    }

    if (form["nacionalidade"].value == "") {
        alert("Por favor, preencha a Nacionalidade");
        return false;
    }

    if (form["endereco"].value == "") {
        alert("Por favor, preencha o Endereço Completo");
        return false;
    }

    if (form["bairro"].value == "") {
        alert("Por favor, preencha o Bairro");
        return false;
    }

    if (form["cidade"].value == "") {
        alert("Por favor, preencha a Cidade");
        return false;
    }

    if (form["estado"].value == "") {
        alert("Por favor, selecione o Estado");
        return false;
    }

    if (form["email"].value == "") {
        alert("Por favor, preencha o E-mail");
        return false;
    }

    if (form["cargo"].value == "") {
        alert("Por favor, preencha o Cargo Pretendido");
        return false;
    }

 
    if (form["experiencia"].value == "") {
        alert("Por favor, preencha a Experiência Profissional");
        return false;
    }

    if (form["escolaridade"].value == "") {
        alert("Por favor, selecione o Nível de Escolaridade");
        return false;
    }
    if (form["disponibilidade"].value == "") {
        alert("Por favor, selecione a Disponibilidade para Viagens");
        return false;
    }
    alert("Formulário válido! Enviando...");
    return true;
}

document.forms["formulario"].onsubmit = function(event) {
    if (!validar()) {
        event.preventDefault();
    }
};

console .log (validar)