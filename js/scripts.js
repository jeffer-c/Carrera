$(document).ready(function(){
    let coches = ["#coche1","#coche2","#coche3","#coche4","#coche5","#coche6","#coche7","#coche8","#coche9"];
    let carName = ["Car 1", "Car 2", "Car 3", "Car 4", "Car 5", "Car 6", "Car 7", "Car 8", "Car 9"];
    let tiempos = ["#t1","#t2","#t3","#t4","#t5","#t6","#t7","#t8","#t9"];
    let nombres = ["#n1","#n2","#n3","#n4","#n5","#n6","#n7","#n8","#n9"];
    let coche;
    let participante;
    let posicion = [];
    let meta = "90%";
    let aux = [];
    // DESPLEGABLE
    $("#desp").change(function(){
        participante =$("#desp").val();
        $(coche).html(participante);
        for(let y = 0; y < participante; y++){
            $(coches[y]).show();
            function empezarAnimacion() {
                $(coches[y])
                .animate({top: "+=1px"}, 100)
                .animate({top: "-=1px"}, 100);
            }
            setInterval(empezarAnimacion, 0);
        }
    });
    // BOTON INICIAR
    $("#btnIniciar").click(function(){
        for(let i = 0; i < participante; i++){
            $(coches[i]).stop(true);
            let vel = Math.random(10)*7000;
            $(coches[i]).animate({"left":meta},vel);
            let time = (vel%10).toFixed(2);
            // Establecemos un intervalo de tiempo.
            setTimeout(function(){
                // LLENAR Y MOSTRAR TABLA DE RESULTADOS
                aux.push({tiempo: time},{nombre: carName[i]});
                aux.sort((a, b) => {((a, b) => a.tiempo < b.tiempo ? -1 : a.tiempo > b.tiempo ? 1 : 0)});
                aux.forEach(elemento => {
                    $(tiempos[i]).html(elemento.tiempo);
                    $(nombres[i]).html(elemento.nombre);
                });
                $(".marcador").show();
            }, 2000);
        }
        $("#btnIniciar").hide();
        $("#contentDesp").hide();
        $("#btnParar").show();
        $("#btnReiniciar").show();
        
    });
    // BOTON PARAR
    $("#btnParar").click(function(){
        for(let f = 0; f < participante; f++){
            $(coches[f]).stop(true);
        }
        $("#btnParar").hide();
        $("#btnReiniciar").show();
        $("#btnIniciar").show();
    });
    // BOTON REINICIAR
    $("#btnReiniciar").click(function(){
        for(let z = 0; z < participante; z++){
            $(coches[z]).stop(true);
            $(coches[z]).animate({"left":"0px"},2000);
        }
        $("#btnParar").hide();
        $("#contentDesp").show();
        $("#btnReiniciar").hide();
        $("#btnIniciar").show();
    });

    var ventana = window.open

    // calcGanadores.function({

    // });
});
// sourceURL=userscript.js