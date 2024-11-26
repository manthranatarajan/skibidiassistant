const responses = {
    "remind": ["Reminder set to breathe tomorrow.", "Sure, I’ll remind you... eventually."],
    "weather": ["It’s probably raining. Bring an umbrella or don’t, I’m not your mom."],
    "alarm": ["Alarm set for 3:14 AM because Pi is important."],
  };
  
  export function getUnhelpfulResponse(userInput) {
    const words = userInput.toLowerCase().split(" ");
    for (let key in responses) {
      if (words.includes(key)) {
        const randomIndex = Math.floor(Math.random() * responses[key].length);
        return responses[key][randomIndex];
      }
    }
    return "I have no idea what you mean. Probably something weird.";
  }
  