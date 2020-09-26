import React from 'react';
import {Typography} from "@material-ui/core";
import SelectInput from "@material-ui/core/Select/SelectInput";
import Input from "@material-ui/core/Input";

export function StartPage() {
  return <div>

    <Typography>Tombstone, der digitale Friedhof</Typography>

    <Input type="text">
      👤 Nach Namen suchen [🔎]
    </Input>
    <br/>
    oder

    <Input type="text">
      🗺️ Ort suchen [🔎]
    </Input>


    <br/>

    <SelectInput>
      <option>DE</option>
    </SelectInput>
  </div>
}