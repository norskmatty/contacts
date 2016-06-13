$(document).ready(function() {

	var contacts = [];
	var contactnumber = 0;


	$('form').submit(function() {
		var firstname = $("input[name=firstname]").val();  //get the firstname text entry
		var lastname = $("input[name=lastname]").val();  //get the lastname text entry
		console.log(firstname);
		console.log(lastname);
		var nextContact = new createObject(firstname, lastname);  //create a new object with the data entered
		contacts.push(nextContact);  //add new object to the contacts array
		$('#contacts').append('<li>' + contacts[contactnumber].firstname + ' ' + contacts[contactnumber].lastname + '</li>');
		contactnumber++;
		list(contacts);  //function to add the first/last name of each entry in ul
	
	});

	$('li').on('click', function() {
		console.log()
	})

})

function createObject(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}

function printPerson(name) {
	console.log(name.firstname + ' ' + name.lastname);  //print person's name
}

function list(contacts) {  //cycle through full list of contacts
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}


