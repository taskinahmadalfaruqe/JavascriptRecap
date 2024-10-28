// Must know 8 condition
// === equal
// !== not equal
// > geter then
// < less then
// <= less then equal
// >= geter then equal
// && and, if both condition is true
// || or, if one condition is true

const math = 99;
const english = 98;
const biology = 89;
const highrMath = 100;
if (math + english + biology + highrMath >= 350) {
  console.log("You are Enter 1st Great.");
} else if (
  math + english + biology + highrMath >= 300 &&
  math + english + biology + highrMath >= 349
) {
  console.log("You are Enter 2nd Great.");
} else {
  console.log("You Are Enter 3rd Great.");
}
