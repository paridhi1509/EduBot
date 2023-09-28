function sendMessage() {
    const userInput = document.getElementById("user-input");
    const messageText = userInput.value.trim();
  
    if (messageText === "") {
      return;
    }
  
    const chatbotMessages = document.getElementById("chatbot-messages");
  
    // new user message
    const userMessage = document.createElement("div");
    userMessage.className = "chatbot-message user";
    userMessage.textContent = messageText;
    // Append the user message to the chat
    chatbotMessages.appendChild(userMessage);
  
    // Clear the user input
    userInput.value = "";
  
    // Process user input and generate bot response
    const botResponse = generateBotResponse(messageText);
  
    // Create a new bot message
    const botMessage = document.createElement("div");
    botMessage.className = "chatbot-message bot";
    botMessage.textContent = botResponse;
  
    // Append the bot message to the chat
    chatbotMessages.appendChild(botMessage);
  
    // Scroll to the bottom of the chat to show the latest message
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  // Function to generate bot responses based on user input
  function generateBotResponse(userInput) {
    if (userInput.includes("hello") || userInput.includes("hi") || userInput.includes("help")) {
      return "Hello! How may I help you in your career councelling";
    } 
    else if(userInput.includes("class 10")||userInput.includes("subjects")){
        return " The following are the suggested subjects after class 10 are science , biology and commerce";
    }
    else if (userInput.includes("science")) {
      return "Then after 12th you can do -\n engineering \n B.sc \n B.ca \n B.arch";
    } else if (userInput.includes("biology")) {
      return " Then after 12th you can do -\n MBBS \n Nursing \n B.pharma";}
      else if (userInput.includes("commerce") ){
        return " Then after 12th you can do -\n CA foundation \n B.com ";
      }
      else if(userInput.includes("thank you")|| userInput.includes("bye")|| userInput.includes("thanks")){
        return "Glad to help you. Goodbye "
      }
      else 
      {
        return "Sorry i didn't catch that."
      }
    }