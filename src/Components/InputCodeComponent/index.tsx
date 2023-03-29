import { useState, forwardRef } from 'react';
import TextField from '@mui/material/TextField';

export const InputCodeComponent = forwardRef<HTMLDivElement>((props, ref) => {
  const [value, setValue] = useState('');

  const handleChange = (event: { target: { value: any } }) => {
    const currentValue = event.target.value;
    const newValue = currentValue.replace(/[^\d]/g, '');
    setValue(newValue);
  };

  return (
    <TextField
      sx={{ width: '100%' }}
      variant="outlined"
      value={value}
      ref={ref}
      {...props}
      onChange={handleChange}
      inputProps={{ maxLength: 1 }}
    />
  );
});
