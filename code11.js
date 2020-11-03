gdjs.GameOverCode = {};
gdjs.GameOverCode.GDEndObjects1= [];
gdjs.GameOverCode.GDEndObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.conditionTrue_1 = {val:false};
gdjs.GameOverCode.condition0IsTrue_1 = {val:false};
gdjs.GameOverCode.condition1IsTrue_1 = {val:false};


gdjs.GameOverCode.eventsList0x98ed4c = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
{gdjs.GameOverCode.conditionTrue_1 = gdjs.GameOverCode.condition0IsTrue_0;
gdjs.GameOverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20121396);
}
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDEndObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDEndObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDEndObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Sound\\GameOver.mp3", false, 100, 1);
}}

}


}; //End of gdjs.GameOverCode.eventsList0x98ed4c
gdjs.GameOverCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
gdjs.GameOverCode.GDEndObjects1.createFrom(runtimeScene.getObjects("End"));
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Escape From Darkwater Castle");
}{for(var i = 0, len = gdjs.GameOverCode.GDEndObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDEndObjects1[i].setString("GAME OVER");
}
}
{ //Subevents
gdjs.GameOverCode.eventsList0x98ed4c(runtimeScene);} //End of subevents
}

}


{

gdjs.GameOverCode.GDEndObjects1.createFrom(runtimeScene.getObjects("End"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameOverCode.GDEndObjects1.length;i<l;++i) {
    if ( gdjs.GameOverCode.GDEndObjects1[i].getVariableNumber(gdjs.GameOverCode.GDEndObjects1[i].getVariables().getFromIndex(0)) < 1 ) {
        gdjs.GameOverCode.condition0IsTrue_0.val = true;
        gdjs.GameOverCode.GDEndObjects1[k] = gdjs.GameOverCode.GDEndObjects1[i];
        ++k;
    }
}
gdjs.GameOverCode.GDEndObjects1.length = k;}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameOverCode.GDEndObjects1 */
{for(var i = 0, len = gdjs.GameOverCode.GDEndObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDEndObjects1[i].returnVariable(gdjs.GameOverCode.GDEndObjects1[i].getVariables().getFromIndex(0)).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.GameOverCode.GDEndObjects1.length ;i < len;++i) {
    gdjs.GameOverCode.GDEndObjects1[i].setOpacity(Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.GameOverCode.GDEndObjects1[i].getVariables().getFromIndex(0))) * 3.14159) * 100);
}
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "Timer");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dungeon", true);
}}

}


}; //End of gdjs.GameOverCode.eventsList0x5b70b8


gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameOverCode.GDEndObjects1.length = 0;
gdjs.GameOverCode.GDEndObjects2.length = 0;

gdjs.GameOverCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['GameOverCode'] = gdjs.GameOverCode;
