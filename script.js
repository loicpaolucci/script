// Exercice 1 //

let footer = document.querySelector("footer")
footer.addEventListener("click", function(){
  console.log("Clique")
});

// Exercice 1-bis //

let footerCount = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function(){
  footerCount++;
	console.log(`Clique numero ${footerCount}`);
});

// Exercice 2 //

  document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function(){
  document.getElementById("navbarHeader").classList.toggle("collapse");
});

// Exercice 3 //

let firstCard = document.getElementsByClassName("card-body")[0];
firstCard.getElementsByTagName("button")[1].addEventListener("click", function(){
  firstCard.getElementsByTagName("p")[0].classList.add("text-danger");
});

// Exercice 4 //

let secondCard = document.getElementsByClassName("card-body")[1];
secondCard.getElementsByTagName("button")[1].addEventListener("click", function(){
  secondCard.getElementsByTagName("p")[0].classList.toggle("text-success");
});

// Exercice 5 //

document.getElementsByClassName("collapse")[0].addEventListener("dblclick", function(){
  if (document.getElementsByTagName("link")[0].rel == "stylesheet")          
    document.getElementsByTagName("link")[0].rel = "styleDisabled";
  else
    document.getElementsByTagName("link")[0].rel = "stylesheet";
});

// Exercice 6 // 

let views = document.getElementsByClassName("btn btn-sm btn-success");
for (let i = 0; i < views.length; i++){
  views[i].addEventListener("mouseover" , function(){
    document.getElementsByClassName("card-text")[i].classList.toggle("collapse");
    document.getElementsByClassName("card-img-top")[i].classList.toggle("width-20");
  });
}

// Exercice 7 //

document.getElementsByClassName("jumbotron")[0].getElementsByTagName('a')[1].addEventListener("click", function(){
document.getElementsByClassName("row")[1].prepend(document.getElementsByClassName("col-md-4")[5] );
}); // .prepend fonctionne comme une boucle , le 1er devient 2e , le 2e devient 3eme , etc sa fait une boucle !

