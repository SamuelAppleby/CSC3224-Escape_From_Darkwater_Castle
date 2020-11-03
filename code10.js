gdjs.EscapeCode = {};
gdjs.EscapeCode.GDPlayerObjects1= [];
gdjs.EscapeCode.GDPlayerObjects2= [];
gdjs.EscapeCode.GDPlayerObjects3= [];
gdjs.EscapeCode.GDNameObjects1= [];
gdjs.EscapeCode.GDNameObjects2= [];
gdjs.EscapeCode.GDNameObjects3= [];
gdjs.EscapeCode.GDCreditsObjects1= [];
gdjs.EscapeCode.GDCreditsObjects2= [];
gdjs.EscapeCode.GDCreditsObjects3= [];
gdjs.EscapeCode.GDPlayerTextObjects1= [];
gdjs.EscapeCode.GDPlayerTextObjects2= [];
gdjs.EscapeCode.GDPlayerTextObjects3= [];
gdjs.EscapeCode.GDCastleObjects1= [];
gdjs.EscapeCode.GDCastleObjects2= [];
gdjs.EscapeCode.GDCastleObjects3= [];
gdjs.EscapeCode.GDRoadObjects1= [];
gdjs.EscapeCode.GDRoadObjects2= [];
gdjs.EscapeCode.GDRoadObjects3= [];

gdjs.EscapeCode.conditionTrue_0 = {val:false};
gdjs.EscapeCode.condition0IsTrue_0 = {val:false};
gdjs.EscapeCode.condition1IsTrue_0 = {val:false};
gdjs.EscapeCode.condition2IsTrue_0 = {val:false};
gdjs.EscapeCode.conditionTrue_1 = {val:false};
gdjs.EscapeCode.condition0IsTrue_1 = {val:false};
gdjs.EscapeCode.condition1IsTrue_1 = {val:false};
gdjs.EscapeCode.condition2IsTrue_1 = {val:false};


gdjs.EscapeCode.eventsList0x98eb5c = function(runtimeScene) {

{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
gdjs.EscapeCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.EscapeCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.EscapeCode.GDPlayerObjects2[i].setAnimationName("KnightFrontIdle");
}
}}

}


{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
gdjs.EscapeCode.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.EscapeCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.EscapeCode.GDPlayerObjects2[i].setAnimationName("WizardFrontIdle");
}
}}

}


{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
gdjs.EscapeCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.EscapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDPlayerObjects1[i].setAnimationName("ArcherFrontIdle");
}
}}

}


}; //End of gdjs.EscapeCode.eventsList0x98eb5c
gdjs.EscapeCode.eventsList0x132ba5c = function(runtimeScene) {

{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
gdjs.EscapeCode.GDPlayerObjects2.createFrom(gdjs.EscapeCode.GDPlayerObjects1);

{for(var i = 0, len = gdjs.EscapeCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.EscapeCode.GDPlayerObjects2[i].setAnimationName("KnightFrontWalk");
}
}}

}


{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
gdjs.EscapeCode.GDPlayerObjects2.createFrom(gdjs.EscapeCode.GDPlayerObjects1);

{for(var i = 0, len = gdjs.EscapeCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.EscapeCode.GDPlayerObjects2[i].setAnimationName("WizardFrontWalk");
}
}}

}


{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.EscapeCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.EscapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDPlayerObjects1[i].setAnimationName("ArcherFrontWalk");
}
}}

}


}; //End of gdjs.EscapeCode.eventsList0x132ba5c
gdjs.EscapeCode.eventsList0x132cedc = function(runtimeScene) {

{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
{gdjs.EscapeCode.conditionTrue_1 = gdjs.EscapeCode.condition0IsTrue_0;
gdjs.EscapeCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20108124);
}
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


}; //End of gdjs.EscapeCode.eventsList0x132cedc
gdjs.EscapeCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 20, "SpeechTimer"));
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
gdjs.EscapeCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.EscapeCode.GDPlayerObjects1.length !== 0 ? gdjs.EscapeCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{


{
gdjs.EscapeCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.EscapeCode.GDPlayerTextObjects1.createFrom(runtimeScene.getObjects("PlayerText"));
{for(var i = 0, len = gdjs.EscapeCode.GDPlayerTextObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDPlayerTextObjects1[i].setPosition((( gdjs.EscapeCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EscapeCode.GDPlayerObjects1[0].getPointX("")) + 60,(( gdjs.EscapeCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.EscapeCode.GDPlayerObjects1[0].getPointY("")));
}
}}

}


{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
gdjs.EscapeCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
gdjs.EscapeCode.GDNameObjects1.createFrom(runtimeScene.getObjects("Name"));
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Escape From Darkwater Castle");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "EscapeMusic.wav", 1, true, 100, 1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SpeechTimer");
}{for(var i = 0, len = gdjs.EscapeCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDNameObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EscapeCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDCreditsObjects1[i].setOpacity(0);
}
}
{ //Subevents
gdjs.EscapeCode.eventsList0x98eb5c(runtimeScene);} //End of subevents
}

}


{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = !(gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "SpeechTimer"));
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
gdjs.EscapeCode.GDPlayerTextObjects1.createFrom(runtimeScene.getObjects("PlayerText"));
{for(var i = 0, len = gdjs.EscapeCode.GDPlayerTextObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDPlayerTextObjects1[i].setString("I'm finally free, now it's time to find the others");
}
}}

}


{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "SpeechTimer");
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
gdjs.EscapeCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.EscapeCode.GDPlayerTextObjects1.createFrom(runtimeScene.getObjects("PlayerText"));
{for(var i = 0, len = gdjs.EscapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.EscapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(30);
}
}{for(var i = 0, len = gdjs.EscapeCode.GDPlayerTextObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDPlayerTextObjects1[i].setString("Maybe they'll know what happened here");
}
}
{ //Subevents
gdjs.EscapeCode.eventsList0x132ba5c(runtimeScene);} //End of subevents
}

}


{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "SpeechTimer");
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
gdjs.EscapeCode.GDPlayerTextObjects1.createFrom(runtimeScene.getObjects("PlayerText"));
{for(var i = 0, len = gdjs.EscapeCode.GDPlayerTextObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDPlayerTextObjects1[i].setString("I hope they're still alive");
}
}}

}


{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 15, "SpeechTimer");
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
gdjs.EscapeCode.GDPlayerTextObjects1.createFrom(runtimeScene.getObjects("PlayerText"));
{for(var i = 0, len = gdjs.EscapeCode.GDPlayerTextObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDPlayerTextObjects1[i].setString("First though I need to find a tavern, God knows I need a drink");
}
}}

}


{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 20, "SpeechTimer");
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
gdjs.EscapeCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.EscapeCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(100);
}
}}

}


{

gdjs.EscapeCode.GDRoadObjects1.createFrom(runtimeScene.getObjects("Road"));

gdjs.EscapeCode.condition0IsTrue_0.val = false;
gdjs.EscapeCode.condition1IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 25, "SpeechTimer");
}if ( gdjs.EscapeCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EscapeCode.GDRoadObjects1.length;i<l;++i) {
    if ( gdjs.EscapeCode.GDRoadObjects1[i].getOpacity() > 0 ) {
        gdjs.EscapeCode.condition1IsTrue_0.val = true;
        gdjs.EscapeCode.GDRoadObjects1[k] = gdjs.EscapeCode.GDRoadObjects1[i];
        ++k;
    }
}
gdjs.EscapeCode.GDRoadObjects1.length = k;}}
if (gdjs.EscapeCode.condition1IsTrue_0.val) {
gdjs.EscapeCode.GDCastleObjects1.createFrom(runtimeScene.getObjects("Castle"));
/* Reuse gdjs.EscapeCode.GDRoadObjects1 */
{runtimeScene.getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}{for(var i = 0, len = gdjs.EscapeCode.GDCastleObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDCastleObjects1[i].setOpacity(Math.cos(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 0.5) * 255);
}
}{for(var i = 0, len = gdjs.EscapeCode.GDRoadObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDRoadObjects1[i].setOpacity(Math.cos(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 0.5) * 255);
}
}}

}


{

gdjs.EscapeCode.GDNameObjects1.createFrom(runtimeScene.getObjects("Name"));

gdjs.EscapeCode.condition0IsTrue_0.val = false;
gdjs.EscapeCode.condition1IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 30, "SpeechTimer");
}if ( gdjs.EscapeCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EscapeCode.GDNameObjects1.length;i<l;++i) {
    if ( gdjs.EscapeCode.GDNameObjects1[i].getOpacity() < 250 ) {
        gdjs.EscapeCode.condition1IsTrue_0.val = true;
        gdjs.EscapeCode.GDNameObjects1[k] = gdjs.EscapeCode.GDNameObjects1[i];
        ++k;
    }
}
gdjs.EscapeCode.GDNameObjects1.length = k;}}
if (gdjs.EscapeCode.condition1IsTrue_0.val) {
gdjs.EscapeCode.GDCreditsObjects1.createFrom(runtimeScene.getObjects("Credits"));
/* Reuse gdjs.EscapeCode.GDNameObjects1 */
{runtimeScene.getVariables().getFromIndex(0).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}{for(var i = 0, len = gdjs.EscapeCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDNameObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))) * 255);
}
}{for(var i = 0, len = gdjs.EscapeCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.EscapeCode.GDCreditsObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))) * 255);
}
}
{ //Subevents
gdjs.EscapeCode.eventsList0x132cedc(runtimeScene);} //End of subevents
}

}


{


gdjs.EscapeCode.condition0IsTrue_0.val = false;
{
gdjs.EscapeCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 35, "SpeechTimer");
}if (gdjs.EscapeCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", true);
}}

}


}; //End of gdjs.EscapeCode.eventsList0x5b70b8


gdjs.EscapeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EscapeCode.GDPlayerObjects1.length = 0;
gdjs.EscapeCode.GDPlayerObjects2.length = 0;
gdjs.EscapeCode.GDPlayerObjects3.length = 0;
gdjs.EscapeCode.GDNameObjects1.length = 0;
gdjs.EscapeCode.GDNameObjects2.length = 0;
gdjs.EscapeCode.GDNameObjects3.length = 0;
gdjs.EscapeCode.GDCreditsObjects1.length = 0;
gdjs.EscapeCode.GDCreditsObjects2.length = 0;
gdjs.EscapeCode.GDCreditsObjects3.length = 0;
gdjs.EscapeCode.GDPlayerTextObjects1.length = 0;
gdjs.EscapeCode.GDPlayerTextObjects2.length = 0;
gdjs.EscapeCode.GDPlayerTextObjects3.length = 0;
gdjs.EscapeCode.GDCastleObjects1.length = 0;
gdjs.EscapeCode.GDCastleObjects2.length = 0;
gdjs.EscapeCode.GDCastleObjects3.length = 0;
gdjs.EscapeCode.GDRoadObjects1.length = 0;
gdjs.EscapeCode.GDRoadObjects2.length = 0;
gdjs.EscapeCode.GDRoadObjects3.length = 0;

gdjs.EscapeCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['EscapeCode'] = gdjs.EscapeCode;
