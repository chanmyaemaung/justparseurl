var s=function(){function s(s){this.url=new URL(s),this.protocol=this.url.protocol,this.slashes=this.url.protocol.endsWith(":"),this.auth=this.url.username&&this.url.password?"".concat(this.url.username,":").concat(this.url.password):void 0,this.username=this.url.username,this.password=this.url.password,this.host=this.url.host,this.hostname=this.url.hostname,this.port=this.url.port,this.pathname=this.url.pathname,this.query=this.parseQuery(),this.hash=this.url.hash,this.href=this.url.href,this.origin=this.url.origin}return s.prototype.parseQuery=function(){var s={};return this.url.searchParams.forEach((function(t,r){s[r]=t})),s},s}();export{s as default};
