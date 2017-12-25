rm -rf ./android/app/src/main/java


mkdir -p ./android/app/src/main/java/com/MyWebsite/MyAppName
    packageName="com.MyWebsite.MyAppName"
    sed -i '' -e "s/.*package.*/package "$packageName";/" ./android/app/src/main/javaFiles/Main2Activity.java
    sed -i '' -e "s/.*package.*/package "$packageName";/" ./android/app/src/main/javaFiles/MainActivity.java
    sed -i '' -e "s/.*package.*/package "$packageName";/" ./android/app/src/main/javaFiles/MainApplication.java
    sed -i '' -e "s/.*package=\".*/    package=\""$packageName"\"/" ./android/app/src/main/AndroidManifest.xml
    sed -i '' -e "s/.*package = '.*/  package = '"$packageName"',/" ./android/app/BUCK
    sed -i '' -e "s/.*applicationId.*/    applicationId \""$packageName"\"/" ./android/app/build.gradle

    cp -R ./android/app/src/main/javaFiles/ ./android/app/src/main/java/com/MyWebsite/MyAppName