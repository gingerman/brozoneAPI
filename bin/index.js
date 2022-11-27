const https = require('https');
const xml2js = require('xml2js');
var express = require('express');
const { url } = require('inspector');

const parser = new xml2js.Parser({ attrkey: "ATTR", ignoreAttrs: false, mergeAttrs: true });
const rssFeedURL = "https://rss.podomatic.net/rss/thebrozone.podomatic.com/rss2.xml";
const cors = require('cors');
const fs = require('fs');
const PORT = 5173;
var episodesJSON;

getEpisodes();

var app = express()
app.locals.episodesJSON = episodesJSON;

app.listen( 
    PORT,
    () => console.log("nodejs serverserving now on PORT : "+PORT)
)
app.use(cors({
    origin: ['http://localhost:5173']
}));
// app.use(cors({
//     origin: 'http://localhost:5173/' 
// }));
app.get('/api/brozone',  function (req, res){
    //let episodesJSON = JSON.parse( episodes );
    console.log( "\n/brozone called");    
    res.send(  JSON.parse(episodesJSON) );  
    fs.writeFileSync('./properJSON.json', episodesJSON);
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
            var episode = [];
            var key = "Brozones";
            // episode[key] = [];
            // episode = [];

            for ( item in obj.rss.channel[0].item ){
                var itunesTitle = String( obj.rss.channel[0].item[item]["itunes:title"] );
                var itunesEpisodeNumber = String( obj.rss.channel[0].item[item]["itunes:episode"] );
                var description = String( obj.rss.channel[0].item[item]["description"] );
                var streamURL = String( obj.rss.channel[0].item[item]["enclosure"][0].url );
                var streamDuration = String( obj.rss.channel[0].item[item]["itunes:duration"] );
                var itunesImage = String( obj.rss.channel[0].item[item]["itunes:image"][0].href );
                var publishedDate = String( obj.rss.channel[0].item[item]["pubDate"] );
                let myObj = {};
                // myObj =  { show: [ {episodeNumber:itunesEpisodeNumber,
                //                     episodeName:itunesTitle,
                //                     description: description,
                //                     image:itunesImage,
                //                     streamURL:streamURL,
                //                     streamDuration:streamDuration,
                //                     publishedDate:publishedDate } ] } ;
                myObj =  {episodeNumber:itunesEpisodeNumber,
                                    episodeName:itunesTitle,
                                    description: description,
                                    image:itunesImage,
                                    streamURL:streamURL,
                                    streamDuration:streamDuration,
                                    publishedDate:publishedDate };
                episode.push(myObj); 
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
