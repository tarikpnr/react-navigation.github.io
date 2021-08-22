(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[7447],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=l(t),d=a,h=g["".concat(c,".").concat(d)]||g[d]||p[d]||i;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},10313:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=t(74034),a=t(79973),i=(t(67294),t(3905)),o={id:"preventing-going-back",title:"Preventing going back",sidebar_label:"Preventing going back"},s={unversionedId:"preventing-going-back",id:"version-5.x/preventing-going-back",isDocsHomePage:!1,title:"Preventing going back",description:"Available in version 5.7+",source:"@site/versioned_docs/version-5.x/preventing-going-back.md",sourceDirName:".",slug:"/preventing-going-back",permalink:"/docs/5.x/preventing-going-back",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/preventing-going-back.md",version:"5.x",sidebar_label:"Preventing going back",frontMatter:{id:"preventing-going-back",title:"Preventing going back",sidebar_label:"Preventing going back"},sidebar:"version-5.x/docs",previous:{title:"Custom Android back button behavior",permalink:"/docs/5.x/custom-android-back-button-handling"},next:{title:"Call a function when focused screen changes",permalink:"/docs/5.x/function-after-focusing-screen"}},c=[],l={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available in version 5.7+")),(0,i.kt)("p",null,"Sometimes you may want to prevent the user from leaving a screen, for example, if there are unsaved changes, you might want to show a confirmation dialog. You can achieve it by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeRemove")," event."),(0,i.kt)("p",null,"Note that this event is ",(0,i.kt)("strong",{parentName:"p"},"only")," triggered whenever a screen is being removed. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user pressed back button on a screen in a stack"),(0,i.kt)("li",{parentName:"ul"},"The user performed a swipe back gesture"),(0,i.kt)("li",{parentName:"ul"},"Some action such as ",(0,i.kt)("inlineCode",{parentName:"li"},"pop")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"reset")," was dispatched which removes the screen from the state")),(0,i.kt)("p",null,"This event is ",(0,i.kt)("strong",{parentName:"p"},"not")," triggered when a screen is being unfocused, but not removed. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The user pushed a new screen on top of the screen with the listener in a stack"),(0,i.kt)("li",{parentName:"ul"},"The user navigated from one tab/drawer screen to another tab/drawer screen")),(0,i.kt)("p",null,"The event listener receives the ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," that triggered it. You can dispatch this action again after confirmation, or check the action object to determine what to do."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("samp",{id:"prevent-going-back"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function EditText({ navigation }) {\n  const [text, setText] = React.useState('');\n  const hasUnsavedChanges = Boolean(text);\n\n  React.useEffect(\n    () =>\n      navigation.addListener('beforeRemove', (e) => {\n        if (!hasUnsavedChanges) {\n          // If we don't have unsaved changes, then we don't need to do anything\n          return;\n        }\n\n        // Prevent default behavior of leaving the screen\n        e.preventDefault();\n\n        // Prompt the user before leaving the screen\n        Alert.alert(\n          'Discard changes?',\n          'You have unsaved changes. Are you sure to discard them and leave the screen?',\n          [\n            { text: \"Don't leave\", style: 'cancel', onPress: () => {} },\n            {\n              text: 'Discard',\n              style: 'destructive',\n              // If the user confirmed, then we dispatch the action we blocked earlier\n              // This will continue the action that had triggered the removal of the screen\n              onPress: () => navigation.dispatch(e.data.action),\n            },\n          ]\n        );\n      }),\n    [navigation, hasUnsavedChanges]\n  );\n\n  return (\n    <TextInput\n      value={text}\n      placeholder=\"Type something\u2026\"\n      onChangeText={setText}\n    />\n  );\n}\n")),(0,i.kt)("p",null,"Previously, the way to do this was to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Override back button in header"),(0,i.kt)("li",{parentName:"ul"},"Disable back swipe gesture"),(0,i.kt)("li",{parentName:"ul"},"Override system back button/gesture on Android")),(0,i.kt)("p",null,"However, this approach has many important differences in addition to being less code:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It's not coupled to any specific buttons, going back from custom buttons will trigger it as well"),(0,i.kt)("li",{parentName:"ul"},"It's not coupled to any specific actions, any action that removes the route from state will trigger it"),(0,i.kt)("li",{parentName:"ul"},"It works across nested navigators, e.g. if the screen is being removed due to an action in parent navigator"),(0,i.kt)("li",{parentName:"ul"},"User can still swipe back in the stack navigator, however, the swipe will be cancelled if the event was prevented"),(0,i.kt)("li",{parentName:"ul"},"It's possible to continue the same action that triggered the event")),(0,i.kt)("p",null,"There are couple of edge cases to be aware of when using this approach. Specifically, the event only checks if the route is removed from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/navigation-state"},"navigation state")," when an action is handled. If the change was from other reasons, e.g. - screen getting unmounted due to parent being unmounted, conditionally rendering different screens based on state not managed by React Navigation, using ",(0,i.kt)("inlineCode",{parentName:"p"},"unmountOnBlur")," etc., then this event won't be triggered. It's impossible to prevent unmounting a component."))}u.isMDXComponent=!0}}]);