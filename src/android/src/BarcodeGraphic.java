//package tl.cordova.plugin.firebase.mlkit.barcode.scanner;
package org.apache.cordova.firebase;
// ----------------------------------------------------------------------------
// |  Android Imports
// ----------------------------------------------------------------------------
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.RectF;

// ----------------------------------------------------------------------------
// |  Google Imports
// ----------------------------------------------------------------------------
import com.google.firebase.ml.vision.barcode.FirebaseVisionBarcode;

// ----------------------------------------------------------------------------
// |  Our Imports
// ----------------------------------------------------------------------------
import org.apache.cordova.firebase.camera.GraphicOverlay;

public class BarcodeGraphic extends GraphicOverlay.Graphic {
  // ----------------------------------------------------------------------------
  // |  Public Properties
  // ----------------------------------------------------------------------------

  // ----------------------------------------------------------------------------
  // |  Private Properties
  // ---------------------------------------------------------------------------- 
  private static final int COLOR_CHOICES[]     = { Color.BLUE, Color.CYAN, Color.GREEN };
  private static       int CURRENT_COLOR_INDEX = 0                                      ;
  
  private          int                   _Id       ;
  private          Paint                 _RectPaint;
  private          Paint                 _TextPaint;
  private volatile FirebaseVisionBarcode _Barcode  ;

  BarcodeGraphic(GraphicOverlay overlay) {
    super(overlay);

    CURRENT_COLOR_INDEX = (CURRENT_COLOR_INDEX + 1) % COLOR_CHOICES.length;
    final int selectedColor = COLOR_CHOICES[CURRENT_COLOR_INDEX];

    _RectPaint = new Paint();
    _RectPaint.setColor(selectedColor);
    _RectPaint.setStyle(Paint.Style.STROKE);
    _RectPaint.setStrokeWidth(4.0f);

    _TextPaint = new Paint();
    _TextPaint.setColor(selectedColor);
    _TextPaint.setTextSize(36.0f);
  }

  // ----------------------------------------------------------------------------
  // |  Public Functions
  // ----------------------------------------------------------------------------
  public int getId() {
    return _Id;
  }

  public void setId(int id) {
    this._Id = id;
  }

  public FirebaseVisionBarcode getBarcode() {
    return _Barcode;
  }

  public void updateItem(FirebaseVisionBarcode barcode) {
    _Barcode = barcode;
    postInvalidate();
  }

  @Override
  public void draw(Canvas canvas) {
    FirebaseVisionBarcode barcode = _Barcode;
    if (barcode == null) {
      return;
    }

    RectF rect = new RectF(barcode.getBoundingBox());
    rect.left = translateX(rect.left);
    rect.top = translateY(rect.top);
    rect.right = translateX(rect.right);
    rect.bottom = translateY(rect.bottom);
    canvas.drawRect(rect, _RectPaint);

    canvas.drawText(barcode.getRawValue(), rect.left, rect.bottom, _TextPaint);
  }
  
  // ----------------------------------------------------------------------------
  // |  Protected Functions
  // ----------------------------------------------------------------------------

  // ----------------------------------------------------------------------------
  // |  Private Functions
  // ----------------------------------------------------------------------------  
}
