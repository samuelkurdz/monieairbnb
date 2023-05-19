import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
	selector: 'app-side-bar',
	standalone: true,
	imports: [CommonModule, IconComponent],
	templateUrl: './side-bar.component.html',
	styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
	sideMenus = [
		{
			name: 'All Homes',
			link: '/',
			icon: 'airbnb',
		},
		{
			name: 'Amazing Views',
			link: '/',
			icon: 'views',
		},
		{
			name: 'Tiny Homes',
			link: '/',
			icon: 'tiny',
		},
		{
			name: `Chef's Kitchen`,
			link: '/',
			icon: 'kitchen',
		},
		{
			name: `Surfing`,
			link: '/',
			icon: 'surfer',
		},
		{
			name: `Mansions`,
			link: '/',
			icon: 'mansion',
		},
		{
			name: `Luxe`,
			link: '/',
			icon: 'luxe',
		},
		{
			name: `Treehouses`,
			link: '/',
			icon: 'treehouses',
		},
		{
			name: `Camping`,
			link: '/',
			icon: 'camping',
		},
		{
			name: `Beachfront`,
			link: '/',
			icon: 'beachfront',
		},
		{
			name: `Farms`,
			link: '/',
			icon: 'farms',
		},
		{
			name: `Castles`,
			link: '/',
			icon: 'castles',
		},
		{
			name: `Islands`,
			link: '/',
			icon: 'islands',
		},
		{
			name: `Vineyards`,
			link: '/',
			icon: 'vineyards',
		},
		{
			name: `Amazing Pools`,
			link: '/',
			icon: 'pools',
		},
		{
			name: `Skiing`,
			link: '/',
			icon: 'skiing',
		},
		{
			name: `Desert`,
			link: '/',
			icon: 'desert',
		},
	];
}
