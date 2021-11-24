import { Box, Text, Radio, RadioGroup, Stack } from "@chakra-ui/react";

export const Question = ({ question, id, handleChange }) => {
  return (
    <Box>
      <Text>{question}</Text>
      <RadioGroup py={2}>
        <Stack direction="row" spacing={8} justifyContent="center">
          <Radio
            name={`opt${id}`}
            value="T"
            onChange={handleChange}
            colorScheme="cyan"
          >
            Iya
          </Radio>
          <Radio
            name={`opt${id}`}
            value="F"
            onChange={handleChange}
            colorScheme="cyan"
          >
            Tidak
          </Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
};
