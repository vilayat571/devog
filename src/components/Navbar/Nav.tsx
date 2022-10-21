import { useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export interface INav {
  handleChange(): void;
  handleOpen(): void;
  token: string | null;
  details: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
  };
};

export function Nav() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {open ? (
        <Sidebar changeOpen={() => handleOpen()} open={open} />
      ) : (
        <Navbar changeOpen2={() => handleOpen()} />
      )}
    </>
  );
};