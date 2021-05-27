function copyTextToClipboard(text, description){
	const offset = $(document).scrollTop();
	const node = document.createElement("textarea");
	node.value = text;
	document.body.appendChild(node);
	node.focus();
	node.select();
	$(document).scrollTop(offset);

	let succeed;
	try {
		succeed = document.execCommand("copy");
	} catch(err) {
		succeed = false;
	}

	if (succeed){
		$.jGrowl(`Copied ${description} to clipboard.`)
	} else {
		$.jGrowl(`Failed to copy ${description} to clipboard.`)
	}
	document.body.removeChild(node);
}