# EXMA Traning 03/24 Homework
* 繳交期限
  * 至 4/01 (六) 下午 15:00
* 繳交方式
  * 推到 homework 分支，並與 master 分支比較發起 Pull Request
* 作業內容
  * 這是一個只有 toggle todo 功能的 Todo App
  * 本作業 todos 資料來源是後端 API，網址是 `/api/todos/`
  * 請將有註解的地方所缺少的程式碼依據說明來補上，完成從後端 API 來請求 todos 資料，並根據請求狀態顯示對應 UI 的流程
    * src/reducers/TodoAction.js    
    * src/reducers/TodoReducer.js
    * src/containers/TodoContainer.jsx
  * Fetch with async action 的寫法可以參考上課投影片
    * [http://slides.com/tz5514/deck-1#/9/4](http://slides.com/tz5514/deck-1#/9/4)    

* 如何運行開發環境
  
  環境需求：Node.js 6.9.x 以上
  ```
  git clone {你的 repo 地址}

  git branch homework
  git checkout homework
  npm install
  npm start
  ```
  然後前往 [http://localhost:3000](http://localhost:3000)
  
  當程式碼有所更改並存檔時，Webpack 會自動重新 compile & bundle
  
* 如何繳交作業
  ```
  git push origin homework
  ```
  然後到發起一個與 master 分支比較的 PR