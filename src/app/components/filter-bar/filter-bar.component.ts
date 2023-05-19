import {
	Component,
	ElementRef,
	HostListener,
	ViewChild,
	signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { FiltersComponent } from '../filters/filters.component';

@Component({
	selector: 'app-filter-bar',
	standalone: true,
	imports: [CommonModule, IconComponent, FiltersComponent],
	templateUrl: './filter-bar.component.html',
	styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
	isSideNavOpen = signal(false);
	@ViewChild('funnelContainer') funnelContainerRef!: ElementRef;

	constructor(private eRef: ElementRef<HTMLElement>) {}

	@HostListener('document:click', ['$event'])
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	clickout(event: any) {
		if (this.isClickOnFunnelContainer(event)) {
			this.isSideNavOpen.set(!this.isSideNavOpen());
			// isSideNav is already set to whatever it will be, so working with new value
			document.body.style.overflow = this.isSideNavOpen() ? 'hidden' : '';
			return;
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	isClickOnFunnelContainer(event: any): boolean {
		return (
			this.funnelContainerRef.nativeElement == event.target ||
			this.funnelContainerRef.nativeElement.contains(event.target)
		);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handleClickedOutsideFilters(event: any) {
		if (this.isClickOnFunnelContainer(event)) return;
		// document.body.style.overflow = this.isSideNavOpen() ? '' : 'hidden';
		if (!this.isSideNavOpen()) return;
		this.isSideNavOpen.set(false);
		document.body.style.overflow = this.isSideNavOpen() ? 'hidden' : '';
	}
}
