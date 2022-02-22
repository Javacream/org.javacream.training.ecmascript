import fetch from 'node-fetch'
fetch("http://h2908727.stratoserver.net:8080/people").then((response) => response.json()).then((data) => console.log(data))
