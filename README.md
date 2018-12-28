# Kaggle-Watcher
Kaggle Notification System with [Kaggle API](https://www.kaggle.com/docs/api) and [Slack API](https://api.slack.com/web) using [Google Apps Script](https://developers.google.com/apps-script/)


## System overview
![Slack Notify](Slack\ Notify.png)

## Installation
1. Clone this Repository
2. Go to your Google Drive and make a new Google Apps Script Project.
3. Make a new spreadsheet in your Google Drive and make a new Spreadsheet. Name it with the competition name which you want to watch if new kernels appear.
3. If you have not installed the [Google Apps Script Assistant](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo), install it from the chrome application store.
4. Pull the repository you've cloned using the Google Apps Script Assistant.
5. Set three hidden properties.You can do this with `File > Project Properties > Script Properties` using webUI.
  - token: Slack API token. You can get this from [here](https://api.slack.com/custom-integrations/legacy-tokens).
  - BASIC_AUTH_ENCODED: Kaggle API basic authentification information.You can get this by running `import urllib3; urllib3.util.make_headers(basic_auth="YOUR_KAGGLE_USERNAME:YOUR_KAGGLE_PASSWORD").get("authorization")` with Python.`YOUR_KAGGLE_USERNAME` and `YOUR_KAGGLE_PASSWORD` is written in the your kaggle.json. Check [here](https://www.kaggle.com/docs/api) if you don't know what kaggle.json is. **Note that `YOUR_KAGGLE_PASSWORD` is not the one you use when you sign in your account.**
  - KERNEL_LIST_SHEET_ID: Spreadsheet ID of the Spreadsheet you have made in the step 3.You can get this by checking the URL of the Spreadsheet.The position of the ID in the URL is `https://docs.google.com/spreadsheets/d/(HERE)`.
6. Install SlackApp Library and GSUnit Library. You can do this from `Resources > Libraries`. The Library keys are `M3W5Ut3Q39AaIwLquryEPMwV62A3znfOO` and `MIUhnnCDES0N3YHPEWX9DUtkh30YExdAc`.
7. Trigger these code.You can do this from `Edit > Current Project Trigger`

**Happy Kaggling!!!**
  
