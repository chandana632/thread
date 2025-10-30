import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
        ...theme.applyStyles('dark', {
          color: 'inherit',
        }),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

function useResponsiveFontSize() {
  const [fontSize, setFontSize] = React.useState('var(--font-size-text-large)');

  React.useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 768 && width < 1024) {
        setFontSize('var(--font-size-text-small)');
      } else {
        setFontSize('var(--font-size-text-large)');
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return fontSize;
}



export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttonFontSize = useResponsiveFontSize();

  return (
    <div>
      <Button
        id="demo-customized-button"
        sx={
         {
                backgroundColor: 'transparent',
                color: 'var(--font-dark-text-color)',
                textTransform: 'capitalize',
                fontSize: buttonFontSize,
                fontWeight: 'var(--font-regular)',
                alignItems: 'center',
                fontFamily: 'Times New Roman',
                padding: '0',
                lineHeight: '0',
                '& .MuiSvgIcon-root': {
                  fontSize: '2rem',
                },
              }
        }
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Category
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        slotProps={{
          list: {
            'aria-labelledby': 'demo-customized-button',
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          sx={{
            fontSize: 'var(--font-size-text-large)',
            fontWeight: 'var(--font-regular)',
          }}
          onClick={handleClose}
          disableRipple
        >
          Blouse
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          sx={{
            fontSize: 'var(--font-size-text-large)',
            fontWeight: 'var(--font-regular)',
          }}
          onClick={handleClose}
          disableRipple
        >
          Lehenga
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          sx={{
            fontSize: 'var(--font-size-text-large)',
            fontWeight: 'var(--font-regular)',
          }}
          onClick={handleClose}
          disableRipple
        >
          Saree
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
