import Head from 'next/head';
import { forwardRef, ReactNode } from 'react';
// @mui
import { Box, BoxProps } from '@mui/material';
import LoadingScreen from './LoadingScreen';

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
  loading?: boolean;
}

// eslint-disable-next-line react/display-name
const Page = forwardRef<HTMLDivElement, Props>(
  ({ children, title = '', meta, loading = false, ...other }, ref) => (
    <>
      <Head>
        <title>{`${title}`}</title>
        {meta}
      </Head>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Box ref={ref} {...other}>
          {children}
        </Box>
      )}
    </>
  )
);

export default Page;
