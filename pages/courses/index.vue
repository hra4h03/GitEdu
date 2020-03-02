<template>
	<div style="margin-top: 50px " class="text-center mb-12">
		<span class="mx-auto my-12 display-1 text-uppercase">Մեր մոտ կարող եք ստանալ որակյալ կրթություն</span>
		<keep-alive>
			<ProgramingTypes :types="programmingTypes" class="my-12" />
		</keep-alive>
	</div>
</template>

<script>
import ProgramingTypes from "~/components/ProgramingTypes";
export default {
	components: {
		ProgramingTypes
	},
	async asyncData({ store, params, query, redirect, $axios }) {
		const { types } = await $axios.$get("/api/courses/types");
		return {
			programmingTypes: types
		};
	}
};
</script>

<style>
</style>
