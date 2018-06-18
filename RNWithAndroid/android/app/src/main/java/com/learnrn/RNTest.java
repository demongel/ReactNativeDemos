package com.learnrn;

import android.app.Activity;
import android.content.Intent;
import android.database.Cursor;
import android.net.Uri;
import android.provider.ContactsContract;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

import static android.app.Activity.RESULT_OK;

/**
 * Created by shakespace on 2018/3/15.
 */

public class RNTest extends ReactContextBaseJavaModule {
    private static final String TAG = "RNTest";
    private ReactContext reactContext;

    Promise mPromise;    // 使用promise方式的话，添加此行

    // 创建一个mActivityEventListener
    private ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {
        @SuppressWarnings("deprecation")
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
            super.onActivityResult(activity, requestCode, resultCode, data);
            if (requestCode == 1 && resultCode == RESULT_OK && data != null) {
                Uri uri = data.getData();   // 获取地址
//                CursorLoader loader = new CursorLoader(activity, uri, null, null, null, null);
//                Cursor cursor = loader.loadInBackground();
                Log.e(TAG, uri.toString());
                Cursor cursor = activity.managedQuery(uri, null, null, null, null);

                cursor.moveToFirst();    //
                String msg = getInfo(cursor);
//                sendMsgToRN(msg);     // 发送消息的方式
                // 使用Promise方式
                if(msg!=null){
                    mPromise.resolve(msg);
                }
            }
        }
    };


    public RNTest(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
        reactContext.addActivityEventListener(mActivityEventListener);
    }

    // 发送消息到RN端
    private void sendMsgToRN(String msg) {
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("AndroidToRNMessage", msg);
    }

    private String getInfo(Cursor cursor) {
        String name = "";
        String phone = "";

        //取得联系人姓名
        int nameFieldColumnIndex = cursor.getColumnIndex(ContactsContract.Contacts.DISPLAY_NAME);
        name = cursor.getString(nameFieldColumnIndex);

        // 联系人和电话数据库不在一起  获取字段  拼接查询条件
        int id = cursor.getColumnIndex(ContactsContract.Contacts._ID);
        String contactID = cursor.getString(id);
        String queryString = ContactsContract.CommonDataKinds.Phone.CONTACT_ID + "=" + contactID;
        Uri uri = ContactsContract.CommonDataKinds.Phone.CONTENT_URI;

        Cursor phoneCursor = reactContext.getContentResolver().query(uri, null, queryString, null, null);
        String phoneNumber = ContactsContract.CommonDataKinds.Phone.NUMBER;
        if (phoneCursor != null && phoneCursor.moveToFirst()) {
            phone = phoneCursor.getString(phoneCursor.getColumnIndex(phoneNumber));
        }
        phoneCursor.close();
//        cursor.close();//  使用managedQuery 不用手动关
        String result = "{\"msgType\": \"pickContactResult\",\"name\":\"" + name + "\", \"number\":\"" + phone + "\"}";
        Log.e(TAG, result);
        return result;
    }

    @Override
    public String getName() {
        return "RNTest";    // 返回类名？
    }

    // 自定义一个方法 处理消息
    // 通过注解  表示可以被RN侧调用
    @ReactMethod
    public void handleMsg(String msg, Callback callback) {
        // callback.invoke(msg);     // 回调函数方式
        Toast.makeText(reactContext, msg, Toast.LENGTH_SHORT).show();
        Intent intent = new Intent(reactContext, MyActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        reactContext.startActivity(intent);
    }

    @ReactMethod
    public void pickContact(String msg,Promise promise) {
        this.mPromise = promise;    // 使用Promise方式时添加，在这里初始化
        Intent intent = new Intent(Intent.ACTION_PICK);
        intent.setType(ContactsContract.Contacts.CONTENT_TYPE);
        reactContext.startActivityForResult(intent, 1, null);
    }


}
