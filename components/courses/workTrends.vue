<template>
	<div class="clip gradient_2 py-12">
		<v-container class="py-12">
			<v-row>
				<v-col>
					<v-card max-width="60%" class="mx-auto my-12" dark flat color="rgba(12,12,12,0)">
						<v-card-title class="headline font-weight-bold text-uppercase">Աշխատավարձի միջին աղյուսակ</v-card-title>
						<v-card-text v-html="text"></v-card-text>
						<v-card-actions>
							<v-btn width="200px" x-large color="red" @click="dialog = !dialog">ԳՐԱՆՑՎԵՔ ՀԻՄԱ</v-btn>
						</v-card-actions>
						<v-dialog v-model="dialog" persistent max-width="600px">
							<v-card class="purple darken-4" dark>
								<v-card-title>
									<span class="headline">Դասընթացին մասնակցման հայտ</span>
									<v-spacer />
									<v-btn fab x-small @click="dialog = !dialog" dark color="red">
										<v-icon>mdi-close</v-icon>
									</v-btn>
								</v-card-title>
								<v-img width="60%" class="mx-auto my-5" :src="require('~/assets/img/logogit.png')"></v-img>

								<v-card-text>
									<v-container>
										<v-row>
											<v-col cols="12">
												<v-text-field label="Անուն*" type="text" required></v-text-field>
												<v-text-field label="Ազգանուն*" type="text" required></v-text-field>
												<v-text-field label="Էլ-հասցե*" required></v-text-field>
												<v-text-field label="Հեռախոսահամար*" type="text" required></v-text-field>
											</v-col>
										</v-row>
									</v-container>
								</v-card-text>
								<v-card-actions class="mx-md-12">
									<v-btn dark disabled>* ՊԱՐՏԱԴԻՐ ԴԱՇՏԵՐ</v-btn>

									<v-spacer></v-spacer>
									<v-btn color="red darken-4" @click="dialog = false">Փակել</v-btn>
									<v-btn color="blue darken-4" @click="dialog = false">Ուղարկել</v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-card>
				</v-col>
				<v-col>
					<v-img
						class="mx-auto"
						height="400"
						width="450"
						src="https://itproger.com/intensive/img/front-end-chart.svg"
					></v-img>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		}
	},
	data() {
		return {
			dialog: false
		};
	}
};
</script>

<style scoped>
.clip {
	width: 100%;
	clip-path: polygon(50% 15%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
}
</style>
