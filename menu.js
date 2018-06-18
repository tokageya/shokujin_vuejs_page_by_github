/*masterにそれぞれ選択肢についての情報を書く*/
const master = {
    tables:[
        {label:'A（円卓）', value:0},
        {label:'B（円卓）', value:1},
        {label:'C（円卓）', value:2},
        {label:'1', value:3},
        {label:'2', value:4},
        {label:'3', value:5},
        {label:'4', value:6},
        {label:'5', value:7},
        {label:'6', value:8},
        {label:'7', value:9},
        {label:'8', value:10},
        {label:'9', value:11},
        {label:'10', value:12}
    ],
    number_of_people:[
        {label:'1', value:1},
        {label:'2', value:2},
        {label:'3', value:3},
        {label:'4', value:4},
        {label:'5', value:5},
        {label:'6', value:6},
        {label:'7', value:7},
        {label:'8', value:8},
        {label:'9', value:9}
    ],
    menus:[
        {label:'1番麻婆豆腐', value:0, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0},{text:"卵", price:0}]},
        {label:'2番豆腐のうま煮', value:1, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0},{text:"卵",price:0},{text:"麺",price:-90}]},
        {label:'3番肉野菜炒め', value:2, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0}]},
        {label:'4番豚肉とザーサイの細切り炒め', value:3, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0}]},
        {label:'5番麻婆春雨', value:4, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0}]},
        {label:'6番かに玉子', value:5, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0},{text:"チリソース",price:0}]},
        {label:'7番ニラ玉子', value:6, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0}]},
        {label:'8番玉ねぎと玉子炒め', value:7, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0}]},
        {label:'9番週変わり定食', value:8, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0}]},
        {label:'15番週変わり定食', value:9, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0}]},
        {label:'Aラーメンと半炒飯', value:10},
        {label:'B炒飯と焼き餃子', value:11},
        {label:'Cラーメンと焼き餃子', value:12},
        {label:'D野菜湯麺と焼き餃子', value:13},
        {label:'E四川担担麺と半炒飯', value:14},
        {label:'おすすめ', value:15}
    ],
    amounts:[
        {text:'', label:'(指定なし)', value:0},
        {text:'具大盛り', label:'具大盛り(+100円)', value:1},
        {text:'ごはん大盛り', label:'ごはん大盛り', value:2},
        {text:'ハーフ', label:'ハーフ(-100円)', value:3},
    ],
    option1s:[
        {text:'', label:'(指定なし)', value:0},
        {text:'小辛', label:'小辛', value:1},
        {text:'中辛', label:'中辛', value:2},
        {text:'辛', label:'辛', value:3},
        {text:'甘口', label:'甘口', value:4},
        {text:'激甘', label:'激甘', value:5},
    ],
    option2s:[
        {text:'にんにく',value:0},
        {text:'山椒',value:1},
        {text:'味濃いめ',value:2},
        {text:'卵', value:3},
    ],
};


let form = new Vue({
    //************モデル→ヴュー→アップデート***************//
    //--------------vue.jsは「関連付けること」につよい---------------//

    /*elオプション*/
    //ここでidと関連付けて動きを関連つけるものを動かす//
    el: '#god_lizard',

    /*dataオプション*/
    //dataを置く//
    //関数(function)のみ受け付ける//
    data: function() {
        return {
            selected_table: 0,
            number_of_people: 1,
            selected_menu: [0, 0, 0, 0, 0, 0, 0, 0],
            selected_amount: [0, 0, 0, 0, 0, 0, 0, 0],
            selected_option1:[0, 0, 0, 0, 0, 0, 0, 0],
            selected_option2: [[], [], [], [], [], [], [], []],

        }
    },

    /*watchオプション*/
    //監視プロパティ。選択可能な項目を制御する//
    watch: {
        selected_option2:function(){
            this.selected_option2.forEach(function(each_selected_option, index){
                /*もし選択肢に辛さ選択が複数されていたら前に選択していたものを消す*/
                let hot_flag = -1;
                let count = 0;
                for(count = 0; count < each_selected_option.length; count++){
                    if(hot_flag == -1 &&( each_selected_option[count].text == "小辛" || each_selected_option[count].text == "中辛" || each_selected_option[count].text == "辛")){
                        hot_flag = count;
                        console.log("変数の値がやばいのは"+count+"の"+hot_flag);
                    }
                    else if(each_selected_option[count].text == "小辛" || each_selected_option[count].text == "中辛" || each_selected_option[count].text == "辛"){
                        each_selected_option.splice(hot_flag,1);
                        console.log(hot_flag+"番目の配列の要素を消したゾ");
                    }
                }
                /*もし選択肢が3個以上選ばれそうになったら消す*/
                if(each_selected_option.length >= 3){
                    each_selected_option.shift();
                }
            })
            
        },
    },

    /*computed　　(固有名詞。名前は指定されてる)*/
    //elのデータが変更されたときに、jsが動く//
    
    computed: {
        /*this(このlet formの中)のselected_menu配列の中身を返す？*/
        selected_menu_obj: function () {
            return this.selected_menu.map(function (i) { return master.menus[i]})
        },
        
        /*this(このlet formの中)のstr_table変数の中身を返す*/
        str_table: function() {
            let str = "";
            return master.tables[this.selected_table].label
        },
        
        /*今回の注文でどのような文書が作成されるかを表示するために、str_order変数に文字列を入れて返す*/
        str_order: function() {
            let str_order = "";

            for(let i=0, l=this.number_of_people;i<l;i++){

                let str_menu = "", str_amount = "", str_option1 = "", str_option2 = "";

                /*メニューが変更されたときに要素を追加するためのstr_menu*/
                str_menu = master.menus[this.selected_menu[i]].label

                /*テキストを条件の中に入れるためのstr_amount*/
                str_amount = master.amounts[this.selected_amount[i]].text
                
                /*ハーフが以外が選択されたときに、他のオプション*/
                if (this.selected_amount[i] != 3) {
                    str_option1 = master.option1s[this.selected_option1[i]].text;
                    str_option2 = this.selected_option2[i].map(j => j.text).join(" ")
                }
                str_order += str_menu + " " + str_amount + " " + str_option2 + "\n"
            }

            return str_order;
        },
        line_url: function() {
            let line_str = "line://msg/text/?" + encodeURIComponent("机: " + this.str_table + "\n" + this.str_order);

            return line_str;
        },
    }
});