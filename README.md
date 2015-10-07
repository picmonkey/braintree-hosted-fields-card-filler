
## Braintree Credit Card hosted fields filler

This is a chrome extension to quickly insert mock credit cards into braintree credit card fields.

### Installation

In chrome, go to [chrome://extensions/](chrome://extensions/)

Click `Load unpacked extension...`

Select the directory that you downloaded this codebase to.

### Usage

In pages with an `iframe#braintree-hosted-field-number` element, a green page icon will appear in the url bar. You can click that to insert a mock credit card.

### Security

This chrome extension has access to insert javascript into any pages or iframes with the url `"https://assets.braintreegateway.com/*"`. You should be wary, and read the source code.
