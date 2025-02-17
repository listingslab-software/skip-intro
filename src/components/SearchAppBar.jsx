import React from 'react'
import clsx from 'clsx'
import {
    fade, 
    makeStyles,
    AppBar,
    Typography,
    IconButton,
    Toolbar,
    InputBase,
    Avatar,
} from '@material-ui/core/'

import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  searchAppBar: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  avatar:{
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export function SearchAppBar() {
  const classes = useStyles()

  return <div className={classes.searchAppBar}>
          <AppBar position="static" color={ `secondary` }>
            <Toolbar>
              
              <Avatar src={ `/svg/packages.svg` } className={ clsx ( classes.avatar ) } />

              <Typography className={classes.title} variant="h6" noWrap>
                Listingslab Packages
              </Typography>


              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>

              <IconButton
                edge={ `end` }
                className={ clsx(classes.menuButton) }
                color={ `primary` }
                aria-label={`thumb-menu`}
              >
                <MenuIcon />
              </IconButton>


            </Toolbar>
          </AppBar>
        </div>
}
