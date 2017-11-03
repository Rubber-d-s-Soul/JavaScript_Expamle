(function() {
    //each map

    //each
    console.log("[each]");
    _.each([2, 5, 8], function(num) {
        console.log(num * 2);
    })

    //map 処理結果を配列で受け取る
    console.log("[map]");
    var x = _.map([2, 5, 8], function(num) {
        return num * 2;
    })
    console.log(x);

})();