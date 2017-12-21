var request = require('request');
var Url = process.env.URL;

function get(url, func) {
  var options = {
    uri: url,
    json: true
  };
  request.get(options, func);
}

function post(url, data) {
  var options = {
    uri: url,
    headers: {
      "Content-type": "application/json",
    },
    json: data
  };
  request.post(options, function(error, response, body){});
}

function patch(url, id, data) {
  var options = {
    uri: url + id + '/',
    headers: {
      "Content-type": "application/json",
    },
    json: data
  };
  request.patch(options, function(error, response, body){});
}

function del(url, id) {
  var options = {
    uri: url + id + '/'
  };
  request.delete(options, function(error, response, body){});
}

//post(Url, {"temperature": 111, "humidity": 222, "pressure": 333});
patch(Url, '5FD31CA4-BBCC-46F6-8B15-94DF50DA2BCE', {"humidity": 888});
del(Url, '3307AC0C-9080-41E6-A205-BA3C4194C516');
setTimeout(get_disp, 5000);

function get_disp() {
  get(Url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    } else {
       console.log('error: '+ response.statusCode);
    }
  });
}
