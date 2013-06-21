config = {
	platformWidth: Ti.Platform.displayCaps.platformWidth,
	platformHeight: Ti.Platform.displayCaps.platformHeight,
	osname: Ti.Platform.osname
};

$.header.height = 0.06*config.platformHeight;
$.bodyView.top = 0.06*config.platformHeight;

$.toolBar.left = 0.10*config.platformWidth;
$.toolBar.width = 0.80*config.platformWidth;
$.toolBar.height = 0.05*config.platformHeight;

$.btnCustomer.width = 0.20*config.platformWidth;

$.btnServiceOrderNo.left = 0.20*config.platformWidth;
$.btnServiceOrderNo.width = 0.20*config.platformWidth;

$.btnSerialNo.left = 0.40*config.platformWidth;
$.btnSerialNo.width = 0.20*config.platformWidth;

$.btnOtherOpt.left = 0.60*config.platformWidth;
$.btnOtherOpt.width = 0.20*config.platformWidth;

$.index.open();