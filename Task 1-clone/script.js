
const button = document.getElementById("add");
const paragraf1 = document.getElementById("p1")


button.onclick = function(){
    const parent = document.getElementById('wrapper');
    
    let clonedElement = paragraf1.cloneNode(true);
    parent.append(clonedElement);

    parent.appendChild(newElement);
    
}