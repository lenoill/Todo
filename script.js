//variables
const table = [];
let i = 0;

//ajouter un élement dans la table et met à jour l'affichage
function addShow(){
    
    let input1 = document.getElementById('todo').value;
    if(input1 === ""){
        alert("Faut écrire un truc gamin!")
    }else{
        //réinitialise la liste à chaque ajout
    document.getElementById("list").innerHTML = "";

    //ajout l'input à la table et l'affiche à l'écran
    table.push(input1);
    for(i=0 ; i<table.length ; i++){
        document.getElementById("list").innerHTML += "<li>"+table[i]+"<div class='lines' onclick='delShow(this)' id="+i +">&#10006</div>"+"</li>";
    }    
    //vide la valeur de l'input
    document.getElementById('todo').value = "";
    }
}

//Supprime un élément de la table et met à jour l'affichage
function delShow(x){
    //on trouve l'id de la croix cliquée
    let index1 = x.id;
    //on la supprime de la table
    table.splice(index1,1);
    //on met à jour la liste à partir de la table
    document.getElementById("list").innerHTML = "";
    for(i=0 ; i<table.length ; i++){
        document.getElementById("list").innerHTML += "<li>"+table[i]+"<div class='lines' onclick='delShow(this)' id="+i +">&#10006</div>"+"</li>";

    //vide la valeur de l'input (utile pour quand on supprime une entrée avec la fonction search)
    document.getElementById('todo').value = "";
    }  
}

//à chaque frappe, on cherche si le mot est inclus dans chaque élément de la table et dans ce cas, il met à jour l'affichage
function search(){
    //réinitialise la liste à chaque ajout
    document.getElementById("list").innerHTML = "";

    word = document.getElementById('todo').value;

    table.forEach(element => {
        if(element.includes(word)){
            document.getElementById("list").innerHTML += "<li>"+element+"<div class='lines' onclick='delShow(this)' id="+element.id +">&#10006</div>"+"</li>";
        }
    });
}