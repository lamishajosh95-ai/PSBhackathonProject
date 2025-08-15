
package com.lamisha.securebanking;

import org.json.JSONObject;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Scanner;

public class NetworkClient {
    private static final String BASE_URL = "http://your-backend-ip:3000";

    public interface Callback {
        void onResponse(JSONObject response);
    }

    public static void post(String endpoint, JSONObject payload, Callback cb) {
        try {
            URL url = new URL(BASE_URL + endpoint);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setDoOutput(true);

            OutputStream os = conn.getOutputStream();
            os.write(payload.toString().getBytes());
            os.close();

            Scanner scanner = new Scanner(conn.getInputStream());
            String response = scanner.useDelimiter("\\A").next();
            scanner.close();

            cb.onResponse(new JSONObject(response));
        } catch (Exception e) {
            cb.onResponse(new JSONObject("{\"success\":false}"));
        }
    }

    public static void authPost(String endpoint, String jwt, JSONObject payload, Callback cb) {
        try {
            URL url = new URL(BASE_URL + endpoint);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Cookie", "session=" + jwt);
            conn.setDoOutput(true);

            OutputStream os = conn.getOutputStream();
            os.write(payload.toString().getBytes());
            os.close();

            Scanner scanner = new Scanner(conn.getInputStream());
            String response = scanner.useDelimiter("\\A").next();
            scanner.close();

            cb.onResponse(new JSONObject(response));
        } catch (Exception e) {
            cb.onResponse(new JSONObject("{\"success\":false}"));
        }
    }
}

