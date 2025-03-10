import { Theme } from "@mui/material";
import Typography from "./Typography";
import Button from "./Button";

export default function ComponentsOverrides(theme: Theme) {
    return Object.assign(
      Typography(theme),
      Button(theme),
      // Add other component overrides as needed
    );
  }