$(function(){
  carregaJsonPedido();
});

function novaLinhaPedido(id, data, sizeProdutos){
    var linha = $("<tr>");
    var colunaNumeroPedido = $("<td>").text("#"+ (parseInt(id)+1));
    var colunaData = $("<td>").text(dataAtualFormatada(new Date(data)));
    var colunaQtd = $("<td>").text(sizeProdutos);
    var colunaEditar = $("<td>");
    var colunaRemover = $("<td>");
    
    var linkRemover = $("<a>").addClass("botao-remover").attr("href", "#");
    var iconeRemover = $("<i>").addClass("small").addClass("material-icons").text("delete");
    
    var linkEditar = $("<a>").addClass("botao-editar").attr("href", "#");
    var iconeEditar = $("<i>").addClass("small").addClass("material-icons").text("edit");
    
    linkRemover.append(iconeRemover);
    linkEditar.append(iconeEditar);
    
    colunaRemover.append(linkRemover);
    colunaEditar.append(linkEditar);
    
    
    linha.append(colunaNumeroPedido);
    linha.append(colunaData);
    linha.append(colunaQtd);
    linha.append(colunaEditar);
    linha.append(colunaRemover);
    
    return linha;
}

function carregaJsonPedido(){
    $.get("http://localhost:3000/pedidos", function(data){
        $(data).each(function(){
            var data = this.data;
            var id = this._id;
            var sizeProdutos = Object.keys(this.produtos).length;
            var linha = novaLinhaPedido(id, data, sizeProdutos);

            linha.find(".botao-remover").click(removeLinha);
            $(".tabelaPedidos").append(linha);
        });
    });
}

function removeLinha() {
    event.preventDefault();
    var linha = $(this).parent().parent();

    linha.fadeOut(1000);
    setTimeout(function() {
        linha.remove();
    }, 1000);
}

function dataAtualFormatada(data){
    var dia = data.getDate();
    if (dia.toString().length == 1)
      dia = "0"+dia;
    var mes = data.getMonth()+1;
    if (mes.toString().length == 1)
      mes = "0"+mes;
    var ano = data.getFullYear();  
    return dia+"/"+mes+"/"+ano;
}