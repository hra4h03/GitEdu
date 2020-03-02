<template>
	<v-card flat elevation="24" tile color="#da225d">
		<v-img min-width="100%" :src="require('~/assets/footer-bg-01.png')">
			<v-row class="text-center">
				<v-col class="col-6 hidden-sm-and-down"></v-col>
				<v-col class="col-lg-6 col-md-12 white--text mt-5">
					<p class="display-1">ԲԱԺԱՆՈՐԴԱԳՐՎԵՔ</p>
					<p>Եւ եղեք տեղեկացված մեր նորություններին</p>
					<v-text-field
						dark
						color="red"
						outlined
						rounded
						background-color="rgba(12,12,12,0)"
						style=" max-width: 250px"
						class="mx-auto"
						label="Ձեր Email հասցեն"
						placeholder
						solo
					></v-text-field>
					<v-btn rounded dark outlined>ՈՒղարկել</v-btn>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="col-lg-5 col-md-12">
					<v-card flat tile class="mx-md-12 pa-md-12" dark color="rgba(12,12,12,0)">
						<v-img
							max-width="250px"
							class="mx-auto"
							max-height="70px"
							src="http://gitedu.am/static/img/logogit.png"
						></v-img>

						<v-card-text>«ԳԼՈԲԱԼ ԻՏ» ՍՊԸ-ն հիմնադրվել է 2017թ.-ի հոկտեմբերի 19ին Գ. Քոսյանի կողմից: Մենք առաջարկում ենք ծրագրային տարատեսակ լուծումներ, որոնց նպատակն է մեծացնել Ձեր բիզնեսի շահութաբերությունը և նպաստել աճին: Մեր ստեղծարար թիմը համատեղ ուժերով տալիս Է նորարարական լուծումներ, որոնք նպաստում են Ձեր բիզնեսի թիրախային լսարանի ներգրավմանը:</v-card-text>
						<v-card-actions>
							<div class="mx-auto">
								<v-btn icon v-for="(icon, i) in icons" :key="i">
									<v-icon>{{ icon }}</v-icon>
								</v-btn>
							</div>
						</v-card-actions>
					</v-card>
				</v-col>
				<v-col class="col-lg-1 hidden-md-and-down"></v-col>
				<v-col class="col-lg-2 col-md-4 mx-auto" v-for="(column, index) in footerInfo" :key="index">
					<v-card dark tile flat color="rgba(12,12,12,0)">
						<v-card-title class="my-12">{{ column.title }}</v-card-title>
						<v-card-text class="mt-12">
							<p v-for="(item, i) in column.info" :key="i">{{ item }}</p>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-img>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			icons: ["mdi-facebook", "mdi-instagram", "mdi-twitter", "mdi-youtube"],
			footerInfo: [
				{
					title: "Դասընթացներ",
					info: ["Վեբ ծրագրավորում", "Ծրագրավորում", "Մուլտիմեդիա"]
				},
				{
					title: "Կայքի Քարտեզ",
					info: [
						"Դասընթացներ",
						"Մեր մասին",
						"Խաղերի պատրաստում",
						"Ֆիլմերի պատրաստում",
						"Արհեստական ինտելեկտ"
					]
				},
				{
					title: "Հետադարձ կապ",
					info: [
						"ք. Երևան Պ. Սևակ 15/1",
						"ք. Աբովյան գ. Արամուս Մշակույթի տուն",
						"+374 55 560 590",
						"+374 95 355 255",
						"+374 94 806 714",
						"+374 98 960 950",
						"gitedu@bk.ru",
						"globalit@gitedu.am"
					]
				}
			]
		};
	}
};
</script>

<style>
</style>
