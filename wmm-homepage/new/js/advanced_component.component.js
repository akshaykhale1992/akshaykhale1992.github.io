System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AdvancedComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AdvancedComponent = (function () {
                function AdvancedComponent() {
                    this.article_data = [{
                            "author": "",
                            "title": "",
                            "description": "",
                            "url": "",
                            "urlToImage": "",
                            "publishedAt": ""
                        }];
                }
                AdvancedComponent.prototype.ngOnInit = function () {
                    var callback = this.logResponse;
                    this.loadRemoteUrl("https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=latest&apiKey=22af2aea4a434cfebcb4aaf16bda2a25", callback);
                    this.loadRemoteUrl("https://newsapi.org/v1/articles?source=the-hindu&sortBy=latest&apiKey=22af2aea4a434cfebcb4aaf16bda2a25", callback);
                    this.loadRemoteUrl("https://newsapi.org/v1/articles?source=espn-cric-info&sortBy=latest&apiKey=22af2aea4a434cfebcb4aaf16bda2a25", callback);
                };
                AdvancedComponent.prototype.logResponse = function (status, response, ref) {
                    if (ref.article_data.length == 1) {
                        ref.article_data = [];
                    }
                    if (response.status == "ok") {
                        for (var i = 0; i < response.articles.length; ++i) {
                            ref.article_data.push(response.articles[i]);
                        }
                    }
                };
                AdvancedComponent.prototype.loadRemoteUrl = function (url, callback) {
                    var xhr = new XMLHttpRequest();
                    var reference = this;
                    xhr.open('GET', url, true);
                    xhr.responseType = 'json';
                    xhr.onload = function () {
                        var status = xhr.status;
                        if (status === 200) {
                            callback(null, xhr.response, reference);
                        }
                        else {
                            callback(status, xhr.response, reference);
                        }
                    };
                    xhr.send();
                };
                AdvancedComponent = __decorate([
                    core_1.Component({
                        selector: "advancedcomponent",
                        templateUrl: '/partials/news-component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdvancedComponent);
                return AdvancedComponent;
            }());
            exports_1("AdvancedComponent", AdvancedComponent);
        }
    }
});

//# sourceMappingURL=advanced_component.component.js.map
