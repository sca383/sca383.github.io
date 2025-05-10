import selenium
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import webbrowser
import threading
import subprocess
import re

PORT = 8000

# def start_server():
#     server_address=('',PORT)
#     httpd = ThreadingHTTPServer(server_address, SimpleHTTPRequestHandler)
#     print("serving at port",PORT)
#     httpd.serve_forever()

subprocess.run(["cd /home/shanac/Shana_Chan-Site/Shana_Chan-Site"], shell=True)
result = subprocess.Popen(["npm", "run", "dev"], stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT, text=True)

isURL_opened = False
for line in result.stdout:
    print(line.strip())
    match = re.search(r"(http://localhost:\d+)",line)
    if match and not isURL_opened:
        url = match.group(1)
        webbrowser.open(url)
        isURL_opened = True

# WONT OPEN ON VIRTUAL ENVIRONMENT...? EITHER SWITCH TO POWERSHELL/CMD PROMPT OR WORKAROUNDS