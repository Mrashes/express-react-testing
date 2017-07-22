const request = require('request')


function scrape(input) {
    return new Promise (
        function(resolve, reject) {
        let query = input;
        let url = `https://www.instagram.com/explore/tags/${query}/?__a=1`
        request(url, function (err, response, body) {
                if(err){
                console.log(err)
                reject(err)
                }
                else {
                    let json = JSON.parse(body, 2)
                    if (json.tag.media.nodes[0].display_src == undefined){
                        let imgURL = [];
                        for (var i=0; i<json.tag.top_posts.nodes.length; i++) {
                        imgURL.push(json.tag.top_posts.nodes[i].display_src)
                        }
                        resolve(imgURL)
                    }
                    else{
                        let imgURL = [];
                        for (var i=0; i<json.tag.media.nodes.length; i++) {
                        imgURL.push(json.tag.media.nodes[i].display_src)
                        }
                        resolve(imgURL)
                    }
                }
            });
        }
    )
}

module.exports = scrape;