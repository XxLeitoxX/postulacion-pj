<template>
	<div>
		<!-- {{$store.state.showStepOne}} -->
		<!-- {{showStepOne}} -->
		<!-- <StepOne v-show="showStepOne"></StepOne>
		<StepTwo v-show="showStepTwo"></StepTwo>
		<StepThree v-show="showStepThree"></StepThree>
		<StepFour v-show="showStepFour"></StepFour> -->
		<StepFive v-show="showStepFive"></StepFive>
	</div>
</template>
<script>
	import StepOne from "./StepOne.vue";
	import StepTwo from "./StepTwo.vue";
	import StepThree from "./StepThree.vue";
	import StepFour from "./StepFour.vue";
	import StepFive from "./StepFive.vue";

	import { mapState, mapMutations, mapActions } from "vuex";

	export default {
		name: "StepAll",
		components: {
			StepOne,
			StepTwo,
			StepThree,
			StepFour,
			StepFive
		},
		data() {
			return {
				showComponent: ''
			}
		},
		methods: {
		},

		computed: {
			...mapState([
				"showStepOne",
				"showStepTwo",
				"showStepThree",
				"showStepFour",
				"showStepFive",
		    ]),
		}
	}
</script>

