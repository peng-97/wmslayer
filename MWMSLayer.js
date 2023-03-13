define(["esri/layers/WMSLayer","esri/request"],
    function(WMSLayer,request) {
        return function (options){
               let layer=new WMSLayer(options);
               if(options.unGetCap && options.sublayers){
                         layer.mapUrl=layer.url;
                         layer.resourceInfo={}
                }
                if(options.unMapSpr){
                      layer.supportsSpatialReference=function (){
                            return true
                      }
                }
               return layer
        }
    }
)
