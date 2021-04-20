#!/bin/bash

echo "Start"
rm -rf coverage
# Running for all projects in parallel and get coverage report.
ng test --watch=false --browsers=ChromeHeadless --codeCoverage=true &
wait  # Wait for all tasks to complete

# Get a unified coverage report.
node ./combine-coverage.js

exit 0
echo "Done"
