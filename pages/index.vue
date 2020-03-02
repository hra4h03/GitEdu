<template>
	<div>
		<v-container>
			<keep-alive>
				<MainNews :opportunities="opportunities" />
			</keep-alive>
		</v-container>
		<v-img max-height="700" contain :src="require('~/assets/kompidem2-01.png')">
			<v-container>
				<v-row class="my-10">
					<v-col style="position: relative;">
						<!-- <img
							:style="`position: absolute; top: ${image.top}px; left: ${image.left}px`"
							width="400px"
							:src="require('~/assets/img/komp-01.jpg')"
						/>-->
					</v-col>
					<v-col class="text-center ml-12 my-12 col-md-6 col-sm-12">
						<div>
							<p class="display-1 mb-10">ՄԵՐ ՄԱՍԻՆ</p>
							<span v-html="about_us"></span>
						</div>
					</v-col>
				</v-row>
			</v-container>
		</v-img>
		<v-container>
			<Slogans />
		</v-container>
		<v-row>
			<keep-alive>
				<ProgramingTypes :types="programmingTypes" class="mx-4" />
			</keep-alive>
		</v-row>
		<Footer />
	</div>
</template>

<script>
import MainNews from "~/components/MainNews";
import ProgramingTypes from "~/components/ProgramingTypes";
import Slogans from "~/components/Slogans";
import Footer from "~/components/Footer";

export default {
	layout: "firstPage",
	components: {
		MainNews,
		ProgramingTypes,
		Footer,
		Slogans
	},
	async asyncData({ store, env, params, query, redirect, error, $axios }) {
		const { mainPage } = await $axios.$get("/api/home");
		const { types } = await $axios.$get("/api/courses/types");
		// console.log(mainPage[0].about_us);

		return {
			about_us: mainPage[0].about_us,
			opportunities: mainPage[0].opportunities,
			programmingTypes: types
		};
	},
	data() {
		return {
			image: {
				top: 100,
				left: 100
			}
		};
	}
	// methods: {
	// 	move(e) {
	// 		var x = screen.width / 2;
	// 		var y = screen.height / 2;

	// 		this.image.left + (e.pageX - x) / 1000 > 150 ||
	// 		this.image.left + (e.pageX - x) / 1000 < 50
	// 			? ""
	// 			: (this.image.left += (e.pageX - x) / 1000);

	// 		this.image.top + (e.pageY - y) / 1000 > 150 ||
	// 		this.image.top + (e.pageY - y) / 1000 < 50
	// 			? ""
	// 			: (this.image.top += (e.pageY - y) / 1000);
	// 	}
	// }
};
</script>
