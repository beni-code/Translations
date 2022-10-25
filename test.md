# test

<${$Once a model’s vertices have been clipped and transformed into window space, the GPU must determine what pixels in the viewport are covered by each graphics primitive.$}&&{$一旦模型的顶点被裁剪并转换到窗口空间，GPU 必须确定视口中的哪些像素被每个图形基元覆盖。$}$>
The process of filling in the horizontal spans of pixels belong-ing to a primitive is called rasterization.
<${$The GPU calculates the depth, interpo-lated vertex colors, and interpolated texture coordinates for each pixel.$}&&{$GPU 计算每个像素的深度、插值顶点颜色和插值纹理坐标。$}$>
This in-formation, combined with the location of the pixel itself, is called a fragment. 
