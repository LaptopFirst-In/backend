
## Run Locally

Run the API server locally

```bash
  git clone https://github.com/LaptopFirst-In/backend.git
```

Go to the project directory

```bash
  cd backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
API server will be started at `localhost:3000`

## API Reference

BASE URL :- 
```http
  http://localhost:3000/
```
#### OTP Generation

```http
  POST /registerAadhaar
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `aadhaar_number`      | `string` | **Required**. input aadhar number from body  |

#### OTP Validation

```http
  POST /verifyAadhaar
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `otp`      | `number` | **Required**. input otp from end-user  |
| `ref_id`      | `number` | **Required**. input reference id from data return from registerAadhaar  |


