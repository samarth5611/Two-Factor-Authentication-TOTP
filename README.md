# Two Factor Authentication

Two Factor authentication is referred to by multiple names(e.g., multi-factor authentication, 2-step verification), but we’re going to stick with 2FA. Two-factor authentication (or 2FA, for short) strengthens login security by requiring a second piece of information — a second factor beyond your password. The second piece of information is usually a temporary code delivered by a device in your possession, such as your phone.

## Why you should use 2FA ?

When large-scale password breaches happen, personal info gets leaked.
Email accounts generally give attackers the most value, because through this multiple web accounts can be recovered by hackers.

That's why (email/username + password) is not the best method to have, adding one additional layer is necessary.

## What is two factor authentication

Two-factor authentication (or multi-factor authentication) is just an extra layer of security for a user’s account. That means that, after enabling two-factor authentication, the user has to go through one more step to log in successfully.

<a href="https://imgur.com/474aSvp"><img src="https://i.imgur.com/474aSvp.png" title="source: imgur.com" /></a>
Currently, there are two widely used methods to get that one time password:

- SMS based
- TOTP based

There are multiple issues of SMS based over TOTP like waiting for the SMS on every login attempt, security issues, and so on.
The TOTP-based method is becoming popular because of its advantages over the SMS-based method.

## How the TOTP-based method works ?

- User adds the credentials like username & password as a part of the first Authentication.
- Backend server creates a secret key for that particular user using any values, like Username.
- Server then shares that secret key with the user’s phone application in the form of a QR code or something which is mostly scanned by some Applications like Google authenticator.
- User's phone application generated numerical OTP for some interval of time in the cycle.
- This OTP is used to authenticate users for a second time.

## What is TOTP ?

TOTP stands for “Time-Based One-Time Password”. This was published as [RFC6238](https://datatracker.ietf.org/doc/html/rfc6238) by IETF.

A TOTP uses the HOTP algorithm to obtain the one time password. The only difference is that it uses “Time” in the place of “counter,”
Also, to avoid the problem of different time zones of the server and phone, we can use a [Unix timestamp](https://en.wikipedia.org/wiki/Unix_time), which is independent of time zones.

However the Unix time is defined in seconds, so it changes every second. That means the generated password will change every second which is not good. Instead, we need to add a significant interval before changing the password. For example, the Google Authenticator App changes the code every 30 seconds.

## About Me

I'm Samartha,an undergraduate student studying Computer Science at IIIT, Gwalior with an Active interest in Competitive Programming and building Web Apps(MERN stack). Do checkout my portfolio and connect with me on LinkedIn.

### Connect with me :

[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:samarthajadhao5611@gmail.com)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samarth5611/)
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://samartha5611.github.io/)
x
