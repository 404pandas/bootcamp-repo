var badRequestUrl = "https://api.github.com/unicorns";
var redirectUrl = "./404.html";

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  //   if (response.status === 404) {
  // If that status equals the conditional, then redirect to the 404 page.
  // document.location.replace(redirectUrl);
  // } else {
  // return response.json();
  // }
});
