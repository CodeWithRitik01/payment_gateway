# Payment Gateway Service

This project is a backend service for a scalable and secure payment gateway. The service handles various types of transactions, such as credit card, debit card, and digital wallets.

## System Design

### High-Level Architecture

https://drive.google.com/file/d/1t9a6NWAlv5CV5utaV7PPfnZ9OOWshCJn/view?usp=drive_link

### Database Schema

The database schema includes the following tables:

1. **Users**: Stores user information.
2. **Payments**: Stores payment transactions.
3. **Refunds**: Stores refund transactions.

### API Design

#### Endpoints

1. **Create Payment**: `POST /payments`
2. **Process Payment**: `POST /payments/process`
3. **Retrieve Payment Status**: `GET /payments/{id}`
4. **Handle Refunds**: `POST /payments/{id}/refund`

### Data Flow

1. **User initiates a payment**: The request is sent to the `Create Payment` endpoint.
2. **Payment is processed**: The `Process Payment` endpoint handles the transaction.
3. **Check payment status**: The `Retrieve Payment Status` endpoint provides the transaction status.
4. **Refund a payment**: The `Handle Refunds` endpoint processes the refund.

### Security Measures

1. **Data Encryption**: All sensitive data is encrypted using AES-256.
2. **Authentication**: JWT-based authentication is used.
3. **Authorization**: Role-based access control (RBAC) is implemented.

## Implementation

### Technologies Used

- **Node.js**: Backend framework
- **MongoDB**: Database
- **JWT**: Authentication
- **Swagger**: API documentation

### Setting Up the Project

1. **Clone the repository**:
   ```sh
   git clone https://github.com/CodeWithRitik01/payment_gateway.git
   cd payment_gateway

Deployed on AWS = "http://51.20.12.112/"
