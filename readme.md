# Simple Rest API with Oauth 2.0 authentification

## Purpose
This is to test nodeJS as a rest interface backend

## Usage
Run the server with `npm test && node .`

Run the client with `node ./client.js http://localhost:3000/parts`

## Inspiration
### Original guide
https://developer.okta.com/blog/2018/08/21/build-secure-rest-api-with-node

### Divergences
0. Package versions in the original guide har vulnerabilities, so newer packages have been used
1. The package `epilogue` did not play well with the newest `equelize` so it has been replaced with `finalize`
2. Added JSON error handler to avoid  html errors
3. Updated call to verify token according to [okta KB article](https://support.okta.com/help/s/question/0D51Y00008cfYaB/error-expected-audience-is-required?language=en_US)

## Oauth2 Links:
* https://resources.infosecinstitute.com/securing-web-apis-part-ii-creating-an-api-authenticated-with-oauth-2-in-node-js/
* https://oauth.net/code/nodejs/