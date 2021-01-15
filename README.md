[![Build Status](https://travis-ci.com/dscafati/react-emoji-country-code-selector.svg?branch=main)](https://travis-ci.com/dscafati/react-emoji-country-code-selector)

# React + Emoji  Phone Country Code Selector

🇦🇷 🇺🇸 🇩🇪 🇯🇵 🇰🇷 🇨🇳 🇮🇳 🇫🇷 🇪🇸 🇮🇹 🇷🇺  

This is a React component that generates a pure html `<select>` element populated with a list of countries and their respective country codes.

In practice, there are countries with more than one code, and codes in more than one country (N:N).

## Example
![Screenshot](https://raw.githubusercontent.com/dscafati/react-emoji-country-code-selector/main/screenshot.png)

## Usage

Download and declare the dependency with the command

`npm i react-emoji-country-code-selector`

or

`yarn add react-emoji-country-code-selector`


In your code, import the component like this:

```javascript
import {HtmlEmojiCountryCodeSelector} from "react-emoji-country-code-selector";
```

Or if your project doesn't support ES6

```javascript
const HtmlEmojiCountryCodeSelector = require("react-emoji-country-code-selector").HtmlEmojiCountryCodeSelector;
```

Then, use it as follows.
Notice that this component accepts all the same properties of a regular `<select>` element. The 2 added properties are all optional

```javascript
// Example 1
<HtmlEmojiCountryCodeSelector/>;

// Example 2
<HtmlEmojiCountryCodeSelector
    defaultValue={"+1"}
    generateValue={(data) => data.code}
    generateLabel={(data) => `${data.ISO} ${data.flag} ${data.code}`}
>
    <option>Select your country code</option>
</HtmlEmojiCountryCodeSelector>;
    
// Example 3
<HtmlEmojiCountryCodeSelector
    defaultValue={"US"}
    generateValue={(data) => data.ISO}
>
</HtmlEmojiCountryCodeSelector>;
```

---
Note: The dataset can also be imported individually


```javascript
import {dataset} from "react-emoji-country-code-selector";
```

or

```javascript
const dataset = require("react-emoji-country-code-selector").dataset;
```


## Collaboration

Feel free to fork the repository, modify it, and push back code to this repo.

I'll be happy to review any type of pull request!
