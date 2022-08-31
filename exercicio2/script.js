const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//a) Remova o excesso de espaços no final da string;

minhaString.trim()

//b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

console.log(`Antes:${minhaString.length}\nDepois:${(minhaString.trim()).length}`)

//c) Substitua os traços `________` por “sticioso”.

console.log (minhaString.replace("________", "sticioso"))
