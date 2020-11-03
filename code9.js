gdjs.PauseCode = {};
gdjs.PauseCode.GDTitleObjects1= [];
gdjs.PauseCode.GDTitleObjects2= [];
gdjs.PauseCode.GDResumeObjects1= [];
gdjs.PauseCode.GDResumeObjects2= [];
gdjs.PauseCode.GDOptionsObjects1= [];
gdjs.PauseCode.GDOptionsObjects2= [];
gdjs.PauseCode.GDExitObjects1= [];
gdjs.PauseCode.GDExitObjects2= [];

gdjs.PauseCode.conditionTrue_0 = {val:false};
gdjs.PauseCode.condition0IsTrue_0 = {val:false};
gdjs.PauseCode.condition1IsTrue_0 = {val:false};
gdjs.PauseCode.condition2IsTrue_0 = {val:false};
gdjs.PauseCode.conditionTrue_1 = {val:false};
gdjs.PauseCode.condition0IsTrue_1 = {val:false};
gdjs.PauseCode.condition1IsTrue_1 = {val:false};
gdjs.PauseCode.condition2IsTrue_1 = {val:false};


gdjs.PauseCode.eventsList0x98ed4c = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
{gdjs.PauseCode.conditionTrue_1 = gdjs.PauseCode.condition0IsTrue_0;
gdjs.PauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20085292);
}
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
gdjs.PauseCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));
{for(var i = 0, len = gdjs.PauseCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDTitleObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound\\PauseMusic.wav", 10, true, 100, 1);
}}

}


}; //End of gdjs.PauseCode.eventsList0x98ed4c
gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDResumeObjects1Objects = Hashtable.newFrom({"Resume": gdjs.PauseCode.GDResumeObjects1});gdjs.PauseCode.eventsList0x1328304 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 10);
}}

}


}; //End of gdjs.PauseCode.eventsList0x1328304
gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.PauseCode.GDExitObjects1});gdjs.PauseCode.eventsList0x1328724 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}}

}


}; //End of gdjs.PauseCode.eventsList0x1328724
gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDOptionsObjects1Objects = Hashtable.newFrom({"Options": gdjs.PauseCode.GDOptionsObjects1});gdjs.PauseCode.eventsList0x1328b2c = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Options");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


}; //End of gdjs.PauseCode.eventsList0x1328b2c
gdjs.PauseCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Escape From Darkwater Castle");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ReturnTimer");
}
{ //Subevents
gdjs.PauseCode.eventsList0x98ed4c(runtimeScene);} //End of subevents
}

}


{


{
gdjs.PauseCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));
gdjs.PauseCode.GDOptionsObjects1.createFrom(runtimeScene.getObjects("Options"));
gdjs.PauseCode.GDResumeObjects1.createFrom(runtimeScene.getObjects("Resume"));
{for(var i = 0, len = gdjs.PauseCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDExitObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.PauseCode.GDResumeObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDResumeObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.PauseCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDOptionsObjects1[i].setColor("255;255;255");
}
}}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 0.5;
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
gdjs.PauseCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));
gdjs.PauseCode.GDOptionsObjects1.createFrom(runtimeScene.getObjects("Options"));
gdjs.PauseCode.GDResumeObjects1.createFrom(runtimeScene.getObjects("Resume"));
gdjs.PauseCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));
{for(var i = 0, len = gdjs.PauseCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDTitleObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.PauseCode.GDResumeObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDResumeObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.PauseCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDExitObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{runtimeScene.getVariables().getFromIndex(0).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}{for(var i = 0, len = gdjs.PauseCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDOptionsObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}}

}


{

gdjs.PauseCode.GDResumeObjects1.createFrom(runtimeScene.getObjects("Resume"));

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDResumeObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDResumeObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDResumeObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDResumeObjects1[i].setColor("255;241;0");
}
}
{ //Subevents
gdjs.PauseCode.eventsList0x1328304(runtimeScene);} //End of subevents
}

}


{

gdjs.PauseCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDExitObjects1[i].setColor("255;241;0");
}
}
{ //Subevents
gdjs.PauseCode.eventsList0x1328724(runtimeScene);} //End of subevents
}

}


{

gdjs.PauseCode.GDOptionsObjects1.createFrom(runtimeScene.getObjects("Options"));

gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PauseCode.mapOfGDgdjs_46PauseCode_46GDOptionsObjects1Objects, runtimeScene, true, false);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PauseCode.GDOptionsObjects1 */
{for(var i = 0, len = gdjs.PauseCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.PauseCode.GDOptionsObjects1[i].setColor("255;241;0");
}
}
{ //Subevents
gdjs.PauseCode.eventsList0x1328b2c(runtimeScene);} //End of subevents
}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
}if (gdjs.PauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ReturnTimer");
}}

}


{


gdjs.PauseCode.condition0IsTrue_0.val = false;
gdjs.PauseCode.condition1IsTrue_0.val = false;
{
gdjs.PauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if ( gdjs.PauseCode.condition0IsTrue_0.val ) {
{
gdjs.PauseCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "ReturnTimer");
}}
if (gdjs.PauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 10);
}}

}


}; //End of gdjs.PauseCode.eventsList0x5b70b8


gdjs.PauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PauseCode.GDTitleObjects1.length = 0;
gdjs.PauseCode.GDTitleObjects2.length = 0;
gdjs.PauseCode.GDResumeObjects1.length = 0;
gdjs.PauseCode.GDResumeObjects2.length = 0;
gdjs.PauseCode.GDOptionsObjects1.length = 0;
gdjs.PauseCode.GDOptionsObjects2.length = 0;
gdjs.PauseCode.GDExitObjects1.length = 0;
gdjs.PauseCode.GDExitObjects2.length = 0;

gdjs.PauseCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['PauseCode'] = gdjs.PauseCode;
