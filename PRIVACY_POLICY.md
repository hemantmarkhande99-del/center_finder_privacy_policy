# Privacy Policy — Center Finder

**Effective:** 11 October 2026  
**Last updated:** 11 October 2026  
**Developer:** My Workshopy  
**App:** Center Finder  
**Package:** `com.satnamapps.shapecenterfinder`  
**Support:** hemantmarkhande590@gmail.com  

The hosted page is `index.html`. This file is the same policy in Markdown.

## 1. Overview

Center Finder is an Android tool. Point the camera at a part, a hole, or a group of similar items. The app outlines the largest shape and marks its center, or counts items in an area you choose.

My Workshopy publishes the app. This policy covers package `com.satnamapps.shapecenterfinder`, version 1.0 and later versions that keep the same data practices.

**Short version.** The camera is required. Frames are processed on the device and then discarded. There is no account, no advertising, and no sale of personal information.

## 2. Who we are

- App name: Center Finder
- Developer: My Workshopy
- Package: `com.satnamapps.shapecenterfinder`
- Support: hemantmarkhande590@gmail.com

## 3. What the app does

- **Center Finder.** A live camera overlay finds the largest object, draws its outline, names a rough shape, and marks the geometric center.
- **Object Counter.** You capture the current camera view in the app, optionally drag a box, and the app counts similar items. The picture stays in memory for that session.

If camera permission is denied, the app cannot run the tool.

## 4. Information we process

Google Play treats data as collected when it is sent off the device. Center Finder does not send the camera image or any account off the device.

| Data | What happens | Leaves the phone? |
|------|----------------|-------------------|
| Live camera frames | Used to draw the outline and center. Held only while the screen is analyzing. | No |
| Count snapshot | A bitmap of the current view, kept in app memory. Not written to the gallery. | No |
| Name, email, phone, account | No sign-in and no request for these. | Not collected |
| Location | Not requested. | Not collected |
| Contacts, SMS, microphone, files | Not requested. | Not collected |
| Advertising ID | No ads SDK. | Not collected |
| Crash or analytics reports | No Firebase Analytics or Crashlytics. Device logs are not sent to us. | Not collected by us |

## 5. Camera and on-device vision

- Center finding analyzes the latest frame on the device with OpenCV.
- Counting can keep one snapshot in memory. Crops are used only to compare items, then released.
- Appearance matching uses MediaPipe Tasks Vision and `mobilenet_v3_small.tflite` packaged inside the app. The photo is not sent to a model API.
- The camera is not used in the background.

## 6. Permissions

| Permission | Why it is in the app |
|------------|----------------------|
| `CAMERA` | Declared by Center Finder. Required for the core tool. |
| `INTERNET` | Merged from Google Android Data Transport via MediaPipe. Not used to upload photos, counts, or personal information. The app has no server. |
| `ACCESS_NETWORK_STATE` | Merged from the same library. Not used to sync an account. |

No photo-library, location, microphone, contacts, SMS, or advertising-ID permission.

Android backup is at the platform default. The app does not write photos, counts, or account records, so there is no personal content of that kind for backup to copy.

## 7. What we do not do

- Sell personal information.
- Share camera images with advertisers or analytics companies.
- Show third-party ads or use the advertising ID.
- Offer in-app purchases in this version.
- Create a user profile or a public upload feed.

## 8. Libraries on the device

CameraX, OpenCV, MediaPipe Tasks Vision with the bundled MobileNet model, and Android Jetpack (Compose and navigation). Firebase, Google Sign-In, AdMob, and Play Billing are not included.

## 9. Retention and deletion

Frames and the count snapshot stay in memory for the session. There is no account and no server copy.

Force-stop the app, clear its storage in Android Settings, or uninstall it to remove local app data.

Email hemantmarkhande590@gmail.com with the subject “Center Finder data deletion” if you want a written confirmation that no account or photo is held. The hosted policy URL with `#retention` is the public deletion link.

## 10. Children

Center Finder is a general workshop tool. It is not directed at children under 13. It has no social features, chat, or profiles.

## 11. Security

Camera images are not transmitted to My Workshopy. They stay in the Android app sandbox. Install the app from Google Play or another source you trust. This policy describes the official build, not a modified copy.

## 12. Changes

If data practices change, this page will be updated, and the “Last updated” date will change, before that version is offered on Google Play.

Terms: `terms.html`. Governing law for the terms: India.

## 13. Google Play Data safety

| Play question | Answer |
|---------------|--------|
| Collect or share any required user data types? | No |
| Photos and videos | Not collected. Do not tick Photos only because the camera opens. |
| Personal info, location, financial, health, messages, audio, files, contacts, calendar | Not collected |
| App activity, web browsing, crash logs, diagnostics | Not collected |
| Device or other IDs, including Advertising ID | Not collected |
| Data shared | No |
| Ads | No |
| Account | No |

Camera declaration text:

> Center Finder uses the camera as its core feature to mark the center of a shape and to count objects. Frames and a temporary count snapshot are processed on the device with OpenCV and an on-device model. Images are not saved to the gallery, not uploaded, and not used for advertising. The app does not read the user’s photo library.

## 14. Contact

hemantmarkhande590@gmail.com  
My Workshopy · Center Finder
