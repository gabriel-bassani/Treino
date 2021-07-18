const corpoDocente = [
    [ 'Gramática', '9:00', 'Sueli' ],
    [ 'Matemática', '10:15', 'Amilton'],
    [ 'Educação Física', '11:30', 'Bruno' ]
];

function mostraGradeProfessores(docente){
    return docente.forEach(([one, two, three]) => {
        console.log(`Aula de ${one} às ${two} com professor(a) ${three}`);
    });
}


mostraGradeProfessores(corpoDocente);