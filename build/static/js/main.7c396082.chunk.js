(this["webpackJsonpnote-app"]=this["webpackJsonpnote-app"]||[]).push([[0],{17:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),o=n(6),c=n.n(o),r=n(7),i=n(8),h=n(12),p=n(11),l=(n(17),n(10)),u=n(9),d=n.n(u),g=function(e,t){return{type:"NOTETEXTCHANGE",index:e,text:t}},f=function(e,t){return{type:"CHANGETAGS",index:e,tags:t}},O=n(4),j=n(21),b=n(22),x=n(19),N=n(20),T=n.n(N),E=n(2);O.b.add(j.a,b.a);var m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).handleChange=function(e){var t=e.target.value;null!==t.match(/#[\w\d]+\W/g)&&t.match(/#[\w\d]+\W/g).forEach((function(e){var t=e.slice(0,-1).slice(1);!1===s.props.tags.includes(t)&&s.props.dispatch(f(s.props.index,s.props.tags.concat(t)))}));s.props.dispatch(g(s.props.index,t))},s.handleTagsChange=function(e,t){t.forEach((function(t){if(!e.includes(t)){for(var n=s.props.note,a=new RegExp("#".concat(t),"gi");null!==n.match(a);)n=n.replace(a,"".concat(t));s.props.dispatch(g(s.props.index,n))}})),s.props.dispatch(f(s.props.index,e))},s.handleDelete=function(e){s.props.dispatch({type:"DELETENOTE",index:s.props.index})},s.onFocusOn=function(){s.setState({focus:!0})},s.onFocusOff=function(){s.setState({focus:!1})},s.state={focus:!1},s}return Object(i.a)(n,[{key:"ifInSearch",value:function(){if(0===this.props.searchTags.length)return!0;for(var e=0;e<this.props.searchTags.length;e++)if(!this.props.tags.includes(this.props.searchTags[e]))return!1;return!0}},{key:"render",value:function(){return this.ifInSearch()?Object(E.jsxs)("div",{className:"note-node",onBlur:this.onFocusOff,children:[!0===this.state.focus?Object(E.jsx)("textarea",{className:"note-node__textarea",value:this.props.note,onChange:this.handleChange}):Object(E.jsx)(T.a,{onFocus:this.onFocusOn,className:"HighLight",highlightClassName:"YourHighlightClass",searchWords:this.props.tags,autoEscape:!0,textToHighlight:this.props.note,tabIndex:"1"}),Object(E.jsx)(d.a,{className:"tags-filter",value:this.props.tags,inputProps:{className:"react-tagsinput-input",placeholder:""},onChange:this.handleTagsChange.bind(this)}),Object(E.jsx)("button",{className:"note-note__delete",onClick:this.handleDelete,children:Object(E.jsx)(x.a,{style:{fontSize:"1rem"},icon:"times-circle"})})]}):null}}]),n}(a.a.Component),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).newNoteSend=function(){s.props.dispatch({type:"NEWNOTE"}),s.scrollToTop()},s.scrollToTop=function(){s.notesRef.current.scrollTo({top:0,behavior:"smooth"})},s.state={tags:[]},s.notesRef=a.a.createRef(),s}return Object(i.a)(n,[{key:"handleTagsChange",value:function(e){this.setState({tags:e})}},{key:"render",value:function(){var e=this;return Object(E.jsxs)("main",{className:"notes-window",children:[Object(E.jsx)(d.a,{className:"tags-filter",value:this.state.tags,inputProps:{className:"react-tagsinput-input search-tags",placeholder:"search tags..."},onChange:this.handleTagsChange.bind(this)}),Object(E.jsx)("div",{className:"notes-toolbar",children:Object(E.jsx)("button",{name:"newTag",type:"button",className:"notes-toolbar__button",title:"new note",onClick:this.newNoteSend,children:" New Tag"})}),Object(E.jsx)("div",{className:"notes-wrapper",ref:this.notesRef,children:Object(E.jsx)("ul",{className:"notes-container",children:this.props.notes.notes.map((function(t,n){return Object(E.jsx)(m,{index:n,note:t.note,tags:t.tags,searchTags:e.state.tags,dispatch:e.props.dispatch},t.id)}))})})]})}}]),n}(a.a.Component),C=Object(l.b)((function(e){return!1===e.notes?{notes:[]}:{notes:e.notes}}))(v),w=n(23),_=n(3),S=n(24),y=n.n(S),k=n(25),D=n.n(k),R=Object(_.a)({notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{notes:[]},t=arguments.length>1?arguments[1]:void 0,n=JSON.parse(JSON.stringify(e));switch(t.type){case"NEWNOTE":return n.notes.push({id:D.a.generate(),note:"",tags:[]}),n;case"NOTETEXTCHANGE":return n.notes[t.index].note=t.text,n;case"DELETENOTE":return n.notes.splice(t.index,1),n;case"CHANGETAGS":return n.notes[t.index].tags=t.tags,n;default:return e}}}),H=n(16),A=n(26),G=n.n(A),I={key:"root",storage:y.a,stateReconciler:G.a},X=Object(H.a)(I,R),F=Object(_.b)(X,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),L=Object(H.b)(F),W=function(){return Object(E.jsx)(l.a,{store:F,children:Object(E.jsx)(w.a,{loading:null,persistor:L,children:Object(E.jsx)(C,{})})})};c.a.render(Object(E.jsx)(W,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.7c396082.chunk.js.map