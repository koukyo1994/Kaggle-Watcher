function testKernelListUp() {
  var competitionName = "quora-insincere-questions-classification";
  var kernels = kernelListUp(competitionName);
  GSUnit.assertNotUndefined(kernels);
}

function testUrlFetch() {
  var url = "https://www.google.com/";
  var response = UrlFetchApp.fetch(url);
  Logger.log(response);
  GSUnit.assertNotUndefined(response);
}

function testKernelManipulator() {
  var competitionName = "quora-insincere-questions-classification";
  var kernels = kernelListUp(competitionName);
  Logger.log(JSON.parse(kernels.getContentText())[0].ref);
}