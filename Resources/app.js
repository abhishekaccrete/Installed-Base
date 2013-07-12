var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

config = {
    platformWidth: Ti.Platform.displayCaps.platformWidth,
    platformHeight: Ti.Platform.displayCaps.platformHeight,
    osname: Ti.Platform.osname,
    imgPath: "/images/"
};

Alloy.createController("index");