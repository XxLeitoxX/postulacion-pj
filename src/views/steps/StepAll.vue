<template>
	<div>
		<!-- {{$store.state.showStepOne}} -->
		<!-- {{showStepOne}} -->
		<StepOne v-show="showStepOne"></StepOne> <!-- showStepOne -->
		<StepTwo v-show="showStepTwo"></StepTwo> <!-- showStepTwo -->
		<!-- <StepThree v-show="showStepThree"></StepThree> --> <!-- showStepThree -->
		<!-- <StepFour v-show="showStepFour"></StepFour> --> <!-- showStepFour -->
		<StepFive v-show="showStepFive"></StepFive> <!-- showStepFive -->
		<stepSixSuccess v-show="showStepSix"></stepSixSuccess>
	</div>
</template>
<script>
	import StepOne from "./StepOne.vue";
	import StepTwo from "./StepTwo.vue";
	import StepThree from "./StepThree.vue";
	import StepFour from "./StepFour.vue";
	import StepFive from "./StepFive.vue";
	import stepSixSuccess from "./StepSixSuccess.vue";

	import { mapState, mapMutations, mapActions } from "vuex";

	export default {
		name: "StepAll",
		components: {
			StepOne,
			StepTwo,
			StepThree,
			StepFour,
			StepFive,
			stepSixSuccess
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
				"showStepSix",
		    ]),
		}
	}
</script>

