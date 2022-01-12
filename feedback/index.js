var AWS = require("aws-sdk");

exports.handler = function(event, context) {
    
    var eventText = JSON.stringify(event.body, null, 2);
    console.log("Received event:", eventText);
    
    var sns = new AWS.SNS();
    var params = {
        Message: "Feedback:"+"\n"+
        "---------------------------------------------------------"+"\n"+
        "                  "+eventText+"\n"+
        "---------------------------------------------------------", 
        Subject: "You've got a Feedback from a user:",
        TopicArn: "arn:aws:sns:us-east-1:984961331207:Feedback"
    };
    
    sns.publish(params, context.done);
};