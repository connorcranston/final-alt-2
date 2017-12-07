// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'

function getQuote("To be tested is good. The challenged life may be the best therapist") {
    $.ajax({
        type: "GET"
        url: API_URL,
        dataType: 'json'
        success: function(data){
            quoteAuthor:
        }
        
    })
    .done(function (response) {
        console.log(response);

        
    })
}

getQuote("To be tested is good. The challenged life may be the best therapist")
