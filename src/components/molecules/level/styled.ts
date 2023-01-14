import { Slider, styled } from '@mui/material';

export const marks = [
  {
    value: 0,
  },
  {
    value: 25,
  },
  {
    value: 50,
  },
  {
    value: 75,
  },
  {
    value: 100,
  },
];

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

export const IOSSlider = styled(Slider)(({ theme }) => ({
  height: 30,
  padding: '15px 0',
  '& .MuiSlider-thumb': {
    height: 28,
    width: 28,
    backgroundColor: 'gold',
    boxShadow: iOSBoxShadow,
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 18,
    fontWeight: 'normal',
    top: -20,
    backgroundColor: 'gold',
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: 'black',
    },
  },
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    backgroundColor: 'black',
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#bfbfbf',
    height: 15,
    width: 1,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
  '&.Mui-disabled': {
    color: 'gold',
  },
}));
