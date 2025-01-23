/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let qeue = []
    let visitados = new Map()
    let chave
    let numIlhas = 0
    let groups = []
    
    for(i = 0; i < grid.length; i++){
        for(j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '0') continue

            chave = `${i},${j}`
            if(visitados.has(chave)) continue

            qeue.push(chave)
            numIlhas++

            while(qeue.length > 0){
                chave = qeue[0]

                if(visitados.has(chave)) continue
                qeue.shift()
                visitados.set(chave)

                let direita = [chave[0]+1,chave[1]]
                if(chave[0] < grid.length && 
                    grid[chave[0]+1][chave[1]] === '1' && 
                    !visitados.has(direita) && 
                    !qeue.includes(direita)
                    ){
                        qeue.push(direita)
                }
                let baixo = [chave[0],chave[1]+1]
                if(chave[1] < grid[0].length && 
                    grid[chave[0]][chave[1]+1] === '1' && 
                    !visitados.has(baixo) && 
                    !qeue.includes(baixo)
                    ){
                        qeue.push(baixo)
                }
                // let esquerda = (chave[0]-1,chave[1])
                // if(chave[0] > 0 && 
                //     grid[chave[0]-1][chave[1]] === '1' && 
                //     !visitados.has(esquerda) && 
                //     !qeue.includes(esquerda)
                //     ){
                //         qeue.push(esquerda)
                // }
                // let cima = (chave[0],chave[1]-1)
                // if(chave[0] > 0 && 
                //     grid[chave[0]][chave[1]-1] === '1' && 
                //     !visitados.has(cima) && 
                //     !qeue.includes(cima)
                //     ){
                //         qeue.push(cima)
                // }
            }
        }
    }
    return numIlhas
};

const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]

const teste = new Map()
x = 0
y = 0
const key = `${x},${y}`
teste.set(key)
console.log(teste);
console.log(key)
console.log(teste.has('0,0'));
console.log(teste.has(key));


console.log(numIslands(grid));