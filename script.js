
    // let nome = prompt('Qual é o seu nome?')
    // let idade = prompt('Qual a sua idade?')

    
    // if (idade >= 18){
    //     document.write(`Olá ${nome}, você é MAIOR de idade!`)
    // } else if (idade < 18){
    //     document.write(`Olá ${nome}, você é MENOR de idade!`)
    // }
    
 

// tem a opção mais segura de se trabalhar, com parseInt

    let inputNome = prompt ('Qual é o seu nome?')
    let inputIdade = prompt('Qual a sua idade?')

    let idade = parseInt(inputIdade)

    let maiorOuMenor

    if (idade < 18){
        maiorOuMenor = 'menor'
    } else if (idade >= 18){
        maiorOuMenor = 'maior'
    }

    let mensagem =`Olá ${inputNome}, você é ${maiorOuMenor} de idade!`

    document.write(mensagem)