import { Box, Heading } from "@chakra-ui/react";

export const Answer = ({ obj }) => {
  return (
    <Box py={4}>
      <Heading as="h6" fontSize={20}>
        Jawabannya adalah {obj}
      </Heading>
    </Box>
  );
};
