import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css?url";
import { Toaster } from '@/components/shadcn/ui/sonner';
import { ServiceProvider } from '~/services/provider';

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <ServiceProvider>
        <body>
          <Toaster richColors />
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </ServiceProvider>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
