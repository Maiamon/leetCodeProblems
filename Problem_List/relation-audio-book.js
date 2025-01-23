const matrix = [
    [1,1,0],
    [1,1,0],
    [0,0,1],
]

/**
 * @param {Array<Array<Number>>} matrix
 */
function main(matrix) {

    const hasGroup = new Set()

    const groups = []

    for (let i = 0; i < matrix.length; i++) {
        if (hasGroup.has(i)) continue;

        const queue = []
        const group = []

        queue.push(i)
        group.push(i)
        hasGroup.add(i) 

        while (queue.length > 0) {
            queue.shift()

            for (let j = i; j < matrix.length; j ++) {
                if (hasGroup.has(j)) continue

                if (matrix[i][j] || matrix[j][i]) {
                    group.push(j)
                    hasGroup.add(j)
                    queue.push(j)
                }
            }
        }

        groups.push(group)
    }

    return groups.length;
}

console.log(main(matrix))