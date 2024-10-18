const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");

const snsClient = new SNSClient({ region: "ap-southeast-1" });

module.exports.handler = async (event) => {
  try {
    const eventText = JSON.stringify(event, null, 2);
    // Define parameters
    const params = {
      Message: eventText,
      Subject: "Test SNS From Lambda",
      TopicArn: process.env.EMAIL_ADDRESS
    };

    // Publish the message
    const data = await snsClient.send(new PublishCommand(params));

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Go Serverless v3.0! Your function executed successfully!",
        className: process.env.CLASS_NAME,
        snsResponse: data
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error publishing message",
        error: err.message,
      }),
    };
  }
};
