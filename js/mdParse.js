var mdParser = mdParser || (function(){
    var _args = {};
    return {
        init : (Args) => {
            _args = Args;
            path = _args[0];
            locId = _args[1];

            //function mdParse (file,locId) {
            var target = document.getElementById(locId);
            //var target = document.getElementById('markup');
            var converter = new showdown.Converter({ tables: true, tablesHeaderId: true });
            //var result = fetch("./content/recipes/double%20chocolate%20maple%20cookies.md")
            var result = fetch(path)
                .then(x => x.text())
                .then((text) => {
                    console.log(text);
                    html = converter.makeHtml(text);
                    target.innerHTML = html;
                });
        }
    }
}());
/*
var mdParser = MYLIBRARY || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
        },
        helloWorld : function() {
            alert('Hello World! -' + _args[0]);
        }
    };
}());*/