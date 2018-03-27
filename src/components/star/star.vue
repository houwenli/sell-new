<template>
	<div class="star-wrapper">
		<div class="star" v-bind:class="starType">
			<span class="star-item on"></span>
			<span class="star-item on"></span>
			<span class="star-item on"></span>
			<span class="star-item on"></span>
			<span class="star-item off"></span>
		</div>
	</div>
</template>

<script>
const starLength = 5;
const CLS_ON = 'on';
const CLS_OFF = 'off';
const CLS_HALF = 'half';
export default {
	name: '',
	props: {
		size: {
			type: Number
		},
		rateNum: {
			type: Number
		}
	},
	data () {
		return {

		};
	},
	computed: {
		starType () {
			return 'star-' + this.size;
		},
		starClass () {
			let score = this.rateNum;
			let starClassArr = [];
			let scoreOnNum = Math.floor(score) / 1;
			console.log(scoreOnNum);
			return starClassArr;
		}
	},
	components: {

	},
	created () {

	}
};
</script>

<style lang="scss">

</style>
