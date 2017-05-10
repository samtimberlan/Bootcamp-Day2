var http = require('http');                                     //Get Http module

var options = 
{
    host: 'api.football-data.org',                              //api address
    port:80,
    path:'/v1/competitions/405/leagueTable',                    //api path name
    method:'GET'
};

http.request(options, function(response){                       //Suscribing to the api
    var body = '';

    response.on('data', function(chunk){
        body += chunk;
    });

    response.on('end', function(){
        var result = JSON.parse(body);                          
        console.log(result);
    });

}).end();
