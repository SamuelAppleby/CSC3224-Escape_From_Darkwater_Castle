gdjs.ShopCode = {};
gdjs.ShopCode.GDShopTitleObjects1= [];
gdjs.ShopCode.GDShopTitleObjects2= [];
gdjs.ShopCode.GDShopTitleObjects3= [];
gdjs.ShopCode.GDShopTitleObjects4= [];
gdjs.ShopCode.GDHealthTextObjects1= [];
gdjs.ShopCode.GDHealthTextObjects2= [];
gdjs.ShopCode.GDHealthTextObjects3= [];
gdjs.ShopCode.GDHealthTextObjects4= [];
gdjs.ShopCode.GDExperienceTextObjects1= [];
gdjs.ShopCode.GDExperienceTextObjects2= [];
gdjs.ShopCode.GDExperienceTextObjects3= [];
gdjs.ShopCode.GDExperienceTextObjects4= [];
gdjs.ShopCode.GDExitObjects1= [];
gdjs.ShopCode.GDExitObjects2= [];
gdjs.ShopCode.GDExitObjects3= [];
gdjs.ShopCode.GDExitObjects4= [];
gdjs.ShopCode.GDDamageTextObjects1= [];
gdjs.ShopCode.GDDamageTextObjects2= [];
gdjs.ShopCode.GDDamageTextObjects3= [];
gdjs.ShopCode.GDDamageTextObjects4= [];
gdjs.ShopCode.GDHealthDescriptionObjects1= [];
gdjs.ShopCode.GDHealthDescriptionObjects2= [];
gdjs.ShopCode.GDHealthDescriptionObjects3= [];
gdjs.ShopCode.GDHealthDescriptionObjects4= [];
gdjs.ShopCode.GDExperienceDescriptionObjects1= [];
gdjs.ShopCode.GDExperienceDescriptionObjects2= [];
gdjs.ShopCode.GDExperienceDescriptionObjects3= [];
gdjs.ShopCode.GDExperienceDescriptionObjects4= [];
gdjs.ShopCode.GDDamageDescriptionObjects1= [];
gdjs.ShopCode.GDDamageDescriptionObjects2= [];
gdjs.ShopCode.GDDamageDescriptionObjects3= [];
gdjs.ShopCode.GDDamageDescriptionObjects4= [];
gdjs.ShopCode.GDHealthPotionObjects1= [];
gdjs.ShopCode.GDHealthPotionObjects2= [];
gdjs.ShopCode.GDHealthPotionObjects3= [];
gdjs.ShopCode.GDHealthPotionObjects4= [];
gdjs.ShopCode.GDExperiencePotionObjects1= [];
gdjs.ShopCode.GDExperiencePotionObjects2= [];
gdjs.ShopCode.GDExperiencePotionObjects3= [];
gdjs.ShopCode.GDExperiencePotionObjects4= [];
gdjs.ShopCode.GDDamagePotionObjects1= [];
gdjs.ShopCode.GDDamagePotionObjects2= [];
gdjs.ShopCode.GDDamagePotionObjects3= [];
gdjs.ShopCode.GDDamagePotionObjects4= [];
gdjs.ShopCode.GDGoldObjects1= [];
gdjs.ShopCode.GDGoldObjects2= [];
gdjs.ShopCode.GDGoldObjects3= [];
gdjs.ShopCode.GDGoldObjects4= [];

gdjs.ShopCode.conditionTrue_0 = {val:false};
gdjs.ShopCode.condition0IsTrue_0 = {val:false};
gdjs.ShopCode.condition1IsTrue_0 = {val:false};
gdjs.ShopCode.condition2IsTrue_0 = {val:false};
gdjs.ShopCode.conditionTrue_1 = {val:false};
gdjs.ShopCode.condition0IsTrue_1 = {val:false};
gdjs.ShopCode.condition1IsTrue_1 = {val:false};
gdjs.ShopCode.condition2IsTrue_1 = {val:false};


gdjs.ShopCode.eventsList0x98ed4c = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition0IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19916572);
}
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ShopCode.GDShopTitleObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDShopTitleObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopTitleObjects1[i].setOpacity(0);
}
}}

}


}; //End of gdjs.ShopCode.eventsList0x98ed4c
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDHealthTextObjects1Objects = Hashtable.newFrom({"HealthText": gdjs.ShopCode.GDHealthTextObjects1});gdjs.ShopCode.eventsList0x12ffd2c = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) >= 3;
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19922716);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDHealthTextObjects3.createFrom(gdjs.ShopCode.GDHealthTextObjects1);

{for(var i = 0, len = gdjs.ShopCode.GDHealthTextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDHealthTextObjects3[i].setString("Inventory Full");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Denied.wav", false, 100, 1);
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) < 3;
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19923436);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ShopPurchase.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).sub(200);
}{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


}; //End of gdjs.ShopCode.eventsList0x12ffd2c
gdjs.ShopCode.eventsList0x12ffb84 = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) >= 200;
}if (gdjs.ShopCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ShopCode.eventsList0x12ffd2c(runtimeScene);} //End of subevents
}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 200;
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
gdjs.ShopCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
/* Reuse gdjs.ShopCode.GDHealthTextObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDHealthTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDHealthTextObjects1[i].setString("Not Enough Gold");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Denied.wav", false, 100, 1);
}}

}


}; //End of gdjs.ShopCode.eventsList0x12ffb84
gdjs.ShopCode.eventsList0x12ff72c = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}
{ //Subevents
gdjs.ShopCode.eventsList0x12ffb84(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.ShopCode.eventsList0x12ff72c
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDDamageTextObjects1Objects = Hashtable.newFrom({"DamageText": gdjs.ShopCode.GDDamageTextObjects1});gdjs.ShopCode.eventsList0x1300ffc = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) >= 3;
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19927532);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDDamageTextObjects3.createFrom(gdjs.ShopCode.GDDamageTextObjects1);

{for(var i = 0, len = gdjs.ShopCode.GDDamageTextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDDamageTextObjects3[i].setString("Inventory Full");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Denied.wav", false, 100, 1);
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) < 3;
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19928340);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ShopPurchase.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).sub(150);
}{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


}; //End of gdjs.ShopCode.eventsList0x1300ffc
gdjs.ShopCode.eventsList0x1300e54 = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) >= 150;
}if (gdjs.ShopCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ShopCode.eventsList0x1300ffc(runtimeScene);} //End of subevents
}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 150;
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
gdjs.ShopCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
/* Reuse gdjs.ShopCode.GDDamageTextObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDDamageTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDDamageTextObjects1[i].setString("Not Enough Gold");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Denied.wav", false, 100, 1);
}}

}


}; //End of gdjs.ShopCode.eventsList0x1300e54
gdjs.ShopCode.eventsList0x13009d4 = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}
{ //Subevents
gdjs.ShopCode.eventsList0x1300e54(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.ShopCode.eventsList0x13009d4
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDExperienceTextObjects1Objects = Hashtable.newFrom({"ExperienceText": gdjs.ShopCode.GDExperienceTextObjects1});gdjs.ShopCode.eventsList0x1302374 = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) >= 3;
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19932516);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
gdjs.ShopCode.GDExperienceTextObjects3.createFrom(gdjs.ShopCode.GDExperienceTextObjects1);

{for(var i = 0, len = gdjs.ShopCode.GDExperienceTextObjects3.length ;i < len;++i) {
    gdjs.ShopCode.GDExperienceTextObjects3[i].setString("Inventory Full");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Denied.wav", false, 100, 1);
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) < 3;
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
{gdjs.ShopCode.conditionTrue_1 = gdjs.ShopCode.condition1IsTrue_0;
gdjs.ShopCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(19933348);
}
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ShopPurchase.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(4).sub(100);
}{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


}; //End of gdjs.ShopCode.eventsList0x1302374
gdjs.ShopCode.eventsList0x13021cc = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) >= 100;
}if (gdjs.ShopCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ShopCode.eventsList0x1302374(runtimeScene);} //End of subevents
}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) < 100;
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
gdjs.ShopCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
/* Reuse gdjs.ShopCode.GDExperienceTextObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDExperienceTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDExperienceTextObjects1[i].setString("Not Enough Gold");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Denied.wav", false, 100, 1);
}}

}


}; //End of gdjs.ShopCode.eventsList0x13021cc
gdjs.ShopCode.eventsList0x1301d44 = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}
{ //Subevents
gdjs.ShopCode.eventsList0x13021cc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.ShopCode.eventsList0x1301d44
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.ShopCode.GDExitObjects1});gdjs.ShopCode.eventsList0x13030b4 = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0);
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.ShopCode.eventsList0x13030b4
gdjs.ShopCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
gdjs.ShopCode.GDDamageTextObjects1.createFrom(runtimeScene.getObjects("DamageText"));
gdjs.ShopCode.GDExperienceTextObjects1.createFrom(runtimeScene.getObjects("ExperienceText"));
gdjs.ShopCode.GDHealthTextObjects1.createFrom(runtimeScene.getObjects("HealthText"));
gdjs.ShopCode.GDShopTitleObjects1.createFrom(runtimeScene.getObjects("ShopTitle"));
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Escape From Darkwater Castle");
}{for(var i = 0, len = gdjs.ShopCode.GDShopTitleObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopTitleObjects1[i].setString("Shop");
}
}{for(var i = 0, len = gdjs.ShopCode.GDHealthTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDHealthTextObjects1[i].setString("Health Potion [200 Gold]");
}
}{for(var i = 0, len = gdjs.ShopCode.GDDamageTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDDamageTextObjects1[i].setString("Damage Potion [150 Gold]");
}
}{for(var i = 0, len = gdjs.ShopCode.GDExperienceTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDExperienceTextObjects1[i].setString("Experience Potion [100 Gold]");
}
}
{ //Subevents
gdjs.ShopCode.eventsList0x98ed4c(runtimeScene);} //End of subevents
}

}


{


{
gdjs.ShopCode.GDDamageDescriptionObjects1.createFrom(runtimeScene.getObjects("DamageDescription"));
gdjs.ShopCode.GDDamagePotionObjects1.createFrom(runtimeScene.getObjects("DamagePotion"));
gdjs.ShopCode.GDDamageTextObjects1.createFrom(runtimeScene.getObjects("DamageText"));
gdjs.ShopCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));
gdjs.ShopCode.GDExperienceDescriptionObjects1.createFrom(runtimeScene.getObjects("ExperienceDescription"));
gdjs.ShopCode.GDExperiencePotionObjects1.createFrom(runtimeScene.getObjects("ExperiencePotion"));
gdjs.ShopCode.GDExperienceTextObjects1.createFrom(runtimeScene.getObjects("ExperienceText"));
gdjs.ShopCode.GDGoldObjects1.createFrom(runtimeScene.getObjects("Gold"));
gdjs.ShopCode.GDHealthDescriptionObjects1.createFrom(runtimeScene.getObjects("HealthDescription"));
gdjs.ShopCode.GDHealthPotionObjects1.createFrom(runtimeScene.getObjects("HealthPotion"));
gdjs.ShopCode.GDHealthTextObjects1.createFrom(runtimeScene.getObjects("HealthText"));
{for(var i = 0, len = gdjs.ShopCode.GDDamageTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDDamageTextObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.ShopCode.GDHealthTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDHealthTextObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.ShopCode.GDExperienceTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDExperienceTextObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.ShopCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDExitObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.ShopCode.GDDamagePotionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDDamagePotionObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.ShopCode.GDHealthPotionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDHealthPotionObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.ShopCode.GDExperiencePotionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDExperiencePotionObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.ShopCode.GDHealthDescriptionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDHealthDescriptionObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.ShopCode.GDDamageDescriptionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDDamageDescriptionObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.ShopCode.GDExperienceDescriptionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDExperienceDescriptionObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.ShopCode.GDGoldObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDGoldObjects1[i].setString("Gold: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)));
}
}}

}


{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) < 0.5;
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
gdjs.ShopCode.GDDamageTextObjects1.createFrom(runtimeScene.getObjects("DamageText"));
gdjs.ShopCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));
gdjs.ShopCode.GDExperienceTextObjects1.createFrom(runtimeScene.getObjects("ExperienceText"));
gdjs.ShopCode.GDGoldObjects1.createFrom(runtimeScene.getObjects("Gold"));
gdjs.ShopCode.GDHealthTextObjects1.createFrom(runtimeScene.getObjects("HealthText"));
gdjs.ShopCode.GDShopTitleObjects1.createFrom(runtimeScene.getObjects("ShopTitle"));
{for(var i = 0, len = gdjs.ShopCode.GDShopTitleObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDShopTitleObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.ShopCode.GDHealthTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDHealthTextObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.ShopCode.GDDamageTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDDamageTextObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.ShopCode.GDExperienceTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDExperienceTextObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{for(var i = 0, len = gdjs.ShopCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDExitObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}{runtimeScene.getVariables().getFromIndex(0).add(0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}{for(var i = 0, len = gdjs.ShopCode.GDGoldObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDGoldObjects1[i].setOpacity(Math.sin(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 3.14159) * 200);
}
}}

}


{

gdjs.ShopCode.GDHealthTextObjects1.createFrom(runtimeScene.getObjects("HealthText"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDHealthTextObjects1Objects, runtimeScene, true, false);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
gdjs.ShopCode.GDHealthDescriptionObjects1.createFrom(runtimeScene.getObjects("HealthDescription"));
gdjs.ShopCode.GDHealthPotionObjects1.createFrom(runtimeScene.getObjects("HealthPotion"));
/* Reuse gdjs.ShopCode.GDHealthTextObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDHealthTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDHealthTextObjects1[i].setColor("255;241;0");
}
}{for(var i = 0, len = gdjs.ShopCode.GDHealthPotionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDHealthPotionObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ShopCode.GDHealthDescriptionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDHealthDescriptionObjects1[i].setString("Restores maximum health");
}
}{for(var i = 0, len = gdjs.ShopCode.GDHealthDescriptionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDHealthDescriptionObjects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs.ShopCode.eventsList0x12ff72c(runtimeScene);} //End of subevents
}

}


{

gdjs.ShopCode.GDDamageTextObjects1.createFrom(runtimeScene.getObjects("DamageText"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDDamageTextObjects1Objects, runtimeScene, true, false);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
gdjs.ShopCode.GDDamageDescriptionObjects1.createFrom(runtimeScene.getObjects("DamageDescription"));
gdjs.ShopCode.GDDamagePotionObjects1.createFrom(runtimeScene.getObjects("DamagePotion"));
/* Reuse gdjs.ShopCode.GDDamageTextObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDDamageTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDDamageTextObjects1[i].setColor("255;241;0");
}
}{for(var i = 0, len = gdjs.ShopCode.GDDamagePotionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDDamagePotionObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ShopCode.GDDamageDescriptionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDDamageDescriptionObjects1[i].setString("Increase damage by 100% for 15 seconds");
}
}{for(var i = 0, len = gdjs.ShopCode.GDDamageDescriptionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDDamageDescriptionObjects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs.ShopCode.eventsList0x13009d4(runtimeScene);} //End of subevents
}

}


{

gdjs.ShopCode.GDExperienceTextObjects1.createFrom(runtimeScene.getObjects("ExperienceText"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDExperienceTextObjects1Objects, runtimeScene, true, false);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
gdjs.ShopCode.GDExperienceDescriptionObjects1.createFrom(runtimeScene.getObjects("ExperienceDescription"));
gdjs.ShopCode.GDExperiencePotionObjects1.createFrom(runtimeScene.getObjects("ExperiencePotion"));
/* Reuse gdjs.ShopCode.GDExperienceTextObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDExperienceTextObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDExperienceTextObjects1[i].setColor("255;241;0");
}
}{for(var i = 0, len = gdjs.ShopCode.GDExperiencePotionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDExperiencePotionObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.ShopCode.GDExperienceDescriptionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDExperienceDescriptionObjects1[i].setString("Instantly gain 100 XP");
}
}{for(var i = 0, len = gdjs.ShopCode.GDExperienceDescriptionObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDExperienceDescriptionObjects1[i].setOpacity(255);
}
}
{ //Subevents
gdjs.ShopCode.eventsList0x1301d44(runtimeScene);} //End of subevents
}

}


{

gdjs.ShopCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ShopCode.GDExitObjects1 */
{for(var i = 0, len = gdjs.ShopCode.GDExitObjects1.length ;i < len;++i) {
    gdjs.ShopCode.GDExitObjects1[i].setColor("255;241;0");
}
}
{ //Subevents
gdjs.ShopCode.eventsList0x13030b4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.ShopCode.eventsList0x5b70b8


gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDShopTitleObjects1.length = 0;
gdjs.ShopCode.GDShopTitleObjects2.length = 0;
gdjs.ShopCode.GDShopTitleObjects3.length = 0;
gdjs.ShopCode.GDShopTitleObjects4.length = 0;
gdjs.ShopCode.GDHealthTextObjects1.length = 0;
gdjs.ShopCode.GDHealthTextObjects2.length = 0;
gdjs.ShopCode.GDHealthTextObjects3.length = 0;
gdjs.ShopCode.GDHealthTextObjects4.length = 0;
gdjs.ShopCode.GDExperienceTextObjects1.length = 0;
gdjs.ShopCode.GDExperienceTextObjects2.length = 0;
gdjs.ShopCode.GDExperienceTextObjects3.length = 0;
gdjs.ShopCode.GDExperienceTextObjects4.length = 0;
gdjs.ShopCode.GDExitObjects1.length = 0;
gdjs.ShopCode.GDExitObjects2.length = 0;
gdjs.ShopCode.GDExitObjects3.length = 0;
gdjs.ShopCode.GDExitObjects4.length = 0;
gdjs.ShopCode.GDDamageTextObjects1.length = 0;
gdjs.ShopCode.GDDamageTextObjects2.length = 0;
gdjs.ShopCode.GDDamageTextObjects3.length = 0;
gdjs.ShopCode.GDDamageTextObjects4.length = 0;
gdjs.ShopCode.GDHealthDescriptionObjects1.length = 0;
gdjs.ShopCode.GDHealthDescriptionObjects2.length = 0;
gdjs.ShopCode.GDHealthDescriptionObjects3.length = 0;
gdjs.ShopCode.GDHealthDescriptionObjects4.length = 0;
gdjs.ShopCode.GDExperienceDescriptionObjects1.length = 0;
gdjs.ShopCode.GDExperienceDescriptionObjects2.length = 0;
gdjs.ShopCode.GDExperienceDescriptionObjects3.length = 0;
gdjs.ShopCode.GDExperienceDescriptionObjects4.length = 0;
gdjs.ShopCode.GDDamageDescriptionObjects1.length = 0;
gdjs.ShopCode.GDDamageDescriptionObjects2.length = 0;
gdjs.ShopCode.GDDamageDescriptionObjects3.length = 0;
gdjs.ShopCode.GDDamageDescriptionObjects4.length = 0;
gdjs.ShopCode.GDHealthPotionObjects1.length = 0;
gdjs.ShopCode.GDHealthPotionObjects2.length = 0;
gdjs.ShopCode.GDHealthPotionObjects3.length = 0;
gdjs.ShopCode.GDHealthPotionObjects4.length = 0;
gdjs.ShopCode.GDExperiencePotionObjects1.length = 0;
gdjs.ShopCode.GDExperiencePotionObjects2.length = 0;
gdjs.ShopCode.GDExperiencePotionObjects3.length = 0;
gdjs.ShopCode.GDExperiencePotionObjects4.length = 0;
gdjs.ShopCode.GDDamagePotionObjects1.length = 0;
gdjs.ShopCode.GDDamagePotionObjects2.length = 0;
gdjs.ShopCode.GDDamagePotionObjects3.length = 0;
gdjs.ShopCode.GDDamagePotionObjects4.length = 0;
gdjs.ShopCode.GDGoldObjects1.length = 0;
gdjs.ShopCode.GDGoldObjects2.length = 0;
gdjs.ShopCode.GDGoldObjects3.length = 0;
gdjs.ShopCode.GDGoldObjects4.length = 0;

gdjs.ShopCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
