import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const NoTokensFoundDialog = ({open, onClose}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Information</DialogTitle>
      <DialogContent>
        <DialogContentText>
          No Tokens Found!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>ok</Button>
      </DialogActions>
    </Dialog>
  )
}

export default NoTokensFoundDialog;