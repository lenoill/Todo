const table = [];
let i = 0;

//add a item at the list
function addShow(){
    
    let input1 = document.getElementById('todo').value;
    if(input1 === ""){
        alert("Faut écrire un truc gamin!")
    }else{
        //reset the list at each add
    document.getElementById("list").innerHTML = "";

    //add the input and show it
    table.push(input1);
    for(i=0 ; i<table.length ; i++){
        document.getElementById("list").innerHTML += "<li>"+table[i]+"<div class='lines' onclick='delShow(this)' id="+i +">&#10006</div>"+"</li>";
    }    
    //delete the input value at each add of a item
    document.getElementById('todo').value = "";
    }
}

//delete a item and update the view
function delShow(x){
    //find the id of the "X"
    let index1 = x.id;
    //delete it from the table
    table.splice(index1,1);
    //update the view from the table
    document.getElementById("list").innerHTML = "";
    for(i=0 ; i<table.length ; i++){
        document.getElementById("list").innerHTML += "<li>"+table[i]+"<div class='lines' onclick='delShow(this)' id="+i +">&#10006</div>"+"</li>";

    //delete the input value at each add of a item (usefull when we delete a item with the search function)
    document.getElementById('todo').value = "";
    }  
}

//at each key press, search if the word is included in any item of the table and update the view
function search(){
    //delete and update the view at each key press
    document.getElementById("list").innerHTML = "";

    word = document.getElementById('todo').value;

    table.forEach(element => {
        if(element.includes(word)){
            document.getElementById("list").innerHTML += "<li>"+element+"<div class='lines' onclick='delShow(this)' id="+element.id +">&#10006</div>"+"</li>";
        }
    });
}