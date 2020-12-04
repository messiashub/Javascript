
// Try Catch -> Tratamentos de erros

const validar = function (evento) {
    try {
        evento.preventDefault()   // preventDefault() cancela o comportamento padrão
        const form = this
        if (form.nome.value == '') throw 'Preencha o seu nome'
        if (form.nome.value.length < 3) throw 'Seu nome deve conter ao menos 3 caracteres'
        if (form.fone.value == '') throw 'Preencha seu telefone'
        if (form.fone.value.length < 11) throw 'Seu telefone deve conter 11 caracteres'

        alert('Mensagem enviada com sucesso')
    } catch (error) {
        alert(error)

    }
}

document.querySelector('form').addEventListener('submit', validar) 