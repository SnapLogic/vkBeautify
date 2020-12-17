var { vkbeautify } = require("../vkbeautify.js");

const fs = require("fs");
const path = require("path");

function readFile(filename) {
    const file = path.join(__dirname, "./", filename);
    return fs.readFileSync(file, "utf-8");
}

describe('vkbeautify', function () {

    describe('xml', function () {

        it("ui-778", function () {

            var input = readFile("ui-778-input.xml");
            console.log(input);

            var output = vkbeautify.xml(input);
            console.log(output);

            var expected = readFile("ui-778-expected.xml");

            expect(output).toBe(expected);
        });
    });
});
