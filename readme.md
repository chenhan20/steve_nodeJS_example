***關於本專案***
## 目的
練習建立一簡單且具體的框架網頁
:+1: :sparkles: :camel: :tada:
:rocket: :metal: :octocat: 
目標至少要做出crud的功能

## 目前問題
nav_bar的dropdown不知道為何無法往下展開(以解決)--原因為沒載入bootstrap.js

## 目前進度
只做出檢核使用者，與react基礎了解
在example04做leetcode練習


---

## 實作練習
暫時沒有連資料庫，先設定帳號123就可進，若沒輸入123會顯示無用戶
* [登入](https://fast-dusk-17760.herokuapp.com/steve/login)
* [主頁面](https://fast-dusk-17760.herokuapp.com/steve/index)
* [example](https://fast-dusk-17760.herokuapp.com/example/example04)

---
# 登入routes設定(nodejs的路由部分)
```javascript
//直接輸入index進入此頁的話會走這邊
router.get('/index', function(req, res, next) {
  res.render('./main/index', { 
  title: 'Example',
  secoend: 'react_example',
  Accounts: '訪客'
  });
});


//使用post的只有經過post才會經此段，固一定是有從登入那邊來，所以可在此判斷用戶資格
router.post('/index', function(req, res, next) {
  var accounts = req.body.username;
  //暫時先卡這樣，等資料庫部分連接成功後就可直接在這卡判斷
  if(accounts=='123'){
  res.render('./main/index', { 
    title: 'Example',
    secoend: '登入成功',
    Accounts: accounts
  });
}else{
  res.render('./main/login', { 
    exction: '查無此用戶，請重新登入',
  });
}});
```
# example
```javascript
//-----------------------example_01 更改
ReactDOM.render(
  <h1>Hello, world!(使用bebel渲染)</h1>,
  document.getElementById('example_01')
);
//-----------------------example_02
var a=1;
var b=2;
if(b>a){
  ReactDOM.render(
  <h2>a={a},b={b},a+b={a+b}</h2>,
  document.getElementById('example_02')
)};

//------------------------example_03
function Article() { 
  return (
    <div className="article">
      <h1 className="article-title">Title</h1>
      <p className="article-body">Body</p>
    </div>
  );
}

ReactDOM.render(
Article(),
document.getElementById('example_03')
);

//------------------------example_04
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '123'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
      return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <br></br>
        {this.state.value}
      </form>
    );
  }
}


ReactDOM.render(
  <NameForm />,
  document.getElementById('example_04')
);


//------------------------example_05

```

## 相關參考資料(僅研究使用無營利-若有侵權請告知馬上撤除)

* [Edward GITHUB](https://github.com/Edward2net/nodeJs_Example)
* [heroku架設教學](http://ithelp.ithome.com.tw/articles/10189021)
* [login](https://bootsnipp.com/snippets/ypp84)
* [nav_bar](https://bootsnipp.com/snippets/featured/fancy-navbar-login-sign-in-form)

---

### 使用工具及套件
1. [Microsoft Visual Studio Code](https://code.visualstudio.com/)
2. [Node.js](https://nodejs.org/en/)
3. [Express](http://expressjs.com/zh-tw/)
4. [Bootstrap](http://getbootstrap.com)
5. [jQuery](http://www.jquery.com/)
6. [Pug JS](https://pugjs.org/api/getting-started.html)
7. [Markdown](http://dillinger.io/)
8. [heroku](https://www.heroku.com/nodejs)
9. [babel](babeljs.io)


