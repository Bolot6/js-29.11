// function check(str) {
//     let a = [];
//
//     for (let char of str) {
//         if (char === '{') {
//             a.push(char);
//         } else if (char === '}') {
//             if (a.length === 0) {
//                 console.log('Скобки непарные, открывающих больше');
//                 return;
//             }
//             a.pop();
//         }
//     }
//
//     if (a.length === 0) {
//         console.log('Скобки парные');
//     } else {
//         console.log('Скобки непарные, открывающих больше');
//     }
// }
//
// let inputString = "{}{}{}{}{}}}}}}{{{{}}}}}}{{{{{{";
// check(inputString);


let trainA = '...........A......................B...........';
let trainB = '...A.....................................B.....';

function findThePoint(trainA, trainB) {
    let point = -1;
    for (let i = 0; i < Math.min(trainA.length, trainB.length); i++) {
        if (trainA[i] !== trainB[i]) {
            point = i;
            break;
        }
    }

    if (point !== -1) {
        let result = trainA.slice(0, point) + 'C' + trainA.slice(point + 1);
        result += trainB.slice(point + 1);
        console.log(result);
    } else {
        console.log('Не встретятся');
    }
}

findThePoint(trainA, trainB);


