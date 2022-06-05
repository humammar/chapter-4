// const paragraf1 = document.getElementById("p1");
// paragraf1.innerText = "Haloo";

// const paragraf2 = document.getElementsByName("p2");
// paragraf2.bacground-color;

// let button1 = document.getElementById('button1');
// button1.onclick = function () {
//     alert("button 1 clicked");
//     if (color === "yellow") {
//         paragraf1.style.backgroundColor = "red";
//         color = 'red';
//     } else {
//         paragraf1.style.backgroundColor = "yellow";
//         color = 'yellow';
//     }
   
// };

// let button2 = document.getElementById('button2');
// button2.addEventListener('click', () ==> {
//     alert("button 2 clicked");
//     paragraf1.style.backgroundColor = "red";
// });

const button = document.getElementById("add");
const paragraf1 = document.getElementById("p1")


button.onclick = function(){
    const parent = document.getElementById('wrapper');
    
    let clonedElement = paragraf1.cloneNode(true);
    parent.append(clonedElement);

    parent.appendChild(newElement);
    
}