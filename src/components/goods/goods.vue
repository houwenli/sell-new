<template>
	<div v-on:click="linkTo">
		我是 goods
	</div>
</template>

<script>
	export default {
		name: '',
		data () {
			return {

			};
		},
		computed: {

		},
		methods: {
			linkTo () {
				this.$router.push('seller');
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
