var Search = React.createClass({  
    getInitialState: function() {  
        return {lists: [], temp: []}  
    },  
    update: function() {  
        this.state.temp = [];  
        var value = this.refs.textInput.value;  
        var lists = this.state.lists;  
        for (var i = 0; i < lists.length; i++) {  
            if (value != "" && lists[i].indexOf(value) == 0) // 注意value为空的情况  
                this.state.temp.push(lists[i]);  
        }  
        this.setState({temp: this.state.temp});  
    },    
    addList: function(e) {  
        e.preventDefault();  
        if (this.state.lists.indexOf(this.refs.textInput.value) == -1) // 为避免添加重复数据，若数据已存在于state的lists中，则不再添加  
            this.state.lists.push(this.refs.textInput.value);  
        this.setState({lists: this.state.lists});  
        this.refs.textInput.value = "";  
        this.state.temp = [];  
        this.setState({temp: this.state.temp});  
    },    
    selectList: function(index) {  
        this.refs.textInput.value = document.getElementById(index).innerText;  
        this.state.temp = [];  
        this.setState({temp: this.state.temp});  
    },  
    render: function() {  
        return (  
            <div>  
                <form onSubmit={this.addList}>  
                    <input type="text" placeholder="Please enter your name!" ref="textInput" autoComplete="off" onChange={this.update}/>  
                </form>  
                <List lists={this.state.temp} selectList={this.selectList}/>  
            </div>  
        );  
    }  
});  
var List = React.createClass({  
    selectList: function(e) {  
        var index = e.target.getAttribute('id');  
        this.props.selectList(index);  
    },  
    render: function() {  
        return (  
            <ul id="lists">  
            {  
                this.props.lists.map(function(list, index) {  
                    return (  
                        <li id={index} key={index} onClick={this.selectList}>   
                            {list}  
                        </li>  
                    );  
                }.bind(this))  
            }  
            </ul>  
        );  
    }  
});  
ReactDOM.render(  
    <Search />,  
    document.getElementById("example_01")  
);  