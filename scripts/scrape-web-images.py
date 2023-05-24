from bs4 import BeautifulSoup
import requests
import re
import os

#variables
url = ''
raw_html = requests.get(url)
soup = BeautifulSoup(raw_html.content, 'html.parser')
directory = 'images'

#check if directory already exists
if not os.path.exists(directory):
    #create directory in cwd
    os.mkdir(directory)
    print('Created  directory')
else:
    print('Directory exists')

#extract all images into list
all_images = soup.find_all('img')

for image in all_images:
    #extract image url
    image_url = image.attrs['src']
    #set filename to save to directory
    image_filename = directory + '/' + re.search(r"[^/]*$", image_url).group()
    #get image response
    image_response = requests.get(image_url)

    with open(image_filename, 'wb') as f:
        #create image file
        f.write(image_response.content)