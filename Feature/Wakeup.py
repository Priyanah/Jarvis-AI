import speech_recognition as sr
import os

def Listen():
    r = sr.Recognizer()
    
    with sr.Microphone() as source:
        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source,0,7) # jarvis will listen after every 7 seconds.
        
    try:
        print("Recognizing...")
        query = r.recognize_google(audio,language="en") # can be converted to any other language like gor gujarati "gu"
        
    except:
        return ""
    
    query = str(query).lower()
    print(query)
    return query

def WakeupDetected():
    
    while True():
        query = Listen().lower()
        
        if "wake up" in query:
            os.startfile(r"C:\Users\priya\OneDrive\Desktop\jarvis\Main.py")
            
        else:
            pass