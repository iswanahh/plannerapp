$(function() {
		var mydataRef = new Firebase("https://mypersonalapp.firebaseIO.com");
		var reminderdata = mydataRef.child('reminder');
		$('#savebtn').click(function() {
		 var title = $('#title').val();
	     var description = $('#description').val();
	     var category =document.getElementById('category').value;
	     var date =$('#date').val();
	     var time =$('#time').val();
	     reminderdata.push({title: title, description: description,category:category,date:date,time:time});
	     $('#title').val('');
	     $('#description').val('');
	     $('#date').val('');
	     $('#time').val('');

	     });

		reminderdata.on('child_added', function(snapshot) {
        var td = snapshot.val();
        displayChatMessage(td.title,td.description,td.category,td.date,td.time);
      });

      function displayChatMessage(title,description,category,date,time) {
       
      	 $('#ViewReminder').append("<tr><td>"+title+" </td><td>"+description+" </td><td>"+category+" </td><td>"+date+"</td><td>"+time+"</td><td><a id ='del' style='cursor:pointer;'><span class='glyphicon glyphicon-trash'></span></a></td</tr>");
      	      	 $('#Reminderview').append("<tr><td>"+title+" </td><td>"+description+" </td><td>"+category+" </td><td>"+date+"</td><td>"+time+"</td><td><a id ='del' style='cursor:pointer;'><span class='glyphicon glyphicon-trash'></span></a></td</tr>");
      	      	 $('#Reminderdelete').append("<tr><td>"+title+" </td><td>"+description+" </td><td>"+category+" </td><td>"+date+"</td><td>"+time+"</td><td><a id ='del' style='cursor:pointer;'><span class='glyphicon glyphicon-trash'></span></a></td</tr>");
      };
});




$(function() {
	var mydataRef = new Firebase("https://mypersonalapp.firebaseIO.com");
	var tododata = mydataRef.child('TODO');
		$('#Tsavebtn').click(function() {
		 var todotitle = $('#todotitle').val();
	     var tododescription = $('#tododescription').val();
	     var todocategory =document.getElementById('todocategory').value;
	     tododata.push({todotitle: todotitle, tododescription: tododescription,todocategory:todocategory});
	     $('#todotitle').val('');
	     $('#tododescription').val('');

	     });

		tododata.on('child_added', function(snapshot) {
        var data = snapshot.val();
        displayChatMessage(data.todotitle,data.tododescription,data.todocategory);
      });
		function displayChatMessage(title,description,category) {
       	 $('#Todoview').append("<tr><td>"+title+" </td><td>"+description+" </td><td>"+category+" </td><td><a id ='del' style='cursor:pointer;'><span class='glyphicon glyphicon-trash'></span></a></td</tr>");
      	 $('#Tododelete').append("<tr><td>"+title+" </td><td>"+description+" </td><td>"+category+" </td><td><a id ='del' style='cursor:pointer;'><span class='glyphicon glyphicon-trash'></span></a></td</tr>");
      	
      };   
});

