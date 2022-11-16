const app  = require( 'express' )();
// const EventEmitter = require('events');

const https = require('https');
const xml2js = require('xml2js');
const xpath = require("xml2js-xpath");
const parser = new xml2js.Parser({ attrkey: "ATTR", ignoreAttrs: false, mergeAttrs: true });
const rssFeedURL = "https://rss.podomatic.net/rss/thebrozone.podomatic.com/rss2.xml"; 
var childrenXML = "";
//const episodes = getEpisodes();
//console.log( "getEpisodes = " +episodes );



const PORT = 8080;

app.listen( 
    PORT,
    () => console.log("it's alive on PORT : "+PORT)
)

app.get("/brozone",  function (req, res){

    let episodes = getEpisodes();
    let episodesJSON = JSON.parse( episodes );
    console.log( "/brozone called");    
    console.log(episodesJSON); 
    res.send(  episodesJSON );    
});


function getEpisodes(){

    console.log("getEpisodes()")

    let feedres = https.get(rssFeedURL, function(feedres) {
        let xml_data  = '';
        
        feedres.on('data', (stream) => {
            xml_data = xml_data + stream;
    
        feedres.on('end', () => {
            parser.parseString(xml_data, (error, result) => {
                if(error === null) {
                    // doNext( JSON.stringify(result) );
                    //var matches = xpath.find( result, "//item");
                    const obj = JSON.parse( JSON.stringify(result) );	
                    var eps = {};
                    var key = "Shows";
                    eps[key] = [];
                        
                    for ( item in obj.rss.channel[0].item ){

                        var theString = String( obj.rss.channel[0].item[item].title );
                        //console.log( "++++ = " + theString );
                        let myObj = {};
                        myObj = JSON.stringify( { streamURL: theString } );
                        eps[key].push(myObj); 
                    }
                    
                    console.log( eps);
                        
                    var j = JSON.stringify(eps);

                    // eventEmitter.emit('my_event'j);
                        return j;
                }
                else {
                    console.log("error in Get Episodes = "+ error);
                }
            });
        });
    });
}