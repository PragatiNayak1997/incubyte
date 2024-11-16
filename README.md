# String Calculator

This project implements a simple **String Calculator** that can handle basic arithmetic operations on numbers provided as strings. It supports custom delimiters, multi-character delimiters, new lines, and ensures proper validation, such as handling negative numbers and ignoring values greater than 1000.

## Features

- **Basic Operations**: Supports addition of numbers separated by commas or new lines.
- **Custom Delimiters**: You can specify a custom delimiter using the format `//[delimiter]\n`, allowing delimiters of any length.
- **Negative Number Handling**: Throws an error when negative numbers are provided, listing all of them.
- **Ignores Numbers Greater Than 1000**: Numbers larger than 1000 are ignored in the sum.
- **Multiple Delimiters**: Handles multiple delimiters in one input.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PragatiNayak1997/incubyte.git
   ```
2. Install dependencies:
   ```bash 
   cd incubyte
   npm install
    ```  
## Usage
You can use the add function to calculate the sum of numbers from a string input.

## Testing
To run the tests using Jest:
  ```bash
  npm test
   ```
     

