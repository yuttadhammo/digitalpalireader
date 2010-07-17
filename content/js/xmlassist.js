var nikname = new Array();
nikname['d'] = "DN";
nikname['m'] = "MN";
nikname['s'] = "SN";
nikname['a'] = "AN";
nikname['k'] = "KN";
nikname['v'] = "Vin";
nikname['x'] = "Vism";
nikname['y'] = "Abhi";
nikname['g'] = "Gram";

var niknumber = new Array();
niknumber['v'] = "0";
niknumber['d'] = "1";
niknumber['m'] = "2";
niknumber['s'] = "3";
niknumber['a'] = "4";
niknumber['k'] = "5";
niknumber['y'] = "6";
niknumber['x'] = "7";
niknumber['g'] = "8";

var nikvoladi = new Array();
nikvoladi['d'] = '<select size="7" name="book" onclick="gettitles(0,2)"><option selected>1</option><option>2</option><option>3</option></select>';
nikvoladi['m'] = '<select size="7" name="book"  onclick="gettitles(0,2)"><option selected>1</option><option>2</option><option>3</option></select>';
nikvoladi['s'] = '<select size="7" name="book"  onclick="gettitles(0,2)"><option selected>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>';
nikvoladi['a'] = '<select size="7" name="book"  onclick="gettitles(0,2)"><option selected>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option></select>';
nikvoladi['k'] = '<select size="7" name="book"  onclick="gettitles(0,2)"><option selected value="1">KhP</option><option value="2">Dhp</option><option value="3">Uda</option><option value="4">Iti</option><option value="5">SN</option><option value="6">ViV</option><option value="7">PeV</option><option value="8">Thera</option><option value="9">Theri</option><option value="10">Ap.1</option><option value="11">Ap.2</option><option value="12">BdV</option><option value="13">Car</option><option value="14">Jat.1</option><option value="15">Jat.2</option><option value="16">MNid</option><option value="17">CNid</option><option value="18">PsM</option><option value="19">Mil</option><option value="20">Net</option><option value="21">Pet</option></select>';
nikvoladi['v'] = '<select size="7" name="book"  onclick="gettitles(0,2)"><option value="1" selected>Para</option><option value="2">Paci</option><option value="3">BhV</option><option value="4">MV</option><option value="5">CV</option><option value="6">Pari</option></select>';
nikvoladi['x'] = '<select size="7" name="book"  onclick="gettitles(0,2)"><option value="1" selected>1</option><option value="2">2</option></select>';
nikvoladi['y'] = '<select size="7" name="book"  onclick="gettitles(0,2)"><option selected>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option></select>';
nikvoladi['g'] = '<select size="7" name="book"  onclick="gettitles(0,2)"><option selected value="1">Mog</option><option value="2">Kac</option><option value="3">SPM</option><option value="4">SDhM</option><option value="5">PRS</option></select>';

var knames = [];

knames.push('KhP');
knames.push('Dhp');
knames.push('Uda');
knames.push('Iti');
knames.push('SN');
knames.push('ViV');
knames.push('PeV');
knames.push('Thera');
knames.push('Theri');
knames.push('Ap.1');
knames.push('Ap.2');
knames.push('BdV');
knames.push('Car');
knames.push('Jat.1');
knames.push('Jat.2');
knames.push('MNid');
knames.push('CNid');
knames.push('PsM');
knames.push('Mil');
knames.push('Net');
knames.push('Pet');


function changenikaya(noget)
{
	var nik = document.form.nik.value;
	if (nik != '') 
	{
		document.getElementById('book').innerHTML=nikvoladi[nik];
		if (noget) gettitles(0,1);
		else gettitles(0,2);
	}
}

function replaceunistandard(input) {
	input = input.replace(/aa/g, 'ā');
	input = input.replace(/ii/g, 'ī');
	input = input.replace(/uu/g, 'ū');
	input = input.replace(/\.t/g, 'ṭ');
	input = input.replace(/\.d/g, 'ḍ');
	input = input.replace(/\"n/g, 'ṅ');
	input = input.replace(/\´n/g, 'ṅ');
	input = input.replace(/\.n/g, 'ṇ');
	input = input.replace(/\.m/g, 'ṃ');
	input = input.replace(/\~n/g, 'ñ');
	input = input.replace(/\.l/g, 'ḷ');
	input = input.replace(/AA/g, 'Ā');
	input = input.replace(/II/g, 'Ī');
	input = input.replace(/UU/g, 'Ū');
	input = input.replace(/\.T/g, 'Ṭ');
	input = input.replace(/\.D/g, 'Ḍ');
	input = input.replace(/\.N/g, 'Ṇ');
	input = input.replace(/\.M/g, 'Ṃ');
	input = input.replace(/\~N/g, 'Ñ');
	input = input.replace(/\.L/g, 'Ḷ');
	return input;
}

function replacevelstandard(input) {
	input = input.replace(/\u0101/g, 'aa');
	input = input.replace(/\u012B/g, 'ii');
	input = input.replace(/\u016B/g, 'uu');
	input = input.replace(/\u1E6D/g, '\.t');
	input = input.replace(/\u1E0D/g, '\.d');
	input = input.replace(/\u1E45/g, '\"n');
	input = input.replace(/\u1E47/g, '\.n');
	input = input.replace(/\u1E43/g, '\.m');
	input = input.replace(/\u00F1/g, '\~n');
	input = input.replace(/\u1E37/g, '\.l');
	input = input.replace(/\u0100/g, 'AA');
	input = input.replace(/\u012A/g, 'II');
	input = input.replace(/\u016A/g, 'UU');
	input = input.replace(/\u1E6C/g, '\.T');
	input = input.replace(/\u1E0C/g, '\.D');
	input = input.replace(/\u1E46/g, '\.N');
	input = input.replace(/\u1E42/g, '\.M');
	input = input.replace(/\u00D1/g, '\~N');
	input = input.replace(/\u1E36/g, '\.L');
	return input;
}

function convtitle(nikaya,book,vna,wna,xna,yna,zna)
{
	if (nikaya == 'k') book = knames[book-1];
    nikaya = nikname[nikaya];
	
	var title='<table><tr><td><font class="blue">' + nikaya + ' ' + book + ' ' + vna;
	if (wna != ' ') title += '</font>&nbsp;</td><td><font class="green">' + wna + '</font>&nbsp;</td>';
	if (xna != ' ') title += '<td><font class="yellow">' +  xna + '</font></td>';
	if (yna != ' ') title += '<td><font class="green">' + yna + '</font>&nbsp;</td>';
	if (zna != ' ') title += '<td><font class="yellow">' +  zna + '</font></td>';
	title += '</tr></table>';
	
	title = replaceunistandard(title);
	document.getElementById('mafa').innerHTML=title;
}

function createTablen()
{
	var section = document.form.section.selectedIndex + 1;
	if (section < document.form.section.options.length)
	{
		document.form.section.selectedIndex++;
		importXML();			
	}
	else 
	{
		var sutta = document.form.sutta.selectedIndex + 1;
		if (sutta < document.form.sutta.options.length)
		{
			document.form.sutta.selectedIndex++;
			gettitles(1);					
		}
		else {
			var vagga = document.form.vagga.selectedIndex + 1;
			if (vagga < document.form.vagga.options.length)
			{
				document.form.vagga.selectedIndex++;
				gettitles(4);	
			}
			else 
			{
				var volume = document.form.volume.selectedIndex + 1;
				if (volume < document.form.volume.options.length)
				{
					document.form.volume.selectedIndex++;
					gettitles(5);	
				}
				else {
					var meta = document.form.meta.selectedIndex + 1;
					if (meta < document.form.meta.options.length)
					{
						document.form.meta.selectedIndex++;
						gettitles(6);	
					}
					else
					{
						window.alert('End of Book');
					}
				}
			}
		}
	}

}

function createTablep()
{

	var section = document.form.section.selectedIndex - 1;
	if (section >= 0)
	{
		document.form.section.selectedIndex--;
		importXML();			
	}
	else 
	{
		var sutta = document.form.sutta.selectedIndex - 1;
		if (sutta >= 0)
		{
			document.form.sutta.selectedIndex--;
			gettitles(1,1);	
			document.form.section.selectedIndex = document.form.section.options.length - 1;
			importXML();			
		}
		else {
			var vagga = document.form.vagga.selectedIndex - 1;
			if (vagga >= 0) {
				document.form.vagga.selectedIndex--;
				gettitles(4,1);	
				document.form.sutta.selectedIndex = document.form.sutta.options.length - 1;
				gettitles(1,1);	
				document.form.section.selectedIndex = document.form.section.options.length - 1;
				importXML();
			}
			else 
			{
				var volume = document.form.volume.selectedIndex - 1;
				if (volume >= 0)
				{
					document.form.volume.selectedIndex--;
					gettitles(5,1);	
					document.form.vagga.selectedIndex = document.form.vagga.options.length - 1;
					gettitles(4,1);	
					document.form.sutta.selectedIndex = document.form.sutta.options.length - 1;
					gettitles(1,1);	
					document.form.section.selectedIndex = document.form.section.options.length - 1;
					importXML();

				}
				else {
					var meta = document.form.meta.selectedIndex - 1;
					if (meta >= 0)
					{
						document.form.meta.selectedIndex--;
						gettitles(6,1);	
						document.form.volume.selectedIndex = document.form.volume.options.length - 1;
						gettitles(5,1);	
						document.form.vagga.selectedIndex = document.form.vagga.options.length - 1;
						gettitles(4,1);	
						document.form.sutta.selectedIndex = document.form.sutta.options.length - 1;
						gettitles(1,1);	
						document.form.section.selectedIndex = document.form.section.options.length - 1;
						importXML();
					}
					else
					{
						window.alert('Beginning of Book');
					}
				}
			}
		}
	}

}

function preout(data) // calls text prep, then outputs it to preFrame
{
	lastcolour = 0; // reset colour changing
/*	if (document.getElementById('autoalg').checked == true)
	{
		moveframex(0,'*',0,0);
		parent.mainFrame.postout(data);		
	}
	else {*/
		var inarray = preparepali(data);
		var finout = inarray[0];
        var convout = replaceunistandard(inarray[1]);

        var nikaya = document.form.nik.value;
        var book = document.form.book.selectedIndex;
        var meta = document.form.meta.selectedIndex;
        var vagga = document.form.vagga.selectedIndex;
        var sutta = document.form.sutta.selectedIndex;
        var section = document.form.section.selectedIndex;
        
        var transin;
        var transout='<div style="position:absolute; right:0px; top:0px;">';
        if (hier == "m") { 
            transin = addtrans(0,nikaya,book,meta,vagga,sutta,section);
            if (transin) {
                if (transin[0].charAt(0) != '&') transout += '<img style="vertical-align:middle" src="http://www.accesstoinsight.org/favicon.ico" title="Translations courtesy of http://www.accesstoinsight.org/" onclick="window.open(\'http://www.accesstoinsight.org/\')">&nbsp;'
                transout += transin.join('')+'</div>';
                document.getElementById('mafa').innerHTML += transout; 
            }
        }

		document.getElementById('mafb').innerHTML = finout;
		document.getElementById('mafb').innerHTML += ' <input type="button" class="btn" title="Send all text to converter" onclick="sendtoconvert(\'' + convout + '\')" value="convert"> <input type="button" class="btn" title="Send selected text to converter" onclick="var convout2 = document.getSelection(); if (convout2) sendtoconvert(convout2);  else alert(\'Nothing selected.\');" value="convert selection">';
		document.getElementById('maf').scrollTop = 0; // horizontal and vertical scroll targets
        if (moveat == 3) {moveframex(2);}
        else {moves(0);}
	//}
	
}


function formatuniout(data,which) { // prepare without links
	var convout = '';
	var indexpage = '';
	var altread = 0;
	var altplus = '';	
	var endpt = 0;
	var unioutb = '';
	var finout = '';
	var outarray = new Array();
	
	data = data.replace(/\.\.\.pe0\.\.\./g, ' ... pe ...');
	data = data.replace(/\'\'/g, '``');
	data = data.replace(/\^b\^/g, ' <b> ');
	data = data.replace(/\^eb\^/g, ' </b> ');
	data = data.replace(/\^a\^\"/g, ' z');
	data = data.replace(/\"\^ea\^/g, 'z ');
	data = data.replace(/\^a\^/g, ' z');
	data = data.replace(/\^ea\^/g, 'z ');
	data = data.replace(/\^v/g, '');
	data = data.replace(/v\^/g, '');
	data = data.replace(/\}/g, '} ');
	data = data.replace(/ +/g, ' ');
	var uniouta = replaceunistandard(data).split(' ');
	data = data.replace(/\"/g, '\u00B4');
	data = data.replace(/\'/g, '`');
	var wordbyword = data.split(' ');
	var addpre = '';
	var paran=0;
    
//	document.getElementById('b').innerHTML += '<p>';
	
	for (var b = 0; b < wordbyword.length; b++)
	{
		if (altread == 1) {
			endpt = wordbyword[b].length-1;
			if (wordbyword[b].charAt(endpt) == '}') {
					altplus += wordbyword[b].substring(0,endpt);
			  altread = 0;
			  altplus = replaceunistandard(altplus);
			  altplus = altplus.replace(/0/g, '.');
			  finout += ' <a href="javascript:void(0)" style="color:'+colorcfg['grey']+'" title="' + altplus + '"><font size=1>VAR</font></a> ';
			}
			else altplus += wordbyword[b] + ' ';
		}
		else if (wordbyword[b].charAt(0) == '{') {
			altread = 1;
			altplus = wordbyword[b].substring(1) + ' ';
		}
		else if (wordbyword[b+1] == '-') { // connect first part to search
			addpre = wordbyword[b];
			b++;
		}
		else if (wordbyword[b].substring(0,2) == '<c' && wordbyword[b+3] == '-') { // connect search with rest of word
			convout += addpre + wordbyword[b+1] +  wordbyword[b+4] + ' ';
			unioutb = (replaceunistandard(addpre).replace(/``/g, '&quot;') + ' - <' + wordbyword[b].substring(1,3) + '>' + uniouta[b+1].replace(/``/g, '&quot;') + '<xc> - ' + uniouta[b+4]).replace(/``/g, '&quot;');
			if (script != 0) unioutb = translit(unioutb);
			finout += '<a id="' + b + '" style="color:'+colorcfg['coltext']+'" href="javascript:postout(&#39;' + addpre + wordbyword[b+1] +  wordbyword[b+4] +  '&#39;,' + b + ')">' +  unioutb + '</a> ';
			b = b + 4;
			addpre = '';
		}		

		else if (wordbyword[b].substring(0,2) == '<f') {
			finout += wordbyword[b] + ' ';
		}		
		else if (wordbyword[b] == '<p>') {
			finout += '<p id="para'+paran+'">' + ' ';
            paran++;
		}		
		else if (wordbyword[b].charAt(0) == '<')		{
			finout += wordbyword[b];
		}
		else if (wordbyword[b].charAt(0) == 'z')
		{
			indexpage = wordbyword[b].charAt(1);
			finout += ' <a href="javascript:void(0)" title="' + wordbyword[b].substring(2,8) + '"><font size=1>' + indexpage + '</font></a> ';
		}
		else if (which)
		{
			convout += wordbyword[b] + ' ';
			unioutb = uniouta[b].replace(/``/g, '&quot;');
			unioutb = unioutb.replace(/0/g, '.');
			if (script != 0) unioutb = translit(unioutb);
			finout += unioutb + ' ';
		}
		else
		{
			convout += wordbyword[b] + ' ';
			unioutb = uniouta[b].replace(/``/g, '&quot;');
			//unioutb = unioutb.replace(/0/g, '.');
			if (script != 0) unioutb = translit(unioutb);
			finout += '<a id="' + b + '" style="color:'+colorcfg['coltext']+'" href="javascript:postout(&#39;' + wordbyword[b] + '&#39;,' + b + ')">' +  unioutb + '</a> ';
		}
	}
	finout = finout.replace(/ <b> /g, '<b>');
	finout = finout.replace(/ <\/b> /g, '</b>');
	if (!which) {
		outarray[0] = finout;
		outarray[1] = convout;
		return outarray;
	}
	return finout;
}

function preparepali(data) { // standard text prep for algorithm
	
	var finout = formatuniout(data);
	
	// add search markers
	
	finout[0] = finout[0].replace(/<c0> */g, ' <span style="BACKGROUND-COLOR: '+colorcfg['colbk1']+'">');
	finout[0] = finout[0].replace(/<c1> */g, ' <span style="BACKGROUND-COLOR: '+colorcfg['colbk2']+'">');
	finout[0] = finout[0].replace(/<c2> */g, ' <span style="BACKGROUND-COLOR: '+colorcfg['colbk3']+'">');
	finout[0] = finout[0].replace(/ *<xc>/g, '</span> ');
	finout[0] = finout[0].replace(/ *- */g, '');
	finout[0] = finout[0].replace(/BACKGROUNDCOLOR/g, 'BACKGROUND-COLOR');

	return finout;
}

function addtrans(which,nikaya,book,meta,vagga,sutta,section) {
    if (getMiscPref("ctrans") != "checked" || typeof(atiD) == 'undefined') return;
    var cnt = 0;
    var output = [];
    var a,b,c,d,e,j,k,l,m,w,x,y,z;
    
    var autha = [];
    autha['amar'] = "Amaravati";
    autha['bodh'] = "Bodhi";
    autha['budd'] = "Buddharakkhita";
    autha['harv'] = "Harvey";
    autha['hekh'] = "Hecker and Khema";
    autha['horn'] = "Horner";
    autha['irel'] = "Ireland";
    autha['kell'] = "Kelly";
    autha['khan'] = "Khantipalo";
    autha['ksw0'] = "Kelly, et al";
    autha['kuma'] = "Kumara";
    autha['mend'] = "Mendis";
    autha['nana'] = "Ñanananda";
    autha['nara'] = "Narada";
    autha['norm'] = "Norman";
    autha['ntbb'] = "Ñanamoli & Bodhi";
    autha['nymo'] = "Ñanamoli";
    autha['nypo'] = "Nyanaponika";
    autha['nysa'] = "Nyanasatta";
    autha['olen'] = "Olendzki";
    autha['piya'] = "Piyadassi";
    autha['rhyc'] = "C. Rhys-Davids";
    autha['soma'] = "Soma";
    autha['soni'] = "Soni";
    autha['than'] = "Thanissaro";
    autha['vaji'] = "Vajira & Story";
    autha['vaka'] = "Ñanavara and Kantasilo";
    autha['wlsh'] = "Walshe";
    autha['wood'] = "Woodward";
    autha['yaho'] = "Yahoo! Pali";

    switch (nikaya) {
        case 'd':
            if (which == 2 || which == 1) return null;
            switch (book) {
                case 0:
                    book = 1;
                    break;
                case 1:
                    book = 14;
                    break;
                case 2:
                    book = 24;
                    break;
            }
            var mysn = book+vagga;
            //alert (book + ' ' + vagga);
            mys = mysn + "";
            while (mys.length < 2) { mys = '0'+mys; }
            var atid = 'dn/dn.'+mys;
            for (var x = 0;x < atiD.length; x++) {
                var auth = atiD[x].split('.')[3];
                if (autha[auth]) {auth = autha[auth];}
                if (atiD[x].indexOf(atid)==0) {output.push('<input type=button class="btn" onclick="window.open(\'http://www.accesstoinsight.org/tipitaka/'+atiD[x]+'\');" value="'+auth+'" title="Translation of DN '+mysn+' by '+auth+'">');cnt++;}
            }
            break;
        case 'm':
            if (which == 3 || which == 1) return null;
            var mysn = ((book)*50)+(vagga*10)+(sutta+1)
            if (mysn > 141 && vagga == 4) mysn += 2;
            mys = mysn + "";
            while (mys.length < 3) { mys = '0'+mys; }
            var atim = 'mn/mn.'+mys;
            for (var x = 0;x < atiM.length; x++) {
                var auth = atiM[x].split('.')[2];
                if (autha[auth]) {auth = autha[auth];}
                if (atiM[x].indexOf(atim)==0) {output.push('<input type=button class="btn" onclick="window.open(\'http://www.accesstoinsight.org/tipitaka/'+atiM[x]+'\');" value="'+auth+'" title="Translation of MN '+mysn+' by '+auth+'">');cnt++;}
            }
        break;
        case 'a':
            var file = 'xml/listam.xml';
            var bookn = book+1;
            if (which > 0) return null;
            if (!section) section = 0;
            var xmlhttp = new window.XMLHttpRequest();
            xmlhttp.open("GET", file, false);
            xmlhttp.send(null);
            var xmlDoc = xmlhttp.responseXML.documentElement;
            w = xmlDoc.getElementsByTagName('a'+bookn+'v');
            x = w[vagga].getElementsByTagName('a'+bookn+'s');
            y = x[sutta].getElementsByTagName('a'+bookn+'c');
            z = y[section].getElementsByTagName('a'+bookn+'p');
            //alert(z[0].childNodes[0].nodeValue);
            out:
            for (a = 0;a < atiA.length; a++) {
                if(parseInt(atiA[a].split('/')[1].substring(2),10) == bookn) {
                    if(atiA[a].split('.')[1].indexOf('-')>=0) b=atiA[a].split('.')[1].split('-');
                    else {b=null;}
                    for (var aa = 0;aa < z.length; aa++) {
                        var bb = z[aa].childNodes[0].nodeValue;
                        c=parseInt(bb,10);
                        d=''+bb;
                        while (d.length < 3) { d = '0'+d; }
                        if((b && c >= parseInt(b[0].replace(/(^0*|x)/g,''),10) && c <= parseInt(b[1].replace(/(^0*|x)/g,''),10)) || atiA[a].split('.')[1].indexOf(d)==0) {
                            if (b) {var sno = b[0].replace(/^0*/g,'') +"-"+ b[1].replace(/^0*/g,'');}
                            else {var sno = c;}
                            var auth = atiA[a].split('.')[2];
                            if (autha[auth]) {auth = autha[auth];}
                            output.push('<input type=button class="btn" onclick="window.open(\'http://www.accesstoinsight.org/tipitaka/'+atiA[a]+'\');" value="'+auth+'" title="Translation of AN '+bookn+'.'+sno+' by '+auth+'">');cnt++;
                            continue out;
                        }
                    }
                }
            }		
        break;
        case 's':
            if (which > 0) return null;
            var file = 'xml/listsm.xml';
            var bookn = book+1;
            
            if (bookn > 1) {vagga+=11;}
            if (bookn > 2) {vagga+=10;}
            if (bookn > 3) {vagga+=13;}
            if (bookn > 4) {vagga+=10;}
            
            var xmlhttp = new window.XMLHttpRequest();
            xmlhttp.open("GET", file, false);
            xmlhttp.send(null);
            var xmlDoc = xmlhttp.responseXML.documentElement;
            w = xmlDoc.getElementsByTagName('sv');
            x = w[vagga].getElementsByTagName('s'+bookn+'s');

            var cnt2 = 0;

            for (b = 0;b < sutta; b++) {
                y = x[b].getElementsByTagName('s'+bookn+'c');
                cnt2+=y.length;
            }
            cnt2+=section;
            y = x[sutta].getElementsByTagName('s'+bookn+'c');
            z = y[section].getElementsByTagName('s'+bookn+'p');
            //alert (cnt2);
            out:
            for (a = 0;a < atiS.length; a++) {
                if(parseInt(atiS[a].split('/')[1].substring(2),10) == (vagga+1)) {
                    if(atiS[a].split('.')[1].indexOf('-')>=0) b=atiS[a].split('.')[1].split('-');
                    else {b=null;}
                    for (var aa = 0;aa < z.length; aa++) {
                        var bb = cnt2+1;
                        c=parseInt(bb,10);
                        d=bb+"";
                        while (d.length < 3) { d = '0'+d; }
                        if((b && c >= parseInt(b[0].replace(/(^0*|x)/g,''),10) && c <= parseInt(b[1].replace(/(^0*|x)/g,''),10)) || atiS[a].split('.')[1].indexOf(d)==0) {
                            if (b) {var sno = b[0].replace(/^0*/g,'') +"-"+ b[1].replace(/^0*/g,'');}
                            else {var sno = c;}
                            var auth = atiS[a].split('.')[2];
                            if (autha[auth]) {auth = autha[auth];}
                            output.push('<input type=button class="btn" onclick="window.open(\'http://www.accesstoinsight.org/tipitaka/'+atiS[a]+'\');" value="'+auth+'" title="Translation of SN '+(vagga+1)+'.'+sno+' by '+auth+'">');cnt++;
                            continue out;
                        }
                    }
                }
            }		
        break;
        case 'k':
            if (which > 0) return null;
            var bookn = book+1;
            
            switch (bookn) {
                case 1: // kp
                // kn/khp/khp.1-9.than.html
                    out:
                    for (a = 0;a < atiK.length; a++) {
                        if(atiK[a].split('/')[1] == 'khp') {
                            if(atiK[a].split('.')[1].indexOf('-')>=0) b=atiK[a].split('.')[1].split('-');
                            else {b=null;}
                            c=section+1;
                            if((b && c >= parseInt(b[0].replace(/(^0*|x)/g,''),10) && c <= parseInt(b[1].replace(/(^0*|x)/g,''),10)) || atiK[a].split('.')[1].indexOf(c)==0) {
                                if (b) {var sno = b[0].replace(/^0*/g,'') +"-"+ b[1].replace(/^0*/g,'');}
                                else {var sno = c;}
                                var auth = atiK[a].split('.')[2];
                                if (autha[auth]) {auth = autha[auth];}
                                output.push('<input type=button class="btn" onclick="window.open(\'http://www.accesstoinsight.org/tipitaka/'+atiK[a]+'\');" value="'+auth+'" title="Translation of KhP '+sno+' by '+auth+'">');cnt++;
                                continue out;
                            }
                        }
                    }
                break;
                case 2: // dhp
                // kn/dhp/dhp.24.budd.html
                    //alert(vagga + ' ' + sutta + ' ' + section);
                    out:
                    for (a = 0;a < atiK.length; a++) {
                        if(atiK[a].split('/')[1] == 'dhp') {
                            d=(vagga+1)+"";
                            if (d.length < 2) { d = '0'+d; }
                            if(atiK[a].split('.')[1].indexOf(d)==0) {
                                var sno = vagga+1;
                                var auth = atiK[a].split('.')[2];
                                if (autha[auth]) {auth = autha[auth];}
                                output.push('<input type=button class="btn" onclick="window.open(\'http://www.accesstoinsight.org/tipitaka/'+atiK[a]+'\');" value="'+auth+'" title="Translation of Dhp. '+sno+' by '+auth+'">');cnt++;
                                continue out;
                            }
                        }
                    }
                break;
                case 3: // uda
                    // kn/ud/ud.2.01.irel.html
                    out:
                    for (a = 0;a < atiK.length; a++) {
                        if(atiK[a].split('/')[1] == 'ud' && (vagga+1) == atiK[a].split('.')[1]) {
                            if(atiK[a].split('.')[2].indexOf('-')>=0) {b=atiK[a].split('.')[2].split('-');}
                            else {b=null;}
                            c=section+1;
                            d=c+"";
                            if (d.length < 2) { d = '0'+d; }
                            if((b && c >= parseInt(b[0].replace(/(^0*|x)/g,''),10) && c <= parseInt(b[1].replace(/(^0*|x)/g,''),10)) || atiK[a].split('.')[2].indexOf(d)==0) {
                                if (b) {var sno = b[0].replace(/^0*/g,'') +"-"+ b[1].replace(/^0*/g,'');}
                                else {var sno = c;}
                                var auth = atiK[a].split('.')[3];
                                if (autha[auth]) {auth = autha[auth];}
                                if (atiK[a] == 'kn/ud/ud.6.09.olen.html') { atiK[a] = 'kn/ud/ud.6.09-olen.html';}
                                output.push('<input type=button class="btn" onclick="window.open(\'http://www.accesstoinsight.org/tipitaka/'+atiK[a]+'\');" value="'+auth+'" title="Translation of Uda '+(vagga+1)+'.'+sno+' by '+auth+'">');cnt++;
                                continue out;
                            }
                        }
                    }
                break;
                case 4: // iti
                    // kn/iti/iti.1.001-027.than.html
                    section += (sutta*10);
                    switch (vagga) {
                        case 1:
                            section += 27;
                            break;
                        case 2:
                            section += 49;
                            break;
                        case 3:
                            section += 99;
                            break;
                        }
                    out:
                    for (a = 0;a < atiK.length; a++) {
                        if(atiK[a].split('/')[1] == 'iti' && (vagga+1) == atiK[a].split('.')[1]) {
                            if(atiK[a].split('.')[2].indexOf('-')>=0) {b=atiK[a].split('.')[2].split('-');}
                            else {b=null;}
                            c=section+1;
                            d=c+"";
                            if (d.length < 2) { d = '0'+d; }
                            if((b && c >= parseInt(b[0].replace(/(^0*|x)/g,''),10) && c <= parseInt(b[1].replace(/(^0*|x)/g,''),10)) || atiK[a].split('.')[2].indexOf(d)==0) {
                                if (b) {var sno = b[0].replace(/^0*/g,'') +"-"+ b[1].replace(/^0*/g,'');}
                                else {var sno = c;}
                                var auth = atiK[a].split('.')[3];
                                if (autha[auth]) {auth = autha[auth];}
                                output.push('<input type=button class="btn" onclick="window.open(\'http://www.accesstoinsight.org/tipitaka/'+atiK[a]+'\');" value="'+auth+'" title="Translation of KhP '+sno+' by '+auth+'">');cnt++;
                                continue out;
                            }
                        }
                    }
                break;
                case 5: // sn
                    // kn/snp/snp.4.16.than.html
                    //alert(meta + ' ' + volume + ' ' + vagga + ' ' + sutta + ' ' + section);
                    if (vagga == 4) section--;
                    
                    out:
                    for (a = 0;a < atiK.length; a++) {
                        if(atiK[a].split('/')[1] == 'snp' && (vagga+1) == atiK[a].split('.')[1]) {
                            if(atiK[a].split('.')[2].indexOf('-')>=0) b=atiK[a].split('.')[2].split('-');
                            else {b=null;}
                            c=section+1;
                            d=c+"";
                            if (d.length < 2) { d = '0'+d; }
                            if((b && c >= parseInt(b[0].replace(/(^0*|x)/g,''),10) && c <= parseInt(b[1].replace(/(^0*|x)/g,''),10)) || atiK[a].split('.')[2].indexOf(d)==0) {
                                if (b) {var sno = b[0].replace(/^0/g,'') +"-"+ b[1].replace(/^0/g,'');}
                                else {var sno = c;}
                                var auth = atiK[a].split('.')[3];
                                if (autha[auth]) {auth = autha[auth];}
                                output.push('<input type=button class="btn" onclick="window.open(\'http://www.accesstoinsight.org/tipitaka/'+atiK[a]+'\');" value="'+auth+'" title="Translation of SN '+(vagga+1)+'.'+sno+' by '+auth+'">');cnt++;
                                continue out;
                            }
                        }
                    }
                    if (vagga == 4) {output.push('&nbsp;<img width="16" style="vertical-align:middle" src="http://www.ancient-buddhist-texts.net/favicon.gif" title="Translations courtesy of http://www.ancient-buddhist-texts.net/" onclick="window.open(\'http://www.accesstoinsight.org/\')">&nbsp;<input type=button class="btn" onclick="window.open(\'http://www.ancient-buddhist-texts.net/Texts-and-Translations/Parayanavagga/index.htm\');" value="Anandajoti" title="Translation of SN 5 by Anandajoti">');cnt++;}
                break;
                case 6: // Vv
                    // kn/ud/ud.2.01.irel.html
                    if (vagga == 1) {sutta +=4;}
                    out:
                    for (a = 0;a < atiK.length; a++) {
                        if(atiK[a].split('/')[1] == 'vv' && (sutta+1) == atiK[a].split('.')[1]) {
                            if(atiK[a].split('.')[2].indexOf('-')>=0) {b=atiK[a].split('.')[2].split('-');}
                            else {b=null;}
                            c=section+1;
                            d=c+"";
                            if (d.length < 2) { d = '0'+d; }
                            if((b && c >= parseInt(b[0].replace(/(^0*|x)/g,''),10) && c <= parseInt(b[1].replace(/(^0*|x)/g,''),10)) || atiK[a].split('.')[2].indexOf(d)==0) {
                                if (b) {var sno = b[0].replace(/^0*/g,'') +"-"+ b[1].replace(/^0*/g,'');}
                                else {var sno = c;}
                                var auth = atiK[a].split('.')[3];
                                if (autha[auth]) {auth = autha[auth];}
                                if (atiK[a] == 'kn/ud/ud.6.09.olen.html') { atiK[a] = 'kn/ud/ud.6.09-olen.html';}
                                output.push('<input type=button class="btn" onclick="window.open(\'http://www.accesstoinsight.org/tipitaka/'+atiK[a]+'\');" value="'+auth+'" title="Translation of Vv '+(sutta+1)+'.'+sno+' by '+auth+'">');cnt++;
                                continue out;
                            }
                        }
                    }
                break;
                case 7: // Pv
                    // kn/ud/ud.2.01.irel.html
                    out:
                    for (a = 0;a < atiK.length; a++) {
                        if(atiK[a].split('/')[1] == 'pv' && (vagga+1) == atiK[a].split('.')[1]) {
                            if(atiK[a].split('.')[2].indexOf('-')>=0) {b=atiK[a].split('.')[2].split('-');}
                            else {b=null;}
                            c=section+1;
                            d=c+"";
                            if (d.length < 2) { d = '0'+d; }
                            if((b && c >= parseInt(b[0].replace(/(^0*|x)/g,''),10) && c <= parseInt(b[1].replace(/(^0*|x)/g,''),10)) || atiK[a].split('.')[2].indexOf(d)==0) {
                                if (b) {var sno = b[0].replace(/^0*/g,'') +"-"+ b[1].replace(/^0*/g,'');}
                                else {var sno = c;}
                                var auth = atiK[a].split('.')[3];
                                if (autha[auth]) {auth = autha[auth];}
                                if (atiK[a] == 'kn/ud/ud.6.09.olen.html') { atiK[a] = 'kn/ud/ud.6.09-olen.html';}
                                output.push('<input type=button class="btn" onclick="window.open(\'http://www.accesstoinsight.org/tipitaka/'+atiK[a]+'\');" value="'+auth+'" title="Translation of Pv '+(vagga+1)+'.'+sno+' by '+auth+'">');cnt++;
                                continue out;
                            }
                        }
                    }
                break;
                case 8: // Tha
                    // kn/ud/ud.2.01.irel.html
                    section += (sutta*10);
                    //alert(vagga + ' ' + sutta + ' ' + section);
                    out:
                    for (a = 0;a < atiK.length; a++) {
                        if(atiK[a].split('/')[1] == 'thag' && vagga == atiK[a].split('.')[1]) {
                            if(atiK[a].split('.')[2].indexOf('-')>=0) {b=atiK[a].split('.')[2].split('-');}
                            else {b=null;}
                            c=section+1;
                            d=c+"";
                            if (d.length < 2) { d = '0'+d; }
                            if((b && c >= parseInt(b[0].replace(/(^0*|x)/g,''),10) && c <= parseInt(b[1].replace(/(^0*|x)/g,''),10)) || atiK[a].split('.')[2].indexOf(d)==0) {
                                if (b) {var sno = b[0].replace(/^0*/g,'') +"-"+ b[1].replace(/^0*/g,'');}
                                else {var sno = c;}
                                var auth = atiK[a].split('.')[3];
                                if (autha[auth]) {auth = autha[auth];}
                                if (atiK[a] == 'kn/ud/ud.6.09.olen.html') { atiK[a] = 'kn/ud/ud.6.09-olen.html';}
                                output.push('<input type=button class="btn" onclick="window.open(\'http://www.accesstoinsight.org/tipitaka/'+atiK[a]+'\');" value="'+auth+'" title="Translation of Thag '+vagga+'.'+sno+' by '+auth+'">');cnt++;
                                continue out;
                            }
                        }
                    }
                break;
                case 9: // Thi
                    // kn/ud/ud.2.01.irel.html
                    //alert(vagga + ' ' + sutta + ' ' + section);
                    out:
                    for (a = 0;a < atiK.length; a++) {
                        if(atiK[a].split('/')[1] == 'thig' && (vagga+1) == atiK[a].split('.')[1]) {
                            if(atiK[a].split('.')[2].indexOf('-')>=0) {b=atiK[a].split('.')[2].split('-');}
                            else {b=null;}
                            c=section+1;
                            d=c+"";
                            if (d.length < 2) { d = '0'+d; }
                            if((b && c >= parseInt(b[0].replace(/(^0*|x)/g,''),10) && c <= parseInt(b[1].replace(/(^0*|x)/g,''),10)) || atiK[a].split('.')[2].indexOf(d)==0) {
                                if (b) {var sno = b[0].replace(/^0*/g,'') +"-"+ b[1].replace(/^0*/g,'');}
                                else {var sno = c;}
                                var auth = atiK[a].split('.')[3];
                                if (autha[auth]) {auth = autha[auth];}
                                if (atiK[a] == 'kn/ud/ud.6.09.olen.html') { atiK[a] = 'kn/ud/ud.6.09-olen.html';}
                                output.push('<input type=button class="btn" onclick="window.open(\'http://www.accesstoinsight.org/tipitaka/'+atiK[a]+'\');" value="'+auth+'" title="Translation of Thig '+(vagga+1)+'.'+sno+' by '+auth+'">');cnt++;
                                continue out;
                            }
                        }
                    }
                break;
                case 16: // MNi
                break;
                case 19: // Mil
                break;
            }
        break;
    }
    if (cnt > 0) {     return output; }
}


function xmlrefer()
{
	var nik = document.form.nik.selectedIndex;
	var book = document.form.book.selectedIndex;
	var sutta = document.form.sutta.selectedIndex;
	var sect = document.form.section.selectedIndex;
	var ref = '<xml>' + nik + ',' + book + ',' + sutta + ',' + sect + '</xml>'
	document.form.xmlref.value = ref;
}

function thaiconv(input,type) {
	var vowel = [];
	vowel['a'] = 1;
	vowel['i'] = 1;
	vowel['u'] = 1;
	vowel['e'] = 2;
	vowel['o'] = 2;

	var spec = [];
	spec['k'] = 1;
	spec['g'] = 1;
	spec['c'] = 1;
	spec['j'] = 1;
	spec['t'] = 1;
	spec['d'] = 1;
	spec['p'] = 1;
	spec['b'] = 1;

	var thair = [];
	thair['a'] = 'อ';
	thair['aa'] = 'า';
	thair['i'] = 'ิ';
	thair['ii'] = 'ี';
	thair['i.m'] = 'ึ';
	thair['u'] = 'ุ';
	thair['uu'] = 'ู';
	thair['e'] = 'เ';
	thair['o'] = 'โ';
	thair['.m'] = 'ํ';
	thair['k'] = 'ก';
	thair['kh'] = 'ข';
	thair['g'] = 'ค';
	thair['gh'] = 'ฆ';
	thair['"n'] = 'ง';
	thair['c'] = 'จ';
	thair['ch'] = 'ฉ';
	thair['j'] = 'ช';
	thair['jh'] = 'ฌ';
	thair['~n'] = 'ญ';
	thair['.t'] = 'ฏ';
	thair['.th'] = 'ฐ';
	thair['.d'] = 'ฑ';
	thair['.dh'] = 'ฒ';
	thair['.n'] = 'ณ';
	thair['t'] = 'ต';
	thair['th'] = 'ถ';
	thair['d'] = 'ท';
	thair['dh'] = 'ธ';
	thair['n'] = 'น';
	thair['p'] = 'ป';
	thair['ph'] = 'ผ';
	thair['b'] = 'พ';
	thair['bh'] = 'ภ';
	thair['m'] = 'ม';
	thair['y'] = 'ย';
	thair['r'] = 'ร';
	thair['l'] = 'ล';
	thair['.l'] = 'ล';
	thair['v'] = 'ว';
	thair['s'] = 'ส';
	thair['h'] = 'ห';

	var i0 = '';
	var i1 = '';
	var i2 = '';
	var i3 = '';
	var i4 = '';
	var i5 = '';
	var output = '';
	var cons = 0;
	var i = 0;
	
	input = input.replace(/\&quot;/g, '`');

	while (i < input.length) {
		i0 = input.charAt(i-1);
		i1 = input.charAt(i);
		i2 = input.charAt(i+1);
		i3 = input.charAt(i+2);
		i4 = input.charAt(i+3);
		i5 = input.charAt(i+4);
		
		if (vowel[i1]) {
			cons = 0;
			if (i1 == 'o' || i1 == 'e') {
				output += thair[i1];
				if (i == 0 || i0 == 'a') output += thair['a'];
				i++;
			}
			else {
				if (i == 0 || i0 == 'a') output += thair['a'];
				if (i1 == i2) {
					output += thair[i1+i2];
					i = i + 2;	
				}
				else if (i1 == 'i' && i2 == '.' && i3 == 'm') { // special i.m character
					output += thair[i1+i2+i3];
					i = i + 3;				
				}
				else if (i1 != 'a') { // nothing for a
					output += thair[i1];
					i++;
				}
				else i++;
			}
		}		
		else if (thair[i1+i2+i3]) {		// three character match
			cons++;
			if (cons >= 2) output += 'ฺ';
			if (i4 == 'o' || i4 == 'e') {
				output += thair[i4];
				i++;
				cons = 0;
			}	
			output += thair[i1+i2+i3];
			i = i + 3;
		}					
		else if (thair[i1+i2]) {		// two character match
			cons++;
			if (i2 == 'm') cons = 0 // exception for .m
			if (cons >= 2) output += 'ฺ';
			if (i3 == 'o' || i3 == 'e') {
				output += thair[i3];
				i++;
				cons = 0;
			}	
			output += thair[i1+i2];
			i = i + 2;
		}					
		else if (thair[i1] && i1 != 'a') {		// one character match except a
			cons++;
			if (cons >= 2) output += 'ฺ';
			if (i2 == 'o' || i2 == 'e') {
				output += thair[i2];
				i++;
				cons = 0;
			}	
			output += thair[i1];
			i++;
		}					
		else if (!thair[i1]) {
			cons = 0;
			output += i1;
			i++;				
			if (i2 == 'o' || i2 == 'e') {  // long vowel first
				output += thair[i2];
				i++;
				cons = 0;
			}
			if (vowel[i2]) {  // word-beginning vowel marker
				output += thair['a']; 
			}
		}
		else i++;
	}
	output = output.replace(/\`+/g, '"');
	return output;
}	

var script = 0;

function chscript(reset) {
	var scra = [];
	scra[0] = '<input type="button" class="btn" value="T" onClick="chscript()" title="Change to Thai script">';
	scra[1] = '<input type="button" class="btn" value="R" onClick="chscript()" title="Change to Roman script">';
	if (reset) script = 0;
	else script++;
	if (script >= scra.length) script = 0;
	document.getElementById('script').innerHTML = scra[script];
	importXML();
}
		
function translit(input) {
	if (script == 1) output = thaiconv(replacevelstandard(input));
	return output;
}
