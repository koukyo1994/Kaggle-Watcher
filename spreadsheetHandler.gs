function spreadsheetGetter(competitionName) {
  var prop = PropertiesService.getScriptProperties().getProperties();
  var ss = SpreadsheetApp.openById(prop.KERNEL_LIST_SHEET_ID);
  var sheet = ss.getSheetByName(competitionName);
  
  return sheet;
}

function spreadsheetWriter(sheet, kernels) {
  // Only for first One Time
  reverseKernels = kernels.reverse();
  var message = "";
  reverseKernels.forEach(function(kernel) {
    var title = kernel.title;
    var ref = "https://www.kaggle.com/" + kernel.ref;
    var author = kernel.author;
    var lastRunTime = kernel.lastRunTime;
    sheet.appendRow([title, ref, author, lastRunTime]);
    message += "[Info] New Kernel\n";
    message += "Title: " + title + " Author: " + author + "\n";
    message += "Ref: " + ref + " \n\n";
  });
  postMessage(message, "#kaggle-kernel");
}

function checkAndNotify(sheet, kernels) {
  if (kernels.length === sheet.getLastRow()) {
    return;
  }
  
  if (sheet.getLastRow() === 0) {
    spreadsheetWriter(sheet, kernels);
    return;
  }
  
  var numKernelAdded = kernels.length - sheet.getLastRow();
  for (var i = 0; i < numKernelAdded; i++) {
    var kernel = kernels[numKernelAdded - i - 1];
    var title = kernel.title;
    var ref = "https://www.kaggle.com/" + kernel.ref;
    var author = kernel.author;
    var lastRunTime = kernel.lastRunTime;
    sheet.appendRow([title, ref, author, lastRunTime]);
    
    var message = "[Info] New Kernel\n";
    message += "Title: " + title + " Author: " + author + "\n";
    message += "Ref: " + ref + "\n\n";
    postMessage(message, "#kaggle-kernel");
  }
}
