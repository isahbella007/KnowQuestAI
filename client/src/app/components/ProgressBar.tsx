// "use client"
// import { useEffect } from 'react';
// import NProgress from 'nprogress';
// // next
// import { useRouter } from 'next/navigation';
// // @mui
// import { useTheme } from '@mui/material/styles';
// import GlobalStyles from '@mui/material/GlobalStyles';
// import { useSelector } from 'react-redux';
// import { RootState } from '../redux/store';

// // ----------------------------------------------------------------------

// export default function ProgressBar() {
//   const theme = useTheme();
//   const router = useRouter();

//   NProgress.configure({ showSpinner: false });
//   const { isLoading } = useSelector((state: RootState) => state.app);

//   const handleStart = () => {
//     NProgress.start();
//   };
//   const handleStop = () => {
//     NProgress.done();
//   };

//   useEffect(() => {
//     router.events.on('routeChangeStart', handleStart);
//     router.events.on('routeChangeComplete', handleStop);
//     router.events.on('routeChangeError', handleStop);

//     return () => {
//       router.events.off('routeChangeStart', handleStart);
//       router.events.off('routeChangeComplete', handleStop);
//       router.events.off('routeChangeError', handleStop);
//     };
//   }, [router]);

//   useEffect(() => {
//     if (isLoading) {
//       handleStart();
//     } else {
//       handleStop();
//     }
//   }, [isLoading]);

//   return (
//     <GlobalStyles
//       styles={{
//         '#nprogress': {
//           pointerEvents: 'none',
//           '& .bar': {
//             top: 0,
//             left: 0,
//             height: 7,
//             width: '100%',
//             position: 'fixed',
//             zIndex: theme.zIndex.snackbar,
//             backgroundColor: theme.palette.primary.main,
//             boxShadow: `0 0 2px ${theme.palette.primary.main}`,
//           },
//           '& .peg': {
//             right: 0,
//             opacity: 1,
//             width: 100,
//             height: '100%',
//             display: 'block',
//             position: 'absolute',
//             transform: 'rotate(3deg) translate(0px, -4px)',
//             boxShadow: `0 0 10px ${theme.palette.primary.main}, 0 0 5px ${theme.palette.primary.main}`,
//           },
//         },
//       }}
//     />
//   );
// }
