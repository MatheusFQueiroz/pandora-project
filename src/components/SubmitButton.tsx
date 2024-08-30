import React from "react";
import { Button } from "@mui/material";

interface SubmitButtonProps {
  label: string; // Para permitir customizar o texto do botão
  onClick: Function;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ label }, { onClick }) => {
  return (
    <Button 
      type="submit"
      variant="contained" 
      sx={{
        mt: 4,
        width: '13rem',
        backgroundColor: '#4a148c',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
      }}
    >
      {label}
    </Button>
  );
};
