<template>
	<v-app-bar class="main_gradient" height="100">
		<ToolbarItem />
	</v-app-bar>
</template>

<script>
import ToolbarItem from "~/components/forComponents/header";
export default {
	components: {
		ToolbarItem
	}
};
</script>

<style>
.main_gradient {
	background: rgb(168, 73, 173);
	background: linear-gradient(
		169deg,
		rgba(168, 73, 173, 1) 20%,
		rgba(121, 72, 173, 1) 33%,
		rgba(211, 15, 194, 0.8690826672465861) 64%
	);
}
</style>
