System.register(['angular2/platform/browser', './advanced_component.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, advanced_component_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (advanced_component_component_1_1) {
                advanced_component_component_1 = advanced_component_component_1_1;
            }],
        execute: function() {
            // enableProdMode();//Uncomment to enable production mode
            browser_1.bootstrap(advanced_component_component_1.AdvancedComponent);
        }
    }
});

//# sourceMappingURL=boot.js.map
