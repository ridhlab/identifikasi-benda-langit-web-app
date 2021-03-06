import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
    return (
        <Box py={8}>
            <Text>
                &copy;{" "}
                <a href="https://www.github.com/ridhlab/" target="blank">
                    Muhammad Ridwan{" "}
                </a>
                | 2021 - present
            </Text>
        </Box>
    );
};
