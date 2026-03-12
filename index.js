// Ekranga chiqaruvchi yordamchi funksiya
function display(title, data) {
    const container = document.getElementById('display-results');
    if (container) {
        const div = document.createElement('div');
        div.className = 'result-item';
        div.innerHTML = `<strong>${title}:</strong> ${JSON.stringify(data)}`;
        container.appendChild(div);
    }
}

// 1-masala
function swapElements(arr) {
    if (arr.length < 3) return arr; 
    return [arr[1], arr[2], arr[0]];
}
display("1-masala", swapElements([7, 13, 8]));

// 2-masala
function sumToArray(a, b) {
    return [a, b, a + b];
}
display("2-masala", sumToArray(8, 9));

// 3-masala
function incrementAll(arr) {
    return arr.map(item => item + 1);
}
display("3-masala", incrementAll([8, 12, 4, 7]));

// 4-masala
function takeN(str, n) {
    let result = [];
    for (let i = 0; i < Math.min(n, str.length); i++) {
        result.push(str[i]);
    }
    return result;
}
display("4-masala", takeN("hello", 2));

// 5-masala
function sevenBoom(arr) {
    return arr.includes(7) ? "boom" : "there is no 7 in the array";
}
display("5-masala", sevenBoom([56, 45, 6, 7]));

// 6-masala
function filterNumbers(arr) {
    return arr.filter(item => typeof item === 'number' && item !== 0);
}
display("6-masala", filterNumbers([7, 24, 0, 52, "hello", ""]));

// 7-masala
function isAllSame(arr) {
    return arr.every(val => val === arr[0]);
}
display("7-masala", isAllSame(["g", "g", "g", "g"]));

// 8-masala
function getLengths(arr) {
    return arr.map(s => s.length);
}
display("8-masala", getLengths(["dog", "elephant", "length"]));

// 9-masala
function filterTextOnly(arr) {
    return arr.filter(s => !/\d/.test(s));
}
display("9-masala", filterTextOnly(["salom", "ho112w", "ar2", "you"]));

// 10-masala
function bubbleSortDescending(arr) {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
        for (let m = 0; m < newArr.length - 1; m++) {
            if (newArr[m] < newArr[m + 1]) {
                let temp = newArr[m];
                newArr[m] = newArr[m + 1];
                newArr[m + 1] = temp;
            }
        }
    }
    return newArr;
}
display("10-masala", bubbleSortDescending([73, 17, 108, 72, 263, 27]));

// --- QO'SHIMCHA MASALALAR ---

// 1-qoshimcha
function sumAll(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
display("1-qo'shimcha (Yig'indi)", sumAll([12, 34, 53, 56, 23, 18]));

// 2-qoshimcha
function findMax(arr) {
    return Math.max(...arr);
}
display("2-qo'shimcha (Eng katta)", findMax([24, 543, 64, 242, 786, 12]));

// 3-qoshimcha
function getEvens(arr) {
    return arr.filter(n => n % 2 === 0);
}
display("3-qo'shimcha (Juftlar)", getEvens([23, 43, 12, 4, 8, 86, 42]));

// 4-qoshimcha
function getOdds(arr) {
    return arr.filter(n => n % 2 !== 0);
}
display("4-qo'shimcha (Toqlar)", getOdds([23, 43, 12, 4, 8, 86, 42]));

// 7-qoshimcha:
function getLast(arr) {
    return arr[arr.length - 1];
}
display("7-qo'shimcha (Oxirgi element)", getLast([53, 65, 12, 13, 8, 73, 64]));

// 9-qoshimcha (oson)
function splitPositiveNegative(arr) {
    return {
        "musbat": arr.filter(n => n > 0),
        "manfiy": arr.filter(n => n < 0)
    };
}
display("9-qo'shimcha (Ajratish)", splitPositiveNegative([-3, 7, 12, 13, 0, 73, -64]));

// 10-qoshimcha (oson)
function filterIntegers(arr) {
    return arr.filter(item => Number.isInteger(item));
}
display("10-qo'shimcha (Butun sonlar)", filterIntegers([13, "me", "sal0m", 24, 34]));