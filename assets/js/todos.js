let NewItemToPush 



$("#to-do-list").on("click", ".items", function(){
	$(this).toggleClass("completed");
	var NewItemToPush = $(this).text();
	//remove old element
	$(this).remove();
	//push new item
	$("#complete-list").append("<li class = 'items'><span class='delete-icon-span' ><i class='fa fa-trash completed'></i></span> " + NewItemToPush + "</li>")

	});
	

	//Click on X to delete Todo
	$(".list").on("click", ".delete-icon-span", function(event){
	$(this).parent().fadeOut(500,function(){
	$(this).remove();
	});
	event.stopPropagation();
	});
	
	
	
	
	//Function to add element to to do list
	$("#input-for-new-todo").keypress(function(event){
	if(event.which === 13){
	//grabbing new todo text from input
	var todoText = $(this).val();
	$(this).val("");
	//create a new li and add to ul
	$("#to-do-list").append("<li class = 'items' ><span class = 'delete-icon-span'><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
	});
	
//http://www.omdbapi.com/?s=batman&apikey=thewdb


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
		var moviestoshow = result.Search.slice(0, 3)
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
	//corona status
	// https://api.covidindiatracker.com/state_data.json
	