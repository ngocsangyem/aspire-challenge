import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import CardsManagement from '@/views/CardsManagement/CardsManagement.vue';

/*
* Todo:
* - Add routes for the following views:
*  - Home
*  - CardsManagement
*  - Payments
*  - Credit
*  - Settings
*/
export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: CardsManagement,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});