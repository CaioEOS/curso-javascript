/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)   
}
*/
let valores = [5, 8, 2, 9 ,3]
valores.push(1)
valores.sort()
console.log(valores)
console.log(`O vetor tem ${valores.length} posições`)
console.log(`O primeiro valor do vetor é ${valores[0]}`)
let pos = valores.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}