//node js
//var $ = require('jquery');
//alchemy api clean text retrieval
$.getScript("data/api.js", function(){
});
function len(){
    var inputText = document.getElementById("inputText");
    return inputText.innerHTML.length;
}
function highlight(text,cls,color,start_index,len,iter) {
    iter += 1;
    if (iter == 2000)return start_index;//record end index
    var inputText = document.getElementById("inputText");
    var innerHTML = inputText.innerHTML;
    var index = innerHTML.indexOf(text, start_index);
    if (index >= 0 && index < len) {
        innerHTML = innerHTML.substring(0, index) +
            "<span class=" + cls + ">" +
            innerHTML.substring(index, index + text.length) +
            "</span>" + innerHTML.substring(index + text.length);
        inputText.innerHTML = innerHTML;
        highlight(text, cls, color, index + text.length + 19, len, iter);
    }
    else {
        $('.' + cls.toString()).css('background-color', color);
        console.log('reached end of text');
    }
}
function getTexT(){
    var array = [];
    var elements = document.body.getElementsByTagName("*");

    for(var i = 0; i < elements.length; i++) {
        var current = elements[i];
        console.log(current, current.children);
        if(current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') {
            array.push(current.textContent);
        }
    }
    console.log(array);
    alert(JSON.stringify(array));
}
function getTextArray(startingPoint) {
    var text = [];
    function gt(start) {
        if (start.nodeType === 3)
            text.push(start.nodeValue);
        else if (start.nodeType === 1)
            if (start.tagName != "SCRIPT" && start.tagName != "STYLE")
                for (var i = 0; i < start.childNodes.length; ++i)
                    gt(start.childNodes[i]);
    }
    gt(startingPoint);
    return text;
}


var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        //if node
        //var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
       //
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        };
        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
};
function getCleanTxt(texturl){
    var APIClient = new HttpClient();
    APIClient.get('http://gateway-a.watsonplatform.net/calls/url/URLGetText?apikey='+alchemyAPI+
    '&url='+texturl+'&outputMode=json', function(response) {
        var obj = JSON.parse(response);
        text = obj.text;
        console.log(text);
    });
    return text;
}
function getInputURL(){
    return document.getElementById("inputURL").value;
}
function showCleanTxt(texturl){
    var APIClient = new HttpClient();
    APIClient.get('http://gateway-a.watsonplatform.net/calls/url/URLGetText?apikey='+alchemyAPI+
        '&url='+texturl+'&outputMode=json', function(response) {
        var obj = JSON.parse(response);
        var t  = document.createElement("p");
        document.getElementById("CleanText").appendChild(t);
        $("p").text(obj.text);
    });
}
//getCleanTxt(document.URL);
//getCleanTxt('https://en.wikipedia.org/wiki/Marvin_Minsky');



