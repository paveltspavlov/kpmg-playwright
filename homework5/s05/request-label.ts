//build the label REQ-1042 [P2] Broken street light (Lighting) from separate constants, print it, then print its length with .length

const requestPrefix: string = 'REQ';
const requestId : number = 1042;
const priority: string = '[P2]'
const requestTitle: string = 'Broken street light (Lighting)';
let fullRequest: string = `${requestPrefix} ${requestId} ${priority} ${requestTitle}`;

console.log(fullRequest);
console.log(fullRequest.length);