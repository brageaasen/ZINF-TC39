interface Props {
  input: string;
}

const year = ["A Year takes 365 dayes to complete", "Year"];
const month = ["a month takes about 30 days to complete.", "Month"];
const proposal = [
  "a proposal is a title that determines the subject of this specific section.",
  "Proposals",
];
const meeting = [
  "A meeting is when people gather to discuss somethin.",
  "Meeting",
];
let result = "";
let outputs = [year, month, meeting, proposal];

function Data({ input }: Props) {
  outputs.map((output) => {
    output[1] === input ? (result = output[0]) : result;
  });
  return <p>{result}</p>;
}

export default Data;
