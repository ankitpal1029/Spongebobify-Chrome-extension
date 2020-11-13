
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
function getClipboard(){
		


	var t = document.createElement("input");
	document.body.appendChild(t);
	t.focus();
	document.execCommand("paste");
	var clipboardText = t.value; //this is your clipboard data
	


	arr_text = clipboardText.split("");
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
	document.body.removeChild(t);


}
document.addEventListener('DOMContentLoaded', function() {
var gopy = document.getElementById('gopy');
	gopy.addEventListener('click',getClipboard)
})