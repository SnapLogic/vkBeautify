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
            var input = readFile("input.ui-778.xml");
            console.log(input);

            var output = vkbeautify.xml(input);
            console.log(output);

            var expected = readFile("expected.ui-778.xml");

            expect(output).toBe(expected);
        });

        it("ui-5546", function () {
            var input = readFile("input.ui-5546.xml");
            console.log(input);

            var output = vkbeautify.xml(input);
            console.log(output);

            var expected = readFile("expected.ui-5546.xml");

            expect(output).toBe(expected);
        });
    });
});
