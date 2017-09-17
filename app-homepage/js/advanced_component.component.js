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
                    this.video_data = [{
                            "video_id": "",
                            "publish_date": "",
                            "thumbnail": "",
                            "video_link": ""
                        }];
                    this.live_video = "";
                    this.streaming_video_title = "Current Live Streaming Video";
                }
                AdvancedComponent.prototype.ngOnInit = function () {
                    var callback = this.logResponse;
                    this.loadRemoteUrl("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDYU01Z0X0OQh8p6_Vc3G_dOj9bZ2ZWbnY&channelId=UCr8O-xyvehHUVdHLopvZt3g&part=snippet,id&order=date&maxResults=50&type=video", callback);
                };
                AdvancedComponent.prototype.loadVideo = function (video_id) {
                    this.streaming_video_title = "";
                    this.live_video = "https://www.youtube.com/embed/" + video_id;
                };
                AdvancedComponent.prototype.logResponse = function (status, response, ref) {
                    ref.video_data = [];
                    for (var i = 0; i < response.items.length; i++) {
                        if (response.items[i].id.kind == 'youtube#video') {
                            var video = {
                                "video_id": response.items[i].id.videoId,
                                "publish_date": response.items[i].snippet.publishedAt,
                                "description": response.items[i].snippet.description,
                                "thumbnail": response.items[i].snippet.thumbnails.high.url,
                                "video_link": "https://www.youtube.com/watch?v=" + response.items[i].id.videoId,
                            };
                            ref.video_data.push(video);
                            if (typeof (response.items[i].snippet.liveBroadcastContent) != "undefined" &&
                                response.items[i].snippet.liveBroadcastContent == "live") {
                                ref.live_video = "https://www.youtube.com/embed/" + response.items[i].id.videoId;
                            }
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
                        templateUrl: '/partials/advanced_component.html'
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
