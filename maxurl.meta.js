// ==UserScript==
// @name              Image Max URL (unofficial dev version)
// @name:en           Image Max URL (unofficial dev version)
// @name:ar           Image Max URL (unofficial dev version)
// @name:cs           Image Max URL (unofficial dev version)
// @name:da           Image Max URL (unofficial dev version)
// @name:de           Image Max URL (unofficial dev version)
// @name:el           Image Max URL (unofficial dev version)
// @name:eo           Image Max URL (unofficial dev version)
// @name:es           Image Max URL (unofficial dev version)
// @name:fi           Image Max URL (unofficial dev version)
// @name:fr           Image Max URL (unofficial dev version)
// @name:fr-CA        Image Max URL (unofficial dev version)
// @name:he           Image Max URL (unofficial dev version)
// @name:hi           Image Max URL (unofficial dev version)
// @name:hu           Image Max URL (unofficial dev version)
// @name:id           Image Max URL (unofficial dev version)
// @name:it           Image Max URL (unofficial dev version)
// @name:ja           Image Max URL (unofficial dev version)
// @name:ko           Image Max URL (unofficial dev version)
// @name:nb           Image Max URL (unofficial dev version)
// @name:nl           Image Max URL (unofficial dev version)
// @name:pl           Image Max URL (unofficial dev version)
// @name:pt-BR        Image Max URL (unofficial dev version)
// @name:ru           Image Max URL (unofficial dev version)
// @name:bg           Image Max URL (unofficial dev version)
// @name:uk           Image Max URL (unofficial dev version)
// @name:th           Image Max URL (unofficial dev version)
// @name:tr           Image Max URL (unofficial dev version)
// @name:vi           Image Max URL (unofficial dev version)
// @name:zh-CN        Image Max URL (unofficial dev version)
// @name:zh-TW        Image Max URL (unofficial dev version)
// @name:zh-HK        Image Max URL (unofficial dev version)
// @description       Finds larger or original versions of images and videos for 9800+ websites, including a powerful media popup and download feature
// @description:en    Finds larger or original versions of images and videos for 9800+ websites, including a powerful media popup and download feature
// @description:ar    البحث عن نسخ أكبر أو أصلية من الصور لأكثر من 9800 موقع ويب
// @description:cs    Vyhledá větší nebo původní verze obrázků a videí pro více než 9800 webů
// @description:da    Finder større eller originale versioner af billeder og videoer til mere end 9800 websteder
// @description:de    Sucht nach größeren oder originalen Versionen von Bildern und Videos für mehr als 9800 Websites
// @description:el    Βρίσκει μεγαλύτερες ή πρωτότυπες εκδόσεις εικόνων και βίντεο για περισσότερους από 9800 ιστότοπους
// @description:eo    Trovas pli grandajn aŭ originalajn versiojn de bildoj kaj filmetoj por pli ol 9800 retejoj
// @description:es    Encuentra imágenes más grandes y originales para más de 9800 sitios
// @description:fi    Etsii suurempia tai alkuperäisiä versioita kuvista ja videoista yli 9800 verkkosivustolle
// @description:fr    Trouve des versions plus grandes ou originales d'images et de vidéos pour plus de 9 800 sites web, y compris une puissante fonction de popup média
// @description:fr-CA Trouve des versions plus grandes ou originales d'images et de vidéos pour plus de 9 800 sites web, y compris une puissante fonction de popup média
// @description:he    מוצא גרסאות גדולות יותר או מקוריות של תמונות וסרטונים עבור יותר מ-9800 אתרים
// @description:hi    9800 से अधिक वेबसाइटों के लिए फ़ोटो और वीडियो के बड़े या मूल संस्करण ढूँढता है
// @description:hu    Több mint 9800 webhely képének és videóinak nagyobb vagy eredeti változatát találja
// @description:id    Menemukan versi gambar dan video yang lebih besar atau orisinal untuk lebih dari 9800 situs web
// @description:it    Trova versioni più grandi o originali di immagini e video per oltre 9800 siti web
// @description:ja    9800以上のウェブサイトで高画質や原本画像を見つけ出します
// @description:ko    9800개 이상의 사이트에 대해 고화질이나 원본 이미지를 찾아드립니다
// @description:nb    Finner større eller originale versjoner av bilder og videoer for mer enn 9800 nettsteder
// @description:nl    Vindt grotere of originele versies van foto's en video's voor meer dan 9800 websites
// @description:pl    Wyszukuje większe lub oryginalne wersje obrazów i filmów dla ponad 9800 stron internetowych
// @description:pt-BR Encontra versões maiores ou originais de imagens e vídeos para mais de 9800 sites
// @description:ru    Находит увеличенные или оригинальные версии изображений и видео для 9800+ сайтов. Имеет мощную функцию всплывающего окна и скачивание медиафайлов.
// @description:bg    Намира увеличени или оригинални версии на изображения за повече от 9800 уеб сайтове
// @description:uk    Знаходить збільшені або оригінальні версії зображень для більш ніж 9800 веб-сайтів
// @description:th    หาที่ใหญ่กว่าหรือเวอร์ชั่นดั้งเดิมของภาพทั้งหมดและวีดีโอสำหรับมากกว่า 9800 งเว็บไซต์
// @description:tr    9800'den fazla web sitesi için resim ve videoların daha büyük veya orijinal sürümlerini bulur
// @description:vi    Tìm phiên bản lớn hơn hoặc phiên bản gốc của hình ảnh và video cho hơn 9800 trang web
// @description:zh-CN 在近万个网站上查找尺寸更大或原版的图像/视频，提供媒体文件小弹窗和下载功能
// @description:zh-TW 為9800多個網站查找更大或原始圖像
// @description:zh-HK 為9800多個網站查找更大或原始圖像
// @namespace         http://tampermonkey.net/
// @version           main-6d58450
// @author            qsniyg
// @homepageURL       https://qsniyg.github.io/maxurl/options.html
// @supportURL        https://github.com/qsniyg/maxurl/issues
// @icon              https://raw.githubusercontent.com/qsniyg/maxurl/b5c5488ec05e6e2398d4e0d6e32f1bbad115f6d2/resources/logo_256.png
// @include           *
// @grant             GM.xmlHttpRequest
// @grant             GM_xmlhttpRequest
// @grant             GM.setValue
// @grant             GM_setValue
// @grant             GM.getValue
// @grant             GM_getValue
// @grant             GM_registerMenuCommand
// @grant             GM_unregisterMenuCommand
// @grant             GM_addValueChangeListener
// @grant             GM_download
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_notification
// @grant             GM.notification
// @grant             GM_setClipboard
// @grant             GM.setClipboard
// @connect           *
// api.github.com is used for checking for updates (can be disabled through the "Check Updates" setting)
// @connect           api.github.com
// @run-at            document-start
// @license           Apache-2.0
// non-greasyfork/oujs versions need updateURL and downloadURL to auto-update for certain userscript managers
// @updateURL         https://raw.githubusercontent.com/F640/qsniyg-maxurl/dist/maxurl.meta.js
// @downloadURL       https://raw.githubusercontent.com/F640/qsniyg-maxurl/dist/maxurl.user.js
// imu:require_rules  (this is replaced by the build system for userscript versions that require external rules)
// ==/UserScript==

