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
    num_people:[
        {label:'1', value:1},
        {label:'2', value:2},
        {label:'3', value:3},
        {label:'4', value:4},
        {label:'5', value:5},
        {label:'6', value:6},
        {label:'7', value:7},
        {label:'8', value:8},
    ],
    menus:[
        {label:'1番 麻婆豆腐', value:0, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "甘口",price: 0},{text: "激甘",price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0},{text:"卵", price:0}]},
        {label:'2番 豆腐のうま煮', value:1, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "甘口",price: 0},{text: "激甘",price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0},{text:"卵",price:0},{text:"麺",price:-90}]},
        {label:'3番 肉野菜炒め', value:2, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "甘口",price: 0},{text: "激甘",price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0},{text:"麺",price:-90}]},
        {label:'4番 豚肉とザーサイの細切り炒め', value:3, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "甘口",price: 0},{text: "激甘",price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0},{text:"麺",price:-90}]},
        {label:'5番 麻婆春雨', value:4, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "甘口",price: 0},{text: "激甘",price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0},{text:"麺",price:-90}]},
        {label:'6番 かに玉子', value:5, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "甘口",price: 0},{text: "激甘",price: 0},{text:"チリソース",price:0},{text: "醤油",price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0},{text:"麺",price:-90}]},
        {label:'7番 ニラ玉子', value:6, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "甘口",price: 0},{text: "激甘",price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0},{text:"麺",price:-90}]},
        {label:'8番 玉ねぎと玉子炒め', value:7, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "甘口",price: 0},{text: "激甘",price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0},{text:"麺",price:-90}]},
        {label:'9番 週変わり定食', value:8, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "甘口",price: 0},{text: "激甘",price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0}]},
        {label:'15番 週変わり定食', value:9, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "甘口",price: 0},{text: "激甘",price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0}]},
        {label:'おすすめ', value:15, choice:[{text: "小辛", price: 0},{text: "中辛", price: 0},{text: "辛", price: 0},{text: "甘口",price: 0},{text: "激甘",price: 0},{text: "にんにく", price: 0},{text:"山椒",price:0}]},
    ],
    amounts:[
        {text:'', label:'(指定なし)', value:0},
        {text:'具大盛り', label:'具大盛り(+100円)', value:1},
        {text:'ごはん大盛り', label:'ごはん大盛り', value:2},
        {text:'ハーフ', label:'ハーフ(-100円)', value:3},
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
            /*初期値を代入*/
            selected_table: 0,
            number_of_people: 1,
            selected_menu: [0, 0, 0, 0, 0, 0, 0, 0],
            selected_amount: [0, 0, 0, 0, 0, 0, 0, 0],
            selected_option2: [[], [], [], [], [], [], [], []],
        }
    },
    /*watchオプション*/
    //監視プロパティ。選択可能な項目を制御する//
    watch: {
        selected_menu:function(){
            /*「メニューを選択→オプションが変更→選択されていたメニューの変更」と動作したとき、オプションで選べないものが消えるようにする*/
            this.selected_menu.forEach(function(each_selected_menu,index){
                form.selected_option2.forEach(function(each_selected_option_2,index_2){
                    let count = 0;
                    let mistake_option_flag = 1;
                    for(count = 0; count < master.menus[index].choice.length; count ++){
                        if(master.menus[each_selected_menu].choice[count] == master.menus[index].choice[count]){
                            mistake_option_flag = 0;
                        }
                    }
                    if(mistake_option_flag){
                        form.selected_option2[index_2] = [];
                    }
                })
            })
        },
        selected_option2:function(){
            this.selected_option2.forEach(function(each_selected_option){
                /*もし選択肢に辛さ選択が複数されていたら前に選択していたものを消す*/
                let hot_flag = -1;
                let count = 0;
                for(count = 0; count < each_selected_option.length; count++){
                    if(hot_flag == -1 &&( each_selected_option[count].text == "小辛" || each_selected_option[count].text == "中辛" || each_selected_option[count].text == "辛")){
                        hot_flag = count;
                    }
                    else if(each_selected_option[count].text == "小辛" || each_selected_option[count].text == "中辛" || each_selected_option[count].text == "辛"){
                        each_selected_option.splice(hot_flag,1);
                    }
                }
                /*もし選択肢に甘さ選択が複数されていたら前に選択していたものを消す*/
                let sweet_flag = -1;
                for(count = 0; count < each_selected_option.length; count++){
                    if(sweet_flag == -1 &&( each_selected_option[count].text == "甘口" || each_selected_option[count].text == "激甘")){
                        sweet_flag = count;
                    }
                    else if(each_selected_option[count].text == "甘口" || each_selected_option[count].text == "激甘"){
                        each_selected_option.splice(sweet_flag,1);
                    }
                }
                /*もし6番の選択肢に味付け選択が複数されていたら前に選択していたものを消す*/
                let seasoning_flag = -1;
                for(count = 0; count < each_selected_option.length; count++){
                    if(seasoning_flag == -1 &&( each_selected_option[count].text == "チリソース" || each_selected_option[count].text == "醤油")){
                        seasoning_flag = count;
                    }
                    else if(each_selected_option[count].text == "チリソース" || each_selected_option[count].text == "醤油"){
                        each_selected_option.splice(seasoning_flag,1);
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
        /*選ばれた商品からメニューを選択する*/
        selected_menu_obj: function() {
            return this.selected_menu.map(function (i) { return master.menus[i]});
        },
        /*this(このlet formの中)のstr_table変数の中身を返す*/
        str_table: function() {
            //let str = "";
            return master.tables[this.selected_table].label;
        },
        /*今回の注文でどのような文書が作成されるかを表示するために、str_order変数に文字列を入れて返す*/
        str_order: function() {
            let str_order = "";
            let i = 0;
            for(i=0;i<this.number_of_people;i++){
                //変数 i には0から順番に1人目,2人目,3人…と入っていく
                let str_menu = "", str_amount = "", str_option2 = "";

                /*メニューが変更されたときに要素を追加するためのstr_menu*/
                str_menu = master.menus[this.selected_menu[i]].label;

                /*テキストを条件の中に入れるためのstr_amount*/
                str_amount = master.amounts[this.selected_amount[i]].text;
                
                /*ハーフが以外が選択されたときに、他のオプション*/
                if (this.selected_amount[i] != 3) {
                    str_option2 = this.selected_option2[i].map(j => j.text).join(" ");
                }
                str_order += str_menu + " " + str_amount + " " + str_option2 + "\n";
            }
            return str_order;
        },
        line_url: function() {
            let line_str = "line://msg/text/?" + encodeURIComponent("机: " + this.str_table + "\n" + this.str_order);
            return line_str;
        },
    }
});