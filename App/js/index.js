// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        events:{"onReady":"_onready", "onRender":"_onrender"},
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"xui_ui_layout7")
                .setItems([
                    {
                        "id" : "before",
                        "pos" : "before",
                        "min" : 10,
                        "size" : 60,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : true
                    },
                    {
                        "id" : "main",
                        "min" : 10,
                        "size" : 80
                    },
                    {
                        "id" : "after",
                        "pos" : "after",
                        "min" : 10,
                        "size" : 60,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : true
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
            );
            
            host.xui_ui_layout7.append(
                xui.create("xui.UI.Tabs")
                .setHost(host,"xui_ui_tabs33")
                .setItems([
                    {
                        "id" : "b",
                        "caption" : "DDN Aurora Forward Sizing"
                    }
                ])
                .setLeft("14.476190476190476em")
                .setTop("6.095238095238095em")
                .setWidth("53.02857142857143em")
                .setHeight("53.79047619047619em")
                .setValue("b"),
                "main"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1392")
                .setLeft("1.5238095238095237em")
                .setTop("26.81904761904762em")
                .setWidth("8.838095238095239em")
                .setCaption("Usable Capacity")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1393")
                .setName("xui_ui_lblUsableCapacityTB")
                .setLeft("10.666666666666666em")
                .setTop("26.81904761904762em")
                .setWidth("9.219047619047618em")
                .setCaption("0")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1394")
                .setName("xui_ui_lblEffectiveCapacityTB")
                .setLeft("10.666666666666666em")
                .setTop("28.34285714285714em")
                .setWidth("9.219047619047618em")
                .setCaption("0")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1395")
                .setLeft("1.5238095238095237em")
                .setTop("28.34285714285714em")
                .setWidth("8.838095238095239em")
                .setCaption("Effective Capacity")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1396")
                .setLeft("1.5238095238095237em")
                .setTop("25.295238095238094em")
                .setWidth("8.838095238095239em")
                .setCaption("Raw Capacity")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1397")
                .setName("xui_ui_lblRawCapacityTB")
                .setLeft("10.666666666666666em")
                .setTop("25.295238095238094em")
                .setWidth("9.219047619047618em")
                .setCaption("0")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox59")
                .setName("xui_ui_radioboxNodeDriveDevicePopulation")
                .setItems([
                    {
                        "id" : "P",
                        "caption" : "Partial (6)",
                        "imageClass" : ""
                    },
                    {
                        "id" : "F",
                        "caption" : "Full (12)",
                        "imageClass" : ""
                    }
                ])
                .setLeft("3.0476190476190474em")
                .setTop("13.866666666666667em")
                .setWidth("54.17142857142857em")
                .setHeight("4.571428571428571em")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("Node Drive Device Population")
                .setLabelHAlign("left")
                .setValue("F")
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1398")
                .setLeft("21.333333333333332em")
                .setTop("25.295238095238094em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1399")
                .setLeft("21.333333333333332em")
                .setTop("26.81904761904762em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1400")
                .setLeft("21.333333333333332em")
                .setTop("28.34285714285714em")
                .setWidth("10.361904761904762em")
                .setCaption("TB")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1401")
                .setLeft("1.5238095238095237em")
                .setTop("23.00952380952381em")
                .setWidth("65.6em")
                .setCaption("Approximate Capacity")
                .setHAlign("left")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#4169E1",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox60")
                .setName("xui_ui_radioboxNodeDriveDeviceType")
                .setItems([
                    {
                        "id" : "15",
                        "caption" : "15.36 TB QLC-E1.s-15360",
                        "imageClass" : ""
                    },
                    {
                        "id" : "30",
                        "caption" : "30.72 TB QLC-E1.s-30720",
                        "imageClass" : ""
                    }
                ])
                .setLeft("3.0476190476190474em")
                .setTop("18.20952380952381em")
                .setWidth("54.17142857142857em")
                .setHeight("4.571428571428571em")
                .setLabelSize("1.5em")
                .setLabelPos("top")
                .setLabelCaption("Drive Device Type")
                .setLabelHAlign("left")
                .setValue("30")
                .afterUIValueSet("_refresh_tab_forward_capacity")
                .setCustomStyle({
                    "KEY" : {
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput510")
                .setName("xui_ui_comboinput_StarlingApplianceQty")
                .setLeft("22.095238095238095em")
                .setTop("11.352380952380953em")
                .setZIndex(1002)
                .setType("counter")
                .setPrecision(null)
                .setIncrement(1)
                .setMin(6)
                .setMax(10000)
                .setValue(6)
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1402")
                .setLeft("1.5238095238095237em")
                .setTop("9.066666666666666em")
                .setWidth("65.6em")
                .setCaption("DDN Aurora Appliance")
                .setHAlign("left")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#4169E1",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1403")
                .setLeft("3.0476190476190474em")
                .setTop("11.6571em")
                .setWidth("28.64761904761905em")
                .setCaption("DDN Aurora Starling RS-7313 Appliance")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1404")
                .setLeft("32.76190476190476em")
                .setTop("11.657142857142857em")
                .setWidth("10.361904761904762em")
                .setCaption("Qty (Min 6)")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1405")
                .setLeft("1.5238095238095237em")
                .setTop("31.39047619047619em")
                .setWidth("65.6em")
                .setCaption("Configuration")
                .setHAlign("left")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#4169E1",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1406")
                .setLeft("1.5238095238095237em")
                .setTop("36.72380952380952em")
                .setWidth("13.790476190476191em")
                .setCaption("RS-7313")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1407")
                .setLeft("1.5238095238095237em")
                .setTop("33.67619047619048em")
                .setWidth("14.552380952380952em")
                .setCaption("SKU")
                .setHAlign("center")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#696969"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1408")
                .setLeft("22.857142857142858em")
                .setTop("33.67619047619048em")
                .setWidth("45.79047619047619em")
                .setCaption("Description")
                .setHAlign("center")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#696969"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1409")
                .setLeft("16.761904761904763em")
                .setTop("33.67619047619048em")
                .setWidth("5.40952380952381em")
                .setCaption("Qty")
                .setHAlign("center")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#696969"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1410")
                .setLeft("22.857142857142858em")
                .setTop("36.72380952380952em")
                .setWidth("45.02857142857143em")
                .setCaption("Starling Appliance with 12x NVME u.2 slots, 4x HDR ports, power cables, rack mount kit.")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1411")
                .setName("xui_ui_labelBOMStarlingApplianceQty")
                .setLeft("16.761904761904763em")
                .setTop("36.72380952380952em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1412")
                .setName("xui_ui_labelBOMStarlingDriveDeviceQty")
                .setLeft("16.761904761904763em")
                .setTop("39.77142857142857em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1413")
                .setName("xui_ui_labelBOMStarlingDriveDeviceSKU")
                .setLeft("1.5238095238095237em")
                .setTop("39.77142857142857em")
                .setWidth("13.790476190476191em")
                .setCaption("Undefined")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1414")
                .setName("xui_ui_labelBOMStarlingDriveDeviceDescription")
                .setLeft("22.857142857142858em")
                .setTop("39.77142857142857em")
                .setWidth("45.02857142857143em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1415")
                .setName("xui_ui_labelBOMStarlingSubscriptionSKU")
                .setLeft("1.5238095238095237em")
                .setTop("50.43809523809524em")
                .setWidth("13.790476190476191em")
                .setCaption("Undefined")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1416")
                .setName("xui_ui_labelBOMStarlingSubscriptionQty")
                .setLeft("16.761904761904763em")
                .setTop("50.43809523809524em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1417")
                .setName("xui_ui_labelBOMStarlingSubscriptionDescription")
                .setLeft("22.857142857142858em")
                .setTop("50.43809523809524em")
                .setWidth("45.02857142857143em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#00FF00",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1418")
                .setLeft("1.5238095238095237em")
                .setTop("1.4476190476190476em")
                .setWidth("65.6em")
                .setCaption("Terms")
                .setHAlign("left")
                .setFontColor("#FFFFFF")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#4169E1",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1419")
                .setLeft("1.5238095238095237em")
                .setTop("3.961904761904762em")
                .setWidth("11.885714285714286em")
                .setCaption("Period of Performance")
                .setHAlign("center"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1420")
                .setLeft("13.714285714285714em")
                .setTop("3.961904761904762em")
                .setWidth("11.885714285714286em")
                .setCaption("Support Type")
                .setHAlign("center"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput511")
                .setName("xui_ui_comboinput_TermsSupportYears")
                .setLeft("26.666666666666668em")
                .setTop("5.485714285714286em")
                .setType("counter")
                .setPrecision(null)
                .setIncrement(1)
                .setMin(1)
                .setMax(5)
                .setValue(3)
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1421")
                .setLeft("25.904761904761905em")
                .setTop("3.961904761904762em")
                .setWidth("11.885714285714286em")
                .setCaption("Support Years")
                .setHAlign("center"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1422")
                .setLeft("37.333333333333336em")
                .setTop("5.79047619047619em")
                .setWidth("10.361904761904762em")
                .setCaption("Yrs (1 - 5)")
                .setHAlign("left"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput512")
                .setName("xui_ui_comboinput_TermsPeriodofPerformance")
                .setLeft("2.2857142857142856em")
                .setTop("5.485714285714286em")
                .setLabelSize("auto")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "SUP-POP-INV",
                        "caption" : "SUP-POP-INV",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "SUP-POP-30D",
                        "caption" : "SUP-POP-30D",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "SUP-POP-90D",
                        "caption" : "SUP-POP-90D",
                        "imageClass" : "xui-icon-number3"
                    },
                    {
                        "id" : "SUP-POP-ACC",
                        "caption" : "SUP-POP-ACC",
                        "imageClass" : "xui-icon-number4",
                        "disabled" : false
                    }
                ])
                .setValue("SUP-POP-INV")
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput513")
                .setName("xui_ui_comboinput_TermsSupportType")
                .setLeft("14.476190476190476em")
                .setTop("5.485714285714286em")
                .setLabelSize("auto")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "Basic Onsite",
                        "caption" : "Basic Onsite",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "Premium Onsite",
                        "caption" : "Premium Onsite",
                        "imageClass" : "xui-icon-number2"
                    }
                ])
                .setValue("Basic Onsite")
                .afterUIValueSet("_refresh_tab_forward_capacity"),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1423")
                .setLeft("1.5238095238095237em")
                .setTop("35.2em")
                .setWidth("65.6em")
                .setCaption("Storage Systems")
                .setHAlign("left")
                .setFontColor("#000000")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1424")
                .setName("xui_ui_labelBOMStarlingSupportTypeSKU")
                .setLeft("1.5238095238095237em")
                .setTop("47.39047619047619em")
                .setWidth("13.790476190476191em")
                .setCaption("Undefined")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1425")
                .setName("xui_ui_labelBOMStarlingSupportTypeDescription")
                .setLeft("22.857142857142858em")
                .setTop("47.39047619047619em")
                .setWidth("45.02857142857143em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1426")
                .setName("xui_ui_labelBOMStarlingSupportTypeQty")
                .setLeft("16.761904761904763em")
                .setTop("47.39047619047619em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1427")
                .setLeft("1.5238095238095237em")
                .setTop("44.34285714285714em")
                .setWidth("65.6em")
                .setCaption("Support and Subscriptions")
                .setHAlign("left")
                .setFontColor("#000000")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1428")
                .setLeft("1.5238095238095237em")
                .setTop("41.2952380952381em")
                .setWidth("65.6em")
                .setCaption("Other Equipment")
                .setHAlign("left")
                .setFontColor("#000000")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1429")
                .setLeft("1.5238095238095237em")
                .setTop("42.819047619047616em")
                .setWidth("65.6em")
                .setCaption("Software")
                .setHAlign("left")
                .setFontColor("#000000")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1430")
                .setName("xui_ui_labelBOMStarlingPeriodofPerformanceSKU")
                .setLeft("1.5238095238095237em")
                .setTop("45.86666666666667em")
                .setWidth("13.790476190476191em")
                .setCaption("Undefined")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1431")
                .setName("xui_ui_labelBOMStarlingPeriodofPerformanceDescription")
                .setLeft("22.857142857142858em")
                .setTop("45.86666666666667em")
                .setWidth("45.02857142857143em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1432")
                .setName("xui_ui_labelBOMStarlingPeriodofPerformanceSKU")
                .setLeft("16.761904761904763em")
                .setTop("45.86666666666667em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1433")
                .setLeft("1.5238095238095237em")
                .setTop("51.96190476190476em")
                .setWidth("65.6em")
                .setCaption("Services")
                .setHAlign("left")
                .setFontColor("#000000")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1434")
                .setLeft("1.5238095238095237em")
                .setTop("55.00952380952381em")
                .setWidth("13.790476190476191em")
                .setCaption("PSB-HW-INST")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1435")
                .setLeft("16.761904761904763em")
                .setTop("55.00952380952381em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1436")
                .setLeft("22.857142857142858em")
                .setTop("55.00952380952381em")
                .setWidth("45.02857142857143em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1437")
                .setLeft("1.5238095238095237em")
                .setTop("53.48571428571429em")
                .setWidth("13.790476190476191em")
                .setCaption("PS-CUSTOM")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1438")
                .setLeft("22.857142857142858em")
                .setTop("53.48571428571429em")
                .setWidth("45.02857142857143em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1439")
                .setLeft("16.761904761904763em")
                .setTop("53.48571428571429em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1440")
                .setLeft("1.5238095238095237em")
                .setTop("56.53333333333333em")
                .setWidth("13.790476190476191em")
                .setCaption("PSB-ONSITE")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1441")
                .setLeft("22.857142857142858em")
                .setTop("56.53333333333333em")
                .setWidth("45.02857142857143em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1442")
                .setLeft("16.761904761904763em")
                .setTop("56.53333333333333em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1443")
                .setLeft("1.5238095238095237em")
                .setTop("38.24761904761905em")
                .setWidth("65.6em")
                .setCaption("SSDs > 8TB")
                .setHAlign("left")
                .setFontColor("#000000")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#DCDCDC",
                        "padding" : "0px 0px 0px 20px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1444")
                .setName("xui_ui_labelBOMStarlingSSDSupportTypeSKU")
                .setLeft("1.5238095238095237em")
                .setTop("48.91428571428571em")
                .setWidth("13.790476190476191em")
                .setCaption("Undefined")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1445")
                .setName("xui_ui_labelBOMStarlingSSDSupportTypeQty")
                .setLeft("16.761904761904763em")
                .setTop("48.91428571428571em")
                .setWidth("4.647619047619048em")
                .setCaption(".")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 10px 0px 0px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_tabs33.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1446")
                .setName("xui_ui_labelBOMStarlingSSDSupportTypeDescription")
                .setLeft("22.857142857142858em")
                .setTop("48.91428571428571em")
                .setWidth("45.02857142857143em")
                .setCaption(".")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "background-color" : "#F5F5F5",
                        "padding" : "0px 0px 0px 10px"
                    }
                }),
                "b"
            );
            
            host.xui_ui_layout7.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1449")
                .setLeft("0.7619047619047619em")
                .setTop("0em")
                .setWidth("31.6875em")
                .setHeight("1.8125em")
                .setCaption("DataDirect Networks - Sizing Tools")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "20px"
                    }
                }),
                "before"
            );
            
            host.xui_ui_layout7.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1562")
                .setLeft("0.8333333333333334em")
                .setTop("0.16666666666666666em")
                .setWidth("63.833333333333336em")
                .setHeight("1.1666666666666667em")
                .setCaption("© 2022 DataDirect Networks, All Rights Reserved.")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "12px"
                    }
                }),
                "after"
            );
            
            host.xui_ui_layout7.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label1734")
                .setLeft("0.8333333333333334em")
                .setTop("1.5em")
                .setWidth("63.833333333333336em")
                .setHeight("1.1666666666666667em")
                .setCaption("General Enquiries: +1 818 700 4000, 9351 Deering Avenue, Chatsworth, CA 91311")
                .setHAlign("left")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "12px"
                    }
                }),
                "after"
            );
            
            host.xui_ui_layout7.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label2083")
                .setLeft("1.4285714285714286em")
                .setTop("1.4285714285714286em")
                .setWidth("31.6875em")
                .setHeight("1.8125em")
                .setCaption("Experimental - Not for Production Use")
                .setHAlign("left")
                .setFontColor("#DC143C")
                .setCustomStyle({
                    "KEY" : {
                        "font-size" : "14px",
                        "font-style" : "normal"
                    }
                }),
                "before"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        
        
                ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //
        //
        // FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS
        //
        //
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        _onready:function(){
            SPA=this;
        },
        
        _onrender:function(){
            SPA._refresh_tab_forward_capacity();
            //xui.message('_onrender');
        },
                
        _refresh_tab_forward_capacity:function(){
            
            xui.message('ok');
            
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
        
    }
    
});