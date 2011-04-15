
function toggleDppnTitle(link,id) {
	if(document.getElementById(id).innerHTML.length > 0) {
		document.getElementById(id).style.display = 'none';
		document.getElementById(id).innerHTML = '';
		return;
	}

	var data = getDppnData(link);

	document.getElementById(id).style.display = 'block';
	document.getElementById(id).innerHTML =  data;
}


function clickDictOption() {
	if (document.form.dictin.value != '' && G_prefs['autodict']) {
		document.form.lastsearch.value = document.form.dictin.value;
		dictType();
	}
}

function dictLoad() {
	var which = document.form.sped.selectedIndex;
	document.getElementById('soNO').style.display = 'none';
	document.getElementById('soFT').style.display = 'none';
	document.getElementById('soSW').style.display = 'none';
	document.getElementById('soRX').style.display = 'none';
	document.getElementById('soFZ').style.display = 'none';
	document.getElementById('soNSV').style.display = 'none';  // Vinaya Select
	document.getElementById('soNS').style.display = 'none';  // Nikaya Select
	document.getElementById('soNSA').style.display = 'none';  // Abhi Select
	document.getElementById('soMAT').style.display = 'none';  // MAT Select
	switch (which) {
		case 0: //dpr
			document.getElementById('soNO').style.display = 'block';
		break;
		case 1: // ped
			document.getElementById('soFZ').style.display = 'block';
			document.getElementById('soRX').style.display = 'block';
			document.getElementById('soFT').style.display = 'block';
			document.getElementById('soSW').style.display = 'block';
		break;
		case 2: // dppn
			document.getElementById('soFZ').style.display = 'block';
			document.getElementById('soRX').style.display = 'block';
			document.getElementById('soFT').style.display = 'block';
			document.getElementById('soSW').style.display = 'block';
		break;
		case 3: // CPED
			document.getElementById('soFZ').style.display = 'block';
			document.getElementById('soFT').style.display = 'block';
			document.getElementById('soRX').style.display = 'block';
			document.getElementById('soSW').style.display = 'block';
		break;
		case 4: // CEPD
			document.getElementById('soFZ').style.display = 'block';
			document.getElementById('soFT').style.display = 'block';
			document.getElementById('soRX').style.display = 'block';
			document.getElementById('soSW').style.display = 'block';
		break;
		case 5: // ATTH
			document.getElementById('soFZ').style.display = 'block';
			document.getElementById('soRX').style.display = 'block';
			document.getElementById('soSW').style.display = 'block';
			document.getElementById('soNSV').style.display = 'block';
			document.getElementById('soNS').style.display = 'block';
			document.getElementById('soNSA').style.display = 'block';
		break;
		case 6: // TIKA
			document.getElementById('soFZ').style.display = 'block';
			document.getElementById('soRX').style.display = 'block';
			document.getElementById('soSW').style.display = 'block';
			document.getElementById('soNSV').style.display = 'block';
			document.getElementById('soNS').style.display = 'block';
			document.getElementById('soNSA').style.display = 'block';
		break;
		case 7: // Title
			document.getElementById('soFZ').style.display = 'block';
			document.getElementById('soRX').style.display = 'block';
			document.getElementById('soSW').style.display = 'block';
			document.getElementById('soMAT').style.display = 'block';
			document.getElementById('soNSV').style.display = 'block';
			document.getElementById('soNS').style.display = 'block';
			document.getElementById('soNSA').style.display = 'block';
		break;
		case 8: // ATI
			if(G_prefs['catioff']) document.getElementById('soNS').style.display = 'block';
			else document.getElementById('soNO').style.display = 'block';
		break;
	}
}