"use client"
import { styled } from "@mui/material";
import Page from "../components/Page";
import HomeHero from "../sections/home/HomeHero";
import ContentStyle from "../components/styled/LandingPage";
import HomeSpecial from "../sections/home/HomeSpecial";
import HomeFuture from "../sections/home/HomeFuture";
import HomeEngagementCTA from "../sections/home/HomeEngagement";


export default function Index() {
  return(
    <Page title="landingPage" loading={false}>
        <HomeHero />

        <ContentStyle>

          <HomeFuture/>
          
          {/* <HomeSpecial/> */}

          <HomeEngagementCTA/>
         
        </ContentStyle>
        
    </Page>
  )
}
