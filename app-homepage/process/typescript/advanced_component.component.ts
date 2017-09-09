import {Component, OnInit} from 'angular2/core';

@Component({
  selector:"advancedcomponent",
  templateUrl:'/partials/advanced_component.html'
})

export class AdvancedComponent implements OnInit {
	video_data:any = [{
		"video_id": "",
		"publish_date": "",
		"thumbnail": "",
		"video_link": ""
	}];
	live_video:string = "";
	streaming_video_title = "Current Live Streaming Video";
	ngOnInit()
    {
    	var callback = this.logResponse;
        this.loadRemoteUrl("https://www.googleapis.com/youtube/v3/search?key=AIzaSyDYU01Z0X0OQh8p6_Vc3G_dOj9bZ2ZWbnY&channelId=UCJS9pqu9BzkAMNTmzNMNhvg&part=snippet,id&order=date&maxResults=50", callback);
    }

    loadVideo(video_id)
    {
    	this.streaming_video_title = "";
    	this.live_video = "https://www.youtube.com/embed/" + video_id;
    }

    logResponse(status, response, ref) {
    	ref.video_data = [];
    	for(let i=0; i < response.items.length; i++) {
    		if(response.items[i].id.kind == 'youtube#video') {
    			let video:any = {
					"video_id": response.items[i].id.videoId,
					"publish_date": response.items[i].snippet.publishedAt,
					"description": response.items[i].snippet.description,
					"thumbnail": response.items[i].snippet.thumbnails.high.url,
					"video_link": "https://www.youtube.com/watch?v=" + response.items[i].id.videoId,
    			}
    			ref.video_data.push(video);
    			if(typeof(response.items[i].snippet.liveBroadcastContent) != "undefined" &&
    				response.items[i].snippet.liveBroadcastContent != "none") {
    				ref.live_video = "https://www.youtube.com/embed/" + response.items[i].id.videoId;
    			}
    		}
    	}
    }

	loadRemoteUrl(url, callback):any {
		var xhr = new XMLHttpRequest();
		var reference = this;
	    xhr.open('GET', url, true);
	    xhr.responseType = 'json';
	    xhr.onload = function() {
	      var status = xhr.status;
	      if (status === 200) {
	        callback(null, xhr.response, reference);
	      } else {
	        callback(status, xhr.response, reference);
	      }
	    };
	    xhr.send();        
    }
}
