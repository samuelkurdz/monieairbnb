import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from 'src/app/components/icon/icon.component';

@Component({
	selector: 'app-stays',
	standalone: true,
	imports: [CommonModule, IconComponent],
	templateUrl: './stays.component.html',
	styleUrls: ['./stays.component.scss'],
})
export default class StaysComponent {
	homes = [
		{
			image:
				'https://framerusercontent.com/images/TQv9Req7ZME40dmudtRtkwz9lcQ.webp',
			title: 'Whitefish Estate',
			address: 'Whitefish, Montana, United States',
			price: 10000,
			rate: 'night',
			rating: 5.0,
		},
		{
			image:
				'https://framerusercontent.com/images/afIWyPD7bAqXpOTuGYeO4FzrnU.webp',
			title: 'Luxury stay in Weston, Saint James, Barbados',
			address: 'Weston, Saint James, Barbados',
			price: 1500,
			rate: 'night',
			rating: 5.0,
		},
		{
			image:
				'https://framerusercontent.com/images/wTSsHOfD0gXYkODZBWWWOfdkw.webp',
			title: 'Numero 22 - Lake Como - Design Living &amp; Lake View',
			address: 'Laglio, Lombardia, Italy',
			price: 359,
			rate: 'night',
			rating: 4.99,
		},
		{
			image:
				'https://framerusercontent.com/images/3E8SIyOR9oYK20P1hy1BtAelgI.webp',
			title: '7,500 sq ft Private Beachfront Estate',
			address: 'Dubai, United Arab Emirates',
			price: 2478,
			rate: 'night',
			rating: 4.73,
		},
		{
			image:
				'https://framerusercontent.com/images/0RUEx3es60Z3CuB1eFkBxcPxmA.webp',
			title: 'Bohemian &amp; Spacious / Private Pool and Garden',
			address: 'Tulum, Quintana Roo, Mexico',
			price: 199,
			rate: 'night',
			rating: 4.97,
		},
		{
			image:
				'https://framerusercontent.com/images/3fX1fjZlrzbcXKbTqPD7FpY4Z8.webp',
			title: 'Designer A-Frame Cabin in the Trees',
			address: 'Lake Arrowhead, California, United States',
			price: 225,
			rate: 'night',
			rating: 4.93,
		},
		{
			image:
				'https://framerusercontent.com/images/lIXcszNPyY7PC0yaVFg5TBtmfA.webp',
			title: 'Fully Renovated 2 BR on River w/ Pool - Walk to To',
			address: 'Aspen, Colorado, United States',
			price: 546,
			rate: 'night',
			rating: 5.0,
		},
		{
			image:
				'https://framerusercontent.com/images/ZEBw6ci9AF1cD4D1sFdPW3Mj5rE.webp',
			title: `Magnolia's Hillcrest Cottage`,
			address: 'Waco, Texas, United States',
			price: 500,
			rate: 'night',
			rating: 4.97,
		},
		{
			image:
				'https://framerusercontent.com/images/WO8ADTYBrqd6BunOnEocxOAS7c.webp',
			title: `Unique Architecture Cave House by Cycladica`,
			address: 'Oia, South Aegean, Greece',
			price: 930,
			rate: 'night',
			rating: 4.95,
		},
		{
			image:
				'https://framerusercontent.com/images/XKmxgbyaDgBCY0OI7iczwdFvcU.webp',
			title: `ATELIER ArtVillas Costa Rica`,
			address: 'Uvita, Osa, Puntaneras, Costa Rica',
			price: 830,
			rate: 'night',
			rating: 4.8,
		},
		{
			image:
				'https://framerusercontent.com/images/cD0vsVdMfYV5dXwD5abiySgong.webp',
			title: `Mountainside Luxury Cabin with Batulao View`,
			address: 'Calaca, Calabarzon, Philippines',
			price: 483,
			rate: 'night',
			rating: 4.87,
		},
	];
}
