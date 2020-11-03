gdjs.OptionsCode = {};
gdjs.OptionsCode.GDTitleObjects1= [];
gdjs.OptionsCode.GDTitleObjects2= [];
gdjs.OptionsCode.GDTitleObjects3= [];
gdjs.OptionsCode.GDResumeObjects1= [];
gdjs.OptionsCode.GDResumeObjects2= [];
gdjs.OptionsCode.GDResumeObjects3= [];
gdjs.OptionsCode.GDVolumeObjects1= [];
gdjs.OptionsCode.GDVolumeObjects2= [];
gdjs.OptionsCode.GDVolumeObjects3= [];
gdjs.OptionsCode.GDOptionsObjects1= [];
gdjs.OptionsCode.GDOptionsObjects2= [];
gdjs.OptionsCode.GDOptionsObjects3= [];
gdjs.OptionsCode.GDDeveloperModeObjects1= [];
gdjs.OptionsCode.GDDeveloperModeObjects2= [];
gdjs.OptionsCode.GDDeveloperModeObjects3= [];
gdjs.OptionsCode.GDFullscreenObjects1= [];
gdjs.OptionsCode.GDFullscreenObjects2= [];
gdjs.OptionsCode.GDFullscreenObjects3= [];
gdjs.OptionsCode.GDControlsObjects1= [];
gdjs.OptionsCode.GDControlsObjects2= [];
gdjs.OptionsCode.GDControlsObjects3= [];
gdjs.OptionsCode.GDControlTextObjects1= [];
gdjs.OptionsCode.GDControlTextObjects2= [];
gdjs.OptionsCode.GDControlTextObjects3= [];
gdjs.OptionsCode.GDBackObjects1= [];
gdjs.OptionsCode.GDBackObjects2= [];
gdjs.OptionsCode.GDBackObjects3= [];
gdjs.OptionsCode.GDBackgroundObjects1= [];
gdjs.OptionsCode.GDBackgroundObjects2= [];
gdjs.OptionsCode.GDBackgroundObjects3= [];
gdjs.OptionsCode.GDCheckboxObjects1= [];
gdjs.OptionsCode.GDCheckboxObjects2= [];
gdjs.OptionsCode.GDCheckboxObjects3= [];
gdjs.OptionsCode.GDCheckbox2Objects1= [];
gdjs.OptionsCode.GDCheckbox2Objects2= [];
gdjs.OptionsCode.GDCheckbox2Objects3= [];
gdjs.OptionsCode.GDVolumeLevelObjects1= [];
gdjs.OptionsCode.GDVolumeLevelObjects2= [];
gdjs.OptionsCode.GDVolumeLevelObjects3= [];
gdjs.OptionsCode.GDVolumeBarObjects1= [];
gdjs.OptionsCode.GDVolumeBarObjects2= [];
gdjs.OptionsCode.GDVolumeBarObjects3= [];
gdjs.OptionsCode.GDSliderObjects1= [];
gdjs.OptionsCode.GDSliderObjects2= [];
gdjs.OptionsCode.GDSliderObjects3= [];

gdjs.OptionsCode.conditionTrue_0 = {val:false};
gdjs.OptionsCode.condition0IsTrue_0 = {val:false};
gdjs.OptionsCode.condition1IsTrue_0 = {val:false};
gdjs.OptionsCode.condition2IsTrue_0 = {val:false};
gdjs.OptionsCode.conditionTrue_1 = {val:false};
gdjs.OptionsCode.condition0IsTrue_1 = {val:false};
gdjs.OptionsCode.condition1IsTrue_1 = {val:false};
gdjs.OptionsCode.condition2IsTrue_1 = {val:false};


gdjs.OptionsCode.eventsList0x98eb5c = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.OptionsCode.GDCheckbox2Objects2.createFrom(gdjs.OptionsCode.GDCheckbox2Objects1);

{for(var i = 0, len = gdjs.OptionsCode.GDCheckbox2Objects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckbox2Objects2[i].setAnimationName("Off");
}
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.OptionsCode.GDCheckbox2Objects2.createFrom(gdjs.OptionsCode.GDCheckbox2Objects1);

{for(var i = 0, len = gdjs.OptionsCode.GDCheckbox2Objects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckbox2Objects2[i].setAnimationName("On");
}
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.OptionsCode.GDVolumeLevelObjects2.createFrom(gdjs.OptionsCode.GDVolumeLevelObjects1);

{for(var i = 0, len = gdjs.OptionsCode.GDVolumeLevelObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDVolumeLevelObjects2[i].setWidth(320);
}
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDVolumeLevelObjects1 */
{for(var i = 0, len = gdjs.OptionsCode.GDVolumeLevelObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDVolumeLevelObjects1[i].setWidth(0);
}
}}

}


}; //End of gdjs.OptionsCode.eventsList0x98eb5c
gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDSliderObjects1Objects = Hashtable.newFrom({"Slider": gdjs.OptionsCode.GDSliderObjects1});gdjs.OptionsCode.eventsList0x131ba64 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.OptionsCode.GDSliderObjects2.createFrom(gdjs.OptionsCode.GDSliderObjects1);

{for(var i = 0, len = gdjs.OptionsCode.GDSliderObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDSliderObjects2[i].setX(575);
}
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.OptionsCode.GDSliderObjects2.createFrom(gdjs.OptionsCode.GDSliderObjects1);

{for(var i = 0, len = gdjs.OptionsCode.GDSliderObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDSliderObjects2[i].setX(255);
}
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) < 270;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.OptionsCode.GDSliderObjects2.createFrom(gdjs.OptionsCode.GDSliderObjects1);

{for(var i = 0, len = gdjs.OptionsCode.GDSliderObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDSliderObjects2[i].setX(255);
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) > 590;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDSliderObjects1 */
{for(var i = 0, len = gdjs.OptionsCode.GDSliderObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDSliderObjects1[i].setX(575);
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}


}; //End of gdjs.OptionsCode.eventsList0x131ba64
gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.OptionsCode.GDBackObjects1});gdjs.OptionsCode.eventsList0x131c3ac = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.OptionsCode.eventsList0x131c3ac
gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDControlsObjects1Objects = Hashtable.newFrom({"Controls": gdjs.OptionsCode.GDControlsObjects1});gdjs.OptionsCode.eventsList0x131c724 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition0IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20040044);
}
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.OptionsCode.GDControlTextObjects2.createFrom(runtimeScene.getObjects("ControlText"));
{for(var i = 0, len = gdjs.OptionsCode.GDControlTextObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDControlTextObjects2[i].returnVariable(gdjs.OptionsCode.GDControlTextObjects2[i].getVariables().get("Fade")).setNumber(0);
}
}}

}


{

gdjs.OptionsCode.GDControlTextObjects1.createFrom(runtimeScene.getObjects("ControlText"));

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDControlTextObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDControlTextObjects1[i].getVariableNumber(gdjs.OptionsCode.GDControlTextObjects1[i].getVariables().get("Fade")) < 1 ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDControlTextObjects1[k] = gdjs.OptionsCode.GDControlTextObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDControlTextObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDControlTextObjects1 */
{for(var i = 0, len = gdjs.OptionsCode.GDControlTextObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDControlTextObjects1[i].returnVariable(gdjs.OptionsCode.GDControlTextObjects1[i].getVariables().get("Fade")).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.OptionsCode.GDControlTextObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDControlTextObjects1[i].setOpacity(Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.OptionsCode.GDControlTextObjects1[i].getVariables().get("Fade"))) * 3.14159) * 200);
}
}}

}


}; //End of gdjs.OptionsCode.eventsList0x131c724
gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDCheckboxObjects1Objects = Hashtable.newFrom({"Checkbox": gdjs.OptionsCode.GDCheckboxObjects1});gdjs.OptionsCode.eventsList0x131d01c = function(runtimeScene) {

{

gdjs.OptionsCode.GDCheckboxObjects2.createFrom(gdjs.OptionsCode.GDCheckboxObjects1);


gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDCheckboxObjects2.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDCheckboxObjects2[i].timerElapsedTime("ChangeTimer", 0.1) ) {
        gdjs.OptionsCode.condition1IsTrue_0.val = true;
        gdjs.OptionsCode.GDCheckboxObjects2[k] = gdjs.OptionsCode.GDCheckboxObjects2[i];
        ++k;
    }
}
gdjs.OptionsCode.GDCheckboxObjects2.length = k;}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDCheckboxObjects2 */
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{for(var i = 0, len = gdjs.OptionsCode.GDCheckboxObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckboxObjects2[i].setAnimationName("On");
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.OptionsCode.GDCheckboxObjects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckboxObjects2[i].resetTimer("ChangeTimer");
}
}}

}


{

/* Reuse gdjs.OptionsCode.GDCheckboxObjects1 */

gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDCheckboxObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDCheckboxObjects1[i].timerElapsedTime("ChangeTimer", 0.1) ) {
        gdjs.OptionsCode.condition1IsTrue_0.val = true;
        gdjs.OptionsCode.GDCheckboxObjects1[k] = gdjs.OptionsCode.GDCheckboxObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDCheckboxObjects1.length = k;}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDCheckboxObjects1 */
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}{for(var i = 0, len = gdjs.OptionsCode.GDCheckboxObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckboxObjects1[i].setAnimationName("Off");
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.OptionsCode.GDCheckboxObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckboxObjects1[i].resetTimer("ChangeTimer");
}
}}

}


}; //End of gdjs.OptionsCode.eventsList0x131d01c
gdjs.OptionsCode.eventsList0x131ce44 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionsCode.eventsList0x131d01c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.OptionsCode.eventsList0x131ce44
gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDCheckbox2Objects1Objects = Hashtable.newFrom({"Checkbox2": gdjs.OptionsCode.GDCheckbox2Objects1});gdjs.OptionsCode.eventsList0x131dc4c = function(runtimeScene) {

{

gdjs.OptionsCode.GDCheckbox2Objects2.createFrom(gdjs.OptionsCode.GDCheckbox2Objects1);


gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDCheckbox2Objects2.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDCheckbox2Objects2[i].timerElapsedTime("ChangeTimer", 0.1) ) {
        gdjs.OptionsCode.condition1IsTrue_0.val = true;
        gdjs.OptionsCode.GDCheckbox2Objects2[k] = gdjs.OptionsCode.GDCheckbox2Objects2[i];
        ++k;
    }
}
gdjs.OptionsCode.GDCheckbox2Objects2.length = k;}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDCheckbox2Objects2 */
{for(var i = 0, len = gdjs.OptionsCode.GDCheckbox2Objects2.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckbox2Objects2[i].resetTimer("ChangeTimer");
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}}

}


{

/* Reuse gdjs.OptionsCode.GDCheckbox2Objects1 */

gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDCheckbox2Objects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDCheckbox2Objects1[i].timerElapsedTime("ChangeTimer", 0.1) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDCheckbox2Objects1[k] = gdjs.OptionsCode.GDCheckbox2Objects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDCheckbox2Objects1.length = k;}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
gdjs.OptionsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDCheckbox2Objects1 */
{for(var i = 0, len = gdjs.OptionsCode.GDCheckbox2Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckbox2Objects1[i].resetTimer("ChangeTimer");
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


}; //End of gdjs.OptionsCode.eventsList0x131dc4c
gdjs.OptionsCode.eventsList0x131da74 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionsCode.eventsList0x131dc4c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.OptionsCode.eventsList0x131da74
gdjs.OptionsCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.OptionsCode.GDCheckboxObjects1.createFrom(runtimeScene.getObjects("Checkbox"));
gdjs.OptionsCode.GDCheckbox2Objects1.createFrom(runtimeScene.getObjects("Checkbox2"));
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Escape From Darkwater Castle");
}{for(var i = 0, len = gdjs.OptionsCode.GDCheckboxObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckboxObjects1[i].resetTimer("ChangeTimer");
}
}{for(var i = 0, len = gdjs.OptionsCode.GDCheckbox2Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckbox2Objects1[i].resetTimer("ChangeTimer");
}
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 0.5;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.OptionsCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));
gdjs.OptionsCode.GDCheckboxObjects1.createFrom(runtimeScene.getObjects("Checkbox"));
gdjs.OptionsCode.GDCheckbox2Objects1.createFrom(runtimeScene.getObjects("Checkbox2"));
gdjs.OptionsCode.GDControlsObjects1.createFrom(runtimeScene.getObjects("Controls"));
gdjs.OptionsCode.GDDeveloperModeObjects1.createFrom(runtimeScene.getObjects("DeveloperMode"));
gdjs.OptionsCode.GDFullscreenObjects1.createFrom(runtimeScene.getObjects("Fullscreen"));
gdjs.OptionsCode.GDSliderObjects1.createFrom(runtimeScene.getObjects("Slider"));
gdjs.OptionsCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));
gdjs.OptionsCode.GDVolumeObjects1.createFrom(runtimeScene.getObjects("Volume"));
gdjs.OptionsCode.GDVolumeBarObjects1.createFrom(runtimeScene.getObjects("VolumeBar"));
gdjs.OptionsCode.GDVolumeLevelObjects1.createFrom(runtimeScene.getObjects("VolumeLevel"));
{for(var i = 0, len = gdjs.OptionsCode.GDVolumeObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDVolumeObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.OptionsCode.GDControlsObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDControlsObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{runtimeScene.getVariables().getFromIndex(0).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}{for(var i = 0, len = gdjs.OptionsCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDBackObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.OptionsCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDTitleObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.OptionsCode.GDFullscreenObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDFullscreenObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.OptionsCode.GDDeveloperModeObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDDeveloperModeObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.OptionsCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDBackObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.OptionsCode.GDCheckboxObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckboxObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.OptionsCode.GDCheckbox2Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckbox2Objects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.OptionsCode.GDVolumeLevelObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDVolumeLevelObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.OptionsCode.GDVolumeBarObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDVolumeBarObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.OptionsCode.GDSliderObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDSliderObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 300);
}
}}

}


{


{
gdjs.OptionsCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));
gdjs.OptionsCode.GDCheckboxObjects1.createFrom(runtimeScene.getObjects("Checkbox"));
gdjs.OptionsCode.GDCheckbox2Objects1.createFrom(runtimeScene.getObjects("Checkbox2"));
gdjs.OptionsCode.GDControlTextObjects1.createFrom(runtimeScene.getObjects("ControlText"));
gdjs.OptionsCode.GDControlsObjects1.createFrom(runtimeScene.getObjects("Controls"));
gdjs.OptionsCode.GDSliderObjects1.createFrom(runtimeScene.getObjects("Slider"));
gdjs.OptionsCode.GDVolumeObjects1.createFrom(runtimeScene.getObjects("Volume"));
gdjs.OptionsCode.GDVolumeLevelObjects1.createFrom(runtimeScene.getObjects("VolumeLevel"));
{for(var i = 0, len = gdjs.OptionsCode.GDVolumeObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDVolumeObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.OptionsCode.GDControlsObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDControlsObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.OptionsCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDBackObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.OptionsCode.GDCheckboxObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckboxObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.OptionsCode.GDCheckbox2Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckbox2Objects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.OptionsCode.GDSliderObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDSliderObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.OptionsCode.GDSliderObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDSliderObjects1[i].setY(416);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((((( gdjs.OptionsCode.GDSliderObjects1.length === 0 ) ? 0 :gdjs.OptionsCode.GDSliderObjects1[0].getPointX("")) - 255) / 320) * 100);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}{for(var i = 0, len = gdjs.OptionsCode.GDVolumeLevelObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDVolumeLevelObjects1[i].setWidth(320 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) / 100);
}
}{for(var i = 0, len = gdjs.OptionsCode.GDControlTextObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDControlTextObjects1[i].setOpacity(0);
}
}
{ //Subevents
gdjs.OptionsCode.eventsList0x98eb5c(runtimeScene);} //End of subevents
}

}


{

gdjs.OptionsCode.GDSliderObjects1.createFrom(runtimeScene.getObjects("Slider"));

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDSliderObjects1Objects, runtimeScene, true, false);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDSliderObjects1 */
{for(var i = 0, len = gdjs.OptionsCode.GDSliderObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDSliderObjects1[i].setColor("255;241;0");
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}}

}


{

gdjs.OptionsCode.GDSliderObjects1.createFrom(runtimeScene.getObjects("Slider"));

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDSliderObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDSliderObjects1[i].getBehavior("Draggable").isDragged() ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDSliderObjects1[k] = gdjs.OptionsCode.GDSliderObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDSliderObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionsCode.eventsList0x131ba64(runtimeScene);} //End of subevents
}

}


{

gdjs.OptionsCode.GDBackObjects1.createFrom(runtimeScene.getObjects("Back"));

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDBackObjects1Objects, runtimeScene, true, false);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDBackObjects1 */
{for(var i = 0, len = gdjs.OptionsCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDBackObjects1[i].setColor("255;241;0");
}
}
{ //Subevents
gdjs.OptionsCode.eventsList0x131c3ac(runtimeScene);} //End of subevents
}

}


{

gdjs.OptionsCode.GDControlsObjects1.createFrom(runtimeScene.getObjects("Controls"));

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDControlsObjects1Objects, runtimeScene, true, false);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDControlsObjects1 */
{for(var i = 0, len = gdjs.OptionsCode.GDControlsObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDControlsObjects1[i].setColor("255;241;0");
}
}
{ //Subevents
gdjs.OptionsCode.eventsList0x131c724(runtimeScene);} //End of subevents
}

}


{

gdjs.OptionsCode.GDCheckboxObjects1.createFrom(runtimeScene.getObjects("Checkbox"));

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDCheckboxObjects1Objects, runtimeScene, true, false);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDCheckboxObjects1 */
{for(var i = 0, len = gdjs.OptionsCode.GDCheckboxObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckboxObjects1[i].setColor("255;241;0");
}
}
{ //Subevents
gdjs.OptionsCode.eventsList0x131ce44(runtimeScene);} //End of subevents
}

}


{

gdjs.OptionsCode.GDCheckbox2Objects1.createFrom(runtimeScene.getObjects("Checkbox2"));

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDCheckbox2Objects1Objects, runtimeScene, true, false);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDCheckbox2Objects1 */
{for(var i = 0, len = gdjs.OptionsCode.GDCheckbox2Objects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDCheckbox2Objects1[i].setColor("255;241;0");
}
}
{ //Subevents
gdjs.OptionsCode.eventsList0x131da74(runtimeScene);} //End of subevents
}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.OptionsCode.GDBackgroundObjects1.createFrom(runtimeScene.getObjects("Background"));
{for(var i = 0, len = gdjs.OptionsCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDBackgroundObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.OptionsCode.eventsList0x5b70b8


gdjs.OptionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionsCode.GDTitleObjects1.length = 0;
gdjs.OptionsCode.GDTitleObjects2.length = 0;
gdjs.OptionsCode.GDTitleObjects3.length = 0;
gdjs.OptionsCode.GDResumeObjects1.length = 0;
gdjs.OptionsCode.GDResumeObjects2.length = 0;
gdjs.OptionsCode.GDResumeObjects3.length = 0;
gdjs.OptionsCode.GDVolumeObjects1.length = 0;
gdjs.OptionsCode.GDVolumeObjects2.length = 0;
gdjs.OptionsCode.GDVolumeObjects3.length = 0;
gdjs.OptionsCode.GDOptionsObjects1.length = 0;
gdjs.OptionsCode.GDOptionsObjects2.length = 0;
gdjs.OptionsCode.GDOptionsObjects3.length = 0;
gdjs.OptionsCode.GDDeveloperModeObjects1.length = 0;
gdjs.OptionsCode.GDDeveloperModeObjects2.length = 0;
gdjs.OptionsCode.GDDeveloperModeObjects3.length = 0;
gdjs.OptionsCode.GDFullscreenObjects1.length = 0;
gdjs.OptionsCode.GDFullscreenObjects2.length = 0;
gdjs.OptionsCode.GDFullscreenObjects3.length = 0;
gdjs.OptionsCode.GDControlsObjects1.length = 0;
gdjs.OptionsCode.GDControlsObjects2.length = 0;
gdjs.OptionsCode.GDControlsObjects3.length = 0;
gdjs.OptionsCode.GDControlTextObjects1.length = 0;
gdjs.OptionsCode.GDControlTextObjects2.length = 0;
gdjs.OptionsCode.GDControlTextObjects3.length = 0;
gdjs.OptionsCode.GDBackObjects1.length = 0;
gdjs.OptionsCode.GDBackObjects2.length = 0;
gdjs.OptionsCode.GDBackObjects3.length = 0;
gdjs.OptionsCode.GDBackgroundObjects1.length = 0;
gdjs.OptionsCode.GDBackgroundObjects2.length = 0;
gdjs.OptionsCode.GDBackgroundObjects3.length = 0;
gdjs.OptionsCode.GDCheckboxObjects1.length = 0;
gdjs.OptionsCode.GDCheckboxObjects2.length = 0;
gdjs.OptionsCode.GDCheckboxObjects3.length = 0;
gdjs.OptionsCode.GDCheckbox2Objects1.length = 0;
gdjs.OptionsCode.GDCheckbox2Objects2.length = 0;
gdjs.OptionsCode.GDCheckbox2Objects3.length = 0;
gdjs.OptionsCode.GDVolumeLevelObjects1.length = 0;
gdjs.OptionsCode.GDVolumeLevelObjects2.length = 0;
gdjs.OptionsCode.GDVolumeLevelObjects3.length = 0;
gdjs.OptionsCode.GDVolumeBarObjects1.length = 0;
gdjs.OptionsCode.GDVolumeBarObjects2.length = 0;
gdjs.OptionsCode.GDVolumeBarObjects3.length = 0;
gdjs.OptionsCode.GDSliderObjects1.length = 0;
gdjs.OptionsCode.GDSliderObjects2.length = 0;
gdjs.OptionsCode.GDSliderObjects3.length = 0;

gdjs.OptionsCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['OptionsCode'] = gdjs.OptionsCode;
