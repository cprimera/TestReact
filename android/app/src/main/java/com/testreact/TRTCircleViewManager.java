package com.testreact;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by cprimera on 2018-04-22.
 */

public class TRTCircleViewManager extends SimpleViewManager<TRTCircleView> {

    private static final String REACT_CLASS = "TRTCircleView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected TRTCircleView createViewInstance(ThemedReactContext reactContext) {
        return new TRTCircleView(reactContext, null);
    }

    @ReactProp(name = "percentage")
    public void setPercentage(TRTCircleView view, double percentage) {
        return;
    }


}
