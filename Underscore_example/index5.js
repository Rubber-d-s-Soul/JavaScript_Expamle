(function() {
    //union,uniq

    var a = [1, 2, 5];
    var b = [5, 2, 8];
    var x;

    //配列の集合（重複なし）
    x = _.union(a, b);
    console.log("[union]");
    console.log(x);

    //共通部分を探す
    x = _.intersection(a, b);
    console.log("[intersection]");
    console.log(x);

    //差を探す bにはないaの要素
    x = _.difference(a, b);
    console.log("[difference]");
    console.log(x);

    //要素のユニークなもののみ
    //以下の場合は2,3,5,7
    x = _.uniq([2, 3, 5, 2, 7]);
    console.log("[ uniq ]");
    console.log(x);

})();