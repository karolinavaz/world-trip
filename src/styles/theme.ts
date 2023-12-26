import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: 'var(--font-poppins)',
    body: 'var(--font-poppins)',
  },
  styles: {
    global: {
      body: {
        bg: "#F5F8FA",
        color: "#47585B",
        fontSize: '16px'
      },
      h2: {
        fontSize: "2.25em",
        fontWeight: "medium",
      },
    },
  },
  baseStyle: {
    h2: {
      fontSize: "2.25em",
    },
  },
  textStyles: {
    h2: {
      fontSize: "2.25em",
      fontWeight: "medium",
      lineHeight: "auto",
      //letterSpacing: '-1%',
    },
  },
  components: {
    Heading: {
      fontSize: "2.25em",
      fontWeight: "medium",
    },
  },
});
