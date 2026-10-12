# Center Finder — Privacy Policy package

Static site for **Google Play Console**. Scanned from the Android project open in Android Studio on 11 October 2026.

**App:** Center Finder  
**Package:** `com.satnamapps.shapecenterfinder`  
**Version:** 1.0 (`versionCode` 1)  
**Project:** `/Users/hemant/Center_Finder`  
**Developer:** My Workshopy  
**Support:** hemantmarkhande590@gmail.com  

## Files

| File | Use |
|------|-----|
| `index.html` | Host this URL in Play Console → App content → Privacy policy |
| `terms.html` | Terms & Conditions |
| `styles.css` | Dark workshop theme |
| `script.js` | Mobile nav, table labels, contents highlight |
| `PRIVACY_POLICY.md` | Same policy in Markdown |
| `README.md` | This file, including the Data safety answers |

## What the scan found

- Only permission the app itself declares is `CAMERA`. Camera hardware is required.
- No account, Firebase, Analytics, Crashlytics, AdMob, or Play Billing.
- Center finding uses CameraX + OpenCV on the live frame. Frames are not saved.
- Object counting keeps one bitmap in memory. It is not written to the gallery and not uploaded.
- Similar-object matching uses MediaPipe Tasks Vision and the bundled `mobilenet_v3_small.tflite` model. Inference is on device.
- Merged manifest also contains `INTERNET` and `ACCESS_NETWORK_STATE` from `com.google.android.datatransport` (pulled in with MediaPipe). App code does not upload user content.
- No photo-library, location, microphone, contacts, or advertising-ID permission.

## Preview locally

```bash
open "/Users/hemant/Desktop/center finder/index.html"
```

## Host online (required for Play Console)

Play needs a **public HTTPS URL** that loads without login. Host this whole folder. The privacy URL is the `index.html` address.

GitHub Pages on a `username.github.io` site has been flagged by Chrome Safe Browsing on this machine before. Use one of these instead.

### Netlify Drop

1. Open [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag this folder (`center finder`) onto the page
3. Copy the `https://….netlify.app` URL
4. Paste it in Play Console → App content → Privacy policy

### Firebase Hosting

Use any Firebase project your Play account can manage. Public directory = this folder. Enforce HTTPS.

If Play asks for a data-deletion URL, use the same page with `#retention`.

## Play Console answers

### Privacy policy

Paste the hosted HTTPS URL. Store listing name: **Center Finder**. Contact email: **hemantmarkhande590@gmail.com**.

### Data safety

| Question | Answer |
|----------|--------|
| Collect or share any required user data types? | **No** |
| Photos and videos | Do **not** tick. Camera stays on device. |
| Personal info, location, financial, health, messages, audio, files, contacts, calendar | Not collected |
| App activity, web browsing, crash logs, diagnostics | Not collected |
| Device or other IDs / Advertising ID | Not collected |
| Data shared | No |
| Ads | **No**, the app does not contain ads |
| Account | No account, so no account-deletion form |

“Collected” means sent off the device. On-device processing is not collection. Do not declare Photos only because the camera opens. The policy and the form must say the same thing.

### Camera / photo permission declaration

> Center Finder uses the camera as its core feature to mark the center of a shape and to count objects. Frames and a temporary count snapshot are processed on the device with OpenCV and an on-device model. Images are not saved to the gallery, not uploaded, and not used for advertising. The app does not read the user’s photo library.

### Other app-content forms

- Target audience: not directed at children under 13. No social features.
- News, COVID-19 contact tracing, government, financial features, health: No.
- User-generated content shared publicly: No.

## Publishing note (separate from this site)

The release build in `app/build.gradle.kts` still uses the **debug** signing config. Play Console rejects an app signed with the debug key. Create an upload keystore and point `release` at it before you upload the AAB.

## Open in VS Code

This folder is the one to edit:

```bash
code "/Users/hemant/Desktop/center finder"
```
