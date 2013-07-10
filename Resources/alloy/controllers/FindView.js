function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.mainView = Ti.UI.createView({
        id: "mainView"
    });
    $.__views.mainView && $.addTopLevelView($.__views.mainView);
    $.__views.header = Ti.UI.createView({
        id: "header"
    });
    $.__views.mainView.add($.__views.header);
    $.__views.toolBar = Ti.UI.createView({
        id: "toolBar"
    });
    $.__views.header.add($.__views.toolBar);
    $.__views.btnCustomer = Ti.UI.createButton({
        title: "Customer",
        id: "btnCustomer",
        clicked: "true"
    });
    $.__views.toolBar.add($.__views.btnCustomer);
    $.__views.btnServiceOrderNo = Ti.UI.createButton({
        title: "Service Order #",
        id: "btnServiceOrderNo",
        clicked: "false"
    });
    $.__views.toolBar.add($.__views.btnServiceOrderNo);
    $.__views.btnSerialNo = Ti.UI.createButton({
        title: "Serial Number",
        id: "btnSerialNo",
        clicked: "false"
    });
    $.__views.toolBar.add($.__views.btnSerialNo);
    $.__views.btnOtherOpt = Ti.UI.createButton({
        title: "Other Option",
        id: "btnOtherOpt",
        clicked: "false"
    });
    $.__views.toolBar.add($.__views.btnOtherOpt);
    $.__views.bodyView = Ti.UI.createView({
        id: "bodyView"
    });
    $.__views.mainView.add($.__views.bodyView);
    $.__views.edtCustomer = Ti.UI.createTextField({
        id: "edtCustomer"
    });
    $.__views.bodyView.add($.__views.edtCustomer);
    $.__views.edtCity = Ti.UI.createTextField({
        id: "edtCity"
    });
    $.__views.bodyView.add($.__views.edtCity);
    $.__views.btnInstalledBase = Ti.UI.createButton({
        title: "Find Installed Base",
        id: "btnInstalledBase"
    });
    $.__views.bodyView.add($.__views.btnInstalledBase);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.header.height = "40dp";
    $.bodyView.top = "40dp";
    $.toolBar.left = .1 * config.platformWidth;
    $.toolBar.width = .8 * config.platformWidth;
    $.toolBar.height = "30dp";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;