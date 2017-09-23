System.register(['angular2/core', 'angular2/platform/browser', './advanced_component.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, browser_1, advanced_component_component_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (advanced_component_component_1_1) {
                advanced_component_component_1 = advanced_component_component_1_1;
            }],
        execute: function() {
            core_1.enableProdMode(); //Uncomment to enable production mode
            browser_1.bootstrap(advanced_component_component_1.AdvancedComponent);
        }
    }
});

//# sourceMappingURL=boot.js.map
