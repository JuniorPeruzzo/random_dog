async function GerarImagem() {
	let dogAPI = await fetch("https://dog.ceo/api/breeds/image/random", {
		method: "GET",
	});
	let json = await dogAPI.json();
	let dogReturn = json.message;

	document.getElementById("img").src = dogReturn;
}
