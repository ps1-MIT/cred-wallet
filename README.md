# Cred Wallet

[Verifiable Credentials Wallet](https://www.w3.org/TR/vc-data-model/) for [Digital Credentials Consortium](https://digitalcredentials.mit.edu/).

[Install](#install)
* [Install React Native](#install-react-native)
* [Install cred-wallet](#install-cred-wallet)
  * [Solidarity Errors](#solidarity-errors)

[Run the emulator](#run-the-emulator)
  * [Pod errors](#pod-errors)
  * [Emulator gotchas](#emulator-gotchas)

[Reactotron](#reactotron)

[Project Structure Overview](#project-structure-overview)

[Sample VC](#sample-vc)

[Related Wallet Projects](#related-wallet-projects)

## Install

### Install React Native

Follow the [react-native instructions](http://reactnative.dev/docs/environment-setup) for setting up your development environment -- specifically, the ‘React Native CLI Quickstart’ version of the instructions.

Follow that through until just before the ‘Creating a New Application’ section.  We don't need to create a new application - this repo *is* a react native application. 

### Install cred-wallet

Clone code from repo to your machine:

`git clone git@gitlab.com:digitalcredentials/cred-wallet.git`

Install node packges:

```
cd cred-wallet
npm install
```

#### Solidarity Errors

You may get errors like:

```
✖ node: you have '12.0.0', but the project requires '14.0.0'
✖ npm: you have '6.11.3', but the project requires '6.14.4'
✖ yarn: you have '1.19.2', but the project requires '1.22.4'

Solidarity checks failed.
```

You can change your installed versions to match those listed in the errors (which are versions defined in the .solidarity file.)

Or rerun solidarity (from https://github.com/infinitered/solidarity-react-native):

```
npm i -g solidarity-react-native
# or
yarn global add solidarity-react-native

# and in your react native project run:
solidarity snapshot
npm install
```

### Run the emulator
```
npx react-native run-ios
```

The emulator should *eventually* open up.

A little bit later the icon for the cred-wallet app itself should appear in the emulator (you may have to skip through screens to see the icon).

Open up the app!

#### Pod errors

If you get errors related to XCode and your pod file, you may also have to update your Podfile:

```
rm Podfile.lock
pod deintegrate && pod install
```

Uninstalling and reinstalling cocoapods might also help:

```
$ gem uninstall cocoapods
$ gem install cocoapods
```
 
#### Emulator Gotchas

##### Scrolling

To scroll in the iOS emulator with a trackpad, click, hold and swipe with same finger.  Double or triple finger swiping does NOT work.

## Reactotron

I found [this app](https://github.com/infinitered/reactotron) very helpful for inspecting the running react-native app.  Reactotron is a native app that you start up before running the emulator.  It shows current state, console output, etc.

## Project Structure

This react native project was kickstarted using boilerplate from:

[Ignite](https://github.com/infinitered/ignite)

Includes:

- React Native
- React Navigation
- MobX State Tree
- TypeScript
- And more!

NOTE: the ignite CLI generator has already been run, and this repository is the result.  No need to do anything else with ignite, although the ignite CLI can be used to generate new screens if you like.

The Ignite Bowser boilerplate project's structure looks similar to this:

```
ignite-project
├── app
│   ├── components
│   ├── i18n
│   ├── utils
│   ├── models
│   ├── navigation
│   ├── screens
│   ├── services
│   ├── theme
│   ├── app.tsx
├── storybook
│   ├── views
│   ├── index.ts
│   ├── storybook-registry.ts
│   ├── storybook.ts
├── test
│   ├── __snapshots__
│   ├── storyshots.test.ts.snap
│   ├── mock-i18n.ts
│   ├── mock-reactotron.ts
│   ├── setup.ts
│   ├── storyshots.test.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── ignite
│   ├── ignite.json
│   └── plugins
├── index.js
├── ios
│   ├── IgniteProject
│   ├── IgniteProject-tvOS
│   ├── IgniteProject-tvOSTests
│   ├── IgniteProject.xcodeproj
│   └── IgniteProjectTests
├── .env
└── package.json

```

### ./app directory

Included in an Ignite boilerplate project is the `app` directory. This is a directory you would normally have to create when using vanilla React Native.

The inside of the src directory looks similar to the following:

```
app
│── components
│── i18n
├── models
├── navigation
├── screens
├── services
├── theme
├── utils
└── app.tsx
```

**components**
This is where your React components will live. Each component will have a directory containing the `.tsx` file, along with a story file, and optionally `.presets`, and `.props` files for larger components. The app will come with some commonly used components like Button.

**i18n**
This is where your translations will live if you are using `react-native-i18n`.

**models**
This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**navigation**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application. This is also where you will specify whether you want to run the app in storybook mode.

### ./ignite directory

The `ignite` directory stores all things Ignite, including CLI and boilerplate items. Here you will find generators, plugins and examples to help you get started with React Native.

### ./storybook directory

This is where your stories will be registered and where the Storybook configs will live

### ./test directory

This directory will hold your Jest configs and mocks, as well as your [storyshots](https://github.com/storybooks/storybook/tree/master/addons/storyshots) test file. This is a file that contains the snapshots of all your component storybooks.

## Running Storybook

From the command line in your generated app's root directory, enter `yarn run storybook`
This starts up the storybook server.

In `app/app.tsx`, change `SHOW_STORYBOOK` to `true` and reload the app.

For Visual Studio Code users, there is a handy extension that makes it easy to load Storybook use cases into a running emulator via tapping on items in the editor sidebar. Install the `React Native Storybook` extension by `Orta`, hit `cmd + shift + P` and select "Reconnect Storybook to VSCode". Expand the STORYBOOK section in the sidebar to see all use cases for components that have `.story.tsx` files in their directories.

## Sample VC

A VC that worked with the app at some point.  Note that it has two base64 images in it, one for the isuuer, one for the credential.

https://gitlab.com/jc.chartrand/vctest/-/raw/master/vc-test.json


## Related Wallet Projects
- Streetcred: https://streetcred.id/2020/02/24/launch/
- ConnectMe (Evernym): https://www.evernym.com/blog/connect-me-sovrin-digital-wallet/
- Uport Serto: https://ecosystems.uport.me/
- MySudo (Anonyome Labs): https://mysudo.com/
- Jolocom: https://jolocom.io/
- TYKN:https://tykn.tech/
