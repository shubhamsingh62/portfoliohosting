let myfunction = () => {   // using arrow function 
    let x = document.getElementById("nav"); 
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}