File1:


android/settings.gradle 


include ':react-native-smart-amap-location'
project(':react-native-smart-amap-location').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-smart-amap-location/android')



---------------------------------

File2:


android/app/build.gradle


dependencies {
    ...
    // From node_modules
    compile project(':react-native-smart-amap-location')
}







-------------------------------
File3:


android/app/src/main/java/com/eureka/MainApplication.java


...
import com.reactnativecomponent.amaplocation.RCTAMapLocationPackage;    //import package
...
/**
 * A list of packages used by the app. If the app uses additional views
 * or modules besides the default ones, add more packages here.
 */
@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new RCTAMapLocationPackage()  //register Module
    );
}
...


-----------------------------------------
File4:

增加相应的权限：

android/app/src/main/AndroidManifest.xml

