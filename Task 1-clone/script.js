
const button = document.getElementById("add");
const paragraf1 = document.getElementById("p1");
let idNumber = 2;


button.onclick = function(){
    const parent = document.getElementById('wrapper');
    
    let clonedElement = paragraf1.cloneNode(true);

    clonedElement.id ="p" +idNumber; ++idNumber;

    parent.append(clonedElement);

    // parent.appendChild(newElement);
    
}