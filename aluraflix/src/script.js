var nomeSeriePergunta = prompt("Escolha uma série: 1 - The Boys | 2 - American Gods | 3 - Black Mirror")

var sinopseSerie = ["SINOPSE: Em The Boys, quando a fama sobe à cabeça, alguns super-heróis passam a se corromper e usar seu status para se promoverem ainda mais, o que pode colocar em risco a própria população. Uma equipe da CIA foi, então, preparada para cuidar do caso. Conhecidos como The Boys, os agentes têm a missão de vigiar o trabalho dessas personalidades, assim como controlar o surgimento de novos heróis.", "SINOPSE: American Gods acompanha a guerra entre os velhos e os novos deuses. Os seres bíblicos e mitológicos estão perdendo cada vez mais fiéis para novas entidades, que refletem o amor da sociedade por dinheiro, tecnologia, celebridades e drogas. Shadow Moon (Ricky Whittle) é um ex-vigarista que agora serve como segurança e companheiro de viagem para o Sr. Wednesday (Ian McShane), um homem fraudulento que é, na verdade, um dos antigos deuses. Wednesday tem uma missão a cumprir na Terra: reunir forças para lutar contra os ídolos que tomaram não só o seu lugar, como também o de seus companheiros.", "SINOPSE: Uma espécie de híbrido entre 'The Twilight Zone' e 'Tales of the Unexpected', Black Mirror explora sensações do mal-estar contemporâneo. Cada episódio conta uma história diferente, traçando uma antologia que mostra o lado negro da vida atrelada à tecnologia."]

var nomeSerie = ["The Boys", "American Gods", "Black Mirror"]

var series = ["https://m.media-amazon.com/images/M/MV5BNGEyOGJiNWEtMTgwMi00ODU4LTlkMjItZWI4NjFmMzgxZGY2XkEyXkFqcGdeQXVyNjcyNjcyMzQ@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYmJlOTRkYzktMDIxYy00MjFlLTlkOWYtZjVkNmY5MWMyNzU1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

//for(var i=0; i < 3; i++){
 // document.write("<img src=" + series[i] + ">")
  
 if(nomeSeriePergunta == 1){
    document.write("<img src=" + series[0] + ">")
    document.write("<h2>" + nomeSerie[0] + "</h2>")
    document.write("<h3>" + sinopseSerie[0] + "</h3>")
   
 } else if(nomeSeriePergunta == 2) {
    document.write("<img src=" + series[1] + ">")
    document.write("<h2>" + nomeSerie[1] + "</h2>")
    document.write("<h3>" + sinopseSerie[1] + "</h3>")
  
} else if(nomeSeriePergunta == 3) {
    document.write("<img src=" + series[2] + ">")
    document.write("<h2>" + nomeSerie[2] + "</h2>")
    document.write("<h3>" + sinopseSerie[2] + "</h3>")
  
} else{
    document.write("<h2>Escolha uma opção válida<\h2>")
}