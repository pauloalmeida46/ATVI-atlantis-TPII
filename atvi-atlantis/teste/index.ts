import Cliente from "../modelos/cliente"
import Endereco from "../modelos/endereco"
import Telefone from "../modelos/telefone"

// Criando cliente titular
let cliente = new Cliente()
cliente.nome = "Pedro de Alcântara João Carlos Leopoldo Salvador"
cliente.nomeSocial = "Dom Pedro II"
cliente.dataCadastro = new Date(1840, 6, 23)
cliente.dataNascimento = new Date(1825, 11, 2)

// Criando endereço do titular
let endereco = new Endereco()
endereco.rua = "R. do Catete"
endereco.bairro = "Copacabana"
endereco.cidade = "Rio de Janeiro"
endereco.estado = "Rio de Janeiro"
endereco.pais = "Brasil"
endereco.codigoPostal = "22220-000"
cliente.endereco = endereco

// Criando telefone do titular
let telefone = new Telefone()
telefone.ddd = "21"
telefone.numero = "99999-0000"
cliente.telefones.push(telefone)

// Criando dependente e clonando dados
let dependente = new Cliente()
dependente.nome = "Isabel Cristina Leopoldina Augusta Micaela"
dependente.nomeSocial = "Princesa Isabel"
dependente.dataCadastro = new Date(1921, 10, 14)
dependente.dataNascimento = new Date(1846, 6, 29)
dependente.endereco = cliente.endereco.clonar() as Endereco
dependente.telefones.push(cliente.telefones[0].clonar() as Telefone)
dependente.titular = cliente
cliente.dependentes.push(dependente)

// Exibindo os dados resumidos
console.log("Resumo do Titular:")
console.log("- Nome:", cliente.nome)
console.log("- Telefone:", cliente.telefones[0].ddd, cliente.telefones[0].numero)
console.log("- Dependentes:", cliente.dependentes.map(d => d.nome).join(", "))

console.log("\nResumo do Dependente:")
console.log("- Nome:", dependente.nome)
console.log("- Telefone:", dependente.telefones[0].ddd, dependente.telefones[0].numero)
console.log("- Titular:", dependente.titular.nome)

// Teste de independência (padrão Protótipo)
dependente.telefones[0].numero = "88888-0000"

console.log("\nTeste de Independência dos Telefones:")
console.log("- Telefone do titular:", cliente.telefones[0].numero)      // Deve continuar 99999-0000
console.log("- Telefone do dependente:", dependente.telefones[0].numero) // Deve ser 88888-0000
