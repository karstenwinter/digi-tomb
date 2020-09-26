import React from 'react';
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";

export function StartPage() {
  return <div>

    <Typography variant="h3">
      Tombstone, der digitale Friedhof
    </Typography>

    <br/>
    <TextField placeholder="👤 Nach Namen suchen 🔎">
    </TextField>

    <br/>
    <Typography variant="caption">
      oder
    </Typography>

    <br/>

    <TextField placeholder="🗺️ Ort suchen 🔎">
    </TextField>

    <br/>

    <Select autoWidth native={false} multiple={false}>
      <option>DE</option>
    </Select>
  </div>
}