/*ex.09 9.	Recordes el generador de lorem ipsums que vas fer en l’exercici d’arrays? Doncs reaprofita el codi i adapta’l a una funció. Has de seguir les següents normes.

a.	En el HTML hi haurà un botó (el pots fer amb l’etiqueta <button>) que al fer clic demanarà a l’usuari el número de paràgrafs a generar i també el número de paraules de cada paràgraf.

b.	El text generat no es posarà en el document html a partir d’un document.write, si no que ho farà amb la instrucció innerHTML. Buscar informació de com fer-ho.

c.	El document html ha de tenir una mica de CSS: Una font de google fonts, un background, uns margins...*/

var text_lorem = "lorem ipsum dolor sit amet consectetur adipiscing elit Phasellus et felis nec leo efficitur vulputate Praesent id dui cursus imperdiet augue eget sagittis neque Suspendisse potenti Nullam eu purus eros Aliquam enim sem rhoncus non vulputate et convallis vitae leo Ut sed felis eu urna posuere facilisis quis vitae elit Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Proin in pellentesque nisi Etiam faucibus ut dui in pharetra Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Nunc euismod a massa sed laoreet Aenean fringilla augue euismod faucibus suscipit"

var lorem_print = ""; //això és el que s'imprimirà per pantalla

//creem un array de paraules a partir del text original
var array_lorem = text_lorem.split(" "); //separa el text en paraules a partir de l'espai

console.log(array_lorem);

function lorem_generator (){
    var num_paraules = parseInt(prompt("paraules: "));
    var num_paragrafs = parseInt(prompt("paràgrafs: "));

    for (m=0; m<num_paragrafs; m++) {
        for (n = 0; n < num_paraules; n++) { //des de 0 fins a 50 escollim paraules aleatories
            var aleatori = Math.floor((Math.random() * array_lorem.length - 1)); //generem el núm aleatori des de 0 fins al final de l'array
            lorem_print = lorem_print + array_lorem[aleatori] + " "; //concatenem la paraula random actual amb les que ja teniem 
        }
        
        document.getElementById("lorem_usuari").innerHTML += "<p> lorem ipsum " + lorem_print + ".</p>"; //imprimim el resultat per pantalla (+= perque afegeixi cada paragraf i no sobreescrigui sempre l'anterior)
        lorem_print = "";

        /*document.write("<p> lorem ipsum " + lorem_print + ".</p>"); //imprimim el resultat per pantalla
        lorem_print = "";*/
    }

    
}

