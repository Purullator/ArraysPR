var arriau = new Array(100);

for (let i = 0; i < arriau.length; i++) {
  arriau[i] = 0;
}

console.log(arriau);
// document.write(arriau);

var arriau2 = new Array(100);

for (let i = 0; i < arriau2.length; i++) {
  arriau2[i] = i;
}

console.log(arriau2);

var arriau3 = new Array(100);

for (let i = 1; i < arriau3.length; i++) {
  arriau3[i] = i * 7;
}
console.log(arriau3);

let numbers = [1, 3, 2, -4, -10, -6, 9];

function sortAbsolute(a, b) {
  return Math.abs(a) - Math.abs(b);
}

numbers.sort(sortAbsolute);

console.log(numbers);

let sequence = [1, 1];

for (let i = 2; i < 20; i++) {
  sequence.push(sequence[i - 1] + sequence[i - 2]);
}

console.log(sequence);

function sumar(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}
console.log(sumar([1, 2, 3, 4, 5]));
console.log(sumar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function promedio(array) {
  let promedios = 0;
  for (let i = 0; i < array.length; i++) {
    promedios += array[i];
  }
  return promedios / array.length;
}
console.log(promedio([2, 4, 6]));
console.log(promedio([2, 4, 6, 8, 10]));

function maximo(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr[0];
}

console.log(maximo([1, 100, 2000, 5, 6]));

function minimo(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr[0];
}
console.log(minimo([4, 600, 7, 1, 800, 200]));

function positivos(arr) {
  let posArr = arr.filter((num) => num > -1);
  return posArr;
}
console.log(positivos([-2, 5, 10, -100, 0, -500, 200]));

function negativos(arr) {
  let posArr = arr.filter((num) => num < 0);
  return posArr;
}
console.log(negativos([-2, 5, 10, -100, 0, -500, 200]));

function esPar(arr) {
  let contadorPares = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      contadorPares.push(arr[i]);
    }
  }
  return contadorPares;
}
console.log(esPar([2, 4, 5, 7, 8, 15, 10]));

function esImpar(arr) {
  let contadorImpares = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      contadorImpares.push(arr[i]);
    }
  }
  return contadorImpares;
}
console.log(esImpar([2, 4, 5, 7, 8, 15, 10]));

function escalar(arr, n) {
  for (i = 0; i < arr.length; i++) {
    arr[i] *= n;
  }
  return arr;
}
console.log(escalar([2, 4, 6], 8));
console.log(escalar([2, 4, 8, 10, 100], 8));

function escalar2(arr, n) {
  var arrayEscalado = [];
  for (let i = 0; i < arr.length; i++) {
    arrayEscalado[i] = arr[i] * n;
  }
  return `Array a escala: ${arrayEscalado}\n` + `\nArray original: ${arr}`;
}
console.log(escalar2([2, 4, 8, 10, 100], 8));

function findEle(ele, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return -1;
}

let element = 0;
let array = new Array(100);
for (let i = 0; i < array.length; i++) {
  array[i] = i;
}

console.log(findEle(element, array));
console.log(`Array index: ${array}`);

function lastInd(n, arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === n) {
      return i;
    }
  }
  return -1;
}

console.log(lastInd(0, array));

function conc(arr1, arr2) {
  var arrConc = [];
  for (let i = 0; i < arr1.length; i++) {
    arrConc.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    arrConc.push(arr2[j]);
  }
  return arrConc;
}
console.log(conc([1, 2, 3], [4, 5, 6]));

var assignacion = [
  'T',
  'R',
  'W',
  'A',
  'G',
  'M',
  'Y',
  'F',
  'P',
  'D',
  'X',
  'B',
  'N',
  'J',
  'Z',
  'S',
  'Q',
  'V',
  'H',
  'L',
  'C',
  'K',
  'E',
];

function dniNum(num) {}
