# Actian Careers Service

## Overview

### Description:
A Node JS REST application to retrieve list of titles of open positions for a department from Actian Careers page.

### To run the service(NodeJS LTS- v20.12.0, npm - v10.5.2):
npm install
npm run start

## APIs

#### GET: http://localhost:3000/department/open-positions?department="department-name"

```
RESPONSE BODY:
{
  "positions": [
  ]
}
```