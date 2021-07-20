gdjs._49Code = {};
gdjs._49Code.GDCarObjects1_1final = [];

gdjs._49Code.GDEnemyObjects3_1final = [];

gdjs._49Code.forEachIndex2 = 0;

gdjs._49Code.forEachObjects2 = [];

gdjs._49Code.forEachTemporary2 = null;

gdjs._49Code.forEachTotalCount2 = 0;

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
gdjs._49Code.GDHintObjects1= [];
gdjs._49Code.GDHintObjects2= [];
gdjs._49Code.GDHintObjects3= [];
gdjs._49Code.GDHintObjects4= [];
gdjs._49Code.GDMessageObjects1= [];
gdjs._49Code.GDMessageObjects2= [];
gdjs._49Code.GDMessageObjects3= [];
gdjs._49Code.GDMessageObjects4= [];
gdjs._49Code.GDEnemyObjects1= [];
gdjs._49Code.GDEnemyObjects2= [];
gdjs._49Code.GDEnemyObjects3= [];
gdjs._49Code.GDEnemyObjects4= [];
gdjs._49Code.GDBumperObjects1= [];
gdjs._49Code.GDBumperObjects2= [];
gdjs._49Code.GDBumperObjects3= [];
gdjs._49Code.GDBumperObjects4= [];
gdjs._49Code.GDFuckObjects1= [];
gdjs._49Code.GDFuckObjects2= [];
gdjs._49Code.GDFuckObjects3= [];
gdjs._49Code.GDFuckObjects4= [];
gdjs._49Code.GDStopObjects1= [];
gdjs._49Code.GDStopObjects2= [];
gdjs._49Code.GDStopObjects3= [];
gdjs._49Code.GDStopObjects4= [];
gdjs._49Code.GDDeleteMeObjects1= [];
gdjs._49Code.GDDeleteMeObjects2= [];
gdjs._49Code.GDDeleteMeObjects3= [];
gdjs._49Code.GDDeleteMeObjects4= [];
gdjs._49Code.GDTrafficLightObjects1= [];
gdjs._49Code.GDTrafficLightObjects2= [];
gdjs._49Code.GDTrafficLightObjects3= [];
gdjs._49Code.GDTrafficLightObjects4= [];
gdjs._49Code.GDTrafficShowerObjects1= [];
gdjs._49Code.GDTrafficShowerObjects2= [];
gdjs._49Code.GDTrafficShowerObjects3= [];
gdjs._49Code.GDTrafficShowerObjects4= [];

gdjs._49Code.conditionTrue_0 = {val:false};
gdjs._49Code.condition0IsTrue_0 = {val:false};
gdjs._49Code.condition1IsTrue_0 = {val:false};
gdjs._49Code.condition2IsTrue_0 = {val:false};
gdjs._49Code.condition3IsTrue_0 = {val:false};
gdjs._49Code.condition4IsTrue_0 = {val:false};
gdjs._49Code.conditionTrue_1 = {val:false};
gdjs._49Code.condition0IsTrue_1 = {val:false};
gdjs._49Code.condition1IsTrue_1 = {val:false};
gdjs._49Code.condition2IsTrue_1 = {val:false};
gdjs._49Code.condition3IsTrue_1 = {val:false};
gdjs._49Code.condition4IsTrue_1 = {val:false};


gdjs._49Code.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "vroom.wav", 1, true, 50, 1);
}}

}


};gdjs._49Code.eventsList1 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) == 1;
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hint"), gdjs._49Code.GDHintObjects1);
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs._49Code.GDMessageObjects1);
{for(var i = 0, len = gdjs._49Code.GDHintObjects1.length ;i < len;++i) {
    gdjs._49Code.GDHintObjects1[i].hide(false);
}
for(var i = 0, len = gdjs._49Code.GDMessageObjects1.length ;i < len;++i) {
    gdjs._49Code.GDMessageObjects1[i].hide(false);
}
}}

}


};gdjs._49Code.eventsList2 = function(runtimeScene) {

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


};gdjs._49Code.eventsList3 = function(runtimeScene) {

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


};gdjs._49Code.eventsList4 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs._49Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects2);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects2[i].getVariableNumber(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration")) < 500 ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects2[k] = gdjs._49Code.GDCarObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects2.length = k;}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects2 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects2.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects2[i].returnVariable(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration")).add(80 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 2;
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) > -(100) ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].returnVariable(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")).sub(40 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


};gdjs._49Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects3);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects3.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects3[i].getVariableNumber(gdjs._49Code.GDCarObjects3[i].getVariables().get("acceleration")) > 100 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects3[k] = gdjs._49Code.GDCarObjects3[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects3.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects3 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects3.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects3[i].returnVariable(gdjs._49Code.GDCarObjects3[i].getVariables().get("acceleration")).sub(0.8 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * (gdjs.RuntimeObject.getVariableNumber(gdjs._49Code.GDCarObjects3[i].getVariables().get("acceleration"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects2);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects2[i].getVariableNumber(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration")) > 5 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects2[k] = gdjs._49Code.GDCarObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects2.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects2[i].getVariableNumber(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration")) <= 100 ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects2[k] = gdjs._49Code.GDCarObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects2.length = k;}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects2 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects2.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects2[i].returnVariable(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration")).sub(100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


};gdjs._49Code.eventsList7 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 0);
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) > 0);
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects2);
{for(var i = 0, len = gdjs._49Code.GDCarObjects2.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._49Code.GDCarObjects2.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects2[i].setAnimationFrame(1);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) > 0;
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition1IsTrue_0;
gdjs._49Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8587140);
}
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects2);
{for(var i = 0, len = gdjs._49Code.GDCarObjects2.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects2[i].setAnimation(4);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 0;
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition1IsTrue_0;
gdjs._49Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8587972);
}
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects2);
{for(var i = 0, len = gdjs._49Code.GDCarObjects2.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects2[i].setAnimation(5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects2);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects2[i].getVariableNumber(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration")) >= -(5) ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects2[k] = gdjs._49Code.GDCarObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects2.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects2[i].getVariableNumber(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration")) <= 5 ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects2[k] = gdjs._49Code.GDCarObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects2.length = k;}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects2 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects2.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects2[i].returnVariable(gdjs._49Code.GDCarObjects2[i].getVariables().get("acceleration")).setNumber(0);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 2;
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) < -(5) ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].returnVariable(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")).sub(0.8 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * (gdjs.RuntimeObject.getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration"))));
}
}}

}


};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDColliderObjects1Objects = Hashtable.newFrom({"Collider": gdjs._49Code.GDColliderObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDColliderObjects1Objects = Hashtable.newFrom({"Collider": gdjs._49Code.GDColliderObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDColliderObjects1Objects = Hashtable.newFrom({"Collider": gdjs._49Code.GDColliderObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDTurnLeftColliderObjects1ObjectsGDgdjs_46_9549Code_46GDTurnRightColliderObjects1ObjectsGDgdjs_46_9549Code_46GDThreePointTurnObjects1ObjectsGDgdjs_46_9549Code_46GDRouteCompleteColliderObjects1Objects = Hashtable.newFrom({"TurnLeftCollider": gdjs._49Code.GDTurnLeftColliderObjects1, "TurnRightCollider": gdjs._49Code.GDTurnRightColliderObjects1, "ThreePointTurn": gdjs._49Code.GDThreePointTurnObjects1, "RouteCompleteCollider": gdjs._49Code.GDRouteCompleteColliderObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDTurnLeftColliderObjects2Objects = Hashtable.newFrom({"TurnLeftCollider": gdjs._49Code.GDTurnLeftColliderObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDThreePointTurnObjects2Objects = Hashtable.newFrom({"ThreePointTurn": gdjs._49Code.GDThreePointTurnObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDTurnRightColliderObjects2Objects = Hashtable.newFrom({"TurnRightCollider": gdjs._49Code.GDTurnRightColliderObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDRouteCompleteColliderObjects2Objects = Hashtable.newFrom({"RouteCompleteCollider": gdjs._49Code.GDRouteCompleteColliderObjects2});gdjs._49Code.userFunc0x822fa0 = function(runtimeScene) {
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
gdjs._49Code.eventsList8 = function(runtimeScene) {

{


gdjs._49Code.userFunc0x822fa0(runtimeScene);

}


};gdjs._49Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._49Code.GDCarObjects1, gdjs._49Code.GDCarObjects2);

gdjs.copyArray(gdjs._49Code.GDTurnLeftColliderObjects1, gdjs._49Code.GDTurnLeftColliderObjects2);


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects2Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDTurnLeftColliderObjects2Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDTurnLeftColliderObjects2 */
{runtimeScene.getVariables().getFromIndex(0).setString("Turn left");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
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
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
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
gdjs._49Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDTurnRightColliderObjects2 */
{runtimeScene.getVariables().getFromIndex(0).setString("Turn Right");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
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
gdjs._49Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDRouteCompleteColliderObjects2 */
{runtimeScene.getVariables().getFromIndex(0).setString("Route Complete, Goodbye!");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs._49Code.GDRouteCompleteColliderObjects2.length ;i < len;++i) {
    gdjs._49Code.GDRouteCompleteColliderObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}
{ //Subevents
gdjs._49Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs._49Code.eventsList10 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) > 1;
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(7).setNumber(0);
}}

}


{


{
}

}


};gdjs._49Code.eventsList11 = function(runtimeScene) {

};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs._49Code.GDEnemyObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects1Objects = Hashtable.newFrom({"Bumper": gdjs._49Code.GDBumperObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects2Objects = Hashtable.newFrom({"Bumper": gdjs._49Code.GDBumperObjects2});gdjs._49Code.eventsList12 = function(runtimeScene) {

};gdjs._49Code.eventsList13 = function(runtimeScene) {

};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs._49Code.GDEnemyObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects1Objects = Hashtable.newFrom({"Bumper": gdjs._49Code.GDBumperObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects2Objects = Hashtable.newFrom({"Bumper": gdjs._49Code.GDBumperObjects2});gdjs._49Code.eventsList14 = function(runtimeScene) {

};gdjs._49Code.eventsList15 = function(runtimeScene) {

};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs._49Code.GDEnemyObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects1Objects = Hashtable.newFrom({"Bumper": gdjs._49Code.GDBumperObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects2Objects = Hashtable.newFrom({"Bumper": gdjs._49Code.GDBumperObjects2});gdjs._49Code.eventsList16 = function(runtimeScene) {

};gdjs._49Code.eventsList17 = function(runtimeScene) {

};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs._49Code.GDEnemyObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects1Objects = Hashtable.newFrom({"Bumper": gdjs._49Code.GDBumperObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects2Objects = Hashtable.newFrom({"Bumper": gdjs._49Code.GDBumperObjects2});gdjs._49Code.eventsList18 = function(runtimeScene) {

};gdjs._49Code.eventsList19 = function(runtimeScene) {

};gdjs._49Code.eventsList20 = function(runtimeScene) {

};gdjs._49Code.eventsList21 = function(runtimeScene) {

};gdjs._49Code.eventsList22 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs._49Code.GDTrafficLightObjects1);
{for(var i = 0, len = gdjs._49Code.GDTrafficLightObjects1.length ;i < len;++i) {
    gdjs._49Code.GDTrafficLightObjects1[i].setAnimationFrame(2);
}
}}

}


};gdjs._49Code.eventsList23 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs._49Code.GDTrafficLightObjects1);
{for(var i = 0, len = gdjs._49Code.GDTrafficLightObjects1.length ;i < len;++i) {
    gdjs._49Code.GDTrafficLightObjects1[i].setAnimationFrame(1);
}
}}

}


};gdjs._49Code.eventsList24 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs._49Code.GDTrafficLightObjects1);
{for(var i = 0, len = gdjs._49Code.GDTrafficLightObjects1.length ;i < len;++i) {
    gdjs._49Code.GDTrafficLightObjects1[i].setAnimationFrame(0);
}
}}

}


};gdjs._49Code.eventsList25 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs._49Code.GDTrafficLightObjects1);
{for(var i = 0, len = gdjs._49Code.GDTrafficLightObjects1.length ;i < len;++i) {
    gdjs._49Code.GDTrafficLightObjects1[i].setAnimationFrame(0);
}
}}

}


};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs._49Code.GDEnemyObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDStopObjects2Objects = Hashtable.newFrom({"Stop": gdjs._49Code.GDStopObjects2});gdjs._49Code.eventsList26 = function(runtimeScene) {

{

gdjs.copyArray(gdjs._49Code.GDEnemyObjects2, gdjs._49Code.GDEnemyObjects3);


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition0IsTrue_0;
gdjs._49Code.GDEnemyObjects3_1final.length = 0;gdjs._49Code.condition0IsTrue_1.val = false;
gdjs._49Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs._49Code.GDEnemyObjects2, gdjs._49Code.GDEnemyObjects4);

for(var i = 0, k = 0, l = gdjs._49Code.GDEnemyObjects4.length;i<l;++i) {
    if ( gdjs._49Code.GDEnemyObjects4[i].getVariableNumber(gdjs._49Code.GDEnemyObjects4[i].getVariables().getFromIndex(2)) == 1 ) {
        gdjs._49Code.condition0IsTrue_1.val = true;
        gdjs._49Code.GDEnemyObjects4[k] = gdjs._49Code.GDEnemyObjects4[i];
        ++k;
    }
}
gdjs._49Code.GDEnemyObjects4.length = k;if( gdjs._49Code.condition0IsTrue_1.val ) {
    gdjs._49Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._49Code.GDEnemyObjects4.length;j<jLen;++j) {
        if ( gdjs._49Code.GDEnemyObjects3_1final.indexOf(gdjs._49Code.GDEnemyObjects4[j]) === -1 )
            gdjs._49Code.GDEnemyObjects3_1final.push(gdjs._49Code.GDEnemyObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs._49Code.GDEnemyObjects2, gdjs._49Code.GDEnemyObjects4);

for(var i = 0, k = 0, l = gdjs._49Code.GDEnemyObjects4.length;i<l;++i) {
    if ( gdjs._49Code.GDEnemyObjects4[i].getVariableNumber(gdjs._49Code.GDEnemyObjects4[i].getVariables().getFromIndex(3)) == 1 ) {
        gdjs._49Code.condition1IsTrue_1.val = true;
        gdjs._49Code.GDEnemyObjects4[k] = gdjs._49Code.GDEnemyObjects4[i];
        ++k;
    }
}
gdjs._49Code.GDEnemyObjects4.length = k;if( gdjs._49Code.condition1IsTrue_1.val ) {
    gdjs._49Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._49Code.GDEnemyObjects4.length;j<jLen;++j) {
        if ( gdjs._49Code.GDEnemyObjects3_1final.indexOf(gdjs._49Code.GDEnemyObjects4[j]) === -1 )
            gdjs._49Code.GDEnemyObjects3_1final.push(gdjs._49Code.GDEnemyObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs._49Code.GDEnemyObjects3_1final, gdjs._49Code.GDEnemyObjects3);
}
}
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(10)) == 1);
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDEnemyObjects3 */
{for(var i = 0, len = gdjs._49Code.GDEnemyObjects3.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects3[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}}

}


{

gdjs.copyArray(gdjs._49Code.GDEnemyObjects2, gdjs._49Code.GDEnemyObjects3);


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition0IsTrue_0;
gdjs._49Code.GDEnemyObjects3_1final.length = 0;gdjs._49Code.condition0IsTrue_1.val = false;
gdjs._49Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs._49Code.GDEnemyObjects2, gdjs._49Code.GDEnemyObjects4);

for(var i = 0, k = 0, l = gdjs._49Code.GDEnemyObjects4.length;i<l;++i) {
    if ( gdjs._49Code.GDEnemyObjects4[i].getVariableNumber(gdjs._49Code.GDEnemyObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs._49Code.condition0IsTrue_1.val = true;
        gdjs._49Code.GDEnemyObjects4[k] = gdjs._49Code.GDEnemyObjects4[i];
        ++k;
    }
}
gdjs._49Code.GDEnemyObjects4.length = k;if( gdjs._49Code.condition0IsTrue_1.val ) {
    gdjs._49Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._49Code.GDEnemyObjects4.length;j<jLen;++j) {
        if ( gdjs._49Code.GDEnemyObjects3_1final.indexOf(gdjs._49Code.GDEnemyObjects4[j]) === -1 )
            gdjs._49Code.GDEnemyObjects3_1final.push(gdjs._49Code.GDEnemyObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs._49Code.GDEnemyObjects2, gdjs._49Code.GDEnemyObjects4);

for(var i = 0, k = 0, l = gdjs._49Code.GDEnemyObjects4.length;i<l;++i) {
    if ( gdjs._49Code.GDEnemyObjects4[i].getVariableNumber(gdjs._49Code.GDEnemyObjects4[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs._49Code.condition1IsTrue_1.val = true;
        gdjs._49Code.GDEnemyObjects4[k] = gdjs._49Code.GDEnemyObjects4[i];
        ++k;
    }
}
gdjs._49Code.GDEnemyObjects4.length = k;if( gdjs._49Code.condition1IsTrue_1.val ) {
    gdjs._49Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs._49Code.GDEnemyObjects4.length;j<jLen;++j) {
        if ( gdjs._49Code.GDEnemyObjects3_1final.indexOf(gdjs._49Code.GDEnemyObjects4[j]) === -1 )
            gdjs._49Code.GDEnemyObjects3_1final.push(gdjs._49Code.GDEnemyObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs._49Code.GDEnemyObjects3_1final, gdjs._49Code.GDEnemyObjects3);
}
}
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(10)) == 0);
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDEnemyObjects3 */
{for(var i = 0, len = gdjs._49Code.GDEnemyObjects3.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects3[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}}

}


};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects2Objects = Hashtable.newFrom({"Enemy": gdjs._49Code.GDEnemyObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDDeleteMeObjects2Objects = Hashtable.newFrom({"DeleteMe": gdjs._49Code.GDDeleteMeObjects2});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects2Objects = Hashtable.newFrom({"Bumper": gdjs._49Code.GDBumperObjects2});gdjs._49Code.eventsList27 = function(runtimeScene) {

};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs._49Code.GDEnemyObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs._49Code.GDEnemyObjects1});gdjs._49Code.eventsList28 = function(runtimeScene) {

{

/* Reuse gdjs._49Code.GDCarObjects1 */

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( !(gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) == 0) ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
/* Reuse gdjs._49Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].separateFromObjectsList(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects1Objects, false);
}
}}

}


};gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects1Objects = Hashtable.newFrom({"Car": gdjs._49Code.GDCarObjects1});gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDTrafficShowerObjects1Objects = Hashtable.newFrom({"TrafficShower": gdjs._49Code.GDTrafficShowerObjects1});gdjs._49Code.eventsList29 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 1;
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs._49Code.GDTrafficLightObjects1);
{for(var i = 0, len = gdjs._49Code.GDTrafficLightObjects1.length ;i < len;++i) {
    gdjs._49Code.GDTrafficLightObjects1[i].hide(false);
}
}}

}


};gdjs._49Code.eventsList30 = function(runtimeScene) {

{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) == 0;
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs._49Code.GDTrafficLightObjects1);
{for(var i = 0, len = gdjs._49Code.GDTrafficLightObjects1.length ;i < len;++i) {
    gdjs._49Code.GDTrafficLightObjects1[i].hide();
}
}}

}


};gdjs._49Code.eventsList31 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("TrafficLight"), gdjs._49Code.GDTrafficLightObjects1);
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
}{for(var i = 0, len = gdjs._49Code.GDPgearObjects1.length ;i < len;++i) {
    gdjs._49Code.GDPgearObjects1[i].hide(false);
}
}{runtimeScene.getVariables().getFromIndex(4).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T1");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T3");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T4");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TrafficTimer1");
}{for(var i = 0, len = gdjs._49Code.GDTrafficLightObjects1.length ;i < len;++i) {
    gdjs._49Code.GDTrafficLightObjects1[i].hide();
}
}
{ //Subevents
gdjs._49Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Odometer"), gdjs._49Code.GDOdometerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs._49Code.GDOdometerObjects1.length === 0 ) ? 0 :gdjs._49Code.GDOdometerObjects1[0].getPointX("")) - 200, "Controls", 2);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs._49Code.GDOdometerObjects1.length === 0 ) ? 0 :gdjs._49Code.GDOdometerObjects1[0].getPointY("")) - 180, "Controls", 2);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "", 1);
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "t");
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(8).add(1);
}
{ //Subevents
gdjs._49Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8)) > 1;
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Hint"), gdjs._49Code.GDHintObjects1);
gdjs.copyArray(runtimeScene.getObjects("Message"), gdjs._49Code.GDMessageObjects1);
{for(var i = 0, len = gdjs._49Code.GDHintObjects1.length ;i < len;++i) {
    gdjs._49Code.GDHintObjects1[i].hide();
}
for(var i = 0, len = gdjs._49Code.GDMessageObjects1.length ;i < len;++i) {
    gdjs._49Code.GDMessageObjects1[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(8).setNumber(0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 1, 0.1 + ((gdjs.RuntimeObject.getVariableNumber(((gdjs._49Code.GDCarObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs._49Code.GDCarObjects1[0].getVariables()).get("acceleration"))) / 200));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
gdjs._49Code.condition2IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 1;
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
}if ( gdjs._49Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) < 10 ) {
        gdjs._49Code.condition2IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}}
}
if (gdjs._49Code.condition2IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].returnVariable(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")).add(15 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
gdjs._49Code.condition2IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)) == 2;
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
}if ( gdjs._49Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) > -(10) ) {
        gdjs._49Code.condition2IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}}
}
if (gdjs._49Code.condition2IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].returnVariable(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")).sub(15 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
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
gdjs._49Code.condition2IsTrue_0.val = false;
gdjs._49Code.condition3IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( !(gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) < -(5)) ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}if ( gdjs._49Code.condition1IsTrue_0.val ) {
{
gdjs._49Code.condition2IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 0);
}if ( gdjs._49Code.condition2IsTrue_0.val ) {
{
gdjs._49Code.condition3IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) > 0);
}}
}
}
if (gdjs._49Code.condition3IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].setAnimationFrame(0);
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
gdjs._49Code.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList5(runtimeScene);} //End of subevents
}

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

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) < -(5) ) {
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


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraRotation(runtimeScene, "", 1), (( gdjs._49Code.GDCarObjects1.length === 0 ) ? 0 :gdjs._49Code.GDCarObjects1[0].getDirectionOrAngle()) + 90, 0.03), "", 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) > 0 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
/* Reuse gdjs._49Code.GDCarObjects1 */
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].returnVariable(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")).sub((gdjs.RuntimeObject.getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration"))) * 0.2 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) < 0 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
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
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].addPolarForce((gdjs._49Code.GDCarObjects1[i].getDirectionOrAngle()), (gdjs.RuntimeObject.getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration"))) + gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("GearAcceleration")), 0);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs._49Code.GDCarObjects1.length === 0 ) ? 0 :gdjs._49Code.GDCarObjects1[0].getPointY("")) + 100 * Math.sin(3.1415 * (( gdjs._49Code.GDCarObjects1.length === 0 ) ? 0 :gdjs._49Code.GDCarObjects1[0].getDirectionOrAngle()) / 180) + 20, "", 1);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs._49Code.GDCarObjects1.length === 0 ) ? 0 :gdjs._49Code.GDCarObjects1[0].getPointX("")) + 100 * Math.cos((( gdjs._49Code.GDCarObjects1.length === 0 ) ? 0 :gdjs._49Code.GDCarObjects1[0].getDirectionOrAngle()) * 3.1415 / 180) + 20, "", 1);
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
gdjs._49Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8598124);
}
}}
if (gdjs._49Code.condition1IsTrue_0.val) {

{ //Subevents
gdjs._49Code.eventsList9(runtimeScene);} //End of subevents
}

}


{



}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
gdjs._49Code.condition2IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "f");
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) == 0 ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}if ( gdjs._49Code.condition1IsTrue_0.val ) {
{
gdjs._49Code.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}}
}
if (gdjs._49Code.condition2IsTrue_0.val) {
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
}{runtimeScene.getVariables().getFromIndex(4).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
gdjs._49Code.condition2IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "r");
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) == 0 ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}if ( gdjs._49Code.condition1IsTrue_0.val ) {
{
gdjs._49Code.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}}
}
if (gdjs._49Code.condition2IsTrue_0.val) {
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
}{runtimeScene.getVariables().getFromIndex(4).setNumber(2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
gdjs._49Code.condition2IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "c");
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDCarObjects1[i].getVariableNumber(gdjs._49Code.GDCarObjects1[i].getVariables().get("acceleration")) == 0 ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDCarObjects1[k] = gdjs._49Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDCarObjects1.length = k;}if ( gdjs._49Code.condition1IsTrue_0.val ) {
{
gdjs._49Code.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}}
}
if (gdjs._49Code.condition2IsTrue_0.val) {
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
}{runtimeScene.getVariables().getFromIndex(4).setNumber(0);
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "e");
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(6).add(1);
}{runtimeScene.getVariables().getFromIndex(7).setNumber(0);
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) > 1;
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(6).setNumber(0);
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
gdjs._49Code.condition2IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 1;
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
}if ( gdjs._49Code.condition1IsTrue_0.val ) {
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition2IsTrue_0;
gdjs._49Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8616332);
}
}}
}
if (gdjs._49Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].setAnimation(1);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "q");
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(7).add(1);
}{runtimeScene.getVariables().getFromIndex(6).setNumber(0);
}
{ //Subevents
gdjs._49Code.eventsList10(runtimeScene);} //End of subevents
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
gdjs._49Code.condition2IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) == 1;
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "s"));
}if ( gdjs._49Code.condition1IsTrue_0.val ) {
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition2IsTrue_0;
gdjs._49Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8619148);
}
}}
}
if (gdjs._49Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
{for(var i = 0, len = gdjs._49Code.GDCarObjects1.length ;i < len;++i) {
    gdjs._49Code.GDCarObjects1[i].setAnimation(3);
}
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition0IsTrue_0;
gdjs._49Code.condition0IsTrue_1.val = false;
gdjs._49Code.condition1IsTrue_1.val = false;
{
gdjs._49Code.condition0IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 1;
if( gdjs._49Code.condition0IsTrue_1.val ) {
    gdjs._49Code.conditionTrue_1.val = true;
}
}
{
gdjs._49Code.condition1IsTrue_1.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) == 1;
if( gdjs._49Code.condition1IsTrue_1.val ) {
    gdjs._49Code.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition1IsTrue_0;
gdjs._49Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8620508);
}
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "VEHCar_Blinker (ID 1021)_BSB.wav", 2, true, 10, 1);
}}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) == 0;
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) == 0;
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs._49Code.GDEnemyObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDEnemyObjects1[i].getVariableNumber(gdjs._49Code.GDEnemyObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDEnemyObjects1[k] = gdjs._49Code.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDEnemyObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs._49Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs._49Code.GDEnemyObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDEnemyObjects1[i].getVariableNumber(gdjs._49Code.GDEnemyObjects1[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDEnemyObjects1[k] = gdjs._49Code.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDEnemyObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs._49Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs._49Code.GDEnemyObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDEnemyObjects1[i].getVariableNumber(gdjs._49Code.GDEnemyObjects1[i].getVariables().getFromIndex(2)) == 1 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDEnemyObjects1[k] = gdjs._49Code.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDEnemyObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs._49Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs._49Code.GDEnemyObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDEnemyObjects1.length;i<l;++i) {
    if ( gdjs._49Code.GDEnemyObjects1[i].getVariableNumber(gdjs._49Code.GDEnemyObjects1[i].getVariables().getFromIndex(3)) == 1 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDEnemyObjects1[k] = gdjs._49Code.GDEnemyObjects1[i];
        ++k;
    }
}
gdjs._49Code.GDEnemyObjects1.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs._49Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{



}


{


gdjs._49Code.eventsList11(runtimeScene);
}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "T2");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs._49Code.GDBumperObjects1.length = 0;

gdjs._49Code.GDEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects1Objects, 5552, 544, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects1Objects, (( gdjs._49Code.GDEnemyObjects1.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects1[0].getPointX("Back")), (( gdjs._49Code.GDEnemyObjects1.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects1[0].getPointY("Back")), "");
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs._49Code.GDBumperObjects1.length !== 0 ? gdjs._49Code.GDBumperObjects1[0] : null), (gdjs._49Code.GDEnemyObjects1.length !== 0 ? gdjs._49Code.GDEnemyObjects1[0] : null));
}{for(var i = 0, len = gdjs._49Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects1[i].returnVariable(gdjs._49Code.GDEnemyObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T2");
}{for(var i = 0, len = gdjs._49Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs._49Code.GDEnemyObjects1);

for(gdjs._49Code.forEachIndex2 = 0;gdjs._49Code.forEachIndex2 < gdjs._49Code.GDEnemyObjects1.length;++gdjs._49Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Bumper"), gdjs._49Code.GDBumperObjects2);
gdjs._49Code.GDEnemyObjects2.length = 0;


gdjs._49Code.forEachTemporary2 = gdjs._49Code.GDEnemyObjects1[gdjs._49Code.forEachIndex2];
gdjs._49Code.GDEnemyObjects2.push(gdjs._49Code.forEachTemporary2);
gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDEnemyObjects2[i].getVariableNumber(gdjs._49Code.GDEnemyObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDEnemyObjects2[k] = gdjs._49Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDEnemyObjects2.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects2Objects, (gdjs._49Code.GDEnemyObjects2.length !== 0 ? gdjs._49Code.GDEnemyObjects2[0] : null));
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs._49Code.GDBumperObjects2.length ;i < len;++i) {
    gdjs._49Code.GDBumperObjects2[i].setPosition((( gdjs._49Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects2[0].getPointX("Back")) + 16,(( gdjs._49Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects2[0].getPointY("Back")));
}
}}
}

}


{



}


{



}


{


{
}

}


{


gdjs._49Code.eventsList13(runtimeScene);
}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "T1");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs._49Code.GDBumperObjects1.length = 0;

gdjs._49Code.GDEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects1Objects, 4919, 2584, "");
}{for(var i = 0, len = gdjs._49Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects1[i].rotateTowardAngle(-(90), 0, runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects1Objects, (( gdjs._49Code.GDEnemyObjects1.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects1[0].getPointX("Back")) + 8, (( gdjs._49Code.GDEnemyObjects1.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects1[0].getPointY("Back")) + 8, "");
}{for(var i = 0, len = gdjs._49Code.GDBumperObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBumperObjects1[i].rotateTowardAngle(-(90), 0, runtimeScene);
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs._49Code.GDBumperObjects1.length !== 0 ? gdjs._49Code.GDBumperObjects1[0] : null), (gdjs._49Code.GDEnemyObjects1.length !== 0 ? gdjs._49Code.GDEnemyObjects1[0] : null));
}{for(var i = 0, len = gdjs._49Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects1[i].returnVariable(gdjs._49Code.GDEnemyObjects1[i].getVariables().getFromIndex(2)).setNumber(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs._49Code.GDEnemyObjects1);

for(gdjs._49Code.forEachIndex2 = 0;gdjs._49Code.forEachIndex2 < gdjs._49Code.GDEnemyObjects1.length;++gdjs._49Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Bumper"), gdjs._49Code.GDBumperObjects2);
gdjs._49Code.GDEnemyObjects2.length = 0;


gdjs._49Code.forEachTemporary2 = gdjs._49Code.GDEnemyObjects1[gdjs._49Code.forEachIndex2];
gdjs._49Code.GDEnemyObjects2.push(gdjs._49Code.forEachTemporary2);
gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDEnemyObjects2[i].getVariableNumber(gdjs._49Code.GDEnemyObjects2[i].getVariables().getFromIndex(2)) == 1 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDEnemyObjects2[k] = gdjs._49Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDEnemyObjects2.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects2Objects, (gdjs._49Code.GDEnemyObjects2.length !== 0 ? gdjs._49Code.GDEnemyObjects2[0] : null));
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs._49Code.GDBumperObjects2.length ;i < len;++i) {
    gdjs._49Code.GDBumperObjects2[i].setPosition((( gdjs._49Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects2[0].getPointX("Back")) + 8,(( gdjs._49Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects2[0].getPointY("Back")) + 8);
}
}}
}

}


{



}


{



}


{


gdjs._49Code.eventsList15(runtimeScene);
}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "T3");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs._49Code.GDBumperObjects1.length = 0;

gdjs._49Code.GDEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects1Objects, 4856, 24, "");
}{for(var i = 0, len = gdjs._49Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects1[i].rotateTowardAngle(90, 0, runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects1Objects, (( gdjs._49Code.GDEnemyObjects1.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects1[0].getPointX("Back")) + 8, (( gdjs._49Code.GDEnemyObjects1.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects1[0].getPointY("Back")) - 8, "");
}{for(var i = 0, len = gdjs._49Code.GDBumperObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBumperObjects1[i].rotateTowardAngle(90, 0, runtimeScene);
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs._49Code.GDBumperObjects1.length !== 0 ? gdjs._49Code.GDBumperObjects1[0] : null), (gdjs._49Code.GDEnemyObjects1.length !== 0 ? gdjs._49Code.GDEnemyObjects1[0] : null));
}{for(var i = 0, len = gdjs._49Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects1[i].returnVariable(gdjs._49Code.GDEnemyObjects1[i].getVariables().getFromIndex(3)).setNumber(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T3");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs._49Code.GDEnemyObjects1);

for(gdjs._49Code.forEachIndex2 = 0;gdjs._49Code.forEachIndex2 < gdjs._49Code.GDEnemyObjects1.length;++gdjs._49Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Bumper"), gdjs._49Code.GDBumperObjects2);
gdjs._49Code.GDEnemyObjects2.length = 0;


gdjs._49Code.forEachTemporary2 = gdjs._49Code.GDEnemyObjects1[gdjs._49Code.forEachIndex2];
gdjs._49Code.GDEnemyObjects2.push(gdjs._49Code.forEachTemporary2);
gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDEnemyObjects2[i].getVariableNumber(gdjs._49Code.GDEnemyObjects2[i].getVariables().getFromIndex(3)) == 1 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDEnemyObjects2[k] = gdjs._49Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDEnemyObjects2.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects2Objects, (gdjs._49Code.GDEnemyObjects2.length !== 0 ? gdjs._49Code.GDEnemyObjects2[0] : null));
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs._49Code.GDBumperObjects2.length ;i < len;++i) {
    gdjs._49Code.GDBumperObjects2[i].setPosition((( gdjs._49Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects2[0].getPointX("Back")) + 8,(( gdjs._49Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects2[0].getPointY("Back")) - 8);
}
}}
}

}


{



}


{



}


{


gdjs._49Code.eventsList17(runtimeScene);
}


{


{
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "T4");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs._49Code.GDBumperObjects1.length = 0;

gdjs._49Code.GDEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects1Objects, 192, 608, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects1Objects, (( gdjs._49Code.GDEnemyObjects1.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects1[0].getPointX("Back")), (( gdjs._49Code.GDEnemyObjects1.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects1[0].getPointY("Back")), "");
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs._49Code.GDBumperObjects1.length !== 0 ? gdjs._49Code.GDBumperObjects1[0] : null), (gdjs._49Code.GDEnemyObjects1.length !== 0 ? gdjs._49Code.GDEnemyObjects1[0] : null));
}{for(var i = 0, len = gdjs._49Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects1[i].returnVariable(gdjs._49Code.GDEnemyObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "T4");
}{for(var i = 0, len = gdjs._49Code.GDBumperObjects1.length ;i < len;++i) {
    gdjs._49Code.GDBumperObjects1[i].setZOrder(1002);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs._49Code.GDEnemyObjects1);

for(gdjs._49Code.forEachIndex2 = 0;gdjs._49Code.forEachIndex2 < gdjs._49Code.GDEnemyObjects1.length;++gdjs._49Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Bumper"), gdjs._49Code.GDBumperObjects2);
gdjs._49Code.GDEnemyObjects2.length = 0;


gdjs._49Code.forEachTemporary2 = gdjs._49Code.GDEnemyObjects1[gdjs._49Code.forEachIndex2];
gdjs._49Code.GDEnemyObjects2.push(gdjs._49Code.forEachTemporary2);
gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDEnemyObjects2[i].getVariableNumber(gdjs._49Code.GDEnemyObjects2[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDEnemyObjects2[k] = gdjs._49Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDEnemyObjects2.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects2Objects, (gdjs._49Code.GDEnemyObjects2.length !== 0 ? gdjs._49Code.GDEnemyObjects2[0] : null));
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs._49Code.GDBumperObjects2.length ;i < len;++i) {
    gdjs._49Code.GDBumperObjects2[i].setPosition((( gdjs._49Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects2[0].getPointX("Back")),(( gdjs._49Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects2[0].getPointY("Back")));
}
}}
}

}


{



}


{



}


{


{
}

}


{


gdjs._49Code.eventsList19(runtimeScene);
}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs._49Code.GDEnemyObjects1);

for(gdjs._49Code.forEachIndex2 = 0;gdjs._49Code.forEachIndex2 < gdjs._49Code.GDEnemyObjects1.length;++gdjs._49Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Bumper"), gdjs._49Code.GDBumperObjects2);
gdjs._49Code.GDEnemyObjects2.length = 0;


gdjs._49Code.forEachTemporary2 = gdjs._49Code.GDEnemyObjects1[gdjs._49Code.forEachIndex2];
gdjs._49Code.GDEnemyObjects2.push(gdjs._49Code.forEachTemporary2);
gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDBumperObjects2.length;i<l;++i) {
    if ( !(gdjs._49Code.GDBumperObjects2[i].isCollidingWithPoint((( gdjs._49Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects2[0].getPointX("Origin")), (( gdjs._49Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects2[0].getPointY("Origin")))) ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDBumperObjects2[k] = gdjs._49Code.GDBumperObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDBumperObjects2.length = k;}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs._49Code.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDEnemyObjects2[i].getBehavior("TopDownMovement").getMaxSpeed() == 0 ) {
        gdjs._49Code.condition1IsTrue_0.val = true;
        gdjs._49Code.GDEnemyObjects2[k] = gdjs._49Code.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDEnemyObjects2.length = k;}}
if (gdjs._49Code.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs._49Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects2[i].getBehavior("TopDownMovement").setMaxSpeed(200);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs._49Code.GDEnemyObjects1);

for(gdjs._49Code.forEachIndex2 = 0;gdjs._49Code.forEachIndex2 < gdjs._49Code.GDEnemyObjects1.length;++gdjs._49Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Bumper"), gdjs._49Code.GDBumperObjects2);
gdjs._49Code.GDEnemyObjects2.length = 0;


gdjs._49Code.forEachTemporary2 = gdjs._49Code.GDEnemyObjects1[gdjs._49Code.forEachIndex2];
gdjs._49Code.GDEnemyObjects2.push(gdjs._49Code.forEachTemporary2);
gdjs._49Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._49Code.GDBumperObjects2.length;i<l;++i) {
    if ( gdjs._49Code.GDBumperObjects2[i].isCollidingWithPoint((( gdjs._49Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects2[0].getPointX("Origin")), (( gdjs._49Code.GDEnemyObjects2.length === 0 ) ? 0 :gdjs._49Code.GDEnemyObjects2[0].getPointY("Origin"))) ) {
        gdjs._49Code.condition0IsTrue_0.val = true;
        gdjs._49Code.GDBumperObjects2[k] = gdjs._49Code.GDBumperObjects2[i];
        ++k;
    }
}
gdjs._49Code.GDBumperObjects2.length = k;}if (gdjs._49Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs._49Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects2[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}}
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0, "TrafficTimer1");
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(10).setNumber(1);
}
{ //Subevents
gdjs._49Code.eventsList22(runtimeScene);} //End of subevents
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "TrafficTimer1");
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(10).setNumber(2);
}
{ //Subevents
gdjs._49Code.eventsList23(runtimeScene);} //End of subevents
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "TrafficTimer1");
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(10).setNumber(0);
}
{ //Subevents
gdjs._49Code.eventsList24(runtimeScene);} //End of subevents
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 15, "TrafficTimer1");
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(10).setNumber(3);
}
{ //Subevents
gdjs._49Code.eventsList25(runtimeScene);} //End of subevents
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 20, "TrafficTimer1");
}if (gdjs._49Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TrafficTimer1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs._49Code.GDEnemyObjects1);

for(gdjs._49Code.forEachIndex2 = 0;gdjs._49Code.forEachIndex2 < gdjs._49Code.GDEnemyObjects1.length;++gdjs._49Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Stop"), gdjs._49Code.GDStopObjects2);
gdjs._49Code.GDEnemyObjects2.length = 0;


gdjs._49Code.forEachTemporary2 = gdjs._49Code.GDEnemyObjects1[gdjs._49Code.forEachIndex2];
gdjs._49Code.GDEnemyObjects2.push(gdjs._49Code.forEachTemporary2);
gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects2Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDStopObjects2Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {

{ //Subevents: 
gdjs._49Code.eventsList26(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs._49Code.GDEnemyObjects1);

for(gdjs._49Code.forEachIndex2 = 0;gdjs._49Code.forEachIndex2 < gdjs._49Code.GDEnemyObjects1.length;++gdjs._49Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Bumper"), gdjs._49Code.GDBumperObjects2);
gdjs.copyArray(runtimeScene.getObjects("DeleteMe"), gdjs._49Code.GDDeleteMeObjects2);
gdjs._49Code.GDEnemyObjects2.length = 0;


gdjs._49Code.forEachTemporary2 = gdjs._49Code.GDEnemyObjects1[gdjs._49Code.forEachIndex2];
gdjs._49Code.GDEnemyObjects2.push(gdjs._49Code.forEachTemporary2);
gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects2Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDDeleteMeObjects2Objects, false, runtimeScene, false);
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
gdjs._49Code.condition1IsTrue_0.val = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDBumperObjects2Objects, (gdjs._49Code.GDEnemyObjects2.length !== 0 ? gdjs._49Code.GDEnemyObjects2[0] : null));
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs._49Code.GDEnemyObjects2.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._49Code.GDBumperObjects2.length ;i < len;++i) {
    gdjs._49Code.GDBumperObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
}if (gdjs._49Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Stop"), gdjs._49Code.GDStopObjects1);
{for(var i = 0, len = gdjs._49Code.GDStopObjects1.length ;i < len;++i) {
    gdjs._49Code.GDStopObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs._49Code.GDEnemyObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if (gdjs._49Code.condition0IsTrue_0.val) {
/* Reuse gdjs._49Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs._49Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs._49Code.GDEnemyObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(0);
}
}
{ //Subevents
gdjs._49Code.eventsList28(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs._49Code.GDCarObjects1);
gdjs.copyArray(runtimeScene.getObjects("TrafficShower"), gdjs._49Code.GDTrafficShowerObjects1);

gdjs._49Code.condition0IsTrue_0.val = false;
gdjs._49Code.condition1IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDCarObjects1Objects, gdjs._49Code.mapOfGDgdjs_46_9549Code_46GDTrafficShowerObjects1Objects, false, runtimeScene, false);
}if ( gdjs._49Code.condition0IsTrue_0.val ) {
{
{gdjs._49Code.conditionTrue_1 = gdjs._49Code.condition1IsTrue_0;
gdjs._49Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7816340);
}
}}
if (gdjs._49Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(11).add(1);
}
{ //Subevents
gdjs._49Code.eventsList29(runtimeScene);} //End of subevents
}

}


{


gdjs._49Code.condition0IsTrue_0.val = false;
{
gdjs._49Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(11)) > 1;
}if (gdjs._49Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(11).setNumber(0);
}
{ //Subevents
gdjs._49Code.eventsList30(runtimeScene);} //End of subevents
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
gdjs._49Code.GDHintObjects1.length = 0;
gdjs._49Code.GDHintObjects2.length = 0;
gdjs._49Code.GDHintObjects3.length = 0;
gdjs._49Code.GDHintObjects4.length = 0;
gdjs._49Code.GDMessageObjects1.length = 0;
gdjs._49Code.GDMessageObjects2.length = 0;
gdjs._49Code.GDMessageObjects3.length = 0;
gdjs._49Code.GDMessageObjects4.length = 0;
gdjs._49Code.GDEnemyObjects1.length = 0;
gdjs._49Code.GDEnemyObjects2.length = 0;
gdjs._49Code.GDEnemyObjects3.length = 0;
gdjs._49Code.GDEnemyObjects4.length = 0;
gdjs._49Code.GDBumperObjects1.length = 0;
gdjs._49Code.GDBumperObjects2.length = 0;
gdjs._49Code.GDBumperObjects3.length = 0;
gdjs._49Code.GDBumperObjects4.length = 0;
gdjs._49Code.GDFuckObjects1.length = 0;
gdjs._49Code.GDFuckObjects2.length = 0;
gdjs._49Code.GDFuckObjects3.length = 0;
gdjs._49Code.GDFuckObjects4.length = 0;
gdjs._49Code.GDStopObjects1.length = 0;
gdjs._49Code.GDStopObjects2.length = 0;
gdjs._49Code.GDStopObjects3.length = 0;
gdjs._49Code.GDStopObjects4.length = 0;
gdjs._49Code.GDDeleteMeObjects1.length = 0;
gdjs._49Code.GDDeleteMeObjects2.length = 0;
gdjs._49Code.GDDeleteMeObjects3.length = 0;
gdjs._49Code.GDDeleteMeObjects4.length = 0;
gdjs._49Code.GDTrafficLightObjects1.length = 0;
gdjs._49Code.GDTrafficLightObjects2.length = 0;
gdjs._49Code.GDTrafficLightObjects3.length = 0;
gdjs._49Code.GDTrafficLightObjects4.length = 0;
gdjs._49Code.GDTrafficShowerObjects1.length = 0;
gdjs._49Code.GDTrafficShowerObjects2.length = 0;
gdjs._49Code.GDTrafficShowerObjects3.length = 0;
gdjs._49Code.GDTrafficShowerObjects4.length = 0;

gdjs._49Code.eventsList31(runtimeScene);
return;

}

gdjs['_49Code'] = gdjs._49Code;
