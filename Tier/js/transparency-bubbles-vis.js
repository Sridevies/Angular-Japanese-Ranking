var jllTransBubbles = jllTransBubbles || {};
jllTransBubbles.config = function() {
    "use strict";
    var a = {};
    return a.regionColours = {
        アメリカ大陸: "#4DBCC6",
        ヨーロッパ: "#B0AA22",
        "中東・北アフリカ": "rgb(178, 54, 165)",
        アフリカ大陸: "#BC141A",
        アジア太平洋: "#E36307"
    }, a
}(), jllTransBubbles.data = function() {
    "use strict";
    var a = {};
    return a.data = [], a.init = function(b) {
        d3.csv("data/transparency-bubbles.csv?1", function(c, d) {
            a.data = d, b()
        })
    }, a
}(), jllTransBubbles.positions = function() {
    "use strict";
    var a = {
        アルジェリア: {
            x: 340
        },
        アンゴラ: {
            x: 57.50568357380891
        },
        アルゼンチン: {
            x: 260.29589639726623
        },
       オーストラリア: {
            x: 242.81013563030865
        },
        オーストリア: {
            x: 230.53953780589615
        },
        バハマ: {
            x: 73.82928616044254
        },
        バーレーン: {
            x: 44.89014394099924
        },
        ベラルーシ: {
            x: 205.05354177408688
        },
        ベルギー: {
            x: 50.214986150282265
        },
        ボツワナ: {
            x: 62.36920519038796
        },
        ブラジル: {
            x: 404.5665166356027
        },
        ブルガリア: {
            x: 90.52232049045597
        },
        カナダ: {
            x: 134.955617912622
        },
        "ケイマン諸島": {
            x: 415.2261197458512
        },
        チリ: {
            x: 356.1590158511537
        },
        中国: {
            x: 296.8059774434495
        },
        コロンビア: {
            x: 325.5308960359669
        },
        "コスタリカ": {
            x: 372.7552554692853
        },
        クロアチア: {
            x: 223
        },
        "チェコ共和国": {
            x: 196.0991823696934
        },
        デンマーク: {
            x: 198.85833123383702
        },
        ジブチ: {
            x: 193.8183481381251
        },
        "ドミニカ": {
            x: 241.920821737572
        },
        エクアドル: {
            x: 419.86214123680315
        },
        エジプト: {
            x: 286.6676371775925
        },
        エチオピア: {
            x: 130.56611288318743
        },
        フィンランド: {
            x: 218
        },
        フランス: {
            x: 200
        },
        ドイツ: {
            x: 357.50062412756967
        },
        ガーナ: {
            x: 105
        },
        ギリシャ: {
            x: 83
        },
        グァテマラ: {
            x: 23.846405133033144
        },
        ホンジュラス: {
            x: 426.44165125074943
        },
        "香港": {
            x: 296.96513513139803
        },
        ハンガリー: {
            x: 117.50096779720155
        },
        インド: {
            x: 229.29760042594881
        },
        インドネシア: {
            x: 281.28953186348406
        },
        イラン: {
            x: 344.69761964958445
        },
        イラク: {
            x: 93.8668175831051
        },
        アイルランド: {
            x: 145.5270355549707
        },
        イスラエル: {
            x: 116.98622572420312
        },
        イタリア: {
            x: 400
        },
        "コートジボワール": {
            x: 359.5535277096736
        },
        日本: {
            x: 134.1302579472835
        },
        ヨルダン: {
            x: 50.17789499407868
        },
        カザフスタン: {
            x: 222.68924703479138
        },
        ケニア: {
            x: 172.72880519824736
        },
        クウェート: {
            x: 268.86230546806394
        },
        レバノン: {
            x: 256
        },
        リビア: {
            x: 374
        },
        ルクセンブルグ: {
            x: 160.7540703433318
        },
        マカオ: {
            x: 112.24176650501013
        },
        マレーシア: {
            x: 259.12308906203305
        },
        モーリシャス: {
            x: 307.01345021307833
        },
        メキシコ: {
            x: 86
        },
        モロッコ: {
            x: 219.76082924497692
        },
        モザンビーク: {
            x: 302.2495869716714
        },
        ミャンマー: {
            x: 311.663775622195
        },
        オランダ: {
            x: 232.70711155349068
        },
        "ニュージーランド": {
            x: 405.6811826426371
        },
        ナイジェリア: {
            x: 124.58841017544098
        },
        ノルウェー: {
            x: 272.2531796750691
        },
        オマーン: {
            x: 74.68819842529062
        },
        パキスタン: {
            x: 140
        },
        パナマ: {
            x: 423.84308250430655
        },
        ペルー: {
            x: 60
        },
        フィリピン: {
            x: 198.8261502234862
        },
        ポーランド: {
            x: 250
        },
        ポルトガル: {
            x: 410
        },
        "プエルトリコ": {
            x: 154.30897784862614
        },
        カタール: {
            x: 87
        },
        ルーマニア: {
            x: 170
        },
        ロシア: {
            x: 125.6090382121518
        },
        ルワンダ: {
            x: 276.31499599884944
        },
        "サウジアラビア": {
            x: 207.5375615597241
        },
        セネガル: {
            x: 139.6578697368474
        },
        セルビア: {
            x: 424.45400035002166
        },
        シンガポール: {
            x: 383.71168573958806
        },
        スロバキア: {
            x: 359.37583461791786
        },
        スロベニア: {
            x: 203.0481739110726
        },
        "南アフリカ": {
            x: 181.0832756060441
        },
        "韓国": {
            x: 346.78625907927125
        },
        スペイン: {
            x: 349.6546106163518
        },
        "スリランカ": {
            x: 390
        },
        スウェーデン: {
            x: 170
        },
        スイス: {
            x: 97
        },
        台湾: {
            x: 40
        },
        タンザニア: {
            x: 407.2768871522644
        },
        タイ: {
            x: 30
        },
        チュニジア: {
            x: 176.29690844623286
        },
        トルコ: {
            x: 380
        },
        "アブダビ": {
            x: 128
        },
        "ドバイ": {
            x: 354.7688019202212
        },
        ウガンダ: {
            x: 359.7875937537032
        },
        ウクライナ: {
            x: 175.8781973466529
        },
        "英国": {
            x: 68.31682647646277
        },
        "米国": {
            x: 338.04115727450824
        },
        ウルグアイ: {
            x: 186.8090040260019
        },
        ベネズエラ: {
            x: 257.9781389768937
        },
        ベトナム: {
            x: 306.6756329247162
        },
        ザンビア: {
            x: 104.18485030540273
        }
    };
    return a
}(), jllTransBubbles.chart = function() {
    "use strict";

    function a() {
        _.each(d, function(a) {
            a.x = j(jllTransBubbles.positions[a.Country].x);
            var b = +a["Transparency Score"];
            a.y = i(b), a.r = k(+a["Real Estate Investment Universe"])
        })
    }

    function b() {
        var a = d3.select(".chart-container svg .chart .bands").selectAll("g.band").data(l),
            c = a.enter().append("g").classed("band", !0).on("mouseover", function(a) {
                e.hoveredBand = a, b()
            });
        c.append("line"), c.append("path").classed("text-border", !0).attr("transform", "translate(" + (g.width - 158) + ",-14)").attr("d", "M0,-14 l140,0 a14,14 0 1 1 0,28 l-140,0 a14,14 0 1 1 0,-28 z").style("fill", "blue").style("fill-opacity", 0), c.append("text"), c.append("image").attr("xlink:href", "images/info_icon.png").attr({
            x: g.width - 26,
            y: -23,
            width: 18,
            height: 18
        }), a.exit().remove(), a.attr("transform", function(a) {
            return "translate(0, " + i(a.bounds[1]) + ")"
        }), a.select("line").attr("x2", g.width - 180), a.select("text").attr("x", g.width - 92).attr("y", -8).text(function(a) {
            return a.label
        }), null !== e.hoveredBand ? d3.select(".band-copy").select(e.hoveredBand.copyId).style("display", "block").transition().style("opacity", 1) : d3.select(".band-copy").selectAll(".band").transition().style("opacity", 0).each("end", function() {
            d3.select(this).style("display", "none")
        }), d3.select(".chart-container .band-copy").selectAll(".band").data(l).style("top", function(a) {
            return i(a.bounds[0]) + "px"
        }).select(".background").style("min-height", function(a) {
            return i(a.bounds[1]) - i(a.bounds[0]) - 40 + "px"
        })
    }

    function c() {
        var a = h.container.select("g.countries").selectAll("g.country").data(d),
            b = a.enter().append("g").classed("country", !0).attr("transform", function(a) {
                return "translate(" + a.x + "," + a.y + ")"
            }).on("mouseover", function(a) {
                e.hoveredCountry = a, jllTransBubbles.main.update()
            }).on("mouseout", function(a) {
                e.hoveredCountry = null, jllTransBubbles.main.update()
            }).on("click", function(a) {
                jllTransBubbles.main.selectCountry(null)
            });
        b.append("circle").style("opacity", 0).style("fill", function(a) {
            return jllTransBubbles.config.regionColours[a.Region]
        }), a.exit().remove(), a.transition().duration(1e3).attr("transform", function(a) {
            return "translate(" + a.x + "," + a.y + ")"
        }), a.select("circle").classed("selected", function(a) {
            var b = jllTransBubbles.main.state.selectedCountry;
            return null !== b && a.Country === b.Country
        }).transition().attr("r", function(a) {
            return a.r
        }).style("opacity", function(a) {
            var b = "All Regions" === e.mode && ("All" === e.region || e.region === a.Region) || "Top Improvers" === e.mode && "Y" === a["Top Improver"] && ("All" === e.region || e.region === a.Region);
            return b ? 1 : .1
        })
    }
    var d, e, f = {},
        g = {
            width: 920,
            height: 1e3
        },
        h = {},
        i = d3.scale.linear().domain([1, 4.8]).range([0, g.height]),
        j = d3.scale.linear().domain([0, 530]).range([0, g.width]),
        k = d3.scale.sqrt().domain([0, 2522352.253]).range([6, 60]),
        l = [{
            id: "opaque",
            label: "低",
            bounds: [3.97, 4.8],
            copyId: "#opaque-copy"
        }, {
            id: "low",
            label: "中低",
            bounds: [3.46, 3.97],
            copyId: "#low-copy"
        }, {
            id: "semi",
            label: "中",
            bounds: [2.45, 3.46],
            copyId: "#semi-copy"
        }, {
            id: "transparent",
            label: "中高",
            bounds: [1.7, 2.45],
            copyId: "#transparent-copy"
        }, {
            id: "high",
            label: "高",
            bounds: [1, 1.7],
            copyId: "#highly-transparent-copy"
        }];
    return f.update = function() {
        c(), b()
    }, f.getDatum = function(a) {
        var b;
        return h.container.selectAll("g.country").each(function(c) {
            c.Country === a && (b = c)
        }), b
    }, f.init = function(c, f) {
        d = c, e = f, h.container = d3.select("#transparency-bubbles .chart-container svg"), d3.selectAll(".band").on("mouseout", function() {
            e.hoveredBand = null, b()
        }), a()
    }, f
}(), jllTransBubbles.topMenu = function() {
    "use strict";
    var a = {},
        b = [{
            id: "All Regions"
        }, {
            id: "Top Improvers"
        }];
    return a.update = function() {
        var a = jllTransBubbles.main.state.mode;
        d3.select(".top-menu").selectAll(".item").classed("selected", function(b) {
            return b.id === a
        })
    }, a.init = function() {
        d3.select(".top-menu").selectAll(".item").data(b).on("click", function(a) {
            jllTransBubbles.main.state.mode = a.id, jllTransBubbles.main.state.region = "All", jllTransBubbles.main.update()
        })
    }, a
}(), jllTransBubbles.description = function() {
    "use strict";
    var a = {};
    return a.update = function() {
        var a = jllTransBubbles.main.state.mode;
        d3.select(".description .all-regions.copy").classed("active", "All Regions" === a), d3.select(".description .major-movers.copy").classed("active", "Top Improvers" === a)
    }, a
}(), jllTransBubbles.search = function() {
    "use strict";
    var a = {};
    return a.init = function() {
        var a = _.map(jllTransBubbles.data.data, function(a) {
                return a.Country
            }),
            b = jQuery110(".search input");
        b.typeahead({
            name: "Search",
            local: a
        }), b.on("typeahead:selected", function(a, c) {
            var d = c.value,
                e = jllTransBubbles.chart.getDatum(d);
            jllTransBubbles.main.selectCountry(e), b.typeahead("setQuery", "")
        })
    }, a
}(), jllTransBubbles.regionMenu = function() {
    "use strict";
    var a = {},
        b = [{
            id: "アメリカ大陸"
        }, {
            id: "ヨーロッパ"
        }, {
            id: "中東・北アフリカ"
        }, {
            id: "アフリカ大陸"
        }, {
            id: "アジア太平洋"
        }];
    return a.update = function() {
        var a = jllTransBubbles.main.state.region;
        d3.select(".region-menu").selectAll(".item").select("path").style("filter", function(b) {
            return b.id === a ? "none" : "url(#dropshadow)"
        }), d3.select(".region-menu").selectAll(".item").select("g.button circle").style("fill", function(b) {
            return b.id === a ? "white" : jllTransBubbles.config.regionColours[b.id]
        }), d3.select(".region-menu").selectAll(".item").select("text").style("fill", function(a) {
            return "white"
        }), d3.select(".region-menu").selectAll(".item").select(".background").style("fill", function(b) {
            return b.id === a ? jllTransBubbles.config.regionColours[b.id] : "#245281"
        })
    }, a.init = function() {
        d3.select(".region-menu").selectAll(".item").data(b).on("click", function(a) {
            a.id === jllTransBubbles.main.state.region ? jllTransBubbles.main.state.region = "All" : jllTransBubbles.main.state.region = a.id, jllTransBubbles.main.update()
        })
    }, a
}(), jllTransBubbles.tooltip = function() {
    "use strict";
    var a, b = {},
        c = d3.select(".tooltip"),
        d = 10,
        e = d3.select(".tooltip").node();
    return b.update = function() {
        var b = null !== a.selectedCountry ? a.selectedCountry : a.hoveredCountry;
        if (null === b) return void c.transition().style("opacity", 0);
        c.transition().style("opacity", 1), c.select(".name").text(b.Country), c.select(".transparency-category .value").text(b.Transparency), c.select(".transparency-rank .value").text(b["Transparency Rank"]), c.select(".real-estate-market-size .value").text(b["Investment Universe Rank"]), c.select(".more .value").text(b["Top Improver Text"]);
        var f = e.clientWidth,
            g = e.clientHeight;
        c.style("top", b.y > 500 ? b.y - d - g + "px" : b.y + d + "px").style("left", b.x > 300 ? b.x - d - f + "px" : b.x + d + "px")
    }, b.init = function() {
        a = jllTransBubbles.main.state
    }, b
}(), jllTransBubbles.main = function() {
    "use strict";

    function a() {
        jllTransBubbles.chart.init(jllTransBubbles.data.data, b.state), jllTransBubbles.search.init(), b.update()
    }
    var b = {};
    b.state = {
        mode: "All Regions",
        region: "All",
        hoveredCountry: null,
        hoveredBand: null,
        selectedCountry: null
    };
    return b.selectCountry = function(a) {
        b.state.selectedCountry = a, b.update()
    }, b.update = function() {
        jllTransBubbles.chart.update(), jllTransBubbles.regionMenu.update(), jllTransBubbles.topMenu.update(), jllTransBubbles.tooltip.update(), jllTransBubbles.description.update()
    }, b.go = function() {
        jllTransBubbles.data.init(a), jllTransBubbles.topMenu.init(), jllTransBubbles.regionMenu.init(), jllTransBubbles.tooltip.init(), d3.select(".chart-container").on("click", function() {
            jllTransBubbles.main.selectCountry(null)
        })
    }, b
}(), jllTransBubbles.main.go();