const getFlags = require('./flags')

console.log(`Oi ${getFlags('--name')}. ${getFlags('--greeting')}`)


/*Exemplos de comandos para testar o código

node greetings --name "Allan Bismarck" --greeting "Tudo bem com você?"

ou

node greetings --greeting "Cê tá de boa?" --name "Allan Bismarck"

*/