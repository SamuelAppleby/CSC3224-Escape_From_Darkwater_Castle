gdjs.ClassSelectionCode = {};
gdjs.ClassSelectionCode.GDClassChoiceObjects1= [];
gdjs.ClassSelectionCode.GDClassChoiceObjects2= [];
gdjs.ClassSelectionCode.GDKnightObjects1= [];
gdjs.ClassSelectionCode.GDKnightObjects2= [];
gdjs.ClassSelectionCode.GDMageObjects1= [];
gdjs.ClassSelectionCode.GDMageObjects2= [];
gdjs.ClassSelectionCode.GDArcherObjects1= [];
gdjs.ClassSelectionCode.GDArcherObjects2= [];
gdjs.ClassSelectionCode.GDKnightDescriptionObjects1= [];
gdjs.ClassSelectionCode.GDKnightDescriptionObjects2= [];
gdjs.ClassSelectionCode.GDMageDescriptionObjects1= [];
gdjs.ClassSelectionCode.GDMageDescriptionObjects2= [];
gdjs.ClassSelectionCode.GDArcherDescriptionObjects1= [];
gdjs.ClassSelectionCode.GDArcherDescriptionObjects2= [];
gdjs.ClassSelectionCode.GDKnightIconObjects1= [];
gdjs.ClassSelectionCode.GDKnightIconObjects2= [];
gdjs.ClassSelectionCode.GDMageIconObjects1= [];
gdjs.ClassSelectionCode.GDMageIconObjects2= [];
gdjs.ClassSelectionCode.GDArcherIconObjects1= [];
gdjs.ClassSelectionCode.GDArcherIconObjects2= [];

gdjs.ClassSelectionCode.conditionTrue_0 = {val:false};
gdjs.ClassSelectionCode.condition0IsTrue_0 = {val:false};
gdjs.ClassSelectionCode.condition1IsTrue_0 = {val:false};
gdjs.ClassSelectionCode.conditionTrue_1 = {val:false};
gdjs.ClassSelectionCode.condition0IsTrue_1 = {val:false};
gdjs.ClassSelectionCode.condition1IsTrue_1 = {val:false};


gdjs.ClassSelectionCode.eventsList0x98ed4c = function(runtimeScene) {

{


gdjs.ClassSelectionCode.condition0IsTrue_0.val = false;
{
{gdjs.ClassSelectionCode.conditionTrue_1 = gdjs.ClassSelectionCode.condition0IsTrue_0;
gdjs.ClassSelectionCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19875980);
}
}if (gdjs.ClassSelectionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ClassSelectionCode.GDClassChoiceObjects1 */
{for(var i = 0, len = gdjs.ClassSelectionCode.GDClassChoiceObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDClassChoiceObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Sound\\ClassMusic.wav", 10, true, 100, 1);
}}

}


}; //End of gdjs.ClassSelectionCode.eventsList0x98ed4c
gdjs.ClassSelectionCode.mapOfGDgdjs_46ClassSelectionCode_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.ClassSelectionCode.GDKnightObjects1});gdjs.ClassSelectionCode.eventsList0x12f560c = function(runtimeScene) {

{


gdjs.ClassSelectionCode.condition0IsTrue_0.val = false;
{
gdjs.ClassSelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ClassSelectionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 10);
}}

}


}; //End of gdjs.ClassSelectionCode.eventsList0x12f560c
gdjs.ClassSelectionCode.mapOfGDgdjs_46ClassSelectionCode_46GDMageObjects1Objects = Hashtable.newFrom({"Mage": gdjs.ClassSelectionCode.GDMageObjects1});gdjs.ClassSelectionCode.eventsList0x12f5d44 = function(runtimeScene) {

{


gdjs.ClassSelectionCode.condition0IsTrue_0.val = false;
{
gdjs.ClassSelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ClassSelectionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 10);
}}

}


}; //End of gdjs.ClassSelectionCode.eventsList0x12f5d44
gdjs.ClassSelectionCode.mapOfGDgdjs_46ClassSelectionCode_46GDArcherObjects1Objects = Hashtable.newFrom({"Archer": gdjs.ClassSelectionCode.GDArcherObjects1});gdjs.ClassSelectionCode.eventsList0x12f64bc = function(runtimeScene) {

{


gdjs.ClassSelectionCode.condition0IsTrue_0.val = false;
{
gdjs.ClassSelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ClassSelectionCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 10);
}}

}


}; //End of gdjs.ClassSelectionCode.eventsList0x12f64bc
gdjs.ClassSelectionCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.ClassSelectionCode.condition0IsTrue_0.val = false;
{
gdjs.ClassSelectionCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ClassSelectionCode.condition0IsTrue_0.val) {
gdjs.ClassSelectionCode.GDArcherObjects1.createFrom(runtimeScene.getObjects("Archer"));
gdjs.ClassSelectionCode.GDClassChoiceObjects1.createFrom(runtimeScene.getObjects("ClassChoice"));
gdjs.ClassSelectionCode.GDKnightObjects1.createFrom(runtimeScene.getObjects("Knight"));
gdjs.ClassSelectionCode.GDMageObjects1.createFrom(runtimeScene.getObjects("Mage"));
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Escape From Darkwater Castle");
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDClassChoiceObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDClassChoiceObjects1[i].setString("Choose Your Class");
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDKnightObjects1[i].setString("Knight");
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDMageObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDMageObjects1[i].setString("Mage");
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDArcherObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDArcherObjects1[i].setString("Archer");
}
}
{ //Subevents
gdjs.ClassSelectionCode.eventsList0x98ed4c(runtimeScene);} //End of subevents
}

}


{


{
gdjs.ClassSelectionCode.GDArcherObjects1.createFrom(runtimeScene.getObjects("Archer"));
gdjs.ClassSelectionCode.GDArcherDescriptionObjects1.createFrom(runtimeScene.getObjects("ArcherDescription"));
gdjs.ClassSelectionCode.GDArcherIconObjects1.createFrom(runtimeScene.getObjects("ArcherIcon"));
gdjs.ClassSelectionCode.GDKnightObjects1.createFrom(runtimeScene.getObjects("Knight"));
gdjs.ClassSelectionCode.GDKnightDescriptionObjects1.createFrom(runtimeScene.getObjects("KnightDescription"));
gdjs.ClassSelectionCode.GDKnightIconObjects1.createFrom(runtimeScene.getObjects("KnightIcon"));
gdjs.ClassSelectionCode.GDMageObjects1.createFrom(runtimeScene.getObjects("Mage"));
gdjs.ClassSelectionCode.GDMageDescriptionObjects1.createFrom(runtimeScene.getObjects("MageDescription"));
gdjs.ClassSelectionCode.GDMageIconObjects1.createFrom(runtimeScene.getObjects("MageIcon"));
{for(var i = 0, len = gdjs.ClassSelectionCode.GDMageObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDMageObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDArcherObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDArcherObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDKnightObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDMageIconObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDMageIconObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDKnightIconObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDKnightIconObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDArcherIconObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDArcherIconObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDKnightDescriptionObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDKnightDescriptionObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDMageDescriptionObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDMageDescriptionObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDArcherDescriptionObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDArcherDescriptionObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.ClassSelectionCode.condition0IsTrue_0.val = false;
{
gdjs.ClassSelectionCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 0.5;
}if (gdjs.ClassSelectionCode.condition0IsTrue_0.val) {
gdjs.ClassSelectionCode.GDArcherObjects1.createFrom(runtimeScene.getObjects("Archer"));
gdjs.ClassSelectionCode.GDClassChoiceObjects1.createFrom(runtimeScene.getObjects("ClassChoice"));
gdjs.ClassSelectionCode.GDKnightObjects1.createFrom(runtimeScene.getObjects("Knight"));
gdjs.ClassSelectionCode.GDMageObjects1.createFrom(runtimeScene.getObjects("Mage"));
{for(var i = 0, len = gdjs.ClassSelectionCode.GDClassChoiceObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDClassChoiceObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDKnightObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDMageObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDMageObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDArcherObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDArcherObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{runtimeScene.getVariables().getFromIndex(0).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{

gdjs.ClassSelectionCode.GDKnightObjects1.createFrom(runtimeScene.getObjects("Knight"));

gdjs.ClassSelectionCode.condition0IsTrue_0.val = false;
{
gdjs.ClassSelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClassSelectionCode.mapOfGDgdjs_46ClassSelectionCode_46GDKnightObjects1Objects, runtimeScene, true, false);
}if (gdjs.ClassSelectionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ClassSelectionCode.GDKnightObjects1 */
gdjs.ClassSelectionCode.GDKnightDescriptionObjects1.createFrom(runtimeScene.getObjects("KnightDescription"));
gdjs.ClassSelectionCode.GDKnightIconObjects1.createFrom(runtimeScene.getObjects("KnightIcon"));
{for(var i = 0, len = gdjs.ClassSelectionCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDKnightObjects1[i].setColor("255;241;0");
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDKnightIconObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDKnightIconObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDKnightDescriptionObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDKnightDescriptionObjects1[i].setString("A warrior who can strike down enemies at close range");
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDKnightDescriptionObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDKnightDescriptionObjects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs.ClassSelectionCode.eventsList0x12f560c(runtimeScene);} //End of subevents
}

}


{

gdjs.ClassSelectionCode.GDMageObjects1.createFrom(runtimeScene.getObjects("Mage"));

gdjs.ClassSelectionCode.condition0IsTrue_0.val = false;
{
gdjs.ClassSelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClassSelectionCode.mapOfGDgdjs_46ClassSelectionCode_46GDMageObjects1Objects, runtimeScene, true, false);
}if (gdjs.ClassSelectionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ClassSelectionCode.GDMageObjects1 */
gdjs.ClassSelectionCode.GDMageDescriptionObjects1.createFrom(runtimeScene.getObjects("MageDescription"));
gdjs.ClassSelectionCode.GDMageIconObjects1.createFrom(runtimeScene.getObjects("MageIcon"));
{for(var i = 0, len = gdjs.ClassSelectionCode.GDMageObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDMageObjects1[i].setColor("255;241;0");
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDMageIconObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDMageIconObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDMageDescriptionObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDMageDescriptionObjects1[i].setString("A sage with the ability to cast powerful spells");
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDMageDescriptionObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDMageDescriptionObjects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs.ClassSelectionCode.eventsList0x12f5d44(runtimeScene);} //End of subevents
}

}


{

gdjs.ClassSelectionCode.GDArcherObjects1.createFrom(runtimeScene.getObjects("Archer"));

gdjs.ClassSelectionCode.condition0IsTrue_0.val = false;
{
gdjs.ClassSelectionCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ClassSelectionCode.mapOfGDgdjs_46ClassSelectionCode_46GDArcherObjects1Objects, runtimeScene, true, false);
}if (gdjs.ClassSelectionCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ClassSelectionCode.GDArcherObjects1 */
gdjs.ClassSelectionCode.GDArcherDescriptionObjects1.createFrom(runtimeScene.getObjects("ArcherDescription"));
gdjs.ClassSelectionCode.GDArcherIconObjects1.createFrom(runtimeScene.getObjects("ArcherIcon"));
{for(var i = 0, len = gdjs.ClassSelectionCode.GDArcherObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDArcherObjects1[i].setColor("255;241;0");
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDArcherDescriptionObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDArcherDescriptionObjects1[i].setString("A skilled ranger who excells is sniping foes from afar");
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDArcherDescriptionObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDArcherDescriptionObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ClassSelectionCode.GDArcherIconObjects1.length ;i < len;++i) {
    gdjs.ClassSelectionCode.GDArcherIconObjects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs.ClassSelectionCode.eventsList0x12f64bc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.ClassSelectionCode.eventsList0x5b70b8


gdjs.ClassSelectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ClassSelectionCode.GDClassChoiceObjects1.length = 0;
gdjs.ClassSelectionCode.GDClassChoiceObjects2.length = 0;
gdjs.ClassSelectionCode.GDKnightObjects1.length = 0;
gdjs.ClassSelectionCode.GDKnightObjects2.length = 0;
gdjs.ClassSelectionCode.GDMageObjects1.length = 0;
gdjs.ClassSelectionCode.GDMageObjects2.length = 0;
gdjs.ClassSelectionCode.GDArcherObjects1.length = 0;
gdjs.ClassSelectionCode.GDArcherObjects2.length = 0;
gdjs.ClassSelectionCode.GDKnightDescriptionObjects1.length = 0;
gdjs.ClassSelectionCode.GDKnightDescriptionObjects2.length = 0;
gdjs.ClassSelectionCode.GDMageDescriptionObjects1.length = 0;
gdjs.ClassSelectionCode.GDMageDescriptionObjects2.length = 0;
gdjs.ClassSelectionCode.GDArcherDescriptionObjects1.length = 0;
gdjs.ClassSelectionCode.GDArcherDescriptionObjects2.length = 0;
gdjs.ClassSelectionCode.GDKnightIconObjects1.length = 0;
gdjs.ClassSelectionCode.GDKnightIconObjects2.length = 0;
gdjs.ClassSelectionCode.GDMageIconObjects1.length = 0;
gdjs.ClassSelectionCode.GDMageIconObjects2.length = 0;
gdjs.ClassSelectionCode.GDArcherIconObjects1.length = 0;
gdjs.ClassSelectionCode.GDArcherIconObjects2.length = 0;

gdjs.ClassSelectionCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['ClassSelectionCode'] = gdjs.ClassSelectionCode;
