(this["webpackJsonpreact-kamasutra"]=this["webpackJsonpreact-kamasutra"]||[]).push([[3],{298:function(t,e,a){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__5g9gx",photo:"ProfileInfo_photo__1RaKt"}},299:function(t,e,a){},300:function(t,e,a){t.exports={postsBlock:"MyPosts_postsBlock__UUesz",posts:"MyPosts_posts__3WOSa"}},301:function(t,e,a){t.exports={item:"Post_item__2rSD2"}},303:function(t,e,a){"use strict";a.r(e);var s=a(29),n=a(30),o=a(32),r=a(31),u=a(0),c=a.n(u),l=(a(299),a(300)),i=a.n(l),p=a(301),m=a.n(p),d=function(t){return c.a.createElement("div",{className:m.a.item},c.a.createElement("img",{src:"https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg",alt:"ava"}),t.message,c.a.createElement("div",null,c.a.createElement("span",null,"Like")," ",t.LikesCount))},f=a(89),h=a(129),E=a(38),b=a(26),v=Object(E.a)(10),g=Object(h.a)({form:"profileAddNewPostForm"})((function(t){return c.a.createElement("form",{onSubmit:t.handleSubmit},c.a.createElement("div",null,c.a.createElement(f.a,{name:"newPostText",placeholder:"Post message",component:b.b,validate:[E.b,v]})),c.a.createElement("div",null,c.a.createElement("button",null,"Add post")))})),k=function(t){var e=t.posts.map((function(t){return c.a.createElement(d,{message:t.message,key:t.id,likesCount:t.likesCount})}));c.a.createRef();return c.a.createElement("div",{className:i.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(g,{onSubmit:function(e){t.addPost(e.newPostText)}}),c.a.createElement("div",{className:i.a.posts},e))},P=a(97),j=a(12),O=Object(j.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(P.a)(e))}}}))(k),S=a(298),_=a.n(S),x=a(66),w=a(130),y=function(t){var e=Object(u.useState)(!1),a=Object(w.a)(e,2),s=a[0],n=a[1],o=Object(u.useState)(t.status),r=Object(w.a)(o,2),l=r[0],i=r[1];Object(u.useEffect)((function(){i(t.status)}),[t.status]);return c.a.createElement("div",null,!s&&c.a.createElement("div",null,c.a.createElement("span",{onDoubleClick:function(){n(!0)}},t.status||"Add a status")),s&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(t){i(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(l)},value:l})))},B=function(t){var e=t.profile,a=t.status,s=t.updateStatus;return e?c.a.createElement("div",null,c.a.createElement("div",{className:_.a.descriptionBlock},c.a.createElement("img",{src:e.photos.large}),c.a.createElement(y,{status:a,updateStatus:s}))):c.a.createElement(x.a,null)},C=function(t){return c.a.createElement("div",null,c.a.createElement(B,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),c.a.createElement(O,null))},I=a(10),U=a(141),A=a(8),N=function(t){Object(o.a)(a,t);var e=Object(r.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return c.a.createElement(C,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(c.a.Component);e.default=Object(A.d)(Object(j.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:P.d,getStatus:P.c,updateStatus:P.e}),I.f,U.a)(N)}}]);
//# sourceMappingURL=3.9c6b81e3.chunk.js.map