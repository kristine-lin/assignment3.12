# Serverless Application with Jest Unit Testing

This project is a simple serverless application implemented using AWS Lambda. It includes two main functionalities: 
1. A Lambda function that returns a message upon execution.
2. A set of basic arithmetic operations (`addition`, `substract`, `multiply`, `divide`).

The project also includes unit tests using Jest for both the Lambda function and the arithmetic operations.

## Project Structure

```
.
├── handler.js            # Lambda function handler
├── handler.test.js       # Jest tests for the Lambda function
├── math.js               # Arithmetic utility functions
├── math.test.js          # Jest tests for arithmetic functions
├── serverless.yml        # Serverless framework configuration
└── README.md             # Project documentation
```

## Requirements

- Node.js
- NPM (or Yarn)
- Jest
- Serverless Framework

## Installation

1. Clone the repository:

   ```bash
   git clone https://your-repository-url
   cd your-project-directory
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Install Serverless Framework if you haven't already:

   ```bash
   npm install -g serverless
   ```

## Running the Lambda Function Locally

To run the Lambda function locally, use the following command:

```bash
serverless invoke local --function functionName
```

Replace `functionName` with the actual name of your Lambda function as defined in `serverless.yml`.

## Running Tests

To run the Jest tests, execute the following command:

```bash
npm test
```

This will run the unit tests for both the Lambda handler (`handler.test.js`) and the arithmetic functions (`math.test.js`).

## Files

### Lambda Function: `handler.js`

This file contains the Lambda function that returns a simple message when invoked.

```javascript
module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v3.0! Your function executed successfully!",
      input: event,
    }, null, 2),
  };
};
```

### Arithmetic Functions: `math.js`

This file contains basic arithmetic operations.

```javascript
function addition(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

module.exports = {
    addition,
    substract,
    multiply,
    divide
};
```

### Tests: `handler.test.js` and `math.test.js`

These files contain Jest tests for the Lambda function and arithmetic operations.

#### Example: `handler.test.js`

```javascript
const { handler } = require('./handler');

describe('Lambda Handler', () => {
  it('should return statusCode 200 and the correct message', async () => {
    const mockEvent = { key: 'value' };

    const result = await handler(mockEvent);

    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(
      JSON.stringify({
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: mockEvent,
      }, null, 2)
    );
  });
});
```

#### Example: `math.test.js`

```javascript
const { addition, substract, multiply, divide } = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(addition(1, 2)).toBe(3);
});

test('2 - 1 to equal 1', () => {
  expect(substract(2, 1)).toBe(1);
});

test('2 * 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

test('4 / 2 to equal 2', () => {
  expect(divide(4, 2)).toBe(2);
});
```

## Deploying the Lambda Function

To deploy the function to AWS using the Serverless Framework, use the following command:

```bash
serverless deploy
```

This will deploy your Lambda function and other resources as defined in `serverless.yml`.

## License

This project is licensed under the MIT License.
```

### Explanation:
- The `README.md` covers project structure, installation instructions, file descriptions, testing, and deployment steps.
- The file is structured for users who may want to clone, test, and deploy the project easily.