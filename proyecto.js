let x;
let y;

let suma_x;
let suma_y;
let inc;
let direccion = "arriba";
let nivel_velocdad = 1; //1,2,3, del mas bajo al mas alto

let grabacion;
let t1;
let b = false;

let mov1 = false;

function setup() {
    createCanvas(1000, 800);

    x = width / 2;
    y = height / 2;

    suma_x = 0;
    suma_y = 0;
    inc = 1;

    grabacion = new p5.SpeechRec("es-mx", Resultado);
    console.log(grabacion);

    //(cotinuo, intern)
    grabacion.start(true, true);



}

function draw() {
    background(100);

    if (!mov1) {
        Pinta_carro(direccion);
        fill(255);
        textSize(32);
        textAlign(CENTER, CENTER);
        text('Nivel velocidad: ' + nivel_velocdad, 800, 50);
        text('Direccion: ' + direccion, 800, 100);
        x += suma_x;
        y += suma_y;
    } else {
        if (!b) {
            t1 = millis();
            b = true;
        }

        if (millis() - t1 <= 2000) {
            direccion = "arriba";
            suma_x = 0;
            suma_y = -inc;
            x += suma_x;
            y += suma_y;
            Pinta_carro(direccion);
        } else if (millis() - t1 > 2000 && millis() - t1 <= 4000) {
            direccion = "abajo";
            suma_x = 0;
            suma_y = inc;
            x += suma_x;
            y += suma_y;
            Pinta_carro(direccion);
        } else if (millis() - t1 > 4000 && millis() - t1 <= 6000) {
            direccion = "izquierda";
            suma_x = -inc;
            suma_y = 0;
            x += suma_x;
            y += suma_y;
            Pinta_carro(direccion);
        } else if (millis() - t1 > 6000 && millis() - t1 <= 8000) {
            direccion = "derecha";
            suma_x = inc;
            suma_y = 0;
            x += suma_x;
            y += suma_y;
            Pinta_carro(direccion);
        } else {
            mov1 = false;
            direccion = "alto";
            suma_x = 0;
            suma_y = 0;
            b = false;
        }

    }


}

function Pinta_carro(d) {
    rectMode(CENTER);
    switch (d) {
        case "derecha":
            //llantas
            fill(0);
            ellipse(x - 25, y - 50, 50, 50); //izquierda
            ellipse(x - 25, y + 50, 50, 50); //derecha
            //cuerpo
            fill(255);
            rect(x, y, 100, 100);
            //cabeza
            fill(255, 0, 0);
            ellipse(x + 50, y, 80, 80);
            break;

        case "izquierda":
            //llantas
            fill(0);
            ellipse(x + 25, y - 50, 50, 50); //derecha
            ellipse(x + 25, y + 50, 50, 50); //izquierda
            //cuerpo
            fill(255);
            rect(x, y, 100, 100);
            //cabeza
            fill(255, 0, 0);
            ellipse(x - 50, y, 80, 80);
            break;

        case "arriba":
            //llantas
            fill(0);
            ellipse(x + 50, y + 25, 50, 50); //izquierda
            ellipse(x - 50, y + 25, 50, 50); //derecha
            //cuerpo
            fill(255);
            rect(x, y, 100, 100);
            //cabeza
            fill(255, 0, 0);
            ellipse(x, y - 50, 80, 80);
            break;

        case "abajo":
            //llantas
            fill(0);
            ellipse(x - 50, y - 25, 50, 50); //derecha
            ellipse(x + 50, y - 25, 50, 50); //izquierda
            //cuerpo
            fill(255);
            rect(x, y, 100, 100);
            //cabeza
            fill(255, 0, 0);
            ellipse(x, y + 50, 80, 80);
            break;

        case "alto":
            //llantas
            fill(0);
            ellipse(x - 50, y - 25, 50, 50); //derecha
            ellipse(x + 50, y - 25, 50, 50); //izquierda
            //cuerpo
            fill(255);
            rect(x, y, 100, 100);
            //cabeza
            fill(255, 0, 0);
            ellipse(x, y + 50, 80, 80);
            break;
    }
}

function Resultado() {
    if (grabacion.resultValue) {
        let palabra = grabacion.resultString;
        console.log(palabra);
        switch (palabra) {
            case "arriba": // 1
                direccion = "arriba";
                suma_x = 0;
                suma_y = -inc;
                break;

            case "abajo": // 2
                direccion = "abajo";
                suma_x = 0;
                suma_y = inc;
                break;

            case "derecha": // 3
                direccion = "derecha";
                suma_x = inc;
                suma_y = 0;
                break;

            case "izquierda": // 4
                direccion = "izquierda";
                suma_x = -inc;
                suma_y = 0;
                break;

            case "alto": // 5
                suma_x = 0;
                suma_y = 0;
                break;

            case "aumenta velocidad": // 6
                if (nivel_velocdad < 3) {
                    inc += 0.5;
                    nivel_velocdad += 1;
                    switch (direccion) {
                        case "arriba":
                            suma_x = 0;
                            suma_y = -inc;
                            break;

                        case "abajo":
                            suma_x = 0;
                            suma_y = inc;
                            break;

                        case "derecha":
                            suma_x = inc;
                            suma_y = 0;
                            break;

                        case "izquierda":
                            suma_x = -inc;
                            suma_y = 0;
                            break;
                    } //fin switch anidado
                } //fin if


                break;
                //fin aumenta velicidad

            case "disminuye velocidad": // 7
                if (nivel_velocdad > 1) {
                    inc -= 0.5;
                    nivel_velocdad -= 1;
                    switch (direccion) {
                        case "arriba":
                            suma_x = 0;
                            suma_y = -inc;
                            break;

                        case "abajo":
                            suma_x = 0;
                            suma_y = inc;
                            break;

                        case "derecha":
                            suma_x = inc;
                            suma_y = 0;
                            break;

                        case "izquierda":
                            suma_x = -inc;
                            suma_y = 0;
                            break;
                    } //fin switch anidado
                } //fin if


                break;

            case "velocidad máxima":

            case "máxima velocidad": // 8
                if (nivel_velocdad < 3) {
                    inc = 2;
                    nivel_velocdad = 3;
                    switch (direccion) {
                        case "arriba":
                            suma_x = 0;
                            suma_y = -inc;
                            break;

                        case "abajo":
                            suma_x = 0;
                            suma_y = inc;
                            break;

                        case "derecha":
                            suma_x = inc;
                            suma_y = 0;
                            break;

                        case "izquierda":
                            suma_x = -inc;
                            suma_y = 0;
                            break;
                    } //fin switch anidado
                } //fin if


                break;

            case "velocidad mínima":

            case "mínima velocidad": // 9
                if (nivel_velocdad > 1) {
                    inc = 1;
                    nivel_velocdad = 1;
                    switch (direccion) {
                        case "arriba":
                            suma_x = 0;
                            suma_y = -inc;
                            break;

                        case "abajo":
                            suma_x = 0;
                            suma_y = inc;
                            break;

                        case "derecha":
                            suma_x = inc;
                            suma_y = 0;
                            break;

                        case "izquierda":
                            suma_x = -inc;
                            suma_y = 0;
                            break;
                    } //fin switch anidado
                } //fin if

                break;

            case "movimiento 1": //10
            case "movimiento uno":
                mov1 = true;
                break;

        }

    }

}