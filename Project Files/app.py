from sense_hat import SenseHat
from wia import Wia
from time import sleep
import os

wia = Wia()
wia.access_token = "d_sk_ufwn0iA9TrPpcJT9lBQIhOLy"

sense = SenseHat()
    

while True:
    temp = round(sense.get_temperature(),2)
    wia.Event.publish(name = "temperature", data=temp)
    print(temp)
    raw = sense.get_accelerometer_raw()
    print("x: {x}, y: {y}, z: {z}".format(**raw))
    wia.Event.publish(name = "acceleration", data = raw)
    
    if temp>=30 and temp<35:
        os.system("espeak 'Its quite hot out, be sure to have a drink.'")
        
    elif temp>=35 and temp<40:
        os.system("espeak 'Its very hot out. Stay hydrated and get to shade.'")
        
    elif temp>=40:
        os.system("espeak 'Its extremely hot out. Go inside quickly.'")
        
    sleep(30)
        
        

    
