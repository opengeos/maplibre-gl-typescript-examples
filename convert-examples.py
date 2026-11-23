#!/usr/bin/env python3
"""
Convert MapLibre HTML examples to TypeScript modules.
"""

import os
import re
from pathlib import Path

HTML_DIR = Path(__file__).parent.parent / "html"
EXAMPLES_DIR = Path(__file__).parent / "src" / "examples"

# Create examples directory
EXAMPLES_DIR.mkdir(parents=True, exist_ok=True)


def extract_scripts(content: str) -> list:
    """Extract JavaScript content from script tags."""
    # Match script tags that don't have src attribute
    pattern = r'<script(?:\s+type="[^"]*")?\s*>([^<]*(?:<(?!/script>)[^<]*)*)</script>'
    matches = re.findall(pattern, content, re.DOTALL | re.IGNORECASE)
    # Filter out import maps
    scripts = []
    for match in matches:
        if '"imports"' not in match:  # Skip import maps
            scripts.append(match.strip())
    return scripts


def fix_html_entities_in_content(html: str) -> str:
    """Fix problematic HTML content like < inside option elements."""
    # The specific case we need to handle is:
    # <option value="<"><</option> - where the text content is <
    # The pattern ><< (closing tag bracket, then text <, then opening of closing tag <)
    # needs to become >&lt;<

    # Match >< followed by </tag - this means < is text content before a closing tag
    html = re.sub(r"><(</(?:option|select))", r">&lt;\1", html, flags=re.IGNORECASE)

    return html


def extract_body_content(content: str) -> str:
    """Extract body content, excluding script tags."""
    # Find body content
    body_match = re.search(
        r"<body[^>]*>(.*?)</body>", content, re.DOTALL | re.IGNORECASE
    )
    if not body_match:
        return '<div id="map"></div>'

    body = body_match.group(1)

    # Remove script tags
    body = re.sub(
        r"<script[^>]*>.*?</script>", "", body, flags=re.DOTALL | re.IGNORECASE
    )

    # Fix HTML entities
    body = fix_html_entities_in_content(body)

    return body.strip()


def extract_styles(content: str) -> list:
    """Extract CSS from style tags."""
    pattern = r"<style[^>]*>(.*?)</style>"
    return re.findall(pattern, content, re.DOTALL | re.IGNORECASE)


def extract_external_resources(content: str) -> tuple:
    """Extract external scripts and stylesheets."""
    scripts = []
    styles = []

    # Find script src
    for match in re.finditer(
        r'<script[^>]*\ssrc=["\']([^"\']+)["\'][^>]*>', content, re.IGNORECASE
    ):
        src = match.group(1)
        if "maplibre-gl" not in src and "../../dist" not in src:
            scripts.append(src)

    # Find stylesheet links
    for match in re.finditer(
        r'<link[^>]*\shref=["\']([^"\']+)["\'][^>]*\srel=["\']stylesheet["\']|<link[^>]*\srel=["\']stylesheet["\'][^>]*\shref=["\']([^"\']+)["\']',
        content,
        re.IGNORECASE,
    ):
        href = match.group(1) or match.group(2)
        if href and "maplibre-gl" not in href and "../../dist" not in href:
            styles.append(href)

    return scripts, styles


def extract_metadata(content: str) -> tuple:
    """Extract title and description."""
    title_match = re.search(r"<title>(.*?)</title>", content, re.IGNORECASE)
    title = title_match.group(1) if title_match else "Example"

    desc_match = re.search(
        r'<meta\s+property=["\']og:description["\']\s+content=["\']([^"\']+)["\']',
        content,
        re.IGNORECASE,
    )
    description = desc_match.group(1) if desc_match else ""

    return title, description


def convert_js_to_ts(js_code: str) -> str:
    """Convert JavaScript code to TypeScript with proper imports."""

    # Add maplibre-gl import at the top
    imports = [
        "import maplibregl from 'maplibre-gl';",
        "import 'maplibre-gl/dist/maplibre-gl.css';",
    ]

    # Check for various library usage and add imports
    if "THREE" in js_code or "three" in js_code.lower():
        imports.append("import * as THREE from 'three';")
        if "GLTFLoader" in js_code:
            imports.append(
                "import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';"
            )

    if "deck." in js_code or "deck.gl" in js_code.lower():
        imports.append("import * as deck from 'deck.gl';")

    if "d3." in js_code:
        imports.append("import * as d3 from 'd3';")

    if "turf." in js_code.lower() or "@turf" in js_code:
        imports.append("import * as turf from '@turf/turf';")

    if "pmtiles" in js_code.lower():
        imports.append("import * as pmtiles from 'pmtiles';")

    # Remove existing import statements from the code (we'll add proper ones)
    js_code = re.sub(r"import\s+.*?from\s+['\"].*?['\"];?\s*\n?", "", js_code)

    # Clean up the code
    js_code = js_code.strip()

    # Combine imports and code
    result = "\n".join(imports) + "\n\n" + js_code

    return result


def create_example_html(
    name: str,
    title: str,
    description: str,
    styles: list,
    body_html: str,
    external_scripts: list,
    external_styles: list,
) -> str:
    """Create the HTML file for an example."""

    style_block = ""
    if styles:
        combined_styles = "\n".join(styles)
        # Filter out basic body/html/map styles that we already include
        style_block = f"""<style>
{combined_styles}
</style>"""

    external_style_links = (
        "\n    ".join(f'<link rel="stylesheet" href="{s}">' for s in external_styles)
        if external_styles
        else ""
    )
    external_script_tags = (
        "\n    ".join(f'<script src="{s}"></script>' for s in external_scripts)
        if external_scripts
        else ""
    )

    if not body_html.strip():
        body_html = '<div id="map"></div>'

    # Add back link to landing page
    back_link = """<a href="../../index.html" style="position:fixed;top:10px;right:10px;z-index:9999;background:#1a1a24;color:#00d4aa;padding:8px 16px;border-radius:8px;text-decoration:none;font-family:system-ui,sans-serif;font-size:14px;border:1px solid #2a2a3a;">← All Examples</a>"""

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | MapLibre Examples</title>
    <meta property="og:description" content="{description}">
    {external_style_links}
    <style>
        body {{ margin: 0; padding: 0; }}
        html, body, #map {{ height: 100%; }}
    </style>
    {style_block}
</head>
<body>
    {back_link}
    {body_html}
    {external_script_tags}
    <script type="module" src="./{name}.ts"></script>
</body>
</html>
"""


def process_example(html_file: Path) -> None:
    """Process a single HTML example file."""
    name = html_file.stem

    print(f"Processing: {name}")

    with open(html_file, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract all components
    title, description = extract_metadata(content)
    scripts = extract_scripts(content)
    styles = extract_styles(content)
    body_html = extract_body_content(content)
    external_scripts, external_styles = extract_external_resources(content)

    # Create TypeScript file
    ts_code = ""
    if scripts:
        combined_js = "\n".join(scripts)
        ts_code = convert_js_to_ts(combined_js)
    else:
        # Basic template if no scripts found
        ts_code = """import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [0, 0],
    zoom: 1
});
"""

    # Write TypeScript file
    ts_file = EXAMPLES_DIR / f"{name}.ts"
    with open(ts_file, "w", encoding="utf-8") as f:
        f.write(ts_code)

    # Create HTML file
    html_content = create_example_html(
        name, title, description, styles, body_html, external_scripts, external_styles
    )

    html_out = EXAMPLES_DIR / f"{name}.html"
    with open(html_out, "w", encoding="utf-8") as f:
        f.write(html_content)


def main():
    """Main function to convert all examples."""
    html_files = sorted(HTML_DIR.glob("*.html"))

    print(f"Found {len(html_files)} HTML examples")

    for html_file in html_files:
        try:
            process_example(html_file)
        except Exception as e:
            print(f"Error processing {html_file.name}: {e}")
            import traceback

            traceback.print_exc()

    print(f"\nConverted {len(html_files)} examples to TypeScript")
    print(f"Output directory: {EXAMPLES_DIR}")


if __name__ == "__main__":
    main()
