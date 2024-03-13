import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';

interface NavigationProps {
  activeNav: string;
  onNavChange: (nav: string) => void;
}

const Navigation = ({ activeNav, onNavChange }: NavigationProps) => {
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };

  // const handleNavClick = (nav: string) => {
  //   onNavChange(nav);
  //   handleMenuClose();
  // };

  return (
    <div>
      <Button variant="contained" 
      // onClick={handleMenuOpen}
      >
        {activeNav}
      </Button>
      <Menu
        // anchorEl={anchorEl}
        open={true}
        // onClose={handleMenuClose}
      >
        <MenuItem 
        // onClick={() => handleNavClick('Database')}
        >Database</MenuItem>
        <MenuItem 
        // onClick={() => handleNavClick('Eventing')} disabled
        >
          Eventing (disabled)
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navigation;
