let text_lorem = "lorem ipsum dolor sit amet consectetur adipiscing elit Phasellus et felis nec leo efficitur vulputate Praesent id dui cursus imperdiet augue eget sagittis neque Suspendisse potenti Nullam eu purus eros Aliquam enim sem rhoncus non vulputate et convallis vitae leo Ut sed felis eu urna posuere facilisis quis vitae elit Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Proin in pellentesque nisi Etiam faucibus ut dui in pharetra Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae Nunc euismod a massa sed laoreet Aenean fringilla augue euismod faucibus suscipit"

let lorem_print = ""; //això és el que s'imprimirà per pantalla

//creem un array de paraules a partir del text original
let array_lorem = text_lorem.split(" "); //separa el text en paraules a partir de l'espai

console.log(array_lorem);



function captura() {
    let recogePalabras = document.getElementById("palabras").value;
    let recogeParrafos = document.getElementById("parrafos").value;

    /* console.log(recogePalabras, recogeParrafos); */

    for (i=0; i < recogeParrafos; i++) {
        for (p=0; p < recogePalabras; p++) {
            let aleatorio = Math.floor((Math.random() * array_lorem.length -1));

            lorem_print = lorem_print + array_lorem[aleatorio] + " ";
        }

        document.getElementById("user_lorem").innerHTML += "<p> lorem ipsum " + lorem_print + ".</p>";

        lorem_print = "";

        if (recogePalabras && recogeParrafos) {
            window.scroll({
                top: 970
            });
        }
    }
}