<template>
	<div>
		<FirstStep v-show="showFirstStep"></FirstStep>
		<!-- <SecondStep v-show="showSecondStep"></SecondStep> -->
		<ThirdStep v-show="showThirdStep"></ThirdStep>
		<SuccessStep v-show="showSuccessStep"></SuccessStep>
	</div>
</template>

<script>
	import FirstStep from "./FirstStep.vue";
	import SecondStep from "./SecondStep.vue";
	import ThirdStep from "./ThirdStep.vue";
	import SuccessStep from "./SuccessStep.vue";
	import { mapState } from "vuex";
	export default {
		name: "MainStep",
		components: {
			FirstStep,
			SecondStep,
			ThirdStep,
			SuccessStep,
		},
		data() {
			return {

			}
		},
		methods: {

		},

		computed: {
			...mapState([
				"showFirstStep",
				"showSecondStep",
				"showThirdStep",
				"showSuccessStep"
		    ]),
		}
	}
</script>