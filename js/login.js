$(function(){
  carregaJsonUsuarios();
});



function carregaJsonUsuarios(){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/login", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
    userID: 08819958430,
        password: 123456
    }));
    
    $.get("http://localhost:3000/usuarios", function(data){
        $(data).each(function(){
            var username = this.cpf_cnpj;
            var senha = this.senha;

            $(".botao-login").click(function(){
                var login = $(".campo-login").val();
                var input_senha = $(".campo-senha").val();
                
                if(cpfOuCnpjValido(login)){
                    if(login == username){
                         if(input_senha == senha){
                            cpfOuCnpj(login);
                         } else if(input_senha != senha){
                            Materialize.toast("Senha Errada", 4000);
                         }
                    } else{
                        Materialize.toast("CNPJ ou CPF Inválido - Use somente números", 5000);
                    }
                }
            });
        });
    });
}
          
function cpfOuCnpjValido(input_val){
        tamanho = input_val.length;
        if(($.isNumeric(input_val)) && (tamanho == 11 || tamanho == 14)){
            return true;
        }
        return false;
}

function cpfOuCnpj(input_val){
        if(tamanho == 11){
            window.location.href = "principal.html";
        }else if(tamanho == 14){
            window.location.href = "administrador.html";
        }
}