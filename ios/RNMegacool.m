#import "RNMegacool.h"
#import <Megacool/Megacool.h>

@implementation RNMegacool

RCT_EXPORT_MODULE()

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(start:(NSString *)appConfig
                  configBlock:(NSDictionary *)configBlock)
{
    RCTExecuteOnMainQueue(^{
        [Megacool startWithAppConfig:appConfig andConfigBlock:^(MCLMegacoolConfig * _Nonnull config) {
            config.delegate = self;
            NSURL* baseUrl = [RCTConvert NSURL:configBlock[@"baseUrl"]];
            if (baseUrl) {
                config.baseUrl = baseUrl;
            }
        }];
    });
}

- (void)megacoolReceivedShareOpened:(MCLReceivedShareOpenedEvent *)event {
    NSLog(@"Got event: %@", event);
    if (event.isFirstSession) {
        // This device has received a share and installed the
        // app for the first time
        NSLog(@"Installed from a referral from %@", event.senderUserId);
    }
}
- (void)megacoolSentShareOpened:(MCLSentShareOpenedEvent *)event {
    NSLog(@"Got event: %@", event);
    if (event.isFirstSession) {
        // A share sent from this device has been opened, and
        // the receiver installed the app for the first time
        NSLog(@"%@ installed the app from our referral", event);
    }
}

RCT_EXPORT_METHOD(presentShare:(NSDictionary *)shareConfig)
{
    RCTExecuteOnMainQueue(^{
        [[Megacool sharedMegacool] presentShareWithConfig:^(MCLShareConfig * _Nonnull config) {
            [self setShareConfig:config fromDictionary:shareConfig];
        } inViewController:RCTPresentedViewController()];
    });
}

RCT_EXPORT_METHOD(presentShareToMessages:(NSDictionary *)shareConfig)
{
    RCTExecuteOnMainQueue(^{
        [[Megacool sharedMegacool] presentShareToMessagesWithConfig:^(MCLShareConfig * _Nonnull config) {
            [self setShareConfig:config
                  fromDictionary:shareConfig];
        } inViewController:RCTPresentedViewController()];
    });
}

RCT_EXPORT_METHOD(presentShareToMail:(NSDictionary *)shareConfig)
{
    RCTExecuteOnMainQueue(^{
        [[Megacool sharedMegacool] presentShareToMailWithConfig:^(MCLShareConfig * _Nonnull config) {
            [self setShareConfig:config
                  fromDictionary:shareConfig];
        } inViewController:RCTPresentedViewController()];
    });
}

- (void)setRecordingConfig:(MCLRecordingConfig * _Nonnull)config fromDictionary:(NSDictionary *)recordingConfig {
    
    if (recordingConfig[@"overflowStrategy"] != nil) {
        NSString *overflowStrategy = [RCTConvert NSString:recordingConfig[@"overflowStrategy"]];
        
        if ([overflowStrategy isEqualToString:@"latest"]) {
            config.overflowStrategy = kMCLOverflowStrategyLatest;
        } else if ([overflowStrategy isEqualToString:@"timelapse"]) {
            config.overflowStrategy = kMCLOverflowStrategyTimelapse;
        } else if ([overflowStrategy isEqualToString:@"highlight"]) {
            config.overflowStrategy = kMCLOverflowStrategyHighlight;
        }
    }
    
    if (recordingConfig[@"recordingId"] != nil) {
        config.recordingId = [RCTConvert NSString:recordingConfig[@"recordingId"]];
    }
    
    if (recordingConfig[@"maxFrames"] != nil) {
        config.maxFrames = [RCTConvert int:recordingConfig[@"maxFrames"]];
    }
    
    if (recordingConfig[@"frameRate"] != nil) {
        config.frameRate = [RCTConvert int:recordingConfig[@"frameRate"]];
    }
    
    if (recordingConfig[@"peakLocation"] != nil) {
        config.peakLocation = [RCTConvert double:recordingConfig[@"peakLocation"]];
    }
    
    if (recordingConfig[@"lastFrameDelay"] != nil) {
        config.lastFrameDelay = [RCTConvert int:recordingConfig[@"lastFrameDelay"]];
    }
    
    if (recordingConfig[@"lastFrameOverlayUrl"] != nil) {
        config.lastFrameOverlayUrl = [RCTConvert NSURL:recordingConfig[@"lastFrameOverlayUrl"]];
    }
}

- (void)setShareConfig:(MCLShareConfig * _Nonnull) config
        fromDictionary:(NSDictionary *)shareConfig {
    
    if (shareConfig[@"recordingId"] != nil) {
        config.recordingId = [RCTConvert NSString:shareConfig[@"recordingId"]];
    }
    
    if (shareConfig[@"message"] != nil) {
        config.message = [RCTConvert NSString:shareConfig[@"message"]];
    }
    
    if (shareConfig[@"fallbackImageUrl"] != nil) {
        config.fallbackImageUrl = [RCTConvert NSURL:shareConfig[@"fallbackImageUrl"]];
    }
    
    if (shareConfig[@"url"] != nil) {
        config.url = [RCTConvert NSURL:shareConfig[@"url"]];
    }
    
    if (shareConfig[@"data"] != nil) {
        config.data = [RCTConvert NSDictionary:shareConfig[@"data"]];
    }
    
    if (shareConfig[@"popoverSourceRect"] != nil) {
        config.popoverSourceRect = [RCTConvert CGRect:shareConfig[@"popoverSourceRectpopoverSourceRect"]];
    }
    
    if (shareConfig[@"popoverPermittedArrowDirections"] != nil) {
        NSString *direction = [RCTConvert NSString:shareConfig[@"popoverPermittedArrowDirections"]];
        if ([direction isEqualToString:@"up"]) {
            config.popoverPermittedArrowDirections = UIPopoverArrowDirectionUp;
        } else if ([direction isEqualToString:@"down"]) {
            config.popoverPermittedArrowDirections = UIPopoverArrowDirectionDown;
        } else if ([direction isEqualToString:@"left"]) {
            config.popoverPermittedArrowDirections = UIPopoverArrowDirectionLeft;
        } else if ([direction isEqualToString:@"right"]) {
            config.popoverPermittedArrowDirections = UIPopoverArrowDirectionRight;
        } else if ([direction isEqualToString:@"unknown"]) {
            config.popoverPermittedArrowDirections = UIPopoverArrowDirectionUnknown;
        } else if ([direction isEqualToString:@"any"]) {
            config.popoverPermittedArrowDirections = UIPopoverArrowDirectionAny;
        }
    }
    
    if (shareConfig[@"messengerForceCompose"] != nil) {
        config.messengerForceCompose = [RCTConvert BOOL:shareConfig[@"messengerForceCompose"]];
    }
    
    if (shareConfig[@"strategy"] != nil) {
        NSString *strategy = [RCTConvert NSString:shareConfig[@"strategy"]];
        
        if ([strategy isEqualToString:@"link"]) {
            config.strategy = kMCLSharingStrategyLink;
        } else if ([strategy isEqualToString:@"media"]) {
            config.strategy = kMCLSharingStrategyMedia;
        }
    }
}

- (void)setPreviewConfig:(MCLPreviewConfig * _Nonnull) config
        fromDictionary:(NSDictionary *)previewConfig {
    
    if (previewConfig[@"recordingId"] != nil) {
        config.recordingId = [RCTConvert NSString:previewConfig[@"recordingId"]];
    }
    
    if (previewConfig[@"previewFrame"] != nil) {
        config.previewFrame = [RCTConvert CGRect:previewConfig[@"previewFrame"]];
    }
}

RCT_EXPORT_METHOD(startRecording:(NSDictionary *)recordingConfig)
{
    RCTExecuteOnMainQueue(^{
        UIViewController *rootController = RCTPresentedViewController();
        
        [[Megacool sharedMegacool] startRecording:rootController.view withConfig:^(MCLRecordingConfig * _Nonnull config) {
            
            [self setRecordingConfig:config fromDictionary:recordingConfig];
        }];
    });
}

RCT_EXPORT_METHOD(captureFrame:(NSDictionary *)recordingConfig forceAdd:(BOOL)force)
{
    RCTExecuteOnMainQueue(^{
        UIViewController *rootController = RCTPresentedViewController();
        
        [[Megacool sharedMegacool] captureFrame:rootController.view withConfig:^(MCLRecordingConfig * _Nonnull config) {
            
            [self setRecordingConfig:config fromDictionary:recordingConfig];
        } forceAdd:force];
    });
}

RCT_EXPORT_METHOD(stopRecording)
{
    RCTExecuteOnMainQueue(^{
        [[Megacool sharedMegacool] stopRecording];
    });
}

RCT_EXPORT_METHOD(pauseRecording)
{
    RCTExecuteOnMainQueue(^{
        [[Megacool sharedMegacool] pauseRecording];
    });
}

RCT_EXPORT_METHOD(shareScreenshot:(NSDictionary *)recordingConfig
                  shareConfig:(NSDictionary *)shareConfig)
{
    RCTExecuteOnMainQueue(^{
        UIViewController *rootController = RCTPresentedViewController();
        
        [[Megacool sharedMegacool] shareScreenshot:rootController.view
                               withRecordingConfig:^(MCLRecordingConfig * _Nonnull config) {
                                   [self setRecordingConfig:config fromDictionary:recordingConfig];
                                   
                               } withShareConfig:^(MCLShareConfig * _Nonnull config) {
                                   [self setShareConfig:config fromDictionary:shareConfig];
                               }];
    });
}

RCT_EXPORT_METHOD(deleteRecording:(NSString *)recordingId)
{
    [[Megacool sharedMegacool] deleteRecording:recordingId];
}

RCT_EXPORT_METHOD(registerScoreChange:(int)scoreDelta)
{
    [[Megacool sharedMegacool] registerScoreChange:scoreDelta];
}

RCT_EXPORT_METHOD(getNumberOfFrames:(RCTPromiseResolveBlock)resolve
                  rejector:(RCTPromiseRejectBlock)reject)
{
    int num = [[Megacool sharedMegacool] getNumberOfFrames];
    resolve([NSNumber numberWithInt:num]);
}

RCT_EXPORT_METHOD(getCaptureMethod:(RCTPromiseResolveBlock)resolve
                  rejector:(RCTPromiseRejectBlock)reject)
{
    MCLCaptureMethod captureMethod = [[Megacool sharedMegacool] captureMethod];
    if (captureMethod == kMCLCaptureMethodView) {
        resolve(@"View");
    } else if (captureMethod == kMCLCaptureMethodMetal) {
        resolve(@"Metal");
    } else if (captureMethod == kMCLCaptureMethodOpenGLES2) {
        resolve(@"OpenGLES2");
    } else if (captureMethod == kMCLCaptureMethodOpenGLES3) {
        resolve(@"OpenGLES3");
    }
}

RCT_EXPORT_METHOD(setCaptureMethod:(NSString *)captureMethod
                  withScaleFactor:(double)scaleFactor)
{
    if ([captureMethod isEqualToString:@"Metal"]) {
        [[Megacool sharedMegacool] setCaptureMethod:kMCLCaptureMethodMetal withScaleFactor:scaleFactor];
    } else if ([captureMethod isEqualToString:@"View"]) {
        [[Megacool sharedMegacool] setCaptureMethod:kMCLCaptureMethodView withScaleFactor:scaleFactor];
    } else if ([captureMethod isEqualToString:@"OpenGLES2"]) {
        [[Megacool sharedMegacool] setCaptureMethod:kMCLCaptureMethodOpenGLES2 withScaleFactor:scaleFactor];
    } else if ([captureMethod isEqualToString:@"OpenGLES3"]) {
        [[Megacool sharedMegacool] setCaptureMethod:kMCLCaptureMethodOpenGLES3 withScaleFactor:scaleFactor];
    }
}

RCT_EXPORT_METHOD(getPreview:(NSDictionary *)previewConfig)
{
    RCTExecuteOnMainQueue(^{
        [[Megacool sharedMegacool] getPreviewWithConfig:^(MCLPreviewConfig * _Nonnull config) {
            [self setPreviewConfig:config fromDictionary:previewConfig];
        }];
    });
}

RCT_EXPORT_METHOD(getShares:(RCTPromiseResolveBlock)resolve
                  rejector:(RCTPromiseRejectBlock)reject)
{
    [[Megacool sharedMegacool] getShares:^(NSArray<MCLShare *> * _Nonnull shares) {
        resolve(shares);
    }];
}

RCT_EXPORT_METHOD(setDefaultShareConfig:(NSDictionary *)shareConfig)
{
    [self setShareConfig:[Megacool sharedMegacool].defaultShareConfig fromDictionary:shareConfig];
}

RCT_EXPORT_METHOD(setDefaultRecordingConfig:(NSDictionary *)recordingConfig)
{
    [self setRecordingConfig:[Megacool sharedMegacool].defaultRecordingConfig fromDictionary:recordingConfig];
}

RCT_EXPORT_METHOD(setGifColorTable:(NSString *)gifColorTable) {
    if ([gifColorTable isEqualToString:@"Dynamic"]) {
        [Megacool sharedMegacool].gifColorTable = kMCLGIFColorTableDynamic;
    } else if ([gifColorTable isEqualToString:@"Fixed"]) {
        [Megacool sharedMegacool].gifColorTable = kMCLGIFColorTableFixed;
    } else if ([gifColorTable isEqualToString:@"AnalyzeFirst"]) {
        [Megacool sharedMegacool].gifColorTable = kMCLGIFColorTableAnalyzeFirst;
    }
}

RCT_EXPORT_METHOD(setKeepCompletedRecordings:(BOOL)keep) {
    [Megacool sharedMegacool].keepCompletedRecordings = keep;
}

RCT_EXPORT_METHOD(getDebug:(RCTPromiseResolveBlock)resolve
                  rejector:(RCTPromiseRejectBlock)reject) {
    resolve([NSNumber numberWithBool:[Megacool debug]]);
}

RCT_EXPORT_METHOD(setDebug:(BOOL)enabled) {
    [Megacool setDebug:enabled];
}

RCT_EXPORT_METHOD(disableFeatures:(NSArray *)features) {
    for (NSString *feature in features) {
        if ([feature isEqualToString:@"None"]) {
            [[Megacool sharedMegacool] disableFeatures:kMCLFeatureNone];
        } else if ([feature isEqualToString:@"Gifs"]) {
            [[Megacool sharedMegacool] disableFeatures:kMCLFeatureGifs];
        } else if ([feature isEqualToString:@"Analytics"]) {
            [[Megacool sharedMegacool] disableFeatures:kMCLFeatureAnalytics];
        } else if ([feature isEqualToString:@"GifUpload"]) {
            [[Megacool sharedMegacool] disableFeatures:kMCLFeatureGifUpload];
        } else if ([feature isEqualToString:@"GifPersistency"]) {
            [[Megacool sharedMegacool] disableFeatures:kMCLFeatureGifPersistency];
        } else if ([feature isEqualToString:@"ShareNoCopyGif"]) {
            [[Megacool sharedMegacool] disableFeatures:kMCLFeatureShareNoCopyGif];
        } else if ([feature isEqualToString:@"ShareCopyLink"]) {
            [[Megacool sharedMegacool] disableFeatures:kMCLFeatureShareCopyLink];
        }
    }
}

RCT_EXPORT_METHOD(getRecordingScore:(NSString *)recordingId
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejector:(RCTPromiseRejectBlock)reject)
{
    int score = [[Megacool sharedMegacool] getRecordingScore:recordingId];
    resolve([NSNumber numberWithInt:score]);
}

RCT_EXPORT_METHOD(getUserId:(RCTPromiseResolveBlock)resolve
                  rejector:(RCTPromiseRejectBlock)reject)
{
    [[Megacool sharedMegacool] getUserId:^(NSString * _Nonnull referralCode) {
        resolve(referralCode);
    }];
}

@end
