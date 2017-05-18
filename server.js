let express = require('express');
let app = express();
let request = require('request');

// function analyse_date(date) {
//     let year = date.getFullYear();
//     let month = date.getMonth();
//     let day = date.getDate();
//     let time = date.getTime();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     //change the return values to what you want
//     return [year, month, day];
// }

app.get('/:date_str', function (req, res) {

    // let result = {unix: 0,
    //               natural: ""};
    // var month_names = ["January", "February", "March", "April", "May", "June",
    //                   "July", "August", "September", "October", "November", "December"];
    // let date_unix = parseInt(req.params.date_str);
    // let date_iso = parseInt(date_unix*1000);//convert to miliseconds
    // let date_obj = new Date(date_iso);
    // if (JSON.stringify(date_obj) == "null") { //input is not correct
    //     result.unix = null;
    //     result.natural = null;
    // } else {
    //     result.unix = date_unix;
    //     let [year, month_idx, day] = analyse_date(date_obj);
    //     let month = month_names[month_idx];
    //     result.natural = month + " " + day + ", " + year;
    // }

    let api_ext = "https://timestamp-ms.herokuapp.com/";
    let req_link = api_ext + req.params.date_str;
    request(req_link, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.end(body);
        }
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

