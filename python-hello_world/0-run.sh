#!/bin/bash

# Check if the environment variable PYFILE is set
if [ -z "$PYFILE" ]; then
    echo "Error: PYFILE environment variable is not set."
    exit 1
fi

# Check if the Python file exists
if [ ! -f "$PYFILE" ]; then
    echo "Error: Python file '$PYFILE' not found."
    exit 1
fi

# Run the Python script
python2 "$PYFILE"
