echo ====  deploy prod shell script ======
cd android
./gradlew assembleRelease
cd app/build/outputs/apk/release
pbcopy < app-release.apk

echo we are currently at
pwd
echo =====

curl
-F “status=2”
-F “notify=1”
-F “ipa=@APK FULL PATH(android/build/outputs/apk/app-release.apk”
-H “X-HockeyAppToken: $HOCKEYAPP_TOKEN”
https://rink.hockeyapp.net/api/2/apps/$firstAppId/app_versions/upload7


echo ==== deploy prod shell script ======
