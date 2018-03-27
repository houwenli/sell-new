import Vue from 'vue';
import Router from 'vue-router';
import goods from '##/goods/goods.vue';
import seller from '##/seller/seller.vue';
import ratings from '##/ratings/ratings.vue';

Vue.use(Router);

export default new Router({
	routes: [
	{
		path: '/',
		redirect: '/goods'
	},
	{
		path: '/goods',
		component: goods
	},
	{
		path: '/seller',
		component: seller
	},
	{
		path: '/ratings',
		component: ratings
	}],
	linkActiveClass: 'active'
});
