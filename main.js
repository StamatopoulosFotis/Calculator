"use strict";


function display(number){

    document.getElementById("textarea").value += number;



}

function calculate(){

let text = document.getElementById("textarea").value;

let answer = eval(text);

document.getElementById("textarea").text = answer;

}

function clr(){

document.getElementById("textarea").text = " ";

}