var nombre_inc = 10;
var nombre_entre;
nombre_entre = prompt("quel est l'inconnu")
if(nombre_entre > nombre_inc){ alert("trop grand"); }
    if(nombre_entre < nombre_inc){alert("trop petit")}
        if (nombre_entre == nombre_inc){alert("c'est top"); }
 

        var n;
var resultat;
var compteur =0;
resultat = 0;
n = prompt("veuillez entrer un nombre n = ");
while(resultat < 1000){
    resultat = n*compteur;
    compteur = compteur +1;
    document.write(resultat + "<br>")
}