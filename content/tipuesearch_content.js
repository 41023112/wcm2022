var tipuesearch = {"pages": [{'title': 'About', 'text': '四設一甲41023112王啟騰 \n 倉儲: https://github.com/41023112/wcm2022 \xa0 \n 網頁: https://41023112.github.io/wcm2022/content/index.html \xa0 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Online', 'text': '', 'tags': '', 'url': 'Online.html'}, {'title': 'w13', 'text': '\n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '\n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n Filename:  .py   \n Run   Output   清除輸出區 清除繪圖區 Reload \n \n \n \n  ****************************** keyword start  \n \n \n w14 \n', 'tags': '', 'url': 'w14.html'}, {'title': 'final報告', 'text': 'Final \n Week1: 電腦輔助設計室 IPv6j 網路設定 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 創建 wcm2022 倉儲 \n Week2: 解釋 python 程序是如何執行的 \n Week3: 學習建立可攜系統 \n Week4: 討論同學倉儲為什麼無法添加 \n Week5: 全校運動會 \n Week6: 清明節放假 \n Week7: 學習設定 nginx \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 建立 wink 教學影片 \n Week8: 加入學員倉儲與網頁連結 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 加入 w8 虛擬主機 wink 專案檔 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 整理課程主題，並提出下半學期課程學習要點 \n Week9: 在 wink 影片加入註解並貼至個人網站 \n Week10: 加入電腦輔助設計室個人虛擬主機 IP 設定 \n Week11: 加入 w11_1a 網路對接 ( 更換 IP) \n Week12: 建立 virualbox 虛擬主機及設定伺服器 \n Week13: 建立 brython 環境 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0 加入 tetris 遊戲 \n Week14: 將舊資料中刪除沒有在註冊名單中的成員 \n Week15: 端午節放假 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  將 tetris 遊戲加入計分系統並做出報告 \n Week16: 期末報告整理放入個人網站 \n', 'tags': '', 'url': 'final報告.html'}, {'title': 'Tetris', 'text': '\n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n Filename:  .py   \n Run   Output   清除輸出區 清除繪圖區 Reload \n \n \n \n', 'tags': '', 'url': 'Tetris.html'}, {'title': 'midterm', 'text': '\n \n \n   \n \n \n \n', 'tags': '', 'url': 'midterm.html'}, {'title': 'Tetris線上遊戲專案', 'text': '<h2>w13</h2> \n <!--  導入  brython  程式庫  --> \n <script src="./../cmsimde/static/brython.js"></script> \n <script src="./../cmsimde/static/brython_stdlib.js"></script> \n #上面兩行程式碼會將 static 資料夾 \n #裡的 brython.js 和 brython_stdlib.js ( brython 主程式和標準程式庫)導入 \n \n <!--  啟動  Brython --> \n <script> \n window.onload=function(){brython();}  \n </script> \n # window.onload=function() 意思是在頁面加載完立即執行{}裡的動作 \n # {brython();} 是啟動 Brython 。 \n <div id="brython_div"></div> \n # html 的標籤命名 \n #用來當程式產生的動態繪圖所放置的位置 \n <script type="text/python">  \n # python 的標頭 \n \n </script> \n # 標尾 \n', 'tags': '', 'url': 'Tetris線上遊戲專案.html'}, {'title': 'Tetris線上遊戲報告', 'text': 'Tetris 線上遊戲加入計分系統報告 \n \n 1.利用  html  建立一個  DIV  標註物件，將變數顯示的值設為 "Score:" \n 將  score_doc  的  id  設為 "Score:" \n 最後用  brython_div <= score_doc  把  score_doc  插入到頁面裡。 \n \n 2.定義 update_score 函式 \n 將 score_doc.innerHTML 定義為 ” score :” 加字串  score \n \n 3. 此函式為老師用來判斷得多少分的函式，每次的得分是消除行數的 2 次方,  update_score(self.score) 此程式是將代表分數加總的變數  score  代入 update_score() 這個函式並返回， 返回的形式為 :  Score: self.score \n', 'tags': '', 'url': 'Tetris線上遊戲報告.html'}, {'title': 'w17', 'text': '程式碼註解 \n \n 心得:這次在推送的過程中遇到了一點問題，由於我的影片檔案太大，無法放在downloads推送上去，所以改成上傳Youtube再放進動態頁面推送上去。', 'tags': '', 'url': 'w17.html'}]};