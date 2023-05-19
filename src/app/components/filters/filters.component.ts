import {
	Component,
	ElementRef,
	EventEmitter,
	HostListener,
	Input,
	Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-filters',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './filters.component.html',
	styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
	@Input() isSideNavOpen = false;
	@Output() closeSideNav = new EventEmitter();
	@Output() clickedOutsideFilters = new EventEmitter();

	placeTypes = [
		{
			type: 'Entire Place',
			description: 'A place all to yourself',
		},
		{
			type: 'Private room',
			description:
				'Your own room in a home or a hotel, plus some shared common spaces.',
		},
		{
			type: 'Shared room',
			description:
				'A sleeping space and common areas that may be shared with others.',
		},
	];
	roomValues = ['Any', '1', '2', '3', '4', '5+'];

	constructor(private eRef: ElementRef<HTMLElement>) {}

	@HostListener('document:click', ['$event'])
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	clickout(event: any) {
		if (!this.eRef.nativeElement.contains(event.target))
			this.clickedOutsideFilters.emit(event);
	}
}
