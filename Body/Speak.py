# Window based voice - pip install pyttsx3
# chrome based - pip install selenium

# 1. Windows Based (can also be accesed offline, but can't overspeak if one is running)

# import pyttsx3

# def Speak(Text):
#     engine = pyttsx3.init("sapi5") #sapi5 is a voice based windows API.
#     voices = engine.getProperty('voices')  #all voices contains in sapi5.
#     engine.setProperty('voices',voices[0].id) # here id we can change for different voices.
#     engine.setProperty('rate',170) # rate = speed & 170 is medium and 200 is 1x spped.
#     print("")
#     print(f"You: {Text}.")
#     print("")
#     engine.say(Text)
#     engine.runAndWait()

# Speak("Hello Sir!, how may i help you?")


# 2 - Edge Based (Multiple voices, overspeaking is allowed, but word are limited)

from selenium import webdriver
from selenium.webdriver.support.ui import Select
from msedge.selenium_tools import EdgeOptions, Edge
from selenium.webdriver.edge.service import Service
# from selenium.webdriver.edge.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver import Edge, EdgeOptions
from time import sleep

edge_options = EdgeOptions()
edge_options.use_chromium = True  # Use Chromium-based Edge
edge_options.add_argument("--log-level=20")  # Remove the space before '='
edge_options.headless = True  # Run Edge in headless mode
# Path = "DataBase\msedgedriver.exe"
Path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
driver = Edge(options=edge_options)

# driver = Edge(executable_path=Path, options=edge_options)
driver.maximize_window()

website = r"https://ttsmp3.com/text-to-speech/British%20English/"  # this is the voice link and has limit of 3000 words per day.
driver.get(website)
ButtonSelection = Select(driver.find_element(by=By.XPATH,value='/html/body/div[4]/div[2]/form/select'))
ButtonSelection.select_by_visible_text('British English / Brian')

def Speak(Text):
    
    lengthoftext = len(str(Text))
    
    if lengthoftext==0:
        pass
    else:
        print("")
        print(f"Jarvis: {Text}")
        print("")
        Data = str(Text)
        xpathofsec = '/html/body/div[4]/div[2]/form/textarea'
        driver.find_element(By.XPATH, value=xpathofsec).send_keys(Data)
        driver.find_element(By.XPATH, value='//*[@id="vorlesenbutton"]').click()
        driver.find_element(By.XPATH, value='/html/body/div[4]/div[2]/form/textarea').clear()
        
        if lengthoftext >= 30:
            sleep(4)
            
        elif lengthoftext >= 40:
            sleep(6)
            
        elif lengthoftext >= 55:
            sleep(8)
            
        elif lengthoftext >= 70:
            sleep(10)
            
        elif lengthoftext >= 100:
            sleep(13)
            
        elif lengthoftext >= 120:
            sleep(15)
                 
        else:
            sleep(10)
            
# Speak("Welcome Sir!, I am Jarvis at your service.")
