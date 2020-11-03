gdjs.RockFallCode = {};
gdjs.RockFallCode.GDLine1Objects1= [];
gdjs.RockFallCode.GDLine1Objects2= [];

gdjs.RockFallCode.conditionTrue_0 = {val:false};
gdjs.RockFallCode.condition0IsTrue_0 = {val:false};
gdjs.RockFallCode.condition1IsTrue_0 = {val:false};
gdjs.RockFallCode.condition2IsTrue_0 = {val:false};
gdjs.RockFallCode.conditionTrue_1 = {val:false};
gdjs.RockFallCode.condition0IsTrue_1 = {val:false};
gdjs.RockFallCode.condition1IsTrue_1 = {val:false};
gdjs.RockFallCode.condition2IsTrue_1 = {val:false};


gdjs.RockFallCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.RockFallCode.condition0IsTrue_0.val = false;
gdjs.RockFallCode.condition1IsTrue_0.val = false;
{
gdjs.RockFallCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.RockFallCode.condition0IsTrue_0.val ) {
{
{gdjs.RockFallCode.conditionTrue_1 = gdjs.RockFallCode.condition1IsTrue_0;
gdjs.RockFallCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(11489108);
}
}}
if (gdjs.RockFallCode.condition1IsTrue_0.val) {
gdjs.RockFallCode.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Escape From Darkwater Castle");
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.75, "", 0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Timer");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Stairs.wav", 2, true, 100, 1);
}{for(var i = 0, len = gdjs.RockFallCode.GDLine1Objects1.length ;i < len;++i) {
    gdjs.RockFallCode.GDLine1Objects1[i].setOpacity(0);
}
}}

}


{


gdjs.RockFallCode.condition0IsTrue_0.val = false;
gdjs.RockFallCode.condition1IsTrue_0.val = false;
{
gdjs.RockFallCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "Timer");
}if ( gdjs.RockFallCode.condition0IsTrue_0.val ) {
{
{gdjs.RockFallCode.conditionTrue_1 = gdjs.RockFallCode.condition1IsTrue_0;
gdjs.RockFallCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19909972);
}
}}
if (gdjs.RockFallCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Crash.wav", 1, false, 100, 1);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}}

}


{


gdjs.RockFallCode.condition0IsTrue_0.val = false;
gdjs.RockFallCode.condition1IsTrue_0.val = false;
{
gdjs.RockFallCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 7, "Timer");
}if ( gdjs.RockFallCode.condition0IsTrue_0.val ) {
{
{gdjs.RockFallCode.conditionTrue_1 = gdjs.RockFallCode.condition1IsTrue_0;
gdjs.RockFallCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19910516);
}
}}
if (gdjs.RockFallCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "FarAwayDragon.wav", 1, false, 100, 1);
}}

}


{

gdjs.RockFallCode.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));

gdjs.RockFallCode.condition0IsTrue_0.val = false;
gdjs.RockFallCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.RockFallCode.GDLine1Objects1.length;i<l;++i) {
    if ( gdjs.RockFallCode.GDLine1Objects1[i].getVariableNumber(gdjs.RockFallCode.GDLine1Objects1[i].getVariables().getFromIndex(0)) < 1 ) {
        gdjs.RockFallCode.condition0IsTrue_0.val = true;
        gdjs.RockFallCode.GDLine1Objects1[k] = gdjs.RockFallCode.GDLine1Objects1[i];
        ++k;
    }
}
gdjs.RockFallCode.GDLine1Objects1.length = k;}if ( gdjs.RockFallCode.condition0IsTrue_0.val ) {
{
gdjs.RockFallCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 12, "Timer");
}}
if (gdjs.RockFallCode.condition1IsTrue_0.val) {
/* Reuse gdjs.RockFallCode.GDLine1Objects1 */
{for(var i = 0, len = gdjs.RockFallCode.GDLine1Objects1.length ;i < len;++i) {
    gdjs.RockFallCode.GDLine1Objects1[i].returnVariable(gdjs.RockFallCode.GDLine1Objects1[i].getVariables().getFromIndex(0)).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.RockFallCode.GDLine1Objects1.length ;i < len;++i) {
    gdjs.RockFallCode.GDLine1Objects1[i].setOpacity(Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.RockFallCode.GDLine1Objects1[i].getVariables().getFromIndex(0))) * 3.14159) * 200);
}
}}

}


{


gdjs.RockFallCode.condition0IsTrue_0.val = false;
gdjs.RockFallCode.condition1IsTrue_0.val = false;
{
gdjs.RockFallCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 22, "Timer");
}if ( gdjs.RockFallCode.condition0IsTrue_0.val ) {
{
{gdjs.RockFallCode.conditionTrue_1 = gdjs.RockFallCode.condition1IsTrue_0;
gdjs.RockFallCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19912084);
}
}}
if (gdjs.RockFallCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.RockFallCode.eventsList0x5b70b8


gdjs.RockFallCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RockFallCode.GDLine1Objects1.length = 0;
gdjs.RockFallCode.GDLine1Objects2.length = 0;

gdjs.RockFallCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['RockFallCode'] = gdjs.RockFallCode;
