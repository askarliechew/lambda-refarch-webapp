// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "1cp6sb36625109bh9bj9m7uifn",     // CognitoClientID
  "api_base_url": "https://afwmmydn9a.execute-api.eu-west-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-sam-demo-5.auth.eu-west-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1f330v8s95o4i.amplifyapp.com"                                      // AmplifyURL
};

export default config;
