module.exports = function main(input) {
    var Line1 = '._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.'
    var Arr1 = Line1.split('   ')
    var Line2 = '|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|'
    var Arr2 = Line2.split('   ')
    var Line3 = '|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|'
    var Arr3 = Line3.split('   ')
    var fig1 = []
    var fig2 = []
    var fig3 = []
    for (var i = 0; i < input.length; i++) {
        var fig = parseInt(input[i])
        fig1.push(Arr1[fig])
        fig2.push(Arr2[fig])
        fig3.push(Arr3[fig])
    }
    var l1 = fig1.join(' ')
    var l2 = fig2.join(' ')
    var l3 = fig3.join(' ')
    return l1 + '\n' + l2 + '\n' + l3 + '\n';
};