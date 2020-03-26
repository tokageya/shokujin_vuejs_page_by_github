
/*masterにそれぞれ選択肢についての情報を書く*/
const master = {
    tables:[
        {label:'A（円卓）',text_of_order:"A", value:0},
        {label:'B（円卓）',text_of_order:"B", value:1},
        {label:'C（円卓）',text_of_order:"C", value:2},
        {label:'1',text_of_order:"1", value:3},
        {label:'2',text_of_order:"2", value:4},
        {label:'3',text_of_order:"3", value:5},
        {label:'4',text_of_order:"4", value:6},
        {label:'5',text_of_order:"5", value:7},
        {label:'6',text_of_order:"6", value:8},
        {label:'7',text_of_order:"7", value:9},
        {label:'8',text_of_order:"8", value:10},
        {label:'9',text_of_order:"9", value:11},
        {label:'10',text_of_order:"10", value:12},
    ],
    /*今回は使わない*/
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
    /*ここから探索していく*/
    menus:[
        {label:'1番 麻婆豆腐',text_of_order:"1番", price:600, value:0, choice:[{text: "小辛", accounting: 0},{text: "中辛", accounting: 0},{text: "辛", accounting: 0},{text: "甘口",accounting: 0},{text: "激甘",accounting: 0},{text: "にんにく", accounting: 0},{text:"山椒",accounting:0},{text:"味濃いめ",accounting:0},{text:"卵", accounting:0}]},
        {label:'2番 豆腐のうま煮', text_of_order:"2番", price:600, value:1, choice:[{text: "小辛", accounting: 0},{text: "中辛", accounting: 0},{text: "辛", accounting: 0},{text: "甘口",accounting: 0},{text: "激甘",accounting: 0},{text: "にんにく", accounting: 0},{text:"山椒",accounting:0},{text:"味濃いめ",accounting:0},{text:"塩",price:0},{text:"卵",accounting:0},{text:"麺 (-90円)",accounting:-90}]},
        {label:'3番 肉野菜炒め', text_of_order:"3番", price:600, value:2, choice:[{text: "小辛", accounting: 0},{text: "中辛", accounting: 0},{text: "辛", accounting: 0},{text: "甘口",accounting: 0},{text: "激甘",accounting: 0},{text: "にんにく", accounting: 0},{text:"山椒",accounting:0},{text:"味濃いめ",accounting:0},{text:"麺 (+10円)",accounting:10}]},
        {label:'4番 豚肉とザーサイの細切り炒め', text_of_order:"4番", price:600, value:3, choice:[{text: "小辛", accounting: 0},{text: "中辛", accounting: 0},{text: "辛", accounting: 0},{text: "甘口",accounting: 0},{text: "激甘",accounting: 0},{text: "にんにく", accounting: 0},{text:"山椒",accounting:0},{text:"味濃いめ",accounting:0},{text:"麺 (+10円)",accounting:10}]},
        {label:'5番 麻婆春雨', text_of_order:"5番", price:600, value:4, choice:[{text: "小辛", accounting: 0},{text: "中辛", accounting: 0},{text: "辛", accounting: 0},{text: "甘口",accounting: 0},{text: "激甘",accounting: 0},{text: "にんにく", accounting: 0},{text:"山椒",accounting:0},{text:"味濃いめ",accounting:0},{text:"麺 (+10円)",accounting:10}]},
        {label:'6番 かに玉子', text_of_order:"6番", price:600, value:5,  choice:[{text: "小辛", accounting: 0},{text: "中辛", accounting: 0},{text: "辛", accounting: 0},{text: "甘口",accounting: 0},{text: "激甘",accounting: 0},{text:"チリソース",accounting:0},{text: "醤油",accounting: 0},{text: "にんにく", accounting: 0},{text:"山椒",accounting:0},{text:"味濃いめ",accounting:0},{text:"麺 (+10円)",accounting:10}]},
        {label:'7番 ニラ玉子', text_of_order:"7番", price:600, value:6, choice:[{text: "小辛", accounting: 0},{text: "中辛", accounting: 0},{text: "辛", accounting: 0},{text: "甘口",accounting: 0},{text: "激甘",accounting: 0},{text: "にんにく", accounting: 0},{text:"山椒",accounting:0},{text:"味濃いめ",accounting:0},{text:"麺 (+10円)",accounting:10}]},
        {label:'8番 玉ねぎと玉子炒め', text_of_order:"8番", price:600, value:7, choice:[{text: "小辛", accounting: 0},{text: "中辛", accounting: 0},{text: "辛", accounting: 0},{text: "甘口",accounting: 0},{text: "激甘",accounting: 0},{text: "にんにく", accounting: 0},{text:"山椒",accounting:0},{text:"味濃いめ",accounting:0},{text:"麺 (+10円)",accounting:10}]},
        {label:'9番 週変わり定食(1)', text_of_order:"9番", price:600, value:8, choice:[{text: "小辛", accounting: 0},{text: "中辛", accounting: 0},{text: "辛", accounting: 0},{text: "甘口",accounting: 0},{text: "激甘",accounting: 0},{text: "にんにく", accounting: 0},{text:"山椒",accounting:0},{text:"味濃いめ",accounting:0}]},
        {label:'15番 週代わり定食(2)', text_of_order:"15番", price:750, value:9, choice:[{text: "小辛", accounting: 0},{text: "中辛", accounting: 0},{text: "辛", accounting: 0},{text: "甘口",accounting: 0},{text: "激甘",accounting: 0},{text: "にんにく", accounting: 0},{text:"山椒",accounting:0},{text:"味濃いめ",accounting:0}]},
        {label:'おすすめ', text_of_order:"おすすめ", price:600, value:10, choice:[{text: "小辛", accounting: 0},{text: "中辛", accounting: 0},{text: "辛", accounting: 0},{text: "甘口",accounting: 0},{text: "激甘",accounting: 0},{text: "にんにく", accounting: 0},{text:"山椒",accounting:0},{text:"味濃いめ",accounting:0}]},
    ],
    amounts:[
        {text:'', label:'(指定なし)', price:0, value:0},
        {text:'具大盛り', label:'具大盛り(+150円)', price:150, value:1},
        {text:'ごはん大盛り', label:'ごはん大盛り', price:0, value:2},
        {text:'ハーフ', label:'ハーフ(-100円)', price:-100, value:3},
        {text:'ハーフ', label:'ハーフ(±0円)', price:0, value:4},
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
            LINE_error_flag: 0,
            classOject:{
                'bg-danger':false,
            }
        }
    },
    /*watchオプション*/
    //監視プロパティ。選択可能な項目を制御する//
    watch: {
        selected_menu:function(){
            /*「メニューを選択→オプションが変更→選択されていたメニューの変更」と動作したとき、オプションで選べないものがある場合、選択していたオプションを消すようにする*/
            this.selected_menu.forEach(function(each_selected_menu,index){
                //let mistake_option_flag = false;
                //let each_each_selected_menu = master.menus[each_selected_menu].choice.map(j=>j.text);
                /*今選ばれているオプション配列をまわす */
                /*for(let a of form.selected_option2[index]){
                    if(!each_each_selected_menu.includes(a.text)){
                        mistake_option_flag = true;
                        break;
                    }
                }*/
                form.selected_option2[index] = [];
                
                /*if(mistake_option_flag){
                    form.selected_option2[index] = [];
                }*/
                
            })
            this.LINE_error_flag = 0;
        },
        selected_option2:function(){
            let local_LINE_error_flag = 0;
            this.selected_option2.forEach(function(each_selected_option,index){
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
                /*もし選択肢が3個以上選ばれそうになったらLINEエラーフラグを立てる*/
                if(each_selected_option.length >= 3){
                    local_LINE_error_flag = 1;
                }
            })
            if(local_LINE_error_flag){
                this.LINE_error_flag = local_LINE_error_flag;
            }
            else{
                this.LINE_error_flag = 0;
            }
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
            return master.tables[this.selected_table].text_of_order;
        },
        /*今回の注文でどのような文書が作成されるかを表示するために、str_order変数に文字列を入れて返す*/
        str_order: function() {
            let str_order = "";
            let i = 0;
            for(i=0;i<this.number_of_people;i++){
                //変数 i には0から順番に1人目,2人目,3人…と入っていく
                let str_menu = "", str_amount = "", str_option2 = "";

                /*メニューが変更されたときに要素を追加するためのstr_menu*/
                str_menu = master.menus[this.selected_menu[i]].text_of_order;

                /*テキストを条件の中に入れるためのstr_amount*/
                str_amount = master.amounts[this.selected_amount[i]].text;
                
                /*ハーフが以外が選択されたときに、他のオプション*/
                let options = this.selected_option2[i].map(j => j.text);
                if (this.selected_amount[i] != 3 && this.selected_amount[i] != 3) {
                    /*(+10円)などをパースする*/
                    options = options.map(function(each_option,index,array){
                        let str = "";
                        if(each_option.indexOf('(') != -1){
                            let position = each_option.indexOf('(');
                            str = each_option.slice(0,position);
                        }
                        else{
                            str = each_option;
                        }
                        return str;
                    });
                    str_option2 = options.join(" ");
                }
                str_order += str_menu + " " + str_amount + " " + str_option2 + "\n";
            }
            return str_order;
        },
        /*lineのURLを生成する*/
        line_url: function() {
            let line_str = "line://msg/text/?" + encodeURIComponent("机: " + this.str_table + "\n" + this.str_order);
            return line_str;
        },
        
        /*合計値を算出する*/
        total_fee: function(){
            let sum = 0;
            for(let count = 0; count < this.number_of_people; count ++){
                let each_selected_options_arr = this.selected_option2[count];
                let a_menu_number = this.selected_menu[count];
                let a_amount = this.selected_amount[count];
                /*メニュー単体の金額を加算する*/
                sum += master.menus[a_menu_number].price;
                /*量による加算をする*/
                sum += master.amounts[a_amount].price;
                /*オプションによる加算をする*/
                if (this.selected_amount[count] != 3 && this.selected_amount[count] != 4) {
                    each_selected_options_arr.forEach(function(each_option_information){
                        sum += each_option_information.accounting;
                    })
                }
            }
            return sum;
        },
        /*オプション選択部分の背景色cssを返る*/
        classObject: function(){
            return{'dg-danger':this.LINE_error_flag}
        },
    }
});
