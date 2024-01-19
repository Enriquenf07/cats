import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';



export default function Menu({ setIndex, index }) {
    const MENU = [
        {
            id: 0,
            label: 'Home',
            icon: <HomeIcon />
        },
        {
            id: 1,
            label: 'Character',
            icon: <PersonIcon />
        },
        {
            id: 2,
            label: 'Settings',
            icon: <SettingsIcon />
        }
    ]
    
    return (
        <Grid item xs={12}>
            <Paper elevation={6} >
                <BottomNavigation
                    value={index}
                    onChange={(event, newValue) => {
                        setIndex(newValue);
                    }}
                >
                    {MENU.map((item) => {
                        return <BottomNavigationAction key={item.id} label={item.label} icon={item.icon} />
                    })}
                </BottomNavigation>
            </Paper>
        </Grid>
    );
}