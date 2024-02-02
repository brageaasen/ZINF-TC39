import { Grid, Paper } from "@mui/material";
import RenderMarkdown from "./RenderLeftbox";

interface Props {
  link: string | null;
}

const LeftBoxContent = ({ link }: Props) => {
  return (
    <Grid item xs={6}>
      <Paper
        elevation={3}
        style={{ padding: "20px", overflowY: "auto", height: "70vh", width: "40vw",   }}
      >
        <RenderMarkdown link={link} />
      </Paper>
    </Grid>
  );
};

export default LeftBoxContent;
