(function() {
    //chain,value

    var x;
    var a = [2, 5, 10, 8];
    x = _.chain(a)
        .shuffle()
        .map(function(num) {
            return num * 2;
        })
        .value();

    console.log("[ chain ]");
    console.log(x);


})();