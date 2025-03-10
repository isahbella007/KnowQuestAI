"use client"

import { Box, Stack, useMediaQuery , useTheme} from "@mui/material"
import MainHeader from "../layouts/main/MainHeader"
import HomeFooter from "../sections/Footer/HomeFooter"

export default function MainLayout({ 
    children
}: { 
    children: React.ReactNode
}){ 
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('md'))

    return(
        <Stack sx={{minHeight: 1}}>
            <MainHeader/>

            {children}

            <Box sx={{flexGrow: 1}}>

            </Box>

            <HomeFooter/>

        </Stack>
    )

}