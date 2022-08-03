let tipoDeSuscripcion = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

function saberTipoDeSuscripcion(suscripcion){
    if (tipoDeSuscripcion[suscripcion]) {
        console.log(tipoDeSuscripcion[suscripcion]);
        return;
    }

    console.warn("Ese tipo de suscripcion no existe")
}


saberTipoDeSuscripcion("basic");