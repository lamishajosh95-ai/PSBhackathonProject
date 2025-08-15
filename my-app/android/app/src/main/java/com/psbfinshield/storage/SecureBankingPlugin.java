
package com.lamisha.securebanking;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.annotation.Permission;
import com.getcapacitor.PluginMethod;

import org.json.JSONException;
import org.json.JSONObject;

@CapacitorPlugin(name = "SecureBanking")
public class SecureBankingPlugin extends Plugin {

    @PluginMethod
    public void login(PluginCall call) {
        String mobile = call.getString("mobileNumber");
        String account = call.getString("accountNumber");
        String timestamp = call.getString("timestamp");

        String encryptedToken = DPSManager.getEncryptedToken(getContext(), account);
        String finalToken = CryptoUtils.decryptToken(encryptedToken);

        JSONObject payload = new JSONObject();
        try {
            payload.put("mobileNumber", mobile);
            payload.put("accountNumber", account);
            payload.put("timestamp", timestamp);
            payload.put("finalToken", finalToken);
        } catch (JSONException e) {
            call.reject("Payload error");
            return;
        }

        NetworkClient.post("/login", payload, response -> {
            if (response.optBoolean("success")) {
                call.resolve(response);
            } else {
                call.reject("Login failed");
            }
        });
    }

    @PluginMethod
    public void register(PluginCall call) {
        String mobile = call.getString("mobileNumber");
        String account = call.getString("accountNumber");
        String name = call.getString("name");

        JSONObject payload = new JSONObject();
        try {
            payload.put("mobileNumber", mobile);
            payload.put("accountNumber", account);
            payload.put("name", name);
        } catch (JSONException e) {
            call.reject("Payload error");
            return;
        }

        NetworkClient.post("/register", payload, response -> {
            if (response.optBoolean("success")) {
                call.resolve(response);
            } else {
                call.reject("Registration failed");
            }
        });
    }

    @PluginMethod
    public void pay(PluginCall call) {
        String jwt = call.getString("jwt");
        String toAccount = call.getString("toAccount");
        double amount = call.getDouble("amount");

        JSONObject payload = new JSONObject();
        try {
            payload.put("toAccount", toAccount);
            payload.put("amount", amount);
        } catch (JSONException e) {
            call.reject("Payload error");
            return;
        }

        NetworkClient.authPost("/pay", jwt, payload, response -> {
            if (response.optBoolean("success")) {
                call.resolve(response);
            } else {
                call.reject("Payment failed");
            }
        });
    }
}

