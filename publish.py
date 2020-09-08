import ftplib
import os

details = {
  "host": "elev.htxroskilde.dk",
  "username": "20Kappa19",
  "password": "rts-6235"
}


#connection = ftplib.FTP(details)
#connection.encoding = "utf-8"

for filename in os.listdir("src/"):

  with open(filename, "rb") as filedata:
    connection.storbinary(f"STOR {filename}", filedata)

  
