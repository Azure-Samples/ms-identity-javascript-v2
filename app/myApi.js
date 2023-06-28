// function callMyApi(endpoint, token, callback) {
//   const headers = new Headers();
//   const bearer = `Bearer ${token}`;
//   console.log(bearer);
//   headers.append("Authorization", bearer);

//   const options = {
//     method: "GET",
//     headers: headers,
//   };

//   console.log("request made to call MY API at: " + new Date().toString());

//   fetch(endpoint, options)
//     .then((response) => response)
//     .then((response) => callback(response, endpoint))
//     .catch((error) => console.log(error));
// }

function callApi(endpoint, token) {
  console.log(token);
  const headers = new Headers();
  const bearer = `Bearer ${token}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };

  logMessage("Calling Web API...");

  fetch(endpoint, options)
    .then((response) => response.json())
    .then((response) => {
      if (response) {
        logMessage("Web API responded: Hello " + response.results + "!");
      }

      return response;
    })
    .catch((error) => {
      console.error(error);
    });
}
