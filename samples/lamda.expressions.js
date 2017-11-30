let animmals = ["duck", "cat", "goat"];

var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

var numbers = [5, 6, 13, 0, 1, 18, 23];

module.exports.reduce =  function() {
    let sum = numbers.reduce((a, b) => a + b);
    console.log(sum);
}

module.exports.filter =  function() {
    let res = animmals.filter(el => el.length > 3);
    console.log(res.join(','));
}

module.exports.reverse =  function() {
    let res = animmals.reverse();
    console.log(res.join(','));
}

module.exports.map =  function() {
    var materialsLength1 = materials.map(function(material) {
        return material.length;
    });
    console.log(materialsLength1);

    var materialsLength2 = materials.map((material) => {
        return material.length;
    });
    console.log(materialsLength2);

    var materialsLength3 = materials.map(material => material.length);
    console.log(materialsLength3);
}
