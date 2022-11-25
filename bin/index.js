const https = require('https');
const xml2js = require('xml2js');
// const xpath = require("xml2js-xpath");
const parser = new xml2js.Parser({ attrkey: "ATTR", ignoreAttrs: false, mergeAttrs: true });
const rssFeedURL = "https://rss.podomatic.net/rss/thebrozone.podomatic.com/rss2.xml"; 


var episodesJSON;
getEpisodes();

console.log( "\n\ngetEpisodes() episodesJSON = " +episodesJSON );

const PORT = 5173;

var express = require('express');
const { url } = require('inspector');
var app = express()
app.locals.episodesJSON = episodesJSON;

app.listen( 
    PORT,
    () => console.log("it's alive on PORT : "+PORT)
)



app.get("/brozone",  function (req, res){

    //let episodesJSON = JSON.parse( episodes );
    console.log( "\n/brozone called");    
    res.send(  JSON.parse(episodesJSON) );    
});




function getEpisodes(){

    console.log("\ngetEpisodes()");
    let xml_data  = '';

    https.get( rssFeedURL ,(res) => {
        //console.log('statusCode:', res.statusCode);
        //console.log('headers:', res.headers);

        res.on('data', (d) => {
            //process.stdout.write(d);
            xml_data = xml_data + d;
        });

        res.on('end', (e) => {
            //console.log("end\n"+xml_data);
            parserXMLtoJSON(xml_data);
        });

        res.on('error', (e) => {
            console.error(e);
        });
    
})
}


function parserXMLtoJSON(xml_data){

    parser.parseString(xml_data, (error, result) => {

        if(error === null) {
            const obj = JSON.parse( JSON.stringify(result) );	
            var episode = {};
            var key = "Brozones";
            episode[key] = [];
            for ( item in obj.rss.channel[0].item ){
                var itunesTitle = String( obj.rss.channel[0].item[item]["itunes:title"] );
                var itunesEpisodeNumber = String( obj.rss.channel[0].item[item]["itunes:episode"] );
                var description = String( obj.rss.channel[0].item[item]["description"] );
                var streamURL = String( obj.rss.channel[0].item[item]["enclosure"][0].url );
                var streamDuration = String( obj.rss.channel[0].item[item]["itunes:duration"] );
                var itunesImage = String( obj.rss.channel[0].item[item]["itunes:image"][0].href );
                var publishedDate = String( obj.rss.channel[0].item[item]["pubDate"] );
                let myObj = {};
                myObj =  { show: [ {episodeNumber:itunesEpisodeNumber,
                                    episodeName:itunesTitle,
                                    description: description,
                                    image:itunesImage,
                                    streamURL:streamURL,
                                    streamDuration:streamDuration,
                                    publishedDate:publishedDate } ] } ;
                episode[key].push(myObj); 
            }
                            
            var j = JSON.stringify(episode);

            // this was the bit I missed //
            episodesJSON = j;
            //console.log( episodesJSON );

            return j;
        }
        else {
            console.log("error in Get Episodes = "+ error);
        }
    });
}
