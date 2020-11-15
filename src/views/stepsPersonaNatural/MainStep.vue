<template>
	<div>
		<FirstStep></FirstStep>
	</div>
</template>

<script>
	import FirstStep from "./FirstStep.vue";
	import SecondStep from "./SecondStep.vue";
	import ThirdStep from "./ThirdStep.vue";
	import { mapState } from "vuex";
	export default {
		name: "MainStep",
		components: {
			FirstStep,
			SecondStep,
			ThirdStep
		},
		data() {
			return {

			}
		}
	}
</script>