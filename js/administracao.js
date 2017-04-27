$(function(){
    $(".botao-cancelar").click(limpaForm);
    $(".botao-adicionar").click(adicionaVendedor);
});

function adicionaVendedor(){
    $.post("http://localhost:3000/usuarios",{
        nome_vendedor: $(".campo-nome").val(),
        cpf_vendedor: $(".campo-cpf").val(),
        email_vendedor: $(".campo-email").val()
    }, function( status){
        alert("Data: " + data + "\nStatus: " + status);
    });
    limpaForm();
}

function limpaForm(){
    document.getElementById("form-adiciona-vendedor").reset();
}