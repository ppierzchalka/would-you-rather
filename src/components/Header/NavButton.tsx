import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';

export enum ButtonType {
    Link = 'Link',
    Action = 'Action'
}

export type NavButtonProps = {
    icon: React.ReactNode;
    label: string;
} & (
        {
            type: ButtonType.Action
            onClick: () => void;
        } | {
            type: ButtonType.Link
            path: string;
        }
    )

export const NavButton: React.FC<NavButtonProps> = (props) => {
    switch (props.type) {
        case ButtonType.Link:
            return (
                <NavLink to={props.path} exact>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        disableElevation
                        startIcon={props.icon} aria-label={props.label}
                    >
                        <Typography variant="button" display="block">
                            {props.label}
                    </Typography>
                    </Button>
                </NavLink>
            )
        case ButtonType.Action:
            return (
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        disableElevation
                    startIcon={props.icon} aria-label={props.label}
                        onClick={(e) => {
                            e.preventDefault();
                            props.onClick();
                        }}
                    >
                        <Typography variant="button" display="block">
                        {props.label}
                    </Typography>
                    </Button>
            )

    }
}
