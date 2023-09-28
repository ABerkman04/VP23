const http = require("http");

http.createServer(function(req, res){
	//määrame tagastavate andmete päise, et on veebi leht
	res.writeHead(200, {"content-Type": "text/html"});
	res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Albert Berkman, veebiprogrammeerimine 2023</title><script src ="first.js"defer></script></head><body>')
	res.write('<img src= "../~rinde/media/pics/banner/vp_banner_2023.png"_alt="veebiprogrammeerimine kursuse banner"><h1>Albert Berkman</h1><p>See leht on loodud <a href="https://www.tlu.ee" target="_blank">TLÜ</a> Digitehnoloogiate instituudis õppetöö raames! Ma lisasin siia asju juurde jeeee!</p><hr><p>Kursus, mille raames leht tehti on: veebiprogrammeerimine. </p></body></html>')
	return res.end();
}).listen(5204);

//5200 rinde

//5204 mina