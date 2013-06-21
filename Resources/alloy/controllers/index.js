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
        title: "Find",
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
        backgroundColor: "transparent",
        borderColor: "black",
        borderRadius: "5px",
        id: "toolBar"
    });
    $.__views.header.add($.__views.toolBar);
    $.__views.btnCustomer = Ti.UI.createButton({
        left: 0,
        top: 0,
        borderColor: "black",
        backgroundImage: "/images/Button/Button_NavBar_Left_Selected1x.png",
        height: Ti.UI.FILL,
        font: {
            fontSize: 14
        },
        color: "white",
        title: "Customer",
        id: "btnCustomer"
    });
    $.__views.toolBar.add($.__views.btnCustomer);
    $.__views.btnServiceOrderNo = Ti.UI.createButton({
        borderColor: "black",
        backgroundImage: "/images/Button/Button_NavBar_Middle_Selected1x.png",
        height: Ti.UI.FILL,
        font: {
            fontSize: 14
        },
        color: "white",
        title: "Service Order #",
        id: "btnServiceOrderNo"
    });
    $.__views.toolBar.add($.__views.btnServiceOrderNo);
    $.__views.btnSerialNo = Ti.UI.createButton({
        borderColor: "black",
        backgroundImage: "/images/Button/Button_NavBar_Middle_Selected1x.png",
        height: Ti.UI.FILL,
        font: {
            fontSize: 14
        },
        color: "white",
        title: "Serial Number",
        id: "btnSerialNo"
    });
    $.__views.toolBar.add($.__views.btnSerialNo);
    $.__views.btnOtherOpt = Ti.UI.createButton({
        borderColor: "black",
        backgroundImage: "/images/Button/Button_NavBar_Right_Selected1x.png",
        height: Ti.UI.FILL,
        font: {
            fontSize: 14
        },
        color: "white",
        title: "Other Option",
        id: "btnOtherOpt"
    });
    $.__views.toolBar.add($.__views.btnOtherOpt);
    $.__views.bodyView = Ti.UI.createView({
        left: 0,
        backgroundImage: "/images/Background/Background_FindScreen1x.png",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        borderColor: "black",
        borderRadius: "5px",
        id: "bodyView"
    });
    $.__views.mainView.add($.__views.bodyView);
    $.__views.edtCustomer = Ti.UI.createTextField({
        left: "20%",
        top: "40%",
        width: "60%",
        height: Ti.UI.SIZE,
        hintText: "Customer",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "edtCustomer"
    });
    $.__views.bodyView.add($.__views.edtCustomer);
    $.__views.edtCity = Ti.UI.createTextField({
        left: "20%",
        top: "50%",
        width: "60%",
        height: Ti.UI.SIZE,
        hintText: "Your City",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "edtCity"
    });
    $.__views.bodyView.add($.__views.edtCity);
    $.__views.btnInstalledBase = Ti.UI.createButton({
        left: "20%",
        top: "70%",
        width: "60%",
        height: "5%",
        backgroundImage: "/images/Button/Button_Done1x.png",
        title: "Find Installed Base",
        id: "btnInstalledBase"
    });
    $.__views.bodyView.add($.__views.btnInstalledBase);
    $.__views.__alloyId1 = Ti.UI.createTab({
        window: $.__views.__alloyId2,
        title: "Find",
        icon: "images/Badge/search.png",
        id: "__alloyId1"
    });
    $.__views.index.addTab($.__views.__alloyId1);
    $.__views.__alloyId4 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 2",
        id: "__alloyId4"
    });
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 2",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId3 = Ti.UI.createTab({
        window: $.__views.__alloyId4,
        title: "Hierarchy",
        icon: "images/Badge/hierarchy.png",
        id: "__alloyId3"
    });
    $.__views.index.addTab($.__views.__alloyId3);
    $.__views.__alloyId7 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 3",
        id: "__alloyId7"
    });
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 3",
        id: "__alloyId8"
    });
    $.__views.__alloyId7.add($.__views.__alloyId8);
    $.__views.__alloyId6 = Ti.UI.createTab({
        window: $.__views.__alloyId7,
        title: "Header",
        icon: "images/Badge/header.png",
        id: "__alloyId6"
    });
    $.__views.index.addTab($.__views.__alloyId6);
    $.__views.__alloyId10 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Tab 4",
        id: "__alloyId10"
    });
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I am Window 4",
        id: "__alloyId11"
    });
    $.__views.__alloyId10.add($.__views.__alloyId11);
    $.__views.__alloyId9 = Ti.UI.createTab({
        window: $.__views.__alloyId10,
        title: "Settings",
        icon: "images/Badge/setting.png",
        id: "__alloyId9"
    });
    $.__views.index.addTab($.__views.__alloyId9);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    config = {
        platformWidth: Ti.Platform.displayCaps.platformWidth,
        platformHeight: Ti.Platform.displayCaps.platformHeight,
        osname: "android"
    };
    $.header.height = .06 * config.platformHeight;
    $.bodyView.top = .06 * config.platformHeight;
    $.toolBar.left = .1 * config.platformWidth;
    $.toolBar.width = .8 * config.platformWidth;
    $.toolBar.height = .05 * config.platformHeight;
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