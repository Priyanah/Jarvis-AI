from Brain.AIBrain import ReplyBrain
from Brain.Qna import QnaReply
from Body.Listen import MicConnect
print(" Starting Jarvis...")
from Body.Speak import Speak
from Feature.Clap import Tester
print(" Starting Jarvis...")
from Main import MainTaskExecution

def MainExecution():
    
    Speak("Hello Sir!")
    Speak("I'm Jarvis, How can i help you sir?")
    
    while True:
        Data = MicConnect()
        Data = str(Data).replace(".","")
        
        ValueReturn = MainTaskExecution(Data)
        if ValueReturn == True:
            pass
        
        if len(Data) < 3:
            pass
        
        elif "whatsapp message" in Data:
            pass
        
        elif "turn on the tv" in Data:# Specific COmmand
            Speak("Ok..Turning On The Android TV")
        
        elif "what is" in Data or "where is" in Data or "question" in Data or "answer" in Data:
            Reply = QnaReply(Data)
                  
        else: 
            Reply = ReplyBrain(Data)
            Speak(Reply)
        
def ClapDetect():
    query = Tester()
    if query is not None and "True-Mic" in query:
        print("")
        print("Clap Detected!!!")
        print("")
        MainExecution()
    else:
        pass
    
ClapDetect()