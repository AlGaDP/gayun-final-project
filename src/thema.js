import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import deepOrange from '@material-ui/core/colors/deepOrange';


export const theme = createMuiTheme({
    spacing: 10,
    palette: {
        primary: {
          main: teal[700],
        },
        secondary: {
          main: deepOrange[400],
        },
    }
});