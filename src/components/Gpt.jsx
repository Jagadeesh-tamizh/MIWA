// import React, { useState } from "react";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const query = async (data) => {
//     const response = await fetch(
//       "https://api-inference.huggingface.co/models/meta-llama/Llama-2-7b-chat-hf",
//       {
//         headers: {
//           Authorization: "Bearer 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",
//         },
//         method: "POST",
//         body: JSON.stringify({ inputs: data }), // Make sure to wrap the data in the expected format
//       }
//     );
//     const result = await response.json();
//     return result;
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleSendMessage = async () => {
//     if (inputValue.trim() === "") return;

//     // Add user message to the state
//     setMessages([...messages, { text: inputValue, user: true }]);
//     setInputValue("");

//     // Send user message to the Llama API and add the response to the state
//     try {
//       const response = await query(inputValue);

//       if (response && response.choices && response.choices.length > 0) {
//         const llamaResponse = response.choices[0].message.content;
//         setMessages([...messages, { text: llamaResponse, user: false }]);
//       } else {
//         console.error("Invalid response format from Llama API:", response);
//       }
//     } catch (error) {
//       console.error("Error sending message to Llama API:", error);
//     }
//   };

//   return (
//     <div>
//       <div
//         style={{
//           height: "300px",
//           overflowY: "scroll",
//           border: "1px solid #ccc",
//         }}
//       >
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             style={{
//               padding: "8px",
//               textAlign: message.user ? "right" : "left",
//             }}
//           >
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <div style={{ marginTop: "8px" }}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//           placeholder="Type your message..."
//         />
//         <button onClick={handleSendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;

// import React, { useEffect, useState } from "react";
// import { client } from "@gradio/client";

// const GradioChatComponent = () => {
//   const [prediction, setPrediction] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const app = await client(
//           "https://huggingface-projects-llama-2-7b-chat.hf.space/--replicas/gm5p8/"
//         );
//         const result = await app.predict("/chat", [
//           "Howdy!", // string in 'Message' Textbox component
//           "Howdy!", // string in 'System prompt' Textbox component
//           1, // number (numeric value between 1 and 2048) in 'Max new tokens' Slider component
//           0.1, // number (numeric value between 0.1 and 4.0) in 'Temperature' Slider component
//           0.05, // number (numeric value between 0.05 and 1.0) in 'Top-p (nucleus sampling)' Slider component
//           1, // number (numeric value between 1 and 1000) in 'Top-k' Slider component
//           1, // number (numeric value between 1.0 and 2.0) in 'Repetition penalty' Slider component
//         ]);

//         setPrediction(result.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures that this effect runs once when the component mounts

//   return (
//     <div>
//       <h2>Gradio Chat Prediction:</h2>
//       {prediction ? (
//         <div>
//           <p>Generated Text: {prediction.choices[0].text}</p>
//           {/* Add more details or styling as needed */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default GradioChatComponent;
