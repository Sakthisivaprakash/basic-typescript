type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'; // type literal

function combine(
  ip1: Combinable,
  ip2: Combinable,
  resultConcersion: ConversionDescriptor
) {
  let result;
  if (typeof ip1 === "number" && typeof ip2 === "number" || resultConcersion === 'as-number') {
    result = +ip1 + +ip2;
  } else {
    result = ip1.toString() + ip2.toString();
  }
  return result;
//   if(resultConcersion === 'as-number') {
//     return +result
//   } else {
//     return result.toString();
//   }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);


const combinedNames = combine("Sakthi", "Geetha", 'as-text');
console.log(combinedNames);
