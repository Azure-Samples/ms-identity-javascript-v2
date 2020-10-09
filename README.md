---
page_type: sample
languages:
  - javascript
products:
  - ms-graph
  - azure-active-directory
  - microsoft-identity-platform  
name: A JavaScript single-page application calling Microsoft Graph API using MSAL.js (w/ AAD v2 endpoint)
urlFragment: ms-identity-javascript-v2
description: "This sample demonstrates a Vanilla JavaScript SPA using MSAL.js to authorize users for calling the Microsoft Graph API"
---

# A JavaScript single-page application calling Microsoft Graph API using MSAL.js (w/ AAD v2 endpoint)

A simple vanilla JavaScript single-page application which demonstrates how to configure [MSAL.JS 2.x](https://www.npmjs.com/package/@azure/msal-browser) to login, logout, and acquire an access token for a protected resource such as Microsoft Graph API. This version of the **MSAL.js** library uses the **Authorization Code flow w/ PKCE**.

## Contents

| File/folder       | Description                                |
|-------------------|--------------------------------------------|
| `app`             | Contains sample source files               |
| `authPopup.js`    | Main authentication logic resides here (using Popup flow).            |
| `authRedirect.js` | Use this instead of `authPopup.js` for authentication with redirect flow.   |
| `authConfig.js`   | Contains configuration parameters for the sample. |
| `graph.js`        | Provides a helper function for calling MS Graph API.   |
| `graphConfig.js`  | Contains API endpoints for MS Graph.       |
| `ui.js`           | Contains UI logic.                         |
| `index.html`      |  Contains the UI of the sample.            |
| `.gitignore`      | Define what to ignore at commit time.      |
| `CHANGELOG.md`    | List of changes to the sample.             |
| `CODE_OF_CONDUCT.md` | Code of Conduct information.            |
| `CONTRIBUTING.md` | Guidelines for contributing to the sample. |
| `package.json`    | Package manifest for npm.                   |
| `README.md`       | This README file.                          |
| `LICENSE`         | The license for the sample.                |
| `SECURITY.md`     | Security disclosures.                      |
| `server.js`     | Implements a simple Node server to serve index.html.  |

## Prerequisites

[Node](https://nodejs.org/en/) must be installed to run this sample.

## Setup

1. [Register a new application](https://docs.microsoft.com/azure/active-directory/develop/scenario-spa-app-registration) in the [Azure Portal](https://portal.azure.com). Ensure that the application is enabled for the [authorization code flow with PKCE](https://docs.microsoft.com/azure/active-directory/develop/v2-oauth2-auth-code-flow). This will require that you redirect URI configured in the portal is of type `SPA`.
2. Open the [/app/authConfig.js](./app/authConfig.js) file and provide the required configuration values.
3. On the command line, navigate to the root of the repository, and run `npm install` to install the project dependencies via npm.

## Running the sample

1. Configure authentication and authorization parameters:
   1. Open `authConfig.js`
   2. Replace the string `"Enter_the_Application_Id_Here"` with your app/client ID on AAD Portal.
   3. Replace the string `"Enter_the_Cloud_Instance_Id_HereEnter_the_Tenant_Info_Here"` with `"https://login.microsoftonline.com/common/"` (*note*: This is for multi-tenant applications located on the global Azure cloud. For more information, see the [documentation](https://docs.microsoft.com/azure/active-directory/develop/quickstart-v2-javascript-auth-code)).
   4. Replace the string `"Enter_the_Redirect_Uri_Here"` with the redirect uri you setup on AAD Portal.
2. Configure the parameters for calling MS Graph API:
   1. Open `graphConfig.js`.
   2. Replace the string `"Enter_the_Graph_Endpoint_Herev1.0/me"` with `"https://graph.microsoft.com/v1.0/me"`.
   3. Replace the string `"Enter_the_Graph_Endpoint_Herev1.0/me/messages"` with `"https://graph.microsoft.com/v1.0/me/messages"`.
3. To start the sample application, run `npm start`.
4. Finally, open a browser and navigate to [http://localhost:3000](http://localhost:3000).

## Key concepts

This sample demonstrates the following MSAL workflows:

* How to configure application parameters.
* How to sign-in with popup and redirect methods.
* How to sign-out.
* How to get user consent incrementally.
* How to acquire an access token.
* How to make an API call with the access token.

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
