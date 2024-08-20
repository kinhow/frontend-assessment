import { Dialog as MuiDialog, DialogProps } from "@mui/material"

const Dialog = ({ children, ...props }: DialogProps) => {
  return <MuiDialog fullWidth {...props}>{children}</MuiDialog>;
}

export default Dialog;
