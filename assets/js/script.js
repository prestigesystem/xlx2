(function () {
    "use strict";

    var LANG_STORAGE_KEY = "ps_lang";
    var currentLang = "en";
    var onLangChangeHooks = [];

    var I18N = {
        en: {
            nav_features: "Features",
            nav_showcase: "Showcase",
            nav_preview: "Live Menu",
            nav_pricing: "Plans",
            nav_faq: "FAQ",
            nav_plans: "Plans",
            aria_mobile_menu: "Open menu",

            hero_kicker: "Prestige External RobRun Cheat",
            hero_title_html: "See clearer.<br><span>Play calmer.</span>",
            hero_sub: "Engineered natively for RobRun with zero visual clutter. Only the tools you actually rely on, right where you expect them.",
            hero_cta_plans: "View Plans",
            hero_cta_preview: "Try Live Menu",
            hero_spec_1: "Blatant Hours",
            hero_spec_2: "Proven Bans",
            hero_spec_3: "64-Bit Native",

            feat_eyebrow: "Capabilities",
            feat_title: "Full awareness without screen clutter.",
            feat_desc: "Designed so you can read every encounter immediately without digging through complicated settings.",
            feat_1_t: "Player Tracking",
            feat_1_d: "Corner boxes, full bone skeletons, chams, distance, and role tags let you identify everyone around you at a glance.",
            feat_2_t: "Precision Aimbot",
            feat_2_d: "Adjustable FOV radius, natural smoothing curves, bone selection, and line-of-sight wall checks match your muscle memory.",
            feat_3_t: "Raid & Loot Filter",
            feat_3_d: "Pinpoint cash stacks, master-key house safes, fuse boxes, containers, and dropped loot filtered by rarity tier.",
            feat_4_t: "2D Tactical Radar",
            feat_4_d: "Aligns cleanly over the in-game minimap and rotates in real time with your view angle for instant spatial awareness.",
            feat_5_t: "Custom Profiles",
            feat_5_d: "Fine-tune every color swatch, distance limit, and keybind to your preference, then save and reload anytime.",
            feat_6_t: "Friend Protection",
            feat_6_d: "Highlights added friends, clanmates, and officers in purple while preventing aimbot from ever locking onto them.",

            proof_badge: "The Prestige Difference",
            proof_title: "Proven in live matches. Zero bans.",
            proof_desc: "Our 4-person developer team has been playing blatantly every day for over 2 weeks—logging 400+ combined live hours with 0 proven bans.",
            proof_m1_l: "Combined Hours",
            proof_m2_l: "Proven Bans",
            proof_m3_l: "Developer Team",
            proof_m4_v: "2+ Wks",
            proof_m4_l: "Blatant Gameplay",

            show_eyebrow: "Showcase",
            show_title: "See it live in-game.",
            show_desc: "Unedited 1080p 60fps RobRun gameplay showing player chams, raid & cash tracking, and smooth target acquisition.",
            show_chrome_lbl: "PRESTIGE · IN-GAME CAPTURE",
            show_aria_player: "In-game showcase video",
            show_aria_play: "Play or pause video",
            show_aria_mute: "Mute or unmute audio",
            show_aria_fs: "Toggle fullscreen",

            prev_eyebrow: "Live Menu",
            prev_title: "Test the interface yourself.",
            prev_desc: "An exact 1:1 interactive replica of the in-app overlay menu. Switch tabs and test every control live.",
            prev_bar_label: "Interactive Menu Preview",
            prev_intro_btn: "Welcome Animation",
            prev_reset_btn: "Reset",
            prev_closed_msg: "Menu preview was closed.",
            prev_reopen_btn: "Reopen Menu (F1)",

            pm_pill_title: "toggle live status preview",
            pm_save: "save",
            pm_load: "load",
            pm_close_aria: "close menu",
            pm_close_title: "close (esc)",

            pm_tab_esp: "esp",
            pm_tab_loot: "items & loot",
            pm_tab_aim: "aimbot",
            pm_tab_radar: "radar",
            pm_tab_colors: "colors",
            pm_tab_settings: "settings",

            pm_esp_h: "esp settings",
            pm_esp_p: "manage player visuals, chams, glow, info labels, and vehicle visibility from one place.",
            pm_esp_vis_h: "visibility & filters",
            pm_m1_t: "esp master toggle",
            pm_m1_d: "enables or disables all visual esp layers",
            pm_m2_t: "friend esp",
            pm_m2_d: "renders added friends in purple",
            pm_m3_t: "clan teammates",
            pm_m3_d: "renders clan members in purple",
            pm_m4_t: "police teammates",
            pm_m4_d: "renders fellow police officers in purple",
            pm_m5_t: "show local player",
            pm_role_crim: "criminal (red)",
            pm_role_cop: "police (blue)",
            pm_role_civ: "civilian (light green)",
            pm_role_friend: "friend / clan / ally cop (purple)",

            pm_esp_draw_h: "player visuals",
            pm_m6_t: "corner box (box esp)",
            pm_m6_d: "outlined box in role or friend color",
            pm_m7_t: "skeleton",
            pm_m7_d: "full bone skeleton in role or friend color",
            pm_m8_t: "head dot",
            pm_m9_t: "downed indicator",
            pm_m9_d: "toggle marking for downed or knocked players",

            pm_esp_chams_h: "chams & glow",
            pm_m10_t: "player chams",
            pm_m10_d: "fills character silhouette with solid role/friend color",
            pm_m11_t: "chams glow",
            pm_m11_d: "adds a soft outer outline glow around chams",
            pm_glow_clr: "glow color",
            pm_m12_t: "glow thickness",
            pm_m13_t: "chams opacity",

            pm_esp_info_h: "info labels",
            pm_m14_t: "player name & role",
            pm_m14_d: "name and top role tag (police, criminal, civilian, friend)",
            pm_m15_t: "in-vehicle tag",
            pm_m15_d: "displays \"in car\" above mounted players",
            pm_m16_t: "held weapon",
            pm_m17_t: "distance readout",
            pm_m18_t: "armor bar",
            pm_m19_t: "crouch status",
            pm_m20_t: "health (hp)",
            pm_m20_d: "shown only for your local character",

            pm_esp_veh_h: "vehicles",
            pm_m21_t: "vehicle chams",
            pm_m21_d: "automatically hidden on the vehicle you occupy",
            pm_m22_t: "vehicle labels",
            pm_m23_t: "occupant count",
            pm_m23_d: "shows passenger count when seat data is readable",

            pm_esp_dist_h: "distance & stroke",
            pm_m24_t: "max esp distance",
            pm_m25_t: "skeleton render distance",
            pm_m26_t: "line thickness",

            pm_loot_h: "items & loot",
            pm_loot_p: "filter raid search targets (cash stacks, master key house safes, fuse check) and world loot nodes.",
            pm_loot_world_h: "world objects",
            pm_m27_t: "raid search",
            pm_m27_d: "cash stacks ($), master key indoor house safes, and fuse box check (extra fuse on/off)",
            pm_m28_t: "ground items",
            pm_m29_t: "loot nodes",
            pm_m30_t: "chests & containers",
            pm_m31_t: "doors",
            pm_m32_t: "dropped bags (drop)",
            pm_m33_t: "vehicle trunk loot",
            pm_loot_rarity_h: "rarity filter",
            pm_m34: "none",
            pm_m35: "common",
            pm_m36: "uncommon",
            pm_m37: "rare",
            pm_m38: "epic",
            pm_m39: "legendary",
            pm_m40: "exotic",
            pm_loot_note: "disabled tiers are hidden for both ground items and loot nodes.",

            pm_aim_h: "aimbot (aim assist)",
            pm_aim_p: "provides smooth aim assistance onto live targets inside your fov circle. ignores downed, dead, and friended players.",
            pm_aim_rules_h: "targeting rules",
            pm_m41_t: "aimbot enabled",
            pm_m41_d: "hold the assigned key to lock on",
            pm_m42_t: "show fov circle",
            pm_m43_t: "line of sight check (los)",
            pm_m43_d: "ignores targets behind walls and obstacles",
            pm_m44_t: "closest target first",
            pm_m45_t: "target clan members",
            pm_m46_t: "target police squad",
            pm_m47_t: "target civilians (outside lootbay)",
            pm_m47_d: "locks civilians near houses/plots; skips inside lootbay",
            pm_aim_los_lbl: "collision data (los)",

            pm_aim_cfg_h: "aimbot settings",
            pm_m48_t: "target bone",
            pm_m48_d: "best joint inside the chosen zone",
            pm_m48_0: "head",
            pm_m48_1: "neck & shoulders",
            pm_m48_2: "chest & torso",
            pm_m48_3: "pelvis & hips",
            pm_m48_4: "nearest joint (auto)",
            pm_m48_5: "arms",
            pm_m48_6: "legs",
            pm_m48_7: "face",
            pm_m48_8: "hands",
            pm_m48_9: "feet",
            pm_aim_key_lbl: "aim key",
            pm_m49_t: "fov radius",
            pm_m50_t: "smoothing",
            pm_m51_t: "max aim distance",

            pm_friends_h: "friend list (aimbot safe & purple esp)",
            pm_friend_ph: "enter player's in-game username...",
            pm_friend_add_btn: "add friend",
            pm_nearby_lbl: "nearby players (click to add)",
            pm_friends_added_lbl: "added friends",
            pm_friends_note: "aimbot will never lock onto players listed here; boxes, skeletons, and chams render them in solid purple.",

            pm_radar_h: "2d radar",
            pm_radar_p: "top-down radar aligned over the top-left minimap that rotates smoothly with your camera direction.",
            pm_radar_cfg_h: "radar settings",
            pm_m52_t: "show mini radar",
            pm_m53_t: "show world objects",
            pm_m53_d: "items, chests, doors, and vehicles",
            pm_m54_t: "radar range",
            pm_radar_note: "the center dot marks your position; downed or knocked players appear as hollow rings.",
            pm_radar_leg_h: "color key",
            pm_leg_1: "friend / clan / squad cop",
            pm_leg_2: "police",
            pm_leg_3: "criminal",
            pm_leg_4: "civilian",
            pm_leg_5: "raid: cash stack ($)",
            pm_leg_6: "raid: house safe (master key)",
            pm_leg_7: "raid: fuse box",
            pm_leg_8: "ground item",
            pm_leg_9: "loot node",
            pm_leg_10: "container",
            pm_leg_11: "door",
            pm_leg_12: "dropped bag",
            pm_leg_13: "trunk loot",
            pm_leg_14: "vehicle",
            pm_radar_leg_note: "esp visibility filters also apply to the radar.",

            pm_colors_h: "color customization",
            pm_colors_p: "customize chams glow and text label colors. role and friend colors (criminal red, police blue, civilian light green, friend purple) remain fixed.",
            pm_colors_g_h: "chams glow & state colors",
            pm_c3: "chams glow color",
            pm_c2: "downed indicator",
            pm_c1: "unknown role (fallback)",
            pm_colors_l_h: "label & crosshair colors",
            pm_c4: "player name",
            pm_c5: "weapon label",
            pm_c6: "distance text",
            pm_c7: "armor tag",
            pm_c8: "aimbot fov circle",

            pm_set_h: "settings",
            pm_set_sp_h: "stream proof",
            pm_m55_t: "stream proof",
            pm_set_lic_h: "license",
            pm_lic_owner_lbl: "license owner",
            pm_lic_rem_lbl: "time remaining",
            pm_lic_d_u: "d",
            pm_lic_h_u: "h",
            pm_lic_m_u: "m",
            pm_lic_s_u: "s",
            pm_set_keys_h: "menu & system hotkeys",
            pm_key_menu_lbl: "menu toggle key",
            pm_key_esp_t: "quick esp toggle",
            pm_key_esp_d: "instantly hides or restores all drawings",
            pm_key_exit_t: "safe unload (exit)",
            pm_key_exit_d: "cleanly terminates the overlay process",
            pm_set_note: "click save in the top-right corner to store your configuration.",
            pm_set_lang_h: "language",
            pm_set_lang_t: "menu language",
            pm_set_lang_d: "choose menu interface language",

            pm_set_danger_h: "uninstall & cleanup",
            pm_rm_title: "completely remove",
            pm_rm_desc: "permanently deletes cheat, settings, logs, caches and all files",
            pm_rm_btn: "completely remove",
            pm_rm_prompt: "all files will be deleted, are you sure?",
            pm_rm_confirm: "yes, delete all",
            pm_rm_cancel: "cancel",
            pm_rm_warn: "warning: this cannot be undone. the cheat and all related files will be permanently removed.",

            pm_preview_lbl: "preview",
            pm_foot_menu: "menu",
            pm_foot_esp: "esp toggle",
            pm_foot_exit: "exit",

            price_eyebrow: "Plans",
            price_title: "Choose the duration that fits your schedule.",
            price_desc: "Every plan unlocks the complete software and all updates with zero feature limits. Choose the duration that suits you.",
            p1_badge: "Weekly",
            p1_name: "1 Week",
            p1_desc: "Ideal for regular sessions backed by active update support.",
            p1_period: "/ 7 days",
            p1_f1_html: "<strong>All features</strong> included",
            p1_f2: "7-day uninterrupted access",
            p1_f3_html: "<strong>Updates</strong> included",
            p1_f4: "Direct Discord support",
            p1_btn: "Purchase — $6.99",

            p2_badge: "Most Popular",
            p2_name: "1 Month",
            p2_desc: "Full month coverage, continuous updates, and complimentary HWID resets.",
            p2_period: "/ 30 days",
            p2_f1_html: "<strong>All features</strong> included",
            p2_f2: "30-day uninterrupted access",
            p2_f3_html: "<strong>Updates</strong> included",
            p2_f4: "Free HWID reset",
            p2_btn: "Purchase — $29.99",

            p4_badge: "Permanent",
            p4_name: "Lifetime",
            p4_desc: "Single one-time payment for permanent access without renewals.",
            p4_period: "/ lifetime",
            p4_f1_html: "<strong>All features</strong> included",
            p4_f2: "Unlimited duration",
            p4_f3_html: "<strong>All updates</strong> included",
            p4_f4: "Free HWID reset",
            p4_btn: "Purchase — $79",

            pay_strip_title: "Payment Methods",
            pay_pill_1: "Binance Gift Card",
            pay_pill_2: "Credit & Debit Card",
            pay_pill_3: "Bank Transfer",

            faq_eyebrow: "FAQ",
            faq_title: "Frequently asked questions.",
            faq_q1: "Are there any feature differences between plans?",
            faq_a1: "No. Every plan unlocks the complete feature suite and all updates without limits. Plans differ strictly by access duration and HWID reset eligibility.",
            faq_q2: "How do I purchase and receive my license?",
            faq_a2: "After selecting your plan, open a ticket in our Discord server at discord.gg/prstg. Once your payment via Binance Gift Card, card, or transfer is confirmed, your key and loader are delivered directly.",
            faq_q3: "Which Windows versions are supported?",
            faq_a3: "Runs smoothly on modern Windows 10 and Windows 11 (64-bit) builds.",
            faq_q4: "What happens if I change or upgrade my PC?",
            faq_a4: "1 Month and Lifetime license holders can request a free HWID reset by opening a support ticket at discord.gg/prstg.",

            cta_eyebrow: "Get Started",
            cta_title: "Ready when you are.",
            cta_desc: "Instant license delivery, regular updates, and direct support through our Discord community.",
            cta_btn_dc: "Join discord.gg/prstg",
            cta_btn_plans: "Compare Plans",

            foot_features: "Features",
            foot_showcase: "Showcase",
            foot_preview: "Live Menu",
            foot_pricing: "Plans",
            foot_faq: "FAQ",

            mod_title: "Order Details",
            mod_tab_discord: "Discord",
            mod_tab_crypto: "Binance Gift Card",
            mod_tab_card: "Card / Transfer",
            mod_dc_desc: "Open a purchase ticket in our Discord server to complete your order. Payment instructions and your license key are delivered directly.",
            mod_lbl_plan: "Selected Plan",
            mod_lbl_amount: "Amount",
            mod_lbl_updates: "Updates",
            mod_cr_desc: "Crypto payments are accepted strictly via Binance Gift Card. Share your gift card code in a Discord ticket for immediate key activation.",
            mod_cr_lbl_method: "Crypto Method",
            mod_cr_val_method: "Binance Gift Card (USDT / USD)",
            mod_cr_lbl_delivery: "Redemption",
            mod_cr_val_delivery: "Zero fee · Instant activation",
            mod_cr_lbl_channel: "Order Channel",
            mod_ca_desc: "You can pay using a credit/debit card or local bank transfer.",
            mod_ca_lbl_channel: "Payment Channel",
            mod_ca_lbl_rate: "Exchange Rate",
            mod_ca_val_rate: "Calculated at live market rate",
            mod_cancel: "Close",
            mod_go_dc: "Open discord.gg/prstg",

            dyn: {
                docTitle: "Prestige External RobRun Cheat — Precision External Suite | Prestige System",
                pillWaiting: "waiting for game",
                pillPlayers: "12 players",
                gameWaiting: "waiting for game...",
                gameAttached: "game attached",
                losReady: "ready",
                losOff: "off",
                smoothZero: "0 (instant)",
                unlimited: "unlimited",
                friendEmpty: "no friends added yet.",
                friendDelTitle: "remove from list",
                friendDelPrefix: "remove ",
                friendDelSuffix: " from friends",
                pressKey: "press a key...",
                toastSaved: "settings saved",
                toastLoaded: "settings loaded",
                toastReset: "default settings loaded",
                toastNeedName: "please enter a player name",
                toastAlreadyFriend: "player is already on the friend list",
                toastFriendFull: "friend list is full",
                toastFriendAdded: "friend added",
                toastFriendRemoved: "friend removed from list",
                toastKeyDisallowed: "this key cannot be bound to the menu",
                lifetime: "lifetime",
                pmRmWorking: "deleting...",
                pmRmToast: "preview mode — uninstall action triggered",
                modalPlanPrefix: "Plan: ",
                defaultPlan: "1 Month",
                defaultUpdates: "All updates included"
            }
        },

        tr: {
            nav_features: "Özellikler",
            nav_showcase: "Önizleme",
            nav_preview: "Canlı Menü",
            nav_pricing: "Paketler",
            nav_faq: "S.S.S.",
            nav_plans: "Paketler",
            aria_mobile_menu: "Menüyü Aç",

            hero_kicker: "Prestige External RobRun Cheat",
            hero_title_html: "Daha net görün.<br><span>Daha sakin oynayın.</span>",
            hero_sub: "Sade arayüzü ve kararlı yapısıyla ekranınızı yormaz. Yalnızca işinize yarayan araçlar, istediğiniz anda elinizin altında.",
            hero_cta_plans: "Paketleri İncele",
            hero_cta_preview: "Canlı Menüyü Dene",
            hero_spec_1: "Blatant Saat",
            hero_spec_2: "Kanıtlanmış Ban",
            hero_spec_3: "64-Bit Native",

            feat_eyebrow: "Özellikler",
            feat_title: "Gereksiz kalabalık olmadan tam kontrol.",
            feat_desc: "Karmaşık ayarlarla uğraşmadan oyunu daha net okuyabilmeniz için tasarlandı.",
            feat_1_t: "Oyuncu Takibi",
            feat_1_d: "Kutu, iskelet, mesafe ve rol ayrımıyla çevrenizdeki herkesi tek bakışta net biçimde ayırt edin.",
            feat_2_t: "Nişan Desteği",
            feat_2_d: "Ayarlanabilir FOV alanı, yumuşak geçişler ve görüş hattı kontrolüyle kendi el alışkanlığınıza uyum sağlar.",
            feat_3_t: "Harita & Eşya Filtresi",
            feat_3_d: "Nakit yığınları, ev kasaları, sigorta kutuları ve yerdeki ganimetleri nadirlik seviyesine göre süzün.",
            feat_4_t: "2D Radar",
            feat_4_d: "Oyun içi mini haritanın üzerine oturan ve bakış yönünüze göre dönen sade radar görünümü sunar.",
            feat_5_t: "Kişisel Düzen",
            feat_5_d: "Renkleri, mesafeleri ve kısayol tuşlarını istediğiniz gibi düzenleyip profilinize kaydedin.",
            feat_6_t: "Arkadaş Koruması",
            feat_6_d: "Eklediğiniz oyuncuları ayrı renkte gösterir ve nişan desteğinin bu kişilere kilitlenmesini engeller.",

            proof_badge: "Prestige Farkı",
            proof_title: "Gerçek oyunda kanıtlandı. Sıfır ban.",
            proof_desc: "4 kişilik geliştirici ekibi olarak 2 haftadır tamamen blatant oynuyoruz. Toplam 400+ saatlik aktif oynanışta kanıtlanmış 0 ban.",
            proof_m1_l: "Toplam Saat",
            proof_m2_l: "Kanıtlanmış Ban",
            proof_m3_l: "Geliştirici Ekip",
            proof_m4_v: "2+ Hafta",
            proof_m4_l: "Blatant Oynanış",

            show_eyebrow: "Önizleme",
            show_title: "Oyun içinde canlı görün.",
            show_desc: "Oyuncu chams, nakit & raid takibi ve yumuşak nişan geçişlerini 1080p 60fps kesintisiz oynanış kaydında izleyin.",
            show_chrome_lbl: "PRESTIGE · OYUN İÇİ KAYIT",
            show_aria_player: "Oyun içi önizleme videosu",
            show_aria_play: "Videoyu oynat veya duraklat",
            show_aria_mute: "Sesi kapat veya aç",
            show_aria_fs: "Tam ekran",

            prev_eyebrow: "Canlı Menü",
            prev_title: "Menüyü kendiniz deneyin.",
            prev_desc: "Uygulamanın içindeki menünün birebir hali. Sekmeleri gezin ve tüm ayarları test edin.",
            prev_bar_label: "İnteraktif Menü Önizlemesi",
            prev_intro_btn: "Giriş Animasyonu",
            prev_reset_btn: "Sıfırla",
            prev_closed_msg: "Menü önizlemesi kapatıldı.",
            prev_reopen_btn: "Menüyü Tekrar Aç (F1)",

            pm_pill_title: "durum önizlemesini değiştir",
            pm_save: "kaydet",
            pm_load: "yükle",
            pm_close_aria: "menüyü kapat",
            pm_close_title: "kapat (esc)",

            pm_tab_esp: "esp",
            pm_tab_loot: "eşyalar & loot",
            pm_tab_aim: "aimbot",
            pm_tab_radar: "radar",
            pm_tab_colors: "renkler",
            pm_tab_settings: "settings",

            pm_esp_h: "esp ayarları",
            pm_esp_p: "oyuncu çizimleri, chams, glow, bilgi etiketleri ve araç görünürlüğünü tek merkezden yönetin.",
            pm_esp_vis_h: "görünürlük & filtreler",
            pm_m1_t: "esp ana anahtarı",
            pm_m1_d: "tüm görsel esp katmanlarını açar veya kapatır",
            pm_m2_t: "arkadaş esp",
            pm_m2_d: "listeye eklenen arkadaşları mor renkte gösterir",
            pm_m3_t: "klan arkadaşları",
            pm_m3_d: "klan üyelerini mor renkte çizer",
            pm_m4_t: "polis arkadaşları",
            pm_m4_d: "polis meslektaşlarını mor renkte çizer",
            pm_m5_t: "kendini göster",
            pm_role_crim: "suçlu (kırmızı)",
            pm_role_cop: "polis (mavi)",
            pm_role_civ: "sivil (açık yeşil)",
            pm_role_friend: "arkadaş / klan / polis dostu (mor)",

            pm_esp_draw_h: "oyuncu çizimleri",
            pm_m6_t: "köşe kutu (box esp)",
            pm_m6_d: "rol ve arkadaş renginde dış hatlı kutu",
            pm_m7_t: "iskelet (skeleton)",
            pm_m7_d: "rol ve arkadaş renginde tam kemik iskeleti",
            pm_m8_t: "kafa noktası",
            pm_m9_t: "down (baygın) işareti",
            pm_m9_d: "baygın veya düşmüş oyuncuların işaretlenmesini aç/kapat",

            pm_esp_chams_h: "chams & glow",
            pm_m10_t: "oyuncu chams",
            pm_m10_d: "karakter gövdesini sabit rol/arkadaş renginde doldurur",
            pm_m11_t: "chams glow",
            pm_m11_d: "chams silüetinin etrafına yumuşak dış parlama ekler",
            pm_glow_clr: "glow rengi",
            pm_m12_t: "glow kalınlığı",
            pm_m13_t: "chams opaklığı",

            pm_esp_info_h: "bilgi etiketleri",
            pm_m14_t: "oyuncu ismi ve rolü",
            pm_m14_d: "isim ve üstte rol etiketi (polis, suçlu, sivil, arkadaş)",
            pm_m15_t: "arabada bilgisi",
            pm_m15_d: "araç içindeki oyuncuların üzerinde \"arabada\" yazar",
            pm_m16_t: "eldeki silah",
            pm_m17_t: "mesafe bilgisi",
            pm_m18_t: "zırh durumu",
            pm_m19_t: "eğilme (crouch)",
            pm_m20_t: "can (hp)",
            pm_m20_d: "yalnızca kendi karakteriniz için görüntülenir",

            pm_esp_veh_h: "araçlar",
            pm_m21_t: "araç chams",
            pm_m21_d: "kendi bindiğiniz araçta otomatik olarak gizlenir",
            pm_m22_t: "araç etiketleri",
            pm_m23_t: "araçtaki kişi sayısı",
            pm_m23_d: "koltuk verisi okunabildiğinde doluluk gösterir",

            pm_esp_dist_h: "mesafe ve kalınlık",
            pm_m24_t: "maksimum esp mesafesi",
            pm_m25_t: "iskelet görünüm mesafesi",
            pm_m26_t: "çizgi kalınlığı",

            pm_loot_h: "eşyalar & loot",
            pm_loot_p: "raid search (para yığınları, master key ev kasaları, sigorta kontrolü) ve haritadaki ganimet noktalarını filtreleyin.",
            pm_loot_world_h: "dünya nesneleri",
            pm_m27_t: "raid search",
            pm_m27_d: "nakit para yığınları ($), master key ile açılan ev içi kasalar ve sigorta kutusu (ek fuse var/yok) kontrolü",
            pm_m28_t: "yerdeki eşyalar",
            pm_m29_t: "ganimet noktaları (node)",
            pm_m30_t: "sandık ve konteynerler",
            pm_m31_t: "kapılar",
            pm_m32_t: "bırakılan çantalar (drop)",
            pm_m33_t: "araç bagaj ganimeti",
            pm_loot_rarity_h: "seviye (rarity) filtresi",
            pm_m34: "seviyesiz",
            pm_m35: "sıradan",
            pm_m36: "sıra dışı",
            pm_m37: "nadir",
            pm_m38: "destansı",
            pm_m39: "efsanevi",
            pm_m40: "egzotik",
            pm_loot_note: "kapatılan seviyeler hem yerdeki eşyalarda hem de ganimet noktalarında gizlenir.",

            pm_aim_h: "aimbot (nişan desteği)",
            pm_aim_p: "fov çemberi içindeki canlı düşmanlara yumuşak nişan desteği sağlar. baygın, ölü ve arkadaş listesindeki oyunculara kilitlenmez.",
            pm_aim_rules_h: "hedefleme kuralları",
            pm_m41_t: "aimbot aktif",
            pm_m41_d: "kilitlenmek için atanan tuşa basılı tutun",
            pm_m42_t: "fov çemberini göster",
            pm_m43_t: "görüş hattı kontrolü (los)",
            pm_m43_d: "duvar ve engellerin arkasındaki hedefleri yoksayar",
            pm_m44_t: "önce en yakın hedef",
            pm_m45_t: "klan üyelerine kilitlen",
            pm_m46_t: "polis ekibine kilitlen",
            pm_m47_t: "sivillere kilitlen (lootbay dışı)",
            pm_m47_d: "ev ve arsa yerlerinde sivillere kilitlenir; lootbay içinde atlar",
            pm_aim_los_lbl: "engel verisi (los)",

            pm_aim_cfg_h: "aimbot ayarları",
            pm_m48_t: "hedef bölge",
            pm_m48_d: "seçilen bölgedeki en uygun eklem",
            pm_m48_0: "kafa",
            pm_m48_1: "boyun ve omuzlar",
            pm_m48_2: "göğüs ve gövde",
            pm_m48_3: "pelvis ve kalça",
            pm_m48_4: "en yakın eklem (otomatik)",
            pm_m48_5: "kollar",
            pm_m48_6: "bacaklar",
            pm_m48_7: "yüz",
            pm_m48_8: "eller",
            pm_m48_9: "ayaklar",
            pm_aim_key_lbl: "kilitlenme tuşu",
            pm_m49_t: "fov yarıçapı",
            pm_m50_t: "yumuşatma (smooth)",
            pm_m51_t: "maksimum aim mesafesi",

            pm_friends_h: "arkadaş listesi (aimbot kilitlemez & mor arkadaş esp)",
            pm_friend_ph: "oyuncunun oyun içi adını yazın...",
            pm_friend_add_btn: "arkadaş ekle",
            pm_nearby_lbl: "yakındaki oyuncular (tıklayarak ekle)",
            pm_friends_added_lbl: "ekli arkadaşlar",
            pm_friends_note: "buraya eklenen oyunculara aimbot kesinlikle kilitlenmez; kutu, iskelet ve chams üzerinde sabit mor renkte çizilirler.",

            pm_radar_h: "2d radar",
            pm_radar_p: "sol üstteki mini haritanın üzerine hizalanan ve baktığınız yöne göre dönen kuş bakışı radar.",
            pm_radar_cfg_h: "radar ayarları",
            pm_m52_t: "mini radarı göster",
            pm_m53_t: "dünya nesnelerini göster",
            pm_m53_d: "eşyalar, sandıklar, kapılar ve araçlar",
            pm_m54_t: "radar menzili",
            pm_radar_note: "merkez nokta sizi temsil eder; baygın veya düşmüş oyuncular içi boş halkalarla gösterilir.",
            pm_radar_leg_h: "sabit renk anahtarı",
            pm_leg_1: "arkadaş / klan / polis ekibi",
            pm_leg_2: "polis",
            pm_leg_3: "suçlu",
            pm_leg_4: "sivil",
            pm_leg_5: "raid: nakit para ($)",
            pm_leg_6: "raid: ev kasası (master key)",
            pm_leg_7: "raid: sigorta kontrolü",
            pm_leg_8: "yerdeki eşya",
            pm_leg_9: "ganimet noktası",
            pm_leg_10: "konteyner",
            pm_leg_11: "kapı",
            pm_leg_12: "bırakılan çanta",
            pm_leg_13: "araç ganimeti",
            pm_leg_14: "araç",
            pm_radar_leg_note: "esp görünürlük filtreleri radar üzerinde de geçerlidir.",

            pm_colors_h: "renk özelleştirme",
            pm_colors_p: "chams glow ve metin etiketlerinin renklerini özelleştirin. rol ve arkadaş renkleri (suçlu kırmızı, polis mavi, sivil açık yeşil, arkadaş/dost mor) sabittir.",
            pm_colors_g_h: "chams glow & durum renkleri",
            pm_c3: "chams glow rengi",
            pm_c2: "baygın (down) etiketi",
            pm_c1: "bilinmeyen rol (yedek)",
            pm_colors_l_h: "etiket & nişangâh renkleri",
            pm_c4: "oyuncu ismi",
            pm_c5: "silah etiketi",
            pm_c6: "mesafe metni",
            pm_c7: "zırh etiketi",
            pm_c8: "aimbot fov çemberi",

            pm_set_h: "settings",
            pm_set_sp_h: "stream proof",
            pm_m55_t: "stream proof",
            pm_set_lic_h: "lisans",
            pm_lic_owner_lbl: "lisans sahibi",
            pm_lic_rem_lbl: "kalan süre",
            pm_lic_d_u: "gün",
            pm_lic_h_u: "sa",
            pm_lic_m_u: "dk",
            pm_lic_s_u: "sn",
            pm_set_keys_h: "menü & sistem kısayolları",
            pm_key_menu_lbl: "menü açma / kapama tuşu",
            pm_key_esp_t: "esp hızlı aç / kapat",
            pm_key_esp_d: "tüm çizimleri anlık gizler veya açar",
            pm_key_exit_t: "tamamen kapat (çıkış)",
            pm_key_exit_d: "overlay işlemini güvenli şekilde sonlandırır",
            pm_set_note: "değişiklikleri kalıcı yapmak için sağ üstteki kaydet butonuna basabilirsiniz.",
            pm_set_lang_h: "dil",
            pm_set_lang_t: "menü dili",
            pm_set_lang_d: "menü arayüz dilini seçin",

            pm_set_danger_h: "kaldırma & temizlik",
            pm_rm_title: "tamamen kaldır",
            pm_rm_desc: "hileyi, ayarları, logları, önbelleği ve tüm dosyalarını kalıcı olarak siler",
            pm_rm_btn: "tamamen kaldır",
            pm_rm_prompt: "tüm dosyalar silinecek, emin misiniz?",
            pm_rm_confirm: "evet, tamamen sil",
            pm_rm_cancel: "iptal",
            pm_rm_warn: "dikkat: bu işlem geri alınamaz. hile ve ilişkili tüm kalıntılar kendisi dahil sistemden tamamen kaldırılacaktır.",

            pm_preview_lbl: "önizleme",
            pm_foot_menu: "menü",
            pm_foot_esp: "esp aç/kapat",
            pm_foot_exit: "çıkış",

            price_eyebrow: "Paketler",
            price_title: "İhtiyacınıza uygun süreyi seçin.",
            price_desc: "Tüm paketlerde yazılımın bütün özellikleri ve güncellemeler eksiksiz olarak sunulur. Fark yalnızca kullanım süresidir.",
            p1_badge: "Haftalık",
            p1_name: "1 Haftalık",
            p1_desc: "Düzenli oynayanlar ve hafta boyu güncel kalmak isteyenler için.",
            p1_period: "/ 7 gün",
            p1_f1_html: "<strong>Tüm özellikler</strong> dahil",
            p1_f2: "7 gün kesintisiz kullanım",
            p1_f3_html: "<strong>Güncellemeler</strong> dahil",
            p1_f4: "Discord üzerinden destek",
            p1_btn: "Satın Al — $6.99",

            p2_badge: "En Çok Tercih Edilen",
            p2_name: "1 Aylık",
            p2_desc: "Uzun dönem kullanım, tam güncelleme desteği ve ücretsiz cihaz değişimi.",
            p2_period: "/ 30 gün",
            p2_f1_html: "<strong>Tüm özellikler</strong> dahil",
            p2_f2: "30 gün kesintisiz kullanım",
            p2_f3_html: "<strong>Güncellemeler</strong> dahil",
            p2_f4: "Ücretsiz HWID sıfırlama",
            p2_btn: "Satın Al — $29.99",

            p4_badge: "Kalıcı Erişim",
            p4_name: "Sınırsız",
            p4_desc: "Tek seferlik ödeme ile süre sınırı olmadan kalıcı erişim.",
            p4_period: "/ süresiz",
            p4_f1_html: "<strong>Tüm özellikler</strong> dahil",
            p4_f2: "Süre sınırı olmadan erişim",
            p4_f3_html: "<strong>Tüm güncellemeler</strong> dahil",
            p4_f4: "Ücretsiz HWID sıfırlama",
            p4_btn: "Satın Al — $79",

            pay_strip_title: "Ödeme Seçenekleri",
            pay_pill_1: "Binance Gift Card",
            pay_pill_2: "Kredi & Banka Kartı",
            pay_pill_3: "Havale / FAST / EFT",

            faq_eyebrow: "S.S.S.",
            faq_title: "Sıkça sorulan sorular.",
            faq_q1: "Paketler arasında özellik farkı var mı?",
            faq_a1: "Hayır. Tüm paketlerde yazılımın bütün özellikleri ve güncellemeler eksiksiz olarak sunulur. Paketler yalnızca kullanım süresi ve HWID sıfırlama hakkına göre ayrılır.",
            faq_q2: "Nasıl satın alabilirim ve teslimat nasıl yapılır?",
            faq_a2: "İstediğiniz paketi seçtikten sonra discord.gg/prstg üzerinden bizimle iletişime geçebilirsiniz. Binance Gift Card, kart veya havale ödemeniz onaylandığında lisans anahtarınız ve kurulum dosyalarınız doğrudan iletilir.",
            faq_q3: "Hangi Windows sürümleri destekleniyor?",
            faq_a3: "Güncel Windows 10 ve Windows 11 (64-bit) sistemlerde sorunsuz çalışır.",
            faq_q4: "Bilgisayar değiştirirsem lisansım ne olur?",
            faq_a4: "1 aylık ve sınırsız paket kullanıcıları discord.gg/prstg üzerinden destek talebi açarak ücretsiz HWID sıfırlama talep edebilir.",

            cta_eyebrow: "Başlayın",
            cta_title: "Hazır olduğunuzda başlayın.",
            cta_desc: "Discord sunucumuz üzerinden hızlı teslimat, düzenli güncellemeler ve doğrudan destek.",
            cta_btn_dc: "discord.gg/prstg'ye Katıl",
            cta_btn_plans: "Paketleri İncele",

            foot_features: "Özellikler",
            foot_showcase: "Önizleme",
            foot_preview: "Canlı Menü",
            foot_pricing: "Paketler",
            foot_faq: "S.S.S.",

            mod_title: "Sipariş Bilgisi",
            mod_tab_discord: "Discord",
            mod_tab_crypto: "Binance Gift Card",
            mod_tab_card: "Kart / Havale",
            mod_dc_desc: "Satın alma işlemini tamamlamak için Discord sunucumuzdan talep oluşturun. Ödeme bilgisi ve lisansınız doğrudan paylaşılır.",
            mod_lbl_plan: "Seçilen Paket",
            mod_lbl_amount: "Tutar",
            mod_lbl_updates: "Güncellemeler",
            mod_cr_desc: "Kripto ödemeleri yalnızca Binance Gift Card üzerinden alınmaktadır. Hediye kartı kodunuzu Discord destek talebinde paylaştığınızda lisansınız anında aktif edilir.",
            mod_cr_lbl_method: "Kripto Yöntemi",
            mod_cr_val_method: "Binance Gift Card (USDT / USD)",
            mod_cr_lbl_delivery: "Teslimat",
            mod_cr_val_delivery: "Komisyonsuz · Anında Aktivasyon",
            mod_cr_lbl_channel: "Sipariş Kanalı",
            mod_ca_desc: "Kredi/Banka kartı veya Havale / FAST / EFT ile ödeme yapabilirsiniz.",
            mod_ca_lbl_channel: "Ödeme Kanalı",
            mod_ca_lbl_rate: "Kur Hesaplama",
            mod_ca_val_rate: "Anlık güncel kur baz alınır",
            mod_cancel: "Kapat",
            mod_go_dc: "discord.gg/prstg'ye Git",

            dyn: {
                docTitle: "Prestige External RobRun Cheat — Sade ve Kararlı Deneyim | Prestige System",
                pillWaiting: "oyun bekleniyor",
                pillPlayers: "12 oyuncu",
                gameWaiting: "oyun bekleniyor...",
                gameAttached: "oyun bağlandı",
                losReady: "hazır",
                losOff: "kapalı",
                smoothZero: "0 (anlık)",
                unlimited: "sınırsız",
                friendEmpty: "henüz ekli arkadaş yok.",
                friendDelTitle: "listeden kaldır",
                friendDelPrefix: "",
                friendDelSuffix: " arkadaşını kaldır",
                pressKey: "tuşa basın...",
                toastSaved: "ayarlar kaydedildi",
                toastLoaded: "ayarlar yüklendi",
                toastReset: "varsayılan ayarlar yüklendi",
                toastNeedName: "lütfen bir oyuncu adı yazın",
                toastAlreadyFriend: "bu oyuncu zaten arkadaş listesinde",
                toastFriendFull: "arkadaş listesi dolu",
                toastFriendAdded: "arkadaş eklendi",
                toastFriendRemoved: "arkadaş listeden kaldırıldı",
                toastKeyDisallowed: "bu tuş menü için kullanılamaz",
                lifetime: "lifetime",
                pmRmWorking: "siliniyor...",
                pmRmToast: "önizleme modu — kaldırma işlemi tetiklendi",
                modalPlanPrefix: "Paket: ",
                defaultPlan: "1 Aylık",
                defaultUpdates: "Tüm güncellemeler dahil"
            }
        }
    };

    var KEY_NAMES = {
        en: {
            1: "left click", 2: "right click", 4: "middle click", 5: "mouse 4", 6: "mouse 5",
            8: "backspace", 9: "tab", 13: "enter", 16: "shift", 17: "ctrl", 18: "alt",
            19: "pause", 20: "caps lock", 27: "esc", 32: "space",
            33: "page up", 34: "page down", 35: "end", 36: "home",
            37: "left arrow", 38: "up arrow", 39: "right arrow", 40: "down arrow",
            45: "insert", 46: "delete", 145: "scroll lock",
            192: "`", 189: "-", 187: "=", 219: "[", 220: "\\", 221: "]"
        },
        tr: {
            1: "sol tık", 2: "sağ tık", 4: "orta tık", 5: "mouse 4", 6: "mouse 5",
            8: "backspace", 9: "tab", 13: "enter", 16: "shift", 17: "ctrl", 18: "alt",
            19: "pause", 20: "caps lock", 27: "esc", 32: "space",
            33: "page up", 34: "page down", 35: "end", 36: "home",
            37: "sol ok", 38: "yukarı ok", 39: "sağ ok", 40: "aşağı ok",
            45: "insert", 46: "delete", 145: "scroll lock",
            192: "`", 189: "-", 187: "=", 219: "[", 220: "\\", 221: "]"
        }
    };

    function t(key) {
        var pack = I18N[currentLang] || I18N.en;
        return pack[key] !== undefined ? pack[key] : (I18N.en[key] !== undefined ? I18N.en[key] : "");
    }

    function td(key) {
        var pack = I18N[currentLang] || I18N.en;
        return (pack.dyn && pack.dyn[key] !== undefined) ? pack.dyn[key] : I18N.en.dyn[key];
    }

    function resolveInitialLang() {
        try {
            var q = new URLSearchParams(window.location.search).get("lang");
            if (q === "en" || q === "tr") return q;
        } catch (e) { /* ignore query parse failure */ }
        try {
            var saved = localStorage.getItem(LANG_STORAGE_KEY);
            if (saved === "en" || saved === "tr") return saved;
        } catch (e) { /* storage unavailable */ }
        return "en";
    }

    function applyLanguage(lang, persist) {
        currentLang = (lang === "tr") ? "tr" : "en";
        if (persist) {
            try { localStorage.setItem(LANG_STORAGE_KEY, currentLang); } catch (e) { /* ignore */ }
        }
        document.documentElement.lang = currentLang;
        document.title = td("docTitle");

        var langBtns = document.querySelectorAll("#lang-switch .lang-btn");
        langBtns.forEach(function (btn) {
            var active = btn.getAttribute("data-lang") === currentLang;
            btn.classList.toggle("active", active);
            btn.setAttribute("aria-pressed", String(active));
        });

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var val = t(el.getAttribute("data-i18n"));
            if (val !== "") el.textContent = val;
        });

        document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
            var val = t(el.getAttribute("data-i18n-html"));
            if (val !== "") el.innerHTML = val;
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            var val = t(el.getAttribute("data-i18n-placeholder"));
            if (val !== "") el.setAttribute("placeholder", val);
        });

        document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
            var val = t(el.getAttribute("data-i18n-title"));
            if (val !== "") el.setAttribute("title", val);
        });

        document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
            var val = t(el.getAttribute("data-i18n-aria"));
            if (val !== "") el.setAttribute("aria-label", val);
        });

        for (var i = 0; i < onLangChangeHooks.length; i++) {
            onLangChangeHooks[i](currentLang);
        }
    }

    function initI18n() {
        currentLang = resolveInitialLang();
        var langBtns = document.querySelectorAll("#lang-switch .lang-btn");
        langBtns.forEach(function (btn) {
            btn.addEventListener("click", function () {
                var nextLang = btn.getAttribute("data-lang");
                if (nextLang !== currentLang) applyLanguage(nextLang, true);
            });
        });
        applyLanguage(currentLang, false);
    }

    var bootAt = performance.now();

    function initPreloader() {
        var preloader = document.getElementById("site-preloader");
        var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!preloader || reduced) {
            if (preloader) preloader.hidden = true;
            document.documentElement.classList.add("site-ready");
            return;
        }

        var done = false;
        function finish() {
            if (done) return;
            done = true;
            var elapsed = performance.now() - bootAt;
            var wait = Math.max(0, 740 - elapsed);
            setTimeout(function () {
                preloader.classList.add("is-leaving");
                document.documentElement.classList.add("site-ready");
                setTimeout(function () {
                    preloader.hidden = true;
                }, 760);
            }, wait);
        }

        if (document.readyState === "complete") {
            finish();
        } else {
            window.addEventListener("load", finish, { once: true });
            setTimeout(finish, 1150);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        initPreloader();
        initAmbientCanvas();
        initNavbarEffects();
        init3DStage();
        initMagneticButtons();
        initCounters();
        initShowcasePlayer();
        initLiveMenu();
        initModal();
        initFaq();
        initMobileNav();
        initI18n();
    });

    function initAmbientCanvas() {
        var canvas = document.getElementById("bg-canvas");
        if (!canvas || !canvas.getContext) return;
        var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) return;

        var ctx = canvas.getContext("2d");
        if (!ctx) return;

        var finePointer = !window.matchMedia || window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        var width = 0;
        var height = 0;
        var dpr = 1;
        var particles = [];
        var rafId = 0;
        var running = false;

        var mouseActive = false;
        var targetMx = 0;
        var targetMy = 0;
        var curMx = 0;
        var curMy = 0;
        var mouseAlpha = 0;

        function createParticle(randomY) {
            return {
                x: Math.random() * width,
                y: randomY ? Math.random() * height : height + 10 + Math.random() * 40,
                r: 0.55 + Math.random() * 1.15,
                vx: (Math.random() - 0.5) * 0.14,
                vy: -(0.08 + Math.random() * 0.22),
                alpha: 0.08 + Math.random() * 0.24,
                phase: Math.random() * Math.PI * 2,
                speed: 0.008 + Math.random() * 0.014
            };
        }

        function resize() {
            width = window.innerWidth || document.documentElement.clientWidth || 1280;
            height = window.innerHeight || document.documentElement.clientHeight || 800;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            var targetCount = width < 768 ? 22 : 44;
            if (particles.length === 0) {
                for (var i = 0; i < targetCount; i++) {
                    particles.push(createParticle(true));
                }
            } else if (particles.length < targetCount) {
                while (particles.length < targetCount) particles.push(createParticle(true));
            } else if (particles.length > targetCount) {
                particles.length = targetCount;
            }
        }

        if (finePointer) {
            window.addEventListener("mousemove", function (e) {
                if (!mouseActive) {
                    curMx = e.clientX;
                    curMy = e.clientY;
                }
                mouseActive = true;
                targetMx = e.clientX;
                targetMy = e.clientY;
            }, { passive: true });

            document.addEventListener("mouseleave", function () {
                mouseActive = false;
            });
        }

        function draw() {
            if (!running) return;
            ctx.clearRect(0, 0, width, height);

            if (finePointer) {
                curMx += (targetMx - curMx) * 0.065;
                curMy += (targetMy - curMy) * 0.065;
                mouseAlpha += ((mouseActive ? 1 : 0) - mouseAlpha) * 0.05;
                if (mouseAlpha > 0.01) {
                    var grad = ctx.createRadialGradient(curMx, curMy, 0, curMx, curMy, 340);
                    grad.addColorStop(0, "rgba(255, 255, 255, " + (0.036 * mouseAlpha).toFixed(4) + ")");
                    grad.addColorStop(0.45, "rgba(255, 255, 255, " + (0.011 * mouseAlpha).toFixed(4) + ")");
                    grad.addColorStop(1, "rgba(255, 255, 255, 0)");
                    ctx.fillStyle = grad;
                    ctx.fillRect(curMx - 340, curMy - 340, 680, 680);
                }
            }

            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.phase += p.speed;

                if (p.y < -12) {
                    p.y = height + 10;
                    p.x = Math.random() * width;
                }
                if (p.x < -12) p.x = width + 12;
                else if (p.x > width + 12) p.x = -12;

                var twinkle = 0.65 + 0.35 * Math.sin(p.phase);
                var op = p.alpha * twinkle;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(245, 247, 252, " + op.toFixed(3) + ")";
                ctx.fill();
            }

            rafId = requestAnimationFrame(draw);
        }

        function start() {
            if (running || document.hidden) return;
            running = true;
            rafId = requestAnimationFrame(draw);
        }

        function stop() {
            running = false;
            if (rafId) {
                cancelAnimationFrame(rafId);
                rafId = 0;
            }
        }

        var resizeTimer = 0;
        window.addEventListener("resize", function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resize, 140);
        }, { passive: true });

        document.addEventListener("visibilitychange", function () {
            if (document.hidden) stop();
            else start();
        });

        resize();
        start();
    }

    function initNavbarEffects() {
        var navbar = document.getElementById("navbar");
        var navShell = document.getElementById("nav-shell");
        var scrollRing = document.getElementById("nav-scroll-ring");
        var scrollCue = document.getElementById("scroll-cue");
        var navMenu = document.getElementById("nav-menu");
        var navPill = document.getElementById("nav-pill-bg");
        var navBeam = document.getElementById("nav-beam");
        var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-menu .nav-link[data-section]"));
        var sections = navLinks.map(function (link) {
            return {
                id: link.getAttribute("data-section"),
                link: link,
                el: document.getElementById(link.getAttribute("data-section"))
            };
        }).filter(function (s) { return !!s.el; });

        var RING_CIRC = 114.67;
        var activeLink = null;
        var hoveredLink = null;

        if (navbar && (!window.matchMedia || window.matchMedia("(hover: hover) and (pointer: fine)").matches)) {
            navbar.addEventListener("mousemove", function (e) {
                var rect = navbar.getBoundingClientRect();
                var x = e.clientX - rect.left;
                navbar.style.setProperty("--nav-mx", x.toFixed(1) + "px");
            }, { passive: true });
        }

        function movePillTo(link) {
            if (!navPill || !navMenu) return;
            if (!link || window.innerWidth <= 860) {
                navPill.classList.remove("visible");
                if (navBeam) navBeam.classList.remove("visible");
                return;
            }
            var w = link.offsetWidth;
            if (w <= 0) {
                navPill.classList.remove("visible");
                if (navBeam) navBeam.classList.remove("visible");
                return;
            }
            var left = link.offsetLeft;
            navPill.style.width = w + "px";
            navPill.style.transform = "translateX(" + left + "px)";
            navPill.classList.add("visible");

            if (navBeam) {
                var beamW = Math.max(26, w - 18);
                var beamLeft = left + (w - beamW) * 0.5;
                navBeam.style.width = beamW.toFixed(1) + "px";
                navBeam.style.transform = "translateX(" + beamLeft.toFixed(1) + "px)";
                navBeam.classList.add("visible");
            }
        }

        if (navMenu && navPill) {
            navLinks.forEach(function (link) {
                link.addEventListener("mouseenter", function () {
                    hoveredLink = link;
                    movePillTo(hoveredLink);
                });
                link.addEventListener("focus", function () {
                    hoveredLink = link;
                    movePillTo(hoveredLink);
                });
            });
            navMenu.addEventListener("mouseleave", function () {
                hoveredLink = null;
                movePillTo(activeLink);
            });
            navMenu.addEventListener("focusout", function (e) {
                if (!navMenu.contains(e.relatedTarget)) {
                    hoveredLink = null;
                    movePillTo(activeLink);
                }
            });
        }

        var ticking = false;
        function updateScrollState() {
            ticking = false;
            var y = window.scrollY || window.pageYOffset || 0;

            if (navbar) {
                navbar.classList.toggle("scrolled", y > 24);
            }

            if (scrollCue) {
                scrollCue.classList.toggle("hidden-cue", y > 80);
            }

            if (scrollRing) {
                var docH = document.documentElement.scrollHeight - window.innerHeight;
                var ratio = docH > 0 ? Math.min(1, Math.max(0, y / docH)) : 0;
                scrollRing.style.strokeDashoffset = (RING_CIRC * (1 - ratio)).toFixed(2);
            }

            if (sections.length) {
                var probe = y + window.innerHeight * 0.34;
                var activeId = "";
                for (var i = 0; i < sections.length; i++) {
                    var top = sections[i].el.offsetTop;
                    var bottom = top + sections[i].el.offsetHeight;
                    if (probe >= top && probe < bottom) {
                        activeId = sections[i].id;
                        break;
                    }
                }
                if (!activeId && sections.length && y + window.innerHeight >= document.documentElement.scrollHeight - 40) {
                    activeId = sections[sections.length - 1].id;
                }
                activeLink = null;
                for (var j = 0; j < sections.length; j++) {
                    var isAct = sections[j].id === activeId;
                    sections[j].link.classList.toggle("active", isAct);
                    if (isAct) activeLink = sections[j].link;
                }
                if (!hoveredLink) {
                    movePillTo(activeLink);
                }
            }
        }

        function requestUpdate() {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(updateScrollState);
            }
        }

        onLangChangeHooks.push(function () {
            requestAnimationFrame(function () {
                movePillTo(hoveredLink || activeLink);
            });
        });

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(function () {
                movePillTo(hoveredLink || activeLink);
            });
        }

        window.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", requestUpdate, { passive: true });
        updateScrollState();
    }

    function init3DStage() {
        var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        var grids = document.querySelectorAll(".spotlight-grid");
        grids.forEach(function (grid) {
            var items = grid.querySelectorAll(".reveal-3d");
            items.forEach(function (item, idx) {
                item.style.setProperty("--reveal-delay", (idx * 45) + "ms");
            });
        });

        var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal-3d"));

        function revealElement(el, io) {
            if (el.classList.contains("is-visible")) return;
            el.classList.add("is-visible");
            setTimeout(function () { el.classList.add("is-settled"); }, 760);
            if (io) io.unobserve(el);
        }

        if (reduced || !("IntersectionObserver" in window)) {
            reveals.forEach(function (el) {
                el.classList.add("is-visible", "is-settled");
            });
        } else {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        revealElement(entry.target, io);
                    }
                });
            }, { threshold: 0.01, rootMargin: "0px 0px 80px 0px" });

            reveals.forEach(function (el) { io.observe(el); });

            var revealTicking = false;
            function sweepVisible() {
                revealTicking = false;
                var vh = window.innerHeight || document.documentElement.clientHeight || 800;
                var remaining = 0;
                for (var i = 0; i < reveals.length; i++) {
                    var el = reveals[i];
                    if (el.classList.contains("is-visible")) continue;
                    var rect = el.getBoundingClientRect();
                    if (rect.top < vh + 60 && rect.bottom > -40) {
                        revealElement(el, io);
                    } else {
                        remaining++;
                    }
                }
                if (remaining === 0) {
                    window.removeEventListener("scroll", requestSweep);
                    window.removeEventListener("hashchange", requestSweep);
                }
            }
            function requestSweep() {
                if (!revealTicking) {
                    revealTicking = true;
                    requestAnimationFrame(sweepVisible);
                }
            }
            window.addEventListener("scroll", requestSweep, { passive: true });
            window.addEventListener("hashchange", requestSweep, { passive: true });
            sweepVisible();
        }

        if (reduced) return;

        var stage = document.getElementById("monolith-stage");
        var monolith = document.getElementById("monolith");
        var shadow = document.getElementById("monolith-shadow");

        var finePointer = !window.matchMedia || window.matchMedia("(hover: hover) and (pointer: fine)").matches;

        if (stage && monolith) {
            var targetX = 0, targetY = 0;
            var curX = 0, curY = 0;
            var hovered = false;
            var startAt = performance.now();
            var monoRaf = 0;

            if (finePointer) {
                stage.addEventListener("mousemove", function (e) {
                    var rect = stage.getBoundingClientRect();
                    var nx = (e.clientX - rect.left) / rect.width - 0.5;
                    var ny = (e.clientY - rect.top) / rect.height - 0.5;
                    hovered = true;
                    targetY = nx * 14;
                    targetX = -ny * 12;
                });

                stage.addEventListener("mouseleave", function () {
                    hovered = false;
                });
            }

            function tickMonolith(now) {
                if (document.hidden) {
                    monoRaf = 0;
                    return;
                }
                var tSec = (now - startAt) * 0.001;
                if (!hovered) {
                    targetY = Math.sin(tSec * 0.55) * 4.8;
                    targetX = Math.cos(tSec * 0.45) * 3.2;
                }
                curX += (targetX - curX) * 0.065;
                curY += (targetY - curY) * 0.065;
                var floatY = Math.sin(tSec * 0.95) * 5.5;
                monolith.style.transform =
                    "translateY(" + floatY.toFixed(2) + "px) rotateX(" + curX.toFixed(2) + "deg) rotateY(" + curY.toFixed(2) + "deg)";
                if (shadow) {
                    var sScale = 1 - (floatY / 72);
                    var sOp = 0.62 - (floatY / 48);
                    shadow.style.transform = "scaleX(" + sScale.toFixed(3) + ")";
                    shadow.style.opacity = Math.max(0.32, Math.min(0.8, sOp)).toFixed(2);
                }
                monoRaf = requestAnimationFrame(tickMonolith);
            }

            document.addEventListener("visibilitychange", function () {
                if (!document.hidden && !monoRaf) {
                    monoRaf = requestAnimationFrame(tickMonolith);
                }
            });

            monoRaf = requestAnimationFrame(tickMonolith);
        }

        if (!finePointer) return;

        // Cross-border cursor spotlight illumination across card grids
        grids.forEach(function (grid) {
            var gridCards = Array.prototype.slice.call(grid.querySelectorAll(".tilt-card"));
            grid.addEventListener("mousemove", function (e) {
                for (var i = 0; i < gridCards.length; i++) {
                    var c = gridCards[i];
                    var rect = c.getBoundingClientRect();
                    c.style.setProperty("--mx", (e.clientX - rect.left).toFixed(0) + "px");
                    c.style.setProperty("--my", (e.clientY - rect.top).toFixed(0) + "px");
                }
            });
            grid.addEventListener("mouseleave", function () {
                for (var i = 0; i < gridCards.length; i++) {
                    gridCards[i].style.setProperty("--mx", "-400px");
                    gridCards[i].style.setProperty("--my", "-400px");
                }
            });
        });

        var cards = document.querySelectorAll(".tilt-card");
        cards.forEach(function (card) {
            card.addEventListener("mousemove", function (e) {
                if (!card.classList.contains("is-visible")) return;
                card.classList.add("is-settled", "is-tilting");
                var rect = card.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                var nx = x / rect.width - 0.5;
                var ny = y / rect.height - 0.5;
                card.style.setProperty("--mx", x.toFixed(0) + "px");
                card.style.setProperty("--my", y.toFixed(0) + "px");
                var maxTilt = (card.classList.contains("proof-card") || card.classList.contains("cta-card")) ? 1.4 : 4.2;
                card.style.transform =
                    "perspective(960px) rotateX(" + (-ny * maxTilt).toFixed(2) + "deg) rotateY(" + (nx * maxTilt).toFixed(2) + "deg) translateY(-3px)";
            });

            card.addEventListener("mouseleave", function () {
                card.classList.remove("is-tilting");
                if (!card.classList.contains("is-visible")) return;
                card.style.transform = "";
            });
        });
    }

    function initMagneticButtons() {
        var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        var finePointer = !window.matchMedia || window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (reduced || !finePointer) return;

        var buttons = document.querySelectorAll(".magnetic-btn");
        buttons.forEach(function (btn) {
            btn.addEventListener("mousemove", function (e) {
                var rect = btn.getBoundingClientRect();
                var dx = (e.clientX - (rect.left + rect.width / 2)) * 0.14;
                var dy = (e.clientY - (rect.top + rect.height / 2)) * 0.18;
                var tx = Math.max(-4, Math.min(4, dx));
                var ty = Math.max(-3.5, Math.min(3.5, dy));
                btn.style.transform = "translate3d(" + tx.toFixed(2) + "px, " + (ty - 2).toFixed(2) + "px, 0)";
            });
            btn.addEventListener("mouseleave", function () {
                btn.style.transform = "";
            });
        });
    }

    function initCounters() {
        var nodes = document.querySelectorAll("[data-count-to]");
        if (!nodes.length) return;
        var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        function animateCount(el) {
            var target = parseInt(el.getAttribute("data-count-to"), 10);
            var suffix = el.getAttribute("data-count-suffix") || "";
            if (isNaN(target)) return;
            if (reduced) {
                el.textContent = target + suffix;
                return;
            }
            var duration = 1150;
            var start = performance.now();
            function step(now) {
                var t = Math.min(1, (now - start) / duration);
                var eased = 1 - Math.pow(1 - t, 3);
                var val = Math.round(eased * target);
                el.textContent = val + suffix;
                if (t < 1) {
                    requestAnimationFrame(step);
                } else {
                    el.textContent = target + suffix;
                }
            }
            requestAnimationFrame(step);
        }

        if (reduced || !("IntersectionObserver" in window)) {
            nodes.forEach(animateCount);
            return;
        }

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.35 });

        nodes.forEach(function (el) { io.observe(el); });
    }

    function initLiveMenu() {
        var app = document.getElementById("pm-app");
        if (!app) return;

        var $ = function (id) { return document.getElementById(id); };
        var all = function (selector, root) {
            return Array.prototype.slice.call((root || app).querySelectorAll(selector));
        };
        var langLower = function (s) {
            return String(s || "").toLocaleLowerCase(currentLang === "tr" ? "tr-TR" : "en-US");
        };
        var STORAGE_KEY = "ps_ui_state";

        var tabs = all("#pm-rail [data-tab]");
        function activate(tab, focus) {
            for (var i = 0; i < tabs.length; i++) {
                var candidate = tabs[i];
                var active = candidate === tab;
                candidate.setAttribute("aria-selected", String(active));
                candidate.tabIndex = active ? 0 : -1;
                var page = $(candidate.dataset.tab);
                if (page) page.hidden = !active;
            }
            $("pm-pages").scrollTop = 0;
            if (focus) tab.focus();
        }
        for (var i = 0; i < tabs.length; i++) {
            (function (tab) {
                tab.addEventListener("click", function () { activate(tab); });
            })(tabs[i]);
        }
        $("pm-rail").addEventListener("keydown", function (event) {
            var index = tabs.indexOf(document.activeElement);
            if (index < 0) return;
            var next = -1;
            if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % tabs.length;
            else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
            else if (event.key === "Home") next = 0;
            else if (event.key === "End") next = tabs.length - 1;
            if (next >= 0) {
                event.preventDefault();
                activate(tabs[next], true);
            }
        });

        var toastTimer = 0;
        function toast(text) {
            var box = $("pm-toast");
            if (!box) return;
            box.textContent = langLower(text);
            box.classList.add("up");
            clearTimeout(toastTimer);
            toastTimer = setTimeout(function () { box.classList.remove("up"); }, 2400);
        }

        var controls = all("[data-m]");
        var swatches = all("[data-c]");
        var defaults = {
            controls: {},
            colors: {},
            aimKey: 0x12,
            menuKey: 0x70
        };

        for (var j = 0; j < controls.length; j++) {
            var ctrl = controls[j];
            defaults.controls[ctrl.dataset.m] = ctrl.type === "checkbox" ? ctrl.checked : ctrl.value;
        }
        for (var k = 0; k < swatches.length; k++) {
            var sw = swatches[k];
            defaults.colors[sw.dataset.c] = sw.value.toLowerCase();
        }

        function paintRange(input) {
            var min = Number(input.min);
            var max = Number(input.max);
            var value = Number(input.value);
            var percent = max > min ? ((value - min) / (max - min)) * 100 : 0;
            input.style.setProperty("--pct", percent.toFixed(2) + "%");
            var output = input.parentElement.querySelector("output");
            if (!output) return;
            var unit = input.dataset.u || "";
            if (input.dataset.mode === "smooth" && value === 0) output.textContent = td("smoothZero");
            else output.textContent = (unit === " m" && value === 0) ? td("unlimited") : value + unit;
        }

        function updateLosPreview() {
            var losCheck = $("pm-los-toggle");
            var losOut = $("pm-los");
            if (!losCheck || !losOut) return;
            losOut.textContent = losCheck.checked ? td("losReady") : td("losOff");
            losOut.dataset.bad = "0";
        }

        for (var c = 0; c < controls.length; c++) {
            (function (input) {
                if (input.type === "range") paintRange(input);
                var eventName = input.type === "range" ? "input" : "change";
                input.addEventListener(eventName, function () {
                    if (input.type === "range") paintRange(input);
                    if (input.id === "pm-los-toggle") updateLosPreview();
                    if (input.id === "pm-menu-lang") {
                        applyLanguage(input.value === "0" ? "tr" : "en", true);
                    }
                });
            })(controls[c]);
        }
        updateLosPreview();

        function syncSwatchUI(id, hex) {
            var low = String(hex || "").toLowerCase();
            for (var s = 0; s < swatches.length; s++) {
                var el = swatches[s];
                if (el.dataset.c !== String(id)) continue;
                el.value = low;
                var meta = el.parentElement.querySelector(".hex");
                if (meta) meta.textContent = low;
            }
        }
        for (var s = 0; s < swatches.length; s++) {
            (function (input) {
                input.addEventListener("input", function () {
                    syncSwatchUI(input.dataset.c, input.value.toLowerCase());
                });
            })(swatches[s]);
        }

        var friendList = [];
        var lastFriendsKey = "";

        function renderFriends(force) {
            var key = currentLang + "::" + JSON.stringify(friendList);
            if (!force && key === lastFriendsKey) return;
            lastFriendsKey = key;
            var box = $("pm-friend-list");
            box.textContent = "";
            if (!friendList.length) {
                var empty = document.createElement("span");
                empty.className = "fempty";
                empty.textContent = td("friendEmpty");
                box.appendChild(empty);
                return;
            }
            for (var f = 0; f < friendList.length; f++) {
                (function (name) {
                    var lowName = langLower(name);
                    var tag = document.createElement("span");
                    tag.className = "ftag";
                    var dot = document.createElement("i");
                    var txt = document.createElement("span");
                    txt.textContent = lowName;
                    var del = document.createElement("button");
                    del.type = "button";
                    del.title = td("friendDelTitle");
                    del.setAttribute("aria-label", td("friendDelPrefix") + lowName + td("friendDelSuffix"));
                    del.textContent = "×";
                    del.addEventListener("click", function () {
                        friendList = friendList.filter(function (x) { return x !== name; });
                        renderFriends(true);
                        toast(td("toastFriendRemoved"));
                    });
                    tag.append(dot, txt, del);
                    box.appendChild(tag);
                })(friendList[f]);
            }
        }

        function submitFriend(name) {
            var clean = String(name || "").trim();
            if (!clean) {
                toast(td("toastNeedName"));
                return;
            }
            if (friendList.some(function (f) { return f.toLowerCase() === clean.toLowerCase(); })) {
                toast(td("toastAlreadyFriend"));
                return;
            }
            if (friendList.length >= 64) {
                toast(td("toastFriendFull"));
                return;
            }
            friendList.push(clean);
            renderFriends(true);
            $("pm-friend-input").value = "";
            toast(td("toastFriendAdded"));
        }

        $("pm-friend-add").addEventListener("click", function () { submitFriend($("pm-friend-input").value); });
        $("pm-friend-input").addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                submitFriend($("pm-friend-input").value);
            } else if (event.key === "Escape") {
                event.stopPropagation();
                $("pm-friend-input").blur();
            }
        });

        var aimKey = defaults.aimKey;
        var menuKey = defaults.menuKey;
        var bindingTarget = null;

        function keyName(value) {
            if (value >= 112 && value <= 123) return "f" + (value - 111);
            if (value >= 96 && value <= 105) return "num " + (value - 96);
            if (value >= 48 && value <= 90) return String.fromCharCode(value).toLowerCase();
            var map = KEY_NAMES[currentLang] || KEY_NAMES.en;
            return map[value] || "vk " + value;
        }

        function paintKey() {
            var aimBtn = $("pm-bind");
            if (aimBtn) {
                var armAim = bindingTarget === "aim";
                aimBtn.textContent = armAim ? td("pressKey") : keyName(aimKey);
                aimBtn.classList.toggle("arm", armAim);
            }
            var menuBtn = $("pm-bind-menu");
            if (menuBtn) {
                var armMenu = bindingTarget === "menu";
                menuBtn.textContent = armMenu ? td("pressKey") : keyName(menuKey);
                menuBtn.classList.toggle("arm", armMenu);
            }
            var fkeyMenu = $("pm-fkey-menu");
            if (fkeyMenu) fkeyMenu.textContent = keyName(menuKey);
        }

        function chooseKey(key) {
            var target = bindingTarget;
            if (!target) return;
            if (target === "menu") {
                if (key === 1 || key === 2 || key === 35) {
                    toast(td("toastKeyDisallowed"));
                    bindingTarget = null;
                    paintKey();
                    return;
                }
                menuKey = key;
                bindingTarget = null;
                paintKey();
                return;
            }
            aimKey = key;
            bindingTarget = null;
            paintKey();
        }

        $("pm-bind").addEventListener("click", function () {
            bindingTarget = bindingTarget === "aim" ? null : "aim";
            paintKey();
        });
        $("pm-bind-menu").addEventListener("click", function () {
            bindingTarget = bindingTarget === "menu" ? null : "menu";
            paintKey();
        });

        window.addEventListener("keydown", function (event) {
            if (!bindingTarget) return;
            event.preventDefault();
            event.stopPropagation();
            if (event.key === "Escape") {
                bindingTarget = null;
                paintKey();
            } else if (event.keyCode) {
                chooseKey(event.keyCode);
            }
        }, true);

        window.addEventListener("mousedown", function (event) {
            if (!bindingTarget) return;
            if (event.target.closest("#pm-bind, #pm-bind-menu") && event.button === 0) return;
            var key = [1, 4, 2, 5, 6][event.button];
            if (key) {
                event.preventDefault();
                chooseKey(key);
            }
        }, true);

        function readState() {
            var out = { controls: {}, colors: {}, friends: friendList.slice(), aimKey: aimKey, menuKey: menuKey };
            for (var idx = 0; idx < controls.length; idx++) {
                var input = controls[idx];
                out.controls[input.dataset.m] = input.type === "checkbox" ? input.checked : input.value;
            }
            for (var swIdx = 0; swIdx < swatches.length; swIdx++) {
                var sw = swatches[swIdx];
                out.colors[sw.dataset.c] = sw.value.toLowerCase();
            }
            return out;
        }

        function applyState(state) {
            if (state.controls) {
                for (var idx = 0; idx < controls.length; idx++) {
                    var input = controls[idx];
                    var v = state.controls[input.dataset.m];
                    if (v === undefined) continue;
                    if (input.type === "checkbox") input.checked = Boolean(v);
                    else input.value = v;
                    if (input.type === "range") paintRange(input);
                }
            }
            if (state.colors) {
                var keys = Object.keys(state.colors);
                for (var idx2 = 0; idx2 < keys.length; idx2++) {
                    syncSwatchUI(keys[idx2], state.colors[keys[idx2]]);
                }
            }
            friendList = Array.isArray(state.friends) ? state.friends.slice() : [];
            renderFriends(true);
            aimKey = typeof state.aimKey === "number" ? state.aimKey : defaults.aimKey;
            menuKey = typeof state.menuKey === "number" ? state.menuKey : defaults.menuKey;
            bindingTarget = null;
            var langSel = $("pm-menu-lang");
            if (langSel) langSel.value = currentLang === "tr" ? "0" : "1";
            paintKey();
            updateLosPreview();
        }

        $("pm-save").addEventListener("click", function () {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(readState()));
            } catch (e) { /* storage unavailable */ }
            toast(td("toastSaved"));
        });

        $("pm-load").addEventListener("click", function () {
            try {
                var raw = localStorage.getItem(STORAGE_KEY);
                if (raw) applyState(JSON.parse(raw));
                else applyState({ controls: defaults.controls, colors: defaults.colors, friends: [], aimKey: defaults.aimKey, menuKey: defaults.menuKey });
            } catch (e) {
                applyState({ controls: defaults.controls, colors: defaults.colors, friends: [], aimKey: defaults.aimKey, menuKey: defaults.menuKey });
            }
            toast(td("toastLoaded"));
        });

        var resetDemoBtn = $("pm-reset-demo");
        if (resetDemoBtn) {
            resetDemoBtn.addEventListener("click", function () {
                try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
                applyState({ controls: defaults.controls, colors: defaults.colors, friends: [], aimKey: defaults.aimKey, menuKey: defaults.menuKey });
                toast(td("toastReset"));
            });
        }

        var pill = $("pm-pill");
        var fdot = $("pm-fdot");
        var gameTxt = $("pm-game");

        function paintLiveStatus() {
            var isLive = pill.dataset.live === "1";
            pill.querySelector("em").textContent = isLive ? td("pillPlayers") : td("pillWaiting");
            if (fdot) fdot.dataset.live = isLive ? "1" : "0";
            if (gameTxt) gameTxt.textContent = isLive ? td("gameAttached") : td("gameWaiting");
        }

        function toggleLivePreview() {
            pill.dataset.live = pill.dataset.live === "1" ? "0" : "1";
            paintLiveStatus();
        }
        pill.addEventListener("click", toggleLivePreview);
        pill.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleLivePreview();
            }
        });

        var introTimers = [];
        function clearIntroTimers() {
            for (var timerIdx = 0; timerIdx < introTimers.length; timerIdx++) clearTimeout(introTimers[timerIdx]);
            introTimers = [];
        }

        function playIntro(owner) {
            clearIntroTimers();
            var el = $("pm-intro");
            if (!el) return;
            var nameEl = $("pm-intro-name");
            if (nameEl) nameEl.textContent = owner || "liar";

            el.hidden = false;
            el.classList.remove("play", "leaving");
            app.classList.remove("intro-reveal");
            app.classList.add("intro-hold");

            introTimers.push(setTimeout(function () {
                requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                        el.classList.add("play");
                    });
                });
            }, 70));

            introTimers.push(setTimeout(function () {
                el.classList.add("leaving");
                app.classList.remove("intro-hold");
                app.classList.add("intro-reveal");
            }, 1500));

            introTimers.push(setTimeout(function () {
                el.hidden = true;
                app.classList.remove("intro-reveal");
            }, 2420));
        }

        var closedOverlay = $("pm-closed-overlay");
        $("pm-close").addEventListener("click", function () {
            app.hidden = true;
            if (closedOverlay) closedOverlay.classList.add("visible");
        });

        var reopenBtn = $("pm-reopen-btn");
        if (reopenBtn) {
            reopenBtn.addEventListener("click", function () {
                if (closedOverlay) closedOverlay.classList.remove("visible");
                app.hidden = false;
                playIntro("liar");
            });
        }

        var replayBtn = $("pm-replay-intro");
        if (replayBtn) {
            replayBtn.addEventListener("click", function () {
                if (closedOverlay) closedOverlay.classList.remove("visible");
                app.hidden = false;
                playIntro("liar");
            });
        }

        function renderLicBadge() {
            var wrap = $("pm-lic-live");
            var badge = $("pm-lic-rem");
            var segIds = ["pm-lic-seg-d", "pm-lic-seg-h", "pm-lic-seg-m", "pm-lic-seg-s"];
            for (var si = 0; si < segIds.length; si++) {
                var seg = $(segIds[si]);
                if (seg) seg.hidden = true;
            }
            if (wrap) wrap.dataset.state = "ok";
            if (badge) {
                badge.hidden = false;
                badge.textContent = td("lifetime");
            }
        }
        renderLicBadge();

        var rmTrigger = $("pm-rm-trigger");
        var rmBox = $("pm-rm-confirm-box");
        var rmConfirm = $("pm-rm-confirm");
        var rmCancel = $("pm-rm-cancel");
        var rmResetTimer = 0;

        function resetRmUI() {
            clearTimeout(rmResetTimer);
            if (rmBox) rmBox.style.display = "none";
            if (rmTrigger) rmTrigger.style.display = "inline-flex";
            if (rmConfirm) {
                rmConfirm.disabled = false;
                rmConfirm.textContent = t("pm_rm_confirm");
            }
            if (rmCancel) rmCancel.disabled = false;
        }

        if (rmTrigger && rmBox && rmConfirm && rmCancel) {
            rmTrigger.addEventListener("click", function () {
                rmTrigger.style.display = "none";
                rmBox.style.display = "flex";
            });
            rmCancel.addEventListener("click", resetRmUI);
            rmConfirm.addEventListener("click", function () {
                rmConfirm.disabled = true;
                rmCancel.disabled = true;
                rmConfirm.textContent = td("pmRmWorking");
                toast(td("pmRmToast"));
                clearTimeout(rmResetTimer);
                rmResetTimer = setTimeout(resetRmUI, 1600);
            });
        }

        onLangChangeHooks.push(function () {
            for (var i2 = 0; i2 < controls.length; i2++) {
                if (controls[i2].type === "range") paintRange(controls[i2]);
            }
            var langSel = $("pm-menu-lang");
            if (langSel) langSel.value = currentLang === "tr" ? "0" : "1";
            updateLosPreview();
            paintKey();
            renderFriends(true);
            paintLiveStatus();
            renderLicBadge();
            if (rmConfirm && !rmConfirm.disabled) {
                rmConfirm.textContent = t("pm_rm_confirm");
            }
        });

        paintKey();
        paintLiveStatus();
    }

    function initModal() {
        var modal = document.getElementById("purchase-modal");
        var closeBtn = document.getElementById("modal-close-btn");
        var cancelBtn = document.getElementById("modal-cancel-btn");
        var buyBtns = document.querySelectorAll(".buy-btn");
        var planSubtitle = document.getElementById("modal-selected-plan");
        var planNameEl = document.getElementById("modal-plan-name");
        var payAmount = document.getElementById("modal-pay-amount");
        var updatesEl = document.getElementById("modal-updates");

        if (!modal) return;

        var activePlanData = {
            planEn: "1 Month",
            planTr: "1 Aylık",
            price: "29.99",
            updEn: "All updates included",
            updTr: "Tüm güncellemeler dahil"
        };

        function paintModalPlan() {
            var planName = currentLang === "tr" ? activePlanData.planTr : activePlanData.planEn;
            var updatesText = currentLang === "tr" ? activePlanData.updTr : activePlanData.updEn;
            if (planSubtitle) planSubtitle.textContent = td("modalPlanPrefix") + planName + " ($" + activePlanData.price + ")";
            if (planNameEl) planNameEl.textContent = planName;
            if (payAmount) payAmount.textContent = "$" + activePlanData.price + " USD";
            if (updatesEl) updatesEl.textContent = updatesText || td("defaultUpdates");
        }

        function openModal(data) {
            activePlanData = data;
            paintModalPlan();
            modal.classList.add("open");
            modal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";
        }

        function closeModal() {
            modal.classList.remove("open");
            modal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
        }

        buyBtns.forEach(function (btn) {
            btn.addEventListener("click", function () {
                openModal({
                    planEn: btn.getAttribute("data-plan-en") || "1 Month",
                    planTr: btn.getAttribute("data-plan-tr") || "1 Aylık",
                    price: btn.getAttribute("data-price") || "29.99",
                    updEn: btn.getAttribute("data-updates-en") || "All updates included",
                    updTr: btn.getAttribute("data-updates-tr") || "Tüm güncellemeler dahil"
                });
            });
        });

        onLangChangeHooks.push(paintModalPlan);

        if (closeBtn) closeBtn.addEventListener("click", closeModal);
        if (cancelBtn) cancelBtn.addEventListener("click", closeModal);

        modal.addEventListener("click", function (e) {
            if (e.target === modal) closeModal();
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && modal.classList.contains("open")) {
                closeModal();
            }
        });

        var payTabs = document.querySelectorAll(".pay-tab");
        var payContents = document.querySelectorAll(".pay-tab-content");

        payTabs.forEach(function (tab) {
            tab.addEventListener("click", function () {
                var method = tab.getAttribute("data-method");
                payTabs.forEach(function (tabBtn) { tabBtn.classList.remove("active"); });
                payContents.forEach(function (content) { content.classList.remove("active"); });
                tab.classList.add("active");
                var targetContent = document.getElementById("method-" + method);
                if (targetContent) targetContent.classList.add("active");
            });
        });
    }

    function initFaq() {
        var faqItems = document.querySelectorAll(".faq-item");
        faqItems.forEach(function (item) {
            var questionBtn = item.querySelector(".faq-question");
            if (!questionBtn) return;
            questionBtn.addEventListener("click", function () {
                var isOpen = item.classList.contains("active");
                faqItems.forEach(function (other) {
                    if (other !== item) {
                        other.classList.remove("active");
                        var otherBtn = other.querySelector(".faq-question");
                        if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
                    }
                });
                item.classList.toggle("active", !isOpen);
                questionBtn.setAttribute("aria-expanded", String(!isOpen));
            });
        });
    }

    function initMobileNav() {
        var mobileBtn = document.getElementById("mobile-toggle");
        var navMenu = document.getElementById("nav-menu");
        var navbar = document.getElementById("navbar");
        var backdrop = document.getElementById("nav-backdrop");
        var modal = document.getElementById("purchase-modal");
        if (!mobileBtn || !navMenu) return;

        function setDrawer(open) {
            navMenu.classList.toggle("open", open);
            mobileBtn.setAttribute("aria-expanded", String(open));
            if (backdrop) backdrop.classList.toggle("open", open);
            if (open) {
                document.body.style.overflow = "hidden";
            } else if (!modal || !modal.classList.contains("open")) {
                document.body.style.overflow = "";
            }
        }

        mobileBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            setDrawer(!navMenu.classList.contains("open"));
        });

        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                setDrawer(false);
            });
        });

        if (backdrop) {
            backdrop.addEventListener("click", function () {
                setDrawer(false);
            });
        }

        document.addEventListener("click", function (e) {
            if (navMenu.classList.contains("open") && navbar && !navbar.contains(e.target)) {
                setDrawer(false);
            }
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && navMenu.classList.contains("open")) {
                setDrawer(false);
                mobileBtn.focus();
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 860 && navMenu.classList.contains("open")) {
                setDrawer(false);
            }
        }, { passive: true });
    }

    function initShowcasePlayer() {
        var player = document.getElementById("showcase-player");
        var video = document.getElementById("showcase-video");
        var cover = document.getElementById("showcase-cover");
        var bigPlay = document.getElementById("showcase-big-play");
        var durBadge = document.getElementById("showcase-duration-badge");
        var playBtn = document.getElementById("sc-play-btn");
        var muteBtn = document.getElementById("sc-mute-btn");
        var volSlider = document.getElementById("sc-vol-slider");
        var fsBtn = document.getElementById("sc-fs-btn");
        var timeEl = document.getElementById("sc-time");
        var progWrap = document.getElementById("sc-progress-wrap");
        var filled = document.getElementById("sc-filled");
        var buffered = document.getElementById("sc-buffered");
        var thumb = document.getElementById("sc-thumb");
        if (!player || !video) return;

        var idleTimer = 0;
        var seeking = false;
        var lastVol = 1;

        function fmtTime(sec) {
            if (!isFinite(sec) || sec < 0) return "0:00";
            var s = Math.floor(sec);
            var m = Math.floor(s / 60);
            var r = s % 60;
            return m + ":" + (r < 10 ? "0" + r : r);
        }

        function wakeControls() {
            player.classList.remove("controls-idle");
            clearTimeout(idleTimer);
            if (!video.paused && !video.ended) {
                idleTimer = setTimeout(function () {
                    if (!seeking && !video.paused) {
                        player.classList.add("controls-idle");
                    }
                }, 2400);
            }
        }

        function safePlay() {
            player.classList.add("has-started");
            var pr = video.play();
            if (pr && typeof pr.catch === "function") {
                pr.catch(function () {
                    // Fallback if a browser blocks unmuted autoplay edge case
                    video.muted = true;
                    syncVolumeUI();
                    var pr2 = video.play();
                    if (pr2 && typeof pr2.catch === "function") {
                        pr2.catch(function () { /* user can retry */ });
                    }
                });
            }
            wakeControls();
        }

        function togglePlay() {
            if (video.paused || video.ended) {
                if (video.ended) video.currentTime = 0;
                safePlay();
            } else {
                video.pause();
                wakeControls();
            }
        }

        function syncProgress() {
            var dur = isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
            var cur = isFinite(video.currentTime) ? video.currentTime : 0;
            var pct = dur > 0 ? Math.min(100, Math.max(0, (cur / dur) * 100)) : 0;
            if (filled) filled.style.width = pct.toFixed(3) + "%";
            if (thumb) thumb.style.left = pct.toFixed(3) + "%";
            if (progWrap) progWrap.setAttribute("aria-valuenow", String(Math.round(pct)));
            if (timeEl) timeEl.textContent = fmtTime(cur) + " / " + fmtTime(dur || 56);
        }

        function syncBuffered() {
            var dur = isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
            if (!buffered || dur <= 0 || !video.buffered || video.buffered.length === 0) return;
            var end = video.buffered.end(video.buffered.length - 1);
            var pct = Math.min(100, Math.max(0, (end / dur) * 100));
            buffered.style.width = pct.toFixed(2) + "%";
        }

        function syncVolumeUI() {
            var muted = video.muted || video.volume === 0;
            player.classList.toggle("is-muted", muted);
            if (volSlider) volSlider.value = muted ? "0" : String(video.volume);
        }

        function seekFromClientX(clientX) {
            if (!progWrap) return;
            var dur = isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
            if (dur <= 0) return;
            var rect = progWrap.getBoundingClientRect();
            var ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
            video.currentTime = ratio * dur;
            syncProgress();
        }

        function toggleFullscreen() {
            var fsEl = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
            if (fsEl) {
                var exitFn = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen;
                if (exitFn) exitFn.call(document);
                return;
            }
            if (player.requestFullscreen) {
                player.requestFullscreen().catch(function () {});
            } else if (player.webkitRequestFullscreen) {
                player.webkitRequestFullscreen();
            } else if (player.mozRequestFullScreen) {
                player.mozRequestFullScreen();
            } else if (typeof video.webkitEnterFullscreen === "function") {
                // iOS Safari native fullscreen fallback
                video.webkitEnterFullscreen();
            }
        }

        function syncFullscreenUI() {
            var fsEl = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
            player.classList.toggle("is-fullscreen", Boolean(fsEl));
        }

        if (cover) {
            cover.addEventListener("click", function () { safePlay(); });
        }
        if (bigPlay) {
            bigPlay.addEventListener("click", function (e) {
                e.stopPropagation();
                safePlay();
            });
        }
        if (playBtn) {
            playBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                togglePlay();
            });
        }

        video.addEventListener("click", function () {
            togglePlay();
        });
        video.addEventListener("dblclick", function () {
            toggleFullscreen();
        });

        video.addEventListener("loadedmetadata", function () {
            if (durBadge && isFinite(video.duration) && video.duration > 0) {
                durBadge.textContent = fmtTime(video.duration);
            }
            syncProgress();
            syncBuffered();
        });
        video.addEventListener("timeupdate", syncProgress);
        video.addEventListener("progress", syncBuffered);
        video.addEventListener("volumechange", syncVolumeUI);

        video.addEventListener("play", function () {
            player.classList.add("has-started", "is-playing");
            wakeControls();
        });
        video.addEventListener("pause", function () {
            player.classList.remove("is-playing", "controls-idle");
            clearTimeout(idleTimer);
        });
        video.addEventListener("ended", function () {
            player.classList.remove("is-playing", "has-started", "controls-idle");
            clearTimeout(idleTimer);
            syncProgress();
        });

        if (muteBtn) {
            muteBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                if (video.muted || video.volume === 0) {
                    video.muted = false;
                    video.volume = lastVol > 0.05 ? lastVol : 1;
                } else {
                    lastVol = video.volume;
                    video.muted = true;
                }
                syncVolumeUI();
                wakeControls();
            });
        }

        if (volSlider) {
            volSlider.addEventListener("input", function () {
                var v = parseFloat(volSlider.value);
                video.volume = isNaN(v) ? 1 : v;
                video.muted = video.volume === 0;
                if (video.volume > 0) lastVol = video.volume;
                syncVolumeUI();
                wakeControls();
            });
        }

        if (fsBtn) {
            fsBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                toggleFullscreen();
                wakeControls();
            });
        }

        if (progWrap) {
            var onPointerDown = function (clientX) {
                seeking = true;
                progWrap.classList.add("is-seeking");
                seekFromClientX(clientX);
                wakeControls();
            };
            var onPointerMove = function (clientX) {
                if (!seeking) return;
                seekFromClientX(clientX);
            };
            var onPointerUp = function () {
                if (!seeking) return;
                seeking = false;
                progWrap.classList.remove("is-seeking");
                wakeControls();
            };

            progWrap.addEventListener("mousedown", function (e) {
                e.preventDefault();
                onPointerDown(e.clientX);
            });
            window.addEventListener("mousemove", function (e) { onPointerMove(e.clientX); });
            window.addEventListener("mouseup", onPointerUp);

            progWrap.addEventListener("touchstart", function (e) {
                if (e.touches && e.touches[0]) onPointerDown(e.touches[0].clientX);
            }, { passive: true });
            window.addEventListener("touchmove", function (e) {
                if (seeking && e.touches && e.touches[0]) onPointerMove(e.touches[0].clientX);
            }, { passive: true });
            window.addEventListener("touchend", onPointerUp);
        }

        player.addEventListener("mousemove", wakeControls);
        player.addEventListener("touchstart", wakeControls, { passive: true });
        player.addEventListener("mouseleave", function () {
            if (!video.paused && !seeking) {
                clearTimeout(idleTimer);
                idleTimer = setTimeout(function () {
                    if (!video.paused && !seeking) player.classList.add("controls-idle");
                }, 900);
            }
        });

        player.addEventListener("keydown", function (e) {
            if (e.key === " " || e.key === "k" || e.key === "K") {
                e.preventDefault();
                togglePlay();
            } else if (e.key === "m" || e.key === "M") {
                e.preventDefault();
                if (muteBtn) muteBtn.click();
            } else if (e.key === "f" || e.key === "F") {
                e.preventDefault();
                toggleFullscreen();
            } else if (e.key === "ArrowRight") {
                e.preventDefault();
                video.currentTime = Math.min(video.duration || 0, video.currentTime + 5);
                wakeControls();
            } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                video.currentTime = Math.max(0, video.currentTime - 5);
                wakeControls();
            }
        });

        document.addEventListener("fullscreenchange", syncFullscreenUI);
        document.addEventListener("webkitfullscreenchange", syncFullscreenUI);
        document.addEventListener("mozfullscreenchange", syncFullscreenUI);

        syncVolumeUI();
        syncProgress();
    }
})();
