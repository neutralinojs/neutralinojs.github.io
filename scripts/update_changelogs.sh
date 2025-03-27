#!/bin/bash

function download_changelog() {
    repo=$1
    filename=$2
    title=$3
    url="https://github.com/neutralinojs/$repo/raw/main/CHANGELOG.md"
    file="./docs/release-notes/$filename"
    md_file="$file.md"

    # --- Download the changelog ---
    echo "Downloading the changelog file from $repo repository..."
    wget -q -O $file $url

    # --- Processing the changelog ---
    tail -n+7 $file > "${file}_mod"

    # --- Add a title ---
    echo "Adding a title..."
    content="---\ntitle: $title\ntoc_max_heading_level: 2\n---\n"
    echo -e $content > $md_file
    cat "${file}_mod" >> $md_file

    # --- Cleanup ----
    rm $file "${file}_mod"
}

download_changelog neutralinojs framework Framework
download_changelog neutralinojs-cli cli CLI
download_changelog neutralino.js client-library "Client Library"

echo
echo "OK: Done."
