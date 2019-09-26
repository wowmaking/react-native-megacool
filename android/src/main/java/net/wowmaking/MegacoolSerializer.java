package net.wowmaking;

import android.net.Uri;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import co.megacool.megacool.GifColorTable;
import co.megacool.megacool.Megacool;
import co.megacool.megacool.Megacool$CaptureMethod;
import co.megacool.megacool.MegacoolConfig;
import co.megacool.megacool.OverflowStrategy;
import co.megacool.megacool.RecordingConfig;
import co.megacool.megacool.Share;
import co.megacool.megacool.ShareConfig;
import co.megacool.megacool.SharingStrategy;

class MegacoolSerializer {
    private static final String KEY_BASE_URL = "baseUrl";
    private static final String KEY_RECORDING_ID = "recordingId";
    private static final String KEY_MESSAGE = "message";
    private static final String KEY_FALLBACK_IMAGE_URL = "fallbackImageUrl";
    private static final String KEY_URL = "url";
    private static final String KEY_DATA = "data";
    private static final String KEY_STRATEGY = "strategy";
    private static final String KEY_MODAL_TITLE = "modalTitle";
    private static final String KEY_OVERFLOW_STRATEGY = "overflowStrategy";
    private static final String KEY_MAX_FRAMES = "maxFrames";
    private static final String KEY_FRAME_RATE = "frameRate";
    private static final String KEY_PEAK_LOCATION = "peakLocation";
    private static final String KEY_PLAYBACK_FRAME_RATE = "playbackFrameRate";
    private static final String KEY_LAST_FRAME_DELAY = "lastFrameDelay";
    private static final String KEY_LAST_FRAME_OVERLAY_URL = "lastFrameOverlayUrl";
    private static final String KEY_STATE = "state";
    private static final String KEY_CREATED_AT = "createdAt";
    private static final String KEY_UPDATED_AT = "updatedAt";
    private static final String STRATEGY_MEDIA = "media";
    private static final String STRATEGY_LINK = "link";
    private static final String OVERFLOW_STRATEGY_LATEST = "latest";
    private static final String OVERFLOW_STRATEGY_TIMELINE = "timeline";
    private static final String OVERFLOW_STRATEGY_HIGHLIGHT = "highlight";
    private static final String CAPTURE_METHOD_VIEW = "View";
    private static final String CAPTURE_METHOD_OPENGLES2 = "OpenGLES2";
    private static final String CAPTURE_METHOD_OPENGLES3 = "OpenGLES3";
    private static final String GIF_COLOR_TABLE_DYNAMIC = "Dynamic";
    private static final String GIF_COLOR_TABLE_FIXED = "Fixed";
    private static final String GIF_COLOR_TABLE_ANALYZE_FIRST = "AnalyzeFirst";

    static MegacoolConfig readableMapToMegacoolConfig(ReadableMap readableMap) {
        if (readableMap == null) {
            return null;
        }
        final MegacoolConfig config  = new MegacoolConfig();

        if (readableMap.hasKey(KEY_BASE_URL)) {
            config.baseUrl(Uri.parse(readableMap.getString(KEY_BASE_URL)));
        }

        return config;
    }

    static ShareConfig readableMapToShareConfig(ReadableMap readableMap) {
        if (readableMap == null) {
            return null;
        }
        final ShareConfig config  = new ShareConfig();

        if (readableMap.hasKey(KEY_RECORDING_ID)) {
            config.recordingId(readableMap.getString(KEY_RECORDING_ID));
        }

        if (readableMap.hasKey(KEY_MESSAGE)) {
            config.message(readableMap.getString(KEY_MESSAGE));
        }

        if (readableMap.hasKey(KEY_FALLBACK_IMAGE_URL)) {
            config.fallbackImageAsset(readableMap.getString(KEY_FALLBACK_IMAGE_URL));
        }

        if (readableMap.hasKey(KEY_URL)) {
            config.url(Uri.parse(readableMap.getString(KEY_URL)));
        }

        if (readableMap.hasKey(KEY_DATA)) {
            final ReadableMap dataReadableMap = readableMap.getMap(KEY_DATA);
            ReadableMapKeySetIterator iterator = dataReadableMap.keySetIterator();

            final Map<String, String> dataMap = new HashMap<>();

            while (iterator.hasNextKey()) {
                String key = iterator.nextKey();
                dataMap.put(key, dataReadableMap.getString(key));
            }

            config.data(dataMap);
        }

        if (readableMap.hasKey(KEY_STRATEGY)) {
            switch (readableMap.getString(KEY_STRATEGY)) {
                case STRATEGY_LINK:
                    config.strategy(SharingStrategy.LINK);
                    break;
                case STRATEGY_MEDIA:
                    config.strategy(SharingStrategy.MEDIA);
                    break;
            }
        }

        if (readableMap.hasKey(KEY_MODAL_TITLE)) {
            config.modalTitle(readableMap.getString(KEY_MODAL_TITLE));
        }

        return config;
    }

    static RecordingConfig readableMapToRecordingConfig(ReadableMap readableMap) {
        if (readableMap == null) {
            return null;
        }
        final RecordingConfig config  = new RecordingConfig();

        if (readableMap.hasKey(KEY_OVERFLOW_STRATEGY)) {
            switch (readableMap.getString(KEY_OVERFLOW_STRATEGY)) {
                case OVERFLOW_STRATEGY_LATEST:
                    config.overflowStrategy(OverflowStrategy.LATEST);
                    break;
                case OVERFLOW_STRATEGY_TIMELINE:
                    config.overflowStrategy(OverflowStrategy.TIMELAPSE);
                    break;
                case OVERFLOW_STRATEGY_HIGHLIGHT:
                    config.overflowStrategy(OverflowStrategy.HIGHLIGHT);
                    break;
            }
        }

        if (readableMap.hasKey(KEY_RECORDING_ID)) {
            config.id(readableMap.getString(KEY_RECORDING_ID));
        }

        if (readableMap.hasKey(KEY_MAX_FRAMES)) {
            config.maxFrames(readableMap.getInt(KEY_MAX_FRAMES));
        }

        if (readableMap.hasKey(KEY_FRAME_RATE)) {
            config.frameRate(readableMap.getInt(KEY_FRAME_RATE));
        }

        if (readableMap.hasKey(KEY_PLAYBACK_FRAME_RATE)) {
            config.playbackFrameRate(readableMap.getInt(KEY_PLAYBACK_FRAME_RATE));
        }

        if (readableMap.hasKey(KEY_PEAK_LOCATION)) {
            config.peakLocation(readableMap.getDouble(KEY_PEAK_LOCATION));
        }

        if (readableMap.hasKey(KEY_LAST_FRAME_DELAY)) {
            config.lastFrameDelay(readableMap.getInt(KEY_LAST_FRAME_DELAY));
        }

        if (readableMap.hasKey(KEY_LAST_FRAME_OVERLAY_URL)) {
            config.lastFrameOverlayAsset(readableMap.getString(KEY_LAST_FRAME_OVERLAY_URL));
        }

        return config;
    }

    static Megacool$CaptureMethod stringToCaptureMethod(String string) {
        switch (string) {
            case CAPTURE_METHOD_VIEW:
                return Megacool$CaptureMethod.VIEW;
            case CAPTURE_METHOD_OPENGLES2:
                return Megacool$CaptureMethod.OPENGLES2;
            case CAPTURE_METHOD_OPENGLES3:
                return Megacool$CaptureMethod.OPENGLES3;
        }

        return null;
    }


    static GifColorTable stringToGIFColorTable(String string) {
        switch (string) {
            case GIF_COLOR_TABLE_FIXED:
                return GifColorTable.FIXED;
            case GIF_COLOR_TABLE_DYNAMIC:
                return GifColorTable.DYNAMIC;
        }

        return null;
    }

    static WritableArray sharesToMap(List<Share> shares) {
        WritableArray array = Arguments.createArray();

        Iterator<Share> iterator = shares.iterator();

        while (iterator.hasNext()) {
            array.pushMap(MegacoolSerializer.shareToMap(iterator.next()));
        }

        return array;
    }

    static WritableMap shareToMap(Share share) {
        WritableMap map = Arguments.createMap();
        map.putString(KEY_STATE, share.getState().toString());
        map.putString(KEY_CREATED_AT, share.getCreatedAt().toString());
        map.putString(KEY_UPDATED_AT, share.getUpdatedAt().toString());
        map.putString(KEY_DATA, share.getData().toString());
        map.putString(KEY_URL, share.getUrl().toString());
        return map;
    }

}
