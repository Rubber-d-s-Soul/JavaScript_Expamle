(function() {
    //keys,values,has
    var x;
    var user = {
        name: 'mary',
        age: '18',
        mail: 'shiny@ohara'
    }

    //keyのみ取得
    x = _.keys(user);
    console.log("[ keys ]");
    console.log(x);

    //valueのみ取得
    x = _.values(user);
    console.log("[ values ]");
    console.log(x);

    //keyとvalueを逆にする
    x = _.invert(user);
    console.log("[ invert ]");
    console.log(x);

    //"name”というkeyがあるどうか
    x = _.has(user, "name");
    console.log("[ has ]");
    console.log(x);

    // isEmpty,isString,isNull,isNumber
    x = _.isString(user.score);
    console.log("[ isString ]");
    console.log(x);



})();