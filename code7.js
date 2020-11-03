gdjs.BlacksmithCode = {};
gdjs.BlacksmithCode.GDShopTitleObjects1= [];
gdjs.BlacksmithCode.GDShopTitleObjects2= [];
gdjs.BlacksmithCode.GDShopTitleObjects3= [];
gdjs.BlacksmithCode.GDShopTitleObjects4= [];
gdjs.BlacksmithCode.GDReforgeTextObjects1= [];
gdjs.BlacksmithCode.GDReforgeTextObjects2= [];
gdjs.BlacksmithCode.GDReforgeTextObjects3= [];
gdjs.BlacksmithCode.GDReforgeTextObjects4= [];
gdjs.BlacksmithCode.GDCriticalTextObjects1= [];
gdjs.BlacksmithCode.GDCriticalTextObjects2= [];
gdjs.BlacksmithCode.GDCriticalTextObjects3= [];
gdjs.BlacksmithCode.GDCriticalTextObjects4= [];
gdjs.BlacksmithCode.GDExitObjects1= [];
gdjs.BlacksmithCode.GDExitObjects2= [];
gdjs.BlacksmithCode.GDExitObjects3= [];
gdjs.BlacksmithCode.GDExitObjects4= [];
gdjs.BlacksmithCode.GDTalkObjects1= [];
gdjs.BlacksmithCode.GDTalkObjects2= [];
gdjs.BlacksmithCode.GDTalkObjects3= [];
gdjs.BlacksmithCode.GDTalkObjects4= [];
gdjs.BlacksmithCode.GDReforgeDescriptionObjects1= [];
gdjs.BlacksmithCode.GDReforgeDescriptionObjects2= [];
gdjs.BlacksmithCode.GDReforgeDescriptionObjects3= [];
gdjs.BlacksmithCode.GDReforgeDescriptionObjects4= [];
gdjs.BlacksmithCode.GDCriticalDescriptionObjects1= [];
gdjs.BlacksmithCode.GDCriticalDescriptionObjects2= [];
gdjs.BlacksmithCode.GDCriticalDescriptionObjects3= [];
gdjs.BlacksmithCode.GDCriticalDescriptionObjects4= [];
gdjs.BlacksmithCode.GDQuestionObjects1= [];
gdjs.BlacksmithCode.GDQuestionObjects2= [];
gdjs.BlacksmithCode.GDQuestionObjects3= [];
gdjs.BlacksmithCode.GDQuestionObjects4= [];
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1= [];
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects2= [];
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects3= [];
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects4= [];
gdjs.BlacksmithCode.GDCriticalIconObjects1= [];
gdjs.BlacksmithCode.GDCriticalIconObjects2= [];
gdjs.BlacksmithCode.GDCriticalIconObjects3= [];
gdjs.BlacksmithCode.GDCriticalIconObjects4= [];
gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects1= [];
gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects2= [];
gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects3= [];
gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects4= [];
gdjs.BlacksmithCode.GDDungeonKeyIconObjects1= [];
gdjs.BlacksmithCode.GDDungeonKeyIconObjects2= [];
gdjs.BlacksmithCode.GDDungeonKeyIconObjects3= [];
gdjs.BlacksmithCode.GDDungeonKeyIconObjects4= [];
gdjs.BlacksmithCode.GDGoldObjects1= [];
gdjs.BlacksmithCode.GDGoldObjects2= [];
gdjs.BlacksmithCode.GDGoldObjects3= [];
gdjs.BlacksmithCode.GDGoldObjects4= [];
gdjs.BlacksmithCode.GDDungeonKeyReforgedObjects1= [];
gdjs.BlacksmithCode.GDDungeonKeyReforgedObjects2= [];
gdjs.BlacksmithCode.GDDungeonKeyReforgedObjects3= [];
gdjs.BlacksmithCode.GDDungeonKeyReforgedObjects4= [];

gdjs.BlacksmithCode.conditionTrue_0 = {val:false};
gdjs.BlacksmithCode.condition0IsTrue_0 = {val:false};
gdjs.BlacksmithCode.condition1IsTrue_0 = {val:false};
gdjs.BlacksmithCode.condition2IsTrue_0 = {val:false};
gdjs.BlacksmithCode.conditionTrue_1 = {val:false};
gdjs.BlacksmithCode.condition0IsTrue_1 = {val:false};
gdjs.BlacksmithCode.condition1IsTrue_1 = {val:false};
gdjs.BlacksmithCode.condition2IsTrue_1 = {val:false};


gdjs.BlacksmithCode.mapOfGDgdjs_46BlacksmithCode_46GDCriticalTextObjects1Objects = Hashtable.newFrom({"CriticalText": gdjs.BlacksmithCode.GDCriticalTextObjects1});gdjs.BlacksmithCode.eventsList0x130b724 = function(runtimeScene) {

{


gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
gdjs.BlacksmithCode.condition1IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(21)) >= 50;
}if ( gdjs.BlacksmithCode.condition0IsTrue_0.val ) {
{
{gdjs.BlacksmithCode.conditionTrue_1 = gdjs.BlacksmithCode.condition1IsTrue_0;
gdjs.BlacksmithCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19970348);
}
}}
if (gdjs.BlacksmithCode.condition1IsTrue_0.val) {
gdjs.BlacksmithCode.GDCriticalTextObjects3.createFrom(gdjs.BlacksmithCode.GDCriticalTextObjects1);

{for(var i = 0, len = gdjs.BlacksmithCode.GDCriticalTextObjects3.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDCriticalTextObjects3[i].setString("Max Crit Level");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Denied.wav", false, 100, 1);
}}

}


{


gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
gdjs.BlacksmithCode.condition1IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(21)) < 50;
}if ( gdjs.BlacksmithCode.condition0IsTrue_0.val ) {
{
{gdjs.BlacksmithCode.conditionTrue_1 = gdjs.BlacksmithCode.condition1IsTrue_0;
gdjs.BlacksmithCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19971116);
}
}}
if (gdjs.BlacksmithCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Smith.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).sub(500);
}{runtimeScene.getGame().getVariables().getFromIndex(21).add(5);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


}; //End of gdjs.BlacksmithCode.eventsList0x130b724
gdjs.BlacksmithCode.eventsList0x130b5a4 = function(runtimeScene) {

{


gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) >= 500;
}if (gdjs.BlacksmithCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BlacksmithCode.eventsList0x130b724(runtimeScene);} //End of subevents
}

}


{


gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
gdjs.BlacksmithCode.condition1IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 500;
}if ( gdjs.BlacksmithCode.condition0IsTrue_0.val ) {
{
gdjs.BlacksmithCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.BlacksmithCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BlacksmithCode.GDCriticalTextObjects1 */
{for(var i = 0, len = gdjs.BlacksmithCode.GDCriticalTextObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDCriticalTextObjects1[i].setString("Not Enough Gold");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Denied.wav", false, 100, 1);
}}

}


}; //End of gdjs.BlacksmithCode.eventsList0x130b5a4
gdjs.BlacksmithCode.eventsList0xc94c6c = function(runtimeScene) {

{


gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.BlacksmithCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}
{ //Subevents
gdjs.BlacksmithCode.eventsList0x130b5a4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.BlacksmithCode.eventsList0xc94c6c
gdjs.BlacksmithCode.mapOfGDgdjs_46BlacksmithCode_46GDReforgeTextObjects1Objects = Hashtable.newFrom({"ReforgeText": gdjs.BlacksmithCode.GDReforgeTextObjects1});gdjs.BlacksmithCode.eventsList0x130cba4 = function(runtimeScene) {

{


gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
gdjs.BlacksmithCode.condition1IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(18)) == 1;
}if ( gdjs.BlacksmithCode.condition0IsTrue_0.val ) {
{
gdjs.BlacksmithCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)) == 1;
}}
if (gdjs.BlacksmithCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(18).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).sub(1);
}{runtimeScene.getGame().getVariables().getFromIndex(20).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Smith.wav", false, 100, 1);
}}

}


{


gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
gdjs.BlacksmithCode.condition1IsTrue_0.val = false;
{
{gdjs.BlacksmithCode.conditionTrue_1 = gdjs.BlacksmithCode.condition0IsTrue_0;
gdjs.BlacksmithCode.condition0IsTrue_1.val = false;
gdjs.BlacksmithCode.condition1IsTrue_1.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(18)) != 1;
if( gdjs.BlacksmithCode.condition0IsTrue_1.val ) {
    gdjs.BlacksmithCode.conditionTrue_1.val = true;
}
}
{
gdjs.BlacksmithCode.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)) != 1;
if( gdjs.BlacksmithCode.condition1IsTrue_1.val ) {
    gdjs.BlacksmithCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.BlacksmithCode.condition0IsTrue_0.val ) {
{
gdjs.BlacksmithCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(20)) == 0;
}}
if (gdjs.BlacksmithCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BlacksmithCode.GDReforgeTextObjects1 */
{for(var i = 0, len = gdjs.BlacksmithCode.GDReforgeTextObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDReforgeTextObjects1[i].setString("Lack the required items");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Denied.wav", false, 100, 1);
}}

}


}; //End of gdjs.BlacksmithCode.eventsList0x130cba4
gdjs.BlacksmithCode.eventsList0x130c354 = function(runtimeScene) {

{


gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
gdjs.BlacksmithCode.condition1IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.BlacksmithCode.condition0IsTrue_0.val ) {
{
{gdjs.BlacksmithCode.conditionTrue_1 = gdjs.BlacksmithCode.condition1IsTrue_0;
gdjs.BlacksmithCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19975276);
}
}}
if (gdjs.BlacksmithCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.BlacksmithCode.eventsList0x130cba4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.BlacksmithCode.eventsList0x130c354
gdjs.BlacksmithCode.mapOfGDgdjs_46BlacksmithCode_46GDTalkObjects1Objects = Hashtable.newFrom({"Talk": gdjs.BlacksmithCode.GDTalkObjects1});gdjs.BlacksmithCode.eventsList0x130d99c = function(runtimeScene) {

{


gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
gdjs.BlacksmithCode.condition1IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.BlacksmithCode.condition0IsTrue_0.val ) {
{
{gdjs.BlacksmithCode.conditionTrue_1 = gdjs.BlacksmithCode.condition1IsTrue_0;
gdjs.BlacksmithCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19979380);
}
}}
if (gdjs.BlacksmithCode.condition1IsTrue_0.val) {
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.createFrom(runtimeScene.getObjects("BlacksmithsResponse"));
gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.createFrom(runtimeScene.getObjects("DungeonKeyIcon"));
gdjs.BlacksmithCode.GDQuestionObjects1.createFrom(runtimeScene.getObjects("Question"));
/* Reuse gdjs.BlacksmithCode.GDTalkObjects1 */
{for(var i = 0, len = gdjs.BlacksmithCode.GDTalkObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDTalkObjects1[i].returnVariable(gdjs.BlacksmithCode.GDTalkObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDQuestionObjects1[i].returnVariable(gdjs.BlacksmithCode.GDQuestionObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].returnVariable(gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].returnVariable(gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


}; //End of gdjs.BlacksmithCode.eventsList0x130d99c
gdjs.BlacksmithCode.mapOfGDgdjs_46BlacksmithCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.BlacksmithCode.GDExitObjects1});gdjs.BlacksmithCode.eventsList0x130f02c = function(runtimeScene) {

{


gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.BlacksmithCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.BlacksmithCode.eventsList0x130f02c
gdjs.BlacksmithCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.BlacksmithCode.condition0IsTrue_0.val) {
gdjs.BlacksmithCode.GDCriticalTextObjects1.createFrom(runtimeScene.getObjects("CriticalText"));
gdjs.BlacksmithCode.GDQuestionObjects1.createFrom(runtimeScene.getObjects("Question"));
gdjs.BlacksmithCode.GDReforgeTextObjects1.createFrom(runtimeScene.getObjects("ReforgeText"));
gdjs.BlacksmithCode.GDShopTitleObjects1.createFrom(runtimeScene.getObjects("ShopTitle"));
gdjs.BlacksmithCode.GDTalkObjects1.createFrom(runtimeScene.getObjects("Talk"));
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Escape From Darkwater Castle");
}{for(var i = 0, len = gdjs.BlacksmithCode.GDShopTitleObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDShopTitleObjects1[i].setString("Blascksmith");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDCriticalTextObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDCriticalTextObjects1[i].setString("Increase Crit Chance [500 Gold]");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDTalkObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDTalkObjects1[i].setString("Inquire of locked door");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDQuestionObjects1[i].setString("\"What can you tell me of the locked door?\"");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDReforgeTextObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDReforgeTextObjects1[i].setString("Reforge Dungeon Key");
}
}}

}


{


{
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.createFrom(runtimeScene.getObjects("BlacksmithsResponse"));
gdjs.BlacksmithCode.GDCriticalDescriptionObjects1.createFrom(runtimeScene.getObjects("CriticalDescription"));
gdjs.BlacksmithCode.GDCriticalIconObjects1.createFrom(runtimeScene.getObjects("CriticalIcon"));
gdjs.BlacksmithCode.GDCriticalTextObjects1.createFrom(runtimeScene.getObjects("CriticalText"));
gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.createFrom(runtimeScene.getObjects("DungeonKeyIcon"));
gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects1.createFrom(runtimeScene.getObjects("DungeonKeyIcon2"));
gdjs.BlacksmithCode.GDDungeonKeyReforgedObjects1.createFrom(runtimeScene.getObjects("DungeonKeyReforged"));
gdjs.BlacksmithCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));
gdjs.BlacksmithCode.GDGoldObjects1.createFrom(runtimeScene.getObjects("Gold"));
gdjs.BlacksmithCode.GDQuestionObjects1.createFrom(runtimeScene.getObjects("Question"));
gdjs.BlacksmithCode.GDReforgeDescriptionObjects1.createFrom(runtimeScene.getObjects("ReforgeDescription"));
gdjs.BlacksmithCode.GDReforgeTextObjects1.createFrom(runtimeScene.getObjects("ReforgeText"));
gdjs.BlacksmithCode.GDTalkObjects1.createFrom(runtimeScene.getObjects("Talk"));
{for(var i = 0, len = gdjs.BlacksmithCode.GDTalkObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDTalkObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDCriticalTextObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDCriticalTextObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDExitObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDReforgeTextObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDReforgeTextObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].setOpacity(Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].getVariables().getFromIndex(0))) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects1[i].setOpacity(Math.sin((gdjs.RuntimeObject.getVariableNumber(((gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[0].getVariables()).getFromIndex(0))) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDCriticalIconObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDCriticalIconObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDCriticalDescriptionObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDCriticalDescriptionObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDReforgeDescriptionObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDReforgeDescriptionObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].setOpacity(Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].getVariables().getFromIndex(0))) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDQuestionObjects1[i].setOpacity(Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.BlacksmithCode.GDQuestionObjects1[i].getVariables().getFromIndex(0))) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDGoldObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDGoldObjects1[i].setString("Gold: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDDungeonKeyReforgedObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDDungeonKeyReforgedObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 0.5;
}if (gdjs.BlacksmithCode.condition0IsTrue_0.val) {
gdjs.BlacksmithCode.GDCriticalTextObjects1.createFrom(runtimeScene.getObjects("CriticalText"));
gdjs.BlacksmithCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));
gdjs.BlacksmithCode.GDGoldObjects1.createFrom(runtimeScene.getObjects("Gold"));
gdjs.BlacksmithCode.GDReforgeTextObjects1.createFrom(runtimeScene.getObjects("ReforgeText"));
gdjs.BlacksmithCode.GDShopTitleObjects1.createFrom(runtimeScene.getObjects("ShopTitle"));
gdjs.BlacksmithCode.GDTalkObjects1.createFrom(runtimeScene.getObjects("Talk"));
{for(var i = 0, len = gdjs.BlacksmithCode.GDShopTitleObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDShopTitleObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDCriticalTextObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDCriticalTextObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDReforgeTextObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDReforgeTextObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDTalkObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDTalkObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDExitObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{runtimeScene.getVariables().getFromIndex(0).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}{for(var i = 0, len = gdjs.BlacksmithCode.GDGoldObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDGoldObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}}

}


{

gdjs.BlacksmithCode.GDCriticalTextObjects1.createFrom(runtimeScene.getObjects("CriticalText"));

gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BlacksmithCode.mapOfGDgdjs_46BlacksmithCode_46GDCriticalTextObjects1Objects, runtimeScene, true, false);
}if (gdjs.BlacksmithCode.condition0IsTrue_0.val) {
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.createFrom(runtimeScene.getObjects("BlacksmithsResponse"));
gdjs.BlacksmithCode.GDCriticalDescriptionObjects1.createFrom(runtimeScene.getObjects("CriticalDescription"));
gdjs.BlacksmithCode.GDCriticalIconObjects1.createFrom(runtimeScene.getObjects("CriticalIcon"));
/* Reuse gdjs.BlacksmithCode.GDCriticalTextObjects1 */
gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.createFrom(runtimeScene.getObjects("DungeonKeyIcon"));
gdjs.BlacksmithCode.GDQuestionObjects1.createFrom(runtimeScene.getObjects("Question"));
gdjs.BlacksmithCode.GDReforgeTextObjects1.createFrom(runtimeScene.getObjects("ReforgeText"));
gdjs.BlacksmithCode.GDTalkObjects1.createFrom(runtimeScene.getObjects("Talk"));
{for(var i = 0, len = gdjs.BlacksmithCode.GDCriticalTextObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDCriticalTextObjects1[i].setColor("255;241;0");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDCriticalIconObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDCriticalIconObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDCriticalDescriptionObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDCriticalDescriptionObjects1[i].setString("Increase Critical Chance by 5%");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDCriticalDescriptionObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDCriticalDescriptionObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].returnVariable(gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDQuestionObjects1[i].returnVariable(gdjs.BlacksmithCode.GDQuestionObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].returnVariable(gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDReforgeTextObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDReforgeTextObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDTalkObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDTalkObjects1[i].returnVariable(gdjs.BlacksmithCode.GDTalkObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{ //Subevents
gdjs.BlacksmithCode.eventsList0xc94c6c(runtimeScene);} //End of subevents
}

}


{

gdjs.BlacksmithCode.GDReforgeTextObjects1.createFrom(runtimeScene.getObjects("ReforgeText"));

gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
gdjs.BlacksmithCode.condition1IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BlacksmithCode.mapOfGDgdjs_46BlacksmithCode_46GDReforgeTextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.BlacksmithCode.condition0IsTrue_0.val ) {
{
gdjs.BlacksmithCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(20)) == 0;
}}
if (gdjs.BlacksmithCode.condition1IsTrue_0.val) {
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.createFrom(runtimeScene.getObjects("BlacksmithsResponse"));
gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.createFrom(runtimeScene.getObjects("DungeonKeyIcon"));
gdjs.BlacksmithCode.GDDungeonKeyReforgedObjects1.createFrom(runtimeScene.getObjects("DungeonKeyReforged"));
gdjs.BlacksmithCode.GDQuestionObjects1.createFrom(runtimeScene.getObjects("Question"));
gdjs.BlacksmithCode.GDReforgeDescriptionObjects1.createFrom(runtimeScene.getObjects("ReforgeDescription"));
/* Reuse gdjs.BlacksmithCode.GDReforgeTextObjects1 */
gdjs.BlacksmithCode.GDTalkObjects1.createFrom(runtimeScene.getObjects("Talk"));
{for(var i = 0, len = gdjs.BlacksmithCode.GDReforgeTextObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDReforgeTextObjects1[i].setColor("255;241;0");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDDungeonKeyReforgedObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDDungeonKeyReforgedObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDReforgeDescriptionObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDReforgeDescriptionObjects1[i].setString("Requires [1] Dungeon Key Head, [1] Dungeon Key Tail");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDReforgeDescriptionObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDReforgeDescriptionObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].returnVariable(gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDQuestionObjects1[i].returnVariable(gdjs.BlacksmithCode.GDQuestionObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].returnVariable(gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDTalkObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDTalkObjects1[i].returnVariable(gdjs.BlacksmithCode.GDTalkObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{ //Subevents
gdjs.BlacksmithCode.eventsList0x130c354(runtimeScene);} //End of subevents
}

}


{


gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(20)) == 1;
}if (gdjs.BlacksmithCode.condition0IsTrue_0.val) {
gdjs.BlacksmithCode.GDReforgeDescriptionObjects1.createFrom(runtimeScene.getObjects("ReforgeDescription"));
gdjs.BlacksmithCode.GDReforgeTextObjects1.createFrom(runtimeScene.getObjects("ReforgeText"));
{for(var i = 0, len = gdjs.BlacksmithCode.GDReforgeTextObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDReforgeTextObjects1[i].setString("Reforged!");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDReforgeDescriptionObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDReforgeDescriptionObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.BlacksmithCode.GDTalkObjects1.createFrom(runtimeScene.getObjects("Talk"));

gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BlacksmithCode.mapOfGDgdjs_46BlacksmithCode_46GDTalkObjects1Objects, runtimeScene, true, false);
}if (gdjs.BlacksmithCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BlacksmithCode.GDTalkObjects1 */
{for(var i = 0, len = gdjs.BlacksmithCode.GDTalkObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDTalkObjects1[i].setColor("255;241;0");
}
}
{ //Subevents
gdjs.BlacksmithCode.eventsList0x130d99c(runtimeScene);} //End of subevents
}

}


{

gdjs.BlacksmithCode.GDQuestionObjects1.createFrom(runtimeScene.getObjects("Question"));
gdjs.BlacksmithCode.GDTalkObjects1.createFrom(runtimeScene.getObjects("Talk"));

gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
gdjs.BlacksmithCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BlacksmithCode.GDTalkObjects1.length;i<l;++i) {
    if ( gdjs.BlacksmithCode.GDTalkObjects1[i].getVariableNumber(gdjs.BlacksmithCode.GDTalkObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.BlacksmithCode.condition0IsTrue_0.val = true;
        gdjs.BlacksmithCode.GDTalkObjects1[k] = gdjs.BlacksmithCode.GDTalkObjects1[i];
        ++k;
    }
}
gdjs.BlacksmithCode.GDTalkObjects1.length = k;}if ( gdjs.BlacksmithCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BlacksmithCode.GDQuestionObjects1.length;i<l;++i) {
    if ( gdjs.BlacksmithCode.GDQuestionObjects1[i].getVariableNumber(gdjs.BlacksmithCode.GDQuestionObjects1[i].getVariables().getFromIndex(0)) <= 0.5 ) {
        gdjs.BlacksmithCode.condition1IsTrue_0.val = true;
        gdjs.BlacksmithCode.GDQuestionObjects1[k] = gdjs.BlacksmithCode.GDQuestionObjects1[i];
        ++k;
    }
}
gdjs.BlacksmithCode.GDQuestionObjects1.length = k;}}
if (gdjs.BlacksmithCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BlacksmithCode.GDQuestionObjects1 */
{for(var i = 0, len = gdjs.BlacksmithCode.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDQuestionObjects1[i].returnVariable(gdjs.BlacksmithCode.GDQuestionObjects1[i].getVariables().getFromIndex(0)).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.createFrom(runtimeScene.getObjects("BlacksmithsResponse"));
gdjs.BlacksmithCode.GDQuestionObjects1.createFrom(runtimeScene.getObjects("Question"));

gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
gdjs.BlacksmithCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BlacksmithCode.GDQuestionObjects1.length;i<l;++i) {
    if ( gdjs.BlacksmithCode.GDQuestionObjects1[i].getVariableNumber(gdjs.BlacksmithCode.GDQuestionObjects1[i].getVariables().getFromIndex(0)) >= 0.4 ) {
        gdjs.BlacksmithCode.condition0IsTrue_0.val = true;
        gdjs.BlacksmithCode.GDQuestionObjects1[k] = gdjs.BlacksmithCode.GDQuestionObjects1[i];
        ++k;
    }
}
gdjs.BlacksmithCode.GDQuestionObjects1.length = k;}if ( gdjs.BlacksmithCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.length;i<l;++i) {
    if ( gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].getVariableNumber(gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].getVariables().getFromIndex(0)) <= 0.5 ) {
        gdjs.BlacksmithCode.condition1IsTrue_0.val = true;
        gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[k] = gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i];
        ++k;
    }
}
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.length = k;}}
if (gdjs.BlacksmithCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1 */
{for(var i = 0, len = gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].setString("\"That door requires a key that has been broken into 2 pieces. If you could bring both back I will be able to reforge it for you. They should look like this:\"");
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].setOpacity(Math.sin((gdjs.RuntimeObject.getVariableNumber(gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].getVariables().getFromIndex(0))) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].returnVariable(gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].getVariables().getFromIndex(0)).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.createFrom(runtimeScene.getObjects("BlacksmithsResponse"));
gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.createFrom(runtimeScene.getObjects("DungeonKeyIcon"));

gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
gdjs.BlacksmithCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.length;i<l;++i) {
    if ( gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].getVariableNumber(gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].getVariables().getFromIndex(0)) >= 0.4 ) {
        gdjs.BlacksmithCode.condition0IsTrue_0.val = true;
        gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[k] = gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i];
        ++k;
    }
}
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.length = k;}if ( gdjs.BlacksmithCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.length;i<l;++i) {
    if ( gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].getVariableNumber(gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].getVariables().getFromIndex(0)) <= 0.5 ) {
        gdjs.BlacksmithCode.condition1IsTrue_0.val = true;
        gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[k] = gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i];
        ++k;
    }
}
gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.length = k;}}
if (gdjs.BlacksmithCode.condition1IsTrue_0.val) {
/* Reuse gdjs.BlacksmithCode.GDDungeonKeyIconObjects1 */
gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects1.createFrom(runtimeScene.getObjects("DungeonKeyIcon2"));
{for(var i = 0, len = gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].returnVariable(gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].getVariables().getFromIndex(0)).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects1[i].returnVariable(gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects1[i].getVariables().getFromIndex(0)).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.createFrom(runtimeScene.getObjects("DungeonKeyIcon"));

gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.length;i<l;++i) {
    if ( gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].getVariableNumber(gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].getVariables().getFromIndex(0)) >= 0.5 ) {
        gdjs.BlacksmithCode.condition0IsTrue_0.val = true;
        gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[k] = gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i];
        ++k;
    }
}
gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.length = k;}if (gdjs.BlacksmithCode.condition0IsTrue_0.val) {
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.createFrom(runtimeScene.getObjects("BlacksmithsResponse"));
/* Reuse gdjs.BlacksmithCode.GDDungeonKeyIconObjects1 */
gdjs.BlacksmithCode.GDQuestionObjects1.createFrom(runtimeScene.getObjects("Question"));
gdjs.BlacksmithCode.GDTalkObjects1.createFrom(runtimeScene.getObjects("Talk"));
{for(var i = 0, len = gdjs.BlacksmithCode.GDTalkObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDTalkObjects1[i].returnVariable(gdjs.BlacksmithCode.GDTalkObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].returnVariable(gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].returnVariable(gdjs.BlacksmithCode.GDDungeonKeyIconObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.BlacksmithCode.GDQuestionObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDQuestionObjects1[i].returnVariable(gdjs.BlacksmithCode.GDQuestionObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{

gdjs.BlacksmithCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));

gdjs.BlacksmithCode.condition0IsTrue_0.val = false;
{
gdjs.BlacksmithCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BlacksmithCode.mapOfGDgdjs_46BlacksmithCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if (gdjs.BlacksmithCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BlacksmithCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.BlacksmithCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.BlacksmithCode.GDExitObjects1[i].setColor("255;241;0");
}
}
{ //Subevents
gdjs.BlacksmithCode.eventsList0x130f02c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.BlacksmithCode.eventsList0x5b70b8


gdjs.BlacksmithCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BlacksmithCode.GDShopTitleObjects1.length = 0;
gdjs.BlacksmithCode.GDShopTitleObjects2.length = 0;
gdjs.BlacksmithCode.GDShopTitleObjects3.length = 0;
gdjs.BlacksmithCode.GDShopTitleObjects4.length = 0;
gdjs.BlacksmithCode.GDReforgeTextObjects1.length = 0;
gdjs.BlacksmithCode.GDReforgeTextObjects2.length = 0;
gdjs.BlacksmithCode.GDReforgeTextObjects3.length = 0;
gdjs.BlacksmithCode.GDReforgeTextObjects4.length = 0;
gdjs.BlacksmithCode.GDCriticalTextObjects1.length = 0;
gdjs.BlacksmithCode.GDCriticalTextObjects2.length = 0;
gdjs.BlacksmithCode.GDCriticalTextObjects3.length = 0;
gdjs.BlacksmithCode.GDCriticalTextObjects4.length = 0;
gdjs.BlacksmithCode.GDExitObjects1.length = 0;
gdjs.BlacksmithCode.GDExitObjects2.length = 0;
gdjs.BlacksmithCode.GDExitObjects3.length = 0;
gdjs.BlacksmithCode.GDExitObjects4.length = 0;
gdjs.BlacksmithCode.GDTalkObjects1.length = 0;
gdjs.BlacksmithCode.GDTalkObjects2.length = 0;
gdjs.BlacksmithCode.GDTalkObjects3.length = 0;
gdjs.BlacksmithCode.GDTalkObjects4.length = 0;
gdjs.BlacksmithCode.GDReforgeDescriptionObjects1.length = 0;
gdjs.BlacksmithCode.GDReforgeDescriptionObjects2.length = 0;
gdjs.BlacksmithCode.GDReforgeDescriptionObjects3.length = 0;
gdjs.BlacksmithCode.GDReforgeDescriptionObjects4.length = 0;
gdjs.BlacksmithCode.GDCriticalDescriptionObjects1.length = 0;
gdjs.BlacksmithCode.GDCriticalDescriptionObjects2.length = 0;
gdjs.BlacksmithCode.GDCriticalDescriptionObjects3.length = 0;
gdjs.BlacksmithCode.GDCriticalDescriptionObjects4.length = 0;
gdjs.BlacksmithCode.GDQuestionObjects1.length = 0;
gdjs.BlacksmithCode.GDQuestionObjects2.length = 0;
gdjs.BlacksmithCode.GDQuestionObjects3.length = 0;
gdjs.BlacksmithCode.GDQuestionObjects4.length = 0;
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects1.length = 0;
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects2.length = 0;
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects3.length = 0;
gdjs.BlacksmithCode.GDBlacksmithsResponseObjects4.length = 0;
gdjs.BlacksmithCode.GDCriticalIconObjects1.length = 0;
gdjs.BlacksmithCode.GDCriticalIconObjects2.length = 0;
gdjs.BlacksmithCode.GDCriticalIconObjects3.length = 0;
gdjs.BlacksmithCode.GDCriticalIconObjects4.length = 0;
gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects1.length = 0;
gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects2.length = 0;
gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects3.length = 0;
gdjs.BlacksmithCode.GDDungeonKeyIcon2Objects4.length = 0;
gdjs.BlacksmithCode.GDDungeonKeyIconObjects1.length = 0;
gdjs.BlacksmithCode.GDDungeonKeyIconObjects2.length = 0;
gdjs.BlacksmithCode.GDDungeonKeyIconObjects3.length = 0;
gdjs.BlacksmithCode.GDDungeonKeyIconObjects4.length = 0;
gdjs.BlacksmithCode.GDGoldObjects1.length = 0;
gdjs.BlacksmithCode.GDGoldObjects2.length = 0;
gdjs.BlacksmithCode.GDGoldObjects3.length = 0;
gdjs.BlacksmithCode.GDGoldObjects4.length = 0;
gdjs.BlacksmithCode.GDDungeonKeyReforgedObjects1.length = 0;
gdjs.BlacksmithCode.GDDungeonKeyReforgedObjects2.length = 0;
gdjs.BlacksmithCode.GDDungeonKeyReforgedObjects3.length = 0;
gdjs.BlacksmithCode.GDDungeonKeyReforgedObjects4.length = 0;

gdjs.BlacksmithCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['BlacksmithCode'] = gdjs.BlacksmithCode;
