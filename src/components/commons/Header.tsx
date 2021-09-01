import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        marginBottom: "3%"
    }
});

const Header: React.FC = () => {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Typography>React App</Typography>
            </Toolbar>
        </AppBar>
    )

}

export default Header;