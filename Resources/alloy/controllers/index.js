function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId2 = Ti.UI.createWindow({
        backgroundColor: "blue",
        navBarHidden: true,
        title: "Find",
        id: "__alloyId2"
    });
    $.__views.__alloyId3 = Alloy.createController("FindView", {
        id: "__alloyId3",
        __parentSymbol: $.__views.__alloyId2
    });
    $.__views.__alloyId3.setParent($.__views.__alloyId2);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Find",
        icon: "images/Badge/search.png",
        id: "__alloyId1"
    });
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId5 = Ti.UI.createWindow({
        backgroundColor: "blue",
        navBarHidden: true,
        title: "Tab 2",
        id: "__alloyId5"
    });
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 2",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId4 = Ti.UI.createTab({
        window: $.__views.__alloyId5,
        title: "Hierarchy",
        icon: "images/Badge/hierarchy.png",
        id: "__alloyId4"
    });
    $.__views.index.addTab($.__views.__alloyId4);
    $.__views.__alloyId8 = Ti.UI.createWindow({
        backgroundColor: "blue",
        navBarHidden: true,
        title: "Tab 3",
        id: "__alloyId8"
    });
    $.__views.__alloyId9 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 3",
        id: "__alloyId9"
    });
    $.__views.__alloyId8.add($.__views.__alloyId9);
    $.__views.__alloyId7 = Ti.UI.createTab({
        window: $.__views.__alloyId8,
        title: "Header",
        icon: "images/Badge/header.png",
        id: "__alloyId7"
    });
    $.__views.index.addTab($.__views.__alloyId7);
    $.__views.__alloyId11 = Ti.UI.createWindow({
        backgroundColor: "blue",
        navBarHidden: true,
        title: "Tab 4",
        id: "__alloyId11"
    });
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 4",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId10 = Ti.UI.createTab({
        window: $.__views.__alloyId11,
        title: "Settings",
        icon: "images/Badge/setting.png",
        id: "__alloyId10"
    });
    $.__views.index.addTab($.__views.__alloyId10);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    config = {
        platformWidth: Ti.Platform.displayCaps.platformWidth,
        platformHeight: Ti.Platform.displayCaps.platformHeight,
        osname: Ti.Platform.osname,
        imgPath: "/images/"
    };
    $.btnCustomer.addEventListener("click", function() {
        $.btnCustomer.backgroundImage == config.imgPath + "Button/Button_NavBar_Left1x.png" && ($.btnCustomer.backgroundImage = config.imgPath + "Button/Button_NavBar_Left_Selected1x.png");
        $.btnServiceOrderNo.backgroundImage = config.imgPath + "Button/Button_NavBar_Middle1x.png";
        $.btnSerialNo.backgroundImage = config.imgPath + "Button/Button_NavBar_Middle1x.png";
        $.btnOtherOpt.backgroundImage = config.imgPath + "Button/Button_NavBar_Right1x.png";
    });
    $.btnServiceOrderNo.addEventListener("click", function() {
        $.btnServiceOrderNo.backgroundImage == config.imgPath + "Button/Button_NavBar_Middle1x.png" && ($.btnServiceOrderNo.backgroundImage = config.imgPath + "Button/Button_NavBar_Middle_Selected1x.png");
        $.btnCustomer.backgroundImage = config.imgPath + "Button/Button_NavBar_Left1x.png";
        $.btnSerialNo.backgroundImage = config.imgPath + "Button/Button_NavBar_Middle1x.png";
        $.btnOtherOpt.backgroundImage = config.imgPath + "Button/Button_NavBar_Right1x.png";
    });
    $.btnSerialNo.addEventListener("click", function() {
        $.btnSerialNo.backgroundImage == config.imgPath + "Button/Button_NavBar_Middle1x.png" && ($.btnSerialNo.backgroundImage = config.imgPath + "Button/Button_NavBar_Middle_Selected1x.png");
        $.btnCustomer.backgroundImage = config.imgPath + "Button/Button_NavBar_Left1x.png";
        $.btnServiceOrderNo.backgroundImage = config.imgPath + "Button/Button_NavBar_Middle1x.png";
        $.btnOtherOpt.backgroundImage = config.imgPath + "Button/Button_NavBar_Right1x.png";
    });
    $.btnOtherOpt.addEventListener("click", function() {
        $.btnOtherOpt.backgroundImage == config.imgPath + "Button/Button_NavBar_Right1x.png" && ($.btnOtherOpt.backgroundImage = config.imgPath + "Button/Button_NavBar_Right_Selected1x.png");
        $.btnCustomer.backgroundImage = config.imgPath + "Button/Button_NavBar_Left1x.png";
        $.btnServiceOrderNo.backgroundImage = config.imgPath + "Button/Button_NavBar_Middle1x.png";
        $.btnSerialNo.backgroundImage = config.imgPath + "Button/Button_NavBar_Middle1x.png";
    });
    $.btnCustomer.width = .2 * config.platformWidth;
    $.btnServiceOrderNo.left = .2 * config.platformWidth;
    $.btnServiceOrderNo.width = .2 * config.platformWidth;
    $.btnSerialNo.left = .4 * config.platformWidth;
    $.btnSerialNo.width = .2 * config.platformWidth;
    $.btnOtherOpt.left = .6 * config.platformWidth;
    $.btnOtherOpt.width = .2 * config.platformWidth;
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;