import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-top-bar',
	standalone: true,
	imports: [CommonModule, RouterLink, RouterLinkActive],
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
	navLinks = signal([
		{
			name: 'Stays',
			link: '/',
		},
		{
			name: 'Experiences',
			link: '/experiences',
		},
		{
			name: 'Online Experiences',
			link: '/online',
		},
	]);
}
