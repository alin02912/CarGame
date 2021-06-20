gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDCarObjects1_1final = [];

gdjs.New_32sceneCode.GDCarObjects1= [];
gdjs.New_32sceneCode.GDCarObjects2= [];
gdjs.New_32sceneCode.GDCarObjects3= [];
gdjs.New_32sceneCode.GDBuildingObjects1= [];
gdjs.New_32sceneCode.GDBuildingObjects2= [];
gdjs.New_32sceneCode.GDBuildingObjects3= [];
gdjs.New_32sceneCode.GDRoadObjects1= [];
gdjs.New_32sceneCode.GDRoadObjects2= [];
gdjs.New_32sceneCode.GDRoadObjects3= [];
gdjs.New_32sceneCode.GDIntersectionObjects1= [];
gdjs.New_32sceneCode.GDIntersectionObjects2= [];
gdjs.New_32sceneCode.GDIntersectionObjects3= [];
gdjs.New_32sceneCode.GDIntersection2Objects1= [];
gdjs.New_32sceneCode.GDIntersection2Objects2= [];
gdjs.New_32sceneCode.GDIntersection2Objects3= [];
gdjs.New_32sceneCode.GDTurnObjects1= [];
gdjs.New_32sceneCode.GDTurnObjects2= [];
gdjs.New_32sceneCode.GDTurnObjects3= [];
gdjs.New_32sceneCode.GDMapObjects1= [];
gdjs.New_32sceneCode.GDMapObjects2= [];
gdjs.New_32sceneCode.GDMapObjects3= [];
gdjs.New_32sceneCode.GDColliderObjects1= [];
gdjs.New_32sceneCode.GDColliderObjects2= [];
gdjs.New_32sceneCode.GDColliderObjects3= [];
gdjs.New_32sceneCode.GDTopArrowRoundButtonObjects1= [];
gdjs.New_32sceneCode.GDTopArrowRoundButtonObjects2= [];
gdjs.New_32sceneCode.GDTopArrowRoundButtonObjects3= [];
gdjs.New_32sceneCode.GDTurnLeftColliderObjects1= [];
gdjs.New_32sceneCode.GDTurnLeftColliderObjects2= [];
gdjs.New_32sceneCode.GDTurnLeftColliderObjects3= [];
gdjs.New_32sceneCode.GDThreePointTurnObjects1= [];
gdjs.New_32sceneCode.GDThreePointTurnObjects2= [];
gdjs.New_32sceneCode.GDThreePointTurnObjects3= [];
gdjs.New_32sceneCode.GDTurnRightColliderObjects1= [];
gdjs.New_32sceneCode.GDTurnRightColliderObjects2= [];
gdjs.New_32sceneCode.GDTurnRightColliderObjects3= [];
gdjs.New_32sceneCode.GDRouteCompleteColliderObjects1= [];
gdjs.New_32sceneCode.GDRouteCompleteColliderObjects2= [];
gdjs.New_32sceneCode.GDRouteCompleteColliderObjects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "resources\\vroom.wav", 1, true, 50, 1);
}}

}


};gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.New_32sceneCode.GDCarObjects2 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects2[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects2[i].getVariables().get("TurnRate")) <= 95 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCarObjects2[k] = gdjs.New_32sceneCode.GDCarObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects2[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects2[i].getVariables().get("TurnRate")).add(10);
}
}}

}


};gdjs.New_32sceneCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("TurnRate")) >= -(95) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCarObjects1[k] = gdjs.New_32sceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("TurnRate")).sub(10);
}
}}

}


};gdjs.New_32sceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.New_32sceneCode.GDCarObjects1, gdjs.New_32sceneCode.GDCarObjects2);

{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects2[i].setDirectionOrAngle(gdjs.New_32sceneCode.GDCarObjects2[i].getDirectionOrAngle() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.New_32sceneCode.GDCarObjects2[i].getVariables().get("TurnRate"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].setDirectionOrAngle(gdjs.New_32sceneCode.GDCarObjects1[i].getDirectionOrAngle() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("TurnRate"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.New_32sceneCode.eventsList4 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7744508);
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].setAnimation(1);
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.New_32sceneCode.GDCarObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDColliderObjects1Objects = Hashtable.newFrom({"Collider": gdjs.New_32sceneCode.GDColliderObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDColliderObjects1Objects = Hashtable.newFrom({"Collider": gdjs.New_32sceneCode.GDColliderObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.New_32sceneCode.GDCarObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDColliderObjects1Objects = Hashtable.newFrom({"Collider": gdjs.New_32sceneCode.GDColliderObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs.New_32sceneCode.GDCarObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTurnLeftColliderObjects1ObjectsGDgdjs_46New_9532sceneCode_46GDTurnRightColliderObjects1ObjectsGDgdjs_46New_9532sceneCode_46GDThreePointTurnObjects1ObjectsGDgdjs_46New_9532sceneCode_46GDRouteCompleteColliderObjects1Objects = Hashtable.newFrom({"TurnLeftCollider": gdjs.New_32sceneCode.GDTurnLeftColliderObjects1, "TurnRightCollider": gdjs.New_32sceneCode.GDTurnRightColliderObjects1, "ThreePointTurn": gdjs.New_32sceneCode.GDThreePointTurnObjects1, "RouteCompleteCollider": gdjs.New_32sceneCode.GDRouteCompleteColliderObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.New_32sceneCode.GDCarObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTurnLeftColliderObjects2Objects = Hashtable.newFrom({"TurnLeftCollider": gdjs.New_32sceneCode.GDTurnLeftColliderObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.New_32sceneCode.GDCarObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDThreePointTurnObjects2Objects = Hashtable.newFrom({"ThreePointTurn": gdjs.New_32sceneCode.GDThreePointTurnObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.New_32sceneCode.GDCarObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTurnRightColliderObjects2Objects = Hashtable.newFrom({"TurnRightCollider": gdjs.New_32sceneCode.GDTurnRightColliderObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.New_32sceneCode.GDCarObjects2});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRouteCompleteColliderObjects2Objects = Hashtable.newFrom({"RouteCompleteCollider": gdjs.New_32sceneCode.GDRouteCompleteColliderObjects2});gdjs.New_32sceneCode.userFunc0x75c2e8 = function(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);
var variables = runtimeScene.getVariables();
var speech = variables.get("speech").getAsString();
speak(speech);
 
// say a message

function speak(text, callback) {
 var u = new SpeechSynthesisUtterance();
 u.text = text;
 u.lang = 'en-US';
 
 u.onend = function () {
 if (callback) {
 callback();
 }
 };
 
 u.onerror = function (e) {
 if (callback) {
 callback(e);
 }
 };
 
 speechSynthesis.speak(u);
}

};
gdjs.New_32sceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.New_32sceneCode.userFunc0x75c2e8(runtimeScene);

}


};gdjs.New_32sceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32sceneCode.GDCarObjects1, gdjs.New_32sceneCode.GDCarObjects2);

gdjs.copyArray(gdjs.New_32sceneCode.GDTurnLeftColliderObjects1, gdjs.New_32sceneCode.GDTurnLeftColliderObjects2);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects2Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTurnLeftColliderObjects2Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDTurnLeftColliderObjects2 */
{runtimeScene.getVariables().getFromIndex(0).setString("Turn left");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDTurnLeftColliderObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDTurnLeftColliderObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(gdjs.New_32sceneCode.GDCarObjects1, gdjs.New_32sceneCode.GDCarObjects2);

gdjs.copyArray(gdjs.New_32sceneCode.GDThreePointTurnObjects1, gdjs.New_32sceneCode.GDThreePointTurnObjects2);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects2Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDThreePointTurnObjects2Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDThreePointTurnObjects2 */
{runtimeScene.getVariables().getFromIndex(0).setString("Perform a three point turn");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDThreePointTurnObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDThreePointTurnObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(gdjs.New_32sceneCode.GDCarObjects1, gdjs.New_32sceneCode.GDCarObjects2);

gdjs.copyArray(gdjs.New_32sceneCode.GDTurnRightColliderObjects1, gdjs.New_32sceneCode.GDTurnRightColliderObjects2);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects2Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTurnRightColliderObjects2Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDTurnRightColliderObjects2 */
{runtimeScene.getVariables().getFromIndex(0).setString("Turn Right");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDTurnRightColliderObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDTurnRightColliderObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(gdjs.New_32sceneCode.GDCarObjects1, gdjs.New_32sceneCode.GDCarObjects2);

gdjs.copyArray(gdjs.New_32sceneCode.GDRouteCompleteColliderObjects1, gdjs.New_32sceneCode.GDRouteCompleteColliderObjects2);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects2Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDRouteCompleteColliderObjects2Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDRouteCompleteColliderObjects2 */
{runtimeScene.getVariables().getFromIndex(0).setString("Route Complete, Goodbye!");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(4).setNumber(1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDRouteCompleteColliderObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRouteCompleteColliderObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}
{ //Subevents
gdjs.New_32sceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.New_32sceneCode.eventsList7 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Collider"), gdjs.New_32sceneCode.GDColliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("RouteCompleteCollider"), gdjs.New_32sceneCode.GDRouteCompleteColliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("ThreePointTurn"), gdjs.New_32sceneCode.GDThreePointTurnObjects1);
gdjs.copyArray(runtimeScene.getObjects("TurnLeftCollider"), gdjs.New_32sceneCode.GDTurnLeftColliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("TurnRightCollider"), gdjs.New_32sceneCode.GDTurnRightColliderObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDColliderObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDColliderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDTurnLeftColliderObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDTurnLeftColliderObjects1[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDTurnRightColliderObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDTurnRightColliderObjects1[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDThreePointTurnObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDThreePointTurnObjects1[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDRouteCompleteColliderObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRouteCompleteColliderObjects1[i].hide();
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);
{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 1, 0.1 + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.New_32sceneCode.GDCarObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.New_32sceneCode.GDCarObjects1[0].getVariables()).get("acceleration"))) / 200));
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right"));
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left"));
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("TurnRate")).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDCarObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")) < -(20)) ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCarObjects1[k] = gdjs.New_32sceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")) < -(20) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCarObjects1[k] = gdjs.New_32sceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].setAnimation(2);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("TurnRate")).setNumber(0);
}
}}

}


{

gdjs.New_32sceneCode.GDCarObjects1.length = 0;


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.GDCarObjects1_1final.length = 0;gdjs.New_32sceneCode.condition0IsTrue_1.val = false;
gdjs.New_32sceneCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects2);
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects2[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects2[i].getVariables().get("acceleration")) > 20 ) {
        gdjs.New_32sceneCode.condition0IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDCarObjects2[k] = gdjs.New_32sceneCode.GDCarObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects2.length = k;if( gdjs.New_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDCarObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDCarObjects1_1final.indexOf(gdjs.New_32sceneCode.GDCarObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDCarObjects1_1final.push(gdjs.New_32sceneCode.GDCarObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects2);
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects2[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects2[i].getVariables().get("acceleration")) < -(20) ) {
        gdjs.New_32sceneCode.condition1IsTrue_1.val = true;
        gdjs.New_32sceneCode.GDCarObjects2[k] = gdjs.New_32sceneCode.GDCarObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects2.length = k;if( gdjs.New_32sceneCode.condition1IsTrue_1.val ) {
    gdjs.New_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.New_32sceneCode.GDCarObjects2.length;j<jLen;++j) {
        if ( gdjs.New_32sceneCode.GDCarObjects1_1final.indexOf(gdjs.New_32sceneCode.GDCarObjects2[j]) === -1 )
            gdjs.New_32sceneCode.GDCarObjects1_1final.push(gdjs.New_32sceneCode.GDCarObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.New_32sceneCode.GDCarObjects1_1final, gdjs.New_32sceneCode.GDCarObjects1);
}
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")) < 500 ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCarObjects1[k] = gdjs.New_32sceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")).add(200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")) > -(75) ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCarObjects1[k] = gdjs.New_32sceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")).sub(150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].addPolarForce((gdjs.New_32sceneCode.GDCarObjects1[i].getDirectionOrAngle()), (gdjs.RuntimeObject.getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration"))), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")) > 0 ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCarObjects1[k] = gdjs.New_32sceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")).sub(30 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Collider"), gdjs.New_32sceneCode.GDColliderObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDColliderObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
/* Reuse gdjs.New_32sceneCode.GDColliderObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].separateFromObjectsList(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDColliderObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Collider"), gdjs.New_32sceneCode.GDColliderObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDColliderObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCarObjects1[i].getVariableNumber(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")) > 100 ) {
        gdjs.New_32sceneCode.condition1IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDCarObjects1[k] = gdjs.New_32sceneCode.GDCarObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCarObjects1.length = k;}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCarObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCarObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCarObjects1[i].returnVariable(gdjs.New_32sceneCode.GDCarObjects1[i].getVariables().get("acceleration")).setNumber(100);
}
}}

}


{


{
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.New_32sceneCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarObjects1[0].getPointX("")) + 267 * Math.cos((( gdjs.New_32sceneCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarObjects1[0].getDirectionOrAngle()) * 3.1415 / 180) + 50, "", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.New_32sceneCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarObjects1[0].getPointY("")) + 150 * Math.sin(3.1415 * (( gdjs.New_32sceneCode.GDCarObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCarObjects1[0].getDirectionOrAngle()) / 180) + 25, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.New_32sceneCode.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("RouteCompleteCollider"), gdjs.New_32sceneCode.GDRouteCompleteColliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("ThreePointTurn"), gdjs.New_32sceneCode.GDThreePointTurnObjects1);
gdjs.copyArray(runtimeScene.getObjects("TurnLeftCollider"), gdjs.New_32sceneCode.GDTurnLeftColliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("TurnRightCollider"), gdjs.New_32sceneCode.GDTurnRightColliderObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCarObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDTurnLeftColliderObjects1ObjectsGDgdjs_46New_9532sceneCode_46GDTurnRightColliderObjects1ObjectsGDgdjs_46New_9532sceneCode_46GDThreePointTurnObjects1ObjectsGDgdjs_46New_9532sceneCode_46GDRouteCompleteColliderObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7799468);
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "GoodbyeTimer");
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDCarObjects1.length = 0;
gdjs.New_32sceneCode.GDCarObjects2.length = 0;
gdjs.New_32sceneCode.GDCarObjects3.length = 0;
gdjs.New_32sceneCode.GDBuildingObjects1.length = 0;
gdjs.New_32sceneCode.GDBuildingObjects2.length = 0;
gdjs.New_32sceneCode.GDBuildingObjects3.length = 0;
gdjs.New_32sceneCode.GDRoadObjects1.length = 0;
gdjs.New_32sceneCode.GDRoadObjects2.length = 0;
gdjs.New_32sceneCode.GDRoadObjects3.length = 0;
gdjs.New_32sceneCode.GDIntersectionObjects1.length = 0;
gdjs.New_32sceneCode.GDIntersectionObjects2.length = 0;
gdjs.New_32sceneCode.GDIntersectionObjects3.length = 0;
gdjs.New_32sceneCode.GDIntersection2Objects1.length = 0;
gdjs.New_32sceneCode.GDIntersection2Objects2.length = 0;
gdjs.New_32sceneCode.GDIntersection2Objects3.length = 0;
gdjs.New_32sceneCode.GDTurnObjects1.length = 0;
gdjs.New_32sceneCode.GDTurnObjects2.length = 0;
gdjs.New_32sceneCode.GDTurnObjects3.length = 0;
gdjs.New_32sceneCode.GDMapObjects1.length = 0;
gdjs.New_32sceneCode.GDMapObjects2.length = 0;
gdjs.New_32sceneCode.GDMapObjects3.length = 0;
gdjs.New_32sceneCode.GDColliderObjects1.length = 0;
gdjs.New_32sceneCode.GDColliderObjects2.length = 0;
gdjs.New_32sceneCode.GDColliderObjects3.length = 0;
gdjs.New_32sceneCode.GDTopArrowRoundButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDTopArrowRoundButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDTopArrowRoundButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDTurnLeftColliderObjects1.length = 0;
gdjs.New_32sceneCode.GDTurnLeftColliderObjects2.length = 0;
gdjs.New_32sceneCode.GDTurnLeftColliderObjects3.length = 0;
gdjs.New_32sceneCode.GDThreePointTurnObjects1.length = 0;
gdjs.New_32sceneCode.GDThreePointTurnObjects2.length = 0;
gdjs.New_32sceneCode.GDThreePointTurnObjects3.length = 0;
gdjs.New_32sceneCode.GDTurnRightColliderObjects1.length = 0;
gdjs.New_32sceneCode.GDTurnRightColliderObjects2.length = 0;
gdjs.New_32sceneCode.GDTurnRightColliderObjects3.length = 0;
gdjs.New_32sceneCode.GDRouteCompleteColliderObjects1.length = 0;
gdjs.New_32sceneCode.GDRouteCompleteColliderObjects2.length = 0;
gdjs.New_32sceneCode.GDRouteCompleteColliderObjects3.length = 0;

gdjs.New_32sceneCode.eventsList7(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
