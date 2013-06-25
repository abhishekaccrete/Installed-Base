config = {
	platformWidth: Ti.Platform.displayCaps.platformWidth,
	platformHeight: Ti.Platform.displayCaps.platformHeight,
	osname: Ti.Platform.osname,
	imgPath: '/images/'
};

$.header.height = '40dp'
$.bodyView.top = '40dp'

$.toolBar.left = 0.10*config.platformWidth;
$.toolBar.width = 0.80*config.platformWidth;
$.toolBar.height = '30dp'
/*
 * btnCustomer
 * btnServiceOrderNo
 * btnSerialNo
 * btnOtherOpt
 */

if($.btnCustomer.clicked)
{
	if($.btnCustomer.backgroundImage == config.imgPath+'Button/Button_NavBar_Left@1x.png')
	{
		$.btnCustomer.backgroundImage = config.imgPath+'Button/Button_NavBar_Left@1x.png'
	}
	//$.btnCustomer.setBackgroundImage(config.imgPath+'')
}

$.btnCustomer.addEventListener('click',function(e)
{
	
});

$.btnServiceOrderNo.addEventListener('click',function(e)
{
	
});

$.btnSerialNo.addEventListener('click',function(e)
{
	
});

$.btnOtherOpt.addEventListener('click',function(e)
{
	
});



$.btnCustomer.width = 0.20*config.platformWidth;

$.btnServiceOrderNo.left = 0.20*config.platformWidth;
$.btnServiceOrderNo.width = 0.20*config.platformWidth;

$.btnSerialNo.left = 0.40*config.platformWidth;
$.btnSerialNo.width = 0.20*config.platformWidth;

$.btnOtherOpt.left = 0.60*config.platformWidth;
$.btnOtherOpt.width = 0.20*config.platformWidth;

$.index.open();