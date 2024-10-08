import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields({ multiline, rows, label, input, handleInput, type = 'text' }) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label={label}
          multiline = {multiline}
          rows={rows}
          onChange={handleInput}
          value={input}
          type={type}
        />
      </div>
    </Box>
  );
}
