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
        backgroundColor: "#fff",
        title: "Tab 1",
        id: "__alloyId2"
    });
    $.__views.mainView = Ti.UI.createView({
        left: 0,
        top: 0,
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        id: "mainView"
    });
    $.__views.__alloyId2.add($.__views.mainView);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 1",
        id: "__alloyId3"
    });
    $.__views.mainView.add($.__views.__alloyId3);
    $.__views.header = Ti.UI.createView({
        left: 0,
        top: 0,
        width: Ti.UI.FILL,
        backgroundColor: "gray",
        borderColor: "black",
        borderRadius: "5px",
        id: "header"
    });
    $.__views.mainView.add($.__views.header);
    $.__views.toolBar = Ti.UI.createView({
        top: 5,
        height: "5dp",
        backgroundColor: "white",
        borderColor: "black",
        borderRadius: "5px",
        id: "toolBar"
    });
    $.__views.header.add($.__views.toolBar);
    $.__views.btnCustomer = Ti.UI.createButton({
        backgroundImage: "images/Button/Button_NavBar_Left_Selected@1x.png",
        height: Ti.UI.SIZE,
        font: {
            fontSize: 14
        },
        title: "Customer",
        id: "btnCustomer",
        left: "0",
        top: "0",
        width: Ti.UI.SIZE
    });
    $.__views.toolBar.add($.__views.btnCustomer);
    $.__views.btnServiceOrderNo = Ti.UI.createButton({
        backgroundImage: "images/Button/Button_NavBar_Middle_Selected@1x.png",
        height: Ti.UI.FILL,
        font: {
            fontSize: 14
        },
        title: "Service Order #",
        id: "btnServiceOrderNo"
    });
    $.__views.toolBar.add($.__views.btnServiceOrderNo);
    $.__views.btnSerialNo = Ti.UI.createButton({
        backgroundImage: "images/Button/Button_NavBar_Middle_Selected@1x.png",
        height: Ti.UI.FILL,
        font: {
            fontSize: 14
        },
        title: "Serial Number",
        id: "btnSerialNo"
    });
    $.__views.toolBar.add($.__views.btnSerialNo);
    $.__views.btnOtherOpt = Ti.UI.createButton({
        backgroundImage: "images/Button/Button_NavBar_Middle_Selected@1x.png",
        height: Ti.UI.FILL,
        font: {
            fontSize: 14
        },
        title: "Other Option",
        id: "btnOtherOpt"
    });
    $.__views.toolBar.add($.__views.btnOtherOpt);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Find",
        icon: "images/Badge/search.png",
        id: "__alloyId1"
    });
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId5 = Ti.UI.createWindow({
        backgroundColor: "#fff",
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
        backgroundColor: "#fff",
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
        backgroundColor: "#fff",
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
        osname: Ti.Platform.osname
    };
    $.header.height = .06 * config.platformHeight;
    $.toolBar.left = .3 * config.platformWidth;
    $.toolBar.width = .4 * config.platformWidth;
    $.toolBar.height = .05 * config.platformHeight;
    $.btnCustomer.width = .1 * config.platformWidth;
    $.btnServiceOrderNo.left = .1 * config.platformWidth;
    $.btnServiceOrderNo.width = .1 * config.platformWidth;
    $.btnSerialNo.left = .2 * config.platformWidth;
    $.btnSerialNo.width = .1 * config.platformWidth;
    $.btnOtherOpt.left = .3 * config.platformWidth;
    $.btnOtherOpt.width = .1 * config.platformWidth;
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;