import "@/styles/globals.css";
import Head from 'next/head'
import type { AppProps } from "next/app";
import { EmployeeStateProvider } from "@/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Employee Management</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <EmployeeStateProvider>
          <Component {...pageProps} />
        </EmployeeStateProvider>
      </QueryClientProvider>
    </>
  )
}
