<template>
	<v-row>
		<v-col class="col-md-3 col-sm-6 col-xs-12 text-center" v-for="(card, i) in slogans" :key="i">
			<v-hover v-slot:default="{ hover }">
				<v-card
					hover
					min-height="410px"
					:class="hover ? `white--text` : '' "
					:color="hover ? card.color : 'white'"
				>
					<v-avatar size="180">
						<img :src="card.image" height="200px" />
					</v-avatar>
					<p class="title">{{ card.title }}</p>
					<v-card-text :class="hover ? `white--text` : '' ">{{ card.text }}</v-card-text>
				</v-card>
			</v-hover>
		</v-col>
	</v-row>
</template>

<script>
export default {
	data() {
		return {
			slogans: [
				{
					color: "blue darken-2",
					image:
						"http://gitedu.am/static/img/aravelutyunner/code-course-illustration.png",
					title: "Որակյալ կրթություն",
					text:
						"Ուսումնական մեթոդիկան հիմնված է պրակտիկ հանձնարարությունների հիման վրա, այդպիսով, գիտելիքներն ամրապնդվում են անմիջապես գործնականում:"
				},
				{
					color: "red",
					image:
						"http://gitedu.am/static/img/aravelutyunner/results-illustration.png",
					title: "Բարձր մոտիվացիա",
					text:
						"Անընդմեջ մարտահրավերներ և արդյունքների հասնելու ձգտումներ։ Երբ ամեն մի ձեռքբերում գնահատվում է և մոտիվացնում` էլ ավելիին հասնելու:"
				},

				{
					color: "orange",
					image:
						"http://gitedu.am/static/img/aravelutyunner/consultation-illustration.png",
					title: "Ծրագրավորողների ակումբ",
					text:
						"Դասընթացների ավարտից հետո դուք կկարողնանաք մասնակցել կազմակերպվող սեմինարներին և միջոցառումներին...."
				},
				{
					color: "green",
					image: "http://gitedu.am/static/img/aravelutyunner/53382.png",
					title: "Ուսանողներին",
					text:
						"Եթե մասնագետ, ապա փորձառու, եթե կուրսեր, ապա որակյալ, եթե արդյունք, ապա երաշխավորված! Նվաճեք նորանոր բարձունքներ: Դեպի գիտելիքահենք երկիր:"
				}
			]
		};
	}
};
</script>

<style>
</style>
