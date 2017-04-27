$(function(){
    $(".botao-cancelar").click(limpaForm);
});



function limpaForm(){
    document.getElementById("form-adiciona-vendedor").reset();
}