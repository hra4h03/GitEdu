<template>
	<v-content class="block white--text px-12" :class="gradient">
		<v-toolbar flat color="rgba(12,12,12,0)">
			<v-toolbar-title>
				<div class="outside">
					<div class="inside d-flex justify-center align-center" :class="gradient">
						<v-icon dark>mdi-web</v-icon>
					</div>
				</div>
			</v-toolbar-title>
			<v-toolbar-items>
				<v-btn dark text>
					<span class="display-1 font-weight-bold mr-5">{{ content.quarter }}</span> ՔԱՌՈՐԴ
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>

		<v-row>
			<v-col class="col-md-6 col-sm-12 pa-12">
				<v-card flat color="transparent" dark>
					<v-card-title class="headline text-uppercase font-weight-bold">Մասնագիտության ներածություն</v-card-title>
					<v-card-text>{{ content.begining }}</v-card-text>
					<v-card-title class="text-uppercase font-weight-bold">ԴԱՍԸՆԹԱՆԵՐ</v-card-title>
					<v-btn
						v-for="(item, index) in content.topics"
						:key="index"
						:outlined="id === index"
						:class="id === index ? `${gradient} darken-4` : ''"
						class="mx-auto d-flex align-center px-4 mb-3 font-weight-bold black--text"
						height="50px"
						width="80%"
						color="white"
						@click="id = index"
					>{{ item.title }}</v-btn>
					<v-card-title class="text-uppercase font-weight-bold">Արդյունքը</v-card-title>

					<div style="border: 1px solid white; border-radius: 5px" class="pa-4">
						<v-card flat color="transparent">
							<v-card-text>{{ content.result }}</v-card-text>
						</v-card>
					</div>
				</v-card>
			</v-col>
			<v-col class="col-md-6 col-sm-12">
				<v-card flat class="pa-5">
					<p class="display-1 ma-5 red--text font-weight-bold">Նկարագրություն</p>
					<v-card-text>
						<img :src="whatToShow.logo" height="70px" width="70px" class="float-left mx-4 mb-4" />
						{{ whatToShow.text }}
					</v-card-text>
					<v-card-text></v-card-text>
					<v-img height="350px" :src="whatToShow.image"></v-img>
					<v-card-actions>
						<v-btn dark color="blue">Արդյունք</v-btn>
						<v-btn dark color="green">Վիդեո դասընթացներ</v-btn>
						<v-btn dark color="red">Առաջադրանքներ</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-content>
</template>

<script>
export default {
	props: {
		gradient: String,
		content: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			drawer: false,
			id: 0
		};
	},
	computed: {
		whatToShow() {
			return this.content.topics[this.id];
		}
	}
};
</script>

<style scoped>
.block {
	min-height: 600px;
}
.outside {
	position: relative;
	height: 100px;
	width: 60px;
	background-color: wheat;
	clip-path: polygon(100% 0, 100% 75%, 50% 100%, 0 75%, 0 0);
	border-radius: 5px;
}
.inside {
	position: absolute;
	top: 5px;
	left: 5px;
	right: 5px;
	bottom: 5px;
	border-radius: 5px;
	clip-path: polygon(100% 0, 100% 75%, 50% 100%, 0 75%, 0 0);
}
</style>
