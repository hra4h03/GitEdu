<template>
	<v-row class="my-2">
		<v-card
			class="col-md-4 col-sm-6 col-xs-12 mx-auto"
			tile
			flat
			v-for="(type, i) in types"
			:key="i"
			:color="type.color"
		>
			<v-img width="250px" class="mx-auto" :src="type.logo"></v-img>
			<v-container class="text-center">
				<p class="title text-uppercase white--text" v-html="type.name"></p>
				<v-hover v-for="(course, i) in type.courses" :key="i" v-slot:default="{ hover }">
					<v-card
						elevation="12"
						class="my-2 mx-4 cursor white pa-3"
						:class="hover ? `${type.color} lighten-4 white--text` : 'white'"
						style="border-radius: 5px; height: 50px;"
						@click="$router.push(`/courses/${course.title}`)"
					>
						<span class="float-left mx-5 text-uppercase" v-html="course.title"></span>
						<div class="float-right">
							<v-img v-show="hover" :src="course.logo" max-width="60px" max-height="60px" class="mt-n4"></v-img>
						</div>
					</v-card>
				</v-hover>
			</v-container>
		</v-card>
	</v-row>
</template>

<script>
export default {
	props: {
		types: {
			required: true,
			type: Array
		}
	}
};
</script>

<style>
</style>
