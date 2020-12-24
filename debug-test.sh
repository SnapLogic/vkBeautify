#!/usr/bin/env bash

test=${1:-"test/vkbeautify.test.js"}

echo -e "Debugging $test. Open Chrome -> chrome://inspect\n"
node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand $test
