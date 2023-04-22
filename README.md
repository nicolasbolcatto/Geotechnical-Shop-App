# Geotechnical Shop App

The Geotechnical Shop App is an eCommerce platform that specializes in selling soil laboratory tests. It offers a wide range of tests, including soil classification, compaction, permeability, and shear strength tests, among others. The app is designed to provide customers with a convenient and secure online shopping experience.

## Features

- User registration and login: The Geotechnical Shop App uses Passport Local as an authentication strategy for user registration and login. Customers can create an account and log in to the platform to browse and purchase products.
- Product catalog: The Geotechnical Shop App offers a wide range of soil laboratory tests, organized by category and searchable by keywords. Each test listing includes a description, image, and price.
- Shopping cart: Customers can check which products they have chosen.
- Profile: Users can see their profile information and change the avatar picture.

## Getting Started

To get started with the Geotechnical Shop App, follow these steps:

1. Make sure you have Node.js installed in your OS
2. Clone the repository: `git clone https://github.com/yourusername/geotechnical-shop-app.git`
3. Install dependencies: `npm install`
4. Configure the environment variables: Create a file called keys.env and update the configuration settings:

   PORT = 8080 by default
   MODE = "FORK" or "CLUSTER" (FORK by default)
   DATABASE = "FILE"
   ADMIN = "TRUE" or "FALSE" (FALSE by default)
   MONGO_DB = MongoDB connection string
   SESSION_PASSWORD
   EMAIL_ADDRESS_SENDER
   EMAIL_PASSWORD_SENDER
   EMAIL_ADMIN
   TWILIO_ACCOUNT
   TWILIO_TOKEN

5. Run the app:
   - In fork mode: `npm run start:fork`
   - In cluster mode: `npm run start:cluster`
6. Open the app in your browser at `http://localhost:3000`

## Dependencies

The Geotechnical Shop App is built with the following dependencies:

- bcrypt (v5.1.0)
- connect-mongo (4.6.0)
- cookie-parser (v1.4.6)
- dotenv (v16.0.3)
- express (4.18.2)
- express-session (v1.17.3)
- hbs (v4.2.0)
- mongoose (v6.8.1)
- multer (v1.4.5-lts.1)
- nodemailer (v6.9.1)
- passport (v0.6.0)
- passport-local (v1.0.0)
- twilio (v4.8.0)
- uuid (v9.0.0)
- winston (v3.8.2)

The following dependencies were used for development:

- assert (v2.0.0)
- axios (v1.3.4)
- chai (v4.3.7)
- mocha (v10.2.0)
- supertest (v6.3.3)

## Contributing

If you would like to contribute to the Geotechnical Shop App, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b my-new-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## License

The Geotechnical Shop App is licensed under the MIT license.

## Support

If you encounter any issues with the Geotechnical Shop App, please contact me at nicobolcatto@gmail.com

## Conclusion

We hope you find the Geotechnical Shop App useful for your soil laboratory testing needs! Please feel free to share your feedback and suggestions with us. We are constantly improving the app and adding new features to make your online shopping experience even better.

For a production version of the Geotechnical Shop App, visit:
