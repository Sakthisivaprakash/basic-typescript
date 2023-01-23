function combine(ip1: number | string, ip2: number | string) {
    let result;
    if(typeof ip1 === 'number' && typeof ip2 === 'number') {
        result = ip1 + ip2;
    } else {
        result = ip1.toString() + ip2.toString();
    }
    return result;
}

const combinedAges = combine(30,26);
console.log(combinedAges);

const combinedNames = combine('Sakthi', 'Geetha');
console.log(combinedNames);