// CombinedComponent.tsx
import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import ReactMarkdown from "react-markdown";
import "../App.css";

interface RenderMarkdownProps {
  content: string;
}

const RenderMarkdown = ({ content }: RenderMarkdownProps) => {
  const [markdownContent, setMarkdownContent] = useState("");
  const file_name = content;

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(file_name);
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Error loading Markdown file:", error);
      }
    };

    fetchMarkdown();
  }, [file_name]);

  return (
    <div style={{ textAlign: "left" }}>
      <ReactMarkdown className="md">{markdownContent}</ReactMarkdown>
    </div>
  );
};

const CombinedComponent = () => {
  return (
    <Grid item xs={6}>
      <Paper
        elevation={3}
        style={{ padding: "20px", overflowY: "auto", height: "70vh" }}
      >
        <RenderMarkdown content="../meetings/2015-11/nov-17.md" />
      </Paper>
    </Grid>
  );
};

export default CombinedComponent;
