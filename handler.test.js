const { handler } = require('./handler'); // Adjust the path to where your Lambda code is located

describe('Lambda Handler', () => {
  it('should return statusCode 200 and the correct message', async () => {
    const mockEvent = { key: 'value' };

    const result = await handler(mockEvent);

    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(
      JSON.stringify(
        {
          message: "Go Serverless v3.0! Your function executed successfully!",
        },
      )
    );
  });
});
