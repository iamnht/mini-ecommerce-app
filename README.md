# mini-ecommerce-app
A simple mini e-commerce mobile application built with React Native + Expo, showcasing product listings, detail views, and a basic cart functionality.

**1. How to Run the App**<br />
- git clone https://github.com/iamnht/mini-ecommerce-app.git<br />
- cd mini-ecommerce-app<br />

**2. Install Dependencies**<br />
=> npm install 

**3. Run the App**<br />
=> npx expo start

**4. Run on iOS or Android** <br />
	•	On Android: Press a or scan QR code with Expo Go app on Android.<br />
	•	On iOS: Press i or scan QR code with Expo Go app on iPhone.<br />
[You need the Expo Go app installed on your mobile device to run the app.]
<br /><br />
**5. Testing API Calls & Add to Cart**<br />
	•	Products are fetched from a mock API (/services/apiService.js)<br />
	•	The Cart screen uses Redux to manage state<br /><br />
	•	To test:<br />
	1.	Open the Home screen<br />
	2.	Tap on a product to view details<br />
	3.	Press “Add to Cart” to add the item or press the cart-button of in the product list<br />
	4.	Go to the Cart screen to see all added items<br />
<br /><br />
**6. Tech Stack & Tools Used**
<br />
This project is built using the following technologies:<br />
	•	JavaScript – Core language for building the app logic<br />
	•	React Native + Expo – Cross-platform framework for mobile app development<br />
	•	Stylesheet (React Native built-in) – Used for component styling<br />
	•	Redux – Global state management for features like cart and product list<br />
	•	React Navigation – For managing screen navigation<br />
	•	Expo CLI – Simplifies development and testing on iOS & Android<br />
	•	@expo/vector-icons – Icon library used throughout the app<br />
	•	Axios / Fetch – For making API requests<br />
	•	React Native Safe Area Context – To handle safe areas on devices with notches<br />
	•	Mock API Service – Simulates product fetching<br />
 <br /><br />
**7. Project Structure**<br />
mini-ecommerce-app/<br />
├── assets/                # Images, icons, fonts, colors<br />
├── components/            # Reusable UI components (e.g., ProductItem, Header)<br />
├── redux/                 # Redux store, actions, reducers<br />
├── screens/               # App screens: Home, ProductDetail, Cart<br />
├── services/              # API handling and abstraction layer<br />
├── App.js                 # App entry point with navigation<br />
├── app.json               # Expo configuration<br />
<br /><br />
**8.App Demo**<br />
Demo video includes:<br />
	•	Installing dependencies<br />
	•	Running the app on Expo (Android and iOS)<br />
	•	Navigating between screens<br />
	•	Adding items to cart<br />
 <br />
Link to Screen recordings: https://drive.google.com/drive/folders/1M2rhvG3j8yktTvcPuCyFv3YADawTetag?usp=drive_link
<br /><br />
**9.Notes or Limitations**<br /><br />
	•	No backend authentication or user login implemented (yet)<br />
	•	No real checkout or payment gateway integration<br />
	•	UI is optimized for mobile only (not tested on tablets)<br />
	•	With more time, I would:<br />
	1. Implement Firebase authentication<br />
	2. Improve product filtering and sorting<br />
	3. Add favourite-list functionality<br />
