import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-icon',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
	@Input({ required: true }) icon = '';
	@Input() classes: string | undefined;
	@Input() sizeClasses: string | undefined;
	@Output() oClick = new EventEmitter();
}
