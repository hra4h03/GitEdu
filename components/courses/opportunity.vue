<template>
	<v-row>
		<v-col class="mx-auto col-12">
			<v-card style="border-radius: 10px;" color="white">
				<p class="title main_gradient font-weight-bold py-4 text-center white--text lighten-2">
					<v-icon class="mr-3" color="white" x-large>mdi-flag-outline</v-icon>Դասընթացի ավարտից հետո Դուք կկարողանաք `
				</p>
				<v-card-text class="py-3 px-10">
					<p text v-for="(whatCan, index) in chances" :key="index">
						<v-icon style="color: black">mdi-checkbox-marked-outline</v-icon>
						{{ whatCan }}
					</p>
				</v-card-text>
			</v-card>
		</v-col>
		<v-col class="mx-auto col-12">
			<v-card style="border-radius: 10px;" color="white">
				<p
					class="headline font-weight-bold text-center white--text py-5 main_gradient darken-4 lighten-2"
				>Դասընթացավարներ</p>
				<v-row>
					<v-card-text
						v-for="(trainer, index) in trainers"
						:key="index"
						class="text-center mx-auto col-3 py-3"
					>
						<v-avatar size="100" class="mx-auto">
							<img :src="trainer.image" alt />
						</v-avatar>
						<p class="title black--text font-weight-bold" v-html="trainer.name"></p>
						<span v-html="trainer.info" class="overline"></span>
					</v-card-text>
				</v-row>
				<v-divider></v-divider>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
export default {
	props: {
		chances: {
			type: Array,
			required: true
		},
		trainers: {
			type: Array,
			required: true
		}
	}
};
</script>

<style>
</style>
