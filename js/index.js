var dateTo = new Date('Nov 5, 2018 10:00:00').getTime();

var x = setInterval(function(){

	var dateNow = new Date().getTime(), 
		distance = dateTo - dateNow;

	var days = Math.floor( distance / (1000 * 60 * 60 * 24 )),
		hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60)),
		minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60)),
		seconds = Math.floor((distance % (1000 * 60)) / 1000 );

	document.getElementById('time').innerHTML=  days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

	if (distance < 1000) {
		clearInterval(x);
		document.getElementById('time').innerHTML = "Dobro dosli";
	}

},1000)