import React, { useState, useEffect } from "react";
// import MarkDown from "markdown-to-jsx";
import ReactMarkdown from "react-markdown";
import "../App.css";

interface Props {
  content: string;
}

const RenderMarkdown = ({ content }: Props) => {
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

export default RenderMarkdown;
