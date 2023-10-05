const buttonEl = document.querySelectorAll("button"); //Şimdi bütün butonları yakaladım.

buttonEl.forEach((button) => {
    button.addEventListener("click" , () => {
        console.log("User choise!", button.id,  //Buraya fonksiyon eklicektim en son, orda kaldım
        "Computer choise!", computerPlay()
        );
    });
});

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}