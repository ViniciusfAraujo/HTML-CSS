const botaoAlteraTema = document.getElementById("botao-altera-tema")
const body = document.querySelector('body')
const imgBotaoTema = document.querySelector(".img-botao")

botaoAlteraTema.addEventListener("click", () => {
    const modoEscuroativo = body.classList.contains("modo-escuro")
    if(modoEscuroativo){
        body.classList.remove("modo-escuro")

        imgBotaoTema.setAttribute("src", "./sun.png")

    }else{
        body.classList.add("modo-escuro")

        imgBotaoTema.setAttribute("src", "./moon.png")
    }
   
})