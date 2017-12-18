var div1 = document.createElement('div')
document.body.appendChild(div1)
fetch('https://randomuser.me/api')
	.then(function(response){
return response.json()
})
	.then(function(data){
console.log(data)

div1.innerHTML = "<img src='"
		+data.results[0].picture.thumbnail
		+"'>"+data.results[0].name.first
		+' '+data.results[0].name.last
		+"</p><p>"+data.results[0].location.street
		+', '+data.results[0].location.postcode
		+' '+data.results[0].location.city
		+"</p>"
})
