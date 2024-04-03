// es6
// 한번에 export 시키기

const flowers = ['cherry blossom', 'rose', 'tulip'];
function getFLowersLength() {
    console.log(flowers.length);
}
function getFLower(idx) {
    if(idx >= flowers.length || idx < 0) return 'x';

    return flowers[idx];
}

export { flowers, getFLowersLength, getFLower };