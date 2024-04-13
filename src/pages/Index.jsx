import { Box, Heading, Text, Button, Flex, Image, Stack, useColorModeValue } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="nowrap" px={8} py={16} minH="70vh" bg={useColorModeValue("gray.100", "gray.800")}>
        <Stack spacing={4} w={{ base: "80%", md: "40%" }} align={["center", "center", "flex-start", "flex-start"]}>
          <Heading as="h1" size="xl" fontWeight="bold" color="primary.800" textAlign={["center", "center", "left", "left"]}>
            Hire Top Web Developers on Particles
          </Heading>
          <Heading as="h2" size="md" color="primary.800" opacity="0.8" fontWeight="normal" lineHeight={1.5} textAlign={["center", "center", "left", "left"]}>
            Particles connects companies with vetted web development talent specializing in modern frameworks. Find the perfect developers to build your next project.
          </Heading>
          <Button colorScheme="primary" borderRadius="8px" py="4" px="4" lineHeight="1" size="md">
            View Available Developers
          </Button>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXJzJTIwd29ya2luZ3xlbnwwfHx8fDE3MTMwNDcxMjd8MA&ixlib=rb-4.0.3&q=80&w=1080" size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>

      {/* Features Section */}
      <Box p={4} py={16}>
        <Stack spacing={4} as={Box} textAlign={"center"} mb={8}>
          <Heading as="h2" size="xl">
            Why Hire on Particles
          </Heading>
          <Text color={"gray.600"} fontSize={"xl"}>
            Particles makes it easy to find the right web developers for your project
          </Text>
        </Stack>

        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          <Box maxW={{ base: "full", md: "275px" }} w={"full"} borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} p={5}>
            <Stack align={"start"} spacing={2}>
              <Heading size="md">Vetted Talent</Heading>
              <Text>Every developer on Particles is vetted for technical skills and professionalism. Only the top talent is accepted.</Text>
            </Stack>
          </Box>

          <Box maxW={{ base: "full", md: "275px" }} w={"full"} borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} p={5}>
            <Stack align={"start"} spacing={2}>
              <Heading size="md">Tailored Matching</Heading>
              <Text>We match you with developers who have the right skills and experience for your specific project needs.</Text>
            </Stack>
          </Box>

          <Box maxW={{ base: "full", md: "275px" }} w={"full"} borderWidth="1px" borderRadius="lg" overflow="hidden" m={4} p={5}>
            <Stack align={"start"} spacing={2}>
              <Heading size="md">Diverse Expertise</Heading>
              <Text>From React and Vue to Node and Django, you'll find developers experienced in a wide range of web technologies.</Text>
            </Stack>
          </Box>
        </Flex>

        <Box textAlign="center" mt={8}>
          <Button colorScheme="primary" borderRadius="8px" py="4" px="4" lineHeight="1" size="lg">
            View Available Developers
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
