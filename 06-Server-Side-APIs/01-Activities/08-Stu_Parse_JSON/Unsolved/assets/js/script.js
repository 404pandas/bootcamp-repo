// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = "https://api.github.com/repos/{owner}/{repo}/issues";
// var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Github Repo Issues \n----------");
    // TODO: Loop through the response
    // TODO: Console log each issue's URL and each user's login
    // for (var i = 0; i < data.length; i++) {
    // console.log(data[i].url);
    // console.log(data[i].user.login);
    // }
  });
