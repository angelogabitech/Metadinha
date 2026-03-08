export function calcularPrecoPorPessoa(preco:number,pessoas:number){

 if(!preco || !pessoas) return 0

 return Math.round(preco / pessoas)

}

export function formatarPreco(valor:number){

 return valor.toLocaleString("pt-BR",{
  style:"currency",
  currency:"BRL"
 })

}