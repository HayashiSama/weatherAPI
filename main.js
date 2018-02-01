$(document).ready(function()
{

	$("form").submit(function()
	{
		var apiKey="7a14d46ecef171b1f3ad7cdc9b9209ad";

		var city = $("#city").val();

		var URL = "http://api.openweathermap.org/data/2.5/weather?q="+ $("#city").val()+"&APPID=" + apiKey;		
		console.log(URL);
	//	T(K) × 9/5 - 459.67

		//getJSON call
		$.get(URL, function(data)
		{

			var kelvin = data.main.temp;
			console.log(kelvin * 9 / 5 - 459.67)
			$('#cityout').text(city);
			$('#temperature').text("Temperature: " + Math.trunc((kelvin * 9 / 5 - 459.67), 4) + " F");
				
		}, 'json');

		return false;


	})

})

