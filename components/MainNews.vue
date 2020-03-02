<template>
	<v-row class="mt-n12">
		<v-col class="col-md-4 col-sm-6 col-12 mx-auto" v-for="(opp, i) in opportunities" :key="i">
			<v-card
				height="250px"
				dark
				:class="`gradient_${i%3 +1}`"
				style="border-radius: 30px"
				class="text-center mx-auto"
			>
				<v-avatar style="border-radius: 50%;" class="mx-auto grey lighten-3 mt-n10" size="120">
					<img :src="opp.image" />
				</v-avatar>
				<p class="title mb-n3">{{ opp.title }}</p>
				<v-card-text>{{ opp.description }}</v-card-text>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
	props: {
		opportunities: Array
	},
	data() {
		return {
			model: null
		};
	}
};
</script>

<style>
</style>
