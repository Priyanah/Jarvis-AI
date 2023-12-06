import os 
import keyboard
import pyautogui
import webbrowser
from time import sleep

def OpenExe(Query):
    Query = str(Query).lower()
    
    
    # here it will 'launch' and 'visit' are for website and "open" and "start" for Pc Apps.
    
    if "visit" in Query:
        Nameofweb = Query.replace("visit", "")
        Link = f"https://www.{Nameofweb}.com"
        webbrowser.open(Link)
        return True
        
    elif "launch" in Query:
        Nameofweb = Query.replace("launch", "")
        Link = f"https://www.{Nameofweb}.com"
        webbrowser.open(Link)
        return True
    
    elif "open" in Query:
        Nameofapp = Query.replace("open", "")
        pyautogui.press("win")
        sleep(1)
        keyboard.write(Nameofapp)
        sleep(1)
        keyboard.press('enter')
        sleep(0.5)
        return True
    
    elif "start" in Query:
        
        # 1st method individual writing.
        Nameofapp = Query.replace("open", "")
        if "chrome" in Nameofapp:
            os.startfile(r"C:\Program Files\Google\Chrome\Application\chrome.exe")
            return True
        
        # 2nd method all in one.
        # Nameofapp = Query.replace("open", "")
        # pyautogui.press("win")
        # sleep(1)
        # keyboard.write(Nameofapp)
        # sleep(1)
        # keyboard.press('enter')
        # sleep(0.5)
        # return True
    
# OpenExe("open whatsapp")
# OpenExe("open what") # on incomplete word it will also open whatsapp.
# OpenExe("open xbox")  

# OpenExe("launch facebook")  