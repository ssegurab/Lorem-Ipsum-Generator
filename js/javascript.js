let text_lorem = "lorem ipsum dolor sit amet consectetur adipiscing elit phasellus et felis nec leo efficitur vulputate praesent id dui cursus imperdiet augue eget sagittis neque suspendisse potenti nullam eu purus eros aliquam enim sem rhoncus non vulputate et convallis vitae leo ut sed felis eu urna posuere facilisis quis vitae elit vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae proin in pellentesque nisi etiam faucibus ut dui in pharetra vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nunc euismod a massa sed laoreet aenean fringilla augue euismod faucibus suscipit"

let lorem_print = ""; //esto es lo que se imprimirá por pantalla

//creamos un array de palabras a partir del texto original
let array_lorem = text_lorem.split(" "); //separa el texto en palabras a partir del espacio
console.log(array_lorem);


function generate() {
    let recogePalabras = document.getElementById("palabras__input").value;
    let recogeParrafos = document.getElementById("parrafos__input").value;

    console.log(recogePalabras, recogeParrafos);

    for (i=0; i < recogeParrafos; i++) {
        for (p=0; p < recogePalabras; p++) {
            let aleatorio = Math.floor((Math.random() * array_lorem.length -1));

            lorem_print = lorem_print + array_lorem[aleatorio] + " ";
        }

        document.getElementById("paragraph__lorem").innerHTML += "<p> Lorem ipsum " + lorem_print + ".</p>" + "</br>";

        lorem_print = "";

        if (recogePalabras && recogeParrafos) {
            window.scroll({
                top: 970
            });
        }
    }
}