import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

// import PlacesAutocomplete, {
//     geocodeByAddress,
//   } from "react-places-autocomplete";

const Searchbar_HomePage = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "",
    libraries: ["places"],
  });

  // const [address, setAddress] = useState("");

  // const handleSelect = async value => {
  //   const results = await geocodeByAddress(value);
  //   setAddress(value);
  // };

  const bgImg = {
    filter: "blur(0.1px)",
    WebkitFilter: "blur(0.1px)",
    height: "520px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "0px",
    cursor: "pointer",
  };

  const hotelImg = {
    blurImg:
      "url(https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg) center/cover no-repeat",
  };

  //   Remove down arrow of select option

  const dropDown = {
    WebkitFilter: "none",
  };

  if (!isLoaded) {
    return <SkeletonText />;
  }

  return (
    <Box>
      <Box style={bgImg} background={hotelImg.blurImg}>
        {/* <Image
        src='https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg'
        w='100%'
        h='520px'
        maxW='100%'
        blur='sm'
        ></Image> */}
        <Flex justifyContent="center">
          <Box
            mt="10rem"
            // border="1px solid red"
            minW="884px"
            h="auto"
            color="white"
            fontWeight="600"
            position="relative"
          >
            <Text fontSize="26px">
              Book
              <Text ml="0.4rem" mr="0.4rem" as="s">
                Hotels
              </Text>
              Vacation Rentals
            </Text>
            <Text fontSize="26px" mb="1rem">
              Top Holiday Homes - Villas, Apartments & Homestays
            </Text>
            <Box
              maxW="100%"
              display="block"
              margin="auto"
              h="60px"
              background="white"
            >
              <Flex
                justifyContent="center"
                alignItems="center"
                pt="0.6rem"
                pl="0.6rem"
                pr="0.6rem"
                color="black"
              >
                {/* <Box> */}
                {/* Location Input */}
                <InputGroup w="140%">
                  <InputLeftElement
                  
                    pointerEvents="none"
                    children={<SearchIcon color="gray.400" />}
                  />
                  <Autocomplete>
                    <Input
                     
                      borderRadius="none"
                      // w="200%"
                      pl='2rem'
                      type="text"
                      placeholder="Location"
                    ></Input>
                  </Autocomplete>
                </InputGroup>

                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={
                      // <SearchIcon color="gray.400" />
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        data-svg="sign-in"
                      >
                        <polygon
                          fill="grey"
                          points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"
                        ></polygon>
                        <polygon
                          fill="grey"
                          points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"
                        ></polygon>
                      </svg>
                    }
                  />
                  <Input
                    borderRadius="none"
                    maxW="100%"
                    type="date"
                    placeholder="Check In"
                  ></Input>
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={
                      // <SearchIcon color="gray.400" />
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        data-svg="sign-out"
                      >
                        <polygon
                          fill="grey"
                          points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"
                        ></polygon>
                        <polygon
                          fill="grey"
                          points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"
                        ></polygon>
                      </svg>
                    }
                  />
                  <Input
                    borderRadius="none"
                    w="100%"
                    type="date"
                    placeholder="Check Out"
                  ></Input>
                </InputGroup>
                {/* <InputGroup> */}
                  <Select
                    placeholder="Select Guests"
                    borderRadius="none"
                    w="100%"
                    color="gray.600"
                    p='0'
                    // pb='1rem'
                    //   backgroundImage='url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A)'
                  >
                    <option value="option1">1 guest</option>
                    <option value="option2">2 guests</option>
                    <option value="option3">3 guests</option>
                    <option value="option4">4 guests</option>
                    <option value="option5">5 guests</option>
                    <option value="option6">6 guests</option>
                    <option value="option7">7 guests</option>
                    <option value="option8">8 guests</option>
                    <option value="option9">9 guests</option>
                    <option value="option10">10 guests</option>
                    <option value="option11">11 guests</option>
                    <option value="option12">12 guests</option>
                    <option value="option13">13 guests</option>
                    <option value="option14">14 guests</option>
                    <option value="option15">15 guests</option>
                    <option value="option16">16 guests</option>
                    <option value="option17">17 guests</option>
                    <option value="option18">18 guests</option>
                    <option value="option19">19 guests</option>
                    <option value="option20">20 guests</option>
                    <option value="option21">21 guests</option>
                    <option value="option22">22 guests</option>
                    <option value="option23">23 guests</option>
                    <option value="option24">24 guests</option>
                    <option value="option25">25 guests</option>
                    <option value="option26">26 guests</option>
                    <option value="option27">27 guests</option>
                    <option value="option28">28 guests</option>
                    <option value="option28">28 guests</option>
                    <option value="option29">29 guests</option>
                    <option value="option30">30 guests</option>
                    <option value="option31">31 guests</option>
                    <option value="option32">32 guests</option>
                    <option value="option33">33 guests</option>
                    <option value="option34">34 guests</option>
                    <option value="option35">35 guests</option>
                    <option value="option36">36 guests</option>
                    <option value="option37">37 guests</option>
                    <option value="option38">38 guests</option>
                    <option value="option39">39 guests</option>
                    <option value="option40">40 guests</option>
                    <option value="option41">41 guests</option>
                    <option value="option42">42 guests</option>
                    <option value="option43">43 guests</option>
                    <option value="option44">44 guests</option>
                    <option value="option45">45 guests</option>
                    <option value="option46">46 guests</option>
                    <option value="option47">47 guests</option>
                    <option value="option48">48 guests</option>
                    <option value="option49">49 guests</option>
                    <option value="option50">50 guests</option>
                  </Select>
                  {/* <InputRightElement
                    webkitAppearance="none"
                    paddingRight="20px"
                    backgroundPosition="100% 50%"
                    backgroundRepeat="no-repeat"
                    backgroundImage="url(data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2016%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%201%209%206%2015%206%22%20%2F%3E%0A%20%20%20%20%3Cpolygon%20fill%3D%22%23666%22%20points%3D%2212%2013%209%208%2015%208%22%20%2F%3E%0A%3C%2Fsvg%3E%0A)"
                  ></InputRightElement> */}
                {/* </InputGroup> */}

                <Button borderRadius="none" w="60%" colorScheme="blue">
                  Search
                </Button>
                {/* </Box> */}
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Searchbar_HomePage;