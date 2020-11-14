// You can make this configurable by the user
const LIMIT = 0.5;

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(
        function () {
            /* clipboard successfully set */
        },
        function () {
            /* clipboard write failed */
        }
    );
}
function getClipboard() {
    var t = document.createElement("input");
    document.body.appendChild(t);
    t.focus();
    document.execCommand("paste");
    var clipboardText = t.value; //this is your clipboard data

    arr_text = clipboardText.split("");
    for (let i = 0; i < arr_text.length; i++) {
		const random = Math.random();

		// 50% chance of uppercasing
        if (random < LIMIT) {
            if (isLetter(arr_text[i])) { // This check is not needed
                arr_text[i] = arr_text[i].toUpperCase();
            }
        }
    }
    final = arr_text.join("");
    updateClipboard(final);
    document.body.removeChild(t);
}
document.addEventListener("DOMContentLoaded", function () {
    var gopy = document.getElementById("gopy");
    gopy.addEventListener("click", getClipboard);
});
