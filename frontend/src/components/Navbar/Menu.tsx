import React from 'react';
import { Menu as MuiMenu, MenuItem, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import routes, { MyRouteProps } from '../../routes';
import { Link } from 'react-router-dom'

const listRoutes = [
    'dashboard',
    'categories.list',
    'cast_members.list',
    'genres.list',
    'videos.list',
    'uploads'
];

export const Menu : React.FC = () => {

    const menuRoutes = routes.filter(route => listRoutes.includes(route.name));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event:any) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <>
            <IconButton
                color="inherit"
                edge="start"
                aria-label= "open drawer"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
            >
            <MenuIcon/>
            </IconButton>
            <MuiMenu
                id="menu-appbar"
                open={open}
                anchorEl= {anchorEl}
                onClose={handleClose}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                transformOrigin={{vertical: 'top', horizontal: 'center'}}
                getContentAnchorEl={null}
            >
                {
                    listRoutes.map(
                        (routeName, key) => {
                            const route = menuRoutes.find(route => route.name === routeName) as MyRouteProps;
                            return (
                                <MenuItem
                                    key={key}
                                    component={Link}
                                    to={route.path as string}
                                    onClick={handleClose}
                                >
                                    {route.label}
                                </MenuItem>
                            )
                        }
                    )
                }

            </MuiMenu>
        </>
    );
};
