import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
	selector: 'app-single-home',
	standalone: true,
	imports: [CommonModule, IconComponent, GoogleMapsModule],
	templateUrl: './single-home.component.html',
	styleUrls: ['./single-home.component.scss'],
})
export class SingleHomeComponent implements OnInit {
	@Input() showModal = false;
	@Output() emitCloseModal = new EventEmitter();

	zoom = 12;
	center: google.maps.LatLngLiteral = {
		lat: 0,
		lng: 0,
	};

	reviewsSummary = [
		{
			metric: 'Cleanliness',
			rating: 5.0,
		},
		{
			metric: 'Accuracy',
			rating: 4.9,
		},
		{
			metric: 'Communication',
			rating: 4.8,
		},
		{
			metric: 'Location',
			rating: 4.8,
		},
		{
			metric: 'Check-in',
			rating: 4.9,
		},
		{
			metric: 'Value',
			rating: 4.2,
		},
	];

	recommenders = [
		{
			name: 'Steve',
			img: 'https://framerusercontent.com/images/l64WTbI604jxlY6dzS0UsF0k6TU.png',
			talk: `Abbe's place was so wonderful and just what I needed. It was the perfect escape with a great wood stove, beautiful views, horses, and nearby skiing. I'm so grateful.`,
		},
		{
			name: 'Emily',
			img: 'https://framerusercontent.com/images/1IzljdLWd8T9eDfla0R5LrZ9s.png',
			talk: `The location was very quiet and peaceful. We loved the wood stove and the location was convenient, however the interior was not in the best shape.`,
		},
		{
			name: 'Daniel',
			img: 'https://framerusercontent.com/images/jgTKOYkhLrOCP4ZWEugNNBORbs.png',
			talk: `Overall a decent stay. I appreciated having a kitchen and access to firewood for the stove which heated up the little cabin very effectively. `,
		},
		{
			name: 'Jackson',
			img: 'https://framerusercontent.com/images/Jc9D7O4ihy2vSsSvjtWRRQPffjw.png',
			talk: `Abbe’s tiny house was a perfect spot to spend the weekend while skiing in the Tetons. The space was comfortable and the wood stove kept us very warm.`,
		},
	];

	offerings = [
		{
			title: 'Kitchen',
			icon: 'guests',
		},
		{
			title: 'Private patio or balcony',
			icon: 'guests',
		},
		{
			title: 'Centrail air conditioning',
			icon: 'guests',
		},
		{
			title: 'Dedicated workspaces',
			icon: 'bedrooms',
		},
		{
			title: 'Wifi',
			icon: 'bedrooms',
		},
		{
			title: 'Heating',
			icon: 'bedrooms',
		},
		{
			title: '55” 4k TV',
			icon: 'beds',
		},
		{
			title: '1 parking space',
			icon: 'beds',
		},
		{
			title: 'Security cameras',
			icon: 'beds',
		},
		{
			title: 'Free dryer - in unit',
			icon: 'baths',
		},
		{
			title: 'Free washer - in unit',
			icon: 'baths',
		},
		{
			title: 'Ceiling fans',
			icon: 'baths',
		},
	];

	ngOnInit() {
		navigator.geolocation.getCurrentPosition((position) => {
			this.center = {
				lat: position.coords.latitude,
				lng: position.coords.longitude,
			};
		});
	}

	// When the user clicks on <span> (x), close the modal
	close() {
		const modal = document.getElementById('myModal');
		if (modal) modal.style.display = 'none';
	}
}
