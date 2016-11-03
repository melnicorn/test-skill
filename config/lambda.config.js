const { name, description, version } = require('../package.json');

export default {
  accessKeyId: 'AKIAIF22IO2IQJQATVFA',
  secretAccessKey: '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',
  role: 'arn:aws:iam::136526238051:role/lambda_basic_execution',
  functionName: name,
  description: `${description} (version ${version})`,
  region: 'us-east-1',
  handler: 'index.handler'
};
