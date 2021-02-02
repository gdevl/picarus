import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Tooltip from '@material-ui/core/Tooltip';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#222',
        borderTop: '1px solid #C678DD',
        padding: theme.spacing(1),
    },
    footer__appBar: {
        alignItems: 'center',
        backgroundColor: '#222',
        borderTop: '1px solid #C678DD',
        padding: theme.spacing(1),
        top: 'auto',
        bottom: 0,
    },
    footer__appBar_iconbuttons: {
        margin: '0 0.25rem',
    },
    grow: {
        flexGrow: 1,
    },
}));

const Footer = () => {
    const classes = useStyles();

    const handleLinkedInClick = () => {
        return (window.location.href =
            'https://www.linkedin.com/in/gabriel-lane-4120651bb/');
    };

    const handleGitHubClick = () => {
        return (window.location.href = 'https://github.com/gdevl/picarus');
    };

    return (
        <>
            {/* Footer */}
            <AppBar position="fixed" className={classes.footer__appBar}>
                <Toolbar>
                    <div className={classes.grow} />
                    <Link to="https://www.google.com/">
                        <Tooltip title="Project Repository">
                            <IconButton
                                color="inherit"
                                className={classes.footer__appBar_iconbuttons}
                                onClick={handleGitHubClick}
                            >
                                <GitHubIcon
                                    color="primary"
                                    className="main__appbar_icons"
                                />
                            </IconButton>
                        </Tooltip>
                    </Link>
                    <Tooltip title="Connect with me">
                        <Button
                            edge="end"
                            color="inherit"
                            className={classes.footer__appBar_iconbuttons}
                        >
                            <LinkedInIcon
                                color="primary"
                                className="main__appbar_icons"
                                onClick={handleLinkedInClick}
                            />
                        </Button>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            {/* End footer */}
        </>
    );
};

export default Footer;
