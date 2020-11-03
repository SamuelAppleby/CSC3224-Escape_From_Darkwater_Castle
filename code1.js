gdjs.TitleCode = {};
gdjs.TitleCode.GDTitleObjects1= [];
gdjs.TitleCode.GDTitleObjects2= [];
gdjs.TitleCode.GDPlayObjects1= [];
gdjs.TitleCode.GDPlayObjects2= [];
gdjs.TitleCode.GDOptionsObjects1= [];
gdjs.TitleCode.GDOptionsObjects2= [];
gdjs.TitleCode.GDExitObjects1= [];
gdjs.TitleCode.GDExitObjects2= [];
gdjs.TitleCode.GDBackgroundObjects1= [];
gdjs.TitleCode.GDBackgroundObjects2= [];

gdjs.TitleCode.conditionTrue_0 = {val:false};
gdjs.TitleCode.condition0IsTrue_0 = {val:false};
gdjs.TitleCode.condition1IsTrue_0 = {val:false};
gdjs.TitleCode.conditionTrue_1 = {val:false};
gdjs.TitleCode.condition0IsTrue_1 = {val:false};
gdjs.TitleCode.condition1IsTrue_1 = {val:false};


gdjs.TitleCode.eventsList0x6aa6ac = function(runtimeScene) {

{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition0IsTrue_0;
gdjs.TitleCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8952004);
}
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.TitleCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));
{for(var i = 0, len = gdjs.TitleCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDTitleObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound\\TitleMusic.wav", 1, true, 100, 1);
}}

}


}; //End of gdjs.TitleCode.eventsList0x6aa6ac
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.TitleCode.GDPlayObjects1});gdjs.TitleCode.eventsList0x88a394 = function(runtimeScene) {

{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 10);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intro", false);
}}

}


}; //End of gdjs.TitleCode.eventsList0x88a394
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDOptionsObjects1Objects = Hashtable.newFrom({"Options": gdjs.TitleCode.GDOptionsObjects1});gdjs.TitleCode.eventsList0x88a7d4 = function(runtimeScene) {

{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Options");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


}; //End of gdjs.TitleCode.eventsList0x88a7d4
gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.TitleCode.GDExitObjects1});gdjs.TitleCode.eventsList0x88ac9c = function(runtimeScene) {

{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.TitleCode.eventsList0x88ac9c
gdjs.TitleCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Escape From Darkwater Castle");
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 50);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(17).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(20).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(21).setNumber(10);
}{runtimeScene.getGame().getVariables().getFromIndex(22).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(23).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(24).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(25).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(26).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(27).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(28).setNumber(0);
}
{ //Subevents
gdjs.TitleCode.eventsList0x6aa6ac(runtimeScene);} //End of subevents
}

}


{


{
gdjs.TitleCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));
gdjs.TitleCode.GDOptionsObjects1.createFrom(runtimeScene.getObjects("Options"));
gdjs.TitleCode.GDPlayObjects1.createFrom(runtimeScene.getObjects("Play"));
{for(var i = 0, len = gdjs.TitleCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDOptionsObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.TitleCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDExitObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.TitleCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDPlayObjects1[i].setColor("255;255;255");
}
}}

}


{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 0.5;
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
gdjs.TitleCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));
gdjs.TitleCode.GDOptionsObjects1.createFrom(runtimeScene.getObjects("Options"));
gdjs.TitleCode.GDPlayObjects1.createFrom(runtimeScene.getObjects("Play"));
gdjs.TitleCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));
{for(var i = 0, len = gdjs.TitleCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDTitleObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.TitleCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDPlayObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.TitleCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDOptionsObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.TitleCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDExitObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{runtimeScene.getVariables().getFromIndex(0).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{

gdjs.TitleCode.GDPlayObjects1.createFrom(runtimeScene.getObjects("Play"));

gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.TitleCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDPlayObjects1[i].setColor("255;241;0");
}
}
{ //Subevents
gdjs.TitleCode.eventsList0x88a394(runtimeScene);} //End of subevents
}

}


{

gdjs.TitleCode.GDOptionsObjects1.createFrom(runtimeScene.getObjects("Options"));

gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDOptionsObjects1Objects, runtimeScene, true, false);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDOptionsObjects1 */
{for(var i = 0, len = gdjs.TitleCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDOptionsObjects1[i].setColor("255;241;0");
}
}
{ //Subevents
gdjs.TitleCode.eventsList0x88a7d4(runtimeScene);} //End of subevents
}

}


{

gdjs.TitleCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));

gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TitleCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.TitleCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.TitleCode.GDExitObjects1[i].setColor("255;241;0");
}
}
{ //Subevents
gdjs.TitleCode.eventsList0x88ac9c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.TitleCode.eventsList0x5b70b8


gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDTitleObjects1.length = 0;
gdjs.TitleCode.GDTitleObjects2.length = 0;
gdjs.TitleCode.GDPlayObjects1.length = 0;
gdjs.TitleCode.GDPlayObjects2.length = 0;
gdjs.TitleCode.GDOptionsObjects1.length = 0;
gdjs.TitleCode.GDOptionsObjects2.length = 0;
gdjs.TitleCode.GDExitObjects1.length = 0;
gdjs.TitleCode.GDExitObjects2.length = 0;
gdjs.TitleCode.GDBackgroundObjects1.length = 0;
gdjs.TitleCode.GDBackgroundObjects2.length = 0;

gdjs.TitleCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
