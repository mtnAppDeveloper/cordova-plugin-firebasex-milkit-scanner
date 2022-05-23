var exec = require('cordova/exec');

var ensureBoolean = function (callback){
    return function(result){
        callback(!!result);
    }
};

exports.getVerificationID = function (number, success, error) {
  exec(success, error, "FirebasePlugin", "getVerificationID", [number]);
};

// Notifications
exports.getId = function (success, error) {
  exec(success, error, "FirebasePlugin", "getId", []);
};

exports.getToken = function (success, error) {
  exec(success, error, "FirebasePlugin", "getToken", []);
};

exports.getAPNSToken = function (success, error) {
  exec(success, error, "FirebasePlugin", "getAPNSToken", []);
};

exports.onMessageReceived = function (success, error) {
  exec(success, error, "FirebasePlugin", "onMessageReceived", []);
};

exports.onTokenRefresh = function (success, error) {
  exec(success, error, "FirebasePlugin", "onTokenRefresh", []);
};

exports.onApnsTokenReceived = function (success, error) {
    exec(success, error, "FirebasePlugin", "onApnsTokenReceived", []);
};

exports.subscribe = function (topic, success, error) {
  exec(success, error, "FirebasePlugin", "subscribe", [topic]);
};

exports.unsubscribe = function (topic, success, error) {
  exec(success, error, "FirebasePlugin", "unsubscribe", [topic]);
};

exports.unregister = function (success, error) {
  exec(success, error, "FirebasePlugin", "unregister", []);
};

exports.isAutoInitEnabled = function (success, error) {
    exec(success, error, "FirebasePlugin", "isAutoInitEnabled", []);
};

exports.setAutoInitEnabled = function (enabled, success, error) {
    exec(success, error, "FirebasePlugin", "setAutoInitEnabled", [enabled]);
};

// Notifications - iOS-only
exports.setBadgeNumber = function (number, success, error) {
    exec(success, error, "FirebasePlugin", "setBadgeNumber", [number]);
};

exports.getBadgeNumber = function (success, error) {
    exec(success, error, "FirebasePlugin", "getBadgeNumber", []);
};

exports.grantPermission = function (success, error) {
    exec(ensureBoolean(success), error, "FirebasePlugin", "grantPermission", []);
};

exports.hasPermission = function (success, error) {
    exec(ensureBoolean(success), error, "FirebasePlugin", "hasPermission", []);
};

// Notifications - Android-only
exports.setDefaultChannel = function (options, success, error) {
    exec(success, error, "FirebasePlugin", "setDefaultChannel", [options]);
};

exports.createChannel = function (options, success, error) {
    exec(success, error, "FirebasePlugin", "createChannel", [options]);
};

exports.deleteChannel = function (channelID, success, error) {
    exec(success, error, "FirebasePlugin", "deleteChannel", [channelID]);
};

exports.listChannels = function (success, error) {
    exec(success, error, "FirebasePlugin", "listChannels", []);
};

// Analytics
exports.setAnalyticsCollectionEnabled = function (enabled, success, error) {
    exec(success, error, "FirebasePlugin", "setAnalyticsCollectionEnabled", [enabled]);
};

exports.logEvent = function (name, params, success, error) {
  exec(success, error, "FirebasePlugin", "logEvent", [name, params]);
};

exports.setScreenName = function (name, success, error) {
  exec(success, error, "FirebasePlugin", "setScreenName", [name]);
};

exports.setUserId = function (id, success, error) {
  exec(success, error, "FirebasePlugin", "setUserId", [id]);
};

exports.setUserProperty = function (name, value, success, error) {
  exec(success, error, "FirebasePlugin", "setUserProperty", [name, value]);
};

exports.activateFetched = function (success, error) {
  exec(ensureBoolean(success), error, "FirebasePlugin", "activateFetched", []);
};

exports.fetch = function (cacheExpirationSeconds, success, error) {
  var args = [];
  if (typeof cacheExpirationSeconds === 'number') {
    args.push(cacheExpirationSeconds);
  } else {
    error = success;
    success = cacheExpirationSeconds;
  }
  exec(success, error, "FirebasePlugin", "fetch", args);
};

exports.getByteArray = function (key, success, error) {
  exec(success, error, "FirebasePlugin", "getByteArray", [key]);
};

exports.getValue = function (key, success, error) {
  exec(success, error, "FirebasePlugin", "getValue", [key]);
};

exports.getInfo = function (success, error) {
  exec(success, error, "FirebasePlugin", "getInfo", []);
};

exports.setConfigSettings = function (settings, success, error) {
  exec(success, error, "FirebasePlugin", "setConfigSettings", [settings]);
};

exports.setDefaults = function (defaults, success, error) {
  exec(success, error, "FirebasePlugin", "setDefaults", [defaults]);
};

exports.startTrace = function (name, success, error) {
  exec(success, error, "FirebasePlugin", "startTrace", [name]);
};

exports.incrementCounter = function (name, counterNamed, success, error) {
  exec(success, error, "FirebasePlugin", "incrementCounter", [name, counterNamed]);
};

exports.stopTrace = function (name, success, error) {
  exec(success, error, "FirebasePlugin", "stopTrace", [name]);
};

exports.setPerformanceCollectionEnabled = function (enabled, success, error) {
  exec(success, error, "FirebasePlugin", "setPerformanceCollectionEnabled", [enabled]);
};


exports.clearAllNotifications = function (success, error) {
  exec(success, error, "FirebasePlugin", "clearAllNotifications", []);
};


// Crashlytics
exports.setCrashlyticsCollectionEnabled = function (success, error) {
    exec(success, error, "FirebasePlugin", "setCrashlyticsCollectionEnabled", []);
};

exports.logMessage = function (message, success, error) {
    exec(success, error, "FirebasePlugin", "logMessage", [message]);
};

exports.sendCrash = function (success, error) {
    exec(success, error, "FirebasePlugin", "sendCrash", []);
};

exports.logError = function (message, stackTrace, success, error) {
  var args = [message];
  // "stackTrace" is an optional arg that's an array of objects.
  if (stackTrace) {
    if (typeof stackTrace === 'function') {
      error = success;
      success = stackTrace;
    } else {
      args.push(stackTrace);
    }
  }
  exec(success, error, "FirebasePlugin", "logError", args);
};

exports.setCrashlyticsUserId = function (userId, success, error) {
    exec(success, error, "FirebasePlugin", "setCrashlyticsUserId", [userId]);
};


// Authentication
exports.verifyPhoneNumber = function (success, error, number, timeOutDuration, fakeVerificationCode) {
    exec(success, error, "FirebasePlugin", "verifyPhoneNumber", [number, timeOutDuration, fakeVerificationCode]);
};

exports.signInWithCredential = function (verificationId, code, success, error) {
    exec(success, error, "FirebasePlugin", "signInWithCredential", [verificationId, code]);
};

exports.linkUserWithCredential = function (verificationId, code, success, error) {
    exec(success, error, "FirebasePlugin", "linkUserWithCredential", [verificationId, code]);
};

/**************
 * 
 * add ml kit plugin 
 */


// ----------------------------------------------------------------------------
// |  Public interface
// ----------------------------------------------------------------------------
exports.getDefaultSettings = function() {
  return getDefaultSettings();
};

exports.startScanning = function (p_OnSuccess, p_OnError, p_Settings) {
  return startScanning(p_OnSuccess, p_OnError, p_Settings);
};

// ----------------------------------------------------------------------------
// |  Functions
// ----------------------------------------------------------------------------
function getDefaultSettings() {
  var settings = {
    barcodeTypes: {
      Aztec     : true,
      CodaBar   : true,
      Code39    : true,
      Code93    : true,
      Code128   : true,
      DataMatrix: true,
      EAN8      : true,
      EAN13     : true,
      ITF       : true,
      PDF417    : true,
      QRCode    : true,
      UPCA      : true,
      UPCE      : true,
    },
    detectorSize: {
        width : .5,
        height: .7
    }
  }; 

  return settings;
}

function startScanning(p_OnSuccess, p_OnError, p_Settings) {
  if (!p_Settings) {
    p_OnError("p_Settings can't be undefined. Use getDefaultSettings() to get a new settings object");
    return;
  }

  var enabledDetectorTypes = 0; //The type of detectors which are neabled are represented by an integer;

  var detectionTypes = {
    Code128   : 1   ,
    Code39    : 2   ,
    Code93    : 4   ,
    CodaBar   : 8   ,
    DataMatrix: 16  ,
    EAN13     : 32  ,
    EAN8      : 64  ,
    ITF       : 128 ,
    QRCode    : 256 ,
    UPCA      : 512 ,
    UPCE      : 1024,
    PDF417    : 2048,
    Aztec     : 4096,
  };

  for (var key in p_Settings.barcodeTypes) {
    if (p_Settings.barcodeTypes[key] == true) {
      enabledDetectorTypes += detectionTypes[key];
    }
  }

  var settingArray = [
    enabledDetectorTypes,
    p_Settings.detectorSize.width,
    p_Settings.detectorSize.height
  ];

  
  exec(p_Result => {
    p_OnSuccess(p_Result[0]);
  }, p_OnError, 'mlKitScanner','startScan',settingArray);
};