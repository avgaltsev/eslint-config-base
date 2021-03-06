module.exports = {
	rules: {
		// enforce linebreaks after opening and before closing array brackets
		// "array-bracket-newline": "off",

		// enforce consistent spacing inside array brackets
		// "array-bracket-spacing": "off",

		// enforce line breaks after each array element
		// "array-element-newline": "off",

		// disallow or enforce spaces inside of blocks after opening block and before closing block
		// "block-spacing": "off",

		// enforce consistent brace style for blocks
		// "brace-style": "off",

		// enforce camelcase naming convention
		// "camelcase": "off",

		// enforce or disallow capitalization of the first letter of a comment
		// "capitalized-comments": "off",

		// require or disallow trailing commas
		// "comma-dangle": "off",

		// enforce consistent spacing before and after commas
		// "comma-spacing": "off",

		// enforce consistent comma style
		// "comma-style": "off",

		// enforce consistent spacing inside computed property brackets
		// "computed-property-spacing": "off",

		// enforce consistent naming when capturing the current execution context
		// "consistent-this": "off",

		// require or disallow newline at the end of files
		// "eol-last": "off",

		// require or disallow spacing between function identifiers and their invocations
		// "func-call-spacing": "off",

		// require function names to match the name of the variable or property to which they are assigned
		// "func-name-matching": "off",

		// require or disallow named `function` expressions
		// "func-names": "off",

		// enforce the consistent use of either `function` declarations or expressions
		// "func-style": "off",

		// enforce line breaks between arguments of a function call
		// "function-call-argument-newline": "off",

		// enforce consistent line breaks inside function parentheses
		// "function-paren-newline": "off",

		// disallow specified identifiers
		// "id-denylist": "off",

		// enforce minimum and maximum identifier lengths
		// "id-length": "off",

		// require identifiers to match a specified regular expression
		// "id-match": "off",

		// enforce the location of arrow function bodies
		// "implicit-arrow-linebreak": "off",

		// enforce consistent indentation
		// "indent": "off",

		// enforce the consistent use of either double or single quotes in JSX attributes
		// "jsx-quotes": "off",

		// enforce consistent spacing between keys and values in object literal properties
		// "key-spacing": "off",

		// enforce consistent spacing before and after keywords
		// "keyword-spacing": "off",

		// enforce position of line comments
		// "line-comment-position": "off",

		// enforce consistent linebreak style
		// "linebreak-style": "off",

		// require empty lines around comments
		// "lines-around-comment": "off",

		// require or disallow an empty line between class members
		// "lines-between-class-members": "off",

		// enforce a maximum depth that blocks can be nested
		// "max-depth": "off",

		// enforce a maximum line length
		// "max-len": "off",

		// enforce a maximum number of lines per file
		// "max-lines": "off",

		// enforce a maximum number of lines of code in a function
		// "max-lines-per-function": "off",

		// enforce a maximum depth that callbacks can be nested
		// "max-nested-callbacks": "off",

		// enforce a maximum number of parameters in function definitions
		// "max-params": "off",

		// enforce a maximum number of statements allowed in function blocks
		// "max-statements": "off",

		// enforce a maximum number of statements allowed per line
		// "max-statements-per-line": "off",

		// enforce a particular style for multiline comments
		// "multiline-comment-style": "off",

		// enforce newlines between operands of ternary expressions
		// "multiline-ternary": "off",

		// require constructor names to begin with a capital letter
		// "new-cap": "off",

		// enforce or disallow parentheses when invoking a constructor with no arguments
		// "new-parens": "off",

		// require a newline after each call in a method chain
		// "newline-per-chained-call": "off",

		// disallow `Array` constructors
		// "no-array-constructor": "off",

		// disallow bitwise operators
		// "no-bitwise": "off",

		// disallow `continue` statements
		// "no-continue": "off",

		// disallow inline comments after code
		// "no-inline-comments": "off",

		// disallow `if` statements as the only statement in `else` blocks
		// "no-lonely-if": "off",

		// disallow mixed binary operators
		// "no-mixed-operators": "off",

		// disallow mixed spaces and tabs for indentation
		"no-mixed-spaces-and-tabs": "error",

		// disallow use of chained assignment expressions
		// "no-multi-assign": "off",

		// disallow multiple empty lines
		// "no-multiple-empty-lines": "off",

		// disallow negated conditions
		// "no-negated-condition": "off",

		// disallow nested ternary expressions
		// "no-nested-ternary": "off",

		// disallow `Object` constructors
		// "no-new-object": "off",

		// disallow the unary operators `++` and `--`
		// "no-plusplus": "off",

		// disallow specified syntax
		// "no-restricted-syntax": "off",

		// disallow all tabs
		// "no-tabs": "off",

		// disallow ternary operators
		// "no-ternary": "off",

		// disallow trailing whitespace at the end of lines
		// "no-trailing-spaces": "off",

		// disallow dangling underscores in identifiers
		// "no-underscore-dangle": "off",

		// disallow ternary operators when simpler alternatives exist
		// "no-unneeded-ternary": "off",

		// disallow whitespace before properties
		// "no-whitespace-before-property": "off",

		// enforce the location of single-line statements
		// "nonblock-statement-body-position": "off",

		// enforce consistent line breaks inside braces
		// "object-curly-newline": "off",

		// enforce consistent spacing inside braces
		// "object-curly-spacing": "off",

		// enforce placing object properties on separate lines
		// "object-property-newline": "off",

		// enforce variables to be declared either together or separately in functions
		// "one-var": "off",

		// require or disallow newlines around variable declarations
		// "one-var-declaration-per-line": "off",

		// require or disallow assignment operator shorthand where possible
		// "operator-assignment": "off",

		// enforce consistent linebreak style for operators
		// "operator-linebreak": "off",

		// require or disallow padding within blocks
		// "padded-blocks": "off",

		// require or disallow padding lines between statements
		// "padding-line-between-statements": "off",

		// disallow the use of `Math.pow` in favor of the `**` operator
		// "prefer-exponentiation-operator": "off",

		// disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
		// "prefer-object-spread": "off",

		// require quotes around object literal property names
		// "quote-props": "off",

		// enforce the consistent use of either backticks, double, or single quotes
		// "quotes": "off",

		// require or disallow semicolons instead of ASI
		// "semi": "off",

		// enforce consistent spacing before and after semicolons
		// "semi-spacing": "off",

		// enforce location of semicolons
		// "semi-style": "off",

		// require object keys to be sorted
		// "sort-keys": "off",

		// require variables within the same declaration block to be sorted
		// "sort-vars": "off",

		// enforce consistent spacing before blocks
		// "space-before-blocks": "off",

		// enforce consistent spacing before `function` definition opening parenthesis
		// "space-before-function-paren": "off",

		// enforce consistent spacing inside parentheses
		// "space-in-parens": "off",

		// require spacing around infix operators
		// "space-infix-ops": "off",

		// enforce consistent spacing before or after unary operators
		// "space-unary-ops": "off",

		// enforce consistent spacing after the `//` or `/*` in a comment
		// "spaced-comment": "off",

		// enforce spacing around colons of switch statements
		// "switch-colon-spacing": "off",

		// require or disallow spacing between template tags and their literals
		// "template-tag-spacing": "off",

		// require or disallow Unicode byte order mark (BOM)
		// "unicode-bom": "off",

		// require parenthesis around regex literals
		// "wrap-regex": "off",
	},
};
