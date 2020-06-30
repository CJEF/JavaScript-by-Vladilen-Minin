let title = document.getElementById("title");
// let title2 = document.getElementsByClassName("title_2")[0];
// console.log(title2); //  (h2 element) > This is heading 2

// let title2 = document.getElementsByTagName("h2");  
// console.log(title2); // HTMLCollection(2) [h2.hello2, h2]

let title2 = document.querySelector(".title_2")
let titleList = document.querySelectorAll("h2")
// console.log(titleList); // NodeList(2) [h2.hello2, h2]
let title3 = titleList[titleList.length - 1]
// console.log(title3); //  (h2 element) > Another heading


setTimeout(() => {     
    addStylesTo(title, "JavaScript")
}, 1500)

setTimeout(() => {     
    addStylesTo(title2, "Практикуйся", "yellow", "3rem")
}, 2500)

const link = title3.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('click on link', e.target.getAttribute('href')); // click on link https://developer.mozilla.org/ru/docs/Web/Events

    const url = e.target.getAttribute('href');
    window.location = url;
    
})

setTimeout(() => {     
    addStylesTo(link , "И все получиться!", "blue", "4rem")
}, 3500)

function addStylesTo(node, text, color = "red", fontSize) {
    node.style.color = color;
    node.textContent = text;
    node.style.backgroundColor = "black";
    node.style.textAlign = "center";
    node.style.padding = "2rem";
    node.style.display = "block";
    node.style.width = "100%";
    node.style.textDecoration = "none";
    // false : null, undefined, '', 0, false 
    if (fontSize) {
        node.style.fontSize = fontSize;
    }
}

title.onclick = () => {
    if (title.style.color === "red") {
        title.style.color = "#000";
        title.style.backgroundColor = "#fff"
    } else {
        title.style.color = "red";
        title.style.backgroundColor = "#000"
    }
}
title2.addEventListener('dblclick', () => {
    if (title2.style.color === "yellow") {
        title2.style.color = "#000";
        title2.style.backgroundColor = "#fff"
    } else {    
        title2.style.color = "yellow";
        title2.style.backgroundColor = "#000"
    }
})