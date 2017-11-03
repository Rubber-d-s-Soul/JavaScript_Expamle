(function() {
    //集計系groupBy,countBy

    //groupBy
    var a = [1, 3, 5, 7, 4, 12]
    var x;

    //groupBy
    //ある演算結果をグルーピングさせる
    x = _.groupBy(a, function(num) {
        return num % 3;
    });
    console.log("[groupBy]");
    console.log(x)

    //countBy
    //グルーピングした後の要素数を返してくれる
    x = _.countBy(a, function(num) {
        return num % 2 == 0 ? "even" : "odd";
    });
    console.log("[countBy]");
    console.log(x);

    //sortBy
    //ある演算結果をもとに要素を並び変える
    x = _.sortBy(a, function(num) {
        return Math.sin(num);
    });
    console.log("[sortBy]");
    console.log(x);

    var b = ["me", "i", "and"]
    x = _.sortBy(b, 'length');
    console.log("[sortBy]");
    console.log(x);

})();