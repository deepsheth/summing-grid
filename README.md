# Summing Grid

Author: Deep Sheth  
Email: djsdeep@gmail.com

## Development Considerations

1. The input fields are designed to be reuseable. The inputValues array can be expanded to automatically display more fields. A more scalable and customizable approach would be to create separate components for the input fields, maximizing reusability. Due to the simple nature of this problem, I decided not to create additional components.

2. The algorithm for rounding and truncating the sum is designed to be flexible. We can easily change the fixed number of digits displayed in the sum field. For example, instead of seeing a default of 3 digits for the sum, that can be increased to show 5 digits. Only the FIXED_SUM_DIGITS constant needs to be modified.

3. Input fields can have negative values, the summing alrogithm works on both positive and negative integers.

4. If a user inputs invalid text into the input field, the text color changes to red to warn the user. The program handles these situations gracefully by ignoring invalid input when summing.

5. Styled components are used to better manage the CSS. The responsive grid uses the CSS3 Grid Layout. This provides greater customization for how many columns our grid contains as the screen dimensions change or as we change the number of input fields in our app.

For example, if we want to display all input fields in one line, it would not be good practiceto hardcode 25% to be the width of our input fields since we may want to add more input fields later on. The CSS grid handles these different situations, ensuring our app layout is scalable.
