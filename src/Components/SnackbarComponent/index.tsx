import { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import Slide, { SlideProps } from "@mui/material/Slide";

export function SnackbarComponent(props: {
  message: string;
  showSnackbar: boolean;
  handleClose: () => void;
  severity: "success" | "error" |  "warning" | "info";
}) {
  const vertical = "top";
  const horizontal = "center";
  function TransitionLeft(props: SlideProps) {
    return <Slide {...props} direction="down" />;
  }
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(props.showSnackbar);
  }, [props.showSnackbar]);

  const action = (
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={props.handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
  );

 return(
  <Snackbar
    open={open}
    autoHideDuration={6000}
    onClose={props.handleClose}
    action={action}
    anchorOrigin={{ vertical, horizontal }}
    TransitionComponent={TransitionLeft}
    >
      <Alert onClose={props.handleClose} severity={props.severity} sx={{ width: '100%' }}>
          {props.message}
        </Alert>
    </Snackbar>
 );
};