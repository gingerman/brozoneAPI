#!/usr/bin/env node
const https = require('https');
const xml2js = require('xml2js');
const xpath = require("xml2js-xpath");
const parser = new xml2js.Parser({ attrkey: "ATTR", ignoreAttrs: false, mergeAttrs: true });
const rssFeedURL = "https://rss.podomatic.net/rss/thebrozone.podomatic.com/rss2.xml"; 
var childrenXML = "";
const episodes = [];

let req = https.get(rssFeedURL, function(res) {
    let xml_data  = '';
    res.on('data', (stream) => {
        xml_data = xml_data + stream;
    });
    res.on('end', () => {

        parser.parseString(xml_data, (error, result) => {
            if(error === null) {
				doNext( JSON.stringify(result) );
				var matches = xpath.find( result, "//item");	
		}
            else {
                console.log(error);
            }
        });
    });

});

let doNext = function(res){
	const obj = JSON.parse(res);

	for ( item in obj.rss.channel[0].item ){
		episodes[item] = obj.rss.channel[0].item[item].title
	}
	console.log ( episodes );
	//console.log ( episodes.length );
};

