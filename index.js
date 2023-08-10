
document.getElementById("inscription").addEventListener("submit", function(e){    
    var erreur;
    var First = document.getElementById("First");
    var Last = document.getElementById("Last");
    var hg = document.getElementById("hg");
    var  Number = document.getElementById("Number");
    var Age = document.getElementById("Age");
    var Male = document.getElementById("Male");
    var Female = document.getElementById("Female");
    var country= document.getElementById("country");
    
    
    if (!country.value) {
        erreur = "Veuillez renseigner un country";
    }
    if (!Age.value) {
        erreur = "Veuillez renseigner un Age";
    }
    if (!Number.value) {
        erreur = "Veuillez renseigner un Number";
    }
    if (!hg.value) {
        erreur = "Veuillez renseigner un email";
    }
    if (!Last.value) {
        erreur = "Veuillez renseigner un Last";
    } 
    if (!First.value) {
        erreur = "Veuillez renseigner un First";
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur
        return false;
    } else {
        alert('Formulaire envoye !'); 

    
}
    
});
//  if (!Email.value) {
    //      erreur = "Veuillez renseigner un Email";
    //  }
    
   
    // if (!Male.value) {
    //     erreur = "Veuillez renseigner un Male";
    // }
    // if (!Female.value) {
    //     erreur = "Veuillez renseigner un Female";
    // }
    // var inputs = document.getElementsByTagName("input")
    
    // for (var i = 0; i <inputs.length; i++){
    //     if(!inputs[i].value){
    //         erreur = "Veuillez renseigner tous les champs";
    //     }
    // }
    
    














// const nos = document.querySelector(".nos");
// const B = document.querySelector(".B");
// const D = document.querySelector(".D");
// const C = document.querySelector(".C");
// nos.addEventListener("click", () => {
//     B.style.display = "none";
//     D.style.display = "flex";
//     C.style.display = "none";
// });
// const not = document.querySelector(".not");
// not.addEventListener("click", () => {
//     B.style.display = "flex";
//     D.style.display = "none";
//     C.style.display = "none";
// });
// const nom = document.querySelector(".nom");
// nom.addEventListener("click", () => {
//     C.style.display = "flex";
//     B.style.display = "none";
//     D.style.display = "none";
// });

// const mo = document.querySelector(".mo");
// mo.addEventListener("click", ()=> {
//  B.style.display = "none";
//  D.style.display = "flex";
//  C.style.display = "none";  
// });
// const mot = document.querySelector(".mot");
// mot.addEventListener("click", ()=> {
//  B.style.display = "flex";
//  D.style.display = "none";
//  C.style.display = "none";  
// });
// const mob = document.querySelector(".mob");
// mob.addEventListener("click", ()=> {
//  B.style.display = "none";
//  D.style.display = "none";
//  C.style.display = "flex";  
// });

// const U = document.querySelector(".U");
// U.addEventListener("click", ()=> {
//  B.style.display = "none";
//  D.style.display = "flex";
//  C.style.display = "none";  
// });
// const UR = document.querySelector(".UR");
// UR.addEventListener("click", ()=> {
//  B.style.display = "flex";
//  D.style.display = "none";
//  C.style.display = "none";  
// });
// const URM = document.querySelector(".URM");
// URM.addEventListener("click", ()=> {
//  B.style.display = "flex";
//  D.style.display = "none";
//  C.style.display = "none";  
// });

// const violet = document.querySelector(".violet");
// B.style.display = "none";
//  D.style.display = "flex";
//  C.style.display = "none";
// violet.addEventListener("click", () => {
//     B.style.display = "flex";
//     D.style.display = "none";
//     C.style.display = "none";
// });
// violet.addEventListener("click", () => {
//     C.style.display = "none";
//     B.style.display = "flex";
//     D.style.display = "none";
// });
// const DJ = document.querySelector(".DJ");
// B.style.display = "none";
//  D.style.display = "flex";
//  C.style.display = "none";
//  DJ.addEventListener("click", () => {
//     B.style.display = "flex";
//     D.style.display = "none";
//     C.style.display = "none";
// });
// DJ.addEventListener("click", () => {
//     C.style.display = "none";
//     B.style.display = "none";
//     D.style.display = "flex";
// });
// const rose = document.querySelector(".rose");
// B.style.display = "none";
//  D.style.display = "flex";
//  C.style.display = "none";
//  rose.addEventListener("click", () => {
//     B.style.display = "flex";
//     D.style.display = "none";
//     C.style.display = "none";
// });
// rose.addEventListener("click", () => {
//     C.style.display = "flex";
//     B.style.display = "none";
//     D.style.display = "none";
// });
// const v = document.querySelector(".v");
// B.style.display = "none";
//  D.style.display = "flex";
//  C.style.display = "none";
//  v.addEventListener("click", () => {
//     B.style.display = "flex";
//     D.style.display = "none";
//     C.style.display = "none";
// });
// v.addEventListener("click", () => {
//     C.style.display = "none";
//     B.style.display = "flex";
//     D.style.display = "none";
// });


