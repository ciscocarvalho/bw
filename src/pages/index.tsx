import Layout from "@/components/Layout";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blog Website</title>
      </Head>
      <Layout>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          height={"100%"}
          gap={"40px"}
        >
          <Show above="md">
            <Flex height={"100%"} alignItems={"center"} gap={"10px"}>
              <Link
                style={{ writingMode: "vertical-lr", rotate: "180deg" }}
                fontSize={"small"}
                textAlign={"center"}
                target={"_blank"}
                userSelect={"none"}
                href="https://www.freepik.com/free-vector/people-work-study-home_28261593.htm"
              >
                Image by upklyak on Freepik
              </Link>
              <Image
                src={"images/guy-using-laptop.svg"}
                minH={"40%"}
                maxH={"80%"}
              />
            </Flex>
          </Show>
          <Box maxW={{ base: "60%", md: "40%" }}>
            <Stack gap={"20px"}>
              <Box>
                <Heading fontSize={{ sm: "5xl" }}>
                  Share your thoughts to
                  <br />
                  <Text as={"span"} color={"linkAccent"}>
                    the world
                  </Text>
                </Heading>
                <Text>
                  Write blog posts about lifestyle, career, hobbies, or anything
                  you want!
                </Text>
              </Box>
              <Flex justifyContent={"flex-end"}>
                <NextLink href={"signup"}>
                  <Button
                    colorScheme={"accent"}
                    rightIcon={<ArrowForwardIcon />}
                  >
                    Start now
                  </Button>
                </NextLink>
              </Flex>
            </Stack>
          </Box>
        </Flex>
      </Layout>
    </>
  );
};

export default Home;
