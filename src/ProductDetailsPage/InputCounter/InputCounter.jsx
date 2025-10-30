import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 50, height: 48, margin:0, 
       '.MuiOutlinedInput-root':{
        borderTopLeftRadius:'0px',
        borderBottomLeftRadius:'0px',
       }
     }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={"Top 100 films as rated by IMDb users"}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            slotProps={{
              input: {
                ...params.InputProps,
                type: 'search',
              },
            }}
          />
        )}
      />
    </Stack>
  );
}

