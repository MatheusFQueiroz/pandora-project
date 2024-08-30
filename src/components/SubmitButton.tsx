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
      className="mt-8 w-52 bg-purple-900 cursor-pointer shadow-2xl"
    >
      {label}
    </Button>
  );
};
