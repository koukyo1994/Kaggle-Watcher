function postMessage(message, channelId) {
  var prop = PropertiesService.getScriptProperties().getProperties();
  var slackApp = SlackApp.create(prop.token);
  var response = slackApp.postMessage(
    channelId, 
    message, 
    {
      "username": "Kaggle Manager"
    })
}
