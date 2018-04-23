//
//  CircularGuageLayer.swift
//  Storj Dash
//
//  Created by Christopher Primerano on 2018-01-13.
//  Copyright © 2018 Christopher Primerano. All rights reserved.
//

import UIKit

class CircularGuageLayer: CAShapeLayer {
  
  var percentage: Double = 0
  var foregroundColor: UIColor = UIColor.clear
  var backgroundClr: UIColor = UIColor.clear
  
  override init() {
    super.init()
    self.lineWidth = 10
  }
  
  override init(layer: Any) {
    if let guageLayer = layer as? CircularGuageLayer {
      self.percentage = guageLayer.percentage
      self.foregroundColor = guageLayer.foregroundColor
      self.backgroundClr = guageLayer.backgroundClr
    }
    
    super.init()
    self.lineWidth = 10
  }
  
  //  init(percentage: Double, foregroundColor: CGColor, backgroundColor: CGColor) {
  //    self.percentage = percentage
  //    self.foregroundColor = foregroundColor
  //    self.backgroundClr = backgroundColor
  //    super.init()
  //  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  override class func needsDisplay(forKey key: String) -> Bool {
    switch key {
    case "percentage", "foregroundColor", "backgroundClr":
      return true
    default:
      return super.needsDisplay(forKey: key)
    }
  }
  
  override func draw(in ctx: CGContext) {
    let startAngle: Double = 0
    let endAngle = (2 * Double.pi * -percentage)
    let radius = (CGFloat(ctx.width - 10) - self.lineWidth) / 2
    
    let arcCenter = CGPoint(x: ctx.width / 2, y: ctx.height / 2)
    
    let backgroundPath = UIBezierPath(arcCenter: arcCenter, radius: radius, startAngle: 0, endAngle: CGFloat(2 * Double.pi), clockwise: true)
    
    let foregroundPath = UIBezierPath(arcCenter: arcCenter, radius: radius, startAngle: CGFloat(startAngle + (Double.pi / 2)), endAngle: CGFloat(endAngle + (Double.pi / 2)), clockwise: false)
    
    UIGraphicsPushContext(ctx)
    
    backgroundClr.setStroke()
    UIColor.clear.setFill()
    backgroundPath.lineWidth = self.lineWidth
    backgroundPath.lineCapStyle = .round
    backgroundPath.stroke()
    
    
    foregroundColor.setStroke()
    UIColor.clear.setFill()
    foregroundPath.lineWidth = self.lineWidth
    foregroundPath.lineCapStyle = .round
    foregroundPath.stroke()
    
    //    ctx.addPath(path.cgPath)
    //    ctx.setStrokeColor(foregroundColor)
    //    ctx.setLineWidth(15)
    //    ctx.setLineCap(.round)
    
    //    ctx.setFillColor(UIColor.clear.cgColor)
    
    UIGraphicsPopContext()
  }
  
}
