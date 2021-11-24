import { useState } from "react";
import { Container, Box, Heading, FormControl } from "@chakra-ui/react";
import question from "./data/question.json";
import obj from "./data/obj.json";
import { Answer } from "./components/Answer";
import { Question } from "./components/Question";
import { Footer } from "./components/Footer";

function App() {
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [opt4, setOpt4] = useState("");
  const [opt5, setOpt5] = useState("");
  const [opt6, setOpt6] = useState("");
  const [opt7, setOpt7] = useState("");
  const [opt8, setOpt8] = useState("");
  const [opt9, setOpt9] = useState("");
  const [opt10, setOpt10] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    switch (value) {
      case "T":
        switch (name) {
          case "opt1":
            setOpt1(value);
            setOpt3("");
            setOpt4("");
            setOpt5("");
            setOpt6("");
            setOpt7("");
            setOpt8("");
            setOpt9("");
            setOpt10("");
            break;
          case "opt2":
            setOpt2(value);
            break;
          case "opt3":
            setOpt3(value);
            setOpt7("");
            setOpt9("");
            setOpt10("");
            break;
          case "opt4":
            setOpt4(value);
            setOpt7("");
            setOpt8("");
            break;
          case "opt5":
            setOpt5(value);
            break;
          case "opt6":
            setOpt6(value);
            break;
          case "opt7":
            setOpt7(value);
            switch (opt3) {
              case "T":
                setOpt8("");
                break;
              case "F":
                setOpt9("");
                setOpt10("");
                break;
              default:
                break;
            }
            break;
          case "opt8":
            setOpt8(value);
            break;
          case "opt9":
            setOpt9(value);
            setOpt10("");
            break;
          default:
            break;
          case "opt10":
            setOpt10(value);
            break;
        }
        break;
      case "F":
        switch (name) {
          case "opt1":
            setOpt1(value);
            setOpt2("");
            break;
          case "opt2":
            setOpt2(value);
            break;
          case "opt3":
            setOpt3(value);
            setOpt4("");
            setOpt5("");
            setOpt6("");
            setOpt7("");
            setOpt8("");
            break;
          case "opt4":
            setOpt4(value);
            setOpt5("");
            setOpt6("");
            break;
          case "opt5":
            setOpt5(value);
            setOpt6("");
            break;
          case "opt6":
            setOpt6(value);
            break;
          case "opt7":
            setOpt7(value);
            break;
          case "opt8":
            setOpt8(value);
            break;
          case "opt9":
            setOpt9(value);
            break;
          case "opt10":
            setOpt10(value);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  return (
    <Container maxW="lg" textAlign="center">
      <Box py={8}>
        <Heading as="h6" fontSize={32}>
          Identifikasi Benda Langit
        </Heading>
      </Box>
      <Box>
        <FormControl>
          <Question question={question.q1} id={1} handleChange={handleChange} />
          {opt1 === "T" && (
            <Question
              question={question.q2}
              id={2}
              handleChange={handleChange}
            />
          )}
          {opt1 === "F" && (
            <Question
              question={question.q3}
              id={3}
              handleChange={handleChange}
            />
          )}
          {opt3 === "T" && (
            <Question
              question={question.q4}
              id={4}
              handleChange={handleChange}
            />
          )}
          {opt3 === "F" && (
            <Question
              question={question.q7}
              id={7}
              handleChange={handleChange}
            />
          )}
          {opt4 === "T" && (
            <Question
              question={question.q5}
              id={5}
              handleChange={handleChange}
            />
          )}
          {opt4 === "F" && (
            <Question
              question={question.q7}
              id={7}
              handleChange={handleChange}
            />
          )}
          {opt5 === "T" && (
            <Question
              question={question.q6}
              id={6}
              handleChange={handleChange}
            />
          )}
          {opt3 === "T" && opt7 === "F" && (
            <Question
              question={question.q8}
              id={8}
              handleChange={handleChange}
            />
          )}
          {opt3 === "F" && opt7 === "F" && (
            <Question
              question={question.q9}
              id={9}
              handleChange={handleChange}
            />
          )}{" "}
          {opt9 === "F" && (
            <Question
              question={question.q10}
              id={10}
              handleChange={handleChange}
            />
          )}
        </FormControl>
        {opt2 === "T" && <Answer obj={obj.b1} />}
        {opt2 === "F" && <Answer obj={obj.b2} />}
        {opt5 === "F" && <Answer obj={obj.b5} />}
        {opt6 === "T" && <Answer obj={obj.b3} />}
        {opt6 === "F" && <Answer obj={obj.b4} />}
        {opt3 === "T" && opt7 === "T" && <Answer obj={obj.b6} />}
        {opt8 === "T" && <Answer obj={obj.b7} />}
        {opt8 === "F" && <Answer obj={obj.b8} />}
        {opt3 === "F" && opt7 === "T" && <Answer obj={obj.b12} />}
        {opt9 === "T" && <Answer obj={obj.b11} />}
        {opt10 === "T" && <Answer obj={obj.b9} />}
        {opt10 === "F" && <Answer obj={obj.b10} />}
      </Box>
      <Footer />
    </Container>
  );
}

export default App;
