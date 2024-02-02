import { Grid, Paper } from "@mui/material";
import RenderMarkdown from "./RenderLeftbox";
import Sin from "../ChatComponent/ExtractingAllHeaders";

interface Props {
  link: string | null;
}

const LeftBoxContent = ({ link }: Props) => {
  return (
    <Grid item xs={6}>
      <Paper
        elevation={3}
        style={{ padding: "20px", overflowY: "auto", height: "70vh" }}
      >
        <Sin
          onTopicClick={function (topic: string): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Paper>
    </Grid>
  );
};

export default LeftBoxContent;
