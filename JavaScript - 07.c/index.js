const chatBot = document.querySelector("textarea");

const chatClient = document.querySelector("input");

const btnSubmit = document.querySelector("button");


btnSubmit.addEventListener("click", submitText);

function submitText() {
  
    if (chatClient.value != "") {
        chatBot.value = chatBot.value + chatClient.value + '\r\n' ;
        chatClient.value = '';
        chatBot.scrollTop = chatBot.scrollHeight - 15;
    } 
        
}

chatClient.addEventListener("keypress", function(e) {
    
    if (e.key === "Enter" && chatClient.value != "") {
        chatBot.value = chatBot.value + chatClient.value + '\r\n' ;
        chatClient.value = '';  
        chatBot.scrollTop = chatBot.scrollHeight - 15;  
    } 
      
});

    


