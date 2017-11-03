(function() {
    //テンプレート機能

    var x;
    var user = {
        name: 'mary',
        age: '18',
        mail: 'shiny@ohara'
    };

    var tpl = "<li><%- name %> (<%- mail %>) </li>"
    x = _.template(tpl, user);

    console.log("[ template ]");
    console.log(x);

    var tpl = "<% console.log('Hello from tpl'); %><li><%- name %>(<%- mail %>)</li>"
    x = _.template(tpl, user);

    console.log("[ template console ]");
    console.log(x);

    //こういう書き方もある
    var complied = _.template("hello: <%= name%>");
    console.log(complied(user));


})();