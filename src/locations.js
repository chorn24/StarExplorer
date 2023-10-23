import React, { useState } from 'react';
import locations from "./locations_data.js";

function Location_() {

  let [index,setIndex] = useState(42)
  const {name,description} = locations[index];

  const orbPick = false
  let LeverFlick = false

  const checkNumber = (number) => {
    return number
  }
  const OrbPickUp = () => {
    return true
  }



  const toSnowVillageBlacksmith = () => {
    setIndex((index)=> {
      let PeopleIndex = 0;
      return checkNumber(PeopleIndex);
    })
  }

  const toCafe = () => {
    setIndex((index)=> {
      let PeopleIndex = 1;
      return checkNumber(PeopleIndex);
    })
  }

  const toCaveEntrance = () => {
    setIndex((index)=> {
      let PeopleIndex = 2;
      return checkNumber(PeopleIndex);
    })
  }

  const toCaveRuins = () => {
    setIndex((index)=> {
      let PeopleIndex = 3;
      return checkNumber(PeopleIndex);
    })
  }

  const toHeartOfRuins = () => {
    setIndex((index)=> {
      let PeopleIndex = 4;
      return checkNumber(PeopleIndex);
    })
  }

  const toSnowVillageLibrary = () => {
    setIndex((index)=> {
      let PeopleIndex = 5;
      return checkNumber(PeopleIndex);
    })
  }

  const toMountainPath = () => {
    setIndex((index)=> {
      let PeopleIndex = 6;
      return checkNumber(PeopleIndex);
    })
  }

  const toSnowLandingStation = () => {
    setIndex((index)=> {
      let PeopleIndex = 7;
      return checkNumber(PeopleIndex);
    })
  }

  const toSuspiciousTree = () => {
    setIndex((index)=> {
      let PeopleIndex = 8;
      return checkNumber(PeopleIndex);
    })
  }

  const toSnowTownCenter = () => {
    setIndex((index)=> {
      let PeopleIndex = 9;
      return checkNumber(PeopleIndex);
    })
  }

  const toDesertCamp = () => {
    setIndex((index)=> {
      let PeopleIndex = 10;
      return checkNumber(PeopleIndex);
    })
  }

  const toDesertFestival = () => {
    setIndex((index)=> {
      let PeopleIndex = 11;
      return checkNumber(PeopleIndex);
    })
  }

  const toDesertInn = () => {
    setIndex((index)=> {
      let PeopleIndex = 12;
      return checkNumber(PeopleIndex);
    })
  }

  const toDesertMarket = () => {
    setIndex((index)=> {
      let PeopleIndex = 13;
      return checkNumber(PeopleIndex);
    })
  }

  const toOasisBar = () => {
    setIndex((index)=> {
      let PeopleIndex = 14;
      return checkNumber(PeopleIndex);
    })
  }

  const toOrbPedestal = () => {
    setIndex((index)=> {
      let PeopleIndex = 15;
      return checkNumber(PeopleIndex);
    })
  }

  const toPathToPyramid= () => {
    setIndex((index)=> {
      let PeopleIndex = 16;
      return checkNumber(PeopleIndex);
    })
  }

  const toPathToVillage = () => {
    setIndex((index)=> {
      let PeopleIndex = 17;
      return checkNumber(PeopleIndex);
    })
  }

  const toPyramidEntrance = () => {
    setIndex((index)=> {
      let PeopleIndex = 18;
      return checkNumber(PeopleIndex);
    })
  }
  const toPyramidExitHallway = () => {
    setIndex((index)=> {
      let PeopleIndex = 19;
      return checkNumber(PeopleIndex);
    })
  }
  const toPyramidHallway = () => {
    setIndex((index)=> {
      let PeopleIndex = 20;
      return checkNumber(PeopleIndex);
    })
  }
  const toPyramidHeart = () => {
    setIndex((index)=> {
      let PeopleIndex = 21;
      return checkNumber(PeopleIndex);
    })
  }
  const toPyramidHeartNorb = () => {
    setIndex((index)=> {
      OrbPickUp()
      console.log(orbPick)
      let PeopleIndex = 22;
      return checkNumber(PeopleIndex);
    })
  }
  const toInsideOfStrangeDoorLocked = () => {
    setIndex((index)=> {
      let PeopleIndex = 23;
      return checkNumber(PeopleIndex);
    })
  }
  const toInsideOfStrangeDoorUnlocked = () => {
    setIndex((index)=> {
      let PeopleIndex = 24;
      return checkNumber(PeopleIndex);
    })
  }
  const toOutsideOfStrangeDoor = () => {
    setIndex((index)=> {
      let PeopleIndex = 25;
      return checkNumber(PeopleIndex);
    })
  }
  const toAbandonedLab = () => {
    setIndex((index)=> {
      let PeopleIndex = 26;
      return checkNumber(PeopleIndex);
    })
  }
  const toCentralElevator = () => {
    setIndex((index)=> {
      let PeopleIndex = 27;
      return checkNumber(PeopleIndex);
    })
  }
  const toCityFountain = () => {
    setIndex((index)=> {
      let PeopleIndex = 28;
      return checkNumber(PeopleIndex);
    })
  }
  const toCityWindmill = () => {
    setIndex((index)=> {
      let PeopleIndex = 29;
      return checkNumber(PeopleIndex);
    })
  }
  const toClosedDoorway = () => {
    setIndex((index)=> {
      let PeopleIndex = 30;
      return checkNumber(PeopleIndex);
    })
  }
  const toDocks = () => {
    setIndex((index)=> {
      let PeopleIndex = 31;
      return checkNumber(PeopleIndex);
    })
  }
  const toFishMarket = () => {
    setIndex((index)=> {
      let PeopleIndex = 32;
      return checkNumber(PeopleIndex);
    })
  }
  const toGarden = () => {
    setIndex((index)=> {
      let PeopleIndex = 33;
      return checkNumber(PeopleIndex);
    })
  }
  const toLabCore = () => {
    setIndex((index)=> {
      let PeopleIndex = 34;
      return checkNumber(PeopleIndex);
    })
  }
  const toLabDistrict = () => {
    setIndex((index)=> {
      let PeopleIndex = 35;
      return checkNumber(PeopleIndex);
    })
  }
  const toOceanCityLibrary = () => {
    setIndex((index)=> {
      let PeopleIndex = 36;
      return checkNumber(PeopleIndex);
    })
  }
  const toShatteredEnclosures = () => {
    setIndex((index)=> {
      let PeopleIndex = 37;
      return checkNumber(PeopleIndex);
    })
  }
  const toOceanLandingStation = () => {
    setIndex((index)=> {
      let PeopleIndex = 38;
      return checkNumber(PeopleIndex);
    })
  }
  const toStrangeDoorway = () => {
    setIndex((index)=> {
      let PeopleIndex = 39;
      return checkNumber(PeopleIndex);
    })
  }
  const toTheater = () => {
    setIndex((index)=> {
      let PeopleIndex = 40;
      return checkNumber(PeopleIndex);
    })
  }
  const toLandingBay = () => {
    setIndex((index)=> {
      let PeopleIndex = 41;
      return checkNumber(PeopleIndex);
    })
  }
  const toYourRoom = () => {
    setIndex((index)=> {
      let PeopleIndex = 42;
      return checkNumber(PeopleIndex);
    })
  }
  const toSpace = () => {
    setIndex((index)=> {
      let PeopleIndex = 43;
      return checkNumber(PeopleIndex);
    })
  }
  const toSpaceShip = () => {
    setIndex((index)=> {
      let PeopleIndex = 44;
      return checkNumber(PeopleIndex);
    })
  }
  const toVoidPlatform = () => {
    setIndex((index)=> {
      let PeopleIndex = 45;
      return checkNumber(PeopleIndex);
    })
  }
  const toAdministrator = () => {
    setIndex((index)=> {
      let PeopleIndex = 46;
      return checkNumber(PeopleIndex);
    })
  }
  const toCafeteria = () => {
    setIndex((index)=> {
      let PeopleIndex = 47;
      return checkNumber(PeopleIndex);
    })
  }
  const toCommunications = () => {
    setIndex((index)=> {
      let PeopleIndex = 48;
      return checkNumber(PeopleIndex);
    })
  }
  const toElectrical = () => {
    setIndex((index)=> {
      let PeopleIndex = 49;
      return checkNumber(PeopleIndex);
    })
  }
  const toLowerEngine = () => {
    setIndex((index)=> {
      let PeopleIndex = 50;
      return checkNumber(PeopleIndex);
    })
  }
  const toMedBay = () => {
    setIndex((index)=> {
      let PeopleIndex = 51;
      return checkNumber(PeopleIndex);
    })
  }
  const toNavigation = () => {
    setIndex((index)=> {
      let PeopleIndex = 52;
      return checkNumber(PeopleIndex);
    })
  }
  const toOpenAirlock = () => {
    setIndex((index)=> {
      let PeopleIndex = 53;
      return checkNumber(PeopleIndex);
    })
  }
  const toOxygenGen = () => {
    setIndex((index)=> {
      let PeopleIndex = 54;
      return checkNumber(PeopleIndex);
    })
  }
  const toReactor = () => {
    setIndex((index)=> {
      let PeopleIndex = 55;
      return checkNumber(PeopleIndex);
    })
  }
  const toSecurity = () => {
    setIndex((index)=> {
      let PeopleIndex = 56;
      return checkNumber(PeopleIndex);
    })
  }
  const toShields = () => {
    setIndex((index)=> {
      let PeopleIndex = 57;
      return checkNumber(PeopleIndex);
    })
  }
  const toStorage = () => {
    setIndex((index)=> {
      let PeopleIndex = 58;
      return checkNumber(PeopleIndex);
    })
  }
  const toUpperEngine = () => {
    setIndex((index)=> {
      let PeopleIndex = 59;
      return checkNumber(PeopleIndex);
    })
  }
  const toWeapons = () => {
    setIndex((index)=> {
      let PeopleIndex = 60;
      return checkNumber(PeopleIndex);
    })
  }
  
  if (index === 0){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Light_Blue' onClick={toSnowTownCenter}>Town Bonfire</button></div>)
  }
  if (index === 1){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Light_Blue' onClick={toSnowTownCenter}>Town Bonfire</button></div>)
  }
  if (index === 2){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Light_Blue' onClick={toMountainPath}>Mountain Path</button>
    <button className='Buttons Cyan' onClick={toCaveRuins}>Cave Ruins</button></div>)
  }
  if (index === 3){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Cyan' onClick={toHeartOfRuins}>Heart of Ruins</button>
    <button className='Buttons Light_Blue' onClick={toCaveEntrance}>Cave Entrance</button></div>)
  }
  if (index === 4){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Cyan' onClick={toCaveRuins}>Cave Ruins</button>
    <button className='Buttons Light_Blue' onClick={toSuspiciousTree}>Suspicious Tree</button></div>)
  }
  if (index === 5){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Light_Blue' onClick={toSnowTownCenter}>Town Bonfire</button></div>)
  }
  if (index === 6){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Light_Blue' onClick={toSnowTownCenter}>Town Bonfire</button>
    <button className='Buttons Light_Blue' onClick={toSuspiciousTree}>Suspicious Tree</button>
    <button className='Buttons Light_Blue' onClick={toCaveEntrance}>Cave Entrance</button></div>)
  }
  if (index === 7){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Purple' onClick={toSpace}>Space</button>
    <button className='Buttons Light_Blue' onClick={toSnowTownCenter}>Town Bonfire</button></div>)
  }
  if (index === 8){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Light_Blue' onClick={toMountainPath}>Mountain Path</button>
    <button className='Buttons Light_Blue' onClick={toCaveEntrance}>Cave Entrance</button></div>)
  }
  if (index === 9){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Light_Blue' onClick={toSnowVillageLibrary
    }>Library</button>
    <button className='Buttons Light_Blue' onClick={toCafe}>Cafe</button>
    <button className='Buttons Light_Blue' onClick={toSnowVillageBlacksmith}>Blacksmith</button>
    <button className='Buttons Light_Blue' onClick={toSnowLandingStation}>Snow Station</button>
    <button className='Buttons Light_Blue' onClick={toMountainPath}>Mountain Path</button></div>)
  }
  if (index === 10){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Purple' onClick={toSpace}>Space</button>
    <button className='Buttons Yellow' onClick={toPathToVillage}>Village Path</button>
    <button className='Buttons Yellow' onClick={toPathToPyramid}>Pyramid Path</button></div>)
  }
  if (index === 11){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Yellow' onClick={toOasisBar}>Oasis Bar</button>
    <button className='Buttons Yellow' onClick={toDesertMarket}>Market</button>
    <button className='Buttons Yellow' onClick={toDesertInn}>Inn</button>
    <button className='Buttons Yellow' onClick={toPathToVillage}>Path to Village</button></div>)
  }
  if (index === 12){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Yellow' onClick={toDesertFestival}>Festival</button></div>)
  }
  if (index === 13){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Yellow' onClick={toDesertFestival}>Festival</button></div>)
  }
  if (index === 14){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Yellow' onClick={toDesertFestival}>Festival</button></div>)
  }
  //_______________________ORB_____________________________________________
  if (index === 15){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Cyan' onClick={toPyramidHeart}>Pyramid Heart</button></div>)
}
  if (index === 16){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Yellow' onClick={toDesertCamp}>Desert Camp</button>
    <button className='Buttons Yellow' onClick={toPyramidEntrance}>Pyramid Entrance</button></div>)
  }
  if (index === 17){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Yellow' onClick={toDesertFestival}>Festival</button>
    <button className='Buttons Yellow' onClick={toOutsideOfStrangeDoor}>Strange Door</button>
    <button className='Buttons Yellow' onClick={toDesertCamp}>Desert Camp</button></div>)
  }
  if (index === 18){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Yellow' onClick={toPathToPyramid}>Pyramid Path</button>
    <button className='Buttons Yellow' onClick={toPyramidHallway}>Hallway</button></div>)
  }
  //_____________________________LEVER??_____________________



  if (index === 19){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Cyan' onClick={toPyramidHeart}>Pyramid Heart</button>
    <button className='Buttons Cyan' onClick={toInsideOfStrangeDoorUnlocked}>Pull the lever?</button></div>)
  }




  if (index === 20){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Cyan' onClick={toPyramidHeart}>Pyramid Heart</button></div>)
  }
  if (index === 21){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Cyan' onClick={toPyramidExitHallway}>Exit Hallway</button>
    </div>)
  }
  if (index === 22){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Cyan' onClick={toPyramidExitHallway}>Exit Hallway</button></div>)
  }






  if (index === 23){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Cyan' onClick={toInsideOfStrangeDoorLocked}>Locked Door</button>
    <button className='Buttons Cyan'>Lever</button></div>)
  }






  if (index === 24){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Yellow' onClick={toOutsideOfStrangeDoor}>Unlocked Door</button>
    </div>)
  }
  if (index === 25){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Yellow' onClick={toPathToVillage}>Village Path</button></div>)
  }




//Ocean
  if (index === 26){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Blue' onClick={toLabDistrict}>Lab District</button>
    <button className='Buttons Blue' onClick={toShatteredEnclosures}>Shattered Enclosures</button></div>)
  }
  if (index === 27){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Blue' onClick={toCityWindmill}>Windmill</button>
    <button className='Buttons Blue' onClick={toCityFountain}>Fountain</button></div>)
  }
  if (index === 28){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Blue' onClick={toCentralElevator}>Central Elevator</button>
    <button className='Buttons Blue' onClick={toOceanCityLibrary}>Library</button>
    <button className='Buttons Blue' onClick={toTheater}>Theater</button>
    <button className='Buttons Blue' onClick={toLabDistrict}>Lab District</button></div>)
  }
  if (index === 29){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Blue' onClick={toOceanLandingStation}>Ocean Station</button>
    <button className='Buttons Blue' onClick={toGarden}>Garden</button>
    <button className='Buttons Blue' onClick={toFishMarket}>Fish Market</button>
    <button className='Buttons Blue' onClick={toCentralElevator}>Central Elevator</button></div>)
  }
  if (index === 30){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Cyan' onClick={toLabCore}>Lab Core</button></div>)
  }
  if (index === 31){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Blue' onClick={toOceanLandingStation}>Ocean Station</button></div>)
  }
  if (index === 32){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Blue' onClick={toGarden}>Garden</button>
    <button className='Buttons Blue' onClick={toCityWindmill}>Windmill</button></div>)
  }
  if (index === 33){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Blue' onClick={toFishMarket}>Fish Market</button>
    <button className='Buttons Blue' onClick={toCityWindmill}>Windmill</button></div>)
  }






  if (index === 34){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Blue' onClick={toShatteredEnclosures}>Shattered Enclosures</button>
    <button className='Buttons Cyan' onClick={toStrangeDoorway}>Strange Doorway</button></div>)
  }





  if (index === 35){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Blue' onClick={toCityFountain}>Fountain</button>
    <button className='Buttons Blue' onClick={toAbandonedLab}>Abandoned Lab</button></div>)
  }
  if (index === 36){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Blue' onClick={toCityFountain}>Fountain</button></div>)
  }
  if (index === 37){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Blue' onClick={toAbandonedLab}>Abandoned Lab</button>
    <button className='Buttons Blue' onClick={toLabCore}>Lab Core</button></div>)
  }
  if (index === 38){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Purple' onClick={toSpace}>Space</button>
    <button className='Buttons Blue' onClick={toDocks}>Docks</button>
    <button className='Buttons Blue' onClick={toCityWindmill}>Windmill</button></div>)
  }
  if (index === 39){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toVoidPlatform}>Void Platform</button></div>)
  }
  if (index === 40){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Blue' onClick={toCityFountain}>Fountain</button></div>)
  }
  if (index === 41){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Green' onClick={toYourRoom}>Your Room</button>
    <button className='Buttons Green' onClick={toSpaceShip}>Spaceship</button></div>)
  }
  if (index === 42){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Green' onClick={toLandingBay}>Landing Bay</button>
    </div>)
  }
  if (index === 43){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Light_Blue' onClick={toSnowLandingStation}>Snow Planet</button>
    <button className='Buttons Blue' onClick={toOceanLandingStation}>Ocean Planet</button>
    <button className='Buttons Yellow' onClick={toDesertCamp}>Desert Planet</button>
    <button className='Buttons Green' onClick={toLandingBay}>Landing Bay</button></div>)
  }
  if (index === 44){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Green' onClick={toLandingBay}>Landing Bay</button>
    <button className='Buttons Purple' onClick={toSpace}>Space</button></div>)
  }
  if (index === 45){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Light_Blue' onClick={toSuspiciousTree}>Tree</button>
    <button className='Buttons Blue' onClick={toDocks}>Docks</button>
    <button className='Buttons Yellow' onClick={toPyramidHallway}>Pyramid Heart</button>
    <button className='Buttons Magenta' onClick={toOpenAirlock}>Open Airlock</button></div>)
  }
  if (index === 46){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toCafeteria}>Cafeteria</button>
    <button className='Buttons Magenta' onClick={toStorage}>Storage</button></div>)
  }
  if (index === 47){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toWeapons}>Weapons</button>
    <button className='Buttons Magenta' onClick={toAdministrator}>Administrator</button>
    <button className='Buttons Magenta' onClick={toMedBay}>Med Bay</button>
    <button className='Buttons Magenta' onClick={toStorage}>Storage</button>
    <button className='Buttons Magenta' onClick={toUpperEngine}>Upper Engine</button></div>)
  }
  if (index === 48){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toShields}>Shields</button>
    <button className='Buttons Magenta' onClick={toStorage}>Storage</button></div>)
  }
  if (index === 49){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toStorage}>Storage</button>
    <button className='Buttons Magenta' onClick={toLowerEngine}>Lower Engine</button></div>)
  }
  if (index === 50){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toElectrical}>Electrical</button>
    <button className='Buttons Magenta' onClick={toStorage}>Storage</button>
    <button className='Buttons Magenta' onClick={toSecurity}>Security</button>
    <button className='Buttons Magenta' onClick={toReactor}>Reactor</button>
    <button className='Buttons Magenta' onClick={toUpperEngine}>Upper Engine</button>
    </div>)
  }
  if (index === 51){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toUpperEngine}>Upper Engine</button>
    <button className='Buttons Magenta' onClick={toCafeteria}>Cafeteria</button></div>)
  }
  if (index === 52){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toWeapons}>Weapons</button>
    <button className='Buttons Magenta' onClick={toOxygenGen}>Oxygen Generator</button>
    <button className='Buttons Magenta' onClick={toShields}>Shields</button></div>)
  }
  if (index === 53){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toStorage}>Storage</button>
    <button className='Buttons Magenta' onClick={toVoidPlatform}>Void Platform</button></div>)
  }
  if (index === 54){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toWeapons}>Weapons</button>
    <button className='Buttons Magenta' onClick={toShields}>Shields</button>
    <button className='Buttons Magenta' onClick={toNavigation}>Navigation</button></div>)
  }
  if (index === 55){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toUpperEngine}>Upper Engine</button>
    <button className='Buttons Magenta' onClick={toLowerEngine}>Lower Engine</button>
    <button className='Buttons Magenta' onClick={toSecurity}>Security</button></div>)
  }
  if (index === 56){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toLowerEngine}>Lower Engine</button>
    <button className='Buttons Magenta' onClick={toUpperEngine}>Upper Engine</button>
    <button className='Buttons Magenta' onClick={toReactor}>Reactor</button></div>)
  }
  if (index === 57){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toOxygenGen}>Oxygen Generator</button>
    <button className='Buttons Magenta' onClick={toWeapons}>Weapons</button>
    <button className='Buttons Magenta' onClick={toNavigation}>Navigation</button>
    <button className='Buttons Magenta' onClick={toCommunications}>Communications</button>
    <button className='Buttons Magenta' onClick={toStorage}>Storage</button></div>)
  }
  if (index === 58){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toOpenAirlock}>Air Lock</button>
    <button className='Buttons Magenta' onClick={toAdministrator}>Administrator</button>
    <button className='Buttons Magenta' onClick={toCafeteria}>Cafeteria</button>
    <button className='Buttons Magenta' onClick={toCommunications}>Communications</button>
    <button className='Buttons Magenta' onClick={toShields}>Shields</button>
    <button className='Buttons Magenta' onClick={toElectrical}>Electrical</button>
    <button className='Buttons Magenta' onClick={toLowerEngine}>Lower Engine</button>
    </div>)
  }
  if (index === 59){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toLowerEngine}>Lower Engine</button>
    <button className='Buttons Magenta' onClick={toSecurity}>Security</button>
    <button className='Buttons Magenta' onClick={toReactor}>Reactor</button>
    <button className='Buttons Magenta' onClick={toMedBay}>Med bay</button>
    <button className='Buttons Magenta' onClick={toCafeteria}>Cafeteria</button></div>)
  }
  if (index === 60){
    return (<div><p>Location: {name}</p>
    <p>{description}</p>
    <button className='Buttons Magenta' onClick={toCafeteria}>Cafeteria</button>
    <button className='Buttons Magenta' onClick={toNavigation}>Navigation</button>
    <button className='Buttons Magenta' onClick={toShields}>Shields</button>
    <button className='Buttons Magenta' onClick={toOxygenGen}>Oxygen Generator</button>
    </div>)
  }
  
}


export default Location_;