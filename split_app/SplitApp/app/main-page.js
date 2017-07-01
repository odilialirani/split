/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/ 
var createViewModel = require("./main-view-model").createViewModel;

var webViewModule = require("ui/web-view");

exports.onViewLoaded = function(args) {
    var thisView = args.object;

    var web = thisView.getViewById("webView");

    web.src = "http://odilialirani.github.io/split";
}
