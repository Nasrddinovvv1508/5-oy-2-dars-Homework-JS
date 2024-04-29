        // 90-MASALA
// let str = `space`;

// function addSpace(str) {
//     if (str.length != 0) {
//         let str2 = String(str);
//         let arr = str2.split('');
//         let res = arr.join(' ')
//         return res;
//     } else {
//         return `After all, it is empty`
//     }
// }

// console.log(addSpace(str));



        // 91-MASALA
// function multipleOfSecond(arg1, arg2) {
//     let max = arg1;
//     if (max < arg2) {
//         max = arg2
//     }
//     let counter = 0
//     for (let i = max.toString().length; i > 0; i--) {
//         counter++;
//     }
//     return counter; // Math.round(Math.random() * max)
// }

// console.log(multipleOfSecond(299, 41));
// CHALA QOLDI



        // 98-MASALA
// function canTriangle(side1, side2, side3) {
//     if (side1 + side2 > side3) {
//         if (side1 + side3 > side2) {
//             if (side2 + side3 > side1) {
//                 return `Yes, you can make a triangle from these sides`
//             } else {
//                 return `No, you can't make a triangle from these sides`
//             }
//         } else {
//             return `No, you can't make a triangle from these sides`
//         }
//     } else {
//         return `No, you can't make a triangle from these sides`
//     }
// }

// console.log(canTriangle(3, 4, 5));



        // 99-MASALA
// function createArrBetweenNum(arg1, arg2) {
//     let newArr = [];

//     if (!isNaN(arg1) && !isNaN(arg2)) {
//         if (arg1 < arg2) {
//             for (let i = arg1 + 1; i < arg2; i++) {
//                 newArr.push(i);
//             }
    
//             return newArr;
//         } else {
//             for (let i = arg2 + 1; i < arg1; i++) {
//                 newArr.push(i);
//             }
    
//             return newArr;
//         }
//     } else {
//         return `Arguments must be numbers`
//     }
// }

// console.log(createArrBetweenNum(12, 9));



        // 100-MASALA



        // 101-MASALA
// function sumNums(n) {
//     let sum = 0;

//     if (!isNaN(n)) {
//         if (n > 0) {
//             for (let i = 1; i <= n; i++) {
//                 sum += i;
//             }
//         } else {
//             for (let i = 1; i >= n; i--) {
//                 sum += i;
//             }
//         }
    
//         return sum;
//     } else {
//         return `A number must be entered`
//     }
// }
// console.log(sumNums(-3));



        // 102-MASALA
// function isBetweenMinMax(n, obj) {
//     if (!isNaN(n) && !isNaN(obj.min) && !isNaN(obj.max)) {
//         if (obj.min <= n && n <= obj.max) {
//             return true
//         } else {
//             return false
//         }
//     } else {
//         return `Error`;
//     }
// }

// console.log(isBetweenMinMax(4, { min: 0, max: 5 }));



        // 103-MASALA
    // 1-usul
// function toSquare(n) {
//     let m = Math.pow(n, 2);

//     let counter = 0;
//     for (let i = 1; i <= n.toString().length; i++) {
//         counter++
//     }

//     let zero = ``;
//     for (let i = 1; i <= counter; i++) {
//         zero += `0`;
//     }

//     if (eval(`m % 1${zero}`) == n) {
//         return true;
//     } else {
//         return false
//     }
// }

// console.log(toSquare(36));


    // 2-usul
// function toSquare(n) {
//     let m = Math.pow(n, 2)
//     let res = m.toString().endsWith(n);
//     return res;
// }

// console.log(toSquare(6));



        // 104-MASALA
    // 1-usul
// let arr = [1, 2, 3, 4, 5] // [1, 3, 5, 7, 9]

// function addIndex(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] + i);
//     }

//     return newArr
// }

// console.log(addIndex(arr));


    // 2-usul
// function addIndex(arr) {
//     let arr2 = arr.map((v, i) => {
//         return v + i;
//     });

//     return arr2;
// }

// console.log(addIndex(arr));



        // 105-MASALA
// function drinksWithoutSugar(arr) {
//     let arr2 = arr.filter((v) => {
//         return v != `cola` && v != `fanta`;
//     })

//     return arr2;
// }

// console.log(drinksWithoutSugar(["fanta", "cola", "water"]));



        // 106-MASALA
// function counterDigits(n) {
//     let counter = 0;
//     if (!isNaN(n)) {
//         for (let i = 0; i < n.toString().length; i++) {
//             counter++;
//         }
//     } else {
//         return `error`
//     }

//     return counter;
// }

// console.log(counterDigits(61217311514));



        // 107-MASALA
// function produceLargest(n) {
//     if (!isNaN(n)) {
//         return Number(n.toString().split('').sort((a, b) => b - a).join(''))
//     } else {
//         return `error`
//     }
// }

// console.log(produceLargest(674));