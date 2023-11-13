import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@react-google-maps/api';

import useStyles from './styles' 

const Header = ({onPlaceChanged, onLoad}) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <img       src="https://cdn-icons-png.flaticon.com/512/3175/3175073.png" 
            alt="Bookmark Icon"
            style={{ width: '50px', height: '50px' }}
          />
          <Typography variant='h5'>Travel Guru</Typography>
        </div>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{ root: classes.inputRoot, input: classes.inputInput }}
            />
          </div>
        </Autocomplete>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
