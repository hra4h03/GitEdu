<template>
	<v-container class="d-flex" align="center">
		<v-menu offset-y>
			<template v-slot:activator="{ on }">
				<v-app-bar-nav-icon v-on="on" class="hidden-lg-only" />
			</template>
			<v-list>
				<v-list-item v-for="(link, index) in links" :key="index">
					<v-menu offset-y open-on-hover>
						<template v-slot:activator="{ on }">
							<v-list-item-title class="cursor" v-on="on" @click="$router.push(link.to)">{{ link.title }}</v-list-item-title>
						</template>
						<template v-if="link.dropdown">
							<v-list>
								<v-list-item v-for="(item, index) in link.dropdown" :key="index" class="cursor">
									<v-list-item-title @click="$router.push(`/${link.to}/${item.to}`)">{{ item.title }}</v-list-item-title>
								</v-list-item>
							</v-list>
						</template>
					</v-menu>
				</v-list-item>
			</v-list>
		</v-menu>
		<v-img
			class="hidden-xs-only"
			max-width="250px"
			max-height="70px"
			src="http://gitedu.am/static/img/logogit.png"
		></v-img>

		<v-toolbar-items class="ml-3 hidden-md-and-down mt-2" align="center">
			<v-menu v-for="(link, index) in links" :key="index" offset-y open-on-hover>
				<template v-slot:activator="{ on }">
					<v-btn text dark v-on="on" @click="$router.push(`${link.to}`)">{{ link.title }}</v-btn>
				</template>
				<template v-if="link.dropdown">
					<v-list>
						<v-list-item
							v-for="(item, index) in link.dropdown"
							:key="index"
							class="cursor"
							@click="$router.push(`${link.to}/${item.to}`)"
						>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</template>
			</v-menu>
		</v-toolbar-items>
		<v-spacer />
		<v-toolbar-items>
			<v-btn dark icon fab>
				<v-icon>mdi-account</v-icon>
			</v-btn>
			<v-btn dark icon fab>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
		</v-toolbar-items>

		<v-menu offset-y>
			<template v-slot:activator="{ on }">
				<v-btn
					dark
					class="my-4"
					style="border: solid 1px"
					outlined
					rounded
					text
					v-on="on"
				>{{ dropdown_lang[active_lang] }}</v-btn>
			</template>
			<v-list>
				<v-list-item v-for="(item, index) in dropdown_lang" :key="index" @click="active_lang = index">
					<v-list-item-title>{{ item }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
	computed: {
		...mapState(["links", "active_lang", "dropdown_lang"])
	}
};
</script>

<style>
</style>
