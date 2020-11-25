let NewItemToPush 

//Show script status
$(document).ready(function(){
	console.log("Movies script attached")
});
	
	
	
// API -- http://www.omdbapi.com/?s=batman&apikey=thewdb


//Function to search movie
$("#input-for-movie-tosearch").keypress(function(event){
	if(event.which === 13){
	//remove old items
	$(".movie-items").remove();
	console.log("Searching")
	var movietosearch =  $(this).val();
	$.ajax({url: `http://www.omdbapi.com/?s=${movietosearch}&apikey=thewdb`, success: function(result){
	console.log(result)
	if(result.Search && result.Search.length> 0){
		var moviestoshow = result.Search
		moviestoshow.map(movie => {
			$("#movie-list").append(`<li class = 'movie-items'><span class="add-icon-span"><i class='fa fa-info-circle'></i></span> ${movie.Title}</li>`)
		})
	
	}else{
		$("#movie-list").append(`<li class = "items movie-items">No movies found</li>`)
	}

	}});
	}
	
  })

//Display movie info on click
  $("#movie-list").on("click",".movie-items" ,function(){
	$(".movie-info").remove();
	console.log("clicked")
	var movietosearch =  $(this).text();
	$.ajax({url: `http://www.omdbapi.com/?t=${movietosearch}&apikey=thewdb`, success: function(result){
		console.log(result)
		var Ratings = result.Ratings
		const {Title , Actors , Genre } = result
		$("#movie-info").append(`<li class = " movie-info"><span class="add-icon-span"><i class='fa fa-info-circle'></i></span>Title : ${Title ? Title : 'Not available'} </li>`)
		$("#movie-info").append(`<li class = " movie-info"><span class="add-icon-span"><i class='fa fa-info-circle'></i></span>Actors : ${Title ?  Actors.substring(20)  : "Not available" } </li>`)
		$("#movie-info").append(`<li class = " movie-info"><span class="add-icon-span"><i class='fa fa-info-circle'></i></span>Genre ${Genre ? Genre : "Not available"}</li>`)

		if(Ratings && Ratings.length> 0){
			Ratings.map(obj => {
				$("#movie-info").append(`<li class = "items movie-info"><span class="add-icon-span"><i class='fa fa-info-circle'></i></span>${obj.Source} : ${obj.Value} </li>`)
			})
		}
	}});	
	});
