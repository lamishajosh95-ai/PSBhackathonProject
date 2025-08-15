
package com.psbfinshield.storage;
import android.content.Context;
import android.content.SharedPreferences;

public class DeviceProtectedStorageHelper {
    private SharedPreferences prefs;

    public DeviceProtectedStorageHelper(Context context) {
        Context dpsContext = context.createDeviceProtectedStorageContext();
        prefs = dpsContext.getSharedPreferences("secure_prefs", Context.MODE_PRIVATE);
    }

    public String get(String key) {
        return prefs.getString(key, null);
    }

    public void set(String key, String value) {
        prefs.edit().putString(key, value).apply();
    }
}
