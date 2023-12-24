// while (1) {
//   prime = prompt("type in the number");
//   judge = false;
//   for (let i = 2; i < prime; i++) {
//     if (prime % i == 0) {
//       judge = true;
//     } else {
//       continue;
//     }
//   }
//   if (judge) {
//     alert("소수가 아닙니다");
//   }
//   if (!judge) {
//     alert("소수가 맞습니다");
//   }
// }

// alternative

// prime = prompt("type in the number");
// judge = true;
// for (let i = 2; i < prime; i++) {
//   if (prime % i == 0) {
//     judge = false;
//     break;
//   }
// }
// alert(judge ? "소수가 맞습니다" : "소수가 아닙니다");

// let prime = +prompt("type in the number");

// for (let i = 2; i < prime; i++) {
//   let isPrime = true;

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     alert(i);
//   }
// }

//review

// let prime = +prompt("rebmun ni epyt");

// for (let i = 2; i < prime; i++) {
//   let isPrime = true;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     alert(i);
//   }
// }
