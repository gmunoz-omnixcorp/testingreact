import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Divider  } from '@material-ui/core/';
import { IconHelper } from '../helpers/IconHelper';

export const NavBar = () => {

    const menu = [
        {label: 'Servicios', url: 'servicios', icon: 'AssessmentIcon'},
        {label: 'Rutas', url: 'rutas', icon: 'CloudIcon'},
        {label: 'Fuentes', url: 'fuentes', icon: 'ExtensionIcon'},
    ];

    return (
        <List>
            <ListItem button>
                <ListItemIcon>{IconHelper('AppsIcon')}</ListItemIcon>
                <ListItemText primary=' Testing React' />
            </ListItem>
            <Divider />
            {menu.map((text, index) => (
            <ListItem button key={index}>
                <ListItemIcon>{IconHelper(text.icon)}</ListItemIcon>
                <a href={text.url}>
                    <ListItemText primary={text.label} />
                </a>
            </ListItem>
            ))}
        </List>
    )
}
