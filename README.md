# mini-ecommerce-app
A simple mini e-commerce mobile application built with React Native + Expo, showcasing product listings, detail views, and a basic cart functionality.

**1. How to Run the App**
run the command on terminal/amd: git clone https://github.com/iamnht/mini-ecommerce-app.git
cd mini-ecommerce-app

**2. Install Dependencies**
=> npm install 

**3. Run the App**
=> npx expo start

**4. Run on iOS or Android**
	•	On Android: Press a or scan QR code with Expo Go app on Android.
	•	On iOS: Press i or scan QR code with Expo Go app on iPhone.

[You need the Expo Go app installed on your mobile device to run the app.]

**5. Testing API Calls & Add to Cart**
	•	Products are fetched from a mock API (/services/apiService.js)
	•	The Cart screen uses Redux to manage state
	•	To test:
	1.	Open the Home screen
	2.	Tap on a product to view details
	3.	Press “Add to Cart” to add the item or press the cart-button of in the product list
	4.	Go to the Cart screen to see all added items

**6. Project Structure**
mini-ecommerce-app/
├── assets/                # Images, icons, fonts, colors
├── components/            # Reusable UI components (e.g., ProductItem, Header)
├── redux/                 # Redux store, actions, reducers
├── screens/               # App screens: Home, ProductDetail, Cart
├── services/              # API handling and abstraction layer
├── App.js                 # App entry point with navigation
├── app.json               # Expo configuration

**7.App Demo**
Demo video includes:
	•	Installing dependencies
	•	Running the app on Expo (Android and iOS)
	•	Navigating between screens
	•	Adding items to cart
Link to Screen recordings: https://drive.google.com/drive/folders/1M2rhvG3j8yktTvcPuCyFv3YADawTetag?usp=drive_link

**8.Notes or Limitations**
	•	No backend authentication or user login implemented (yet)
	•	No real checkout or payment gateway integration
	•	UI is optimized for mobile only (not tested on tablets)
	•	With more time, I would:
	•	Implement Firebase authentication
	•	Improve product filtering and sorting
	•	Add favourite-list functionality
