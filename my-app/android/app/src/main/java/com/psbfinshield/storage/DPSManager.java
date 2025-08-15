package com.lamisha.securebanking;

import android.content.Context;
import android.os.UserManager;
import android.os.Environment;
import java.io.File;
import java.nio.file.Files;

public class DPSManager {
    public static String getEncryptedToken(Context context, String accountNumber) {
        File dpsFile = new File(context.createDeviceProtectedStorageContext()
                .getFilesDir(), accountNumber + "_token.enc");

        try {
            byte[] data = Files.readAllBytes(dpsFile.toPath());
            return new String(data);
        } catch (Exception e) {
            return null;
        }
    }
}
