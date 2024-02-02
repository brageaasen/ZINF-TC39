import React, { useState, useEffect } from "react";

interface Topic {
  id: number;
  name: string;
}

interface TopicListProps {
  onTopicClick: (topic: string) => void;
}

const TopicList: React.FC<TopicListProps> = ({ onTopicClick }) => {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    fetchTopicsFromMarkdown();
  }, []);

  const fetchTopicsFromMarkdown = async () => {
    try {
      const response = await fetch("../public/meetings/2015-11/nov-19.md"); // Replace with the path to your Markdown file
      const markdownContent = await response.text();
      const topicsFromMarkdown = extractTopicsFromMarkdown(markdownContent);
      setTopics(topicsFromMarkdown);
    } catch (error) {
      console.error("Error loading Markdown file:", error);
    }
  };

  const extractTopicsFromMarkdown = (markdownContent: string): Topic[] => {
    const lines = markdownContent.split("\n");
    const topics: Topic[] = [];

    lines.forEach((line, index) => {
      if (line.startsWith("## ")) {
        const topicName = line.replace(/^##\s*/, "");
        topics.push({ id: index, name: topicName });
      }
    });

    return topics;
  };

  const handleTopicClick = (topicName: string) => {
    onTopicClick(topicName);
  };

  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <h2>Topics</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id} onClick={() => handleTopicClick(topic.name)}>
            {topic.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
