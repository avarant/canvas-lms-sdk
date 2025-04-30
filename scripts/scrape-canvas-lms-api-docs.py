#!/usr/bin/env -S uv run --script
# /// script
# dependencies = [
#   "beautifulsoup4", # For HTML parsing
#   "requests",        # For HTTP requests
#   "pandas",         # For CSV handling
#   "rich",           # For progress bar and console output
# ]
# ///

from bs4 import BeautifulSoup
import requests
import pandas as pd
import os
from concurrent.futures import ThreadPoolExecutor, as_completed
from urllib.parse import urlparse
import time
import logging
from rich.progress import Progress, BarColumn, TextColumn, TimeElapsedColumn, MofNCompleteColumn
import argparse

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

def scrape_url(url, base_dir, rate_limit=0.5, force=False):
    """Scrape content from a URL and save it to a file."""
    filename = get_safe_filename(url)
    filepath = os.path.join(base_dir, filename)
    # Skip if file exists and is non-empty unless forced
    if os.path.exists(filepath) and os.path.getsize(filepath) > 0 and not force:
        logging.debug(f"Skipping {url}, file already exists at {filepath}")
        return True
    try:
        # Rate limit delay
        time.sleep(rate_limit)
        response = requests.get(url, timeout=10)
        response.raise_for_status()

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(response.text)

        logging.debug(f"Successfully scraped and saved: {url}")
        return True
    except Exception as e:
        logging.error(f"Error scraping {url}: {str(e)}")
        return False

def main():
    parser = argparse.ArgumentParser(description="Scrape Canvas LMS API docs")
    parser.add_argument("--threads", type=int, default=5, help="Number of threads to use (1 for sequential)")
    parser.add_argument("--rate", type=float, default=0.5, help="Rate limit delay in seconds between requests")
    parser.add_argument("--force", action="store_true", help="Force re-download even if file exists")
    args = parser.parse_args()
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
    
    # Scrape URLs with optional threading
    if args.threads > 1:
        with ThreadPoolExecutor(max_workers=args.threads) as executor:
            future_to_url = {executor.submit(scrape_url, url, base_dir, args.rate, args.force): url for url in links}

            with Progress(
                TextColumn("[cyan]Scraping {task.description}"),
                BarColumn(),
                MofNCompleteColumn(), # Shows number of completed tasks e.g., "10/50"
                TextColumn("[progress.percentage]{task.percentage:>3.0f}%"),
                TimeElapsedColumn(),
            ) as progress:
                task = progress.add_task("URLs", total=len(links))
                
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
                    progress.update(task, advance=1)
    else:
        # Sequential scraping when threads=1
        with Progress(
            TextColumn("[cyan]Scraping {task.description}"),
            BarColumn(),
            MofNCompleteColumn(),
            TextColumn("[progress.percentage]{task.percentage:>3.0f}%"),
            TimeElapsedColumn(),
        ) as progress:
            task = progress.add_task("URLs", total=len(links))
            for url in links:
                if scrape_url(url, base_dir, args.rate, args.force):
                    successful += 1
                else:
                    failed += 1
                progress.update(task, advance=1)
    
    logging.info(f"Scraping completed. Successfully scraped {successful} URLs, failed {failed} URLs")

if __name__ == "__main__":
    main()
