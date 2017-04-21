
new Vue({
	el: '#skills',

	data:{
	  skills: []
	},
	
	created: function(){
		this.consultarSkill();
	},

	methods:{
		consultarSkill: function(){
			this.$http.get('https://portafolio-luisvilches.herokuapp.com/skills').then(function(res){
				this.skills = res.body;
				console.log(res);
			})
		}
	}
})

new Vue({
	el: '#portfolio',

	data:{
		personas: []
	},

	created: function(){
		this.consultarPortfolio();
	},

	methods: {
		consultarPortfolio: function(){
			this.$http.get('https://portafolio-luisvilches.herokuapp.com/sites').then(function(res){
				this.personas = res.body;
				console.log(res);
			} )
		}
	}
})