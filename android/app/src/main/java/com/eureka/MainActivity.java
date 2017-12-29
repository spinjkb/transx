package com.eureka;

import com.reactnativenavigation.controllers.SplashActivity;

import cn.jpush.reactnativejpush.JPushPackage;

import android.os.Bundle;

import cn.jpush.android.api.JPushInterface;


public class MainActivity extends SplashActivity {

		    @Override
		    protected void onCreate(Bundle savedInstanceState) {
		        super.onCreate(savedInstanceState);
		        JPushInterface.init(this);
		    }

		    @Override
		    protected void onPause() {
		        super.onPause();
		        JPushInterface.onPause(this);
		    }

		    @Override
		    protected void onResume() {
		        super.onResume();
		        JPushInterface.onResume(this);
		    }


}
