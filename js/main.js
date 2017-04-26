var campoLogin = $(".campo-login");
var campoSenha = $(".campo-senha");

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('select').material_select();
});

$('.datepicker').pickadate({
  labelMonthNext: 'Próximo mês',
  labelMonthPrev: 'Mês anterior',
  labelMonthSelect: 'Selecionar um Mês',
  labelYearSelect: 'Selecionar um Ano',
  monthsFull: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
  monthsShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
  weekdaysFull: [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ],
  weekdaysShort: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab' ],
  weekdaysLetter: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
  today: 'Hoje',
  clear: 'Limpar',
  close: 'Fechar'
});

$(function(){
    validaLogin();
});

function validaLogin(){
    campoLogin.on("input", function(){
        tamanho = campoLogin.val().length;
        if(($.isNumeric(campoLogin.val())) && (tamanho == 11 || tamanho == 14)){
                campoLogin.addClass("valid");
                campoLogin.removeClass("invalid");
                campoSenha.prop("disabled", false);   
            }else{
                campoLogin.addClass("invalid");
                campoLogin.removeClass("valid");
                campoSenha.prop("disabled", true); 
            }
    });
}