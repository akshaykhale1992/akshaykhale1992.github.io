import {Component} from 'angular2/core';

@Component({
  selector:"mycomponent",
  template:`
  	<h4>Hello World Angular 2</h4>
	<p>This is a simple Angular JS 2 Component. Just refer to <code>/process/my_component.component.ts</code> file which is loaded
	from <code>boot.ts</code> file in the same folder.</p>
  	`
})

export class MyComponent {

}
