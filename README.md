# ZATCA (Fatoorah) QR-Code Implementation

[![NPM](https://nodei.co/npm/@axenda/zatca.png?mini=true)](https://npmjs.org/package/@axenda/zatca)

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/axenda/zatca/Running%20Code%20Coverage/main)
[![codecov](https://codecov.io/gh/axenda/zatca/branch/main/graph/badge.svg?token=T52NJXGE0O)](https://codecov.io/gh/axenda/zatca)
[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/user/project/master/LICENSE)

An unofficial package to help developers implement ZATCA (Fatoora) QR code easily which is required for e-invoicing in
Saudi Arabia.

> ✨ You could use it in both frontend and backend Nodejs projects.

> ✅ Validated to have the same output as ZATCA's SDK as of 18 November 2021.

## Installation

To get started, install the package:

```bash
npm i --save @axenda/zatca
```

## Usage

### Summary

Simple, all you need to generate a QR code is:

```typescript
import { Invoice } from '@axenda/zatca';

const invoice = new Invoice({
	sellerName: 'Axenda',
	vatRegistrationNumber: '1234567891',
	invoiceTimestamp: '2021-12-04T00:00:00Z',
	invoiceTotal: '100.00',
	invoiceVatTotal: '15.00',
});

const imageData = await invoice.render();

// Read the following sections for more details.
```

### Import

First, import Invoice class or Tag class to represent an invoice QR code:

```typescript
import { Invoice } from '@axenda/zatca';
// or
import { Tag } from '@axenda/zatca';
```

### Representing an invoice QR code

Second, create an instance of Invoice or an array of Tag class:

```typescript
const invoice = new Invoice({
	sellerName: 'Axenda',
	vatRegistrationNumber: '1234567891',
	invoiceTimestamp: '2021-12-04T00:00:00Z',
	invoiceTotal: '100.00',
	invoiceVatTotal: '15.00',
});
// or
const tags: Tag[] = [
	new Tag(1, 'Axenda'),
	new Tag(2, '1234567891'),
	new Tag(3, '2021-12-04T00:00:00Z'),
	new Tag(4, '100.00'),
	new Tag(5, '15.00'),
];
```

### Generate TLV

Now you can generate TLV string from the invoice or from the tags array:

```typescript
invoice.toTlv();

// or using tags array

import { toTlv } from '@axenda/zatca';

toTlv(tags)
```

### Generate Base64

You cloud generate Base64 string from the invoice or from the tags array:

```typescript
invoice.toBase64();

// or using tags array

import { tagsToBase64 } from '@axenda/zatca';

tagsToBase64(tags);
```

### Render QR code

You can generate image data (png) from base64 string and render it in browser:

```typescript
await invoice.render();

// or using tags array

import { renderTags } from '@axenda/zatca';

await renderTags(tags);
```

### Use QR code image data

Use the image data to display the QR code in browser:

```html
<!-- For React -->
<img src={imageData} alt="Invoice QR Code">
<!-- For Angular -->
<img [src]="imageData"/>
<!-- Just use the imageData variable no matter what framework you use  -->
```

## Tests

To run test suites, first install dependencies, then run `npm test`:

```bash
npm install
npm test
```

## Package roadmap

- [x] Support ZATCA invoice QR code phase 1
- [ ] Review package API consistency
- [ ] Support ZATCA invoice QR code phase 2

## Contributing

We welcome [contributions](https://github.com/axenda/zatca/graphs/contributors) of all kinds from anyone. Please take a
moment to review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](https://github.com/axenda/zatca/issues/new)
* [Feature requests](CONTRIBUTING.md#-feature-requests)
* [Pull requests](CONTRIBUTING.md#-pull-requests)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
