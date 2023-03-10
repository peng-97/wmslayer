# wmslayer
### arcgis api  add wms layer ###
#### layer添加一个方法可以不设定底图，即可加载wms
```javascript
supportsSpatialReference:function (){
return true
}
```
#### 构造layer时候添加两个属性，不请求能力文档直接获取服务

```javascript
    mapUrl:"https://ows.terrestris.de/osm/service",
    resourceInfo:{}
```

![img.png](img.png)
