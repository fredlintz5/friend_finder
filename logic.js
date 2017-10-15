

$('#submit').on('click', () => {
	let userName = $('#name').val().trim();
	let imag = $('#image').val().trim();
	let ans1 = $('#quest1').val().trim();
	let ans2 = $('#quest2').val().trim();
	let ans3 = $('#quest3').val().trim();
	let ans4 = $('#quest4').val().trim();
	let ans5 = $('#quest5').val().trim();

	if ((userName || imag || ans1 || ans2 || ans3 || ans4 || ans5) === "") {
		alert("Please fill in all fields");	
	} else {
		let newUser = {
			name: userName,
			photo: imag,
			scores: [ans1, ans2, ans3, ans4, ans5]
		};
		console.log(newUser);

		$.post('/api/friends', newUser);
		
		$('#name').val("");
		$('#image').val("");
		$('#quest1').val("");
		$('#quest2').val("");
		$('#quest3').val("");
		$('#quest4').val("");
		$('#quest5').val("");
	}
	findFriend();
});





function findFriend() {
	$.get('/api/friends', (friends) => {
		friends.forEach((data) => {
			let eachFriend = {
				name: data.name,
				scores: data.scores
			}
			console.log(eachFriend);
		})
	});
}













