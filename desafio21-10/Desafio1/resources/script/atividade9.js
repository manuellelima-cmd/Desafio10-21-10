let notas = [8, 7, 9, 4, 6, 10];

if (notas.some(nota => nota < 5)) {
    console.log("Existe pelo menos um aluno que precisa de recuperação.");
} else {
    console.log("Nenhum aluno possui nota abaixo de 5.");
}