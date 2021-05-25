import Header from '../../../components/Header';
import {useRouter} from 'next/router';
import { Box, Center, Wrap, Text } from "@chakra-ui/react";
import Map from '../../../components/map';
import Styles from '../../../styles/Home.module.css'

const cafePage = ({cafe}) => {

  const router = useRouter();
  // const {id} = router.query

  return (
    <>
      <Header />
      <Center> <Text fontSize="6xl"> {cafe.name} </Text> </Center>
      <Wrap padding={5}>
        <Center className={Styles.text}>
          <p className={Styles.par}>
            {cafe.info}
            <br></br>
            <br></br>
            Adresa: {cafe.adress}
          </p>
        </Center>
        <Box className={Styles.map}>
          <Map lat={cafe.lat} lon={cafe.lon} zoom={18}/>
        </Box>
      </Wrap>
    </>
  );
  
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://coffeebeans-bebab-default-rtdb.firebaseio.com/shops/${context.params.id}.json`)
  const cafe = await res.json()
  return {
    props:{
      cafe
    }
  }
}

export default cafePage;
