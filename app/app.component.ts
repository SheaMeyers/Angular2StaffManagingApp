import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/templates/main-page.component.html',
	styleUrls: ['app/styles/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
	  ROUTER_PROVIDERS,
	  HeroService
	]
})

@RouteConfig([
	{ 
		path: '/dashboard', 
		name: 'Dashboard', 
		component: DashboardComponent, 
		useAsDefault: true },
	{ 
		path: '/heroes',
		name: 'Heroes', 
		component: HeroesComponent 
	},
	{ 
		path: '/detail/:id', 
		name: 'HeroDetail', 
		component: HeroDetailComponent 
	}
])

export class AppComponent {
	title = 'Tour of Heroes';
}