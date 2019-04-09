const appInsightsKey = process.env.APPINSIGHTS_INSTRUMENTATION_KEY;

if (appInsightsKey) {
    const appInsights = require("applicationinsights");
    appInsights.setup(appInsightsKey)
        .setAutoDependencyCorrelation(true)
        .setAutoCollectRequests(true)
        .setAutoCollectPerformance(true)
        .setAutoCollectExceptions(true)
        .setAutoCollectDependencies(true)
        .setAutoCollectConsole(true)
        .setUseDiskRetryCaching(true)
        .start();
}

// All the URL config goes here
if(parentApp) {
    parentApp.all(/.*/, function(req, res, next) {
        var host = req.header("host");

        // add localhost as needed. No plans on running the app locally as of the moment
        if (host.match(/^www\..*/i) || host.includes(".azurewebsites.net")) {
            next();
        } else {
            res.redirect(301, "https://www." + host + req.url);
        }
    });
}