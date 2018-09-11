$(function(){

	function generator(a,b){
		$('<h2/>',{
            class: 'col-12',
			text: a.header
		}).appendTo('#djordje');

		for (var i = 0; i < a.sponsor.length; i++) {

			$('<figure/>',{
				id : a.id + i,
				class: b
			}).appendTo('#djordje');
	
			$('<img/>',{
				src: 'assets/sponsors/' + a.sponsor[i].source ,
				class: 'img-fluid'
			}).appendTo('#' + a.id + i);
		}
	}

	generator(sponsors.generalSponsors , 'col-4');
	generator(sponsors.goldSponsor , 'col-4');
    generator(sponsors.silverSponsor , 'col-4');
})