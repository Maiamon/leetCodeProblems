/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Função para gerar strings aleatórias
function gerarStringsAleatorias(tamanhoMin, tamanhoMax, quantidade) {
  const strings = [];
  const caracteres = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < quantidade; i++) {
    const tamanho = Math.floor(Math.random() * (tamanhoMax - tamanhoMin + 1)) + tamanhoMin;
    let str = "";
    for (let j = 0; j < tamanho; j++) {
      str += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    strings.push(str);
  }

  return strings;
}

// Gerando entrada grande
const entradaGrande = gerarStringsAleatorias(3, 50, 1000000);
console.log(`Entrada gerada com ${entradaGrande.length} strings.`);



var groupAnagrams = function(strs) {
  const inicio = performance.now();
  let map = new Map();

  for (let str of strs) {
    let sortedStr = str.split('').sort().join('');
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }
    map.get(sortedStr).push(str);
  }
  const fim = performance.now();
  console.log(`Tempo de execução ordenando: ${(fim - inicio).toFixed(3)}ms`);
  return Array.from(map.values());
};

var groupAnagramLineartime = function(strs){
  const inicio = performance.now();

  let map = new Map();

  for (let str of strs) {
    let letras = new Array(26).fill(0);
    for (let char of str) {
      let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      letras[index]++;
    }
    // console.log(letras);
    let key = letras.join();
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  // console.log(map);
  const fim = performance.now();
  console.log(`Tempo de execução letras: ${(fim - inicio).toFixed(3)}ms`);
  return Array.from(map.values());
}


groupAnagrams(entradaGrande);

groupAnagramLineartime(entradaGrande);