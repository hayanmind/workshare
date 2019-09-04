# WorkshareOS
### An open-source React-Native project to share working hours and work status among colleagues.
### How to use:
> Since Apple blocked to open other Expo projects in the Expo application on iOS devices, I will show you how to install Expo and show the application on your smartphone, on an iOS or Android simulator manually.
1. Is is recommended to use the [latest NodeJS version](https://nodejs.org/en/) and to install [watchman](https://facebook.github.io/watchman/docs/install.html) with `brew install watchman`. If you don't have brew, you can install it [here](https://brew.sh).
I use [nvm](https://github.com/nvm-sh/nvm) (node version manager) to easily switch between NodeJS version but it can be stressful to install this.
2. Run `npm install expo-cli --global` to get the command line tool.
3. Download the GitHub repository or clone it:

`cd folder/to/clone-into/`

`git clone https://github.com/hayanmind/workshare.git`

4. Start the project on an iOS or Android simulator or on your smartphone. I would recommend you to run it on your smartphone if you have not worked with a simulator.
Smartphone: 
 - run `cd folder/where/you/put/the/project/` to navigate to the folder
 - run `yarn` or `npm install` to install node modules
 - run `yarn start` or `npm start` to start the project
 
Then, a window in the browser tab should open and you will see a QR code. Now you should download the Expo application on your smartphone.
For [iOS](https://apps.apple.com/app/apple-store/id982107779) and for [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www).
Scan the QR code with your camera and the project will open in the expo application.

Also, you can open the application on a simulator by pressing a for Android or i for iOS in the command line tool or by pressing 'Run on Android device/emulator' or 'Run on iOS simulator' on the Expo windon in your web browser.
Here are guides for setting up the simulators for iOS and Android: [iOS](https://docs.expo.io/versions/v34.0.0/workflow/ios-simulator/)/[Android](https://docs.expo.io/versions/v34.0.0/workflow/android-studio-emulator/).

If you have questions, then contact me or read the official [Expo Docs](https://docs.expo.io/versions/v34.0.0/).

