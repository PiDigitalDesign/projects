# Loop through all files in the current directory
for file in ./*; do
  # Check if the file is an image
  if [[ -f $file && $(file -b --mime-type "$file" | grep -i "image/") ]]; then
    # Generate the new file name
    new_file_small="${file%.*}-small.webp"
    new_file_medium="${file%.*}-medium.webp"
    new_file_large="${file%.*}-large.webp"

    # Resize the image to small, medium and large sizes and convert to webp
    convert "$file" -resize 480x480^ -gravity center -extent 480x480 -format webp "$new_file_small"
    convert "$file" -resize 1080x1080^ -gravity center -extent 1080x1080 -format webp "$new_file_medium"
    convert "$file" -resize 2500x2500^ -gravity center -extent 2500x2500 -format webp "$new_file_large"

    echo "Converted $file to $new_file_small, $new_file_medium & $new_file_large"
    rm "$file"
  fi
done
