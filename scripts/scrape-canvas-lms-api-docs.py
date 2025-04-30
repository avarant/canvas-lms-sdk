# scripts/scrape-canvas-lms-api-docs.py

from bs4 import BeautifulSoup
import requests
import pandas as pd
import os
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urlparse
import time
import logging
from tqdm import tqdm

# Set up logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def setup_directories():
    """Create necessary directories if they don't exist."""
    base_dir = "./docs/canvas-lms-api/raw"
    os.makedirs(base_dir, exist_ok=True)
    return base_dir

def get_safe_filename(url):
    """Convert URL to a safe filename."""
    parsed = urlparse(url)
    # Remove common prefixes and extensions, replace special chars
    filename = parsed.path.strip('/').replace('/', '_')
    if not filename:
        filename = 'index'
    if not filename.endswith('.html'):
        filename += '.html'
    return filename

def scrape_url(url, base_dir):
    """Scrape content from a URL and save it to a file."""
    try:
        # Add delay to be nice to the server
        time.sleep(0.5)
        
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        filename = get_safe_filename(url)
        filepath = os.path.join(base_dir, filename)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(response.text)
            
        logging.debug(f"Successfully scraped and saved: {url}")
        return True
    except Exception as e:
        logging.error(f"Error scraping {url}: {str(e)}")
        return False

def main():
    # First, scrape the index page and create CSV if it doesn't exist
    base_url = "https://canvas.instructure.com/doc/api/"
    base_path = "index.html"
    csv_path = "docs/canvas-lms-api/raw/canvas-lms-api-docs-hyperlinks.csv"
    
    if not os.path.exists(csv_path):
        logging.info("Scraping index page to create CSV file...")
        response = requests.get(base_url + base_path)
        html_content = response.text

        soup = BeautifulSoup(html_content, "html.parser")
        links = [base_url + a['href'] for a in soup.find_all('a', href=True)]
        
        df = pd.DataFrame(links, columns=["link"])
        df.to_csv(csv_path, index=False)
        logging.info(f"Created new CSV file with {len(links)} links")
    
    # Set up directories
    base_dir = setup_directories()
    
    # Read the CSV file
    df = pd.read_csv(csv_path)
    links = df['link'].tolist()
    
    logging.info(f"Starting to scrape {len(links)} URLs...")
    successful = 0
    failed = 0
    
    # Use ThreadPoolExecutor for parallel scraping
    with ThreadPoolExecutor(max_workers=5) as executor:
        # Submit all tasks and create a dictionary to track URLs
        future_to_url = {executor.submit(scrape_url, url, base_dir): url for url in links}
        
        # Create progress bar
        with tqdm(total=len(links), desc="Scraping URLs", unit="page") as pbar:
            for future in as_completed(future_to_url):
                url = future_to_url[future]
                try:
                    if future.result():
                        successful += 1
                    else:
                        failed += 1
                except Exception as e:
                    logging.error(f"Unexpected error with {url}: {str(e)}")
                    failed += 1
                pbar.update(1)
    
    logging.info(f"Scraping completed. Successfully scraped {successful} URLs, failed {failed} URLs")

if __name__ == "__main__":
    main()
