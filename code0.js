gdjs.SplashScreenCode = {};
gdjs.SplashScreenCode.GDLine1Objects1= [];
gdjs.SplashScreenCode.GDLine1Objects2= [];
gdjs.SplashScreenCode.GDLine2Objects1= [];
gdjs.SplashScreenCode.GDLine2Objects2= [];
gdjs.SplashScreenCode.GDLine3Objects1= [];
gdjs.SplashScreenCode.GDLine3Objects2= [];
gdjs.SplashScreenCode.GDLine4Objects1= [];
gdjs.SplashScreenCode.GDLine4Objects2= [];

gdjs.SplashScreenCode.conditionTrue_0 = {val:false};
gdjs.SplashScreenCode.condition0IsTrue_0 = {val:false};
gdjs.SplashScreenCode.condition1IsTrue_0 = {val:false};
gdjs.SplashScreenCode.condition2IsTrue_0 = {val:false};


gdjs.SplashScreenCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
gdjs.SplashScreenCode.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
gdjs.SplashScreenCode.GDLine2Objects1.createFrom(runtimeScene.getObjects("Line2"));
gdjs.SplashScreenCode.GDLine3Objects1.createFrom(runtimeScene.getObjects("Line3"));
gdjs.SplashScreenCode.GDLine4Objects1.createFrom(runtimeScene.getObjects("Line4"));
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Escape From Darkwater Castle");
}{for(var i = 0, len = gdjs.SplashScreenCode.GDLine1Objects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDLine1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.SplashScreenCode.GDLine2Objects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDLine2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.SplashScreenCode.GDLine3Objects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDLine3Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.SplashScreenCode.GDLine4Objects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDLine4Objects1[i].setOpacity(0);
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.75, "", 0);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound\\Sewer.wav", 1, false, 100, 1);
}}

}


{

gdjs.SplashScreenCode.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashScreenCode.GDLine1Objects1.length;i<l;++i) {
    if ( gdjs.SplashScreenCode.GDLine1Objects1[i].getVariableNumber(gdjs.SplashScreenCode.GDLine1Objects1[i].getVariables().getFromIndex(0)) < 1 ) {
        gdjs.SplashScreenCode.condition0IsTrue_0.val = true;
        gdjs.SplashScreenCode.GDLine1Objects1[k] = gdjs.SplashScreenCode.GDLine1Objects1[i];
        ++k;
    }
}
gdjs.SplashScreenCode.GDLine1Objects1.length = k;}if (gdjs.SplashScreenCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SplashScreenCode.GDLine1Objects1 */
{for(var i = 0, len = gdjs.SplashScreenCode.GDLine1Objects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDLine1Objects1[i].returnVariable(gdjs.SplashScreenCode.GDLine1Objects1[i].getVariables().getFromIndex(0)).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.SplashScreenCode.GDLine1Objects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDLine1Objects1[i].setOpacity((gdjs.RuntimeObject.getVariableNumber(gdjs.SplashScreenCode.GDLine1Objects1[i].getVariables().getFromIndex(0))) * 3.14159 * 100);
}
}}

}


{

gdjs.SplashScreenCode.GDLine2Objects1.createFrom(runtimeScene.getObjects("Line2"));

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
gdjs.SplashScreenCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashScreenCode.GDLine2Objects1.length;i<l;++i) {
    if ( gdjs.SplashScreenCode.GDLine2Objects1[i].getVariableNumber(gdjs.SplashScreenCode.GDLine2Objects1[i].getVariables().getFromIndex(0)) < 1 ) {
        gdjs.SplashScreenCode.condition0IsTrue_0.val = true;
        gdjs.SplashScreenCode.GDLine2Objects1[k] = gdjs.SplashScreenCode.GDLine2Objects1[i];
        ++k;
    }
}
gdjs.SplashScreenCode.GDLine2Objects1.length = k;}if ( gdjs.SplashScreenCode.condition0IsTrue_0.val ) {
{
gdjs.SplashScreenCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "Timer");
}}
if (gdjs.SplashScreenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SplashScreenCode.GDLine2Objects1 */
{for(var i = 0, len = gdjs.SplashScreenCode.GDLine2Objects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDLine2Objects1[i].returnVariable(gdjs.SplashScreenCode.GDLine2Objects1[i].getVariables().getFromIndex(0)).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.SplashScreenCode.GDLine2Objects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDLine2Objects1[i].setOpacity((gdjs.RuntimeObject.getVariableNumber(gdjs.SplashScreenCode.GDLine2Objects1[i].getVariables().getFromIndex(0))) * 3.14159 * 100);
}
}}

}


{

gdjs.SplashScreenCode.GDLine3Objects1.createFrom(runtimeScene.getObjects("Line3"));

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
gdjs.SplashScreenCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashScreenCode.GDLine3Objects1.length;i<l;++i) {
    if ( gdjs.SplashScreenCode.GDLine3Objects1[i].getVariableNumber(gdjs.SplashScreenCode.GDLine3Objects1[i].getVariables().getFromIndex(0)) < 1 ) {
        gdjs.SplashScreenCode.condition0IsTrue_0.val = true;
        gdjs.SplashScreenCode.GDLine3Objects1[k] = gdjs.SplashScreenCode.GDLine3Objects1[i];
        ++k;
    }
}
gdjs.SplashScreenCode.GDLine3Objects1.length = k;}if ( gdjs.SplashScreenCode.condition0IsTrue_0.val ) {
{
gdjs.SplashScreenCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "Timer");
}}
if (gdjs.SplashScreenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SplashScreenCode.GDLine3Objects1 */
{for(var i = 0, len = gdjs.SplashScreenCode.GDLine3Objects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDLine3Objects1[i].returnVariable(gdjs.SplashScreenCode.GDLine3Objects1[i].getVariables().getFromIndex(0)).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.SplashScreenCode.GDLine3Objects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDLine3Objects1[i].setOpacity((gdjs.RuntimeObject.getVariableNumber(gdjs.SplashScreenCode.GDLine3Objects1[i].getVariables().getFromIndex(0))) * 3.14159 * 100);
}
}}

}


{

gdjs.SplashScreenCode.GDLine4Objects1.createFrom(runtimeScene.getObjects("Line4"));

gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
gdjs.SplashScreenCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SplashScreenCode.GDLine4Objects1.length;i<l;++i) {
    if ( gdjs.SplashScreenCode.GDLine4Objects1[i].getVariableNumber(gdjs.SplashScreenCode.GDLine4Objects1[i].getVariables().getFromIndex(0)) < 1 ) {
        gdjs.SplashScreenCode.condition0IsTrue_0.val = true;
        gdjs.SplashScreenCode.GDLine4Objects1[k] = gdjs.SplashScreenCode.GDLine4Objects1[i];
        ++k;
    }
}
gdjs.SplashScreenCode.GDLine4Objects1.length = k;}if ( gdjs.SplashScreenCode.condition0IsTrue_0.val ) {
{
gdjs.SplashScreenCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 15, "Timer");
}}
if (gdjs.SplashScreenCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SplashScreenCode.GDLine4Objects1 */
{for(var i = 0, len = gdjs.SplashScreenCode.GDLine4Objects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDLine4Objects1[i].returnVariable(gdjs.SplashScreenCode.GDLine4Objects1[i].getVariables().getFromIndex(0)).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.SplashScreenCode.GDLine4Objects1.length ;i < len;++i) {
    gdjs.SplashScreenCode.GDLine4Objects1[i].setOpacity((gdjs.RuntimeObject.getVariableNumber(gdjs.SplashScreenCode.GDLine4Objects1[i].getVariables().getFromIndex(0))) * 3.14159 * 100);
}
}}

}


{


gdjs.SplashScreenCode.condition0IsTrue_0.val = false;
gdjs.SplashScreenCode.condition1IsTrue_0.val = false;
{
gdjs.SplashScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 18, "Timer");
}if ( gdjs.SplashScreenCode.condition0IsTrue_0.val ) {
{
gdjs.SplashScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}}
if (gdjs.SplashScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title", false);
}{gdjs.evtTools.sound.pauseSoundOnChannel(runtimeScene, 1);
}}

}


}; //End of gdjs.SplashScreenCode.eventsList0x5b70b8


gdjs.SplashScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashScreenCode.GDLine1Objects1.length = 0;
gdjs.SplashScreenCode.GDLine1Objects2.length = 0;
gdjs.SplashScreenCode.GDLine2Objects1.length = 0;
gdjs.SplashScreenCode.GDLine2Objects2.length = 0;
gdjs.SplashScreenCode.GDLine3Objects1.length = 0;
gdjs.SplashScreenCode.GDLine3Objects2.length = 0;
gdjs.SplashScreenCode.GDLine4Objects1.length = 0;
gdjs.SplashScreenCode.GDLine4Objects2.length = 0;

gdjs.SplashScreenCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['SplashScreenCode'] = gdjs.SplashScreenCode;
