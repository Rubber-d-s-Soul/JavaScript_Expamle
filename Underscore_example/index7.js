(function() {
    //range,random

    var x;
    //第二引数未満までの
    x = _.range(1, 11);
    console.log("[ range ]");
    console.log(x);

    //0からの配列
    x = _.range(11);
    console.log("[ range ]");
    console.log(x);

    //2とびの配列
    x = _.range(1, 11, 2);
    console.log("[ range ]");
    console.log(x);

    //10までの乱数
    x = _.random(10);
    console.log("[ random ]");
    console.log(x);

    //3~10の乱数
    x = _.random(3, 10);
    console.log("[ random 3~10 ]");
    console.log(x);

    //
    x = _.escape('<script>');
    console.log("[ escape ]");
    console.log(x);

    //times 繰り返し
    _.times(5, function() {
        console.log("hello");
    });
    //rubyっぽく
    _(5).times(function() {
        console.log("hello");
    });


})();