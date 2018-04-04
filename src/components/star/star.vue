<template>
	<div class="star-wrapper">
		<div class="star" v-bind:class="starType">
			<span v-for="(item,index) in starClass" v-bind:key="index" class="star-item" v-bind:class="item"></span>
		</div>
	</div>
</template>

<script>
	const STAR_LENGTH = 5;
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
				for (let i = 0; i < scoreOnNum; i++) {
					starClassArr.push(CLS_ON);
				}
				let hasDecimal = score % 1;
				if (hasDecimal > 0 && starClassArr.length < STAR_LENGTH) {
					let Decimal = Math.round(hasDecimal);
					Decimal === 1 ? starClassArr.push(CLS_HALF) : starClassArr.push(CLS_OFF);
				}
				while (starClassArr.length < STAR_LENGTH) {
					starClassArr.push(CLS_OFF);
				}
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
	@import '../../common/css/mixin.scss';
	.star {
		font-size: 0;
		.star-item {
			display: inline-block;
			background-repeat: no-repeat;
		}
		&.star-48 .star-item {
			width: 20px;
			height: 20px;
			margin-right: 22px;
			background-size: 20px 20px;
			&.on {
				@include bg-image('./star48_on')
			}
			&.off {
				@include bg-image('./star48_off')
			}
			&.half {
				@include bg-image('./star48_half')
			}
		}
		&.star-36 .star-item {
			width: 15px;
			height: 15px;
			margin-right: 6px;
			background-size: 15px 15px;
			&.on {
				@include bg-image('./star36_on')
			}
			&.off {
				@include bg-image('./star36_off')
			}
			&.half {
				@include bg-image('./star36_half')
			}
		}
		&.star-24 .star-item {
			width: 10px;
			height: 10px;
			margin-right: 3px;
			background-size: 10px 10px;
			&.on {
				@include bg-image('./star24_on')
			}
			&.off {
				@include bg-image('./star24_off')
			}
			&.half {
				@include bg-image('./star24_half')
			}
		}
	}
</style>
