// let fruits = ["apple", "orange", "pineapple"];
// let ff = fruits.find((e) => e == "apple");
// alert(ff, fruits.indexOf("apple", 0));
// alert(fruits.indexOf("apple", 0));

// arr = [];
// arr[-3] = undefined;
// alert(arr[-3]);

// let name1 = ["David", "Junseo", "Solomon"];
// let nameLength = name1.map((e) => e.length);
// alert(nameLength);

// let numarr = [3, 300, 50, 4];
// // numarr.sort();
// // alert(numarr);
// numarr.sort((a, b) => a - b);
// alert(numarr);
// numarr.sort((a, b) => b - a);
// alert(numarr);

// let names = "Aaa, aAa, aaA";
// let arr = names.split("A"); //A가 나올 때마다 A 바로 직전의 글짜까지만 포함해서 요소로 전환. 그리고 array에 저장
// console.log(arr);

// let str = "damn";
// let arr = str.split("");
// alert(arr);

// let game = ["overwatch", "league of legend", "brofalls"];
// let arr = game.join(";");
// alert(arr);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);
// alert(result);

let str = "my-short-string";
let arr = str.split("-");
word = arr.map((e, i) => {
  if (i == 0) {
    return e;
  } else if (i == 1 || 2) {
    return e.charAt(0).toUpperCase() + e.substring(1);
  }
});
let mstr = word.join("");
console.log(mstr);

// let damn = "damn";
// alert(damn.charAt(0).toUpperCase() + damn.substring(1));
