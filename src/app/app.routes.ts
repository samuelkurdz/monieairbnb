import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./pages/stays/stays.component'),
	},
	{
		path: 'experiences',
		loadComponent: () => import('./pages/experiences/experiences.component'),
	},
	{
		path: 'online',
		loadComponent: () =>
			import('./pages/online-experiences/online-experiences.component'),
	},
];
