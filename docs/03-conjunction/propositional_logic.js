function conjunction(p, q) {
    if (p === undefined || q === undefined) {
        return undefined;
    } else {
        return p && q;
    }
}

let p = true;
let q = false;
console.log(conjunction(p, q)); // Output: false

p = undefined;
q = true;
console.log(conjunction(p, q)); // Output: undefined
