function main() {

    var x = 9;
    var y = 16;
    var z = "My name is";

    x = x + 2;
    y = y + 4;
    z = z + " John!";
    return [x, y, z];

}

console.log(main());
module.exports = main;
