gdjs.IntroCode = {};
gdjs.IntroCode.GDLine1Objects1= [];
gdjs.IntroCode.GDLine1Objects2= [];
gdjs.IntroCode.GDLine2Objects1= [];
gdjs.IntroCode.GDLine2Objects2= [];
gdjs.IntroCode.GDLine3Objects1= [];
gdjs.IntroCode.GDLine3Objects2= [];
gdjs.IntroCode.GDLine4Objects1= [];
gdjs.IntroCode.GDLine4Objects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};
gdjs.IntroCode.conditionTrue_1 = {val:false};
gdjs.IntroCode.condition0IsTrue_1 = {val:false};
gdjs.IntroCode.condition1IsTrue_1 = {val:false};
gdjs.IntroCode.condition2IsTrue_1 = {val:false};


gdjs.IntroCode.eventsList0x88f164 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
{gdjs.IntroCode.conditionTrue_1 = gdjs.IntroCode.condition0IsTrue_0;
gdjs.IntroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8975652);
}
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound\\Gates.wav", 2, false, 100, 1);
}}

}


}; //End of gdjs.IntroCode.eventsList0x88f164
gdjs.IntroCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
gdjs.IntroCode.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));
gdjs.IntroCode.GDLine2Objects1.createFrom(runtimeScene.getObjects("Line2"));
gdjs.IntroCode.GDLine3Objects1.createFrom(runtimeScene.getObjects("Line3"));
gdjs.IntroCode.GDLine4Objects1.createFrom(runtimeScene.getObjects("Line4"));
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Escape From Darkwater Castle");
}{for(var i = 0, len = gdjs.IntroCode.GDLine1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLine1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDLine2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLine2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDLine3Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLine3Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDLine4Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLine4Objects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound\\Footsteps.wav", 1, false, 100, 1);
}}

}


{

gdjs.IntroCode.GDLine1Objects1.createFrom(runtimeScene.getObjects("Line1"));

gdjs.IntroCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDLine1Objects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDLine1Objects1[i].getVariableNumber(gdjs.IntroCode.GDLine1Objects1[i].getVariables().getFromIndex(0)) < 1 ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDLine1Objects1[k] = gdjs.IntroCode.GDLine1Objects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDLine1Objects1.length = k;}if (gdjs.IntroCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDLine1Objects1 */
{for(var i = 0, len = gdjs.IntroCode.GDLine1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLine1Objects1[i].returnVariable(gdjs.IntroCode.GDLine1Objects1[i].getVariables().getFromIndex(0)).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.IntroCode.GDLine1Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLine1Objects1[i].setOpacity(Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.IntroCode.GDLine1Objects1[i].getVariables().getFromIndex(0))) * 3.14159) * 150);
}
}}

}


{

gdjs.IntroCode.GDLine2Objects1.createFrom(runtimeScene.getObjects("Line2"));

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDLine2Objects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDLine2Objects1[i].getVariableNumber(gdjs.IntroCode.GDLine2Objects1[i].getVariables().getFromIndex(0)) < 1 ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDLine2Objects1[k] = gdjs.IntroCode.GDLine2Objects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDLine2Objects1.length = k;}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "Timer");
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDLine2Objects1 */
{for(var i = 0, len = gdjs.IntroCode.GDLine2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLine2Objects1[i].returnVariable(gdjs.IntroCode.GDLine2Objects1[i].getVariables().getFromIndex(0)).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.IntroCode.GDLine2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLine2Objects1[i].setOpacity(Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.IntroCode.GDLine2Objects1[i].getVariables().getFromIndex(0))) * 3.14159) * 150);
}
}
{ //Subevents
gdjs.IntroCode.eventsList0x88f164(runtimeScene);} //End of subevents
}

}


{

gdjs.IntroCode.GDLine3Objects1.createFrom(runtimeScene.getObjects("Line3"));

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDLine3Objects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDLine3Objects1[i].getVariableNumber(gdjs.IntroCode.GDLine3Objects1[i].getVariables().getFromIndex(0)) < 1 ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDLine3Objects1[k] = gdjs.IntroCode.GDLine3Objects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDLine3Objects1.length = k;}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "Timer");
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDLine3Objects1 */
{for(var i = 0, len = gdjs.IntroCode.GDLine3Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLine3Objects1[i].returnVariable(gdjs.IntroCode.GDLine3Objects1[i].getVariables().getFromIndex(0)).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.IntroCode.GDLine3Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLine3Objects1[i].setOpacity(Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.IntroCode.GDLine3Objects1[i].getVariables().getFromIndex(0))) * 3.14159) * 150);
}
}}

}


{

gdjs.IntroCode.GDLine4Objects1.createFrom(runtimeScene.getObjects("Line4"));

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IntroCode.GDLine4Objects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDLine4Objects1[i].getVariableNumber(gdjs.IntroCode.GDLine4Objects1[i].getVariables().getFromIndex(0)) < 1 ) {
        gdjs.IntroCode.condition0IsTrue_0.val = true;
        gdjs.IntroCode.GDLine4Objects1[k] = gdjs.IntroCode.GDLine4Objects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDLine4Objects1.length = k;}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 15, "Timer");
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IntroCode.GDLine4Objects1 */
{for(var i = 0, len = gdjs.IntroCode.GDLine4Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLine4Objects1[i].returnVariable(gdjs.IntroCode.GDLine4Objects1[i].getVariables().getFromIndex(0)).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.IntroCode.GDLine4Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLine4Objects1[i].setOpacity(Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.IntroCode.GDLine4Objects1[i].getVariables().getFromIndex(0))) * 3.14159) * 150);
}
}}

}


{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 25, "Timer");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Dungeon", false);
}}

}


}; //End of gdjs.IntroCode.eventsList0x5b70b8


gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDLine1Objects1.length = 0;
gdjs.IntroCode.GDLine1Objects2.length = 0;
gdjs.IntroCode.GDLine2Objects1.length = 0;
gdjs.IntroCode.GDLine2Objects2.length = 0;
gdjs.IntroCode.GDLine3Objects1.length = 0;
gdjs.IntroCode.GDLine3Objects2.length = 0;
gdjs.IntroCode.GDLine4Objects1.length = 0;
gdjs.IntroCode.GDLine4Objects2.length = 0;

gdjs.IntroCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
