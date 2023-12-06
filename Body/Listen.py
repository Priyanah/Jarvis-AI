# import speech_recognition as sr
# from googletrans import Translator

# # 1 - Listen

# def listen():
#     r = sr.Recognizer()
    
#     with sr.Microphone() as source:
#         print("Listening...")
#         r.pause_threshold = 1
#         audio = r.listen(source, 0, 10) # Jarvis will listen after every 7 seconds.
        
#     try:
#         print("Recognizing...")
#         query = r.recognize_google(audio, language="hi-IN") # Recognize Hindi speech
        
#     except sr.UnknownValueError:
#         print("Sorry, I couldn't understand what you said.")
#         return ""
#     except sr.RequestError as e:
#         print(f"Sorry, there was an error with the speech recognition service: {e}")
#         return ""
    
#     query = query.lower()
#     return query

# # 2 - Translator

# def translation_hin_to_eng(text):
#     line = str(text)
#     translate = Translator()
#     result = translate.translate(line, src="hi", dest="en")
#     data = result.text
#     print(f"You: {data}")
#     return data

# # 3 - Mic Connect

# def mic_connect():
#     query = listen()
#     if query:
#         data = translation_hin_to_eng(query)
#         return data

# if __name__ == "__main__":
#     while True:
#         response = mic_connect()
#         if response == "exit":
#             print("Goodbye!")
#             break

import speech_recognition as sr
from googletrans import Translator

# 1 - Listen

def Listen():
    r = sr.Recognizer()
    
    with sr.Microphone() as source:
        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source,0,7) # jarvis will listen after every 7 seconds.
        
    try:
        print("Recognizing...")
        query = r.recognize_google(audio,language="en ") # can be converted to any other language like gor gujarati "gu"
        
    except:
        return ""
    
    query = str(query).lower()
    return query

# 2 - Translator

def TranslationHinToEng(Text):
    line = str(Text)
    translator = Translator()
    
    try:
        result = translator.translate(line)
        data = result.text
        print(f"You: {data}")
        return data
    except Exception as e:
        print(f"Translation Error: {e}")
        return None

# 3 - Mic Connect

def MicConnect():
    query = Listen()
    data = TranslationHinToEng(query)
    return data

# MicConnect()

