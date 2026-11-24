const requestPrefix1: string = 'REQ';
const requestId1: number = 1042;
const requestTitle1: string = 'Broken street light (Lighting)';
let fullRequest1: string = `${requestPrefix1} ${requestId1}: ${requestTitle1}`;

console.log(fullRequest1.slice(9,29).toLowerCase());
console.log(fullRequest1.slice(9,29).toUpperCase());
console.log(fullRequest1.slice(9,29));