function kernelListUp(competitionName) {
  var baseUrl = "https://www.kaggle.com/api/v1/kernels/list";
  var prop = PropertiesService.getScriptProperties().getProperties();
  
  var basicAuthEncoded = prop.BASIC_AUTH_ENCODED;
  var headers = {
    "Accept": "application/json",
    "Authorization": "Basic " + basicAuthEncoded,
    "Content-Type": "application/x-www-form-urlencoded"
  }
  
  var url = baseUrl + "?competition=" + competitionName + "&sortBy=dateCreated" + "&pageSize=1000";
  
  var options = {
    "method": "GET",
    "headers": headers
  }
  
  var response = UrlFetchApp.fetch(url, options);
  return responseToJSON(response);
}