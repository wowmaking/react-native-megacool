//
//  MCLEvent.h
//
//  An online version of the documentation can be found at https://docs.megacool.co
//
//  Do you feel like this reading docs? (╯°□°）╯︵ ┻━┻  Give us a shout if there's anything that's
//  unclear and we'll try to brighten the experience. We can sadly not replace flipped tables.
//

#import <Foundation/Foundation.h>
#import "MCLShare.h"

/**
 MCLEvent types which are used in `+[Megacool startWithAppConfig:andEventHandler:]`.
 */
typedef NS_ENUM(NSInteger, MCLEventType) {
    /**
     Emitted when we've opened a share sent by someone else.

     The sending user's id can be found in the `data` dictionary under the key
     `MCLEventDataSenderUserId`.
     */
    MCLEventReceivedShareOpened = 0,


    /**
     Emitted when a share sent by this user is opened by someone else.

     The other person's `userId` can be found in the `data` dictionary under the
     `MCLEventDataReceiverUserId` key.
     */
    MCLEventSentShareOpened,


    /**
     Emitted when a link click was detected locally.

     This will usually happen very quickly after the app was loaded, and can be used to
     navigate to a specific section of your app. Look up the URL to navigate to from the property
     `MCLEventDataURL` in the `data` dictionary. This event will not be emitted for deferred link
     clicks (detections that has to go through the backend), for those only the
     `MCLEventReceivedShareOpened` event will be emitted. The referral code (if any) from the link is
     accessible through the `MCLEventDataReferralCode` key in the data dictionary.

     `isFirstSession` can be used to detect if this is the first session by this user. This will be
     persisted across re-installs in the Keychain, thus re-installing the app and clicking a link
     will not emit any new events with `isFirstSession` set.
     */
    MCLEventLinkClicked,
};

NS_ASSUME_NONNULL_BEGIN
/**
 MCLEvent.data keys
 */
typedef NSString MCLEventDataKey;
extern MCLEventDataKey *const MCLEventDataURL;
extern MCLEventDataKey *const MCLEventDataReferralCode;
extern MCLEventDataKey *const MCLEventDataReceiverUserId;
extern MCLEventDataKey *const MCLEventDataSenderUserId;


/**
 `MCLEvent`s are passed in the callback of `+[Megacool startWithAppConfig:andEventHandler:]`
 and is triggered soon after the app opens. There are three types of events which is defined in
 `MCLEventType`.
 */
__deprecated_msg("Use MCLLinkClickedEvent, MCLReceivedShareEvent and MCLSentShareEvent instead")
@interface MCLEvent : NSObject

/**
 A megacool share object associated with the event.

 This will not be set on events with type `MCLEventLinkClicked`, since they happen
 locally. After the link clicked event is sent, a request will be sent to the backend to fetch
 the share object, which will then be attached to a `MCLEventReceivedShareOpened` event.

 Might be `nil` if a share could not be found for the event, which can happen if a user removes the
 last characters of the referral code before clicking or similar.
 */
@property(readonly, nullable, strong) MCLShare *share;


/**
 When the event occured.
 */
@property(readonly, strong) NSDate *createdAt;


/**
 type of event
 */
@property(readonly) MCLEventType type;


/**
 Whether the event happened for the first time on the event's originating device. This is
 only relevant for SentShareOpened/ReceivedShareOpened events, and always false for LinkClicked events
 */
@property(readonly) BOOL isFirstSession;


/**
 Data associated to the event.

 Which values is present will vary with the type of event, but will be available under
 the keys `MCLEventDataURL`, `MCLEventDataReferralCode` or `MCLEventDataReceiverReferralCode`.
 */
@property(readonly, strong) NSDictionary *data;

NS_ASSUME_NONNULL_END
@end
