import { conjunction } from './propositional_logic.mjs';

let p = true;
let q = true;
console.log('(p='+p+' conjunctionOperator q='+q+') = '+conjunction(p, q)); // Output: true

p = true;
q = false;
console.log('(p='+p+' conjunctionOperator q='+q+') = '+conjunction(p, q)); // Output: false

p = false;
q = true;
console.log('(p='+p+' conjunctionOperator q='+q+') = '+conjunction(p, q)); // Output: false

p = false;
q = false;
console.log('(p='+p+' conjunctionOperator q='+q+') = '+conjunction(p, q)); // Output: false
    
p = undefined;
q = false;
console.log('(p='+p+' conjunctionOperator q='+q+') = '+conjunction(p, q)); // Output: undefined

p = undefined;
q = true;
console.log('(p='+p+' conjunctionOperator q='+q+') = '+conjunction(p, q)); // Output: undefined

p = true;
q = undefined;
console.log('(p='+p+' conjunctionOperator q='+q+') = '+conjunction(p, q)); // Output: undefined

p = false;
q = undefined;
console.log('(p='+p+' conjunctionOperator q='+q+') = '+conjunction(p, q)); // Output: undefined