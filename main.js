

function pluss(x,y) {
    return x+y;
    
}
document.getElementById("pluss").innerHTML = "Addition: " + pluss(2,2);

function minus(n1,n2) {
    return (n1-n2);
}
document.getElementById("minus").innerHTML = "Subtraction: " + minus(2,2);

function gange(n3,n4) {
    return n3*n4;
}
document.getElementById("gange").innerHTML = "Multiplication: " + gange(2,2);

function dele(n5,n6) {
    return n5/n6;
}

document.getElementById("dele").innerHTML = "Division: " + dele(2,2);
