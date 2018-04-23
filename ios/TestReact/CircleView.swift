//
//  TRTCircleView.swift
//  TestReact
//
//  Created by Christopher Primerano on 2018-04-22.
//  Copyright © 2018 Facebook. All rights reserved.
//

import UIKit

class CircleView: UIView {
  
  private var shapeLayer: CircularGuageLayer!
  var percentage: Double {
    get {
      return self.shapeLayer.percentage
    }
    set {
      self.shapeLayer.percentage = newValue
    }
  }
  
  override init(frame: CGRect) {
    shapeLayer = CircularGuageLayer()
    super.init(frame: frame)
    print(frame)
    print(self.bounds)
    
    shapeLayer.percentage = 0.34
    shapeLayer.foregroundColor = UIColor.orange
    shapeLayer.backgroundClr = UIColor(white: 0.8, alpha: 1.0)
    shapeLayer.contentsGravity = kCAGravityResizeAspect
    shapeLayer.frame = self.bounds
  }
  
  required init?(coder aDecoder: NSCoder) {
    shapeLayer = CircularGuageLayer()
    super.init(coder: aDecoder)
    
    shapeLayer.percentage = 0.34
    shapeLayer.foregroundColor = UIColor.orange
    shapeLayer.backgroundClr = UIColor(white: 0.8, alpha: 1.0)
    shapeLayer.contentsGravity = kCAGravityResizeAspect
    shapeLayer.frame = self.bounds
  }
  
  override func draw(_ rect: CGRect) {
    let contextOptional = UIGraphicsGetCurrentContext()
    guard let context = contextOptional else { return }
    let newContext = CGContext(data: context.data, width: context.width, height: context.height, bitsPerComponent: context.bitsPerComponent, bytesPerRow: context.bytesPerRow, space: context.colorSpace!, bitmapInfo: context.bitmapInfo.rawValue)
    self.shapeLayer.draw(in: newContext!)
  }
}
