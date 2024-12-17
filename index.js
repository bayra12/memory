// DOM Methods
// getElementById("id")
// getElementsByTagName("name")
// getElementsByClassName("className")
// setAttribute(attribute , value) change attribute
// createElement(element) create aa HTML element
// removeChild(element) Remove an
// appendChild(element) add
// replaceChild(new, old) replace
// write(text)
// document.getElementById(id).onclick = function(){code}   add event handlers
// querySelectorAll("
// ")

// DOM Property
// innerHTML  change or get content
// attribute  change or get attribute
// style.property change or get style
// onclick=script

// DOM Navigate
// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

// Examples

// document.getElementById("p2").style.color = "blue";
// document.getElementById("myBtn").onclick = displayDate;
// document.getElementById("myBtn").addEventListener("click", displayDate);
// element.addEventListener("click", function(){ alert("Hello World!"); });
// element.removeEventListener("mousemove", myFunction);
// Most browsers return a NodeList object for the method querySelectorAll().

// DOM
// Document

// Exercise
// 1. Create folder DOM_lesson
// 2. index.html , index.js
// 3. index.html  1 shirheg div, script tag-tai
// 4. create new P tag and give innerHTML context and append parent DIV with it.
// 5. Use replace it with div tag

document.body.style.width = "100%";
document.body.style.textAlign = "center";

const game = document.getElementById("game-container");
const tag = document.createElement("p");
tag.innerHTML = "P tag";

document.getElementById("game-container").appendChild(tag);

const element = document.createElement("div");
element.innerHTML = "Login";

document.getElementById("game-container").replaceChild(element, tag);

element.style.color = "black";
element.style.fontSize = "50px";

const input = document.createElement("input");
document.getElementById("game-container").appendChild(input);
input.style.padding = "3px";
input.style.marginTop = "15px";
input.addEventListener("keydown", ()=> {
    if (input.value.includes("@")){
        console.log(true);
    }
    else {
        console.log(false)
    }
})

const input1 = document.createElement("input");
document.getElementById("game-container").appendChild(input1);
input1.style.display = "flex";
input1.style.padding = "3px";
input1.style.marginTop = "15px";
input1.addEventListener("click", ()=> {
    if (input.value.includes("number")){
        console.log(true);
    }
    else {
        console.log(false)
    }
})

const login = document.createElement("button");
document.getElementById("game-container").appendChild(login);
login.innerHTML = "sign in";
login.style.marginTop = "10px";
login.style.color = "green";
login.addEventListener("click", () => {
    if(login.value.includes("correct")){
        console.log(true);
    } else{
        console.log(false);
    }
})


// Exercise
// 1. Create folder DOM_lesson
// 2. index.html , index.js
// 3. index.html  1 shirheg div, script tag-tai
// 4. create new P tag and give innerHTML context and append parent DIV with it.
// 5. Use replace it with div tag
// 6. Create button using p tag and append parent
// 7. Add style attribute in button element button
// 8. Show alert when button clicked by using event listener
// 9. Create p tag that contains "Hello wolrd title" and change the color when element mouseover
// 10. Add class name using classList
