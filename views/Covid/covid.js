


//when document loads fetch the corona status
	$(document).ready(function(){
		$.ajax({ url: "https://api.covidindiatracker.com/state_data.json",
				context: document.body,
				success: function(data){
					console.log(data);
					//sort descending on basis of confirmed
					data = data.sort((a, b) => {
						return b.confirmed - a.confirmed;
					});
					//slice tom select ten items
					data = data.slice(0 , 10)
					data.map( obj => {
						$("#state-list").append(`<li class = "items state-list"><span class="add-icon-span"><i class='fa fa-info-circle'></i></span>${obj.state} - ${obj.confirmed}</li>`)
					})
					
				}});
		});

