import { Grid, GridItem } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Grid
        templateAreas={`
          "header header"
          "nav main"
          "nav footer"`}
        templateRows="50px 1fr 30px"
        templateColumns="150px 1fr"
        gap={1}
      >
        <GridItem area={"header"} bg="orange.300">
          Header
        </GridItem>
        <GridItem area={"nav"} bg="pink.300">
          Nav
        </GridItem>
        <GridItem area={"main"} bg="green.300">
          Main
        </GridItem>
        <GridItem area={"footer"} bg="blue.300">
          Footer
        </GridItem>
      </Grid>
    </>
  )
}

export default Home
