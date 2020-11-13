
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(function() {
    /* clipboard successfully set */
  }, function() {
    /* clipboard write failed */
  });
}

navigator.clipboard.readText().then((text) =>{
	// console.log(text);
	arr_text = text.split("");
	console.log(arr_text);
	for (let i = 0 ; i< arr_text.length ; i++)
	{
		if(i%2 == 0){
			if(isLetter(arr_text[i])){
				arr_text[i] = arr_text[i].toUpperCase();
			}
		}
	}
	final  = arr_text.join("");
	updateClipboard(final);
	
});