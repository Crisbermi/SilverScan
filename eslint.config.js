module.exports = [
  {
    files: ["script.js"], // Only lint script.js
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs", // Assuming script.js is not a module itself
      globals: {
        // Common browser globals
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        IntersectionObserver: "readonly",
        console: "readonly",
        setInterval: "readonly",
        // Variables/functions defined in script.js that might be used globally
        // (though it's better to avoid global functions if possible)
        plusSlides: "readonly",
        currentSlide: "readonly",
        showSlides: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "warn", // Warn about unused variables
      "no-undef": "error",    // Error on undefined variables
      "no-empty": "warn",       // Warn on empty blocks
      "no-extra-semi": "warn",  // Warn on unnecessary semicolons
      "no-cond-assign": "error",// Disallow assignment operators in conditional expressions
      "no-debugger": "warn",    // Warn if debugger is used
      "no-dupe-keys": "error",  // Disallow duplicate keys in object literals
      "no-dupe-args": "error",  // Disallow duplicate arguments in function definitions
      "no-unreachable": "warn", // Warn about unreachable code after return, throw, continue, and break statements
      "valid-typeof": "error",  // Enforce comparing typeof expressions against valid strings
      // DOM-specific rules (might need plugins for deeper analysis, but basic checks)
      "no-prototype-builtins": "warn", // Warn if calling Object.prototype methods directly on objects
    }
  }
];
