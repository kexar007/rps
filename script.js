
const result1 = document.querySelector("#result1");
const footertext = document.querySelector("#footer");
const titletext= document.querySelector("#title");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


rock.addEventListener("click", (event) => {
    match("rock");
  });

  paper.addEventListener("click", (event) => {
    match("paper");
  });

scissors.addEventListener("click", (event) => {
    match("scissors");
  });








function match(player){

    let b = choice();
    let a = player;
    a= a.length
    b=b.length;
    console.log(b);
    if (a===b){
        result1.innerHTML="PC chose same it's a tie";        
    };
    

    if ((a===4)&&(b===5)) {
        result1.innerHTML="PC chose paper, you lose."; 
    };

    if ((a===4)&&(b===8)) {
        result1.innerHTML="PC chose Scissors, you win."; 
    };


    if ((a===5)&&(b===4)) {
        result1.innerHTML="PC chose rock, you win."; 
    };

    if ((a===5)&&(b===8)) {
        result1.innerHTML="PC chose Scissors, you lose."; 
    };


    if ((a===8)&&(b===4)) {
        result1.innerHTML="PC chose rock, you lose."; 
    };

    if ((a===8)&&(b===5)) {
        result1.innerHTML="PC chose paper, you win."; 
    };

}



function choice() {
    let a = Math.floor(Math.random()*10);
    console.log("random="+a);
    if (a>=8) {
        return "scissors";
        
    };
    if (a<=3) {
        return "rock";
        
    } ;
    if (4<=a<=5) {
        return "paper";
        
    };
   
      
};


