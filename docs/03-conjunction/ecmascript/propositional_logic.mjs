export function conjunction(p, q) {
    if (p === undefined || q === undefined) {
        return undefined;
    } else {
        return p && q;
    }
}
