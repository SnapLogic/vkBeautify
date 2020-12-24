# vkBeautify

> SnapLogic fork December 11th 2020 to incorporate open pull request https://github.com/vkiryukhin/vkBeautify/pull/5

javascript  plugin to **pretty-print** or **minify**
text in **XML**, **JSON**, **CSS** and **SQL** formats.

**Version** - 0.99.00.beta + (SnapLogic changes)

**Copyright** (c) 2012 Vadim Kiryukhin ( vkiryukhin @ gmail.com )

**Home page:** [http://www.eslinstructor.net/vkbeautify/](http://www.eslinstructor.net/vkbeautify/) 

**License:** MIT

[http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)

   **Pretty print**

        vkbeautify.xml(text [,indent_pattern]);
        vkbeautify.json(text [,indent_pattern]);
        vkbeautify.css(text [,indent_pattern]);
        vkbeautify.sql(text [,indent_pattern]);

        @text - String; text to beatufy;
        @indent_pattern - Integer | String;
                Integer:  number of white spaces;
                String:   character string to visualize indentation ( can also be a set of white spaces )
  **Minify**

        vkbeautify.xmlmin(text [,preserve_comments]);
        vkbeautify.jsonmin(text);
        vkbeautify.cssmin(text [,preserve_comments]);
        vkbeautify.sqlmin(text);

        @text - String; text to minify;
        @preserve_comments - Bool; [optional];
                Set this flag to true to prevent removing comments from @text ( minxml and mincss functions only. )

   **Examples**
   
        vkbeautify.xml(text); // pretty print XML
        vkbeautify.json(text, 4 ); // pretty print JSON
        vkbeautify.css(text, '. . . .'); // pretty print CSS
        vkbeautify.sql(text, '----'); // pretty print SQL

        vkbeautify.xmlmin(text, true);// minify XML, preserve comments
        vkbeautify.jsonmin(text);// minify JSON
        vkbeautify.cssmin(text);// minify CSS, remove comments ( default )
        vkbeautify.sqlmin(text);// minify SQL

## Getting Started

### Installation

1. Clone our forked repo. 
   ```sh
   git clone git@github.com:SnapLogic/vkBeautify.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
### Running Tests

vkBeautify uses [Jest](https://github.com/facebook/jest) to run the tests.

   ```sh
   yarn test
   ```
### Debugging Tests

You can use Chrome DevTools to debug Jest tests.

1. Start NODE DEBUGGER in project root.
   ```sh
    $ ./debug-test.sh
   ```

2. Open Google Chrome browser, and type in the address bar:
   ```sh
    chrome://inspect

    Click the "inspect" link under "Remote Target" to open Chrome DevTools.
   ```

3. Add source folder to workspace.
   ```sh
    SOURCES tab
        FILESYSTEM tab
            Click "+"

    You'll be prompted to allow access. Click ALLOW.
   ```

4. Open source file(s) and set breakpoints.

5. Press F8 to start debugging.
