package net.wowmaking;

import android.support.annotation.NonNull;
import android.util.Log;
import android.widget.FrameLayout;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;

import java.util.List;

import co.megacool.megacool.EventListener;
import co.megacool.megacool.Megacool;
import co.megacool.megacool.Megacool$CaptureMethod;
import co.megacool.megacool.Megacool$ShareCallback;
import co.megacool.megacool.MegacoolConfig;
import co.megacool.megacool.ReceivedShareOpenedEvent;
import co.megacool.megacool.SentShareOpenedEvent;
import co.megacool.megacool.Share;

public class MegacoolModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public MegacoolModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "RNMegacool";
    }

    private FrameLayout getRootView() {
        return getCurrentActivity().findViewById(android.R.id.content);
    }

    @ReactMethod
    public void start(String appConfig, ReadableMap configBlock) {
        final MegacoolConfig config = MegacoolSerializer.readableMapToMegacoolConfig(configBlock);
        final String TAG = "MCL";
        config.eventListener(new EventListener() {
            @Override
            public void receivedShareOpened(@NonNull ReceivedShareOpenedEvent event) {
                Log.d(TAG, "Got event: " + event);
                if (event.isFirstSession()) {
                    // This device has received a share and installed the
                    // app for the first time
                    Log.d(TAG, "Installed from a referral from " + event.getSenderUserId());
                }
            }

            @Override
            public void sentShareOpened(@NonNull SentShareOpenedEvent event) {
                Log.d(TAG, "Got event: " + event);
                if (event.isFirstSession()) {
                    // A share sent from this device has been opened, and
                    // the receiver installed the app for the first time
                    Log.d(TAG, event.getReceiverUserId() + " installed the app from our referral");
                }
            }
        });
        Megacool.start(getCurrentActivity(), appConfig, config);
    }

    @ReactMethod
    public void presentShare(ReadableMap shareConfig) {
        Megacool.getInstance().share(
                getCurrentActivity(),
                MegacoolSerializer.readableMapToShareConfig(shareConfig)
        );
    }

    @ReactMethod
    public void presentShareToMessages(ReadableMap shareConfig) {
        Megacool.getInstance().shareToMessages(
                getCurrentActivity(),
                MegacoolSerializer.readableMapToShareConfig(shareConfig)
        );
    }

    @ReactMethod
    public void presentShareToMail(ReadableMap shareConfig) {
        Megacool.getInstance().shareToMail(
                getCurrentActivity(),
                MegacoolSerializer.readableMapToShareConfig(shareConfig)
        );
    }

    @ReactMethod
    public void startRecording(ReadableMap recordingConfig) {
        Megacool.getInstance().startRecording(getRootView());
    }

    @ReactMethod
    public void captureFrame(ReadableMap recordingConfig, boolean forceAdd) {
        int a = 1;

        Megacool.getInstance().captureFrame(
                getRootView(),
                MegacoolSerializer.readableMapToRecordingConfig(recordingConfig),
                forceAdd
        );
    }

    @ReactMethod
    public void stopRecording() {
        Megacool.getInstance().stopRecording();
    }

    @ReactMethod
    public void pauseRecording() {
        Megacool.getInstance().pauseRecording();
    }

    @ReactMethod
    public void shareScreenshot(ReadableMap recordingConfig, ReadableMap shareConfig) {
        Megacool.getInstance().shareScreenshot(
                getCurrentActivity(),
                getRootView(),
                MegacoolSerializer.readableMapToRecordingConfig(recordingConfig),
                MegacoolSerializer.readableMapToShareConfig(shareConfig)
        );
    }

    @ReactMethod
    public void deleteRecording(String recordingId) {
        Megacool.getInstance().deleteRecording(recordingId);
    }

    @ReactMethod
    public void registerScoreChange(int scoreDelta) {
        Megacool.getInstance().registerScoreChange(scoreDelta);
    }

    @ReactMethod
    public void getNumberOfFrames(String recordingId, Promise promise) {
        promise.resolve(Megacool.getInstance().getNumberOfFrames(recordingId));
    }

    @ReactMethod
    public void setCaptureMethod(String captureMethod, double scaleFactor) {
        Megacool$CaptureMethod method = MegacoolSerializer.stringToCaptureMethod(captureMethod);

        if (method == null) {
            return;
        }

        Megacool.getInstance().setCaptureMethod(method, scaleFactor);
    }

    @ReactMethod
    public void getShares(final Promise promise) {

        class ShareCallback implements Megacool$ShareCallback {
            public void shares(final List<Share> shares) {
                promise.resolve(
                        MegacoolSerializer.sharesToMap(shares)
                );
            }
        }

        Megacool.getInstance().getShares(new ShareCallback());
    }

    @ReactMethod
    public void setDefaultShareConfig(ReadableMap shareConfig) {
        Megacool.getInstance().setDefaultShareConfig(
                MegacoolSerializer.readableMapToShareConfig(shareConfig)
        );
    }

    @ReactMethod
    public void setDefaultRecordingConfig(ReadableMap recordingConfig) {
        Megacool.getInstance().setDefaultRecordingConfig(
                MegacoolSerializer.readableMapToRecordingConfig(recordingConfig)
        );
    }

    @ReactMethod
    public void setGifColorTable(String gifColorTable) {
        Megacool.getInstance().setGifColorTable(
                MegacoolSerializer.stringToGIFColorTable(gifColorTable)
        );
    }

    @ReactMethod
    public void setKeepCompletedRecordings(boolean keep) {
        Megacool.getInstance().setKeepCompletedRecordings(keep);
    }

    @ReactMethod
    public void setDebug(boolean enabled) {
        Megacool.setDebug(enabled);
    }

    @ReactMethod
    public void disableFeatures(ReadableArray features) {
        // Not supported on Android
    }

    @ReactMethod
    public void getRecordingScore(String recordingId, Promise promise) {
        promise.resolve(
                Megacool.getInstance().getRecordingScore(recordingId)
        );
    }

    @ReactMethod
    public void getUserId(Promise promise) {
        // Not supported on Android
        promise.resolve("n/a");
    }
}
