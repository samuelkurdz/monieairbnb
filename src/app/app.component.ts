import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		TopBarComponent,
		FilterBarComponent,
		SideBarComponent,
	],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'monieview';
}
