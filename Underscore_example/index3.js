(function() {
    //find,filter,contains
    var a = [2, 3, 5, 6, 75]
    var x;

    //指定した条件に最初に一致した値を返す
    x = _.find(a, function(num) {
        return num > 3;
    });
    console.log("[ find ]");
    console.log(x);

    //指定した条件のものをすべて返す
    x = _.filter(a, function(num) {
        return num > 5;
    });
    console.log("[ filter ]");
    console.log(x);

    //集合要素に指定した値がふくまれているかどうか
    x = _.contains(a, 10);
    console.log("[ contains ]");
    console.log(x);

    a.push(10);
    x = _.contains(a, 10);
    console.log("[ contains 2]");
    console.log(x);

})();