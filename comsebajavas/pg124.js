// let answer = prompt("자바스크립트의 '공식' 이름은 무었일까요?");
// if (answer === "ECMAScript") {
//   alert("정답입니다!");
// } else {
//   alert("다시 해보세요");
// }

// alert(0 || 1);  //1을 반환

// if (1 || 0) {
//   alert("damn");
// }

// let wrb = prompt("w i y wrb?");
// if (wrb < 10 || wrb > 19) {
//   alert("perfect");
// } else {
//   alert("no bitch");
// }

// if (0 && 0) {
//   alert("응 나와");
// }

// age = prompt("how old are you?");
// if (age < 14 || age > 90) {
//   alert("응 아니야");
// } else {
//   alert("속합니다");
// }

// let principal = 51;
// while (principal > 50) {
//   principal--;
//   alert("still fat as fuck");
// }

// let i = 1;
// do {
//   alert("what up bro");
//   i++;
// } while (i < 3);

// for (let i=1; i<3; i++) {
//   alert('hmmm');
// }

// let sum = 0;

// while (true) {
//   let value = +prompt("숫자를 입력하세요", "");
//   alert(value);
//   if (!value) break;

//   sum += value;
// }
// alert("합계: " + sum);

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 1) continue;
//   alert(i);
// }

// let i = 0;
// for (let j = 0; j <= 3; j++) {
//   for (i = 0; i <= 3; i++) {
//     alert("(" + j + "," + i + ")");
//   }
// }

// let i = 3;
// while (i) {
//   alert(i--);
// }

// let i = 0;
// while (i++ < 5) alert(i);

// for (i = 2; i <= 10; i++) {
//   if (i % 2 == 1) continue;
//   alert(i);
// }

// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

while (true) {
  let answer = +prompt("숫자 입력해봐 등신아", "");

  if (answer <= 100) alert("다시시도");
  else {
    alert("ok");
    break;
  }
}
