let obj = { nome: "João", idade: 25, ativo: true };
let count = 0;
for (let prop in obj) {
  count++;
  console.log(${prop} - tipo: ${typeof obj[prop]});
}
console.log("Total de propriedades:", count);

