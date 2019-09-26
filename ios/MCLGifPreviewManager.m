#import <React/RCTViewManager.h>
#import <Megacool/Megacool.h>

@interface MCLGifPreviewManager : RCTViewManager
@end

@implementation MCLGifPreviewManager

RCT_EXPORT_MODULE(MCLGifPreview)

- (UIView *)view
{
    MCLPreview *preview = [[Megacool sharedMegacool] getPreview];
    [preview startAnimating];
    return preview;
}

@end
