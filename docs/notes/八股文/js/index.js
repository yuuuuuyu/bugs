// 多维数组降为一位数组
// const arr = [1, 2, 3, [4, 5, [6, [7], 8], 9], 10]
// console.log([].concat(...arr))

// const objArr = [
//     { name: 1, code: 'q' },
//     { name: 2, code: 'q' },
//     { name: 3, code: 'q' },
//     [
//         { name: 4, code: 'q' },
//         { name: 5, code: 'q' },
//         [
//             { name: 6, code: 'q' },
//             { name: 7, code: 'q' },
//         ]
//     ]
// ]
// console.log(objArr.flat(2))

Promise.resolve().then(() => {
    console.log(0)
    return Promise.resolve(4)
}).then(res => {
    console.log(res)
})

Promise.resolve().then(() => {
    console.log(1)
}).then(() => {
    console.log(2)
}).then(() => {
    console.log(3)
}).then(() => {
    console.log(5)
})