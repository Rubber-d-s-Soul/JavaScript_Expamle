(function() {
    //シャッフル
    var x;
    //関数的な書き方
    x = _.shuffle([2, 8, 10, 14, 17]);

    //オブジェクト指向的な書き方
    //x = _([2, 8, 10, 14, 17]).shuffle();
    console.log(x);

})();