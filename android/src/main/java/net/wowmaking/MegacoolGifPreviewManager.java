package net.wowmaking;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import javax.annotation.Nonnull;

import co.megacool.megacool.GifImageView;
import co.megacool.megacool.Megacool;

public class MegacoolGifPreviewManager extends SimpleViewManager<GifImageView> {

    public  static final String REACT_CLASS = "MCLGifPreview";

    @Nonnull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Nonnull
    @Override
    protected GifImageView createViewInstance(@Nonnull ThemedReactContext reactContext) {
        GifImageView gif = Megacool.getInstance().renderPreviewOfGif();
        gif.start();
        return gif;
    }
}
