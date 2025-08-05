import { Handler } from 'aws-lambda';

export const handler: Handler = async (event) => {
  console.log('Hi Dan');
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hi Dan' }),
  };
};