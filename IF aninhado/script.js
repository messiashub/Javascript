function resultado() {
    let nota = parseInt(document.getElementById("nota").value);
    let resposta = document.getElementById("res");

    console.log(nota);
    console.log(typeof (nota));

    let media;

    if (nota >= 60) {
        media = '<p>Aprovado</p>';
        if (nota >= 95) {
            media += '<span>com louvor</span>';
        } else {
            media += '<span>com nota normal</span>';
        }
    } else if (nota >= 40) {
        media = '<p>Recuperação</p>';
    } else {
        media = '<p>Reprovado</p>';
        if (nota >= 20) {
            media += '<span> por nota baixa</span>';
        } else {
            media += '<span> com louvor</span>';
        }
    }
    resposta.innerHTML = media
}