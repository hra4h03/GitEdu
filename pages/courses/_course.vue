<template>
	<div class="grey lighten-4">
		<div class="course" :style="`background-image: url(${currentCourse.image})`">
			<div class="glassEffect">
				<div class="d-flex align-center justify-center" style="padding-top: 10%">
					<div>
						<h1
							class="white--text animate font-weight-bold text-capitalize"
						>{{ currentCourse.title }} դասընթաց</h1>
					</div>
				</div>
			</div>
		</div>
		<v-toolbar class="main_gradient" dark>
			<v-container>
				<v-toolbar color="rgba(12,12,23,0)" flat>
					<v-toolbar-items class="mx-auto">
						<v-btn text v-for="(option, index) in Object.entries(currentCourse.options)" :key="index">
							<div v-if="option[0] !== '_id'">
								{{ option[0] }} - {{ option[1] }}
								<v-btn icon>
									<v-icon>mdi-check-circle</v-icon>
								</v-btn>
							</div>
						</v-btn>
					</v-toolbar-items>
					<v-spacer></v-spacer>
					<v-btn icon>
						<v-icon>mdi-magnify</v-icon>
					</v-btn>
				</v-toolbar>
			</v-container>
		</v-toolbar>
		<div class="grey lighten-4">
			<v-container class="fill-height">
				<v-row class="pb-12">
					<v-col class="mt-10 col-12 text-center">
						<p class="display-1 mb-10 red--text font-weight-bold">Դասընթացի բնութագրերը</p>
						<span class="mx-12 px-12" v-html="currentCourse.description"></span>
					</v-col>
					<v-col class="d-flex justify-center align-center">
						<v-img
							v-for="(language, i) in languages"
							:key="i"
							max-width="80px"
							class="mx-5 d-flex"
							:src="language"
						></v-img>
					</v-col>
				</v-row>

				<!-- <v-row>
					<v-col class="col-4">
						<v-card flat class="pa-5" color="rgba(12,12,12,0)" style="border-radius: 10px;">
							<p class="display-1 ma-5 font-weight-bold">Ուսուցման ծրագիր</p>
							<div class="my-3" v-for="(mounth, index) in currentCourse.mounths" :key="index">
								<v-hover v-slot:default="{ hover }">
									<v-btn
										style="width: 100%; height:70px;"
										@click="id = index"
										elevation="4"
										class="mb-5"
										:outlined="!hover && id !== index"
									>{{ index+1 }}# {{ mounth.title }}</v-btn>
								</v-hover>
							</div>
						</v-card>
					</v-col>
					<v-col class="col-8 px-12">

					</v-col>
				</v-row>-->
			</v-container>
		</div>
		<Trends :name="currentCourse.title" :text="currentCourse.averageTableOfSalary" />
		<v-container>
			<v-row>
				<v-col class="col-12 my-12">
					<v-card color="rgba(12,12,12,0)" class="text-center" flat>
						<p class="display-1 font-weight-bold text-uppercase">Սեմինար</p>
						<v-container>
							<v-row>
								<v-col class="col-8">
									<v-img height="300" class="mx-auto" src="https://itproger.com/intensive/img/practicum.gif"></v-img>
								</v-col>
								<v-col class="col-4">
									<v-card-text
										class="mx-auto"
									>Կատարել առաջադրանքներ մեր հատուկ խմբագրիչի ներսում, որը ստուգում է ձեր ծածկագիրը կենդանի ռեժիմով և ցույց է տալիս կամ սխալներ կամ առաջադրանքի ճիշտ կատարում: Դուք կարող եք փորձարկել մեր խմբագրի աշխատանքը այս հղումով: Խմբագիրը թույլ է տալիս պրակտիկացնել մի քանի ծրագրավորման լեզուներով: Խմբագրի հաշվին դուք կսովորեք, թե ինչպես ճիշտ կոդ գրել և դրա հիման վրա ստեղծել տարբեր նախագծեր:</v-card-text>
								</v-col>
							</v-row>
						</v-container>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
		<TrainingProfgram
			v-for="(quarter, index) in currentCourse.yearLearning"
			:key="index"
			:gradient="`gradient_${index+1}`"
			:content="quarter"
		/>

		<v-container>
			<Opportunity :chances="currentCourse.opportunities" :trainers="currentCourse.trainer" />
		</v-container>
	</div>
</template>

<script>
import Opportunity from "~/components/courses/opportunity";
import Trends from "~/components/courses/workTrends";
import TrainingProfgram from "~/components/courses/trainingProgram";

import { mapState } from "vuex";
export default {
	components: {
		Opportunity,
		Trends,
		TrainingProfgram
	},
	// fetch({ store, params }) {
	// 	if (
	// 		store.state.courses_cache.courses.some(e => e.title === params.course)
	// 	) {
	// 		return;
	// 	}
	// 	return store.dispatch("courses_cache/get_COURSE", params.course);
	// },
	// computed: {
	// 	...mapState({
	// 		currentCourse: "courses_cache/currentCourse",
	// 		languages: "courses_cache/languages",
	// 		courses: "courses_cache/courses"
	// 	})
	// }

	async asyncData({ params, store, $axios }) {
		let { data } = await $axios.get(`/api/courses?title=${params.course}`);

		return {
			currentCourse: data.course,
			languages: data.languages
		};
	}
};
</script>

<style scope>
.course {
	background-size: cover;
	height: 400px;
}
.glassEffect {
	width: 100%;
	height: inherit;
	background: rgb(225, 153, 19);
	background: linear-gradient(
		169deg,
		rgba(225, 153, 19, 0.51) 20%,
		rgba(211, 15, 75, 0.615196420365021) 55%,
		rgba(210, 179, 62, 0.51) 84%
	);
}

.animate {
	animation-name: example;
	animation-duration: 2s;
	animation-iteration-count: infinite;
}
@keyframes example {
	0% {
		font-size: 65px;
	}
	50% {
		font-size: 67px;
	}
	100% {
		font-size: 65px;
	}
}
</style>
