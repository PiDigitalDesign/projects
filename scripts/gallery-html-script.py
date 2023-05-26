import os

#variables
# Replace with the actual directory path where images to be templated are stored
directory = 'images'
#change website directory where images are stored, to be included in div template
directoy_to_append = 'assets/img/portfolio/rugs/'
base_names = []
#change to whatever filter class to be applied to div template
filter = "rugs"


for filename in os.listdir(directory):
    if filename.endswith('-small.webp'):
        base_name = filename.replace('-small.webp', '')
        base_names.append(base_name)

print(base_names)

for name in base_names:
    div_template = f'''
                <div class="col-lg-4 col-md-6 portfolio-item filter-{filter}">
                  <div class="portfolio-wrapper">
                    <img alt="" class="img-fluid rounded" src="{directoy_to_append}{name}-small.webp"
                         srcset="{directoy_to_append}{name}-medium.webp 1080w" sizes="80vw">
                  </div>
                </div>
                '''
    print(div_template)