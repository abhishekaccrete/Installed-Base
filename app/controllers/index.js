$.header.height = '40dp'
$.bodyView.top = '40dp'


$.btnCustomer.addEventListener('click',function(e)
{
	if($.btnCustomer.backgroundImage == config.imgPath+'Button/Button_NavBar_Left1x.png')
	{
		$.btnCustomer.backgroundImage = config.imgPath+'Button/Button_NavBar_Left_Selected1x.png';		
	}
	$.btnServiceOrderNo.backgroundImage = config.imgPath+'Button/Button_NavBar_Middle1x.png';
	$.btnSerialNo.backgroundImage = config.imgPath+'Button/Button_NavBar_Middle1x.png';
	$.btnOtherOpt.backgroundImage = config.imgPath+'Button/Button_NavBar_Right1x.png';
});

$.btnServiceOrderNo.addEventListener('click',function(e)
{																	 
	if($.btnServiceOrderNo.backgroundImage == config.imgPath+'Button/Button_NavBar_Middle1x.png')
	{
		$.btnServiceOrderNo.backgroundImage = config.imgPath+'Button/Button_NavBar_Middle_Selected1x.png';
	}
	$.btnCustomer.backgroundImage = config.imgPath+'Button/Button_NavBar_Left1x.png';
	$.btnSerialNo.backgroundImage = config.imgPath+'Button/Button_NavBar_Middle1x.png';
	$.btnOtherOpt.backgroundImage = config.imgPath+'Button/Button_NavBar_Right1x.png';
});

$.btnSerialNo.addEventListener('click',function(e)
{
	if($.btnSerialNo.backgroundImage == config.imgPath+'Button/Button_NavBar_Middle1x.png')
	{
		$.btnSerialNo.backgroundImage = config.imgPath+'Button/Button_NavBar_Middle_Selected1x.png';
	}
	$.btnCustomer.backgroundImage = config.imgPath+'Button/Button_NavBar_Left1x.png';
	$.btnServiceOrderNo.backgroundImage = config.imgPath+'Button/Button_NavBar_Middle1x.png';
	$.btnOtherOpt.backgroundImage = config.imgPath+'Button/Button_NavBar_Right1x.png';	
});

$.btnOtherOpt.addEventListener('click',function(e)
{	
	if($.btnOtherOpt.backgroundImage == config.imgPath+'Button/Button_NavBar_Right1x.png')
	{
		$.btnOtherOpt.backgroundImage = config.imgPath+'Button/Button_NavBar_Right_Selected1x.png';
	}
	$.btnCustomer.backgroundImage = config.imgPath+'Button/Button_NavBar_Left1x.png';
	$.btnServiceOrderNo.backgroundImage = config.imgPath+'Button/Button_NavBar_Middle1x.png';
	$.btnSerialNo.backgroundImage = config.imgPath+'Button/Button_NavBar_Middle1x.png';
});

$.btnCustomer.width = 0.20*config.platformWidth;
$.btnServiceOrderNo.left = 0.20*config.platformWidth;
$.btnServiceOrderNo.width = 0.20*config.platformWidth;
$.btnSerialNo.left = 0.40*config.platformWidth;
$.btnSerialNo.width = 0.20*config.platformWidth;
$.btnOtherOpt.left = 0.60*config.platformWidth;
$.btnOtherOpt.width = 0.20*config.platformWidth;


$.toolBar.left = 0.10*config.platformWidth;
$.toolBar.width = 0.80*config.platformWidth;
$.toolBar.height = '30dp'


$.index.open();