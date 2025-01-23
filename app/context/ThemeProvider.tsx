"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  const [client, setClient] = React.useState(false);
  React.useEffect(() => {
    setClient(true);
  }, []);
  if (!client) return;
  else return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
