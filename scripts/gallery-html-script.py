import os

#variables
# Replace with the actual directory path where images to be templated are stored
directory = 'images'
#change website directory where images are stored, to be included in div template
directoy_to_append = 'assets/img/portfolio/rugs/'
base_names = []
#change to whatever filter class to be applied to div template
filter = "rugs"
alt_text = "luxurious fine rugs"


for filename in os.listdir(directory):
    if filename.endswith('-small.webp'):
        base_name = filename.replace('-small.webp', '')
        base_names.append(base_name)

print(base_names)

for name in base_names:
    div_template = f'''
                <div class="col-xl-4 col-lg-6 portfolio-item filter-{filter}">
                  <div class="portfolio-wrapper d-flex justify-content-center">
                    <img 
                      alt="{alt_text}" 
                      class="img-fluid rounded" 
                      src="{directoy_to_append}{name}-small.webp"
                      srcset="{directoy_to_append}{name}-small.webp 480w, {directoy_to_append}{name}-medium.webp 1080w" 
                      sizes="(min-width: 540px) 400px, calc(72.73vw + 22px)">
                  </div>
                </div>
                '''
    print(div_template)