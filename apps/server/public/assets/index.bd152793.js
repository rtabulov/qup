import{a as D,d as P,b as w,r as O,o as _,c as k,w as d,e as I,m as N,f as T,g as h,h as r,u as n,i as l,j as z,k as L,l as V,F as v,n as B,p as g,t as b,q as F,s as U,v as H,x as G,y as Z,z as M,A as W,B as K,T as Y,C as J,D as Q,E as X,G as ee,H as te}from"./vendor.8a8b2f57.js";const ae=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}};ae();const u=D.create({baseURL:"/api",timeout:1e4}),Ve=async e=>(await u.post("/auth/login",e)).data,Be=async e=>(await u.post("/auth/register",e)).data,Fe=async()=>(await u.get("/departments")).data,re=async()=>(await u.get("/auth/self")).data,oe=async()=>(await u.post("/auth/logout")).data,Ue=async e=>(await u.post("/certificates",e,{headers:{"Content-Type":"multipart/form-data"}})).data,He=async e=>(await u.delete(`/certificates/${e}`)).data,Ge=async()=>(await u.get("/auth/users")).data,Ze=async e=>(await u.delete(`/auth/users/${e}`)).data,Me=async(e,t)=>(await u.patch(`/auth/users/${e}`,t)).data,We=async()=>(await u.get("/certificates")).data,y=P("user",{state:()=>({user:null,initialLoadFinished:!1}),actions:{async logout(){await oe(),this.user=null},setUser(e){this.user=e},async tryLoggingIn(){try{this.user=await re()}catch{this.user=null}finally{this.initialLoadFinished=!0}}}});var S=(e,t)=>{const s=e.__vccOpts||e;for(const[o,a]of t)s[o]=a;return s};const se=w({inheritAttrs:!1,props:{to:{type:[Object,String],default:"/"},as:{type:String,default:"a"}}});function ne(e,t,s,o,a,i){const c=O("RouterLink");return _(),k(c,{custom:"",to:e.to},{default:d(({navigate:f,href:E})=>[(_(),k(I(e.as),N({class:"py-2 px-4 text-pink hover:text-white inline-block hover:bg-muted transition-colors",href:E},e.$attrs,{onClick:f}),{default:d(()=>[T(e.$slots,"default")]),_:2},1040,["href","onClick"]))]),_:3},8,["to"])}var p=S(se,[["render",ne]]);const A=["teacher","hr","departmentHead","admin"];function Ke(e,t=20){if(e.length<t)return e;const o=e.split(".").at(-1),a=e.split(".").slice(0,-1).join(".");return a.slice(0,t-4)+"..."+a.slice(-4)+"."+o}const Ye={admin:"\u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440",teacher:"\u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C",departmentHead:"\u0417\u0430\u0432\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u043A\u0430\u0444\u0435\u0434\u0440\u043E\u0439",hr:"HR"};function j(e,t){if(!e)return!1;const s=A.findIndex(a=>a===t),o=A.findIndex(a=>a===e);return t===!0?o>=0:o>=s}const ie={class:"bg-dark font-display"},le={class:"container px-0 flex"},ce=r("div",{class:"flex"},null,-1),_e={class:"flex ml-auto"},ue=g(" \u0412\u0441\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 "),de=g(" \u0412\u0441\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B "),he=g(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442 "),pe=g(" \u0412\u044B\u0439\u0442\u0438 "),me=g(" \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F "),ge=g(" \u0412\u043E\u0439\u0442\u0438 "),fe=w({setup(e){const t=y();return(s,o)=>{var a,i;return _(),h("nav",ie,[r("div",le,[ce,r("div",_e,[n(j)((a=n(t).user)==null?void 0:a.role,"admin")?(_(),k(p,{key:0,to:"/users"},{default:d(()=>[ue,l(n(z),{class:"inline-block h-5 w-5 -translate-y-px"})]),_:1})):L("",!0),n(j)((i=n(t).user)==null?void 0:i.role,"hr")?(_(),k(p,{key:1,to:"/certificates"},{default:d(()=>[de,l(n(V),{class:"inline-block h-5 w-5 -translate-y-px"})]),_:1})):L("",!0),n(t).user?(_(),h(v,{key:2},[l(p,{to:"/certificates/create"},{default:d(()=>[he,l(n(B),{class:"inline-block h-5 w-5 -translate-y-px"})]),_:1}),l(p,{to:"/profile"},{default:d(()=>{var c,f;return[g(b((c=n(t).user)==null?void 0:c.lastName)+" "+b((f=n(t).user)==null?void 0:f.firstName)+" ",1),l(n(F),{class:"inline-block h-5 w-5 -translate-y-px"})]}),_:1}),l(p,{as:"button",onClick:o[0]||(o[0]=()=>n(t).logout())},{default:d(()=>[pe,l(n(U),{class:"inline-block w-5 h-5"})]),_:1})],64)):(_(),h(v,{key:3},[l(p,{to:"/register"},{default:d(()=>[me,l(n(H),{class:"inline-block w-5 h-5"})]),_:1}),l(p,{to:"/login"},{default:d(()=>[ge,l(n(G),{class:"inline-block w-5 h-5"})]),_:1})],64))])])])}}}),be={People:{"\u{1F60A}":":blush:","\u{1F603}":":smiley:","\u{1F60F}":":smirk:","\u{1F60D}":":heart_eyes:","\u{1F618}":":kissing_heart:","\u{1F61A}":":kissing_closed_eyes:","\u{1F633}":":flushed:","\u{1F60C}":":relieved:","\u{1F606}":":satisfied:","\u{1F601}":":grin:","\u{1F609}":":wink:","\u{1F61C}":":stuck_out_tongue_winking_eye:","\u{1F61D}":":stuck_out_tongue_closed_eyes:","\u{1F600}":":grinning:","\u{1F617}":":kissing:","\u{1F619}":":kissing_smiling_eyes:","\u{1F61B}":":stuck_out_tongue:","\u{1F634}":":sleeping:","\u{1F61F}":":worried:","\u{1F626}":":frowning:","\u{1F627}":":anguished:","\u{1F62E}":":open_mouth:","\u{1F62C}":":grimacing:","\u{1F615}":":confused:","\u{1F62F}":":hushed:","\u{1F611}":":expressionless:","\u{1F612}":":unamused:","\u{1F605}":":sweat_smile:","\u{1F613}":":sweat:","\u{1F625}":":disappointed_relieved:","\u{1F629}":":weary:","\u{1F614}":":pensive:","\u{1F61E}":":disappointed:","\u{1F616}":":confounded:","\u{1F628}":":fearful:","\u{1F630}":":cold_sweat:","\u{1F623}":":persevere:","\u{1F622}":":cry:","\u{1F62D}":":sob:","\u{1F602}":":joy:","\u{1F632}":":astonished:","\u{1F631}":":scream:","\u{1F62B}":":tired_face:","\u{1F620}":":angry:","\u{1F621}":":rage:","\u{1F624}":":triumph:","\u{1F62A}":":sleepy:","\u{1F60B}":":yum:","\u{1F637}":":mask:","\u{1F60E}":":sunglasses:","\u{1F635}":":dizzy_face:","\u{1F47F}":":imp:","\u{1F608}":":smiling_imp:","\u{1F610}":":neutral_face:","\u{1F636}":":no_mouth:","\u{1F607}":":innocent:","\u{1F47D}":":alien:","\u{1F49B}":":yellow_heart:","\u{1F499}":":blue_heart:","\u{1F49C}":":purple_heart:","\u2764\uFE0F":":heart:","\u{1F49A}":":green_heart:","\u{1F494}":":broken_heart:","\u{1F493}":":heartbeat:","\u{1F497}":":heartpulse:","\u{1F495}":":two_hearts:","\u{1F49E}":":revolving_hearts:","\u{1F498}":":cupid:","\u{1F496}":":sparkling_heart:","\u2728":":sparkles:","\u2B50":":star:","\u{1F31F}":":star2:","\u{1F4AB}":":dizzy:","\u{1F4A5}":":collision:","\u{1F4A2}":":anger:","\u2757":":exclamation:","\u2753":":question:","\u2755":":grey_exclamation:","\u2754":":grey_question:","\u{1F4A4}":":zzz:","\u{1F4A8}":":dash:","\u{1F4A6}":":sweat_drops:","\u{1F3B6}":":notes:","\u{1F3B5}":":musical_note:","\u{1F525}":":fire:","\u{1F4A9}":":shit:","\u{1F44D}":":thumbsup:","\u{1F44E}":":thumbsdown:","\u{1F44C}":":ok_hand:","\u{1F44A}":":facepunch:","\u270A":":fist:","\u270C\uFE0F":":v:","\u{1F44B}":":wave:","\u270B":":raised_hand:","\u{1F450}":":open_hands:","\u261D\uFE0F":":point_up:","\u{1F447}":":point_down:","\u{1F448}":":point_left:","\u{1F449}":":point_right:","\u{1F64C}":":raised_hands:","\u{1F64F}":":pray:","\u{1F446}":":point_up_2:","\u{1F44F}":":clap:","\u{1F4AA}":":muscle:","\u{1F918}":":metal:","\u{1F595}":":fu:","\u{1F6B6}":":walking:","\u{1F3C3}":":running:","\u{1F46B}":":couple:","\u{1F46A}":":family:","\u{1F46C}":":two_men_holding_hands:","\u{1F46D}":":two_women_holding_hands:","\u{1F483}":":dancer:","\u{1F46F}":":dancers:","\u{1F646}\u200D\u2640\uFE0F":":ok_woman:","\u{1F645}":":no_good:","\u{1F481}":":information_desk_person:","\u{1F64B}":":raising_hand:","\u{1F470}\u200D\u2640\uFE0F":":bride_with_veil:","\u{1F647}":":bow:","\u{1F48F}":":couplekiss:","\u{1F491}":":couple_with_heart:","\u{1F486}":":massage:","\u{1F487}":":haircut:","\u{1F485}":":nail_care:","\u{1F466}":":boy:","\u{1F467}":":girl:","\u{1F469}":":woman:","\u{1F468}":":man:","\u{1F476}":":baby:","\u{1F475}":":older_woman:","\u{1F474}":":older_man:","\u{1F472}":":man_with_gua_pi_mao:","\u{1F473}\u200D\u2642\uFE0F":":man_with_turban:","\u{1F477}":":construction_worker:","\u{1F46E}":":cop:","\u{1F47C}":":angel:","\u{1F478}":":princess:","\u{1F63A}":":smiley_cat:","\u{1F638}":":smile_cat:","\u{1F63B}":":heart_eyes_cat:","\u{1F63D}":":kissing_cat:","\u{1F63C}":":smirk_cat:","\u{1F640}":":scream_cat:","\u{1F63F}":":crying_cat_face:","\u{1F639}":":joy_cat:","\u{1F63E}":":pouting_cat:","\u{1F479}":":japanese_ogre:","\u{1F47A}":":japanese_goblin:","\u{1F648}":":see_no_evil:","\u{1F649}":":hear_no_evil:","\u{1F64A}":":speak_no_evil:","\u{1F482}\u200D\u2642\uFE0F":":guardsman:","\u{1F480}":":skull:","\u{1F43E}":":feet:","\u{1F444}":":lips:","\u{1F48B}":":kiss:","\u{1F4A7}":":droplet:","\u{1F442}":":ear:","\u{1F440}":":eyes:","\u{1F443}":":nose:","\u{1F445}":":tongue:","\u{1F48C}":":love_letter:","\u{1F464}":":bust_in_silhouette:","\u{1F465}":":busts_in_silhouette:","\u{1F4AC}":":speech_balloon:","\u{1F4AD}":":thought_balloon:"},Nature:{"\u2600\uFE0F":":sunny:","\u2614":":umbrella:","\u2601\uFE0F":":cloud:","\u2744\uFE0F":":snowflake:","\u26C4":":snowman:","\u26A1":":zap:","\u{1F300}":":cyclone:","\u{1F301}":":foggy:","\u{1F30A}":":ocean:","\u{1F431}":":cat:","\u{1F436}":":dog:","\u{1F42D}":":mouse:","\u{1F439}":":hamster:","\u{1F430}":":rabbit:","\u{1F43A}":":wolf:","\u{1F438}":":frog:","\u{1F42F}":":tiger:","\u{1F428}":":koala:","\u{1F43B}":":bear:","\u{1F437}":":pig:","\u{1F43D}":":pig_nose:","\u{1F42E}":":cow:","\u{1F417}":":boar:","\u{1F435}":":monkey_face:","\u{1F412}":":monkey:","\u{1F434}":":horse:","\u{1F40E}":":racehorse:","\u{1F42B}":":camel:","\u{1F411}":":sheep:","\u{1F418}":":elephant:","\u{1F43C}":":panda_face:","\u{1F40D}":":snake:","\u{1F426}":":bird:","\u{1F424}":":baby_chick:","\u{1F425}":":hatched_chick:","\u{1F423}":":hatching_chick:","\u{1F414}":":chicken:","\u{1F427}":":penguin:","\u{1F422}":":turtle:","\u{1F41B}":":bug:","\u{1F41D}":":honeybee:","\u{1F41C}":":ant:","\u{1FAB2}":":beetle:","\u{1F40C}":":snail:","\u{1F419}":":octopus:","\u{1F420}":":tropical_fish:","\u{1F41F}":":fish:","\u{1F433}":":whale:","\u{1F40B}":":whale2:","\u{1F42C}":":dolphin:","\u{1F404}":":cow2:","\u{1F40F}":":ram:","\u{1F400}":":rat:","\u{1F403}":":water_buffalo:","\u{1F405}":":tiger2:","\u{1F407}":":rabbit2:","\u{1F409}":":dragon:","\u{1F410}":":goat:","\u{1F413}":":rooster:","\u{1F415}":":dog2:","\u{1F416}":":pig2:","\u{1F401}":":mouse2:","\u{1F402}":":ox:","\u{1F432}":":dragon_face:","\u{1F421}":":blowfish:","\u{1F40A}":":crocodile:","\u{1F42A}":":dromedary_camel:","\u{1F406}":":leopard:","\u{1F408}":":cat2:","\u{1F429}":":poodle:","\u{1F43E}":":paw_prints:","\u{1F490}":":bouquet:","\u{1F338}":":cherry_blossom:","\u{1F337}":":tulip:","\u{1F340}":":four_leaf_clover:","\u{1F339}":":rose:","\u{1F33B}":":sunflower:","\u{1F33A}":":hibiscus:","\u{1F341}":":maple_leaf:","\u{1F343}":":leaves:","\u{1F342}":":fallen_leaf:","\u{1F33F}":":herb:","\u{1F344}":":mushroom:","\u{1F335}":":cactus:","\u{1F334}":":palm_tree:","\u{1F332}":":evergreen_tree:","\u{1F333}":":deciduous_tree:","\u{1F330}":":chestnut:","\u{1F331}":":seedling:","\u{1F33C}":":blossom:","\u{1F33E}":":ear_of_rice:","\u{1F41A}":":shell:","\u{1F310}":":globe_with_meridians:","\u{1F31E}":":sun_with_face:","\u{1F31D}":":full_moon_with_face:","\u{1F31A}":":new_moon_with_face:","\u{1F311}":":new_moon:","\u{1F312}":":waxing_crescent_moon:","\u{1F313}":":first_quarter_moon:","\u{1F314}":":moon:","\u{1F315}":":full_moon:","\u{1F316}":":waning_gibbous_moon:","\u{1F317}":":last_quarter_moon:","\u{1F318}":":waning_crescent_moon:","\u{1F31C}":":last_quarter_moon_with_face:","\u{1F31B}":":first_quarter_moon_with_face:","\u{1F30D}":":earth_africa:","\u{1F30E}":":earth_americas:","\u{1F30F}":":earth_asia:","\u{1F30B}":":volcano:","\u{1F30C}":":milky_way:","\u26C5":":partly_sunny:"},Objects:{"\u{1F38D}":":bamboo:","\u{1F49D}":":gift_heart:","\u{1F38E}":":dolls:","\u{1F392}":":school_satchel:","\u{1F393}":":mortar_board:","\u{1F38F}":":flags:","\u{1F386}":":fireworks:","\u{1F387}":":sparkler:","\u{1F390}":":wind_chime:","\u{1F391}":":rice_scene:","\u{1F383}":":jack_o_lantern:","\u{1F47B}":":ghost:","\u{1F385}":":santa:","\u{1F384}":":christmas_tree:","\u{1F381}":":gift:","\u{1F514}":":bell:","\u{1F515}":":no_bell:","\u{1F38B}":":tanabata_tree:","\u{1F389}":":tada:","\u{1F38A}":":confetti_ball:","\u{1F388}":":balloon:","\u{1F52E}":":crystal_ball:","\u{1F4BF}":":cd:","\u{1F4C0}":":dvd:","\u{1F4BE}":":floppy_disk:","\u{1F4F7}":":camera:","\u{1F4F9}":":video_camera:","\u{1F3A5}":":movie_camera:","\u{1F4BB}":":computer:","\u{1F4FA}":":tv:","\u{1F4F1}":":iphone:","\u260E\uFE0F":":telephone:","\u{1F4DE}":":telephone_receiver:","\u{1F4DF}":":pager:","\u{1F4E0}":":fax:","\u{1F4BD}":":minidisc:","\u{1F4FC}":":vhs:","\u{1F509}":":sound:","\u{1F508}":":speaker:","\u{1F507}":":mute:","\u{1F4E2}":":loudspeaker:","\u{1F4E3}":":mega:","\u231B":":hourglass:","\u23F3":":hourglass_flowing_sand:","\u23F0":":alarm_clock:","\u231A":":watch:","\u{1F4FB}":":radio:","\u{1F4E1}":":satellite:","\u27BF":":loop:","\u{1F50D}":":mag:","\u{1F50E}":":mag_right:","\u{1F513}":":unlock:","\u{1F512}":":lock:","\u{1F50F}":":lock_with_ink_pen:","\u{1F510}":":closed_lock_with_key:","\u{1F511}":":key:","\u{1F4A1}":":bulb:","\u{1F526}":":flashlight:","\u{1F506}":":high_brightness:","\u{1F505}":":low_brightness:","\u{1F50C}":":electric_plug:","\u{1F50B}":":battery:","\u{1F4F2}":":calling:","\u{1F4E7}":":e-mail:","\u{1F4EB}":":mailbox:","\u{1F4EE}":":postbox:","\u{1F6C0}":":bath:","\u{1F6C1}":":bathtub:","\u{1F6BF}":":shower:","\u{1F6BD}":":toilet:","\u{1F527}":":wrench:","\u{1F529}":":nut_and_bolt:","\u{1F528}":":hammer:","\u{1F4BA}":":seat:","\u{1F4B0}":":moneybag:","\u{1F4B4}":":yen:","\u{1F4B5}":":dollar:","\u{1F4B7}":":pound:","\u{1F4B6}":":euro:","\u{1F4B3}":":credit_card:","\u{1F4B8}":":money_with_wings:","\u{1F4E5}":":inbox_tray:","\u{1F4E4}":":outbox_tray:","\u2709\uFE0F":":envelope:","\u{1F4E8}":":incoming_envelope:","\u{1F4EF}":":postal_horn:","\u{1F4EA}":":mailbox_closed:","\u{1F4EC}":":mailbox_with_mail:","\u{1F4ED}":":mailbox_with_no_mail:","\u{1F6AA}":":door:","\u{1F6AC}":":smoking:","\u{1F4A3}":":bomb:","\u{1F52B}":":gun:","\u{1F52A}":":hocho:","\u{1F48A}":":pill:","\u{1F489}":":syringe:","\u{1F4C4}":":page_facing_up:","\u{1F4C3}":":page_with_curl:","\u{1F4D1}":":bookmark_tabs:","\u{1F4CA}":":bar_chart:","\u{1F4C8}":":chart_with_upwards_trend:","\u{1F4C9}":":chart_with_downwards_trend:","\u{1F4DC}":":scroll:","\u{1F4CB}":":clipboard:","\u{1F4C6}":":calendar:","\u{1F4C5}":":date:","\u{1F4C7}":":card_index:","\u{1F4C1}":":file_folder:","\u{1F4C2}":":open_file_folder:","\u2702\uFE0F":":scissors:","\u{1F4CC}":":pushpin:","\u{1F4CE}":":paperclip:","\u2712\uFE0F":":black_nib:","\u270F\uFE0F":":pencil2:","\u{1F4CF}":":straight_ruler:","\u{1F4D0}":":triangular_ruler:","\u{1F4D5}":":closed_book:","\u{1F4D7}":":green_book:","\u{1F4D8}":":blue_book:","\u{1F4D9}":":orange_book:","\u{1F4D3}":":notebook:","\u{1F4D4}":":notebook_with_decorative_cover:","\u{1F4D2}":":ledger:","\u{1F4DA}":":books:","\u{1F516}":":bookmark:","\u{1F4DB}":":name_badge:","\u{1F52C}":":microscope:","\u{1F52D}":":telescope:","\u{1F4F0}":":newspaper:","\u{1F3C8}":":football:","\u{1F3C0}":":basketball:","\u26BD":":soccer:","\u26BE":":baseball:","\u{1F3BE}":":tennis:","\u{1F3B1}":":8ball:","\u{1F3C9}":":rugby_football:","\u{1F3B3}":":bowling:","\u26F3":":golf:","\u{1F6B5}":":mountain_bicyclist:","\u{1F6B4}":":bicyclist:","\u{1F3C7}":":horse_racing:","\u{1F3C2}":":snowboarder:","\u{1F3CA}":":swimmer:","\u{1F3C4}":":surfer:","\u{1F3BF}":":ski:","\u2660\uFE0F":":spades:","\u2665\uFE0F":":hearts:","\u2663\uFE0F":":clubs:","\u2666\uFE0F":":diamonds:","\u{1F48E}":":gem:","\u{1F48D}":":ring:","\u{1F3C6}":":trophy:","\u{1F3BC}":":musical_score:","\u{1F3B9}":":musical_keyboard:","\u{1F3BB}":":violin:","\u{1F47E}":":space_invader:","\u{1F3AE}":":video_game:","\u{1F0CF}":":black_joker:","\u{1F3B4}":":flower_playing_cards:","\u{1F3B2}":":game_die:","\u{1F3AF}":":dart:","\u{1F004}":":mahjong:","\u{1F3AC}":":clapper:","\u{1F4DD}":":pencil:","\u{1F4D6}":":book:","\u{1F3A8}":":art:","\u{1F3A4}":":microphone:","\u{1F3A7}":":headphones:","\u{1F3BA}":":trumpet:","\u{1F3B7}":":saxophone:","\u{1F3B8}":":guitar:","\u{1F45E}":":mans_shoe:","\u{1F461}":":sandal:","\u{1F460}":":high_heel:","\u{1F484}":":lipstick:","\u{1F462}":":boot:","\u{1F455}":":tshirt:","\u{1F454}":":necktie:","\u{1F45A}":":womans_clothes:","\u{1F457}":":dress:","\u{1F3BD}":":running_shirt_with_sash:","\u{1F456}":":jeans:","\u{1F458}":":kimono:","\u{1F459}":":bikini:","\u{1F380}":":ribbon:","\u{1F3A9}":":tophat:","\u{1F451}":":crown:","\u{1F452}":":womans_hat:","\u{1F302}":":closed_umbrella:","\u{1F4BC}":":briefcase:","\u{1F45C}":":handbag:","\u{1F45D}":":pouch:","\u{1F45B}":":purse:","\u{1F453}":":eyeglasses:","\u{1F3A3}":":fishing_pole_and_fish:","\u2615":":coffee:","\u{1F375}":":tea:","\u{1F376}":":sake:","\u{1F37C}":":baby_bottle:","\u{1F37A}":":beer:","\u{1F37B}":":beers:","\u{1F378}":":cocktail:","\u{1F379}":":tropical_drink:","\u{1F377}":":wine_glass:","\u{1F374}":":fork_and_knife:","\u{1F355}":":pizza:","\u{1F354}":":hamburger:","\u{1F35F}":":fries:","\u{1F357}":":poultry_leg:","\u{1F356}":":meat_on_bone:","\u{1F35D}":":spaghetti:","\u{1F35B}":":curry:","\u{1F364}":":fried_shrimp:","\u{1F371}":":bento:","\u{1F363}":":sushi:","\u{1F365}":":fish_cake:","\u{1F359}":":rice_ball:","\u{1F358}":":rice_cracker:","\u{1F35A}":":rice:","\u{1F35C}":":ramen:","\u{1F372}":":stew:","\u{1F362}":":oden:","\u{1F361}":":dango:","\u{1F95A}":":egg:","\u{1F35E}":":bread:","\u{1F369}":":doughnut:","\u{1F36E}":":custard:","\u{1F366}":":icecream:","\u{1F368}":":ice_cream:","\u{1F367}":":shaved_ice:","\u{1F382}":":birthday:","\u{1F370}":":cake:","\u{1F36A}":":cookie:","\u{1F36B}":":chocolate_bar:","\u{1F36C}":":candy:","\u{1F36D}":":lollipop:","\u{1F36F}":":honey_pot:","\u{1F34E}":":apple:","\u{1F34F}":":green_apple:","\u{1F34A}":":tangerine:","\u{1F34B}":":lemon:","\u{1F352}":":cherries:","\u{1F347}":":grapes:","\u{1F349}":":watermelon:","\u{1F353}":":strawberry:","\u{1F351}":":peach:","\u{1F348}":":melon:","\u{1F34C}":":banana:","\u{1F350}":":pear:","\u{1F34D}":":pineapple:","\u{1F360}":":sweet_potato:","\u{1F346}":":eggplant:","\u{1F345}":":tomato:","\u{1F33D}":":corn:"},Places:{"\u{1F3E0}":":house:","\u{1F3E1}":":house_with_garden:","\u{1F3EB}":":school:","\u{1F3E2}":":office:","\u{1F3E3}":":post_office:","\u{1F3E5}":":hospital:","\u{1F3E6}":":bank:","\u{1F3EA}":":convenience_store:","\u{1F3E9}":":love_hotel:","\u{1F3E8}":":hotel:","\u{1F492}":":wedding:","\u26EA":":church:","\u{1F3EC}":":department_store:","\u{1F3E4}":":european_post_office:","\u{1F307}":":city_sunrise:","\u{1F306}":":city_sunset:","\u{1F3EF}":":japanese_castle:","\u{1F3F0}":":european_castle:","\u26FA":":tent:","\u{1F3ED}":":factory:","\u{1F5FC}":":tokyo_tower:","\u{1F5FE}":":japan:","\u{1F5FB}":":mount_fuji:","\u{1F304}":":sunrise_over_mountains:","\u{1F305}":":sunrise:","\u{1F320}":":stars:","\u{1F5FD}":":statue_of_liberty:","\u{1F309}":":bridge_at_night:","\u{1F3A0}":":carousel_horse:","\u{1F308}":":rainbow:","\u{1F3A1}":":ferris_wheel:","\u26F2":":fountain:","\u{1F3A2}":":roller_coaster:","\u{1F6A2}":":ship:","\u{1F6A4}":":speedboat:","\u26F5":":sailboat:","\u{1F6A3}":":rowboat:","\u2693":":anchor:","\u{1F680}":":rocket:","\u2708\uFE0F":":airplane:","\u{1F681}":":helicopter:","\u{1F682}":":steam_locomotive:","\u{1F68A}":":tram:","\u{1F69E}":":mountain_railway:","\u{1F6B2}":":bike:","\u{1F6A1}":":aerial_tramway:","\u{1F69F}":":suspension_railway:","\u{1F6A0}":":mountain_cableway:","\u{1F69C}":":tractor:","\u{1F699}":":blue_car:","\u{1F698}":":oncoming_automobile:","\u{1F697}":":red_car:","\u{1F695}":":taxi:","\u{1F696}":":oncoming_taxi:","\u{1F69B}":":articulated_lorry:","\u{1F68C}":":bus:","\u{1F68D}":":oncoming_bus:","\u{1F6A8}":":rotating_light:","\u{1F693}":":police_car:","\u{1F694}":":oncoming_police_car:","\u{1F692}":":fire_engine:","\u{1F691}":":ambulance:","\u{1F690}":":minibus:","\u{1F69A}":":truck:","\u{1F68B}":":train:","\u{1F689}":":station:","\u{1F686}":":train2:","\u{1F685}":":bullettrain_front:","\u{1F684}":":bullettrain_side:","\u{1F688}":":light_rail:","\u{1F69D}":":monorail:","\u{1F683}":":railway_car:","\u{1F68E}":":trolleybus:","\u{1F3AB}":":ticket:","\u26FD":":fuelpump:","\u{1F6A6}":":vertical_traffic_light:","\u{1F6A5}":":traffic_light:","\u26A0\uFE0F":":warning:","\u{1F6A7}":":construction:","\u{1F530}":":beginner:","\u{1F3E7}":":atm:","\u{1F3B0}":":slot_machine:","\u{1F68F}":":busstop:","\u{1F488}":":barber:","\u2668\uFE0F":":hotsprings:","\u{1F3C1}":":checkered_flag:","\u{1F38C}":":crossed_flags:","\u{1F3EE}":":izakaya_lantern:","\u{1F5FF}":":moyai:","\u{1F3AA}":":circus_tent:","\u{1F3AD}":":performing_arts:","\u{1F4CD}":":round_pushpin:","\u{1F6A9}":":triangular_flag_on_post:","\u{1F1EF}\u{1F1F5}":":jp:","\u{1F1F0}\u{1F1F7}":":kr:","\u{1F1E8}\u{1F1F3}":":cn:","\u{1F1FA}\u{1F1F8}":":us:","\u{1F1EB}\u{1F1F7}":":fr:","\u{1F1EA}\u{1F1F8}":":es:","\u{1F1EE}\u{1F1F9}":":it:","\u{1F1F7}\u{1F1FA}":":ru:","\u{1F1EC}\u{1F1E7}":":uk:","\u{1F1E9}\u{1F1EA}":":de:"},Symbols:{"1\uFE0F\u20E3":":one:","2\uFE0F\u20E3":":two:","3\uFE0F\u20E3":":three:","4\uFE0F\u20E3":":four:","5\uFE0F\u20E3":":five:","6\uFE0F\u20E3":":six:","7\uFE0F\u20E3":":seven:","8\uFE0F\u20E3":":eight:","9\uFE0F\u20E3":":nine:","\u{1F51F}":":keycap_ten:","\u{1F522}":":1234:","0\uFE0F\u20E3":":zero:","#\uFE0F\u20E3":":hash:","\u{1F523}":":symbols:","\u25C0\uFE0F":":arrow_backward:","\u2B07\uFE0F":":arrow_down:","\u25B6\uFE0F":":arrow_forward:","\u2B05\uFE0F":":arrow_left:","\u{1F520}":":capital_abcd:","\u{1F521}":":abcd:","\u{1F524}":":abc:","\u2199\uFE0F":":arrow_lower_left:","\u2198\uFE0F":":arrow_lower_right:","\u27A1\uFE0F":":arrow_right:","\u2B06\uFE0F":":arrow_up:","\u2196\uFE0F":":arrow_upper_left:","\u2197\uFE0F":":arrow_upper_right:","\u23EC":":arrow_double_down:","\u23EB":":arrow_double_up:","\u{1F53D}":":arrow_down_small:","\u2935\uFE0F":":arrow_heading_down:","\u2934\uFE0F":":arrow_heading_up:","\u21A9\uFE0F":":leftwards_arrow_with_hook:","\u21AA\uFE0F":":arrow_right_hook:","\u2194\uFE0F":":left_right_arrow:","\u2195\uFE0F":":arrow_up_down:","\u{1F53C}":":arrow_up_small:","\u{1F503}":":arrows_clockwise:","\u{1F504}":":arrows_counterclockwise:","\u23EA":":rewind:","\u23E9":":fast_forward:","\u2139\uFE0F":":information_source:","\u{1F197}":":ok:","\u{1F500}":":twisted_rightwards_arrows:","\u{1F501}":":repeat:","\u{1F502}":":repeat_one:","\u{1F195}":":new:","\u{1F51D}":":top:","\u{1F199}":":up:","\u{1F192}":":cool:","\u{1F193}":":free:","\u{1F196}":":ng:","\u{1F3A6}":":cinema:","\u{1F201}":":koko:","\u{1F4F6}":":signal_strength:","\u{1F239}":":u5272:","\u{1F234}":":u5408:","\u{1F23A}":":u55b6:","\u{1F22F}":":u6307:","\u{1F237}\uFE0F":":u6708:","\u{1F236}":":u6709:","\u{1F235}":":u6e80:","\u{1F21A}":":u7121:","\u{1F238}":":u7533:","\u{1F233}":":u7a7a:","\u{1F232}":":u7981:","\u{1F202}\uFE0F":":sa:","\u{1F6BB}":":restroom:","\u{1F6B9}":":mens:","\u{1F6BA}":":womens:","\u{1F6BC}":":baby_symbol:","\u{1F6AD}":":no_smoking:","\u{1F17F}\uFE0F":":parking:","\u267F":":wheelchair:","\u{1F687}":":metro:","\u{1F6C4}":":baggage_claim:","\u{1F251}":":accept:","\u{1F6BE}":":wc:","\u{1F6B0}":":potable_water:","\u{1F6AE}":":put_litter_in_its_place:","\u3299\uFE0F":":secret:","\u3297\uFE0F":":congratulations:","\u24C2\uFE0F":":m:","\u{1F6C2}":":passport_control:","\u{1F6C5}":":left_luggage:","\u{1F6C3}":":customs:","\u{1F250}":":ideograph_advantage:","\u{1F191}":":cl:","\u{1F198}":":sos:","\u{1F194}":":id:","\u{1F6AB}":":no_entry_sign:","\u{1F51E}":":underage:","\u{1F4F5}":":no_mobile_phones:","\u{1F6AF}":":do_not_litter:","\u{1F6B1}":":non-potable_water:","\u{1F6B3}":":no_bicycles:","\u{1F6B7}":":no_pedestrians:","\u{1F6B8}":":children_crossing:","\u26D4":":no_entry:","\u2733\uFE0F":":eight_spoked_asterisk:","\u2734\uFE0F":":eight_pointed_black_star:","\u{1F49F}":":heart_decoration:","\u{1F19A}":":vs:","\u{1F4F3}":":vibration_mode:","\u{1F4F4}":":mobile_phone_off:","\u{1F4B9}":":chart:","\u{1F4B1}":":currency_exchange:","\u2648":":aries:","\u2649":":taurus:","\u264A":":gemini:","\u264B":":cancer:","\u264C":":leo:","\u264D":":virgo:","\u264E":":libra:","\u264F":":scorpius:","\u2650":":sagittarius:","\u2651":":capricorn:","\u2652":":aquarius:","\u2653":":pisces:","\u26CE":":ophiuchus:","\u{1F52F}":":six_pointed_star:","\u274E":":negative_squared_cross_mark:","\u{1F170}\uFE0F":":a:","\u{1F171}\uFE0F":":b:","\u{1F18E}":":ab:","\u{1F17E}\uFE0F":":o2:","\u{1F4A0}":":diamond_shape_with_a_dot_inside:","\u267B\uFE0F":":recycle:","\u{1F51A}":":end:","\u{1F51B}":":on:","\u{1F51C}":":soon:","\u{1F550}":":clock1:","\u{1F55C}":":clock130:","\u{1F559}":":clock10:","\u{1F565}":":clock1030:","\u{1F55A}":":clock11:","\u{1F566}":":clock1130:","\u{1F55B}":":clock12:","\u{1F567}":":clock1230:","\u{1F551}":":clock2:","\u{1F55D}":":clock230:","\u{1F552}":":clock3:","\u{1F55E}":":clock330:","\u{1F553}":":clock4:","\u{1F55F}":":clock430:","\u{1F554}":":clock5:","\u{1F560}":":clock530:","\u{1F555}":":clock6:","\u{1F561}":":clock630:","\u{1F556}":":clock7:","\u{1F562}":":clock730:","\u{1F557}":":clock8:","\u{1F563}":":clock830:","\u{1F558}":":clock9:","\u{1F564}":":clock930:","\u{1F4B2}":":heavy_dollar_sign:","\xA9\uFE0F":":copyright:","\xAE\uFE0F":":registered:","\u2122\uFE0F":":tm:","\u274C":":x:","\u2757":":heavy_exclamation_mark:","\u203C\uFE0F":":bangbang:","\u2049\uFE0F":":interrobang:","\u2B55":":o:","\u2716\uFE0F":":heavy_multiplication_x:","\u2795":":heavy_plus_sign:","\u2796":":heavy_minus_sign:","\u2797":":heavy_division_sign:","\u{1F4AE}":":white_flower:","\u{1F4AF}":":100:","\u2714\uFE0F":":heavy_check_mark:","\u2611\uFE0F":":ballot_box_with_check:","\u{1F518}":":radio_button:","\u{1F517}":":link:","\u27B0":":curly_loop:","\u3030\uFE0F":":wavy_dash:","\u303D\uFE0F":":part_alternation_mark:","\u{1F531}":":trident:","\u2705":":white_check_mark:","\u{1F532}":":black_square_button:","\u{1F533}":":white_square_button:","\u26AB":":black_circle:","\u26AA":":white_circle:","\u{1F534}":":red_circle:","\u{1F535}":":large_blue_circle:","\u{1F537}":":large_blue_diamond:","\u{1F536}":":large_orange_diamond:","\u{1F539}":":small_blue_diamond:","\u{1F538}":":small_orange_diamond:","\u{1F53A}":":small_red_triangle:","\u{1F53B}":":small_red_triangle_down:"}};var C={emojis:be};const q=[C.emojis.People,C.emojis.Objects].reduce((e,t)=>e.concat(Object.keys(t)),[]);function $(){const e=Math.floor(Math.random()*q.length);return q[e]}const ke={class:"bg-black text-white text-opacity-75 py-4 space-y-4 font-display"},we=r("nav",{class:"grid grid-cols-5 container"},[r("div",{class:"flex flex-col"},[r("a",{role:"link","aria-disabled":"true"},"Lorem"),r("a",{role:"link","aria-disabled":"true"},"ipsum"),r("a",{role:"link","aria-disabled":"true"},"dolor,"),r("a",{role:"link","aria-disabled":"true"},"sit"),r("a",{role:"link","aria-disabled":"true"},"amet")]),r("div",{class:"flex flex-col"},[r("a",{role:"link","aria-disabled":"true"},"consectetur"),r("a",{role:"link","aria-disabled":"true"},"adipisicing"),r("a",{role:"link","aria-disabled":"true"},"elit."),r("a",{role:"link","aria-disabled":"true"},"Ducimus"),r("a",{role:"link","aria-disabled":"true"},"nesciunt")]),r("div",{class:"flex flex-col"},[r("a",{role:"link","aria-disabled":"true"},"sint"),r("a",{role:"link","aria-disabled":"true"},"deserunt"),r("a",{role:"link","aria-disabled":"true"},"natus"),r("a",{role:"link","aria-disabled":"true"},"alias"),r("a",{role:"link","aria-disabled":"true"},"aspernatur?")])],-1),ye={class:"text-center"},ve=w({setup(e){return(t,s)=>(_(),h("footer",ke,[we,r("p",ye," made with nestjs, vuejs, and "+b(n($)())+" "+b(n($)())+" "+b(n($)()),1)]))}}),xe=P("notifications",{state:()=>({notifications:[]}),actions:{create({text:e,type:t="default",autoRemove:s=!0}){const o={text:e,type:t,id:Z()};this.notifications.push(o),s&&window.setTimeout(()=>this.remove(o.id),1e4)},remove(e){const t=this.notifications.findIndex(s=>s.id===e);t>=0&&this.notifications.splice(t,1)}}}),Ee={class:"w-80 fixed left-1/2 top-4 -translate-x-1/2 space-y-2"},$e={class:"block"},Le=["onClick"],je=w({setup(e){const t=xe();return(s,o)=>(_(),k(Y,{to:"body"},[r("div",Ee,[(_(!0),h(v,null,M(n(t).notifications,a=>(_(),h("div",{key:a.id,class:W(["w-full px-6 py-3 flex justify-between bg-opacity-75",{"bg-white text-black":a.type==="default"}])},[r("span",$e,b(a.text),1),r("button",{onClick:i=>n(t).remove(a.id)},[l(n(K),{class:"w-5 h-5"})],8,Le)],2))),128))])]))}}),Ae={class:"flex flex-col min-h-screen"},Ce={class:"font-body bg-dark text-white grow flex"},qe={class:"container py-6"},Re=w({setup(e){const t=y();return J(()=>console.log(t.user)),(s,o)=>{const a=O("RouterView");return _(),h(v,null,[l(je),r("div",Ae,[l(fe,{class:"shrink-0"}),r("main",Ce,[r("div",qe,[l(a),L("",!0)])]),l(ve,{class:"shrink-0"})])],64)}}}),Pe="modulepreload",R={},Oe="/",m=function(t,s){return!s||s.length===0?t():Promise.all(s.map(o=>{if(o=`${Oe}${o}`,o in R)return;R[o]=!0;const a=o.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":Pe,a||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),a)return new Promise((f,E)=>{c.addEventListener("load",f),c.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},Se={};function De(e,t){return _(),h("h1",null,"Home page")}var Ie=S(Se,[["render",De]]);const Ne=[{name:"all",path:"/:all(.*)*",component:()=>m(()=>import("./_...all_.0c592994.js"),["assets/_...all_.0c592994.js","assets/AppRuler.250b1999.js","assets/vendor.8a8b2f57.js","assets/AppButton.bc548f7b.js"]),props:!0},{name:"index",path:"/",component:Ie,props:!0},{name:"certificates-create",path:"/certificates/create",component:()=>m(()=>import("./create.bd934357.js"),["assets/create.bd934357.js","assets/vendor.8a8b2f57.js","assets/AppInput.1ec8fca3.js","assets/AppButton.bc548f7b.js","assets/route-block.b5bad31b.js"]),props:!0,meta:{requiresAuth:!0}},{name:"certificates",path:"/certificates",component:()=>m(()=>import("./index.bacef423.js"),["assets/index.bacef423.js","assets/AppButton.bc548f7b.js","assets/vendor.8a8b2f57.js","assets/route-block.b5bad31b.js","assets/index.7bbc5099.js"]),props:!0,meta:{requiresAuth:"hr"}},{name:"login",path:"/login",component:()=>m(()=>import("./index.b118a309.js"),["assets/index.b118a309.js","assets/vendor.8a8b2f57.js","assets/AppInput.1ec8fca3.js","assets/AppButton.bc548f7b.js","assets/AppRuler.250b1999.js","assets/route-block.b5bad31b.js"]),props:!0,meta:{requiresGuest:!0}},{name:"profile",path:"/profile",component:()=>m(()=>import("./index.8ba189a7.js"),["assets/index.8ba189a7.js","assets/AppButton.bc548f7b.js","assets/vendor.8a8b2f57.js","assets/AppRuler.250b1999.js","assets/route-block.b5bad31b.js","assets/index.7bbc5099.js","assets/TrashIcon.17290f99.js"]),props:!0,meta:{requiresAuth:!0}},{name:"register",path:"/register",component:()=>m(()=>import("./index.d58e5619.js"),["assets/index.d58e5619.js","assets/vendor.8a8b2f57.js","assets/AppInput.1ec8fca3.js","assets/AppSelect.c8a9a386.js","assets/AppButton.bc548f7b.js","assets/route-block.b5bad31b.js"]),props:!0,meta:{requiresGuest:!0}},{name:"users",path:"/users",component:()=>m(()=>import("./index.b5ff3f4a.js"),["assets/index.b5ff3f4a.js","assets/AppSelect.c8a9a386.js","assets/vendor.8a8b2f57.js","assets/route-block.b5bad31b.js","assets/TrashIcon.17290f99.js"]),props:!0,meta:{requiresAuth:"admin"}}],x=Q({routes:Ne,history:X("/")});x.beforeEach(async()=>{const e=y();e.initialLoadFinished||await e.tryLoggingIn()});x.beforeEach(e=>{var s;const t=y();if(e.meta.requiresAuth&&!j((s=t.user)==null?void 0:s.role,e.meta.requiresAuth))return`/login?backurl=${e.path}`});x.beforeEach((e,t)=>{const s=y();if(e.meta.requiresGuest&&s.user)return t.name?t.fullPath:"/"});const Te=ee();te(Re).use(x).use(Te).mount("#app");export{A as R,Ve as a,xe as b,Ue as c,He as d,Fe as e,Be as f,We as g,Ge as h,Ze as i,Me as j,Ke as l,Ye as r,y as u};
