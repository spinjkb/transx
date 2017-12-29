package com.eureka;


// import com.lwansbrough.RCTCamera.*;
//import com.lwansbrough.RCTCamera.RCTCameraPackage;

import android.support.annotation.Nullable;

import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;


import com.lwansbrough.RCTCamera.*;
import com.zmxv.RNSound.RNSoundPackage;
import com.reactnativecomponent.amaplocation.RCTAMapLocationPackage; 
import com.ocetnik.timer.BackgroundTimerPackage;



// node_modules/react-native-background-timer/android/src/main/java/com/ocetnik/timer/BackgroundTimerPackage.java





// import java.util.List;
import java.util.*;

public class MainApplication extends NavigationApplication {
    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        // return  new RCTCameraPackage();


        List<ReactPackage> list = new ArrayList<ReactPackage>(){
            {
                   add(new RCTCameraPackage());
                   add(new RNSoundPackage());
                   add(new RCTAMapLocationPackage());
                   add(new BackgroundTimerPackage());


            }
    };
       
        return list;
      //     return null;

    }



      








}
