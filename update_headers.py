import os
import glob
import re

def update_headers():
    # Read index.html to get the new header
    with open('index.html', 'r', encoding='utf-8') as f:
        index_content = f.read()

    # Extract the header block from index.html
    header_pattern = re.compile(r'([ \t]*<!-- 1\. TOP NAVBAR -->.*?</header>)', re.DOTALL)
    match = header_pattern.search(index_content)
    
    if not match:
        print("Could not find header in index.html")
        return
        
    new_header = match.group(1)
    print("Found new header block of length:", len(new_header))

    # Update all other html files
    html_files = glob.glob('*.html')
    html_files.remove('index.html')

    for file_path in html_files:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Check if the file has a header block
        if re.search(header_pattern, content):
            # Replace the old header with the new header
            new_content = re.sub(header_pattern, new_header, content)
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated header in {file_path}")
        else:
            print(f"Could not find header block in {file_path}")

if __name__ == '__main__':
    update_headers()
