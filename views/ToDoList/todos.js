
//when document loads render both the completed and todo list
$(document).ready(function(){
	console.log("To do script attached")
	//render list 
	RenderToDoList()
	RenderCompletedList()
});

//---------------------------------Event listners--------------------------------------------------------------------------------------------

//Listen for event to add new item in todo
$("#input-for-new-todo").keypress(function(event){
if(event.which === 13){
//grabbing new todo text from input
console.log("Listening for input")
var todoText = $(this).val();
$(this).val("");
//save item in in todolist table
AddNewToDoItem(todoText);
}
});
    


//Listen for event to  add element to completed list
$("#to-do-list").on("click", ".items", function(){
	$(this).toggleClass("completed");
	var SelectedInput = $(this).text();
	console.log(SelectedInput);
	AddCompletedListItem(SelectedInput)
	});


//Listen for event to delete todo item
$("#to-do-list").on("click", ".delete-icon-span", function(event){
	var SelectedInput = $(this).parent().text();
	console.log("Delete me")
	console.log(SelectedInput)
	RemoveFromToDoList(SelectedInput)
	event.stopPropagation();
	});

//Listen for event to delete to completed list item
$("#complete-list").on("click", ".delete-icon-span", function(event){
	var SelectedInput = $(this).parent().text();
	console.log("Delete me")
	console.log(SelectedInput)
	RemoveFromCompletedList(SelectedInput)
	event.stopPropagation();
	});
			
	
	
//-----------------------------------------Ajax Functions to query and render data from database-----------------------------------------

//Fuction to add new item in todo list
const AddNewToDoItem = (todotext) => {
	$.ajax({
		url: './routes.php',
		type: 'post',
		data: {
				 'item':   todotext,
				 'type' : "Post in Todolist"
			},
		// on success response
		success:function(data) {
			console.log(data)
			response = JSON.parse(data)
			console.log(response)
			if (response.code == "200"){
				console.log("Added new item")
				RenderToDoList()
			} else {
				alert(response.msg)
			}
				
		},
	
		// error response
		error:function(e) {
			console.log(e)
			alert("Database error")
		}
	
	});
	

}

//Function to add new item in completed list
const AddCompletedListItem = (SelectedInput) => {
	var dateofitem = SelectedInput.substr(0 , SelectedInput.indexOf(":"));
	var selecteditem = SelectedInput.substr(SelectedInput.indexOf(":") + 1);
	//remove first space because list text have first space 
	dateofitem = dateofitem.replace(" " , "")
	console.log(dateofitem)
	selecteditem = selecteditem.replace(" " , "")
	$.ajax({
		url: './routes.php',
		type: 'post',
		data: {
			 'item': selecteditem,
			 'created': dateofitem,
			 'type' : "Post in Completedlist"
			},
	// on success response
	success:function(data) {
		console.log(data)
		response = JSON.parse(data)
		console.log(response)
		if (response.code == "200"){
			//Remove from to do list
			RemoveFromToDoList(SelectedInput)
			//render updated completed list
			RenderCompletedList()
		} else {
			alert(response.msg)
		}		
	},
	// error response
	error:function(e) {
		console.log(r)
		alert("Database error")
	}
});


}


//Function to render to do list
const RenderToDoList = () => {
	$(".todolist").remove();
	$.ajax({
		url: './routes.php',
		type: 'get',
		data: {
			 'type' : "Get Todolist"
			},
	// on success response
	success:function(data) {
		$("#to-do-list").append(data)
		
	},
	// error response
	error:function(e) {
		console.log(e)
		alert("Database error")
	}
});
}	


//Function to render completed list
const RenderCompletedList = () => {
	$(".completedlist").remove();
	$.ajax({
		url: './routes.php',
		type: 'get',
		data: {
			 'type' : "Get Completedlist"
			},
	// on success response
	success:function(data) {
		console.log(data);
		$("#complete-list").append(data)
		
	},
	// error response
	error:function(e) {
		console.log(e)
		alert("Database error")
	}
});
}	
//Function to remove item from todo list
//input to the function should be in these format
//SelectedInput = date: item
const RemoveFromToDoList = (SelectedInput) => {
	var dateofitem = SelectedInput.substr(0 , SelectedInput.indexOf(":"));
	var selecteditem = SelectedInput.substr(SelectedInput.indexOf(":") + 1);
	//remove first space because list text have first space 
	dateofitem = dateofitem.replace(" " , "")
	selecteditem = selecteditem.replace(" " , "")
	$.ajax({
		url: './routes.php',
		type: 'post',
		data: {
			 'item': selecteditem,
			 'date': dateofitem,
			 'type' : "Remove Todolistitem"
			},
	// on success response
	success:function(data) {
		console.log(data)
		response = JSON.parse(data)
		console.log(response)
		if (response.code == "200"){
			RenderToDoList()
			
		} else {
			alert(response.msg)
		}		
	},
	// error response
	error:function(e) {
		console.log(r)
		alert("Database error")
	}
});
}


//Function to remove item from completed list
//input to the function should be in these format
//SelectedInput = date: item
const RemoveFromCompletedList = (SelectedInput) => {
	var dateofitem = SelectedInput.substr(0 , SelectedInput.indexOf(":"));
	var selecteditem = SelectedInput.substr(SelectedInput.indexOf(":") + 1);
	//remove first space because list text have first space 
	dateofitem = dateofitem.replace(" " , "")
	selecteditem = selecteditem.replace(" " , "")
	$.ajax({
		url: './routes.php',
		type: 'post',
		data: {
			 'item': selecteditem,
			 'completed': dateofitem,
			 'type' : "Remove Completedlistitem"
			},
	// on success response
	success:function(data) {
		console.log(data)
		response = JSON.parse(data)
		console.log(response)
		if (response.code == "200"){
			RenderCompletedList()
			
		} else {
			alert(response.msg)
		}		
	},
	// error response
	error:function(e) {
		console.log(r)
		alert("Database error")
	}
});
}



