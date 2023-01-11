import React from "react";
import aDifferentName from "./parks/howManyParks";
import {trees, wildlife} from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";

function ColoradoStateParks() {
  aDifferentName(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

console.log(RMFunctions.trees);

RMFunctions.wildlife();

RMFunctions.elevation();
