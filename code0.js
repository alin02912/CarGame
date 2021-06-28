gdjs._49Code = {};
gdjs._49Code.GDCarObjects1_1final = [];

gdjs._49Code.GDCarObjects1= [];
gdjs._49Code.GDCarObjects2= [];
gdjs._49Code.GDCarObjects3= [];
gdjs._49Code.GDCarObjects4= [];
gdjs._49Code.GDColliderObjects1= [];
gdjs._49Code.GDColliderObjects2= [];
gdjs._49Code.GDColliderObjects3= [];
gdjs._49Code.GDColliderObjects4= [];
gdjs._49Code.GDTurnLeftColliderObjects1= [];
gdjs._49Code.GDTurnLeftColliderObjects2= [];
gdjs._49Code.GDTurnLeftColliderObjects3= [];
gdjs._49Code.GDTurnLeftColliderObjects4= [];
gdjs._49Code.GDThreePointTurnObjects1= [];
gdjs._49Code.GDThreePointTurnObjects2= [];
gdjs._49Code.GDThreePointTurnObjects3= [];
gdjs._49Code.GDThreePointTurnObjects4= [];
gdjs._49Code.GDTurnRightColliderObjects1= [];
gdjs._49Code.GDTurnRightColliderObjects2= [];
gdjs._49Code.GDTurnRightColliderObjects3= [];
gdjs._49Code.GDTurnRightColliderObjects4= [];
gdjs._49Code.GDRouteCompleteColliderObjects1= [];
gdjs._49Code.GDRouteCompleteColliderObjects2= [];
gdjs._49Code.GDRouteCompleteColliderObjects3= [];
gdjs._49Code.GDRouteCompleteColliderObjects4= [];
gdjs._49Code.GDOdometerObjects1= [];
gdjs._49Code.GDOdometerObjects2= [];
gdjs._49Code.GDOdometerObjects3= [];
gdjs._49Code.GDOdometerObjects4= [];
gdjs._49Code.GDNeedleObjects1= [];
gdjs._49Code.GDNeedleObjects2= [];
gdjs._49Code.GDNeedleObjects3= [];
gdjs._49Code.GDNeedleObjects4= [];
gdjs._49Code.GDSpeedObjects1= [];
gdjs._49Code.GDSpeedObjects2= [];
gdjs._49Code.GDSpeedObjects3= [];
gdjs._49Code.GDSpeedObjects4= [];
gdjs._49Code.GDAngleObjects1= [];
gdjs._49Code.GDAngleObjects2= [];
gdjs._49Code.GDAngleObjects3= [];
gdjs._49Code.GDAngleObjects4= [];
gdjs._49Code.GDCarDirectionObjects1= [];
gdjs._49Code.GDCarDirectionObjects2= [];
gdjs._49Code.GDCarDirectionObjects3= [];
gdjs._49Code.GDCarDirectionObjects4= [];
gdjs._49Code.GDDgearObjects1= [];
gdjs._49Code.GDDgearObjects2= [];
gdjs._49Code.GDDgearObjects3= [];
gdjs._49Code.GDDgearObjects4= [];
gdjs._49Code.GDRgearObjects1= [];
gdjs._49Code.GDRgearObjects2= [];
gdjs._49Code.GDRgearObjects3= [];
gdjs._49Code.GDRgearObjects4= [];
gdjs._49Code.GDPgearObjects1= [];
gdjs._49Code.GDPgearObjects2= [];
gdjs._49Code.GDPgearObjects3= [];
gdjs._49Code.GDPgearObjects4= [];
gdjs._49Code.GDMap3Objects1= [];
gdjs._49Code.GDMap3Objects2= [];
gdjs._49Code.GDMap3Objects3= [];
gdjs._49Code.GDMap3Objects4= [];

gdjs._49Code.conditionTrue_0 = {val:false};
gdjs._49Code.condition0IsTrue_0 = {val:false};
gdjs._49Code.condition1IsTrue_0 = {val:false};
gdjs._49Code.condition2IsTrue_0 = {val:false};
gdjs._49Code.conditionTrue_1 = {val:false};
gdjs._49Code.condition0IsTrue_1 = {val:false};
gdjs._49Code.condition1IsTrue_1 = {val:false};
gdjs._49Code.condition2IsTrue_1 = {val:false};


gdjs._49Code.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "vroom.wav", 1, true, 50, 1);
}}

}


};gdjs._49Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._49Code.GDCarObjects1, gdjs._49Code.GDCarObjects3);


gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects3.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects3[i].getVariableNumber(gdjs._49Code.GDCarObjects3[i].getVariables().get("TurnRate")) <= 95 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects3[k] = gdjs._49Code.GDCarObjects3[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects3.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects3 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects3.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects3[i].returnVariable(gdjs._49Code.GDCarObjects3[i].getVariables().get("TurnRate")).add(100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.copyArray(gdjs._49Code.GDCarObjects1, gdjs._49Code.GDCarObjects3);


gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects3.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects3[i].getVariableNumber(gdjs._49Code.GDCarObjects3[i].getVariables().get("acceleration")) > 0 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects3[k] = gdjs._49Code.GDCarObjects3[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects3.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects3 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects3.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects3[i].setDirectionOrAngle(gdjs._49Code.GDCarObjects3[i].getDirectionOrAngle() + ((gdjs.RuntimeObject.getVariableNumber(gdjs._49Code.GDCarObjects3[i].getVariables().get("TurnRate"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(gdjs._49Code.GDCarObjects1, gdjs._49Code.GDCarObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects2[i].getVariableNumber(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration")) < 0 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects2[k] = gdjs._49Code.GDCarObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects2.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects2 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects2.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects2[i].setDirectionOrAngle(gdjs._49Code.GDCarObjects2[i].getDirectionOrAngle() - ((gdjs.RuntimeObject.getVariableNumber(gdjs._49Code.GDCarObjects2[i].getVariables().get("TurnRate"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.camera.getCameraRotation(runtimeScene, "", 1) - ((gdjs.RuntimeObject.getVariableNumber(((gdjs._49Code.GDCarObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs._49Code.GDCarObjects2[0].getVariables()).get("TurnRate"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 1);
}}

}


};gdjs._49Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._49Code.GDCarObjects1, gdjs._49Code.GDCarObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects2[i].getVariableNumber(gdjs._49Code.GDCarObjects2[i].getVariables().get("TurnRate")) >= -(95) ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects2[k] = gdjs._49Code.GDCarObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects2.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects2 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects2.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects2[i].returnVariable(gdjs._49Code.GDCarObjects2[i].getVariables().get("TurnRate")).sub(100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.copyArray(gdjs._49Code.GDCarObjects1, gdjs._49Code.GDCarObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects2[i].getVariableNumber(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration")) > 0 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects2[k] = gdjs._49Code.GDCarObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects2.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects2 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects2.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects2[i].setDirectionOrAngle(gdjs._49Code.GDCarObjects2[i].getDirectionOrAngle() + ((gdjs.RuntimeObject.getVariableNumber(gdjs._49Code.GDCarObjects2[i].getVariables().get("TurnRate"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

/* Reuse gdjs._49Code.GDCarObjects1 */

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) < 0 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].setDirectionOrAngle(gdjs._49Code.GDCarObjects1[i].getDirectionOrAngle() - ((gdjs.RuntimeObject.getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("TurnRate"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.camera.getCameraRotation(runtimeScene, "", 1) - ((gdjs.RuntimeObject.getVariableNumber(((gdjs._49Code.GDCarObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs._49Code.GDCarObjects1[0].getVariables()).get("TurnRate"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)), "", 1);
}}

}


};gdjs._49Code.eventsList3 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs._49Code.eventsList4 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects2);
{for(var i = 0, len = gdjs._49Code.GDCarObjects2.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects2);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects2[i].getVariableNumber(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration")) > 15 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects2[k] = gdjs._49Code.GDCarObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects2.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects2 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects2.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects2[i].returnVariable(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration")).sub(0.6 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * (gdjs.RuntimeObject.getVariableNumber(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) <= 15 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) >= 0 ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].returnVariable(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")).setNumber(0);
}
}}

}


};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDColliderObjects1Objects = Hashtable.newFrom({"Collider": gdjs._49Code.GDColliderObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDColliderObjects1Objects = Hashtable.newFrom({"Collider": gdjs._49Code.GDColliderObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDColliderObjects1Objects = Hashtable.newFrom({"Collider": gdjs._49Code.GDColliderObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDTurnLeftColliderObjects1ObjectsGDgdjs_46_9549Code_46GDTurnRightColliderObjects1ObjectsGDgdjs_46_9549Code_46GDThreePointTurnObjects1ObjectsGDgdjs_46_9549Code_46GDRouteCompleteColliderObjects1Objects = Hashtable.newFrom({"TurnLeftCollider": gdjs._49Code.GDTurnLeftColliderObjects1, "TurnRightCollider": gdjs._49Code.GDTurnRightColliderObjects1, "ThreePointTurn": gdjs._49Code.GDThreePointTurnObjects1, "RouteCompleteCollider": gdjs._49Code.GDRouteCompleteColliderObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDTurnLeftColliderObjects2Objects = Hashtable.newFrom({"TurnLeftCollider": gdjs._49Code.GDTurnLeftColliderObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDThreePointTurnObjects2Objects = Hashtable.newFrom({"ThreePointTurn": gdjs._49Code.GDThreePointTurnObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDTurnRightColliderObjects2Objects = Hashtable.newFrom({"TurnRightCollider": gdjs._49Code.GDTurnRightColliderObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDRouteCompleteColliderObjects2Objects = Hashtable.newFrom({"RouteCompleteCollider": gdjs._49Code.GDRouteCompleteColliderObjects2});gdjs._49Code.userFunc0x763e08 = function(runtimeScene) {
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
gdjs._49Code.eventsList5 = function(runtimeScene) {

{


gdjs._49Code.userFunc0x763e08(runtimeScene);

}


};gdjs._49Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._49Code.GDCarObjects1, gdjs._49Code.GDCarObjects2);

gdjs.copyArray(gdjs._49Code.GDTurnLeftColliderObjects1, gdjs._49Code.GDTurnLeftColliderObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects2Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDTurnLeftColliderObjects2Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDTurnLeftColliderObjects2 */
{runtimeScene.getVariables().getFromIndex(0).setString("Turn left");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs._49Code.GDTurnLeftColliderObjects2.length ;i < len;++i) {
    gdjs._49Code.GDTurnLeftColliderObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(gdjs._49Code.GDCarObjects1, gdjs._49Code.GDCarObjects2);

gdjs.copyArray(gdjs._49Code.GDThreePointTurnObjects1, gdjs._49Code.GDThreePointTurnObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects2Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDThreePointTurnObjects2Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDThreePointTurnObjects2 */
{runtimeScene.getVariables().getFromIndex(0).setString("Perform a three point turn");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs._49Code.GDThreePointTurnObjects2.length ;i < len;++i) {
    gdjs._49Code.GDThreePointTurnObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(gdjs._49Code.GDCarObjects1, gdjs._49Code.GDCarObjects2);

gdjs.copyArray(gdjs._49Code.GDTurnRightColliderObjects1, gdjs._49Code.GDTurnRightColliderObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects2Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDTurnRightColliderObjects2Objects, false, runtimeScene, false);
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDTurnRightColliderObjects2 */
{runtimeScene.getVariables().getFromIndex(0).setString("Turn Right");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs._49Code.GDTurnRightColliderObjects2.length ;i < len;++i) {
    gdjs._49Code.GDTurnRightColliderObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(gdjs._49Code.GDCarObjects1, gdjs._49Code.GDCarObjects2);

gdjs.copyArray(gdjs._49Code.GDRouteCompleteColliderObjects1, gdjs._49Code.GDRouteCompleteColliderObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects2Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDRouteCompleteColliderObjects2Objects, false, runtimeScene, false);
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDRouteCompleteColliderObjects2 */
{runtimeScene.getVariables().getFromIndex(0).setString("Route Complete, Goodbye!");
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(4).setNumber(1);
}{for(var i = 0, len = gdjs._49Code.GDRouteCompleteColliderObjects2.length ;i < len;++i) {
    gdjs._49Code.GDRouteCompleteColliderObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}
{ //Subevents
gdjs._49Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs._49Code.eventsList7 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dgear"), gdjs._49Code.GDDgearObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pgear"), gdjs._49Code.GDPgearObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rgear"), gdjs._49Code.GDRgearObjects1);
gdjs.copyArray(runtimeScene.getObjects("RouteCompleteCollider"), gdjs._49Code.GDRouteCompleteColliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("ThreePointTurn"), gdjs._49Code.GDThreePointTurnObjects1);
gdjs.copyArray(runtimeScene.getObjects("TurnLeftCollider"), gdjs._49Code.GDTurnLeftColliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("TurnRightCollider"), gdjs._49Code.GDTurnRightColliderObjects1);
{for(var i = 0, len = gdjs._49Code.GDTurnLeftColliderObjects1.length ;i < len;++i) {
    gdjs._49Code.GDTurnLeftColliderObjects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDTurnRightColliderObjects1.length ;i < len;++i) {
    gdjs._49Code.GDTurnRightColliderObjects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDThreePointTurnObjects1.length ;i < len;++i) {
    gdjs._49Code.GDThreePointTurnObjects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDRouteCompleteColliderObjects1.length ;i < len;++i) {
    gdjs._49Code.GDRouteCompleteColliderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._49Code.GDDgearObjects1.length ;i < len;++i) {
    gdjs._49Code.GDDgearObjects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDRgearObjects1.length ;i < len;++i) {
    gdjs._49Code.GDRgearObjects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDPgearObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPgearObjects1[i].hide();
}
}
{ //Subevents
gdjs._49Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 1, 0.1 + ((gdjs.RuntimeObject.getVariableNumber(((gdjs._49Code.GDCarObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs._49Code.GDCarObjects1[0].getVariables()).get("acceleration"))) / 200));
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "d"));
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "a"));
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].returnVariable(gdjs._49Code.GDCarObjects1[i].getVariables().get("TurnRate")).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( !(gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) < -(20)) ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].setAnimation(0);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].returnVariable(gdjs._49Code.GDCarObjects1[i].getVariables().get("TurnRate")).setNumber(0);
}
}}

}


{

gdjs._49Code.GDCarObjects1.length = 0;


gdjs._49Code.condition0IsTrue_0.val = false;
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition0IsTrue_0;
gdjs._49Code.GDCarObjects1_1final.length = 0;gdjs._49Code.condition0IsTrue_1.val = false;
gdjs._49Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects2);
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects2[i].getVariableNumber(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration")) > 10 ) {
        gdjs._49Code.condition0IsTrue_1.val = true;
        gdjs._49Code.GDCarObjects2[k] = gdjs._49Code.GDCarObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects2.length = k;if( gdjs._49Code.condition0IsTrue_1.val ) {
    gdjs._49Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._49Code.GDCarObjects2.length;j<jLen;++j) {
        if ( gdjs._49Code.GDCarObjects1_1final.indexOf(gdjs._49Code.GDCarObjects2[j]) === -1 )
            gdjs._49Code.GDCarObjects1_1final.push(gdjs._49Code.GDCarObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects2);
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects2[i].getVariableNumber(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration")) < -(10) ) {
        gdjs._49Code.condition1IsTrue_1.val = true;
        gdjs._49Code.GDCarObjects2[k] = gdjs._49Code.GDCarObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects2.length = k;if( gdjs._49Code.condition1IsTrue_1.val ) {
    gdjs._49Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._49Code.GDCarObjects2.length;j<jLen;++j) {
        if ( gdjs._49Code.GDCarObjects1_1final.indexOf(gdjs._49Code.GDCarObjects2[j]) === -1 )
            gdjs._49Code.GDCarObjects1_1final.push(gdjs._49Code.GDCarObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs._49Code.GDCarObjects1_1final, gdjs._49Code.GDCarObjects1);
}
}
}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) < 600 ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].returnVariable(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")).add(80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) > 15 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Needle"), gdjs._49Code.GDNeedleObjects1);
{for(var i = 0, len = gdjs._49Code.GDNeedleObjects1.length ;i < len;++i) {
    gdjs._49Code.GDNeedleObjects1[i].setAngle(((gdjs.RuntimeObject.getVariableNumber(((gdjs._49Code.GDCarObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs._49Code.GDCarObjects1[0].getVariables()).get("acceleration"))) / 3) + 40);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) < -(10) ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].setAnimation(2);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraRotation(runtimeScene, "", 1), (( gdjs._49Code.GDCarObjects1.length === 0 ) ? 0 :gdjs._49Code.GDCarObjects1[0].getDirectionOrAngle()) + 90, 0.03), "", 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].addPolarForce((gdjs._49Code.GDCarObjects1[i].getDirectionOrAngle()), (gdjs.RuntimeObject.getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration"))), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) > 0 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].returnVariable(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")).sub(30 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) < 0 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].returnVariable(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")).add(10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Collider"), gdjs._49Code.GDColliderObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDColliderObjects1Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
/* Reuse gdjs._49Code.GDColliderObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].separateFromObjectsList(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDColliderObjects1Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Collider"), gdjs._49Code.GDColliderObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDColliderObjects1Objects, false, runtimeScene, false);
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) > 100 ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].returnVariable(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")).setNumber(100);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Odometer"), gdjs._49Code.GDOdometerObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs._49Code.GDCarObjects1.length === 0 ) ? 0 :gdjs._49Code.GDCarObjects1[0].getPointY("")) + 100 * Math.sin(3.1415 * (( gdjs._49Code.GDCarObjects1.length === 0 ) ? 0 :gdjs._49Code.GDCarObjects1[0].getDirectionOrAngle()) / 180) + 20, "", 1);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs._49Code.GDCarObjects1.length === 0 ) ? 0 :gdjs._49Code.GDCarObjects1[0].getPointX("")) + 100 * Math.cos((( gdjs._49Code.GDCarObjects1.length === 0 ) ? 0 :gdjs._49Code.GDCarObjects1[0].getDirectionOrAngle()) * 3.1415 / 180) + 20, "", 1);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs._49Code.GDOdometerObjects1.length === 0 ) ? 0 :gdjs._49Code.GDOdometerObjects1[0].getPointX("")) - 200, "Controls", 2);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs._49Code.GDOdometerObjects1.length === 0 ) ? 0 :gdjs._49Code.GDOdometerObjects1[0].getPointY("")) - 180, "Controls", 2);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.7, "", 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("RouteCompleteCollider"), gdjs._49Code.GDRouteCompleteColliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("ThreePointTurn"), gdjs._49Code.GDThreePointTurnObjects1);
gdjs.copyArray(runtimeScene.getObjects("TurnLeftCollider"), gdjs._49Code.GDTurnLeftColliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("TurnRightCollider"), gdjs._49Code.GDTurnRightColliderObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDTurnLeftColliderObjects1ObjectsGDgdjs_46_9549Code_46GDTurnRightColliderObjects1ObjectsGDgdjs_46_9549Code_46GDThreePointTurnObjects1ObjectsGDgdjs_46_9549Code_46GDRouteCompleteColliderObjects1Objects, false, runtimeScene, false);
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition1IsTrue_0;
gdjs._49Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8008836);
}
}}
if (gdjs._49Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "GoodbyeTimer");
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "2", false);
}}

}


{



}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dgear"), gdjs._49Code.GDDgearObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pgear"), gdjs._49Code.GDPgearObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rgear"), gdjs._49Code.GDRgearObjects1);
{for(var i = 0, len = gdjs._49Code.GDDgearObjects1.length ;i < len;++i) {
    gdjs._49Code.GDDgearObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._49Code.GDRgearObjects1.length ;i < len;++i) {
    gdjs._49Code.GDRgearObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._49Code.GDPgearObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPgearObjects1[i].hide();
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dgear"), gdjs._49Code.GDDgearObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pgear"), gdjs._49Code.GDPgearObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rgear"), gdjs._49Code.GDRgearObjects1);
{for(var i = 0, len = gdjs._49Code.GDRgearObjects1.length ;i < len;++i) {
    gdjs._49Code.GDRgearObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._49Code.GDDgearObjects1.length ;i < len;++i) {
    gdjs._49Code.GDDgearObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._49Code.GDPgearObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPgearObjects1[i].hide();
}
}}

}


{


{
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dgear"), gdjs._49Code.GDDgearObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pgear"), gdjs._49Code.GDPgearObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rgear"), gdjs._49Code.GDRgearObjects1);
{for(var i = 0, len = gdjs._49Code.GDPgearObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPgearObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._49Code.GDRgearObjects1.length ;i < len;++i) {
    gdjs._49Code.GDRgearObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._49Code.GDDgearObjects1.length ;i < len;++i) {
    gdjs._49Code.GDDgearObjects1[i].hide();
}
}}

}


{


{
}

}


};

gdjs._49Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._49Code.GDCarObjects1.length = 0;
gdjs._49Code.GDCarObjects2.length = 0;
gdjs._49Code.GDCarObjects3.length = 0;
gdjs._49Code.GDCarObjects4.length = 0;
gdjs._49Code.GDColliderObjects1.length = 0;
gdjs._49Code.GDColliderObjects2.length = 0;
gdjs._49Code.GDColliderObjects3.length = 0;
gdjs._49Code.GDColliderObjects4.length = 0;
gdjs._49Code.GDTurnLeftColliderObjects1.length = 0;
gdjs._49Code.GDTurnLeftColliderObjects2.length = 0;
gdjs._49Code.GDTurnLeftColliderObjects3.length = 0;
gdjs._49Code.GDTurnLeftColliderObjects4.length = 0;
gdjs._49Code.GDThreePointTurnObjects1.length = 0;
gdjs._49Code.GDThreePointTurnObjects2.length = 0;
gdjs._49Code.GDThreePointTurnObjects3.length = 0;
gdjs._49Code.GDThreePointTurnObjects4.length = 0;
gdjs._49Code.GDTurnRightColliderObjects1.length = 0;
gdjs._49Code.GDTurnRightColliderObjects2.length = 0;
gdjs._49Code.GDTurnRightColliderObjects3.length = 0;
gdjs._49Code.GDTurnRightColliderObjects4.length = 0;
gdjs._49Code.GDRouteCompleteColliderObjects1.length = 0;
gdjs._49Code.GDRouteCompleteColliderObjects2.length = 0;
gdjs._49Code.GDRouteCompleteColliderObjects3.length = 0;
gdjs._49Code.GDRouteCompleteColliderObjects4.length = 0;
gdjs._49Code.GDOdometerObjects1.length = 0;
gdjs._49Code.GDOdometerObjects2.length = 0;
gdjs._49Code.GDOdometerObjects3.length = 0;
gdjs._49Code.GDOdometerObjects4.length = 0;
gdjs._49Code.GDNeedleObjects1.length = 0;
gdjs._49Code.GDNeedleObjects2.length = 0;
gdjs._49Code.GDNeedleObjects3.length = 0;
gdjs._49Code.GDNeedleObjects4.length = 0;
gdjs._49Code.GDSpeedObjects1.length = 0;
gdjs._49Code.GDSpeedObjects2.length = 0;
gdjs._49Code.GDSpeedObjects3.length = 0;
gdjs._49Code.GDSpeedObjects4.length = 0;
gdjs._49Code.GDAngleObjects1.length = 0;
gdjs._49Code.GDAngleObjects2.length = 0;
gdjs._49Code.GDAngleObjects3.length = 0;
gdjs._49Code.GDAngleObjects4.length = 0;
gdjs._49Code.GDCarDirectionObjects1.length = 0;
gdjs._49Code.GDCarDirectionObjects2.length = 0;
gdjs._49Code.GDCarDirectionObjects3.length = 0;
gdjs._49Code.GDCarDirectionObjects4.length = 0;
gdjs._49Code.GDDgearObjects1.length = 0;
gdjs._49Code.GDDgearObjects2.length = 0;
gdjs._49Code.GDDgearObjects3.length = 0;
gdjs._49Code.GDDgearObjects4.length = 0;
gdjs._49Code.GDRgearObjects1.length = 0;
gdjs._49Code.GDRgearObjects2.length = 0;
gdjs._49Code.GDRgearObjects3.length = 0;
gdjs._49Code.GDRgearObjects4.length = 0;
gdjs._49Code.GDPgearObjects1.length = 0;
gdjs._49Code.GDPgearObjects2.length = 0;
gdjs._49Code.GDPgearObjects3.length = 0;
gdjs._49Code.GDPgearObjects4.length = 0;
gdjs._49Code.GDMap3Objects1.length = 0;
gdjs._49Code.GDMap3Objects2.length = 0;
gdjs._49Code.GDMap3Objects3.length = 0;
gdjs._49Code.GDMap3Objects4.length = 0;

gdjs._49Code.eventsList7(runtimeScene);
return;

}

gdjs['_49Code'] = gdjs._49Code;
