import React, { useState } from "react";
import "./Dalle.css";

const API_TOKEN = "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";

const ImageGenerationForm = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const input = event.target.elements.input.value;
    const response = await fetch(
      "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ inputs: input }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate image");
    }

    const blob = await response.blob();
    setOutput(URL.createObjectURL(blob));
    setLoading(false);
  };

  return (
    <div className="container al-c mt-3">
      <h1 className="bg-tansparent">
        TEXT TO <span className="bg-tansparent">IMAGE GENERATION</span>
      </h1>
      <p className="bg-tansparent">Generate images using our API endpoint</p>
      <form className="gen-form " onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          placeholder="Type your prompt here..."
        />
        <button type="submit">Generate</button>
      </form>
      <div>
        {loading && <div className="loading">Loading...</div>}
        {!loading && output && (
          <div className="result-image">
            <img src={output} alt="art" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerationForm;
