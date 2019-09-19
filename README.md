# Summing Grid

Author: Deep Sheth  
Email: djsdeep@gmail.com

## Development Considerations

1. All of the input fields are controlled components and the `App` manages the state for the inputs. This maintains a single source of truth for their values.

The input fields are designed to be reuseable. The `inputValues` array in `index.tsx` can be expanded to automatically display more fields. For example, the code below will create 5 editable input fields.

```tsx
state = {
  inputValues: ["0", "0", "0", "0", "0"]
};
```

A more scalable and customizable approach would be to create separate components files for the input fields, maximizing reusability. Due to the simple nature of this problem, I decided not to create separate components.

2. The algorithm for rounding and truncating the sum is designed to be flexible. We can easily change the fixed number of digits displayed in the sum field. For example, instead of seeing a default of 3 digits for the sum, that can be increased to show 5 digits. Only the `FIXED_SUM_DIGITS` constant needs to be modified in `utility.tsx`.

3. Input fields can have negative values, the summing alrogithm works on both positive and negative integers.

4. If a user inputs invalid text into the input field, the text color changes to red to warn the user. The program handles these situations gracefully by treating invalid inputs as `0` values when summing.

5. I use the `styled-components` library for a CSS in JS approach to ensure styles are scoped to specific components. The responsive grid uses the CSS3 Grid Layout style rules. This provides greater customization for how many columns our grid contains as the screen dimensions change or as we change the number of input fields in our app. Specifically, the `APP_CONFIG` constant has two properties which determine how the grid renders. `isGridSingleRow` determines if all input fields should be displayed in a single row. Alternatively, `defaultNumColumns` determines how many columns should be displayed in a row and dynamically calculates their width. This approach is more favorable than hardcoding a specific column width (of 25% for example). Adding more input fields would be no problem at all for this grid.

6)  The sum accounts for values up to the trillions. Also, due to the nature of javascript, certain edge cases will throw off JS's `toFixed()` function, making it inaccurately round.
