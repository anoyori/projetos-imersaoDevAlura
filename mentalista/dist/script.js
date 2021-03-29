var numeroSecreto = parseInt(Math.random()*10)
var tentativas = 3
//alert(numeroSecreto)

while(tentativas > 0){
    var chute = parseInt(prompt("Digite um número entre 1 e 10. Ou digite 0 para sair do jogo "))

    if(chute == numeroSecreto){
      alert("Você acertou!")
      break
      
    } else if(chute > numeroSecreto) {
      alert("O número secreto é menor")
      tentativas = tentativas - 1 
      
    } else if(chute < numeroSecreto) {
      alert("O número secreto é maior")
      tentativas = tentativas - 1 
    }
    else if(chute == 0){
      alert("Você saiu do jogo")
    }
}
  
 if(chute != numeroSecreto) {
      alert("Você não acertou. O número secreto era " + numeroSecreto)
    }