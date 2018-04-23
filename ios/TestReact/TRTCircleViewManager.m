//
//  TRTCircleViewManager.m
//  TestReact
//
//  Created by Christopher Primerano on 2018-04-22.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "TRTCircleViewManager.h"

@interface TRTCircleViewManager()
  @property(strong, nonatomic) CircleView* circleView;
@end

@implementation TRTCircleViewManager

RCT_EXPORT_MODULE()

- (UIView *)view {
  self.circleView = [[CircleView alloc] init];
  return self.circleView;
}

RCT_EXPORT_VIEW_PROPERTY(percentage, double)

@end
