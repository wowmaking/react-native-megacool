/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <Megacool/Megacool.h>
//#import <RNMegacool.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"ExampleApp"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  //[Megacool startWithAppConfig:@"q1ZCkVCyUkqtSMwtyEkFCivpKEEUgpSBFCuVGgRbIokq+RVUhFQZ5Fek+OTnhJZmhPl7pAYUVCnV1gIA" andConfigBlock:^(MCLMegacoolConfig * _Nonnull config) {
  //  config.delegate = self;
  //}];
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

MEGACOOL_DEFAULT_LINK_HANDLERS

//- (void)megacoolReceivedShareOpened:(MCLReceivedShareOpenedEvent *)event {
//  NSLog(@"Got event: %@", event);
//  if (event.isFirstSession) {
//    // This device has received a share and installed the
//    // app for the first time
//    NSLog(@"Installed from a referral from %@", event.senderUserId);
//  }
//}
//- (void)megacoolSentShareOpened:(MCLSentShareOpenedEvent *)event {
//  NSLog(@"Got event: %@", event);
//  if (event.isFirstSession) {
//    // A share sent from this device has been opened, and
//    // the receiver installed the app for the first time
//    NSLog(@"%@ installed the app from our referral", event);
//  }
//}

@end
