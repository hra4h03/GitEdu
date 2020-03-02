<template>
	<v-toolbar
		@mousemove="move($event)"
		dark
		extended
		height="700"
		:src="require('~/assets/bg-img-01.jpg')"
	>
		<v-row>
			<v-col class="col-12">
				<ToolbarItem />
			</v-col>
			<v-col class="col-md-5 col-sm-12 text-center">
				<p class="text-uppercase display-1 font-weight-bold mt-10">կրթություն</p>
				<p class="text-uppercase display-1 font-weight-bold mt-5">պրակտիկա</p>
				<p class="text-uppercase display-1 font-weight-bold mt-5">աշխատանք</p>
				<p class="text-uppercase body-2 mt-8">ստանալ կրթություն</p>
				<v-btn rounded outlined class="text-uppercase">առցանց</v-btn>
				<br />
				<v-btn rounded outlined class="text-uppercase mt-2">գրասենյակում</v-btn>
			</v-col>
			<v-col style="position: relative;">
				<img
					:style="`position: absolute; top: ${image.top}px; left: ${image.left}px`"
					width="400px"
					:src="require('~/assets/himnakan-01.png')"
				/>
			</v-col>
		</v-row>
	</v-toolbar>
</template>

<script>
import ToolbarItem from "~/components/forComponents/header";
export default {
	components: {
		ToolbarItem
	},
	data() {
		return {
			image: {
				top: 20,
				left: 200
			}
		};
	},
	methods: {
		move(e) {
			// var wx = screen.width;
			// var wy = screen.height;

			// var x = e.pageX - offsetLeft;
			// var y = e.pageY - offsetTop;

			// var newx = x - wx / 2;
			// var newy = y - wy / 2;

			var x = screen.width / 2;
			var y = screen.height / 2;
			var num = 3000;
			this.image.left + (e.pageX - x) / num > 250 ||
			this.image.left + (e.pageX - x) / num < 150
				? ""
				: (this.image.left += (e.pageX - x) / 1000);

			this.image.top + (e.pageY - y) / num > 100 ||
			this.image.top + (e.pageY - y) / num < -20
				? ""
				: (this.image.top += (e.pageY - y) / 1000);
		}
	}
};
</script>

<style>
</style>
