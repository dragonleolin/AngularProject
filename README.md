# AngularProject
 
 測試BRANCH
## 建立一個Angular專案
 
Angular CLI 安裝方式 ➢ npm install @angular/cli
 
查詢指定套件目前所有版本 ➢ npm show @angular/cli@* version

啟動開發伺服器並自動開啟瀏覽器 ➢ ng serve --open

執行在 Production mode ➢ ng serve --prod

透過藍圖（blueprint）產生程式碼 ➢ ng generate 藍圖 元件名稱 ➢ ng g 藍圖 元件名稱 （簡寫）

產生 Data Service 服務元件 • ng g s data 

建立服務元件 ➢ 產生 Charts Module • ng g m charts 

資料繫結的四種方法 
⚫ 內嵌繫結（interpolation） ➢ {{property}}
⚫ 屬性繫結（Property Binding） ➢ [propertyName]=“statement”
⚫ 事件繫結（Event Binding） ➢ (eventName)=“someMethod($event)”
⚫ 雙向繫結（Two-way Binding）➢ [(ngModel)]=‘property’

 內建的結構指令：NgIf、NgFor 或 NgSwitch • 請注意 ngSwitch 前面不要加上 * 星號 
 • 請注意 ngIf、ngFor、ngSwitchDefault 與 前面要 加上 * 星號
 
傳入屬性 ➢ @Input() myProperty; ➢ 在外層元件請記得用「屬性繫結」傳入資料
傳出事件 ➢ @Output() myEvent = new EventEmitter<any>(); ➢ this.myEvent.emit(data); ➢ 在外層元件請使用「事件繫結」來接收傳出的資料 • 在Template 中使用 $event 代表子元件傳出的資料
  
## 使用HttpClient前置作業
Appmodule.ts匯入HttpClient模組
元件內使用httpClient

## 關於 Angular Router 機制 
關於 Angular 的元件架構 ➢ 整個用程式是以一個樹狀結構的元件組成 ➢ 每個頁面都可以切成多個重複使用的 UI 元件 ➢ 每個頁面就是一個 UI 元件 ➢ 最上層 UI 元件（根元件）就是 AppComponent
關於 Angular Router 的主要用途 ➢ 負責重新配置頁面中應該顯示哪些 UI元件 ➢ 負責儲存頁面中 UI 元件的配置狀態（Router狀態） ➢ Router 狀態定義著頁面上應該顯示哪些元件 ➢ Router 狀態最重要的就是紀錄網址路徑與元件之間的關係 • 就是 src/index.html 裡面的 <base href=“/”> • 切換 Router 都是透過 URL 進行切換，因此base path很重要！

### 認識 Reactive Form 表單開發模式 
模型驅動表單 (Model-driven Forms) 又稱 Reactive Forms ➢ 在同一個 Angular 應用程式中可以混合使用兩種模型

⚫ AbstractControl ➢ 這是一個抽象類別。它是 Reactive Forms 架構中 3 個表單類別共同的抽象基底類別 (abstract base class)，這 3 個表單控制項就是 FormControl, FormGroup 與 FormArray 類別。這裡定義 所有表單 控制項共用的屬性與方法，有一部分屬性為 Observable 型別 
⚫ FormControl ➢ 用來追蹤某一個表單控制項的欄位值與驗證狀態 
⚫ FormGroup ➢ 用來追蹤一群表單控制項的欄位值與驗證狀態 ➢ 該群組下的欄位值包含所有子控制項與子群組的所有集合 ➢ 該群組會以「物件」的方式進行群組 ( 欄位之間沒有順序性，索引值為字串 ) 
⚫ FormArray ➢ 用來追蹤一群表單控制項的欄位值與驗證狀態 ➢ 該群組下的欄位值包含所有子控制項與子群組的所有集合 ➢ 該群組會以「陣列」的方式進行群組 ( 欄位之間的索引值為數值 )
