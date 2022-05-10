const markMass = 78;
const johnMass = 92;

const markHeight = 1.69;
const johnHeight = 1.95;

const markBMI = returnBMI(markMass, markHeight);
const johnBMI = returnBMI(johnMass, johnHeight);
const markHigherBMI = (markBMI > johnBMI);

console.log(markBMI, johnBMI, markHigherBMI);



function returnBMI(mass, height) {
    return mass / height ** 2;
}
