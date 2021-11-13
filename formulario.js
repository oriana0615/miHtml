//validação do formulario//

function enviar(){
let email = document.querySelector("#email").value;
let nome = document.querySelector("#nome").value;

if(nome==""|| email==""){
    return alert("tem que preencher os campos!")

}else if (!email.includes("@")){
    alert("coloque um email válido.")
    return
}
}



