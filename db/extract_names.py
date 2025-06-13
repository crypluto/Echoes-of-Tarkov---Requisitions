import os
import json

# Path to the folder containing JSON files
FOLDER_PATH = "./items"  # Change this to your target folder path
OUTPUT_FILE = "names_output.txt"

def extract_names_from_file(filepath):
    names = []
    try:
        with open(filepath, 'r', encoding='utf-8') as file:
            data = json.load(file)

            for item in data.values():
                locales = item.get("locales", {})
                en_locale = locales.get("en", {})
                name = en_locale.get("name")
                if name:
                    names.append(name)

    except (json.JSONDecodeError, UnicodeDecodeError) as e:
        print(f"Error reading {filepath}: {e}")
    return names

def main():
    all_names = []

    for filename in os.listdir(FOLDER_PATH):
        if filename.endswith(".json"):
            filepath = os.path.join(FOLDER_PATH, filename)
            names = extract_names_from_file(filepath)
            all_names.extend(names)

    # Write to the output file
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as out_file:
        for name in all_names:
            out_file.write(name + "\n")

    print(f"Extracted {len(all_names)} names to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
