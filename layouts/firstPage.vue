<template>
	<v-app dark>
		<Header />
		<nuxt />
	</v-app>
</template>

<script>
import Header from "~/components/MainHeader";
export default {
	data() {
		return {};
	},
	components: {
		Header
	}
};
</script>
<style>
.cursor {
	cursor: pointer;
}
.gradient_1 {
	background: rgb(226, 2, 2);
	background: linear-gradient(
		124deg,
		rgba(226, 2, 2, 1) 35%,
		rgba(211, 176, 15, 1) 71%
	);
}
.gradient_2 {
	background: rgb(11, 91, 133);
	background: linear-gradient(
		336deg,
		rgba(11, 91, 133, 1) 35%,
		rgba(107, 163, 213, 1) 75%
	);
}
.gradient_3 {
	background: rgb(226, 2, 2);
	background: linear-gradient(
		124deg,
		rgba(226, 2, 2, 1) 35%,
		rgba(211, 176, 15, 1) 71%
	);
}

.gradient_4 {
	background: rgb(226, 2, 2);
	background: linear-gradient(
		124deg,
		rgba(226, 2, 2, 1) 35%,
		rgba(211, 176, 15, 1) 71%
	);
}
.gradient_5 {
	background: rgb(226, 2, 2);
	background: linear-gradient(
		124deg,
		rgba(226, 2, 2, 1) 35%,
		rgba(211, 176, 15, 1) 71%
	);
}
</style>
